'use client';

import React from 'react';
import RichTextEditor from './RichTextEditor';
import type {
  AboutContent,
  BrandingContent,
  FormsContent,
  UiLabels,
  VehicleCard,
  VehiclesContent,
  ContactContent,
  FaqItem,
  FooterContent,
  GuideItem,
  HeroContent,
  HomeContent,
  HomeSectionKey,
  NavigationContent,
  NavLink,
  OverviewContent,
  PricingContent,
  SeoContent,
  ServiceIcon,
  ServiceItem,
  SightingItem,
  SightingTone,
  SiteContent,
  SiteContentKey,
  TestimonialItem,
  ZonesContent,
} from '@/lib/site-content';
import { LinkPicker } from './LinkOptions';
import SeoFilesEditor from './SeoFilesEditor';
import { ServiceFormFields, ThankYouFields } from './FormScreens';
import { Card, ImagePicker, LinesInput, ListEditor, NumberInput, SelectInput, TextArea, TextInput, Toggle } from './ui';

export interface EditorProps<T> {
  value: T;
  onChange: (value: T) => void;
  onError: (message: string) => void;
}

/** A grid of text inputs for the listed string fields of an object. */
function StringFields<T extends object>({ value, fields, onChange, cols = 2 }: {
  value: T;
  fields: [keyof T & string, string][];
  onChange: (v: T) => void;
  cols?: 2 | 3;
}) {
  return (
    <div className={`grid grid-cols-1 gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {fields.map(([key, label]) => (
        <TextInput key={key} label={label} value={String(value[key] ?? '')} onChange={(v) => onChange({ ...value, [key]: v })} />
      ))}
    </div>
  );
}

function grid2(children: React.ReactNode) {
  return <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">{children}</div>;
}

function ContactEditor({ value, onChange }: EditorProps<ContactContent>) {
  const set = (patch: Partial<ContactContent>) => onChange({ ...value, ...patch });
  return (
    <Card title="Phones, WhatsApp & Office" description="Used in the header, footer, mobile bar, contact page, policy pages and every WhatsApp/Call button.">
      {grid2(
        <>
          <TextInput label="Primary phone" value={value.phonePrimary} onChange={(v) => set({ phonePrimary: v })} placeholder="+91 99719 65629" />
          <TextInput label="Alternate phone" value={value.phoneSecondary} onChange={(v) => set({ phoneSecondary: v })} />
          <TextInput label="WhatsApp number" hint="With country code. All WhatsApp buttons open a chat with this number." value={value.whatsapp} onChange={(v) => set({ whatsapp: v })} />
          <TextInput label="Email" type="email" value={value.email} onChange={(v) => set({ email: v })} />
        </>
      )}
      <RichTextEditor label="Office address" rows={2} value={value.address} onChange={(v) => set({ address: v })} />
      <TextInput label="Support hours" value={value.supportHours} onChange={(v) => set({ supportHours: v })} />
    </Card>
  );
}

function HeroEditor({ value, onChange, onError }: EditorProps<HeroContent>) {
  const set = (patch: Partial<HeroContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="Heading & text">
        <TextInput label="Season badge" value={value.seasonBadge} onChange={(v) => set({ seasonBadge: v })} />
        {grid2(
          <>
            <TextInput label="Heading" value={value.heading} onChange={(v) => set({ heading: v })} />
            <TextInput label="Highlighted heading (gradient)" value={value.headingHighlight} onChange={(v) => set({ headingHighlight: v })} />
          </>
        )}
        <RichTextEditor label="Sub-heading" value={value.subheading} onChange={(v) => set({ subheading: v })} />
        <LinesInput label="Key points (checkmarks)" value={value.points} onChange={(v) => set({ points: v })} />
        <ImagePicker label="Background image" value={value.backgroundImage} onChange={(v) => set({ backgroundImage: v })} onError={onError} />
        <TextInput label="Background image description (alt text, for Google & screen readers)" value={value.imageAlt} onChange={(v) => set({ imageAlt: v })} />
        <TextInput label="Second badge" value={value.trustBadge} onChange={(v) => set({ trustBadge: v })} />
      </Card>
      <Card title="Buttons">
        <StringFields
          value={value}
          onChange={onChange}
          fields={[
            ['primaryCta', 'Booking button'],
            ['secondaryCta', 'Second button'],
            ['secondaryCtaLink', 'Second button link'],
            ['whatsappCta', 'WhatsApp button'],
            ['whatsappText', 'WhatsApp message'],
          ]}
        />
      </Card>
      <p className="rounded-xl border border-emerald-200 bg-emerald-50/60 px-4 py-3 text-sm text-[#375847]">
        The <strong>“Check Safari Availability”</strong> box on the right of the banner has its own screen: <strong>Forms → Availability Widget</strong>.
      </p>
      <Card title="Stats bar" description="Three animated counters below the buttons.">
        {value.stats.map((stat, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 rounded-xl bg-[#f4f8f5] p-3 sm:grid-cols-4">
            <NumberInput label={`Stat ${i + 1} number`} step={0.1} value={stat.value} onChange={(v) => set({ stats: value.stats.map((s, idx) => (idx === i ? { ...s, value: v } : s)) })} />
            <NumberInput label="Decimals" min={0} max={2} value={stat.decimals} onChange={(v) => set({ stats: value.stats.map((s, idx) => (idx === i ? { ...s, decimals: v } : s)) })} />
            <TextInput label="Suffix" value={stat.suffix} onChange={(v) => set({ stats: value.stats.map((s, idx) => (idx === i ? { ...s, suffix: v } : s)) })} />
            <TextInput label="Label" value={stat.label} onChange={(v) => set({ stats: value.stats.map((s, idx) => (idx === i ? { ...s, label: v } : s)) })} />
          </div>
        ))}
      </Card>
    </>
  );
}

const TONES: { value: SightingTone; label: string }[] = [
  { value: 'emerald', label: 'Green' },
  { value: 'amber', label: 'Amber' },
  { value: 'teal', label: 'Teal' },
  { value: 'rose', label: 'Red' },
];

function SightingsEditor({ value, onChange }: EditorProps<SightingItem[]>) {
  return (
    <Card title="Jungle Dispatch ticker" description="Scrolling strip at the bottom of the hero. Clicking an item opens the booking form with its zone.">
      <ListEditor
        items={value}
        onChange={onChange}
        addLabel="Add sighting / notice"
        itemLabel={(s) => `${s.badge} — ${s.text}`}
        newItem={(): SightingItem => ({ badge: 'LIVE SIGHTING', tone: 'emerald', text: '', zone: 'Zone 1' })}
        renderItem={(s, update) => (
          <>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <TextInput label="Badge" value={s.badge} onChange={(v) => update({ badge: v.toUpperCase() })} />
              <SelectInput label="Badge colour" value={s.tone} options={TONES} onChange={(v) => update({ tone: v })} />
              <TextInput label="Zone" value={s.zone} onChange={(v) => update({ zone: v })} />
            </div>
            <TextInput label="Message" value={s.text} onChange={(v) => update({ text: v })} />
          </>
        )}
      />
    </Card>
  );
}

function PricingEditor({ value, onChange }: EditorProps<PricingContent>) {
  const set = (patch: Partial<PricingContent>) => onChange({ ...value, ...patch });
  return (
    <Card title="Safari rates (₹ per person)" description="Used by the hero price calculator and the Gypsy vs Canter comparison.">
      {grid2(
        <>
          <NumberInput label="Gypsy — Indian" value={value.gypsyPerPerson} onChange={(v) => set({ gypsyPerPerson: v })} />
          <NumberInput label="Canter — Indian" value={value.canterPerPerson} onChange={(v) => set({ canterPerPerson: v })} />
          <NumberInput label="Gypsy — Foreign national" value={value.gypsyForeignerPerPerson} onChange={(v) => set({ gypsyForeignerPerPerson: v })} />
          <NumberInput label="Canter — Foreign national" value={value.canterForeignerPerPerson} onChange={(v) => set({ canterForeignerPerPerson: v })} />
          <NumberInput label="Child rate (% of adult) in hero estimate" min={0} max={100} value={value.childPricePercent} onChange={(v) => set({ childPricePercent: Math.max(0, Math.min(100, v)) })} />
        </>
      )}
    </Card>
  );
}

const SERVICE_ICONS: { value: ServiceIcon; label: string }[] = [
  { value: 'compass', label: 'Compass' },
  { value: 'car', label: 'Vehicle' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'map', label: 'Map pin' },
  { value: 'landmark', label: 'Fort / landmark' },
  { value: 'camera', label: 'Camera' },
];

function ServicesEditor({ value, onChange }: EditorProps<ServiceItem[]>) {
  return (
    <Card title="Services grid" description="Cards in the “Our Wildlife Services” section.">
      <ListEditor
        items={value}
        onChange={onChange}
        addLabel="Add service"
        itemLabel={(s) => s.title}
        newItem={(): ServiceItem => ({ icon: 'compass', title: 'New Service', desc: '', tag: '', action: 'Enquire Now', link: '' })}
        renderItem={(s, update) => (
          <>
            {grid2(
              <>
                <TextInput label="Title" value={s.title} onChange={(v) => update({ title: v })} />
                <SelectInput label="Icon" value={s.icon} options={SERVICE_ICONS} onChange={(v) => update({ icon: v })} />
              </>
            )}
            <RichTextEditor label="Description" value={s.desc} onChange={(v) => update({ desc: v })} />
            {grid2(
              <>
                <TextInput label="Tag" value={s.tag} onChange={(v) => update({ tag: v })} />
                <TextInput label="Button text" value={s.action} onChange={(v) => update({ action: v })} />
                <LinkPicker label="Button link (custom & empty = opens booking form)" value={s.link} onChange={(link) => update({ link })} />
              </>
            )}
          </>
        )}
      />
    </Card>
  );
}

function ZonesEditor({ value, onChange }: EditorProps<ZonesContent>) {
  return (
    <>
      <Card title="Safari zones" description="Zone cards in the “Safari Zones & Shift Timings” section, grouped by Core / Buffer.">
        <ListEditor
          items={value.zones}
          onChange={(zones) => onChange({ ...value, zones })}
          addLabel="Add zone"
          itemLabel={(z) => `${z.num} · ${z.name}`}
          newItem={(): ZonesContent['zones'][number] => ({ num: `Zone ${value.zones.length + 1}`, type: 'buffer', name: '', sightingRate: 70, tigers: '', features: '' })}
          renderItem={(z, update) => (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <TextInput label="Zone number" value={z.num} onChange={(v) => update({ num: v })} />
                <SelectInput label="Type" value={z.type} options={[{ value: 'core', label: 'Core (1–5)' }, { value: 'buffer', label: 'Buffer (6–10)' }]} onChange={(v) => update({ type: v })} />
                <NumberInput label="Sighting rate %" min={0} max={100} value={z.sightingRate} onChange={(v) => update({ sightingRate: Math.max(0, Math.min(100, v)) })} />
              </div>
              <TextInput label="Areas / name" value={z.name} onChange={(v) => update({ name: v })} />
              <TextInput label="Resident tigers" value={z.tigers} onChange={(v) => update({ tigers: v })} />
              <RichTextEditor label="Description" rows={2} value={z.features} onChange={(v) => update({ features: v })} />
            </>
          )}
        />
      </Card>
      <Card title="Zone labels">
        <StringFields
          value={value}
          onChange={onChange}
          fields={[
            ['coreTabLabel', 'Core tab'], ['bufferTabLabel', 'Buffer tab'], ['coreCardLabel', 'Core card label'], ['bufferCardLabel', 'Buffer card label'],
          ]}
        />
      </Card>
      <Card title="Shift timings table">
        <StringFields value={value} onChange={onChange} fields={[['timingsTitle', 'Table title'], ['timingsSubtitle', 'Table subtitle'], ['openLabel', 'Status: open'], ['bufferOnlyLabel', 'Status: buffer only']]} />
        <LinesInput label="Column headings" hint="One per line (4 columns)" rows={4} value={value.timingsColumns} onChange={(timingsColumns) => onChange({ ...value, timingsColumns })} />
        <StringFields value={value} onChange={onChange} fields={[['disclaimerTitle', 'Notice title'], ['disclaimerText', 'Notice text']]} />
        <ListEditor
          items={value.timings}
          onChange={(timings) => onChange({ ...value, timings })}
          addLabel="Add season row"
          itemLabel={(t) => t.period}
          newItem={() => ({ period: '', morning: '', afternoon: '', bufferOnly: false })}
          renderItem={(t, update) => (
            <>
              <TextInput label="Season / months" value={t.period} onChange={(v) => update({ period: v })} />
              {grid2(
                <>
                  <TextInput label="Morning shift" value={t.morning} onChange={(v) => update({ morning: v })} />
                  <TextInput label="Afternoon shift" value={t.afternoon} onChange={(v) => update({ afternoon: v })} />
                </>
              )}
              <Toggle label="Only buffer gates open (shows “Buffer Only” badge)" checked={t.bufferOnly} onChange={(v) => update({ bufferOnly: v })} />
            </>
          )}
        />
      </Card>
    </>
  );
}

function AboutEditor({ value, onChange, onError }: EditorProps<AboutContent>) {
  const set = (patch: Partial<AboutContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="About section">
        {grid2(
          <>
            <TextInput label="Heading" value={value.heading} onChange={(v) => set({ heading: v })} />
            <TextInput label="Highlighted heading (gradient)" value={value.headingHighlight} onChange={(v) => set({ headingHighlight: v })} />
          </>
        )}
        <RichTextEditor mode="full" label="Intro paragraph" value={value.intro} onChange={(v) => set({ intro: v })} />
        <RichTextEditor mode="full" label="Second paragraph" value={value.body} onChange={(v) => set({ body: v })} />
        <LinesInput label="Trust checklist" value={value.points} onChange={(v) => set({ points: v })} />
        <ImagePicker label="Image" value={value.image} onChange={(v) => set({ image: v })} onError={onError} />
        <StringFields
          value={value}
          onChange={onChange}
          fields={[
            ['imageAlt', 'Image description (alt text)'], ['floatBadgeNumber', 'Floating badge number'], ['floatBadgeTitle', 'Floating badge title'], ['floatBadgeText', 'Floating badge text'],
            ['primaryCta', 'Booking button'], ['secondaryCta', 'Second button'], ['secondaryCtaLink', 'Second button link'],
          ]}
        />
      </Card>
      <Card title="Stats row" description="Four animated counters below the about section.">
        {value.stats.map((stat, i) => {
          const update = (patch: Partial<typeof stat>) => set({ stats: value.stats.map((s, idx) => (idx === i ? { ...s, ...patch } : s)) });
          return (
            <div key={i} className="grid grid-cols-2 gap-3 rounded-xl bg-[#f4f8f5] p-3 sm:grid-cols-5">
              <NumberInput label={`Stat ${i + 1} number`} step={0.1} value={stat.value} onChange={(v) => update({ value: v })} />
              <NumberInput label="Decimals" min={0} max={2} value={stat.decimals} onChange={(v) => update({ decimals: v })} />
              <TextInput label="Suffix" value={stat.suffix} onChange={(v) => update({ suffix: v })} />
              <TextInput label="Label" value={stat.label} onChange={(v) => update({ label: v })} />
              <TextInput label="Sub-label" value={stat.sub} onChange={(v) => update({ sub: v })} />
            </div>
          );
        })}
      </Card>
    </>
  );
}

function TestimonialsEditor({ value, onChange }: EditorProps<TestimonialItem[]>) {
  return (
    <Card title="Guest reviews" description="Shown in “Stories From The Wilderness”. Three reviews fit one row.">
      <ListEditor
        items={value}
        onChange={onChange}
        addLabel="Add review"
        itemLabel={(t) => `${t.name} — ${t.location}`}
        newItem={() => ({ name: '', location: '', tour: '', rating: 5, date: '', quote: '' })}
        renderItem={(t, update) => (
          <>
            {grid2(
              <>
                <TextInput label="Guest name" value={t.name} onChange={(v) => update({ name: v })} />
                <TextInput label="Location" value={t.location} onChange={(v) => update({ location: v })} />
              </>
            )}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              <TextInput label="Tour taken" value={t.tour} onChange={(v) => update({ tour: v })} />
              <TextInput label="Visit date" value={t.date} onChange={(v) => update({ date: v })} placeholder="Visited March 2026" />
              <NumberInput label="Stars (1–5)" min={1} max={5} value={t.rating} onChange={(v) => update({ rating: Math.max(1, Math.min(5, Math.round(v))) })} />
            </div>
            <RichTextEditor label="Review" rows={4} value={t.quote} onChange={(v) => update({ quote: v })} />
          </>
        )}
      />
    </Card>
  );
}

function GuidesEditor({ value, onChange, onError }: EditorProps<GuideItem[]>) {
  return (
    <Card title="Travel guide cards" description="Cards in the “Ranthambore Travel Guide” section. “Read Full Guide” opens an enquiry with the article title.">
      <ListEditor
        items={value}
        onChange={onChange}
        addLabel="Add guide"
        itemLabel={(g) => g.title}
        newItem={() => ({ title: '', category: '', readTime: '3 min read', summary: '', image: '/images/tiger_lake.jpg', link: '' })}
        renderItem={(g, update) => (
          <>
            <TextInput label="Title" value={g.title} onChange={(v) => update({ title: v })} />
            {grid2(
              <>
                <TextInput label="Category" value={g.category} onChange={(v) => update({ category: v })} />
                <TextInput label="Read time" value={g.readTime} onChange={(v) => update({ readTime: v })} />
              </>
            )}
            <RichTextEditor label="Summary" value={g.summary} onChange={(v) => update({ summary: v })} />
            <LinkPicker label="“Read Full Guide” link (custom & empty = opens enquiry form)" value={g.link} onChange={(link) => update({ link })} />
            <ImagePicker label="Image" value={g.image} onChange={(v) => update({ image: v })} onError={onError} />
          </>
        )}
      />
    </Card>
  );
}

function FaqsEditor({ value, onChange }: EditorProps<FaqItem[]>) {
  return (
    <Card title="Frequently asked questions" description="Accordion on the homepage and contact page. The first one opens by default.">
      <ListEditor
        items={value}
        onChange={onChange}
        addLabel="Add question"
        itemLabel={(f) => f.q}
        newItem={() => ({ q: '', a: '' })}
        renderItem={(f, update) => (
          <>
            <TextInput label="Question" value={f.q} onChange={(v) => update({ q: v })} />
            <RichTextEditor mode="full" label="Answer" rows={4} value={f.a} onChange={(v) => update({ a: v })} />
          </>
        )}
      />
    </Card>
  );
}

function FooterEditor({ value, onChange }: EditorProps<FooterContent>) {
  const set = (patch: Partial<FooterContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="Booking banner (top of footer)">
        <TextInput label="Badge" value={value.ctaBadge} onChange={(v) => set({ ctaBadge: v })} />
        <TextInput label="Title" value={value.ctaTitle} onChange={(v) => set({ ctaTitle: v })} />
        <RichTextEditor label="Text" rows={2} value={value.ctaText} onChange={(v) => set({ ctaText: v })} />
      </Card>
      <Card title="Footer text">
        <RichTextEditor label="About text (under the logo)" value={value.about} onChange={(v) => set({ about: v })} />
        {grid2(
          <>
            <TextInput label="Rating title" value={value.ratingTitle} onChange={(v) => set({ ratingTitle: v })} />
            <TextInput label="Rating text" value={value.ratingText} onChange={(v) => set({ ratingText: v })} />
            <TextInput label="Season badge" value={value.seasonText} onChange={(v) => set({ seasonText: v })} />
            <TextInput label="Copyright line" value={value.copyright} onChange={(v) => set({ copyright: v })} />
          </>
        )}
        <LinesInput label="Trust badges" value={value.trustBadges} onChange={(v) => set({ trustBadges: v })} />
        <TextInput label="Disclaimer title" value={value.disclaimerTitle} onChange={(v) => set({ disclaimerTitle: v })} />
        <RichTextEditor mode="full" label="Statutory disclaimer" rows={5} hint="Keep this: it states you are not the official Forest Department website." value={value.disclaimer} onChange={(v) => set({ disclaimer: v })} />
        <StringFields
          value={value}
          onChange={onChange}
          fields={[['helpdeskTitle', 'Helpdesk column title'], ['directCallLabel', '“Direct Call” label'], ['callLabel', 'Banner call button prefix'], ['hoursLabel', '“Working Hours:” label'], ['primaryLabel', '“Primary” label'], ['alternateLabel', '“Alternate” label'], ['tagline', 'Bottom tagline']]}
        />
        <Toggle label="Show admin link in the footer" checked={value.showAdminLink} onChange={(showAdminLink) => set({ showAdminLink })} />
        <TextInput label="Admin link text" value={value.adminLinkLabel} onChange={(v) => set({ adminLinkLabel: v })} />
      </Card>
    </>
  );
}

function SeoEditor({ value, onChange, onError }: EditorProps<SeoContent>) {
  const set = (patch: Partial<SeoContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="Google search preview">
        <div className="rounded-xl border border-[#dadce0] bg-white p-4">
          <p className="truncate text-xs text-[#202124]">Ranthambore Wild Life Tour · ranthamborewildlifetour.com</p>
          <p className="mt-1 text-lg leading-snug text-[#1a0dab]">{value.title || 'Page title'}</p>
          <p className="mt-1 line-clamp-2 text-sm text-[#4d5156]">{value.description}</p>
        </div>
      </Card>
      <Card title="Website">
        {grid2(
          <>
            <TextInput label="Site name" hint="Added after every page title" value={value.siteName} onChange={(v) => set({ siteName: v })} />
            <TextInput label="Website URL" hint="Your live domain, e.g. https://ranthamborewildlifetour.com — used for canonical links, sitemap.xml and share cards" value={value.siteUrl} onChange={(v) => set({ siteUrl: v.trim() })} />
            <TextInput
              label="Homepage canonical URL (automatic)"
              hint="Leave empty: the website URL above is used automatically, and every other page gets its own address automatically too. Fill this only if Google should treat another address as the main homepage."
              value={value.homeCanonical}
              onChange={(v) => set({ homeCanonical: v.trim() })}
              placeholder="/"
            />
          </>
        )}
      </Card>
      <Card title="Homepage meta tags" description="Homepage title, description and share card. Also the fallback for pages without their own SEO.">
        <TextInput label="Title" hint={`${value.title.length} / 60 characters`} value={value.title} onChange={(v) => set({ title: v })} />
        <TextArea label="Meta description" hint={`${value.description.length} / 160 characters`} value={value.description} onChange={(v) => set({ description: v })} />
        <TextArea label="Keywords" hint="Comma separated" rows={2} value={value.keywords} onChange={(v) => set({ keywords: v })} />
      </Card>
      <Card
        title="WhatsApp / Facebook share image"
        description="The picture shown when someone shares a link to your website on WhatsApp, Facebook or LinkedIn. Best size 1200 × 630, under 300 KB (WhatsApp skips large images)."
      >
        <ImagePicker label="Share image" value={value.ogImage} onChange={(v) => set({ ogImage: v })} onError={onError} />
        <Toggle
          label="Use this image for every page (recommended)"
          checked={value.shareImageForAll}
          onChange={(shareImageForAll) => set({ shareImageForAll })}
        />
        <p className="text-xs text-[#517362]">
          Switch off to let each page use the share image from its own SEO box. The ready-made logo image is <span className="font-mono">/og-share.jpg</span>.
          After changing it, WhatsApp may keep showing the old picture for a while because it remembers previews.
        </p>
      </Card>
      <Card title="Google tools">
        {grid2(
          <>
            <TextInput label="Search Console verification code" hint="Only the content value of the google-site-verification tag" value={value.googleVerification} onChange={(v) => set({ googleVerification: v.trim() })} />
            <TextInput label="Google Analytics 4 ID" hint="Format: G-XXXXXXXXXX. Leave empty to disable." value={value.googleAnalyticsId} onChange={(v) => set({ googleAnalyticsId: v.trim().toUpperCase() })} />
            <TextInput
              label="Meta (Facebook) Pixel ID"
              hint="Only the number from fbq('init', '…'). Tracks page views on every page and a “Lead” on the Thank-you page. Leave empty to disable."
              value={value.metaPixelId}
              onChange={(v) => set({ metaPixelId: v.replace(/\D/g, '') })}
            />
          </>
        )}
      </Card>
    </>
  );
}


function LinksEditor({ label, links, onChange, allowChildren = false }: {
  label: string;
  links: NavLink[];
  onChange: (l: NavLink[]) => void;
  allowChildren?: boolean;
}) {
  return (
    <ListEditor
      items={links}
      onChange={onChange}
      addLabel={`Add ${label}`}
      itemLabel={(l) => `${l.label} → ${l.href}${l.children?.length ? ` (+${l.children.length} in dropdown)` : ''}`}
      newItem={(): NavLink => ({ label: '', href: '/' })}
      renderItem={(l, update) => (
        <>
          {grid2(
            <>
              <TextInput label="Text" value={l.label} onChange={(v) => update({ label: v })} />
              <LinkPicker label="Links to" value={l.href} onChange={(href) => update({ href })} onPick={(name) => !l.label && update({ label: name })} />
            </>
          )}
          {allowChildren && (
            <div className="rounded-xl border border-dashed border-[#c4dcce] bg-[#f4f8f5] p-3">
              <p className="mb-2 text-xs font-semibold text-[#183d2a]">Dropdown items (optional)</p>
              <LinksEditor label="dropdown item" links={l.children ?? []} onChange={(children) => update({ children })} />
            </div>
          )}
        </>
      )}
    />
  );
}

function NavigationEditor({ value, onChange }: EditorProps<NavigationContent>) {
  const set = (patch: Partial<NavigationContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="Header menu" description="Links in the top navigation bar and the mobile menu.">
        <TextInput label="Top bar badge" value={value.topBarBadge} onChange={(v) => set({ topBarBadge: v })} />
        <LinksEditor label="menu link" allowChildren links={value.header} onChange={(header) => set({ header })} />
      </Card>
      <Card title="Footer link columns">
        <ListEditor
          items={value.footerColumns}
          onChange={(footerColumns) => set({ footerColumns })}
          addLabel="Add column"
          itemLabel={(c) => c.title}
          newItem={() => ({ title: 'New column', links: [] })}
          renderItem={(c, update) => (
            <>
              <TextInput label="Column title" value={c.title} onChange={(v) => update({ title: v })} />
              <LinksEditor label="link" links={c.links} onChange={(links) => update({ links })} />
            </>
          )}
        />
      </Card>
      <Card title="Footer bottom links" description="Policy links next to the copyright line.">
        <LinksEditor label="link" links={value.legal} onChange={(legal) => set({ legal })} />
      </Card>
    </>
  );
}

const HOME_SECTION_LABELS: Record<HomeSectionKey, { label: string; headingFields: boolean }> = {
  sightings: { label: 'Sightings ticker (in hero)', headingFields: false },
  overview: { label: 'Tigers & park overview', headingFields: true },
  vehicles: { label: 'Gypsy vs Canter', headingFields: true },
  packages: { label: 'Featured packages', headingFields: true },
  services: { label: 'Services', headingFields: true },
  zones: { label: 'Zones & timings', headingFields: true },
  about: { label: 'About company', headingFields: false },
  testimonials: { label: 'Guest reviews', headingFields: true },
  guides: { label: 'Travel guides', headingFields: true },
  faq: { label: 'FAQs', headingFields: true },
  enquiry: { label: 'Enquiry form', headingFields: true },
};

function HomeEditor({ value, onChange }: EditorProps<HomeContent>) {
  return (
    <Card title="Homepage sections" description="Turn sections on/off and edit their headings. Wrap words in *stars* to highlight them. Section content is edited in its own menu item.">
      {(Object.keys(HOME_SECTION_LABELS) as HomeSectionKey[]).map((key) => {
        const h = value[key];
        const meta = HOME_SECTION_LABELS[key];
        const update = (patch: Partial<typeof h>) => onChange({ ...value, [key]: { ...h, ...patch } });
        return (
          <div key={key} className={`rounded-xl border p-4 ${h.visible ? 'border-[#d2e4d9] bg-white' : 'border-dashed border-[#c4dcce] bg-[#f4f8f5]'}`}>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <p className="text-sm font-bold text-[#082318]">{meta.label}</p>
              <Toggle label={h.visible ? 'Visible' : 'Hidden'} checked={h.visible} onChange={(visible) => update({ visible })} />
            </div>
            {h.visible && (
              <div className="mt-3 space-y-3">
                <TextInput label="Badge" value={h.badge} onChange={(v) => update({ badge: v })} />
                {meta.headingFields && (
                  <>
                    <TextInput label="Heading" value={h.title} onChange={(v) => update({ title: v })} />
                    <RichTextEditor label="Subtitle" rows={2} value={h.subtitle} onChange={(v) => update({ subtitle: v })} />
                  </>
                )}
              </div>
            )}
          </div>
        );
      })}
    </Card>
  );
}

function OverviewEditor({ value, onChange, onError }: EditorProps<OverviewContent>) {
  const set = (patch: Partial<OverviewContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="Famous tigers showcase" description="Clickable tiger cards with a large photo.">
        <ListEditor
          items={value.tigers}
          onChange={(tigers) => set({ tigers })}
          addLabel="Add tiger"
          itemLabel={(t) => `${t.name} — ${t.title}`}
          newItem={() => ({ name: '', title: '', territory: '', image: '/images/tiger_portrait.jpg', tag: '', desc: '', sightings: '' })}
          renderItem={(t, update) => (
            <>
              {grid2(
                <>
                  <TextInput label="Name" value={t.name} onChange={(v) => update({ name: v })} />
                  <TextInput label="Title" value={t.title} onChange={(v) => update({ title: v })} />
                  <TextInput label="Territory" value={t.territory} onChange={(v) => update({ territory: v })} />
                  <TextInput label="Tag" value={t.tag} onChange={(v) => update({ tag: v })} />
                </>
              )}
              <TextInput label="Sightings" value={t.sightings} onChange={(v) => update({ sightings: v })} />
              <RichTextEditor label="Description" rows={2} value={t.desc} onChange={(v) => update({ desc: v })} />
              <ImagePicker label="Photo" value={t.image} onChange={(v) => update({ image: v })} onError={onError} />
            </>
          )}
        />
      </Card>
      <Card title="Three info cards">
        {value.pillars.map((p, i) => (
          <div key={i} className="space-y-3 rounded-xl bg-[#f4f8f5] p-3">
            <TextInput label={`Card ${i + 1} title`} value={p.title} onChange={(v) => set({ pillars: value.pillars.map((x, idx) => (idx === i ? { ...x, title: v } : x)) })} />
            <RichTextEditor label="Text" rows={2} value={p.text} onChange={(v) => set({ pillars: value.pillars.map((x, idx) => (idx === i ? { ...x, text: v } : x)) })} />
          </div>
        ))}
      </Card>
      <Card title="Buttons">
        <StringFields value={value} onChange={onChange} fields={[['showcaseCta', 'Tiger showcase button'], ['timelineCta', 'Timeline button']]} />
      </Card>
      <Card title="History timeline">
        {grid2(
          <>
            <TextInput label="Badge" value={value.timelineBadge} onChange={(v) => set({ timelineBadge: v })} />
            <TextInput label="Title" value={value.timelineTitle} onChange={(v) => set({ timelineTitle: v })} />
          </>
        )}
        <ListEditor
          items={value.milestones}
          onChange={(milestones) => set({ milestones })}
          addLabel="Add milestone"
          itemLabel={(m) => `${m.year} — ${m.title}`}
          newItem={() => ({ year: '', title: '', badge: '', desc: '' })}
          renderItem={(m, update) => (
            <>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <TextInput label="Year" value={m.year} onChange={(v) => update({ year: v })} />
                <TextInput label="Title" value={m.title} onChange={(v) => update({ title: v })} />
                <TextInput label="Badge" value={m.badge} onChange={(v) => update({ badge: v })} />
              </div>
              <RichTextEditor label="Description" rows={2} value={m.desc} onChange={(v) => update({ desc: v })} />
            </>
          )}
        />
      </Card>
    </>
  );
}

function BrandingEditor({ value, onChange, onError }: EditorProps<BrandingContent>) {
  return (
    <Card title="Logo & name" description="Shown in the header, footer and admin login.">
      <StringFields value={value} onChange={onChange} fields={[['name', 'Brand name'], ['tagline', 'Tagline (under the name)']]} />
      <ImagePicker label="Logo (square image)" value={value.logo} onChange={(logo) => onChange({ ...value, logo })} onError={onError} />
      <ImagePicker
        label="Favicon (browser tab & phone home-screen icon)"
        value={value.favicon}
        onChange={(favicon) => onChange({ ...value, favicon })}
        onError={onError}
      />
      <p className="text-xs text-[#517362]">
        Use a square image with a simple shape (e.g. just the tiger&apos;s face): the full logo with text is unreadable at tab size. The ready-made icon is{' '}
        <span className="font-mono">/icon-512.png</span>.
      </p>
    </Card>
  );
}

function UiEditor({ value, onChange }: EditorProps<UiLabels>) {
  return (
    <>
      <Card title="Buttons & labels" description="Small texts used in many places across the website.">
        <StringFields
          value={value}
          onChange={onChange}
          cols={3}
          fields={[
            ['bookSafari', 'Book Safari button'], ['requestBooking', 'Request Booking button'], ['callNow', 'Call Now button'],
            ['whatsapp', 'WhatsApp button'], ['whatsappQuote', 'WhatsApp Quote button'], ['viewPackages', 'View Packages'],
            ['enquire', 'Enquire button'], ['details', 'Details button'], ['readGuide', 'Read guide button'],
            ['startingFrom', '“Starting from”'], ['perPerson', '“/ person”'], ['verifiedGuest', '“Verified Guest”'],
            ['sightingRate', 'Sighting rate label'], ['tigersLabel', '“Tigers:” label'], ['helplineLabel', '“Helpline:” label'],
            ['soundLabel', 'Sound button'], ['soundPlaying', 'Sound playing text'], ['territoryLabel', '“Territory:” label'],
          ]}
        />
      </Card>
      <Card title="Package filter tabs">
        <StringFields value={value.packageTabs} onChange={(packageTabs) => onChange({ ...value, packageTabs })} cols={3} fields={[['all', 'All'], ['short', 'Day / 1-Day'], ['standard', 'Weekend & 3-Day'], ['luxury', 'Luxury'], ['custom', 'Photography']]} />
      </Card>
      <Card title="Contact cards" description="Titles and buttons of the contact details block (contact page, policy sidebars).">
        <StringFields value={value.contactCards} onChange={(contactCards) => onChange({ ...value, contactCards })} cols={3} fields={[['call', 'Call title'], ['callAction', 'Call button'], ['whatsapp', 'WhatsApp title'], ['whatsappAction', 'WhatsApp button'], ['email', 'Email title'], ['emailAction', 'Email button'], ['hours', 'Hours title'], ['office', 'Office title']]} />
      </Card>
      <Card title="Page template labels" description="Used on every inner page and package page.">
        <StringFields value={value.pageLabels} onChange={(pageLabels) => onChange({ ...value, pageLabels })} cols={3} fields={[['home', 'Breadcrumb “Home”'], ['packagesBreadcrumb', 'Breadcrumb “Tour Packages”'], ['onThisPage', '“On this page”'], ['needHelp', '“Need help?”'], ['learnMore', '“Learn more”'], ['whatsappDesk', 'WhatsApp button'], ['packageEnquire', 'Package enquiry button'], ['fromPrice', '“From” (price)'], ['enquireNow', 'Default enquire button']]} />
      </Card>
      <Card title="WhatsApp button messages" description="Message pre-typed when a visitor taps these WhatsApp buttons.">
        <StringFields
          value={value.whatsappMessages}
          onChange={(whatsappMessages) => onChange({ ...value, whatsappMessages })}
          fields={[['header', 'Header top bar'], ['mobileMenu', 'Mobile menu'], ['mobileBar', 'Mobile bottom bar'], ['footer', 'Footer banner']]}
        />
        <TextInput label="Mobile menu WhatsApp button text" value={value.mobileMenuWhatsapp} onChange={(mobileMenuWhatsapp) => onChange({ ...value, mobileMenuWhatsapp })} />
      </Card>
      <Card title="Page not found (404)">
        <StringFields value={value.notFound} onChange={(notFound) => onChange({ ...value, notFound })} fields={[['title', 'Title'], ['button', 'Button']]} />
        <RichTextEditor label="Text" rows={2} value={value.notFound.text} onChange={(text) => onChange({ ...value, notFound: { ...value.notFound, text } })} />
      </Card>
      <Card title="Custom package banner" description="Below the homepage packages.">
        <StringFields value={value.packagesBanner} onChange={(packagesBanner) => onChange({ ...value, packagesBanner })} fields={[['title', 'Title'], ['text', 'Text'], ['button', 'Button'], ['whatsappButton', 'WhatsApp button'], ['whatsappText', 'WhatsApp message']]} />
      </Card>
      <Card title="FAQ helpdesk strip" description="Below the homepage FAQs.">
        <StringFields value={value.faqBanner} onChange={(faqBanner) => onChange({ ...value, faqBanner })} fields={[['text', 'Text'], ['link', 'Link text'], ['whatsappText', 'WhatsApp message']]} />
      </Card>
    </>
  );
}

function FormsEditor({ value, onChange }: EditorProps<FormsContent>) {
  const set = (patch: Partial<FormsContent>) => onChange({ ...value, ...patch });
  return (
    <>
      <Card title="Dropdown options" description="Used by the hero widget, booking popup and enquiry form. The first option is the default.">
        {grid2(
          <>
            <LinesInput label="Vehicle / package options" value={value.vehicleOptions} onChange={(vehicleOptions) => set({ vehicleOptions })} />
            <LinesInput label="Shift options" value={value.shiftOptions} onChange={(shiftOptions) => set({ shiftOptions })} />
            <LinesInput label="Zone options" value={value.zoneOptions} onChange={(zoneOptions) => set({ zoneOptions })} />
            <LinesInput label="Nationality options" value={value.nationalityOptions} onChange={(nationalityOptions) => set({ nationalityOptions })} />
          </>
        )}
      </Card>
      <Card title="Field labels">
        <StringFields
          value={value.labels}
          onChange={(labels) => set({ labels })}
          cols={3}
          fields={[
            ['name', 'Name'], ['phone', 'Phone'], ['email', 'Email'], ['date', 'Date'], ['vehicle', 'Vehicle'], ['shift', 'Shift'],
            ['zone', 'Zone'], ['nationality', 'Nationality'], ['adults', 'Adults'], ['children', 'Children'], ['notes', 'Notes'],
            ['namePlaceholder', 'Name placeholder'], ['phonePlaceholder', 'Phone placeholder'], ['emailPlaceholder', 'Email placeholder'], ['notesPlaceholder', 'Notes placeholder'],
          ]}
        />
        <RichTextEditor label="Popup consent line" hint="Select words and use the link button to add a link" rows={2} value={value.labels.consent} onChange={(consent) => set({ labels: { ...value.labels, consent } })} />
      </Card>
      <Card title="After submitting" description="Shown to the visitor after any booking or enquiry form is sent.">
        <RichTextEditor label="Success message" rows={2} value={value.successMessage} onChange={(successMessage) => set({ successMessage })} />
        <TextArea
          label="WhatsApp message template"
          hint="Placeholders: {ref} {name} {phone} {email} {date} {vehicle} {shift} {zone} {adults} {children} {nationality} {notes}. Lines whose placeholders are empty are skipped."
          rows={12}
          value={value.whatsappTemplate}
          onChange={(whatsappTemplate) => set({ whatsappTemplate })}
        />
      </Card>
      <Card title="Error messages">
        <StringFields value={value.errors} onChange={(errors) => set({ errors })} fields={[['required', 'Name/phone missing'], ['consent', 'Consent not ticked'], ['network', 'Sending failed']]} />
      </Card>
      <Card title="Booking popup">
        <StringFields value={value.modal} onChange={(modal) => set({ modal })} fields={[['badge', 'Badge'], ['title', 'Title'], ['subtitle', 'Subtitle'], ['submit', 'Submit button'], ['submitting', 'While sending'], ['successTitle', 'Success title'], ['successWhatsapp', 'Success WhatsApp button']]} />
      </Card>
      <Card title="Enquiry form section">
        <StringFields
          value={value.quick}
          onChange={(quick) => set({ quick })}
          fields={[
            ['formTitle', 'Form title'], ['formSubtitle', 'Form subtitle'], ['submit', 'Submit button'], ['submitting', 'While sending'],
            ['successTitle', 'Success title'], ['successWhatsapp', 'Success WhatsApp button'], ['anotherRequest', '“Another request” button'],
            ['phoneLabel', 'Phone card label'], ['whatsappLabel', 'WhatsApp card label'], ['whatsappText', 'WhatsApp message'], ['whatsappSuffix', 'WhatsApp suffix'],
            ['privacyTitle', 'Privacy title'],
          ]}
        />
        <RichTextEditor label="Privacy text" rows={2} value={value.quick.privacyText} onChange={(privacyText) => set({ quick: { ...value.quick, privacyText } })} />
        <RichTextEditor label="Consent checkbox text" hint="Select words and use the link button to add a link" rows={2} value={value.quick.consent} onChange={(consent) => set({ quick: { ...value.quick, consent } })} />
      </Card>
    </>
  );
}

function VehicleCardEditor({ title, value, onChange, onError }: { title: string; value: VehicleCard; onChange: (v: VehicleCard) => void; onError: (m: string) => void }) {
  return (
    <Card title={title}>
      <StringFields value={value} onChange={onChange} fields={[['title', 'Title'], ['subtitle', 'Subtitle'], ['badge', 'Badge (optional)'], ['buttonLabel', 'Button text'], ['bookingValue', 'Booking form value']]} />
      <RichTextEditor mode="full" label="Description" value={value.description} onChange={(description) => onChange({ ...value, description })} />
      <ImagePicker label="Image" value={value.image} onChange={(image) => onChange({ ...value, image })} onError={onError} />
      <ListEditor
        items={value.specs}
        onChange={(specs) => onChange({ ...value, specs })}
        addLabel="Add spec"
        itemLabel={(sp) => `${sp.label} ${sp.value}`}
        newItem={() => ({ label: '', value: '' })}
        renderItem={(sp, update) =>
          grid2(
            <>
              <TextInput label="Label" value={sp.label} onChange={(v) => update({ label: v })} />
              <TextInput label="Value" hint="{foreignPrice} inserts the foreign national rate" value={sp.value} onChange={(v) => update({ value: v })} />
            </>
          )
        }
      />
      <LinesInput label="Feature checklist" value={value.features} onChange={(features) => onChange({ ...value, features })} />
    </Card>
  );
}

function VehiclesEditor({ value, onChange, onError }: EditorProps<VehiclesContent>) {
  return (
    <>
      <VehicleCardEditor title="Maruti Gypsy card" value={value.gypsy} onChange={(gypsy) => onChange({ ...value, gypsy })} onError={onError} />
      <VehicleCardEditor title="Canter card" value={value.canter} onChange={(canter) => onChange({ ...value, canter })} onError={onError} />
      <Card title="Advisory notice">
        <TextInput label="Title" value={value.advisoryTitle} onChange={(advisoryTitle) => onChange({ ...value, advisoryTitle })} />
        <RichTextEditor label="Text" value={value.advisoryText} onChange={(advisoryText) => onChange({ ...value, advisoryText })} />
      </Card>
    </>
  );
}

type AnyEditor = (props: EditorProps<SiteContent[SiteContentKey]>) => React.ReactElement;

export const SECTION_EDITORS: Record<SiteContentKey, AnyEditor> = {
  contact: ContactEditor as AnyEditor,
  seoFiles: SeoFilesEditor as AnyEditor,
  branding: BrandingEditor as AnyEditor,
  ui: UiEditor as AnyEditor,
  forms: FormsEditor as AnyEditor,
  serviceForm: ServiceFormFields as AnyEditor,
  thankYou: ThankYouFields as AnyEditor,
  vehicles: VehiclesEditor as AnyEditor,
  navigation: NavigationEditor as AnyEditor,
  home: HomeEditor as AnyEditor,
  overview: OverviewEditor as AnyEditor,
  hero: HeroEditor as AnyEditor,
  sightings: SightingsEditor as AnyEditor,
  pricing: PricingEditor as AnyEditor,
  services: ServicesEditor as AnyEditor,
  zones: ZonesEditor as AnyEditor,
  about: AboutEditor as AnyEditor,
  testimonials: TestimonialsEditor as AnyEditor,
  guides: GuidesEditor as AnyEditor,
  faqs: FaqsEditor as AnyEditor,
  footer: FooterEditor as AnyEditor,
  seo: SeoEditor as AnyEditor,
};
