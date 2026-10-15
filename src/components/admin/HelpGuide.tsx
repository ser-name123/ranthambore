'use client';

import React from 'react';
import { ArrowRight, BookOpen, Eye, FileText, History, Image as ImageIcon, Inbox, LayoutDashboard, Link2, Menu, Package, Search, ShieldCheck } from 'lucide-react';
import type { SiteContentKey } from '@/lib/site-content';
import { Button } from './ui';

type Target = 'pages' | 'packages' | 'enquiries' | 'urls' | 'page:new' | 'package:new' | 'form-widget' | 'form-popup' | 'form-enquiry' | SiteContentKey;

interface Topic {
  icon: typeof BookOpen;
  title: string;
  hindi: string; // one-line summary in simple Hinglish
  steps: string[];
  actions: { label: string; to: Target }[];
}

const TOPICS: Topic[] = [
  {
    icon: LayoutDashboard,
    title: 'Change something on the homepage',
    hindi: 'Homepage ka koi bhi text, photo ya section badalna ho to Page Management → Home Page kholiye.',
    steps: [
      'In the left menu open Page Management → Home Page.',
      'Pick the part you want, e.g. “Hero Banner” for the top, “FAQs” for questions. Each screen says “What is this?” at the top and has a “See it on the website” button.',
      'Edit the fields. Click a row in a list to open it; use ↑ ↓ to reorder and the bin to delete.',
      'Press “Save & Publish” at the bottom. The website updates immediately.',
      'To hide a whole block (e.g. Travel Guides), open “Sections & Headings” and switch it off.',
    ],
    actions: [
      { label: 'Sections & Headings', to: 'home' },
      { label: 'Hero Banner', to: 'hero' },
    ],
  },
  {
    icon: FileText,
    title: 'Edit a page (Gypsy Safari, About Us, Privacy Policy…)',
    hindi: 'Har page ka banner, sections aur Google wali details page ke andar hi edit hoti hain.',
    steps: [
      'Open Page Management and expand “Services & Safaris”, “Information Pages” or “Legal & Policies”, then click the page.',
      '“Top banner” is the big box at the top of the page.',
      '“Page sections” are the blocks below it, in order. Click one to edit; use “Add section” at the bottom to add cards, prices, a table, FAQs, a text block, a booking banner and more.',
      'Press “Save” at the bottom. Use “Preview” to see it first, and “Live page” to open it.',
    ],
    actions: [{ label: 'All pages', to: 'pages' }],
  },
  {
    icon: FileText,
    title: 'Add a new page',
    hindi: 'Naya page banane ke liye “Add New Page”, phir use menu mein jodna mat bhooliye.',
    steps: [
      'Click “Add New Page”. Type the page name — the web address (URL) is created for you.',
      'Fill in the banner and add sections.',
      'Leave “Published” off while you work: the page stays hidden (a Draft). Use “Preview” to check it.',
      'Turn “Published” on and Save. Then add it to the top menu: Site Settings → Menu & Footer Links → pick the page from the list.',
    ],
    actions: [
      { label: 'Add New Page', to: 'page:new' },
      { label: 'Menu & Footer Links', to: 'navigation' },
    ],
  },
  {
    icon: Package,
    title: 'Tour packages and prices',
    hindi: 'Package ka naam, price, photo aur din-wise itinerary yahan se badliye.',
    steps: [
      'Open Tour Packages and click a package.',
      '“Package details” is the card shown on the homepage (name, price, duration, photo, highlights). Tick “Show on homepage” to feature it.',
      '“Detail page sections” is the full package page: itinerary, inclusions/exclusions, FAQs.',
      'Safari per-person prices (Gypsy/Canter) are separate: Home Page → Safari Rates.',
    ],
    actions: [
      { label: 'Tour Packages', to: 'packages' },
      { label: 'Safari Rates', to: 'pricing' },
    ],
  },
  {
    icon: Inbox,
    title: 'Bookings and enquiries',
    hindi: 'Website ke har form ki entry “Enquiries” mein aati hai — wahin se call/WhatsApp kariye.',
    steps: [
      'Every booking popup and enquiry form lands in “Enquiries” (the orange number shows new ones). The list refreshes by itself every minute.',
      'Click a row to see all details, then WhatsApp, call or email the guest with one click.',
      'Change the status as you work (New → Contacted → Quoted → Confirmed) and write private notes.',
      'Use “Export CSV” to download them for Excel.',
      'Every form has its own screen under Forms: Availability Widget (homepage booking box), Booking Popup and Enquiry Form. Each screen holds all of that form’s texts, dropdown choices, prices and messages.',
    ],
    actions: [
      { label: 'Enquiries', to: 'enquiries' },
      { label: 'Booking Popup', to: 'form-popup' },
      { label: 'Enquiry Form', to: 'form-enquiry' },
    ],
  },
  {
    icon: Menu,
    title: 'Menu, phone numbers, logo and footer',
    hindi: 'Phone/WhatsApp number ek jagah badalne se poori website mein badal jaata hai.',
    steps: [
      'Phone, WhatsApp, email and address: Site Settings → Contact Details. Used on every page.',
      'Top menu and footer links: Site Settings → Menu & Footer Links. Add “Dropdown items” for a sub-menu.',
      'Logo and brand name: Site Settings → Logo & Brand.',
      'Footer texts and the legal disclaimer: Site Settings → Footer & Disclaimer.',
    ],
    actions: [
      { label: 'Contact Details', to: 'contact' },
      { label: 'Menu & Footer Links', to: 'navigation' },
    ],
  },
  {
    icon: ImageIcon,
    title: 'Photos',
    hindi: 'Photo badalne ke liye “Upload” dabaiye ya list se photo chuniye.',
    steps: [
      'Every image field has a list of the website’s photos and an “Upload” button (JPG, PNG, WebP; up to 5 MB).',
      'Wide landscape photos (about 1600 × 900) look best in banners.',
      'For banner and section images, fill in the “description (alt text)” where offered — Google and blind visitors use it.',
    ],
    actions: [{ label: 'Hero Banner', to: 'hero' }],
  },
  {
    icon: Search,
    title: 'Google (SEO): titles, canonical, robots.txt, sitemap',
    hindi: 'Google mein page kaise dikhe — har page ke neeche “SEO” box mein likhiye.',
    steps: [
      'Each page and package has an “SEO” box at the bottom: Google title (about 60 characters), description (about 160) and share image. The preview shows how it looks on Google.',
      'Canonical URL: leave it empty. Only if two pages show the same content, put the main page’s address in the copy’s canonical field.',
      '“Hide from Google” keeps a page out of search results and the sitemap.',
      'Homepage title, your website address, Google Search Console and Analytics: SEO & Google → SEO & Google.',
      'robots.txt and sitemap.xml are made automatically. To use your own, open SEO & Google → Robots.txt & Sitemap, choose “Custom file” and paste or upload it. You can download both files there too.',
    ],
    actions: [
      { label: 'SEO & Google', to: 'seo' },
      { label: 'Robots.txt & Sitemap', to: 'seoFiles' },
    ],
  },
  {
    icon: Link2,
    title: 'Change a page URL, or redirect an old address',
    hindi: 'Kisi bhi page ka URL badalna ho to “URLs & Redirects” kholiye — purana link apne aap naye page par chala jaayega.',
    steps: [
      'Open SEO & Google → URLs & Redirects (also under Page Management). Every page and package address is listed there.',
      'Click “Edit URL”, type the new address and press “Save URL”. You can also change it inside the page editor (the “URL” field).',
      'The old address automatically redirects (301) to the new one, so Google rankings and shared links keep working. Links in the menu, footer and pages are updated for you.',
      'Moved from an old website, or deleted a page? Use “Add redirect”: Old URL = the old address (e.g. /old-tiger-safari), New URL = the page it should open. Choose 301 for permanent moves.',
      'Each redirect shows how many visits it has sent. Use the ↗ button to test it.',
    ],
    actions: [{ label: 'URLs & Redirects', to: 'urls' }],
  },
  {
    icon: History,
    title: 'Made a mistake? Undo with History',
    hindi: 'Galti ho gayi to “History” se purana version wapas laa sakte hain.',
    steps: [
      'Every page, package and section has a “History” button. The last 30 saved versions are kept.',
      'Click “Load” on an older version — it fills the editor but does not change the website until you press Save.',
      'Before saving, “Discard” throws away your unsaved changes.',
    ],
    actions: [],
  },
  {
    icon: Eye,
    title: 'Good to know',
    hindi: 'Orange dot ka matlab: abhi save nahi hua hai.',
    steps: [
      'An orange dot next to a menu item means that section has unsaved changes.',
      'Words wrapped in *stars* in a heading are shown in the orange/green highlight colour.',
      'In text boxes: an empty line starts a new paragraph, “- ” at the start of a line makes a bullet, **double stars** make text bold, and [text](/page) makes a link.',
      'Change your own password under your name at the bottom of the left menu.',
    ],
    actions: [],
  },
];

