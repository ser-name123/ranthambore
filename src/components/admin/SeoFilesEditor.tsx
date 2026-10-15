'use client';

import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Download, ExternalLink, FileUp, RefreshCw, Wand2 } from 'lucide-react';
import type { SeoFilesContent } from '@/lib/site-content';
import { Button, Card, LinesInput, TextArea, Toggle } from './ui';

interface Props {
  value: SeoFilesContent;
  onChange: (v: SeoFilesContent) => void;
  onError: (message: string) => void;
}

interface Generated {
  autoRobots: string;
  autoSitemap: string;
  liveRobots: string;
  liveSitemap: string;
}

function download(name: string, text: string, type: string) {
  const url = URL.createObjectURL(new Blob([text], { type }));
  const a = document.createElement('a');
  a.href = url;
  a.download = name;
  a.click();
  URL.revokeObjectURL(url);
}

function ModeSwitch({ value, onChange }: { value: 'auto' | 'custom'; onChange: (v: 'auto' | 'custom') => void }) {
  return (
    <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
      {([
        ['auto', 'Automatic (recommended)', 'Built for you from your pages and settings. Updates itself when you add or remove pages.'],
        ['custom', 'Custom file', 'Paste, type or upload your own file. It is served exactly as you write it.'],
      ] as const).map(([mode, title, text]) => (
        <button
          key={mode}
          type="button"
          onClick={() => onChange(mode)}
          className={`cursor-pointer rounded-xl border-2 p-3 text-left transition ${value === mode ? 'border-emerald-600 bg-emerald-50' : 'border-[#d2e4d9] bg-white hover:border-emerald-400'}`}
        >
          <span className="flex items-center gap-2 text-sm font-bold text-[#082318]">
            <span className={`h-3.5 w-3.5 rounded-full border-2 ${value === mode ? 'border-emerald-600 bg-emerald-600' : 'border-[#9fbfae]'}`} />
            {title}
          </span>
          <span className="mt-1 block text-xs text-[#517362]">{text}</span>
        </button>
      ))}
    </div>
  );
}

function UploadButton({ accept, onText, onError }: { accept: string; onText: (t: string) => void; onError: (m: string) => void }) {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <>
      <Button variant="secondary" onClick={() => ref.current?.click()}>
        <FileUp className="h-3.5 w-3.5" /> Upload file
      </Button>
      <input
        ref={ref}
        type="file"
        accept={accept}
        className="hidden"
        onChange={async (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          if (file.size > 2 * 1024 * 1024) return onError('File is too large (max 2 MB).');
          onText(await file.text());
          e.target.value = '';
        }}
      />
    </>
  );
}

