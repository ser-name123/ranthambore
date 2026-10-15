'use client';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import RichTextEditor from './RichTextEditor';
import { ArrowDown, ArrowLeft, ArrowUp, Copy, ExternalLink, Eye, EyeOff, Loader2, MonitorPlay, Pencil, Plus, Save, Search, Trash2, Undo2 } from 'lucide-react';
import { CmsPage, EMPTY_SEO, PageGroup, PageSeo, PackageCategory, Published, slugify, TourPackage } from '@/lib/cms';
import BlocksEditor from './BlocksEditor';
import RevisionsPanel from './RevisionsPanel';
import { Button, Card, ImagePicker, inputClass, LinesInput, NumberInput, SelectInput, TextArea, TextInput, Toggle } from './ui';

export type Collection = 'pages' | 'packages';
type Doc = CmsPage | TourPackage;
type Item = Published<Doc>;

const GROUP_LABELS: Record<PageGroup, string> = { service: 'Services & Safaris', info: 'Information', legal: 'Legal & Policies' };
const CATEGORY_LABELS: Record<PackageCategory, string> = { short: 'Day / 1-Day', standard: 'Weekend & 3-Day', luxury: 'Luxury Heritage', custom: 'Photography' };

function newDoc(collection: Collection): Doc {
  if (collection === 'pages') {
    return {
      slug: '',
      name: 'New Page',
      group: 'service',
      showToc: false,
      hero: { badge: '', title: 'New Page', highlight: '', subtitle: '', image: '/images/tiger_portrait.jpg', ctaLabel: 'Enquire Now', bookingPrefill: '', whatsappText: '' },
      blocks: [],
      seo: { ...EMPTY_SEO },
    } satisfies CmsPage;
  }
  return {
    slug: '',
    name: 'New Package',
    category: 'standard',
    duration: '2 Nights / 3 Days',
    safariCount: '2 Safaris Included',
    hotelType: 'Deluxe Resort',
    pricePerPerson: 9999,
    badge: '',
    image: '/images/tiger_portrait.jpg',
    summary: '',
    highlights: [],
    inclusions: [],
    featured: true,
    blocks: [],
    seo: { ...EMPTY_SEO },
  } satisfies TourPackage;
}

function titleOf(d: Doc) {
  return d.name;
}

function pathOf(collection: Collection, slug: string) {
  return collection === 'pages' ? `/${slug}` : `/packages/${slug}`;
}

interface Props {
  collection: Collection;
  api: <T>(url: string, init?: RequestInit) => Promise<T>;
  notify: (kind: 'success' | 'error', message: string) => void;
  onError: (err: unknown) => void;
  /** Open this item (id) or a blank one ('new') straight away, e.g. from the sidebar. */
  initialId?: string;
  /** Called whenever the list changes so the sidebar can refresh. */
  onItemsChange?: (items: Item[]) => void;
}

