'use client';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  AlertCircle,
  ChevronRight,
  ClipboardList,
  Image as ImageIcon,
  Info,
  Plus,
  Type,
  Wallet,
  FileCode,
  LifeBuoy,
  Link2,
  Home,
  ArrowRight,
  BookOpen,
  Building2,
  Car,
  CheckCircle2,
  Compass,
  ExternalLink,
  Eye,
  EyeOff,
  HelpCircle,
  Inbox,
  LayoutDashboard,
  Layers,
  Loader2,
  Lock,
  LogOut,
  MapPin,
  Menu,
  Package,
  PawPrint,
  FileText,
  Phone,
  Radio,
  Search,
  ShieldCheck,
  Sliders,
  Star,
  UserCog,
  X,
} from 'lucide-react';
import type { Enquiry } from '@/lib/supabase';
import { DEFAULT_SITE_CONTENT, SITE_CONTENT_KEYS, SiteContent, SiteContentKey } from '@/lib/site-content';
import EnquiriesPanel, { formatDateTime, StatusBadge } from './EnquiriesPanel';
import { SECTION_EDITORS } from './SectionEditors';
import CollectionManager, { type Collection } from './CollectionManager';
import UrlManager from './UrlManager';
import RevisionsPanel from './RevisionsPanel';
import HelpGuide from './HelpGuide';
import { FORM_SCREENS } from './FormScreens';
import { LinkOptionsProvider, type LinkOption } from './LinkOptions';
import type { CmsPage, PageGroup, Published, TourPackage } from '@/lib/cms';
import { Button, Card, SaveBar, TextInput, inputClass } from './ui';

interface Admin {
  id: string;
  email: string;
  name: string;
}

type View = 'dashboard' | 'help' | 'enquiries' | 'profile' | 'urls' | Collection | SiteContentKey | `page:${string}` | `package:${string}` | `form-${string}`;

type SectionGroup = 'Home Page' | 'Site Settings' | 'SEO & Google';

/**
 * Every editable section. `help` is the plain-language explanation shown at the top of the editor,
 * `where` is the page (and #section) where the visitor sees it.
 */
const SECTIONS: { key: SiteContentKey; label: string; desc: string; help: string; where: string; icon: typeof Sliders; group: SectionGroup }[] = [
  { key: 'home', label: 'Sections & Headings', desc: 'Show/hide homepage sections and edit their headings', where: '/', icon: LayoutDashboard, group: 'Home Page',
    help: 'Turn each homepage block on or off and change the small badge, big heading and subtitle above it. The content inside each block is edited in its own menu item below.' },
  { key: 'hero', label: 'Hero Banner', desc: 'Top of the homepage: heading, buttons, stats and booking widget', where: '/', icon: Sliders, group: 'Home Page',
    help: 'The first thing visitors see: the big tiger photo, main heading, buttons, the three counters and the “Check Safari Availability” box on the right.' },
  { key: 'sightings', label: 'Sightings Ticker', desc: 'Scrolling news strip under the hero', where: '/', icon: Radio, group: 'Home Page',
    help: 'The moving strip at the bottom of the hero (“Jungle Dispatch”). Add the latest tiger sightings or notices here; visitors can click an item to book that zone.' },
  { key: 'overview', label: 'Tigers & Park Overview', desc: 'Famous tigers, three info cards and history', where: '/#safari-overview', icon: PawPrint, group: 'Home Page',
    help: 'The “Meet the Royal Bengal Tigers” block: the clickable tiger photos, three info cards and the short history timeline.' },
  { key: 'vehicles', label: 'Gypsy vs Canter', desc: 'The two vehicle comparison cards', where: '/', icon: Car, group: 'Home Page',
    help: 'The side-by-side Gypsy and Canter cards: photo, description, specs and feature list. Prices come from “Safari Rates”.' },
  { key: 'pricing', label: 'Safari Rates', desc: 'Gypsy & Canter prices used across the site', where: '/', icon: Wallet, group: 'Home Page',
    help: 'Per-person prices. Changing them here updates the hero price calculator and the Gypsy vs Canter cards together.' },
  { key: 'services', label: 'Services', desc: 'Service cards and the page each one opens', where: '/#services', icon: Layers, group: 'Home Page',
    help: 'The “Our Wildlife Services” cards. Each card can open one of your pages (choose it in “Button link”).' },
  { key: 'zones', label: 'Zones & Timings', desc: 'Zones 1–10 and the shift timings table', where: '/#zones', icon: MapPin, group: 'Home Page',
    help: 'The zone cards (Core 1–5 and Buffer 6–10) and the safari timings table. Also shown on the Safari Zones page.' },
  { key: 'about', label: 'About Company', desc: 'Company story, checklist, badge and counters', where: '/#about-us', icon: Building2, group: 'Home Page',
    help: 'The “Passionate Trackers. Unmatched Safaris.” block with the photo, floating badge, four checklist points and the four counters.' },
  { key: 'testimonials', label: 'Guest Reviews', desc: 'Customer reviews', where: '/', icon: Star, group: 'Home Page',
    help: 'Reviews shown on the homepage and on pages that include the “Guest reviews” section. Three reviews fill one row.' },
  { key: 'guides', label: 'Travel Guides', desc: 'Guide cards on the homepage', where: '/#travel-guide', icon: BookOpen, group: 'Home Page',
    help: 'The three “Travel Guide” cards on the homepage and where “Read Full Guide” takes the visitor.' },
  { key: 'faqs', label: 'FAQs', desc: 'Questions & answers', where: '/#faq', icon: HelpCircle, group: 'Home Page',
    help: 'The question-and-answer list on the homepage. Pages have their own FAQ sections, edited inside each page.' },
  { key: 'branding', label: 'Logo & Brand', desc: 'Logo, brand name and tagline', where: '/', icon: ImageIcon, group: 'Site Settings',
    help: 'Your logo and the name shown next to it in the header and footer.' },
  { key: 'navigation', label: 'Menu & Footer Links', desc: 'Top menu (with dropdowns), footer link columns', where: '/', icon: Menu, group: 'Site Settings',
    help: 'The top menu and the footer links. Pick any page from the list; add “Dropdown items” to a menu item to show a sub-menu.' },
  { key: 'contact', label: 'Contact Details', desc: 'Phones, WhatsApp, email and address', where: '/contact-us', icon: Phone, group: 'Site Settings',
    help: 'Used everywhere: header, footer, mobile buttons, contact page, policy pages and every WhatsApp / Call button.' },
  { key: 'footer', label: 'Footer & Disclaimer', desc: 'Footer texts, badges and legal notice', where: '/', icon: ShieldCheck, group: 'Site Settings',
    help: 'The booking banner at the top of the footer, the text under the logo, trust badges, the legal disclaimer and the copyright line.' },
  { key: 'ui', label: 'Buttons & Labels', desc: 'Small texts and buttons used across the site', where: '/', icon: Type, group: 'Site Settings',
    help: 'Small repeated texts like “Book Safari”, “Details”, “Starting from”, WhatsApp button messages and the “Page not found” page.' },
  { key: 'seo', label: 'SEO & Google', desc: 'Website address, homepage Google title, Google tools', where: '/', icon: Search, group: 'SEO & Google',
    help: 'How your homepage appears on Google, your website address (used for canonical links and the sitemap), Search Console verification and Google Analytics.' },
  { key: 'seoFiles', label: 'Robots.txt & Sitemap', desc: 'Generate, edit, upload or download the files Google reads', where: '/sitemap.xml', icon: FileCode, group: 'SEO & Google',
    help: 'robots.txt tells Google what it may crawl; sitemap.xml lists your pages. Both are generated automatically — or switch to “Custom file” to paste or upload your own.' },
];

