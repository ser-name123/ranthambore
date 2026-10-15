'use client';

import React, { useRef, useState } from 'react';
import { ArrowDown, ArrowUp, ChevronDown, ImagePlus, Loader2, Plus, Save, Trash2, Undo2 } from 'lucide-react';
import { SITE_IMAGES } from '@/lib/site-content';

export const inputClass =
  'w-full rounded-lg border border-[#c4dcce] bg-white px-3 py-2 text-sm text-[#082318] placeholder:text-[#8aa596] focus:border-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600/15 transition';

export function Field({ label, hint, children, className = '' }: { label: string; hint?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={`block ${className}`}>
      <span className="mb-1 block text-xs font-semibold text-[#183d2a]">{label}</span>
      {children}
      {hint && <span className="mt-1 block text-[11px] text-[#517362]">{hint}</span>}
    </label>
  );
}

export function TextInput({ label, hint, value, onChange, className, ...rest }: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  className?: string;
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>) {
  return (
    <Field label={label} hint={hint} className={className}>
      <input {...rest} value={value} onChange={(e) => onChange(e.target.value)} className={inputClass} />
    </Field>
  );
}

export function TextArea({ label, hint, value, onChange, rows = 3, className }: {
  label: string;
  hint?: string;
  value: string;
  onChange: (v: string) => void;
  rows?: number;
  className?: string;
}) {
  return (
    <Field label={label} hint={hint} className={className}>
      <textarea rows={rows} value={value} onChange={(e) => onChange(e.target.value)} className={`${inputClass} resize-y leading-relaxed`} />
    </Field>
  );
}

export function NumberInput({ label, hint, value, onChange, step = 1, min, max, className }: {
  label: string;
  hint?: string;
  value: number;
  onChange: (v: number) => void;
  step?: number;
  min?: number;
  max?: number;
  className?: string;
}) {
  return (
    <Field label={label} hint={hint} className={className}>
      <input
        type="number"
        value={Number.isFinite(value) ? value : ''}
        step={step}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value === '' ? 0 : Number(e.target.value))}
        className={inputClass}
      />
    </Field>
  );
}

export function SelectInput<T extends string>({ label, value, onChange, options, className }: {
  label: string;
  value: T;
  onChange: (v: T) => void;
  options: { value: T; label: string }[];
  className?: string;
}) {
  return (
    <Field label={label} className={className}>
      <select value={value} onChange={(e) => onChange(e.target.value as T)} className={inputClass}>
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </Field>
  );
}

export function Toggle({ label, checked, onChange }: { label: string; checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <label className="inline-flex cursor-pointer items-center gap-2 text-xs font-semibold text-[#183d2a]">
      <input type="checkbox" checked={checked} onChange={(e) => onChange(e.target.checked)} className="h-4 w-4 accent-emerald-700" />
      {label}
    </label>
  );
}

