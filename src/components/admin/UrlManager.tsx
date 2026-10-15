'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { ArrowRight, Check, ExternalLink, Link2, Loader2, Pencil, Plus, Search, Trash2, Undo2, X } from 'lucide-react';
import type { CmsPage, Published, TourPackage } from '@/lib/cms';
import { RESERVED_SLUGS, slugify, slugifyTyping } from '@/lib/cms';
import { Button, Card, SelectInput, TextInput, inputClass } from './ui';

type Collection = 'pages' | 'packages';
type Item = Published<CmsPage | TourPackage>;

interface Redirect {
  id: string;
  from_path: string;
  to_path: string;
  status_code: number;
  hits: number;
  note: string | null;
  created_at: string;
}

interface Props {
  api: <T>(url: string, init?: RequestInit) => Promise<T>;
  notify: (kind: 'success' | 'error', message: string) => void;
  onError: (err: unknown) => void;
  /** Links elsewhere on the site were rewritten: reload content in the admin. */
  onUrlChange: () => void;
  openItem: (collection: Collection, id: string) => void;
}

const PREFIX: Record<Collection, string> = { pages: '/', packages: '/packages/' };
const TYPE_OPTIONS = [
  { value: '301', label: '301 · Permanent (recommended)' },
  { value: '302', label: '302 · Temporary' },
];
const SYSTEM_URLS = [
  { path: '/', label: 'Homepage', note: 'Edit under Page Management → Home Page' },
  { path: '/sitemap.xml', label: 'Sitemap', note: 'SEO & Google → Robots.txt & Sitemap' },
  { path: '/robots.txt', label: 'Robots.txt', note: 'SEO & Google → Robots.txt & Sitemap' },
];

function slugError(collection: Collection, slug: string, items: Item[], selfId: string): string | null {
  if (!slug) return 'Enter a URL';
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug)) return 'Only lowercase letters, numbers and single dashes';
  if (slug.length > 80) return 'Too long (max 80 characters)';
  if (collection === 'pages' && RESERVED_SLUGS.includes(slug)) return `“${slug}” is reserved by the system`;
  if (items.some((i) => i.id !== selfId && i.slug === slug)) return 'Another ' + (collection === 'pages' ? 'page' : 'package') + ' already uses this URL';
  return null;
}