const PAGE_GROUPS: { group: PageGroup; label: string; icon: typeof Sliders }[] = [
  { group: 'service', label: 'Services & Safaris', icon: Compass },
  { group: 'info', label: 'Information Pages', icon: Info },
  { group: 'legal', label: 'Legal & Policies', icon: ShieldCheck },
];

interface NavEntry {
  id: string;
  slug: string;
  name: string;
  group?: PageGroup;
  published: boolean;
}

function toNav(items: Published<CmsPage | TourPackage>[]): NavEntry[] {
  return items.map((i) => ({ id: i.id, slug: i.slug, name: i.data.name, group: (i.data as CmsPage).group, published: i.published }));
}

type Toast = { id: number; kind: 'success' | 'error'; message: string } | null;

async function api<T>(url: string, init?: RequestInit): Promise<T> {
  const res = await fetch(url, {
    ...init,
    headers: init?.body && !(init.body instanceof FormData) ? { 'Content-Type': 'application/json', ...init.headers } : init?.headers,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw Object.assign(new Error(data.error || `Request failed (${res.status})`), { status: res.status });
  return data as T;
}

export default function AdminApp() {
  const [admin, setAdmin] = useState<Admin | null>(null);
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    api<{ admin: Admin }>('/api/admin/me')
      .then((d) => setAdmin(d.admin))
      .catch(() => setAdmin(null))
      .finally(() => setChecking(false));
  }, []);

  if (checking) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#f4f8f5] text-sm text-[#517362]">
        <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Loading admin…
      </div>
    );
  }

  return admin ? <AdminShell admin={admin} setAdmin={setAdmin} /> : <LoginScreen onLogin={setAdmin} />;
}

function LoginScreen({ onLogin }: { onLogin: (admin: Admin) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    try {
      const { admin } = await api<{ admin: Admin }>('/api/admin/login', { method: 'POST', body: JSON.stringify({ email, password }) });
      onLogin(admin);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Sign in failed');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f4f8f5] p-4">
      <div className="pointer-events-none absolute -left-24 top-1/4 h-96 w-96 rounded-full bg-emerald-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-1/4 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />

      <div className="relative w-full max-w-sm space-y-6">
        <div className="space-y-3 text-center">
          <div className="relative mx-auto h-16 w-16 overflow-hidden rounded-2xl border border-emerald-600/20 shadow-md">
            <Image src="/logo.jpg" alt="Ranthambore Wild Life Tour" fill className="object-cover" priority />
          </div>
          <div>
            <h1 className="font-serif text-2xl font-bold text-[#082318]">Admin Control Panel</h1>
            <p className="text-xs text-[#517362]">Ranthambore Wild Life Tour</p>
          </div>
        </div>

        <form onSubmit={submit} className="space-y-4 rounded-2xl border border-[#d2e4d9] bg-white p-6 shadow-xl">
          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-rose-200 bg-rose-50 p-3 text-xs text-rose-800">
              <AlertCircle className="h-4 w-4 shrink-0" /> {error}
            </div>
          )}
          <TextInput label="Email" type="email" autoComplete="username" required value={email} onChange={setEmail} />
          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-[#183d2a]">Password</span>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={`${inputClass} pr-10`}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? 'Hide password' : 'Show password'}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 cursor-pointer p-1 text-[#517362] hover:text-[#082318]"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </label>
          <button
            type="submit"
            disabled={submitting}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 to-emerald-800 py-2.5 text-sm font-bold text-white shadow-md transition hover:from-emerald-800 hover:to-emerald-900 disabled:opacity-60"
          >
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Lock className="h-4 w-4" />}
            {submitting ? 'Signing in…' : 'Sign in'}
          </button>
        </form>

        <p className="text-center text-xs">
          <Link href="/" className="text-[#517362] hover:text-emerald-800">← Back to website</Link>
        </p>
      </div>
    </div>
  );
}

