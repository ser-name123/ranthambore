'use client';

import React, { useEffect, useRef, useState } from 'react';
import { EditorContent, useEditor, useEditorState, type Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TextAlign from '@tiptap/extension-text-align';
import { Color, TextStyle } from '@tiptap/extension-text-style';
import Highlight from '@tiptap/extension-highlight';
import { Table, TableCell, TableHeader, TableRow } from '@tiptap/extension-table';
import Image from '@tiptap/extension-image';
import { CharacterCount, Placeholder } from '@tiptap/extensions';
import {
  AlignCenter, AlignJustify, AlignLeft, AlignRight, Baseline, Bold, Code2, Eraser, Heading2, Heading3, Heading4, Highlighter,
  ImagePlus, Italic, Link2, Link2Off, List, ListOrdered, Loader2, Maximize2, Minimize2, Minus, Pilcrow, Quote, Redo2,
  Strikethrough, Table as TableIcon, Underline as UnderlineIcon, Undo2,
} from 'lucide-react';
import { isEmptyHtml, markdownToHtml } from '@/lib/rich-text';

export type RichTextMode = 'simple' | 'full';

const TEXT_COLORS = ['#082318', '#047857', '#d97706', '#ea580c', '#b91c1c', '#1d4ed8', '#6d28d9', '#517362'];
const HIGHLIGHTS = ['#fef3c7', '#d1fae5', '#dbeafe', '#fce7f3', '#fee2e2'];

function buildExtensions(mode: RichTextMode, placeholder: string) {
  const full = mode === 'full';
  return [
    StarterKit.configure({
      heading: full ? { levels: [2, 3, 4] } : false,
      blockquote: full ? {} : false,
      codeBlock: full ? {} : false,
      horizontalRule: full ? {} : false,
      bulletList: full ? {} : false,
      orderedList: full ? {} : false,
      listItem: full ? {} : false,
      link: { openOnClick: false, autolink: true, defaultProtocol: 'https' },
    }),
    TextStyle,
    Color,
    Highlight.configure({ multicolor: true }),
    TextAlign.configure({ types: ['heading', 'paragraph'] }),
    Placeholder.configure({ placeholder }),
    CharacterCount,
    ...(full ? [Table.configure({ resizable: false }), TableRow, TableHeader, TableCell, Image] : []),
  ];
}

function Btn({ title, active, disabled, onClick, children }: { title: string; active?: boolean; disabled?: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      title={title}
      aria-label={title}
      aria-pressed={active}
      disabled={disabled}
      onMouseDown={(e) => e.preventDefault()} // keep the text selection
      onClick={onClick}
      className={`flex h-8 min-w-8 cursor-pointer items-center justify-center rounded-md px-1.5 text-[#284838] transition disabled:cursor-not-allowed disabled:opacity-30 ${
        active ? 'bg-emerald-700 text-white' : 'hover:bg-[#e4efe8]'
      }`}
    >
      {children}
    </button>
  );
}

const Sep = () => <span className="mx-0.5 h-5 w-px self-center bg-[#d2e4d9]" />;

function Swatches({ colors, onPick, onClear, clearLabel }: { colors: string[]; onPick: (c: string) => void; onClear: () => void; clearLabel: string }) {
  return (
    <div className="absolute left-0 top-full z-30 mt-1 flex w-max items-center gap-1 rounded-lg border border-[#d2e4d9] bg-white p-1.5 shadow-lg">
      {colors.map((c) => (
        <button key={c} type="button" title={c} onMouseDown={(e) => e.preventDefault()} onClick={() => onPick(c)} className="h-6 w-6 cursor-pointer rounded border border-black/10" style={{ background: c }} />
      ))}
      <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={onClear} className="ml-1 cursor-pointer rounded px-1.5 py-1 text-[11px] font-semibold text-[#517362] hover:bg-[#f0f6f2]">
        {clearLabel}
      </button>
    </div>
  );
}

function Toolbar({ editor, mode, source, setSource, fullscreen, setFullscreen, onError, onApplySource }: {
  editor: Editor;
  mode: RichTextMode;
  source: string | null;
  setSource: (s: string | null) => void;
  fullscreen: boolean;
  setFullscreen: (v: boolean) => void;
  onError: (m: string) => void;
  onApplySource: () => void;
}) {
  const s = useEditorState({
    editor,
    selector: ({ editor: e }) => ({
      bold: e.isActive('bold'),
      italic: e.isActive('italic'),
      underline: e.isActive('underline'),
      strike: e.isActive('strike'),
      h2: e.isActive('heading', { level: 2 }),
      h3: e.isActive('heading', { level: 3 }),
      h4: e.isActive('heading', { level: 4 }),
      bullet: e.isActive('bulletList'),
      ordered: e.isActive('orderedList'),
      quote: e.isActive('blockquote'),
      code: e.isActive('codeBlock'),
      link: e.isActive('link'),
      table: e.isActive('table'),
      align: (['left', 'center', 'right', 'justify'] as const).find((a) => e.isActive({ textAlign: a })) ?? 'left',
      canUndo: e.can().undo(),
      canRedo: e.can().redo(),
    }),
  });
  const [menu, setMenu] = useState<'color' | 'highlight' | 'link' | null>(null);
  const [linkUrl, setLinkUrl] = useState('');
  const [newTab, setNewTab] = useState(false);
  const [uploading, setUploading] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);
  const full = mode === 'full';
  const c = () => editor.chain().focus();
  const inSource = source !== null;

  const openLink = () => {
    const attrs = editor.getAttributes('link');
    setLinkUrl(attrs.href ?? '');
    setNewTab(attrs.target === '_blank');
    setMenu(menu === 'link' ? null : 'link');
  };
  const applyLink = () => {
    const href = linkUrl.trim();
    if (!href) c().extendMarkRange('link').unsetLink().run();
    else c().extendMarkRange('link').setLink({ href, target: newTab ? '_blank' : null }).run();
    setMenu(null);
  };

  const uploadImage = async (file: File) => {
    setUploading(true);
    try {
      const body = new FormData();
      body.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      c().setImage({ src: data.url, alt: file.name.replace(/\.[^.]+$/, '').replace(/[-_]+/g, ' ') }).run();
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  return (
    <div className="relative border-b border-[#d2e4d9] bg-[#f7faf8]">
      <div className="flex flex-wrap items-center gap-0.5 p-1.5">
        <Btn title="Undo (Ctrl+Z)" disabled={inSource || !s.canUndo} onClick={() => c().undo().run()}><Undo2 className="h-4 w-4" /></Btn>
        <Btn title="Redo (Ctrl+Y)" disabled={inSource || !s.canRedo} onClick={() => c().redo().run()}><Redo2 className="h-4 w-4" /></Btn>
        <Sep />
        {full && (
          <>
            <Btn title="Normal text" disabled={inSource} active={!s.h2 && !s.h3 && !s.h4} onClick={() => c().setParagraph().run()}><Pilcrow className="h-4 w-4" /></Btn>
            <Btn title="Big heading" disabled={inSource} active={s.h2} onClick={() => c().toggleHeading({ level: 2 }).run()}><Heading2 className="h-4 w-4" /></Btn>
            <Btn title="Medium heading" disabled={inSource} active={s.h3} onClick={() => c().toggleHeading({ level: 3 }).run()}><Heading3 className="h-4 w-4" /></Btn>
            <Btn title="Small heading" disabled={inSource} active={s.h4} onClick={() => c().toggleHeading({ level: 4 }).run()}><Heading4 className="h-4 w-4" /></Btn>
            <Sep />
          </>
        )}
        <Btn title="Bold (Ctrl+B)" disabled={inSource} active={s.bold} onClick={() => c().toggleBold().run()}><Bold className="h-4 w-4" /></Btn>
        <Btn title="Italic (Ctrl+I)" disabled={inSource} active={s.italic} onClick={() => c().toggleItalic().run()}><Italic className="h-4 w-4" /></Btn>
        <Btn title="Underline (Ctrl+U)" disabled={inSource} active={s.underline} onClick={() => c().toggleUnderline().run()}><UnderlineIcon className="h-4 w-4" /></Btn>
        <Btn title="Strike through" disabled={inSource} active={s.strike} onClick={() => c().toggleStrike().run()}><Strikethrough className="h-4 w-4" /></Btn>
        <div className="relative">
          <Btn title="Text colour" disabled={inSource} active={menu === 'color'} onClick={() => setMenu(menu === 'color' ? null : 'color')}><Baseline className="h-4 w-4" /></Btn>
          {menu === 'color' && (
            <Swatches colors={TEXT_COLORS} clearLabel="Default" onPick={(col) => { c().setColor(col).run(); setMenu(null); }} onClear={() => { c().unsetColor().run(); setMenu(null); }} />
          )}
        </div>
        <div className="relative">
          <Btn title="Highlight" disabled={inSource} active={menu === 'highlight'} onClick={() => setMenu(menu === 'highlight' ? null : 'highlight')}><Highlighter className="h-4 w-4" /></Btn>
          {menu === 'highlight' && (
            <Swatches colors={HIGHLIGHTS} clearLabel="None" onPick={(col) => { c().setHighlight({ color: col }).run(); setMenu(null); }} onClear={() => { c().unsetHighlight().run(); setMenu(null); }} />
          )}
        </div>
        <Sep />
        <Btn title="Add / edit link" disabled={inSource} active={s.link || menu === 'link'} onClick={openLink}><Link2 className="h-4 w-4" /></Btn>
        {s.link && <Btn title="Remove link" disabled={inSource} onClick={() => c().extendMarkRange('link').unsetLink().run()}><Link2Off className="h-4 w-4" /></Btn>}
        {full && (
          <>
            <Sep />
            <Btn title="Bullet list" disabled={inSource} active={s.bullet} onClick={() => c().toggleBulletList().run()}><List className="h-4 w-4" /></Btn>
            <Btn title="Numbered list" disabled={inSource} active={s.ordered} onClick={() => c().toggleOrderedList().run()}><ListOrdered className="h-4 w-4" /></Btn>
            <Btn title="Quote" disabled={inSource} active={s.quote} onClick={() => c().toggleBlockquote().run()}><Quote className="h-4 w-4" /></Btn>
            <Sep />
            <Btn title="Align left" disabled={inSource} active={s.align === 'left'} onClick={() => c().setTextAlign('left').run()}><AlignLeft className="h-4 w-4" /></Btn>
            <Btn title="Align centre" disabled={inSource} active={s.align === 'center'} onClick={() => c().setTextAlign('center').run()}><AlignCenter className="h-4 w-4" /></Btn>
            <Btn title="Align right" disabled={inSource} active={s.align === 'right'} onClick={() => c().setTextAlign('right').run()}><AlignRight className="h-4 w-4" /></Btn>
            <Btn title="Justify" disabled={inSource} active={s.align === 'justify'} onClick={() => c().setTextAlign('justify').run()}><AlignJustify className="h-4 w-4" /></Btn>
            <Sep />
            <Btn title="Insert table" disabled={inSource || s.table} onClick={() => c().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run()}><TableIcon className="h-4 w-4" /></Btn>
            <Btn title="Insert image (upload)" disabled={inSource || uploading} onClick={() => fileRef.current?.click()}>
              {uploading ? <Loader2 className="h-4 w-4 animate-spin" /> : <ImagePlus className="h-4 w-4" />}
            </Btn>
            <Btn title="Divider line" disabled={inSource} onClick={() => c().setHorizontalRule().run()}><Minus className="h-4 w-4" /></Btn>
            <input ref={fileRef} type="file" accept="image/jpeg,image/png,image/webp,image/avif" className="hidden" onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0])} />
          </>
        )}
        <Sep />
        <Btn title="Clear formatting" disabled={inSource} onClick={() => c().unsetAllMarks().clearNodes().run()}><Eraser className="h-4 w-4" /></Btn>
        {full && (
          <Btn
            title={inSource ? 'Back to the editor' : 'Edit HTML source'}
            active={inSource}
            onClick={() => {
              if (inSource) {
                editor.commands.setContent(source || '', { emitUpdate: false });
                onApplySource();
                setSource(null);
              } else {
                setSource(editor.getHTML());
              }
            }}
          >
            <Code2 className="h-4 w-4" />
          </Btn>
        )}
        <Btn title={fullscreen ? 'Exit full screen' : 'Full screen'} onClick={() => setFullscreen(!fullscreen)}>
          {fullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
        </Btn>
      </div>

      {s.table && !inSource && (
        <div className="flex flex-wrap items-center gap-1 border-t border-[#e2ede6] px-2 py-1.5 text-[11px] font-semibold">
          <span className="mr-1 text-[#517362]">Table:</span>
          {([
            ['+ Row above', () => c().addRowBefore().run()],
            ['+ Row below', () => c().addRowAfter().run()],
            ['+ Column left', () => c().addColumnBefore().run()],
            ['+ Column right', () => c().addColumnAfter().run()],
            ['− Row', () => c().deleteRow().run()],
            ['− Column', () => c().deleteColumn().run()],
            ['Header row on/off', () => c().toggleHeaderRow().run()],
            ['Merge / split cells', () => c().mergeOrSplit().run()],
          ] as const).map(([label, run]) => (
            <button key={label} type="button" onMouseDown={(e) => e.preventDefault()} onClick={run} className="cursor-pointer rounded border border-[#d2e4d9] bg-white px-2 py-1 text-[#284838] hover:bg-[#f0f6f2]">
              {label}
            </button>
          ))}
          <button type="button" onMouseDown={(e) => e.preventDefault()} onClick={() => c().deleteTable().run()} className="cursor-pointer rounded border border-rose-200 bg-rose-50 px-2 py-1 text-rose-700 hover:bg-rose-100">
            Delete table
          </button>
        </div>
      )}

      {menu === 'link' && (
        <div className="flex flex-wrap items-center gap-2 border-t border-[#e2ede6] px-2 py-2">
          <input
            autoFocus
            value={linkUrl}
            onChange={(e) => setLinkUrl(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') { e.preventDefault(); applyLink(); }
              if (e.key === 'Escape') setMenu(null);
            }}
            placeholder="https://… or /page-url or mailto:… or tel:…"
            className="min-w-0 flex-1 rounded-md border border-[#c4dcce] bg-white px-2.5 py-1.5 text-xs focus:border-emerald-600 focus:outline-none"
          />
          <label className="flex items-center gap-1.5 text-xs font-semibold text-[#183d2a]">
            <input type="checkbox" checked={newTab} onChange={(e) => setNewTab(e.target.checked)} className="accent-emerald-700" /> Open in new tab
          </label>
          <button type="button" onClick={applyLink} className="cursor-pointer rounded-md bg-emerald-700 px-3 py-1.5 text-xs font-bold text-white hover:bg-emerald-800">Apply</button>
          <button type="button" onClick={() => setMenu(null)} className="cursor-pointer rounded-md px-2 py-1.5 text-xs font-semibold text-[#517362] hover:bg-[#f0f6f2]">Cancel</button>
        </div>
      )}
    </div>
  );
}

