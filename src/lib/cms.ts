// Types for admin-managed pages, packages and their content blocks.
// Safe to import from both server and client code.

export const ICON_NAMES = [
  'car', 'bus', 'compass', 'map-pin', 'map', 'clock', 'calendar', 'users', 'user', 'camera', 'shield', 'check',
  'alert', 'info', 'help', 'file', 'star', 'sparkles', 'tree', 'flame', 'paw', 'eye', 'sun', 'moon', 'cloud-rain',
  'hotel', 'utensils', 'landmark', 'binoculars', 'phone', 'message', 'mail', 'heart', 'award', 'ticket', 'route',
  'train', 'plane', 'ban', 'backpack', 'shirt', 'leaf', 'droplets', 'mountain', 'wallet', 'clipboard',
] as const;
export type IconName = (typeof ICON_NAMES)[number];

export type Tone = 'info' | 'warning' | 'success' | 'danger';

export interface CardItem {
  icon?: IconName;
  image?: string;
  badge?: string;
  title: string;
  text: string;
  bullets?: string[];
  meta?: string; // small footer line, e.g. "Sighting rate: 90%"
  link?: string; // optional href
}

export interface PricingTier {
  title: string;
  price: string; // free text, e.g. "₹2,300"
  unit: string;
  badge?: string;
  features: string[];
  footnote?: string;
  highlighted?: boolean;
}

export interface TimelineItem {
  label: string; // "Day 1", "1973", "Step 1"
  title: string;
  text: string;
  bullets?: string[];
}

export interface ChecklistGroup {
  title: string;
  tone: 'do' | 'dont' | 'neutral';
  items: string[];
}

interface BlockBase {
  id: string; // stable id, used as anchor for the table of contents
  heading?: string;
  intro?: string;
  badge?: string;
}

export type Block =
  | (BlockBase & { type: 'cards'; columns: 2 | 3 | 4; style: 'card' | 'compact' | 'image'; items: CardItem[] })
  | (BlockBase & {
      type: 'pricing';
      tiers: PricingTier[];
      note?: string;
      bookingPrefill?: string;
      buttonLabel?: string;
      /** 'service': the button opens the Service Request form, listing this block's tier titles as the choices. */
      enquiryForm?: 'booking' | 'service';
    })
  | (BlockBase & { type: 'table'; columns: string[]; rows: string[][]; note?: string })
  | (BlockBase & { type: 'timeline'; items: TimelineItem[] })
  | (BlockBase & { type: 'faq'; items: { q: string; a: string }[] })
  | (BlockBase & { type: 'checklist'; groups: ChecklistGroup[] })
  | (BlockBase & { type: 'imageText'; body: string; image: string; imageSide: 'left' | 'right'; bullets?: string[] })
  | (BlockBase & { type: 'richText'; body: string })
  | (BlockBase & { type: 'callout'; tone: Tone; title: string; text: string })
  | (BlockBase & { type: 'cta'; title: string; text: string; buttonLabel: string; bookingPrefill?: string; bookingZone?: string; whatsappText?: string })
  | (BlockBase & { type: 'enquiryForm' })
  | (BlockBase & { type: 'packages'; category?: string })
  | (BlockBase & { type: 'testimonials' })
  | (BlockBase & { type: 'zoneExplorer' })
  | (BlockBase & { type: 'contactInfo' })
  | (BlockBase & {
      type: 'serviceRequest';
      /**
       * Where the "Service" choices come from: '' = the form's own setting (Forms → Service Request Form),
       * 'custom' = `options` below, or the id of another section on the same page (its card / row titles).
       */
      optionsFrom?: string;
      options?: string[];
    });

export type BlockType = Block['type'];

export interface PageSeo {
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  noindex: boolean;
  canonical?: string; // empty = this page's own URL; set to point duplicates at the main page
}

export interface PageHero {
  badge: string;
  title: string;
  highlight: string; // gradient part of the title, may be empty
  subtitle: string;
  image: string;
  ctaLabel: string; // empty hides the booking button
  bookingPrefill: string; // pre-fills "Vehicle / Package" in the booking form
  bookingZone?: string; // pre-fills the zone preference
  whatsappText: string; // empty hides the WhatsApp button
}

export type PageGroup = 'service' | 'info' | 'legal';

export interface CmsPage {
  slug: string; // URL path without leading slash, e.g. "gypsy-safari"
  name: string; // breadcrumb + admin label
  group: PageGroup;
  showToc: boolean; // sticky table of contents from block headings (policy pages)
  hero: PageHero;
  blocks: Block[];
  seo: PageSeo;
}

export type PackageCategory = 'short' | 'standard' | 'luxury' | 'custom';

export interface TourPackage {
  slug: string;
  name: string;
  category: PackageCategory;
  duration: string;
  safariCount: string;
  hotelType: string;
  pricePerPerson: number;
  badge: string;
  image: string;
  summary: string;
  highlights: string[];
  inclusions: string[]; // short pills on the card
  featured: boolean; // shown on the homepage
  blocks: Block[]; // detail page content (itinerary, inclusions, FAQs…)
  seo: PageSeo;
}

export interface Published<T> {
  id: string;
  slug: string;
  published: boolean;
  sort_order: number;
  updated_at: string;
  data: T;
}

export const EMPTY_SEO: PageSeo = { title: '', description: '', keywords: '', ogImage: '', noindex: false };

export function newBlockId(): string {
  return Math.random().toString(36).slice(2, 10);
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 80);
}

/** slugify() for a field being typed in: keeps a trailing dash so the next word can follow. */
export function slugifyTyping(text: string): string {
  const dashed = text.replace(/\s/g, '-');
  const slug = slugify(dashed);
  return slug && /[^a-z0-9]$/i.test(dashed) ? `${slug}-` : slug;
}

export const RESERVED_SLUGS = ['admin', 'api', 'packages', 'thank-you', '_next', 'images', 'sitemap.xml', 'robots.txt'];

/** Titles a section can offer as form choices: price cards, cards, timeline steps or a table's first column. */
export function blockChoiceTitles(block: Block): string[] {
  const clean = (list: (string | undefined)[]) => [...new Set(list.map((t) => (t ?? '').trim()).filter(Boolean))];
  switch (block.type) {
    case 'pricing': return clean(block.tiers.map((t) => t.title));
    case 'cards': return clean(block.items.map((i) => i.title));
    case 'timeline': return clean(block.items.map((i) => i.title));
    case 'table': return clean(block.rows.map((r) => r[0]));
    default: return [];
  }
}

/** The choices a Service Request section shows, or null to use the form's own setting. */
export function serviceRequestChoices(block: Block, pageBlocks: Block[]): string[] | null {
  if (block.type !== 'serviceRequest' || !block.optionsFrom) return null;
  if (block.optionsFrom === 'custom') {
    const list = (block.options ?? []).map((o) => o.trim()).filter(Boolean);
    return list.length ? list : null;
  }
  const source = pageBlocks.find((b) => b.id === block.optionsFrom);
  const titles = source ? blockChoiceTitles(source) : [];
  return titles.length ? titles : null;
}