export default function CollectionManager({ collection, api, notify, onError, initialId, onItemsChange }: Props) {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<{ id: string | null; doc: Doc; published: boolean; original: string } | null>(null);
  const [query, setQuery] = useState('');
  const [saving, setSaving] = useState(false);
  const noun = collection === 'pages' ? 'page' : 'package';

  const load = useCallback(
    () =>
      api<{ items: Item[] }>(`/api/admin/${collection}`)
        .then(({ items }) => {
          setItems(items);
          if (initialId === 'new') {
            const doc = newDoc(collection);
            setEditing({ id: null, doc, published: false, original: JSON.stringify({ d: doc, p: false }) });
          } else if (initialId) {
            const item = items.find((i) => i.id === initialId);
            if (item) setEditing({ id: item.id, doc: item.data, published: item.published, original: JSON.stringify({ d: item.data, p: item.published }) });
          }
        })
        .catch(onError)
        .finally(() => setLoading(false)),
    [api, collection, onError, initialId]
  );

  // Keep the sidebar in sync once the list has loaded.
  useEffect(() => {
    if (!loading) onItemsChange?.(items);
  }, [items, loading, onItemsChange]);

  useEffect(() => {
    load();
  }, [load]);

  const dirty = editing ? JSON.stringify({ d: editing.doc, p: editing.published }) !== editing.original : false;

  useEffect(() => {
    if (!dirty) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirty]);

  const open = (id: string | null, doc: Doc, published: boolean) => {
    setEditing({ id, doc, published, original: JSON.stringify({ d: doc, p: published }) });
    window.scrollTo({ top: 0 });
  };

  const close = () => {
    if (dirty && !confirm('Discard unsaved changes?')) return;
    setEditing(null);
  };

  const save = async () => {
    if (!editing) return;
    const doc = { ...editing.doc, slug: slugify(editing.doc.slug || editing.doc.name) };
    setSaving(true);
    try {
      const body = JSON.stringify({ data: doc, published: editing.published });
      const { item } = editing.id
        ? await api<{ item: Item }>(`/api/admin/${collection}/${editing.id}`, { method: 'PUT', body })
        : await api<{ item: Item }>(`/api/admin/${collection}`, { method: 'POST', body });
      setItems((list) => (editing.id ? list.map((i) => (i.id === item.id ? item : i)) : [...list, item]));
      open(item.id, item.data, item.published);
      notify('success', item.published ? 'Saved — live on the website.' : 'Saved as draft (not visible on the website).');
    } catch (err) {
      onError(err);
    } finally {
      setSaving(false);
    }
  };

  const togglePublished = async (item: Item) => {
    try {
      const { item: updated } = await api<{ item: Item }>(`/api/admin/${collection}/${item.id}`, {
        method: 'PUT',
        body: JSON.stringify({ data: item.data, published: !item.published }),
      });
      setItems((list) => list.map((i) => (i.id === updated.id ? updated : i)));
      notify('success', updated.published ? 'Published' : 'Hidden from the website');
    } catch (err) {
      onError(err);
    }
  };

  const remove = async (item: Item) => {
    if (!confirm(`Delete “${titleOf(item.data)}” permanently? Its URL will stop working.`)) return;
    try {
      await api(`/api/admin/${collection}/${item.id}`, { method: 'DELETE' });
      setItems((list) => list.filter((i) => i.id !== item.id));
      notify('success', 'Deleted');
    } catch (err) {
      onError(err);
    }
  };

  const move = async (index: number, to: number) => {
    if (to < 0 || to >= items.length) return;
    const next = [...items];
    const [moved] = next.splice(index, 1);
    next.splice(to, 0, moved);
    setItems(next);
    try {
      await api(`/api/admin/${collection}`, { method: 'PATCH', body: JSON.stringify({ order: next.map((i) => i.id) }) });
    } catch (err) {
      onError(err);
      load();
    }
  };

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((i) => !q || titleOf(i.data).toLowerCase().includes(q) || i.slug.includes(q));
  }, [items, query]);

  if (editing) {
    const setDoc = (patch: Partial<Doc>) => setEditing((e) => (e ? { ...e, doc: { ...e.doc, ...patch } as Doc } : e));
    const isNew = !editing.id;
    return (
      <div className="space-y-4 pb-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Button variant="secondary" onClick={close}>
            <ArrowLeft className="h-3.5 w-3.5" /> All {collection}
          </Button>
          {!isNew && editing.id && (
            <div className="flex flex-wrap items-center gap-2">
              <RevisionsPanel
                entity={collection}
                refId={editing.id}
                onError={onError}
                onRestore={(data, published) =>
                  setEditing((e) => (e ? { ...e, doc: data as Doc, published: published ?? e.published } : e))
                }
              />
              <a
                href={`/api/admin/preview?path=${encodeURIComponent(pathOf(collection, editing.doc.slug))}`}
                target="_blank"
                rel="noopener noreferrer"
                title={dirty ? 'Preview shows the last saved version — save first to preview your changes' : 'Preview including drafts'}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#c4dcce] bg-white px-3 py-2 text-xs font-bold text-[#082318] hover:bg-[#f0f6f2]"
              >
                <MonitorPlay className="h-3.5 w-3.5" /> Preview
              </a>
              {editing.published && (
                <a href={pathOf(collection, editing.doc.slug)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-[#c4dcce] bg-white px-3 py-2 text-xs font-bold text-emerald-800 hover:bg-[#f0f6f2]">
                  <ExternalLink className="h-3.5 w-3.5" /> Live page
                </a>
              )}
            </div>
          )}
        </div>

        {collection === 'pages' ? (
          <PageSettings page={editing.doc as CmsPage} isNew={isNew} onChange={setDoc} onError={(m) => notify('error', m)} />
        ) : (
          <PackageSettings pkg={editing.doc as TourPackage} isNew={isNew} onChange={setDoc} onError={(m) => notify('error', m)} />
        )}

        <Card
          title={collection === 'pages' ? 'Page sections' : 'Detail page sections'}
          description="Sections appear in this order below the banner. Click a section to edit it."
        >
          <BlocksEditor blocks={editing.doc.blocks} onChange={(blocks) => setDoc({ blocks })} onError={(m) => notify('error', m)} />
        </Card>

        <SeoCard seo={editing.doc.seo} fallbackTitle={editing.doc.name} path={pathOf(collection, editing.doc.slug || slugify(editing.doc.name))} onChange={(seo) => setDoc({ seo })} onError={(m) => notify('error', m)} />

        <div className="sticky bottom-0 z-10 -mx-4 border-t border-[#d2e4d9] bg-white/95 px-4 py-3 backdrop-blur sm:-mx-6 sm:px-6">
          <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3">
            <Toggle
              label={editing.published ? 'Published (visible on website)' : 'Draft (hidden from website)'}
              checked={editing.published}
              onChange={(published) => setEditing((e) => (e ? { ...e, published } : e))}
            />
            <div className="flex items-center gap-3">
              {dirty && <span className="text-xs font-semibold text-[#b45309]">Unsaved changes</span>}
              {!isNew && (
                <Button
                  variant="secondary"
                  disabled={!dirty || saving}
                  onClick={() => {
                    const { d, p } = JSON.parse(editing.original) as { d: Doc; p: boolean };
                    setEditing((e) => (e ? { ...e, doc: d, published: p } : e));
                  }}
                >
                  <Undo2 className="h-3.5 w-3.5" /> Discard
                </Button>
              )}
              <Button onClick={save} disabled={saving || (!dirty && !isNew)}>
                {saving ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <Save className="h-3.5 w-3.5" />}
                {isNew ? `Create ${noun}` : 'Save'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#517362]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder={`Search ${collection}…`} className={`${inputClass} pl-9`} />
        </div>
        <Button onClick={() => open(null, newDoc(collection), false)}>
          <Plus className="h-3.5 w-3.5" /> New {noun}
        </Button>
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#d2e4d9] bg-white shadow-sm">
        {loading ? (
          <div className="flex items-center justify-center gap-2 p-10 text-sm text-[#517362]">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading…
          </div>
        ) : filtered.length === 0 ? (
          <p className="p-10 text-center text-sm text-[#517362]">No {collection} yet.</p>
        ) : (
          <ul className="divide-y divide-[#e2ede6]">
            {filtered.map((item) => {
              const index = items.indexOf(item);
              const sub =
                collection === 'pages'
                  ? GROUP_LABELS[(item.data as CmsPage).group] ?? ''
                  : `${CATEGORY_LABELS[(item.data as TourPackage).category] ?? ''} · ₹${(item.data as TourPackage).pricePerPerson.toLocaleString('en-IN')}${(item.data as TourPackage).featured ? ' · On homepage' : ''}`;
              return (
                <li key={item.id} className="flex flex-wrap items-center gap-3 px-4 py-3">
                  <div className="flex flex-col">
                    <button type="button" aria-label="Move up" disabled={!!query || index === 0} onClick={() => move(index, index - 1)} className="cursor-pointer rounded p-0.5 text-[#517362] hover:bg-[#f0f6f2] disabled:opacity-25">
                      <ArrowUp className="h-3.5 w-3.5" />
                    </button>
                    <button type="button" aria-label="Move down" disabled={!!query || index === items.length - 1} onClick={() => move(index, index + 1)} className="cursor-pointer rounded p-0.5 text-[#517362] hover:bg-[#f0f6f2] disabled:opacity-25">
                      <ArrowDown className="h-3.5 w-3.5" />
                    </button>
                  </div>
                  <button type="button" onClick={() => open(item.id, item.data, item.published)} className="min-w-0 flex-1 cursor-pointer text-left">
                    <p className="truncate text-sm font-semibold text-[#082318]">{titleOf(item.data)}</p>
                    <p className="truncate text-xs text-[#517362]">
                      <span className="font-mono">{pathOf(collection, item.slug)}</span> · {sub}
                    </p>
                  </button>
                  <span className={`rounded-full border px-2 py-0.5 text-[11px] font-bold ${item.published ? 'border-emerald-300 bg-emerald-50 text-emerald-800' : 'border-stone-300 bg-stone-100 text-stone-600'}`}>
                    {item.published ? 'Live' : 'Draft'}
                  </span>
                  <div className="flex items-center gap-1">
                    <IconBtn label="Edit" onClick={() => open(item.id, item.data, item.published)}><Pencil className="h-4 w-4" /></IconBtn>
                    <IconBtn label={item.published ? 'Hide from website' : 'Publish'} onClick={() => togglePublished(item)}>
                      {item.published ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </IconBtn>
                    <IconBtn
                      label="Duplicate"
                      onClick={() => open(null, { ...structuredClone(item.data), slug: `${item.slug}-copy`, name: `${titleOf(item.data)} (Copy)` } as Doc, false)}
                    >
                      <Copy className="h-4 w-4" />
                    </IconBtn>
                    {item.published && (
                      <a href={pathOf(collection, item.slug)} target="_blank" rel="noopener noreferrer" title="View" className="rounded-md p-1.5 text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                    <IconBtn label="Delete" danger onClick={() => remove(item)}><Trash2 className="h-4 w-4" /></IconBtn>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <p className="text-xs text-[#517362]">
        Order here is the order used on the website{collection === 'packages' ? ' (homepage & packages grid)' : ''}. Add a {noun} to the menu or footer from “Menu & Footer Links”.
      </p>
    </div>
  );
}

function IconBtn({ label, onClick, danger, children }: { label: string; onClick: () => void; danger?: boolean; children: React.ReactNode }) {
  return (
    <button type="button" title={label} aria-label={label} onClick={onClick} className={`cursor-pointer rounded-md p-1.5 transition ${danger ? 'text-rose-600 hover:bg-rose-50' : 'text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]'}`}>
      {children}
    </button>
  );
}

function SlugField({ slug, name, prefix, isNew, onChange }: { slug: string; name: string; prefix: string; isNew: boolean; onChange: (slug: string) => void }) {
  return (
    <TextInput
      label="URL"
      hint={`${prefix}${slug || slugify(name)}${isNew ? '' : ' · Changing the URL breaks old links to this page'}`}
      value={slug}
      placeholder={slugify(name)}
      onChange={(v) => onChange(slugify(v.replace(/\s/g, '-')) + (v.endsWith('-') ? '-' : ''))}
    />
  );
}

function PageSettings({ page, isNew, onChange, onError }: { page: CmsPage; isNew: boolean; onChange: (p: Partial<CmsPage>) => void; onError: (m: string) => void }) {
  const hero = page.hero;
  const setHero = (patch: Partial<CmsPage['hero']>) => onChange({ hero: { ...hero, ...patch } });
  return (
    <>
      <Card title="Page settings">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput label="Page name" hint="Used in the breadcrumb and admin" value={page.name} onChange={(v) => onChange({ name: v })} />
          <SlugField slug={page.slug} name={page.name} prefix="/" isNew={isNew} onChange={(slug) => onChange({ slug })} />
          <SelectInput<PageGroup> label="Type" value={page.group} options={Object.entries(GROUP_LABELS).map(([value, label]) => ({ value: value as PageGroup, label }))} onChange={(group) => onChange({ group })} />
          <div className="flex items-end pb-2">
            <Toggle label="Show “On this page” sidebar (long policy pages)" checked={page.showToc} onChange={(showToc) => onChange({ showToc })} />
          </div>
        </div>
      </Card>
      <Card title="Top banner">
        <TextInput label="Badge" value={hero.badge} onChange={(v) => setHero({ badge: v })} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput label="Title" value={hero.title} onChange={(v) => setHero({ title: v })} />
          <TextInput label="Highlighted title part (gradient)" value={hero.highlight} onChange={(v) => setHero({ highlight: v })} />
        </div>
        <RichTextEditor label="Subtitle" value={hero.subtitle} onChange={(v) => setHero({ subtitle: v })} />
        <ImagePicker label="Background image" value={hero.image} onChange={(v) => setHero({ image: v })} onError={onError} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput label="Booking button text" hint="Empty hides the button" value={hero.ctaLabel} onChange={(v) => setHero({ ctaLabel: v })} />
          <TextInput label="WhatsApp message" hint="Empty hides the WhatsApp button" value={hero.whatsappText} onChange={(v) => setHero({ whatsappText: v })} />
          <TextInput label="Booking form: vehicle / package" value={hero.bookingPrefill} onChange={(v) => setHero({ bookingPrefill: v })} />
          <TextInput label="Booking form: zone" value={hero.bookingZone ?? ''} onChange={(v) => setHero({ bookingZone: v })} />
        </div>
      </Card>
    </>
  );
}

function PackageSettings({ pkg, isNew, onChange, onError }: { pkg: TourPackage; isNew: boolean; onChange: (p: Partial<TourPackage>) => void; onError: (m: string) => void }) {
  return (
    <Card title="Package details" description="Shown on the package card and the top of its detail page.">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextInput label="Package name" value={pkg.name} onChange={(v) => onChange({ name: v })} />
        <SlugField slug={pkg.slug} name={pkg.name} prefix="/packages/" isNew={isNew} onChange={(slug) => onChange({ slug })} />
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <SelectInput<PackageCategory> label="Category (filter tab)" value={pkg.category} options={Object.entries(CATEGORY_LABELS).map(([value, label]) => ({ value: value as PackageCategory, label }))} onChange={(category) => onChange({ category })} />
        <TextInput label="Duration" value={pkg.duration} onChange={(v) => onChange({ duration: v })} />
        <NumberInput label="Price per person (₹)" value={pkg.pricePerPerson} onChange={(v) => onChange({ pricePerPerson: v })} />
        <TextInput label="Safaris" value={pkg.safariCount} onChange={(v) => onChange({ safariCount: v })} />
        <TextInput label="Hotel / stay" value={pkg.hotelType} onChange={(v) => onChange({ hotelType: v })} />
        <TextInput label="Badge (optional)" value={pkg.badge} onChange={(v) => onChange({ badge: v })} />
      </div>
      <RichTextEditor label="Summary" hint="Shown under the title on the detail page" value={pkg.summary} onChange={(v) => onChange({ summary: v })} />
      <ImagePicker label="Image" value={pkg.image} onChange={(v) => onChange({ image: v })} onError={onError} />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <LinesInput label="Inclusion pills (card)" value={pkg.inclusions} onChange={(v) => onChange({ inclusions: v })} />
        <LinesInput label="Highlights (card)" value={pkg.highlights} onChange={(v) => onChange({ highlights: v })} />
      </div>
      <Toggle label="Show on homepage “Featured Tour Packages”" checked={pkg.featured} onChange={(featured) => onChange({ featured })} />
    </Card>
  );
}

export function SeoCard({ seo, fallbackTitle, path, onChange, onError }: { seo: PageSeo; fallbackTitle: string; path: string; onChange: (s: PageSeo) => void; onError: (m: string) => void }) {
  const set = (patch: Partial<PageSeo>) => onChange({ ...seo, ...patch });
  return (
    <Card title="SEO" description="How this page appears on Google and when shared. Empty fields fall back to the page name and banner.">
      <div className="rounded-xl border border-[#dadce0] bg-white p-4">
        <p className="text-lg leading-snug text-[#1a0dab]">{seo.title || fallbackTitle}</p>
        <p className="mt-1 line-clamp-2 text-sm text-[#4d5156]">{seo.description || 'Add a meta description…'}</p>
      </div>
      <TextInput label="SEO title" hint={`${seo.title.length} / 60 characters · site name is added automatically`} value={seo.title} onChange={(v) => set({ title: v })} />
      <TextArea label="Meta description" hint={`${seo.description.length} / 160 characters`} rows={2} value={seo.description} onChange={(v) => set({ description: v })} />
      <TextInput label="Keywords" hint="Comma separated" value={seo.keywords} onChange={(v) => set({ keywords: v })} />
      <TextInput
        label="Canonical URL (optional)"
        hint="Leave empty (recommended) — the page's own address is used. If this page is a copy of another page, enter the main page here, e.g. /gypsy-safari or https://…; it is then also left out of the sitemap."
        value={seo.canonical ?? ''}
        onChange={(v) => set({ canonical: v.trim() })}
        placeholder={path}
      />
      <ImagePicker label="Share image" value={seo.ogImage} onChange={(v) => set({ ogImage: v })} onError={onError} />
      <Toggle label="Hide from Google (noindex)" checked={seo.noindex} onChange={(noindex) => set({ noindex })} />
    </Card>
  );
}