export default function UrlManager({ api, notify, onError, onUrlChange, openItem }: Props) {
  const [pages, setPages] = useState<Item[]>([]);
  const [packages, setPackages] = useState<Item[]>([]);
  const [redirects, setRedirects] = useState<Redirect[]>([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  const load = useCallback(
    () =>
      Promise.all([
        api<{ items: Item[] }>('/api/admin/pages'),
        api<{ items: Item[] }>('/api/admin/packages'),
        api<{ items: Redirect[] }>('/api/admin/redirects'),
      ])
        .then(([p, k, r]) => {
          setPages(p.items);
          setPackages(k.items);
          setRedirects(r.items);
        })
        .catch(onError)
        .finally(() => setLoading(false)),
    [api, onError]
  );

  useEffect(() => {
    load();
  }, [load]);

  const changeSlug = async (collection: Collection, item: Item, slug: string) => {
    const from = PREFIX[collection] + item.slug;
    const to = PREFIX[collection] + slug;
    if (!confirm(`Change the URL?\n\n${from}  →  ${to}\n\n• Visitors and Google opening the old URL are sent to the new one automatically (301 redirect).\n• Menu, footer and page links pointing to the old URL are updated.`)) return false;
    try {
      const res = await api<{ item: Item; linksUpdated: number }>(`/api/admin/${collection}/${item.id}`, { method: 'PATCH', body: JSON.stringify({ slug }) });
      const links = res.linksUpdated ? ` ${res.linksUpdated} link${res.linksUpdated === 1 ? '' : 's'} updated.` : '';
      await load();
      notify('success', `URL changed to ${to}. Old URL now redirects.${links}`);
      onUrlChange();
      return true;
    } catch (err) {
      onError(err);
      return false;
    }
  };

  const q = query.trim().toLowerCase();
  const match = (...texts: string[]) => !q || texts.some((t) => t.toLowerCase().includes(q));

  if (loading) {
    return (
      <div className="flex items-center gap-2 p-10 text-sm text-[#517362]">
        <Loader2 className="h-4 w-4 animate-spin" /> Loading URLs…
      </div>
    );
  }

  return (
    <div className="space-y-5 pb-10">
      <div className="max-w-3xl rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3">
        <p className="text-sm font-semibold text-[#082318]">What is this?</p>
        <p className="mt-0.5 text-sm text-[#375847]">
          Every web address (URL) of your website in one place. Click <strong>Edit URL</strong> to change one: the old address keeps working
          because it is automatically <strong>redirected</strong> to the new one, and links in the menu, footer and pages are updated for you.
        </p>
        <p className="mt-1.5 text-xs text-[#517362]">Use <strong>Redirects</strong> below to send any old or short address (e.g. from your previous website) to a page.</p>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#517362]" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search URLs, pages or redirects…" className={`${inputClass} pl-9`} />
      </div>

      <UrlTable
        title="Page URLs"
        description="Service, information and policy pages."
        collection="pages"
        items={pages.filter((i) => match(i.slug, i.data.name))}
        all={pages}
        onSave={changeSlug}
        onOpen={(id) => openItem('pages', id)}
      />
      <UrlTable
        title="Tour package URLs"
        description="Package detail pages live under /packages/."
        collection="packages"
        items={packages.filter((i) => match(i.slug, i.data.name))}
        all={packages}
        onSave={changeSlug}
        onOpen={(id) => openItem('packages', id)}
      />

      <Card title="Fixed URLs" description="These addresses are part of the system and can't be changed.">
        <ul className="divide-y divide-[#e2ede6] text-sm">
          {SYSTEM_URLS.map((u) => (
            <li key={u.path} className="flex flex-wrap items-center gap-3 py-2">
              <span className="w-28 font-semibold text-[#082318]">{u.label}</span>
              <a href={u.path} target="_blank" rel="noopener noreferrer" className="font-mono text-emerald-800 hover:underline">{u.path}</a>
              <span className="ml-auto text-xs text-[#517362]">{u.note}</span>
            </li>
          ))}
        </ul>
      </Card>

      <RedirectsCard
        redirects={redirects.filter((r) => match(r.from_path, r.to_path, r.note ?? ''))}
        api={api}
        notify={notify}
        onError={onError}
        reload={load}
        pageSlugs={new Set([...pages.map((p) => '/' + p.slug), ...packages.map((p) => '/packages/' + p.slug)])}
      />
    </div>
  );
}

function UrlTable({ title, description, collection, items, all, onSave, onOpen }: {
  title: string;
  description: string;
  collection: Collection;
  items: Item[];
  all: Item[];
  onSave: (collection: Collection, item: Item, slug: string) => Promise<boolean>;
  onOpen: (id: string) => void;
}) {
  const [editId, setEditId] = useState<string | null>(null);
  const [value, setValue] = useState('');
  const [busy, setBusy] = useState(false);

  const start = (item: Item) => {
    setEditId(item.id);
    setValue(item.slug);
  };
  const editing = all.find((i) => i.id === editId);
  const slug = value.replace(/-+$/, '');
  const error = editing ? slugError(collection, slug, all, editing.id) : null;

  const submit = async () => {
    if (!editing || error) return;
    if (slug === editing.slug) return setEditId(null);
    setBusy(true);
    if (await onSave(collection, editing, slug)) setEditId(null);
    setBusy(false);
  };

  return (
    <Card title={`${title} (${all.length})`} description={description}>
      {items.length === 0 ? (
        <p className="py-4 text-center text-sm text-[#517362]">Nothing found.</p>
      ) : (
        <ul className="divide-y divide-[#e2ede6]">
          {items.map((item) => (
            <li key={item.id} className="py-2.5" data-url-row={item.slug}>
              {editId === item.id ? (
                <div className="space-y-2">
                  <p className="text-sm font-semibold text-[#082318]">{item.data.name}</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="flex min-w-0 flex-1 items-center overflow-hidden rounded-lg border border-[#c4dcce] bg-white focus-within:border-emerald-600 focus-within:ring-2 focus-within:ring-emerald-600/20">
                      <span className="shrink-0 border-r border-[#d2e4d9] bg-[#f4f8f5] px-2.5 py-2 font-mono text-xs text-[#517362]">{PREFIX[collection]}</span>
                      <input
                        autoFocus
                        aria-label="New URL"
                        value={value}
                        onChange={(e) => setValue(slugifyTyping(e.target.value))}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') submit();
                          if (e.key === 'Escape') setEditId(null);
                        }}
                        className="min-w-0 flex-1 px-2.5 py-2 font-mono text-sm text-[#082318] outline-none"
                      />
                    </div>
                    <Button onClick={submit} disabled={busy || !!error || slug === item.slug}>
                      {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />} Save URL
                    </Button>
                    <Button variant="secondary" onClick={() => setEditId(null)} disabled={busy}>
                      <X className="h-3.5 w-3.5" /> Cancel
                    </Button>
                    <button type="button" onClick={() => setValue(slugify(item.data.name))} className="cursor-pointer text-xs font-semibold text-emerald-800 hover:underline">
                      Use page name
                    </button>
                  </div>
                  {error ? (
                    <p className="text-xs font-semibold text-rose-600">{error}</p>
                  ) : slug !== item.slug ? (
                    <p className="text-xs text-[#517362]">
                      <span className="font-mono">{PREFIX[collection]}{item.slug}</span> will redirect to <span className="font-mono font-semibold text-emerald-800">{PREFIX[collection]}{slug}</span>
                    </p>
                  ) : null}
                </div>
              ) : (
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <button type="button" onClick={() => onOpen(item.id)} className="min-w-0 flex-1 cursor-pointer text-left">
                    <p className="truncate text-sm font-semibold text-[#082318] hover:text-emerald-800">{item.data.name}</p>
                    <p className="truncate font-mono text-xs text-[#517362]">{PREFIX[collection]}{item.slug}</p>
                  </button>
                  <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${item.published ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : 'border-stone-300 bg-stone-100 text-stone-600'}`}>
                    {item.published ? 'Live' : 'Draft'}
                  </span>
                  {item.data.seo?.noindex && <span className="rounded-full border border-amber-300 bg-amber-50 px-2 py-0.5 text-[11px] font-bold text-amber-800">Hidden from Google</span>}
                  <Button variant="secondary" onClick={() => start(item)} disabled={!!editId}>
                    <Pencil className="h-3.5 w-3.5" /> Edit URL
                  </Button>
                  {item.published && (
                    <a href={PREFIX[collection] + item.slug} target="_blank" rel="noopener noreferrer" title="Open page" className="rounded-md p-1.5 text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}

const EMPTY = { from_path: '', to_path: '', status_code: '301', note: '' };

function RedirectsCard({ redirects, api, notify, onError, reload, pageSlugs }: {
  redirects: Redirect[];
  api: Props['api'];
  notify: Props['notify'];
  onError: Props['onError'];
  reload: () => Promise<unknown>;
  pageSlugs: Set<string>;
}) {
  const [form, setForm] = useState<typeof EMPTY & { id?: string }>(EMPTY);
  const [showForm, setShowForm] = useState(false);
  const [busy, setBusy] = useState(false);
  const totalHits = useMemo(() => redirects.reduce((n, r) => n + r.hits, 0), [redirects]);

  const fromNorm = form.from_path.trim().toLowerCase().replace(/\/+$/, '');
  const shadowsPage = fromNorm && pageSlugs.has(fromNorm.startsWith('/') ? fromNorm : '/' + fromNorm);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      const body = JSON.stringify({ ...form, status_code: Number(form.status_code) });
      if (form.id) await api(`/api/admin/redirects/${form.id}`, { method: 'PUT', body });
      else await api('/api/admin/redirects', { method: 'POST', body });
      notify('success', form.id ? 'Redirect updated' : 'Redirect added — it works within a few seconds.');
      setForm(EMPTY);
      setShowForm(false);
      await reload();
    } catch (err) {
      onError(err);
    } finally {
      setBusy(false);
    }
  };

  const remove = async (r: Redirect) => {
    if (!confirm(`Delete the redirect from ${r.from_path}?\nThat address will show “Page not found” unless a page uses it.`)) return;
    try {
      await api(`/api/admin/redirects/${r.id}`, { method: 'DELETE' });
      notify('success', 'Redirect deleted');
      await reload();
    } catch (err) {
      onError(err);
    }
  };

  return (
    <Card
      title={`Redirects (${redirects.length})`}
      description={`Send visitors from an old address to a new one. ${totalHits.toLocaleString('en-IN')} visits redirected so far.`}
      actions={
        !showForm && (
          <Button onClick={() => { setForm(EMPTY); setShowForm(true); }}>
            <Plus className="h-3.5 w-3.5" /> Add redirect
          </Button>
        )
      }
    >
      {showForm && (
        <form onSubmit={submit} className="mb-4 space-y-3 rounded-xl border border-emerald-200 bg-emerald-50/40 p-4">
          <p className="text-sm font-bold text-[#082318]">{form.id ? 'Edit redirect' : 'New redirect'}</p>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <TextInput label="Old URL (from)" hint="Address on this website, e.g. /old-safari-page" value={form.from_path} placeholder="/old-page" onChange={(v) => setForm((f) => ({ ...f, from_path: v }))} />
            <TextInput label="New URL (to)" hint="A page on this site (/gypsy-safari) or a full https:// link" value={form.to_path} placeholder="/new-page" onChange={(v) => setForm((f) => ({ ...f, to_path: v }))} />
            <SelectInput label="Redirect type" value={form.status_code} options={TYPE_OPTIONS} onChange={(v) => setForm((f) => ({ ...f, status_code: v }))} />
            <TextInput label="Note (optional)" hint="Only you see this" value={form.note} onChange={(v) => setForm((f) => ({ ...f, note: v }))} />
          </div>
          {shadowsPage && (
            <p className="rounded-lg border border-amber-300 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">
              A page already uses this address. The redirect will send visitors away from that page.
            </p>
          )}
          <div className="flex gap-2">
            <Button type="submit" disabled={busy || !form.from_path.trim() || !form.to_path.trim()}>
              {busy ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Check className="h-3.5 w-3.5" />} {form.id ? 'Save redirect' : 'Add redirect'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => setShowForm(false)}>
              <Undo2 className="h-3.5 w-3.5" /> Cancel
            </Button>
          </div>
        </form>
      )}

      {redirects.length === 0 ? (
        <p className="py-4 text-center text-sm text-[#517362]">No redirects yet. They are added automatically when you change a page URL.</p>
      ) : (
        <ul className="divide-y divide-[#e2ede6]">
          {redirects.map((r) => (
            <li key={r.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2.5" data-redirect={r.from_path}>
              <Link2 className="h-4 w-4 shrink-0 text-emerald-700" />
              <div className="min-w-0 flex-1">
                <p className="flex flex-wrap items-center gap-1.5 font-mono text-sm">
                  <span className="text-[#082318]">{r.from_path}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#d97706]" />
                  <span className="break-all font-semibold text-emerald-800">{r.to_path}</span>
                </p>
                <p className="text-xs text-[#517362]">
                  {r.status_code === 301 || r.status_code === 308 ? 'Permanent' : 'Temporary'} ({r.status_code}) · {r.hits.toLocaleString('en-IN')} visit{r.hits === 1 ? '' : 's'}
                  {r.note ? ` · ${r.note}` : ''}
                </p>
              </div>
              <a href={r.from_path} target="_blank" rel="noopener noreferrer" title="Test this redirect" className="rounded-md p-1.5 text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]">
                <ExternalLink className="h-4 w-4" />
              </a>
              <button
                type="button"
                title="Edit"
                aria-label="Edit redirect"
                onClick={() => {
                  setForm({ id: r.id, from_path: r.from_path, to_path: r.to_path, status_code: String(r.status_code), note: r.note ?? '' });
                  setShowForm(true);
                }}
                className="cursor-pointer rounded-md p-1.5 text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button type="button" title="Delete" aria-label="Delete redirect" onClick={() => remove(r)} className="cursor-pointer rounded-md p-1.5 text-rose-600 hover:bg-rose-50">
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