export function Card({ title, description, children, actions }: {
  title?: string;
  description?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-[#d2e4d9] bg-white p-4 shadow-sm sm:p-5">
      {(title || actions) && (
        <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
          <div>
            {title && <h3 className="text-sm font-bold text-[#082318]">{title}</h3>}
            {description && <p className="mt-0.5 text-xs text-[#517362]">{description}</p>}
          </div>
          {actions}
        </div>
      )}
      <div className="space-y-4">{children}</div>
    </section>
  );
}

export function Button({ children, variant = 'primary', className = '', ...rest }: {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const styles = {
    primary: 'bg-emerald-700 text-white hover:bg-emerald-800 shadow-sm',
    secondary: 'border border-[#c4dcce] bg-white text-[#082318] hover:bg-[#f0f6f2]',
    danger: 'border border-rose-200 bg-rose-50 text-rose-700 hover:bg-rose-100',
    ghost: 'text-[#375847] hover:bg-[#f0f6f2]',
  }[variant];
  return (
    <button
      type="button"
      {...rest}
      className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3 py-2 text-xs font-bold transition disabled:cursor-not-allowed disabled:opacity-50 ${styles} ${className}`}
    >
      {children}
    </button>
  );
}

/** Sticky footer with save/discard for a content section. */
export function SaveBar({ dirty, saving, onSave, onDiscard, updatedAt }: {
  dirty: boolean;
  saving: boolean;
  onSave: () => void;
  onDiscard: () => void;
  updatedAt?: string;
}) {
  return (
    <div className="sticky bottom-0 z-10 -mx-4 mt-6 border-t border-[#d2e4d9] bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
        <p className="text-xs text-[#517362]">
          {dirty ? (
            <span className="font-semibold text-[#b45309]">You have unsaved changes</span>
          ) : updatedAt ? (
            <>Last saved {new Date(updatedAt).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}</>
          ) : (
            <>Showing default website content</>
          )}
        </p>
        <div className="flex gap-2">
          <Button variant="secondary" onClick={onDiscard} disabled={!dirty || saving}>
            <Undo2 className="h-3.5 w-3.5" /> Discard
          </Button>
          <Button onClick={onSave} disabled={!dirty || saving}>
            {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
            {saving ? 'Saving…' : 'Save & Publish'}
          </Button>
        </div>
      </div>
    </div>
  );
}

/** Editable, reorderable list of cards. */
export function ListEditor<T>({ items, onChange, newItem, itemLabel, renderItem, addLabel = 'Add item', min = 0, hideAdd = false, itemTag }: {
  items: T[];
  onChange: (items: T[]) => void;
  newItem: () => T;
  itemLabel: (item: T, index: number) => string;
  renderItem: (item: T, update: (patch: Partial<T>) => void, index: number) => React.ReactNode;
  addLabel?: string;
  min?: number;
  hideAdd?: boolean;
  itemTag?: (item: T) => string;
}) {
  const [open, setOpen] = useState<number | null>(items.length <= 1 ? 0 : null);

  const move = (from: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const next = [...items];
    const [moved] = next.splice(from, 1);
    next.splice(to, 0, moved);
    onChange(next);
    setOpen(open === from ? to : open);
  };

  return (
    <div className="space-y-2.5">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={i} className={`rounded-xl border bg-white transition ${isOpen ? 'border-emerald-500 shadow-sm' : 'border-[#d2e4d9]'}`}>
            <div className="flex items-center gap-2 px-3 py-2.5">
              <button type="button" onClick={() => setOpen(isOpen ? null : i)} className="flex min-w-0 flex-1 cursor-pointer items-center gap-2 text-left">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-50 text-[11px] font-bold text-emerald-800">{i + 1}</span>
                {itemTag && <span className="shrink-0 rounded bg-[#f0f6f2] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[#517362]">{itemTag(item)}</span>}
                <span className="truncate text-sm font-semibold text-[#082318]">{itemLabel(item, i) || 'Untitled'}</span>
                <ChevronDown className={`ml-auto h-4 w-4 shrink-0 text-[#517362] transition ${isOpen ? 'rotate-180' : ''}`} />
              </button>
              <div className="flex shrink-0 items-center gap-0.5">
                <IconButton label="Move up" onClick={() => move(i, i - 1)} disabled={i === 0}><ArrowUp className="h-3.5 w-3.5" /></IconButton>
                <IconButton label="Move down" onClick={() => move(i, i + 1)} disabled={i === items.length - 1}><ArrowDown className="h-3.5 w-3.5" /></IconButton>
                <IconButton
                  label="Delete"
                  danger
                  disabled={items.length <= min}
                  onClick={() => {
                    if (!confirm(`Delete "${itemLabel(item, i) || 'this item'}"?`)) return;
                    onChange(items.filter((_, idx) => idx !== i));
                    setOpen(null);
                  }}
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </IconButton>
              </div>
            </div>
            {isOpen && (
              <div className="space-y-4 border-t border-[#e2ede6] p-3 sm:p-4">
                {renderItem(item, (patch) => onChange(items.map((it, idx) => (idx === i ? { ...it, ...patch } : it))), i)}
              </div>
            )}
          </div>
        );
      })}
      {!hideAdd && <Button
        variant="secondary"
        className="w-full border-dashed py-2.5"
        onClick={() => {
          onChange([...items, newItem()]);
          setOpen(items.length);
        }}
      >
        <Plus className="h-3.5 w-3.5" /> {addLabel}
      </Button>}
    </div>
  );
}