/**
 * Rich text editor for admin text fields. Stores HTML; older plain/markdown values are opened formatted.
 * "simple" is for short texts (bold, italic, colour, links); "full" adds headings, lists, alignment,
 * tables, images, quotes and HTML source editing.
 */
export default function RichTextEditor({ label, hint, value, onChange, mode = 'simple', rows = 3, placeholder = 'Start typing…', onError }: {
  label: string;
  hint?: string;
  value: string;
  onChange: (html: string) => void;
  mode?: RichTextMode;
  rows?: number;
  placeholder?: string;
  onError?: (message: string) => void;
}) {
  const lastEmitted = useRef(value);
  // Always call the latest onChange: the editor keeps its first options, and an old
  // callback would write back stale data for the other fields of the same section.
  const onChangeRef = useRef(onChange);
  useEffect(() => {
    onChangeRef.current = onChange;
  });
  const [source, setSource] = useState<string | null>(null);
  const [fullscreen, setFullscreen] = useState(false);
  const minHeight = `${Math.max(rows, 2) * 1.7 + 1}rem`;

  const emit = (e: Editor) => {
    const html = e.getHTML();
    const out = isEmptyHtml(html) ? '' : html;
    if (out === lastEmitted.current) return;
    lastEmitted.current = out;
    onChangeRef.current(out);
  };

  const editor = useEditor({
    immediatelyRender: false, // avoids SSR hydration mismatches in Next.js
    extensions: buildExtensions(mode, placeholder),
    content: markdownToHtml(value),
    editorProps: {
      attributes: {
        class: 'rich-content max-w-none px-3.5 py-3 text-sm leading-relaxed text-[#1b3a2a] focus:outline-none',
        style: `min-height:${minHeight}`,
      },
    },
    // Only real edits count: Tiptap also fires updates when it normalises content on load,
    // which must not mark the form as changed. Toolbar actions focus the editor first.
    onUpdate: ({ editor: e }) => {
      if (e.isFocused) emit(e);
    },
  });

  // Value replaced from outside (Discard, History "Load", another tab of the same form).
  useEffect(() => {
    if (!editor || value === lastEmitted.current) return;
    lastEmitted.current = value;
    editor.commands.setContent(markdownToHtml(value), { emitUpdate: false });
  }, [editor, value]);

  // Esc leaves full screen.
  useEffect(() => {
    if (!fullscreen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setFullscreen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [fullscreen]);

  const words = editor?.storage.characterCount?.words() ?? 0;
  const chars = editor?.storage.characterCount?.characters() ?? 0;

  return (
    <div className={fullscreen ? 'fixed inset-0 z-[70] flex flex-col bg-white p-4 sm:p-8' : 'block'}>
      <div className="mb-1 flex items-baseline justify-between gap-2">
        <span className="block text-xs font-semibold text-[#183d2a]">{label}</span>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-[#8aa596]">{mode === 'full' ? 'Rich text' : 'Formatted text'}</span>
      </div>
      <div className={`overflow-hidden rounded-lg border border-[#c4dcce] bg-white transition focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/15 ${fullscreen ? 'flex flex-1 flex-col' : ''}`}>
        {editor ? (
          <>
            <Toolbar
              editor={editor}
              mode={mode}
              source={source}
              setSource={setSource}
              onApplySource={() => emit(editor)}
              fullscreen={fullscreen}
              setFullscreen={setFullscreen}
              onError={(m) => (onError ? onError(m) : window.alert(m))}
            />
            {source !== null ? (
              <textarea
                value={source}
                onChange={(e) => setSource(e.target.value)}
                spellCheck={false}
                className={`w-full resize-y bg-[#0f1f17] p-3 font-mono text-xs leading-relaxed text-emerald-100 focus:outline-none ${fullscreen ? 'flex-1' : ''}`}
                style={{ minHeight }}
              />
            ) : (
              <div className={fullscreen ? 'flex-1 overflow-y-auto' : 'max-h-[28rem] overflow-y-auto'}>
                <EditorContent editor={editor} />
              </div>
            )}
            <div className="flex items-center justify-between border-t border-[#e2ede6] bg-[#fafcfb] px-3 py-1 text-[10px] text-[#8aa596]">
              <span>{source !== null ? 'Editing HTML — press the </> button again to go back' : 'Tip: select text, then use the toolbar'}</span>
              <span>{words} words · {chars} characters</span>
            </div>
          </>
        ) : (
          <div className="flex items-center gap-2 px-3.5 py-3 text-xs text-[#517362]" style={{ minHeight }}>
            <Loader2 className="h-3.5 w-3.5 animate-spin" /> Loading editor…
          </div>
        )}
      </div>
      {hint && <span className="mt-1 block text-[11px] text-[#517362]">{hint}</span>}
    </div>
  );
}