function LivePreview({ title, href, text, fileName, type, loading }: { title: string; href: string; text?: string; fileName: string; type: string; loading: boolean }) {
  return (
    <div className="rounded-xl border border-[#d2e4d9] bg-[#f4f8f5]">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#d2e4d9] px-3 py-2">
        <p className="text-xs font-bold text-[#183d2a]">{title}</p>
        <div className="flex gap-2">
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-lg border border-[#c4dcce] bg-white px-2.5 py-1.5 text-xs font-bold text-[#082318] hover:bg-[#f0f6f2]">
            <ExternalLink className="h-3.5 w-3.5" /> Open {href}
          </a>
          <Button variant="secondary" disabled={!text} onClick={() => text && download(fileName, text, type)}>
            <Download className="h-3.5 w-3.5" /> Download
          </Button>
        </div>
      </div>
      <pre className="max-h-72 overflow-auto whitespace-pre-wrap break-all p-3 font-mono text-[11px] leading-relaxed text-[#183d2a]">
        {loading ? 'Loading…' : text}
      </pre>
    </div>
  );
}

export default function SeoFilesEditor({ value, onChange, onError }: Props) {
  const set = (patch: Partial<SeoFilesContent>) => onChange({ ...value, ...patch });
  const [generated, setGenerated] = useState<Generated | null>(null);
  const [loading, setLoading] = useState(true);

  const refresh = useCallback(() => {
    fetch('/api/admin/seo-files')
      .then((r) => r.json())
      .then((g: Generated) => setGenerated(g))
      .catch(() => onError('Could not load the generated files'))
      .finally(() => setLoading(false));
  }, [onError]);

  // Load once, and again whenever a section is saved (the preview shows the live files).
  useEffect(() => {
    refresh();
    window.addEventListener('admin-content-saved', refresh);
    return () => window.removeEventListener('admin-content-saved', refresh);
  }, [refresh]);

  return (
    <>
      <Card
        title="robots.txt — tells Google which parts of the site it may visit"
        description="Most websites should keep this on Automatic. The admin panel and API are always blocked automatically."
        actions={
          <Button variant="ghost" onClick={() => { setLoading(true); refresh(); }}>
            <RefreshCw className="h-3.5 w-3.5" /> Refresh preview
          </Button>
        }
      >
        <ModeSwitch value={value.robotsMode} onChange={(robotsMode) => set({ robotsMode })} />
        {value.robotsMode === 'auto' ? (
          <>
            <Toggle label="Hide the whole website from Google (use only while the site is being built)" checked={value.robotsBlockAll} onChange={(robotsBlockAll) => set({ robotsBlockAll })} />
            {value.robotsBlockAll && (
              <p className="rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs font-semibold text-rose-800">
                Warning: while this is on, Google will not show your website in search results.
              </p>
            )}
            <LinesInput label="Extra paths to block (optional)" hint="One per line, e.g. /test-page" value={value.robotsDisallow} onChange={(robotsDisallow) => set({ robotsDisallow })} rows={3} />
          </>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              <UploadButton accept=".txt,text/plain" onText={(robotsCustom) => set({ robotsCustom })} onError={onError} />
              <Button variant="secondary" disabled={!generated} onClick={() => generated && set({ robotsCustom: generated.autoRobots })}>
                <Wand2 className="h-3.5 w-3.5" /> Start from the automatic version
              </Button>
            </div>
            <TextArea label="Your robots.txt" hint="Must contain at least one “User-agent:” line." rows={10} value={value.robotsCustom} onChange={(robotsCustom) => set({ robotsCustom })} />
          </>
        )}
        <LivePreview title="Live now (last saved version)" href="/robots.txt" text={generated?.liveRobots} fileName="robots.txt" type="text/plain" loading={loading} />
      </Card>

      <Card
        title="sitemap.xml — the list of pages you want Google to find"
        description="On Automatic, every published page and package is listed, with its last update date. Draft pages, “Hide from Google” pages and pages whose canonical points elsewhere are left out."
      >
        <ModeSwitch value={value.sitemapMode} onChange={(sitemapMode) => set({ sitemapMode })} />
        {value.sitemapMode === 'auto' ? (
          <>
            <div className="flex flex-col gap-2">
              <Toggle label="Include pages" checked={value.sitemapIncludePages} onChange={(sitemapIncludePages) => set({ sitemapIncludePages })} />
              <Toggle label="Include legal & policy pages" checked={value.sitemapIncludeLegal} onChange={(sitemapIncludeLegal) => set({ sitemapIncludeLegal })} />
              <Toggle label="Include tour packages" checked={value.sitemapIncludePackages} onChange={(sitemapIncludePackages) => set({ sitemapIncludePackages })} />
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <LinesInput label="Leave out these pages" hint="One path per line, e.g. /contact-us" value={value.sitemapExclude} onChange={(sitemapExclude) => set({ sitemapExclude })} rows={3} />
              <LinesInput label="Add extra URLs" hint="One per line: a path like /blog or a full https:// address" value={value.sitemapExtra} onChange={(sitemapExtra) => set({ sitemapExtra })} rows={3} />
            </div>
          </>
        ) : (
          <>
            <div className="flex flex-wrap gap-2">
              <UploadButton accept=".xml,application/xml,text/xml" onText={(sitemapCustom) => set({ sitemapCustom })} onError={onError} />
              <Button variant="secondary" disabled={!generated} onClick={() => generated && set({ sitemapCustom: generated.autoSitemap })}>
                <Wand2 className="h-3.5 w-3.5" /> Start from the automatic version
              </Button>
            </div>
            <TextArea label="Your sitemap.xml" hint="Must be valid sitemap XML. New pages are NOT added automatically in this mode." rows={14} value={value.sitemapCustom} onChange={(sitemapCustom) => set({ sitemapCustom })} />
          </>
        )}
        <LivePreview title="Live now (last saved version)" href="/sitemap.xml" text={generated?.liveSitemap} fileName="sitemap.xml" type="application/xml" loading={loading} />
        <p className="text-xs text-[#517362]">
          After saving, submit <span className="font-mono">/sitemap.xml</span> once in Google Search Console (Sitemaps → Add a new sitemap). Google re-reads it automatically after that.
        </p>
      </Card>
    </>
  );
}