function AdminShell({ admin, setAdmin }: { admin: Admin; setAdmin: (a: Admin | null) => void }) {
  const [view, setView] = useState<View>('dashboard');
  const [navPages, setNavPages] = useState<NavEntry[]>([]);
  const [navPackages, setNavPackages] = useState<NavEntry[]>([]);
  const [expanded, setExpanded] = useState<Record<string, boolean>>({ 'Home Page': true });
  // A group is open if the user opened it, or (until they choose) when it contains the current view.
  const isOpen = (k: string, active: boolean) => expanded[k] ?? active;
  const toggle = (k: string, active: boolean) => setExpanded((e) => ({ ...e, [k]: !(e[k] ?? active) }));
  const syncPages = useCallback((items: Published<CmsPage | TourPackage>[]) => setNavPages(toNav(items)), []);
  const syncPackages = useCallback((items: Published<CmsPage | TourPackage>[]) => setNavPackages(toNav(items)), []);
  const [navOpen, setNavOpen] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  const [saved, setSaved] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [draft, setDraft] = useState<SiteContent>(DEFAULT_SITE_CONTENT);
  const [updatedAt, setUpdatedAt] = useState<Partial<Record<SiteContentKey, string>>>({});
  const [contentLoading, setContentLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(true);

  const notify = useCallback((kind: 'success' | 'error', message: string) => {
    // Each toast hides itself only; a newer toast is never cleared by an older timer.
    const id = Date.now() + Math.random();
    setToast({ id, kind, message });
    setTimeout(() => setToast((t) => (t?.id === id ? null : t)), 3500);
  }, []);

  // Any 401 means the session expired: drop back to the login screen.
  const handleError = useCallback(
    (err: unknown) => {
      if ((err as { status?: number }).status === 401) setAdmin(null);
      else notify('error', err instanceof Error ? err.message : 'Something went wrong');
    },
    [notify, setAdmin]
  );

  const fetchEnquiries = useCallback(
    () =>
      api<{ enquiries: Enquiry[] }>('/api/admin/enquiries')
        .then(({ enquiries }) => setEnquiries(enquiries))
        .catch(handleError)
        .finally(() => setEnquiriesLoading(false)),
    [handleError]
  );

  const reloadEnquiries = () => {
    setEnquiriesLoading(true);
    fetchEnquiries();
  };

  const contentRef = useRef({ saved, draft });
  contentRef.current = { saved, draft };

  // Loads site content; sections with unsaved edits keep their draft.
  const loadContent = useCallback(
    () =>
      api<{ content: SiteContent; updatedAt: Record<SiteContentKey, string> }>('/api/admin/content')
        .then(({ content, updatedAt }) => {
          const { saved: s, draft: d } = contentRef.current;
          const next: SiteContent = { ...content };
          for (const k of SITE_CONTENT_KEYS) {
            if (JSON.stringify(s[k]) !== JSON.stringify(d[k])) (next as unknown as Record<string, unknown>)[k] = d[k];
          }
          setSaved(content);
          setDraft(next);
          setUpdatedAt(updatedAt);
        })
        .catch(handleError)
        .finally(() => setContentLoading(false)),
    [handleError]
  );

  const loadNav = useCallback(() => {
    api<{ items: Published<CmsPage>[] }>('/api/admin/pages').then(({ items }) => syncPages(items)).catch(handleError);
    api<{ items: Published<TourPackage>[] }>('/api/admin/packages').then(({ items }) => syncPackages(items)).catch(handleError);
  }, [handleError, syncPages, syncPackages]);

  // A page URL changed: menu/footer links may have been rewritten on the server.
  const reloadAfterUrlChange = useCallback(() => {
    loadContent();
    loadNav();
  }, [loadContent, loadNav]);

  useEffect(() => {
    loadContent();
    fetchEnquiries();
    loadNav();
  }, [loadContent, fetchEnquiries, loadNav]);

  // New enquiries show up without reloading the admin.
  useEffect(() => {
    const timer = setInterval(fetchEnquiries, 60_000);
    return () => clearInterval(timer);
  }, [fetchEnquiries]);

  const dirtyKeys = useMemo(
    () => SITE_CONTENT_KEYS.filter((k) => JSON.stringify(saved[k]) !== JSON.stringify(draft[k])),
    [saved, draft]
  );

  useEffect(() => {
    if (dirtyKeys.length === 0) return;
    const warn = (e: BeforeUnloadEvent) => e.preventDefault();
    window.addEventListener('beforeunload', warn);
    return () => window.removeEventListener('beforeunload', warn);
  }, [dirtyKeys.length]);

  // Saves one or more content sections (form screens edit several at once).
  const saveSections = async (keys: SiteContentKey[]) => {
    setSaving(true);
    try {
      for (const key of keys) {
        const { updated_at } = await api<{ updated_at: string }>('/api/admin/content', {
          method: 'PUT',
          body: JSON.stringify({ key, value: draft[key] }),
        });
        setSaved((s) => ({ ...s, [key]: draft[key] }));
        setUpdatedAt((u) => ({ ...u, [key]: updated_at }));
      }
      notify('success', 'Saved — the website is updated.');
      window.dispatchEvent(new Event('admin-content-saved'));
    } catch (err) {
      handleError(err);
    } finally {
      setSaving(false);
    }
  };
  const saveSection = (key: SiteContentKey) => saveSections([key]);

  const updateEnquiry = async (id: string, patch: Partial<Pick<Enquiry, 'status' | 'admin_notes'>>) => {
    try {
      const { enquiry } = await api<{ enquiry: Enquiry }>(`/api/admin/enquiries/${id}`, { method: 'PATCH', body: JSON.stringify(patch) });
      setEnquiries((list) => list.map((e) => (e.id === id ? enquiry : e)));
      notify('success', patch.status ? `Marked as ${patch.status}` : 'Notes saved');
      return true;
    } catch (err) {
      handleError(err);
      return false;
    }
  };

  const deleteEnquiry = async (id: string) => {
    try {
      await api(`/api/admin/enquiries/${id}`, { method: 'DELETE' });
      setEnquiries((list) => list.filter((e) => e.id !== id));
      notify('success', 'Enquiry deleted');
      return true;
    } catch (err) {
      handleError(err);
      return false;
    }
  };

  const logout = async () => {
    if (dirtyKeys.length && !confirm('You have unsaved changes. Log out anyway?')) return;
    await fetch('/api/admin/logout', { method: 'POST' });
    setAdmin(null);
  };

  const go = (v: View) => {
    setView(v);
    setNavOpen(false);
    window.scrollTo({ top: 0 });
  };

  const linkOptions = useMemo<LinkOption[]>(
    () => [
      { label: 'Home', href: '/', group: 'Home page' },
      { label: 'Packages section', href: '/#packages', group: 'Home page' },
      { label: 'Services section', href: '/#services', group: 'Home page' },
      { label: 'Zones section', href: '/#zones', group: 'Home page' },
      { label: 'FAQ section', href: '/#faq', group: 'Home page' },
      { label: 'Enquiry form', href: '/#contact-us', group: 'Home page' },
      ...PAGE_GROUPS.flatMap((g) => navPages.filter((p) => p.group === g.group).map((p) => ({ label: p.name, href: '/' + p.slug, group: g.label }))),
      ...navPackages.map((p) => ({ label: p.name, href: '/packages/' + p.slug, group: 'Tour packages' })),
    ],
    [navPages, navPackages]
  );

  const newCount = enquiries.filter((e) => e.status === 'New Enquiry').length;
  const section = SECTIONS.find((s) => s.key === view);
  const formScreen = FORM_SCREENS.find((f) => f.id === view);
  const pageId = view.startsWith('page:') ? view.slice(5) : null;
  const packageId = view.startsWith('package:') ? view.slice(8) : null;
  const title =
    view === 'dashboard' ? 'Dashboard'
    : view === 'help' ? 'Help & Guide'
    : formScreen ? `Forms › ${formScreen.label}`
    : view === 'enquiries' ? 'Enquiries'
    : view === 'profile' ? 'My Account'
    : view === 'pages' ? 'All Pages'
    : view === 'packages' ? 'Tour Packages'
    : view === 'urls' ? 'URLs & Redirects'
    : pageId ? (pageId === 'new' ? 'New Page' : `Page: ${navPages.find((p) => p.id === pageId)?.name ?? ''}`)
    : packageId ? (packageId === 'new' ? 'New Package' : `Package: ${navPackages.find((p) => p.id === packageId)?.name ?? ''}`)
    : `${section?.group === 'Home Page' ? 'Home Page › ' : ''}${section?.label ?? ''}`;

  const navItem = (v: View, label: string, Icon: typeof Sliders, badge?: React.ReactNode, sub = false) => (
    <button
      key={v}
      type="button"
      onClick={() => go(v)}
      className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg text-left font-medium transition ${sub ? 'py-1.5 pl-9 pr-3 text-[13px]' : 'px-3 py-2 text-sm'} ${
        view === v ? 'bg-emerald-700 text-white shadow-sm' : 'text-[#284838] hover:bg-white hover:text-[#082318]'
      }`}
    >
      <Icon className={`${sub ? 'h-3.5 w-3.5' : 'h-4 w-4'} shrink-0 ${view === v ? 'text-emerald-100' : 'text-emerald-700'}`} />
      <span className="flex-1 truncate">{label}</span>
      {badge}
    </button>
  );

  const groupHeader = (key: string, label: string, Icon: typeof Sliders, active: boolean, count?: number) => (
    <button
      type="button"
      onClick={() => toggle(key, active)}
      className={`flex w-full cursor-pointer items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm font-semibold transition ${active ? 'text-emerald-900' : 'text-[#284838]'} hover:bg-white`}
    >
      <ChevronRight className={`h-3.5 w-3.5 shrink-0 text-[#517362] transition ${isOpen(key, active) ? 'rotate-90' : ''}`} />
      <Icon className="h-4 w-4 shrink-0 text-emerald-700" />
      <span className="flex-1 truncate">{label}</span>
      {count !== undefined && <span className="rounded-full bg-white px-1.5 text-[11px] font-bold text-[#517362]">{count}</span>}
    </button>
  );
  const draftDot = (e: NavEntry) => (!e.published ? <span className="rounded bg-stone-200 px-1 text-[9px] font-bold uppercase text-stone-600">Draft</span> : null);

  return (
    <div className="min-h-screen bg-[#f4f8f5] text-[#082318]">
      {toast && (
        <div
          role="status"
          className={`fixed right-4 top-4 z-[60] flex max-w-sm items-center gap-2 rounded-xl border px-4 py-3 text-sm font-semibold shadow-lg ${
            toast.kind === 'success' ? 'border-emerald-200 bg-white text-emerald-800' : 'border-rose-200 bg-rose-50 text-rose-800'
          }`}
        >
          {toast.kind === 'success' ? <CheckCircle2 className="h-4 w-4 shrink-0" /> : <AlertCircle className="h-4 w-4 shrink-0" />}
          {toast.message}
        </div>
      )}

      {navOpen && <div className="fixed inset-0 z-30 bg-black/30 lg:hidden" onClick={() => setNavOpen(false)} />}

      <aside
        className={`fixed inset-y-0 left-0 z-40 flex w-64 flex-col border-r border-[#d2e4d9] bg-[#edf5f0] transition-transform lg:translate-x-0 ${
          navOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-16 items-center gap-3 border-b border-[#d2e4d9] px-4">
          <div className="relative h-9 w-9 overflow-hidden rounded-lg border border-emerald-600/20">
            <Image src={saved.branding.logo || '/logo.jpg'} alt="" fill className="object-cover" />
          </div>
          <div className="min-w-0">
            <p className="truncate font-serif text-base font-bold leading-tight">{saved.branding.name}</p>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#d97706]">Admin Panel</p>
          </div>
          <button type="button" onClick={() => setNavOpen(false)} className="ml-auto cursor-pointer p-1 text-[#517362] lg:hidden" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-5 overflow-y-auto p-3">
          <div className="space-y-1">
            {navItem('dashboard', 'Dashboard', LayoutDashboard)}
            {navItem('help', 'Help & Guide', LifeBuoy)}
            {navItem(
              'enquiries',
              'Enquiries',
              Inbox,
              newCount > 0 && (
                <span className={`rounded-full px-1.5 text-[11px] font-bold ${view === 'enquiries' ? 'bg-white text-emerald-800' : 'bg-[#d97706] text-white'}`}>{newCount}</span>
              )
            )}
          </div>
          <div>
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#517362]">Page Management</p>
            <div className="space-y-0.5">
              {groupHeader('Home Page', 'Home Page', Home, SECTIONS.some((s) => s.group === 'Home Page' && s.key === view))}
              {isOpen('Home Page', SECTIONS.some((s) => s.group === 'Home Page' && s.key === view)) &&
                SECTIONS.filter((s) => s.group === 'Home Page').map((s) =>
                  navItem(s.key, s.label, s.icon, dirtyKeys.includes(s.key) && <span className="h-2 w-2 rounded-full bg-[#d97706]" title="Unsaved changes" />, true)
                )}
              {PAGE_GROUPS.map((g) => {
                const pages = navPages.filter((p) => p.group === g.group);
                const active = pages.some((p) => view === `page:${p.id}`);
                return (
                  <React.Fragment key={g.group}>
                    {groupHeader(g.group, g.label, g.icon, active, pages.length)}
                    {isOpen(g.group, active) && pages.map((p) => navItem(`page:${p.id}`, p.name, FileText, draftDot(p), true))}
                  </React.Fragment>
                );
              })}
              {navItem('pages', 'All Pages', Layers)}
              {navItem('page:new', 'Add New Page', Plus)}
              {navItem('urls', 'Page URLs & Redirects', Link2)}
            </div>
          </div>
          <div>
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#517362]">Forms</p>
            <div className="space-y-0.5">
              {FORM_SCREENS.map((fs) =>
                navItem(fs.id, fs.label, ClipboardList, fs.keys.some((k) => dirtyKeys.includes(k)) && <span className="h-2 w-2 rounded-full bg-[#d97706]" title="Unsaved changes" />)
              )}
              {navItem('enquiries', 'Submitted Enquiries', Inbox)}
            </div>
          </div>
          <div>
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#517362]">Tour Packages</p>
            <div className="space-y-0.5">
              {groupHeader('packages-list', 'Packages', Package, !!packageId, navPackages.length)}
              {isOpen('packages-list', !!packageId) && navPackages.map((p) => navItem(`package:${p.id}`, p.name, Package, draftDot(p), true))}
              {navItem('packages', 'All Packages', Layers)}
              {navItem('package:new', 'Add New Package', Plus)}
            </div>
          </div>
          <div>
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#517362]">Site Settings</p>
            <div className="space-y-0.5">
              {SECTIONS.filter((s) => s.group === 'Site Settings').map((s) =>
                navItem(s.key, s.label, s.icon, dirtyKeys.includes(s.key) && <span className="h-2 w-2 rounded-full bg-[#d97706]" title="Unsaved changes" />)
              )}
            </div>
          </div>
          <div>
            <p className="px-3 pb-1 text-[10px] font-bold uppercase tracking-wider text-[#517362]">SEO & Google</p>
            <div className="space-y-0.5">
              {SECTIONS.filter((s) => s.group === 'SEO & Google').map((s) =>
                navItem(s.key, s.label, s.icon, dirtyKeys.includes(s.key) && <span className="h-2 w-2 rounded-full bg-[#d97706]" title="Unsaved changes" />)
              )}
              {navItem('urls', 'URLs & Redirects', Link2)}
            </div>
          </div>
        </nav>

        <div className="border-t border-[#d2e4d9] p-3">
          {navItem('profile', admin.name, UserCog)}
        </div>
      </aside>

      <div className="lg:pl-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-[#d2e4d9] bg-white/95 px-4 backdrop-blur sm:px-6">
          <button type="button" onClick={() => setNavOpen(true)} className="cursor-pointer rounded-lg p-1.5 text-[#082318] hover:bg-[#f0f6f2] lg:hidden" aria-label="Open menu">
            <Menu className="h-5 w-5" />
          </button>
          <h1 className="truncate text-base font-bold sm:text-lg">{title}</h1>
          <div className="ml-auto flex items-center gap-2">
            <Link href="/" target="_blank" className="inline-flex items-center gap-1.5 rounded-lg border border-[#c4dcce] px-3 py-2 text-xs font-bold text-[#082318] hover:bg-[#f0f6f2]">
              <ExternalLink className="h-3.5 w-3.5" /> <span className="hidden sm:inline">View website</span>
            </Link>
            <Button variant="ghost" onClick={logout}>
              <LogOut className="h-3.5 w-3.5" /> <span className="hidden sm:inline">Log out</span>
            </Button>
          </div>
        </header>

        <main className="px-4 pt-6 sm:px-6">
          <LinkOptionsProvider options={linkOptions}>
          <div className={`mx-auto max-w-5xl ${section || formScreen ? '' : 'pb-10'}`}>
            {view === 'dashboard' && (
              <Dashboard enquiries={enquiries} loading={enquiriesLoading} dirtyKeys={dirtyKeys} updatedAt={updatedAt} go={go} />
            )}
            {view === 'help' && <HelpGuide go={go} />}
            {formScreen &&
              (contentLoading ? (
                <div className="flex items-center gap-2 p-10 text-sm text-[#517362]">
                  <Loader2 className="h-4 w-4 animate-spin" /> Loading content…
                </div>
              ) : (
                <>
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-2xl rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3">
                      <p className="text-sm font-semibold text-[#082318]">What is this?</p>
                      <p className="mt-0.5 text-sm text-[#375847]">{formScreen.help}</p>
                      <p className="mt-1.5 text-xs text-[#517362]">Everything for this form is on this one screen. Press <strong>Save &amp; Publish</strong> at the bottom when done.</p>
                    </div>
                    <a href={formScreen.where} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-[#c4dcce] bg-white px-3 py-2 text-xs font-bold text-[#082318] hover:bg-[#f0f6f2]">
                      <ExternalLink className="h-3.5 w-3.5" /> See it on the website
                    </a>
                  </div>
                  <div className="space-y-4">
                    <formScreen.Editor
                      draft={draft}
                      set={(key, value) => setDraft((d) => ({ ...d, [key]: value }))}
                      onError={(message) => notify('error', message)}
                    />
                  </div>
                  <SaveBar
                    dirty={formScreen.keys.some((k) => dirtyKeys.includes(k))}
                    saving={saving}
                    updatedAt={formScreen.keys.map((k) => updatedAt[k]).filter(Boolean).sort().at(-1)}
                    onSave={() => saveSections(formScreen.keys.filter((k) => dirtyKeys.includes(k)))}
                    onDiscard={() => setDraft((d) => ({ ...d, ...Object.fromEntries(formScreen.keys.map((k) => [k, saved[k]])) }))}
                  />
                </>
              ))}
            {view === 'enquiries' && (
              <EnquiriesPanel enquiries={enquiries} loading={enquiriesLoading} onRefresh={reloadEnquiries} onUpdate={updateEnquiry} onDelete={deleteEnquiry} />
            )}
            {(view === 'pages' || pageId) && (
              <CollectionManager key={view} collection="pages" initialId={pageId ?? undefined} api={api} notify={notify} onError={handleError} onItemsChange={syncPages} onUrlChange={reloadAfterUrlChange} />
            )}
            {(view === 'packages' || packageId) && (
              <CollectionManager key={view} collection="packages" initialId={packageId ?? undefined} api={api} notify={notify} onError={handleError} onItemsChange={syncPackages} onUrlChange={reloadAfterUrlChange} />
            )}
            {view === 'urls' && (
              <UrlManager
                api={api}
                notify={notify}
                onError={handleError}
                onUrlChange={reloadAfterUrlChange}
                openItem={(c, id) => go(c === 'pages' ? `page:${id}` : `package:${id}`)}
              />
            )}
            {view === 'profile' && <ProfilePanel admin={admin} onSaved={setAdmin} notify={notify} onError={handleError} />}
            {section &&
              (contentLoading ? (
                <div className="flex items-center gap-2 p-10 text-sm text-[#517362]">
                  <Loader2 className="h-4 w-4 animate-spin" /> Loading content…
                </div>
              ) : (
                <>
                  <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
                    <div className="max-w-2xl rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3">
                      <p className="text-sm font-semibold text-[#082318]">What is this?</p>
                      <p className="mt-0.5 text-sm text-[#375847]">{section.help}</p>
                      <p className="mt-1.5 text-xs text-[#517362]">Edit the fields below, then press <strong>Save &amp; Publish</strong> at the bottom. The website updates straight away.</p>
                    </div>
                    <div className="flex gap-2">
                      <a href={section.where} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-lg border border-[#c4dcce] bg-white px-3 py-2 text-xs font-bold text-[#082318] hover:bg-[#f0f6f2]">
                        <ExternalLink className="h-3.5 w-3.5" /> See it on the website
                      </a>
                    <RevisionsPanel
                      entity="content"
                      refId={section.key}
                      onError={handleError}
                      onRestore={(data) => setDraft((d) => ({ ...d, [section.key]: data as SiteContent[typeof section.key] }))}
                    />
                    </div>
                  </div>
                  <div className="space-y-4">
                    {React.createElement(SECTION_EDITORS[section.key], {
                      value: draft[section.key],
                      onChange: (value) => setDraft((d) => ({ ...d, [section.key]: value })),
                      onError: (message) => notify('error', message),
                    })}
                  </div>
                  <SaveBar
                    dirty={dirtyKeys.includes(section.key)}
                    saving={saving}
                    updatedAt={updatedAt[section.key]}
                    onSave={() => saveSection(section.key)}
                    onDiscard={() => setDraft((d) => ({ ...d, [section.key]: saved[section.key] }))}
                  />
                </>
              ))}
          </div>
          </LinkOptionsProvider>
        </main>
      </div>
    </div>
  );
}

function Dashboard({ enquiries, loading, dirtyKeys, updatedAt, go }: {
  enquiries: Enquiry[];
  loading: boolean;
  dirtyKeys: SiteContentKey[];
  updatedAt: Partial<Record<SiteContentKey, string>>;
  go: (v: View) => void;
}) {
  const [weekAgo] = useState(() => Date.now() - 7 * 24 * 60 * 60 * 1000);
  const stats = [
    { label: 'New enquiries', value: enquiries.filter((e) => e.status === 'New Enquiry').length, hint: 'Waiting for a callback', accent: 'text-[#d97706]' },
    { label: 'Last 7 days', value: enquiries.filter((e) => new Date(e.created_at).getTime() > weekAgo).length, hint: 'Enquiries received', accent: 'text-[#082318]' },
    { label: 'Confirmed', value: enquiries.filter((e) => e.status === 'Confirmed').length, hint: 'Bookings confirmed', accent: 'text-emerald-700' },
    { label: 'Total enquiries', value: enquiries.length, hint: 'All time', accent: 'text-[#082318]' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold text-[#082318]">Welcome! What would you like to do?</p>
          <p className="text-sm text-[#517362]">New to this panel? The Help &amp; Guide explains every task step by step.</p>
        </div>
        <Button onClick={() => go('help')}>
          <LifeBuoy className="h-3.5 w-3.5" /> Open Help &amp; Guide
        </Button>
      </div>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
        {[
          { label: 'Edit homepage', icon: LayoutDashboard, to: 'hero' as View },
          { label: 'Edit a page', icon: FileText, to: 'pages' as View },
          { label: 'Add new page', icon: Plus, to: 'page:new' as View },
          { label: 'Tour packages', icon: Package, to: 'packages' as View },
          { label: 'Menu & links', icon: Menu, to: 'navigation' as View },
          { label: 'Google / SEO', icon: Search, to: 'seo' as View },
        ].map((a) => (
          <button key={a.label} type="button" onClick={() => go(a.to)} className="flex cursor-pointer flex-col items-center gap-2 rounded-xl border border-[#d2e4d9] bg-white p-3 text-center text-xs font-bold text-[#082318] shadow-sm transition hover:border-emerald-500 hover:bg-emerald-50">
            <a.icon className="h-5 w-5 text-emerald-700" />
            {a.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <button key={s.label} type="button" onClick={() => go('enquiries')} className="cursor-pointer rounded-2xl border border-[#d2e4d9] bg-white p-4 text-left shadow-sm transition hover:border-emerald-500">
            <p className="text-xs font-semibold text-[#517362]">{s.label}</p>
            <p className={`mt-1 font-serif text-3xl font-bold ${s.accent}`}>{loading ? '–' : s.value}</p>
            <p className="text-[11px] text-[#517362]">{s.hint}</p>
          </button>
        ))}
      </div>

      <Card
        title="Latest enquiries"
        actions={
          <Button variant="secondary" onClick={() => go('enquiries')}>
            View all <ArrowRight className="h-3.5 w-3.5" />
          </Button>
        }
      >
        {enquiries.length === 0 ? (
          <p className="text-sm text-[#517362]">{loading ? 'Loading…' : 'No enquiries yet.'}</p>
        ) : (
          <ul className="-my-2 divide-y divide-[#e2ede6]">
            {enquiries.slice(0, 6).map((e) => (
              <li key={e.id} className="flex flex-wrap items-center gap-x-3 gap-y-1 py-2.5">
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-semibold">{e.name} <span className="font-mono text-xs font-normal text-[#517362]">{e.phone}</span></p>
                  <p className="truncate text-xs text-[#517362]">{e.safari_mode || 'Safari enquiry'}{e.safari_date ? ` · ${e.safari_date}` : ''}</p>
                </div>
                <StatusBadge status={e.status} />
                <span className="w-24 text-right text-xs text-[#517362]">{formatDateTime(e.created_at)}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <Card title="Website content" description="Every part of the website you can edit.">
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {[
            { view: 'pages' as const, label: 'Pages', desc: 'Safari, service, info & policy pages — create, edit, SEO', icon: FileText },
            { view: 'packages' as const, label: 'Tour Packages', desc: 'Package cards, detail pages, prices, SEO', icon: Package },
          ].map((c) => (
            <button key={c.view} type="button" onClick={() => go(c.view)} className="group flex cursor-pointer items-start gap-3 rounded-xl border-2 border-emerald-200 bg-emerald-50/40 p-3 text-left transition hover:border-emerald-500">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-700 text-white">
                <c.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold group-hover:text-emerald-800">{c.label}</span>
                <span className="block text-xs text-[#517362]">{c.desc}</span>
              </span>
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <button key={s.key} type="button" onClick={() => go(s.key)} className="group flex cursor-pointer items-start gap-3 rounded-xl border border-[#d2e4d9] p-3 text-left transition hover:border-emerald-500 hover:bg-[#f4f8f5]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <s.icon className="h-4 w-4" />
              </span>
              <span className="min-w-0">
                <span className="flex items-center gap-1.5 text-sm font-semibold group-hover:text-emerald-800">
                  {s.label}
                  {dirtyKeys.includes(s.key) && <span className="h-2 w-2 rounded-full bg-[#d97706]" title="Unsaved changes" />}
                </span>
                <span className="block truncate text-xs text-[#517362]">
                  {updatedAt[s.key] ? `Updated ${formatDateTime(updatedAt[s.key]!)}` : s.desc}
                </span>
              </span>
            </button>
          ))}
        </div>
      </Card>

      <p className="flex items-center gap-1.5 text-xs text-[#517362]">
        <Compass className="h-3.5 w-3.5" /> sitemap.xml and robots.txt update automatically from published pages and packages.
      </p>
    </div>
  );
}

function ProfilePanel({ admin, onSaved, notify, onError }: {
  admin: Admin;
  onSaved: (a: Admin) => void;
  notify: (kind: 'success' | 'error', message: string) => void;
  onError: (err: unknown) => void;
}) {
  const [name, setName] = useState(admin.name);
  const [email, setEmail] = useState(admin.email);
  const [savingProfile, setSavingProfile] = useState(false);
  const [pw, setPw] = useState({ current: '', next: '', confirm: '' });
  const [savingPw, setSavingPw] = useState(false);

  const saveProfile = async () => {
    setSavingProfile(true);
    try {
      const { admin: updated } = await api<{ admin: Admin }>('/api/admin/me', { method: 'PUT', body: JSON.stringify({ name, email }) });
      onSaved(updated);
      notify('success', 'Account details updated');
    } catch (err) {
      onError(err);
    } finally {
      setSavingProfile(false);
    }
  };

  const changePassword = async () => {
    if (pw.next !== pw.confirm) return notify('error', 'New passwords do not match');
    if (pw.next.length < 8) return notify('error', 'New password must be at least 8 characters');
    setSavingPw(true);
    try {
      await api('/api/admin/me', { method: 'PUT', body: JSON.stringify({ currentPassword: pw.current, newPassword: pw.next }) });
      setPw({ current: '', next: '', confirm: '' });
      notify('success', 'Password changed');
    } catch (err) {
      onError(err);
    } finally {
      setSavingPw(false);
    }
  };

  return (
    <div className="max-w-2xl space-y-4">
      <Card title="Account details" description="The email is what you sign in with.">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput label="Name" value={name} onChange={setName} />
          <TextInput label="Login email" type="email" value={email} onChange={setEmail} />
        </div>
        <div className="flex justify-end">
          <Button onClick={saveProfile} disabled={savingProfile || (name === admin.name && email === admin.email)}>
            {savingProfile && <Loader2 className="h-3.5 w-3.5 animate-spin" />} Save details
          </Button>
        </div>
      </Card>
      <Card title="Change password">
        <TextInput label="Current password" type="password" autoComplete="current-password" value={pw.current} onChange={(v) => setPw({ ...pw, current: v })} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <TextInput label="New password" type="password" autoComplete="new-password" hint="At least 8 characters" value={pw.next} onChange={(v) => setPw({ ...pw, next: v })} />
          <TextInput label="Confirm new password" type="password" autoComplete="new-password" value={pw.confirm} onChange={(v) => setPw({ ...pw, confirm: v })} />
        </div>
        <div className="flex justify-end">
          <Button onClick={changePassword} disabled={savingPw || !pw.current || !pw.next}>
            {savingPw && <Loader2 className="h-3.5 w-3.5 animate-spin" />} Update password
          </Button>
        </div>
      </Card>
    </div>
  );
}