function IconButton({ label, onClick, disabled, danger, children }: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  danger?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      title={label}
      aria-label={label}
      onClick={onClick}
      disabled={disabled}
      className={`cursor-pointer rounded-md p-1.5 transition disabled:cursor-not-allowed disabled:opacity-30 ${
        danger ? 'text-rose-600 hover:bg-rose-50' : 'text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]'
      }`}
    >
      {children}
    </button>
  );
}

/** One line per entry, for simple string lists (highlights, points…). */
export function LinesInput({ label, hint, value, onChange, rows = 4 }: {
  label: string;
  hint?: string;
  value: string[];
  onChange: (v: string[]) => void;
  rows?: number;
}) {
  const parse = (t: string) => t.split('\n').map((l) => l.trim()).filter(Boolean);
  const [text, setText] = useState(value.join('\n'));
  // Local text keeps blank/trailing lines while typing; resync if the value changed elsewhere (e.g. Discard).
  if (parse(text).join('\n') !== value.join('\n')) setText(value.join('\n'));
  return (
    <TextArea
      label={label}
      hint={hint ?? 'One per line'}
      rows={rows}
      value={text}
      onChange={(t) => {
        setText(t);
        onChange(parse(t));
      }}
    />
  );
}

export function ImagePicker({ label, value, onChange, onError }: {
  label: string;
  value: string;
  onChange: (url: string) => void;
  onError: (message: string) => void;
}) {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);

  const upload = async (file: File) => {
    setUploading(true);
    try {
      const body = new FormData();
      body.append('file', file);
      const res = await fetch('/api/admin/upload', { method: 'POST', body });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Upload failed');
      onChange(data.url);
    } catch (err) {
      onError(err instanceof Error ? err.message : 'Upload failed');
    } finally {
      setUploading(false);
      if (fileRef.current) fileRef.current.value = '';
    }
  };

  return (
    <Field label={label}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
        <div className="relative h-24 w-full shrink-0 overflow-hidden rounded-lg border border-[#d2e4d9] bg-[#f0f6f2] sm:w-36">
          {value ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={value} alt="" className="h-full w-full object-cover" />
          ) : (
            <span className="flex h-full items-center justify-center text-[11px] text-[#517362]">No image</span>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <select
            value={SITE_IMAGES.includes(value) ? value : ''}
            onChange={(e) => e.target.value && onChange(e.target.value)}
            className={inputClass}
          >
            <option value="">{SITE_IMAGES.includes(value) ? '' : 'Uploaded / custom image'}</option>
            {SITE_IMAGES.map((src) => (
              <option key={src} value={src}>{src.replace('/images/', '')}</option>
            ))}
          </select>
          <div className="flex gap-2">
            <input value={value} onChange={(e) => onChange(e.target.value)} placeholder="/images/… or https://…" className={`${inputClass} font-mono text-xs`} />
            <Button variant="secondary" onClick={() => fileRef.current?.click()} disabled={uploading} className="shrink-0">
              {uploading ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <ImagePlus className="h-3.5 w-3.5" />}
              Upload
            </Button>
          </div>
          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp,image/avif"
            className="hidden"
            onChange={(e) => e.target.files?.[0] && upload(e.target.files[0])}
          />
        </div>
      </div>
    </Field>
  );
}