export default function HelpGuide({ go }: { go: (to: Target) => void }) {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-emerald-200 bg-gradient-to-br from-emerald-50 to-white p-5">
        <h2 className="flex items-center gap-2 text-lg font-bold text-[#082318]">
          <ShieldCheck className="h-5 w-5 text-emerald-700" /> How to manage your website
        </h2>
        <p className="mt-1 text-sm text-[#375847]">
          Everything visitors see — text, photos, prices, pages, menu, forms and Google settings — is edited from this admin panel. Nothing needs a developer.
          Pick a task below; each has the steps and a button that takes you straight there.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {TOPICS.map((t) => (
          <section key={t.title} className="flex flex-col rounded-2xl border border-[#d2e4d9] bg-white p-5 shadow-sm">
            <h3 className="flex items-center gap-2 font-bold text-[#082318]">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-700">
                <t.icon className="h-4 w-4" />
              </span>
              {t.title}
            </h3>
            <p className="mt-2 rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-900">{t.hindi}</p>
            <ol className="mt-3 flex-1 list-decimal space-y-1.5 pl-5 text-sm text-[#1b3a2a]">
              {t.steps.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>
            {t.actions.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {t.actions.map((a) => (
                  <Button key={a.label} variant="secondary" onClick={() => go(a.to)}>
                    {a.label} <ArrowRight className="h-3.5 w-3.5" />
                  </Button>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>
    </div>
  );
}
