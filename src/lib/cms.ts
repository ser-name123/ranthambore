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
  | (BlockBase & { type: 'pricing'; tiers: PricingTier[]; note?: string; bookingPrefill?: string; buttonLabel?: string })
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
  | (BlockBase & { type: 'contactInfo' });

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

export const RESERVED_SLUGS = ['admin', 'api', 'packages', '_next', 'images', 'sitemap.xml', 'robots.txt'];
