// Shape and default values of every admin-editable section of the website.
// Safe to import from both server and client code.

export interface ContactContent {
  phonePrimary: string;
  phoneSecondary: string;
  whatsapp: string;
  email: string;
  address: string;
  supportHours: string;
}

export interface HeroStat {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
}

export interface HeroContent {
  seasonBadge: string;
  heading: string;
  headingHighlight: string;
  subheading: string;
  points: string[];
  backgroundImage: string;
  imageAlt: string;
  stats: HeroStat[];
  trustBadge: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryCtaLink: string;
  whatsappCta: string;
  whatsappText: string;
  widget: {
    visible: boolean;
    showEstimate: boolean;
    title: string;
    subtitle: string;
    badge: string;
    vehicleLabel: string;
    gypsyLabel: string;
    gypsySeats: string;
    canterLabel: string;
    canterSeats: string;
    dateLabel: string;
    dateHint: string;
    shiftLabel: string;
    zoneLabel: string;
    adultsLabel: string;
    childrenLabel: string;
    costLabel: string;
    costNote: string;
    button: string;
    footnote: string;
  };
}

export type SightingTone = 'emerald' | 'amber' | 'teal' | 'rose';

export interface SightingItem {
  badge: string;
  tone: SightingTone;
  text: string;
  zone: string;
}

export interface PricingContent {
  gypsyPerPerson: number;
  canterPerPerson: number;
  gypsyForeignerPerPerson: number;
  canterForeignerPerPerson: number;
  childPricePercent: number; // child rate as % of adult rate in the hero estimate
}

export type ServiceIcon = 'compass' | 'car' | 'hotel' | 'map' | 'landmark' | 'camera';

export interface ServiceItem {
  icon: ServiceIcon;
  title: string;
  desc: string;
  tag: string;
  action: string;
  link: string; // page the card links to; empty opens the booking form
}

export interface ZoneItem {
  num: string;
  type: 'core' | 'buffer';
  name: string;
  sightingRate: number;
  tigers: string;
  features: string;
}

export interface TimingItem {
  period: string;
  morning: string;
  afternoon: string;
  bufferOnly: boolean;
}

export interface ZonesContent {
  zones: ZoneItem[];
  timings: TimingItem[];
  coreTabLabel: string;
  bufferTabLabel: string;
  coreCardLabel: string;
  bufferCardLabel: string;
  timingsTitle: string;
  timingsSubtitle: string;
  timingsColumns: string[]; // season, morning, afternoon, status
  openLabel: string;
  bufferOnlyLabel: string;
  disclaimerTitle: string;
  disclaimerText: string;
}

export interface AboutStat {
  value: number;
  decimals: number;
  suffix: string;
  label: string;
  sub: string;
}

export interface AboutContent {
  heading: string;
  headingHighlight: string;
  intro: string;
  body: string;
  image: string;
  imageAlt: string;
  points: string[];
  stats: AboutStat[];
  floatBadgeNumber: string;
  floatBadgeTitle: string;
  floatBadgeText: string;
  primaryCta: string;
  secondaryCta: string;
  secondaryCtaLink: string;
}

export interface TestimonialItem {
  name: string;
  location: string;
  tour: string;
  rating: number;
  date: string;
  quote: string;
}

export interface GuideItem {
  title: string;
  category: string;
  readTime: string;
  summary: string;
  image: string;
  link: string; // page the card links to; empty opens the booking form
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface FooterContent {
  ctaBadge: string;
  ctaTitle: string;
  ctaText: string;
  about: string;
  ratingTitle: string;
  ratingText: string;
  seasonText: string;
  trustBadges: string[];
  disclaimer: string;
  disclaimerTitle: string;
  helpdeskTitle: string;
  primaryLabel: string;
  alternateLabel: string;
  directCallLabel: string;
  callLabel: string;
  hoursLabel: string;
  tagline: string;
  showAdminLink: boolean;
  adminLinkLabel: string;
  copyright: string;
}

export interface SeoContent {
  siteName: string;
  siteUrl: string;
  homeCanonical: string; // empty = siteUrl
  title: string;
  description: string;
  keywords: string;
  ogImage: string;
  googleVerification: string;
  googleAnalyticsId: string;
}

export interface SectionHeading {
  visible: boolean;
  badge: string;
  title: string;
  subtitle: string;
}

export const HOME_SECTION_KEYS = [
  'sightings',
  'overview',
  'vehicles',
  'packages',
  'services',
  'zones',
  'about',
  'testimonials',
  'guides',
  'faq',
  'enquiry',
] as const;
export type HomeSectionKey = (typeof HOME_SECTION_KEYS)[number];
export type HomeContent = Record<HomeSectionKey, SectionHeading>;

export interface TigerShowcaseItem {
  name: string;
  title: string;
  territory: string;
  image: string;
  tag: string;
  desc: string;
  sightings: string;
}

export interface OverviewContent {
  tigers: TigerShowcaseItem[];
  pillars: { title: string; text: string }[];
  timelineBadge: string;
  timelineTitle: string;
  milestones: { year: string; title: string; badge: string; desc: string }[];
  showcaseCta: string;
  timelineCta: string;
}

export interface NavLink {
  label: string;
  href: string;
  children?: NavLink[]; // header menu only: shown as a dropdown
}

export interface NavigationContent {
  topBarBadge: string;
  header: NavLink[];
  footerColumns: { title: string; links: NavLink[] }[];
  legal: NavLink[];
}

export interface BrandingContent {
  name: string; // "Ranthambore"
  tagline: string; // "Wild Life Tour"
  logo: string;
}

export interface VehicleCard {
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  specs: { label: string; value: string }[]; // use {foreignPrice} to insert the foreign national rate
  features: string[];
  buttonLabel: string;
  bookingValue: string; // pre-fills "Vehicle / Package" in the booking form
}

export interface VehiclesContent {
  gypsy: VehicleCard;
  canter: VehicleCard;
  advisoryTitle: string;
  advisoryText: string;
}

export interface FormsContent {
  vehicleOptions: string[];
  shiftOptions: string[];
  zoneOptions: string[];
  nationalityOptions: string[];
  labels: {
    name: string; phone: string; email: string; date: string; vehicle: string; shift: string; zone: string;
    nationality: string; adults: string; children: string; notes: string;
    namePlaceholder: string; phonePlaceholder: string; emailPlaceholder: string; notesPlaceholder: string;
    consent: string;
  };
  modal: { badge: string; title: string; subtitle: string; submit: string; submitting: string; successTitle: string; successWhatsapp: string };
  errors: { required: string; consent: string; network: string };
  successMessage: string; // shown after any form is submitted
  whatsappTemplate: string; // message prefilled in WhatsApp after submitting; {placeholders} are replaced
  quick: {
    formTitle: string; formSubtitle: string; submit: string; submitting: string; successTitle: string; successWhatsapp: string;
    anotherRequest: string; phoneLabel: string; whatsappLabel: string; privacyTitle: string; privacyText: string;
    consent: string; whatsappText: string; whatsappSuffix: string;
  };
}

export interface UiLabels {
  bookSafari: string;
  requestBooking: string;
  whatsapp: string;
  whatsappQuote: string;
  callNow: string;
  viewPackages: string;
  enquire: string;
  details: string;
  startingFrom: string;
  perPerson: string;
  readGuide: string;
  verifiedGuest: string;
  sightingRate: string;
  tigersLabel: string;
  helplineLabel: string;
  soundLabel: string;
  soundPlaying: string;
  territoryLabel: string;
  packageTabs: { all: string; short: string; standard: string; luxury: string; custom: string };
  contactCards: { call: string; callAction: string; whatsapp: string; whatsappAction: string; email: string; emailAction: string; hours: string; office: string };
  pageLabels: { home: string; onThisPage: string; needHelp: string; learnMore: string; whatsappDesk: string; packageEnquire: string; packagesBreadcrumb: string; fromPrice: string; enquireNow: string };
  packagesBanner: { title: string; text: string; button: string; whatsappButton: string; whatsappText: string };
  mobileMenuWhatsapp: string;
  whatsappMessages: { header: string; mobileMenu: string; mobileBar: string; footer: string };
  notFound: { title: string; text: string; button: string };
  faqBanner: { text: string; link: string; whatsappText: string };
}

export interface SeoFilesContent {
  robotsMode: 'auto' | 'custom';
  robotsBlockAll: boolean; // auto mode: hide the whole site from search engines (e.g. while testing)
  robotsDisallow: string[]; // auto mode: extra paths to block (admin and api are always blocked)
  robotsCustom: string; // custom mode: the exact robots.txt
  sitemapMode: 'auto' | 'custom';
  sitemapIncludePages: boolean;
  sitemapIncludePackages: boolean;
  sitemapIncludeLegal: boolean;
  sitemapExclude: string[]; // paths left out of the auto sitemap
  sitemapExtra: string[]; // extra paths or full URLs added to the auto sitemap
  sitemapCustom: string; // custom mode: the exact sitemap.xml
}

export interface SiteContent {
  seoFiles: SeoFilesContent;
  branding: BrandingContent;
  ui: UiLabels;
  forms: FormsContent;
  vehicles: VehiclesContent;
  contact: ContactContent;
  navigation: NavigationContent;
  home: HomeContent;
  hero: HeroContent;
  sightings: SightingItem[];
  overview: OverviewContent;
  pricing: PricingContent;
  services: ServiceItem[];
  zones: ZonesContent;
  about: AboutContent;
  testimonials: TestimonialItem[];
  guides: GuideItem[];
  faqs: FaqItem[];
  footer: FooterContent;
  seo: SeoContent;
}

export type SiteContentKey = keyof SiteContent;

export const SITE_CONTENT_KEYS: SiteContentKey[] = [
  'seoFiles',
  'branding',
  'ui',
  'forms',
  'vehicles',
  'contact',
  'navigation',
  'home',
  'hero',
  'sightings',
  'overview',
  'pricing',
  'services',
  'zones',
  'about',
  'testimonials',
  'guides',
  'faqs',
  'footer',
  'seo',
];

export const SITE_IMAGES = [
  '/images/tiger_portrait.jpg',
  '/images/hero_tiger.jpg',
  '/images/tiger_stalking.jpg',
  '/images/tiger_lake.jpg',
  '/images/tiger_family.jpg',
  '/images/tiger_ruins.jpg',
  '/images/tiger_foliage.jpg',
  '/images/gypsy_encounter.jpg',
  '/images/gypsy_safari.jpg',
  '/images/canter_safari.jpg',
  '/images/resort_luxury.jpg',
  '/images/ranthambore_lake.jpg',
  '/images/ranthambore_ancient_ruin.jpg',
  '/images/ancient_banyan_tree.jpg',
  '/images/aravalli_safari_plateau.jpg',
];

export const DEFAULT_SITE_CONTENT: SiteContent = {
  seoFiles: {
    robotsMode: 'auto',
    robotsBlockAll: false,
    robotsDisallow: [],
    robotsCustom: '',
    sitemapMode: 'auto',
    sitemapIncludePages: true,
    sitemapIncludePackages: true,
    sitemapIncludeLegal: true,
    sitemapExclude: [],
    sitemapExtra: [],
    sitemapCustom: '',
  },
  branding: { name: 'Ranthambore', tagline: 'Wild Life Tour', logo: '/logo.jpg' },
  ui: {
    bookSafari: 'Book Safari',
    requestBooking: 'Request Safari Booking',
    whatsapp: 'WhatsApp',
    whatsappQuote: 'WhatsApp Quote',
    callNow: 'Call Now',
    viewPackages: 'View Packages',
    enquire: 'Enquire',
    details: 'Details',
    startingFrom: 'Starting from',
    perPerson: '/ person',
    readGuide: 'Read Full Guide',
    verifiedGuest: 'Verified Guest',
    sightingRate: 'Historical Sighting Rate:',
    tigersLabel: 'Tigers:',
    helplineLabel: 'Helpline:',
    soundLabel: 'Jungle Ambience',
    soundPlaying: 'Forest Sound: Live',
    territoryLabel: 'Territory:',
    packageTabs: { all: 'All Packages', short: 'Day / 1-Day', standard: 'Weekend & 3-Day', luxury: 'Luxury Heritage', custom: 'Photography' },
    contactCards: { call: 'Call Safari Desk', callAction: 'Call Now', whatsapp: 'WhatsApp', whatsappAction: 'Chat on WhatsApp', email: 'Email', emailAction: 'Send Email', hours: 'Support Hours', office: 'Office' },
    pageLabels: { home: 'Home', onThisPage: 'On this page', needHelp: 'Need help?', learnMore: 'Learn more', whatsappDesk: 'WhatsApp Desk', packageEnquire: 'Enquire About This Package', packagesBreadcrumb: 'Tour Packages', fromPrice: 'From', enquireNow: 'Enquire Now' },
    mobileMenuWhatsapp: 'WhatsApp Safari Assistance',
    whatsappMessages: {
      header: 'Hi Ranthambore Wild Life Tour, I want to enquire about Safari Booking.',
      mobileMenu: 'Hello Ranthambore Wild Life Tour, please check safari availability.',
      mobileBar: 'Hi Ranthambore Wild Life Tour, I want to check safari booking availability.',
      footer: 'Hello Ranthambore Wild Life Tour, I want to check safari availability.',
    },
    notFound: {
      title: 'Page Not Found',
      text: 'The page you are looking for has moved or no longer exists. Explore our safaris and tour packages instead.',
      button: 'Back to Home',
    },
    packagesBanner: {
      title: 'Need a Custom Wildlife Package for Family or Corporate Groups?',
      text: 'We customize nights, safari counts, vehicle exclusivity, meal plans, and private transport from Jaipur or Delhi.',
      button: 'Get Custom Quotation',
      whatsappButton: 'WhatsApp Travel Expert',
      whatsappText: 'Hello Ranthambore Wild Life Tour, I need a Custom Wildlife Package.',
    },
    faqBanner: {
      text: 'Have a specific query about group bookings or foreign national permits?',
      link: 'Chat with our Helpdesk',
      whatsappText: 'Hi Ranthambore Wild Life Tour, I have a question about Safari Booking.',
    },
  },
  forms: {
    vehicleOptions: ['Maruti Gypsy (6-Seater 4x4)', 'Canter (20-Seater Safari Bus)', 'Hotel + Safari Package'],
    shiftOptions: ['Morning (06:30 AM - 10:00 AM)', 'Afternoon (02:30 PM - 06:00 PM)', 'Both Shifts (Full Day)'],
    zoneOptions: ['Zone 1 to 5 (Core Gates)', 'Zone 6 to 10 (Buffer Gates)', 'Best Available (Max Sightings)'],
    nationalityOptions: ['Indian', 'Foreign National'],
    labels: {
      name: 'Full Name *',
      phone: 'Mobile / WhatsApp No. *',
      email: 'Email Address (Optional)',
      date: 'Safari Date',
      vehicle: 'Vehicle / Package',
      shift: 'Shift Preference',
      zone: 'Zone Preference',
      nationality: 'Nationality',
      adults: 'Adults',
      children: 'Children',
      notes: 'Special Requests / Notes (Optional)',
      namePlaceholder: 'e.g. Rahul Sharma',
      phonePlaceholder: 'e.g. +91 98765 43210',
      emailPlaceholder: 'e.g. rahul@example.com',
      notesPlaceholder: 'e.g. Need hotel stay, railway pickup, or zone 3 preference...',
      consent: 'By submitting, you agree to our [Terms & Conditions](/terms-conditions) and [Cancellation Policy](/cancellation-policy).',
    },
    errors: {
      required: 'Please fill in your Name and Mobile Number.',
      consent: 'Please check the consent box to proceed.',
      network: 'Submission failed. Please WhatsApp us directly.',
    },
    successMessage: 'Enquiry received successfully! Our wildlife tour specialist will contact you shortly.',
    whatsappTemplate: `Hello Ranthambore Wild Life Tour! 🐅

I would like to enquire about Safari Booking.
• Ref: {ref}
• Name: {name}
• Phone: {phone}
• Date: {date}
• Vehicle: {vehicle}
• Timing: {shift}
• Zone Preference: {zone}
• Adults: {adults}, Children: {children}

Please check real-time permit availability and provide a quote.`,
    modal: {
      badge: 'Quick Booking Request',
      title: 'Ranthambore Safari Enquiry',
      subtitle: 'We verify permits and reply with exact quotation',
      submit: 'Submit Booking Request',
      submitting: 'Checking Availability...',
      successTitle: 'Booking Request Received!',
      successWhatsapp: 'Confirm on WhatsApp Now',
    },
    quick: {
      formTitle: 'Request Safari Booking / Tour Quote',
      formSubtitle: 'Fill out the form below for fast quotation and availability verification',
      submit: 'Submit Safari Booking Request',
      submitting: 'Processing Enquiry...',
      successTitle: 'Enquiry Submitted Successfully!',
      successWhatsapp: 'Continue on WhatsApp Now',
      anotherRequest: 'Submit Another Request',
      consent: 'I agree to receive booking availability updates on WhatsApp / Phone, and accept the [Terms & Conditions](/terms-conditions) and [Cancellation Policy](/cancellation-policy).',
      whatsappText: 'Hello Ranthambore Wild Life Tour, please send me safari quotation.',
      whatsappSuffix: '(Click to Chat)',
      phoneLabel: 'Phone Helplines:',
      whatsappLabel: 'Instant WhatsApp Support:',
      privacyTitle: 'Privacy Assurance:',
      privacyText: 'Your contact details and travel dates are strictly used for your safari quotation. We never share visitor info with third parties or marketing spammers.',
    },
  },
  vehicles: {
    gypsy: {
      title: 'Maruti Gypsy 4x4',
      subtitle: 'Open-Top 6-Seater 4WD Jeep',
      badge: 'Best for Wildlife Photography & Families',
      image: '/images/gypsy_encounter.jpg',
      description: 'The agile 4x4 Maruti Gypsy offers quiet maneuvering on narrow trails, low engine noise for unobtrusive stalking, and eye-level photography angles for majestic tiger encounters.',
      specs: [
        { label: 'Capacity & Quota:', value: '6 Seats • 48 Jeeps / Shift' },
        { label: 'Daily Schedule:', value: 'Morning & Afternoon Shifts' },
        { label: 'Foreign National:', value: '{foreignPrice} / Person' },
        { label: 'Best For:', value: 'Privacy & Camera Gear' },
      ],
      features: [
        'Exclusive 6-seater open design with unobstructed 360° sightlines',
        'Low engine sound for silent tracking near lakes and waterholes',
        'Option to book all 6 seats exclusively for private groups',
        'Shares the exact same prime core and buffer zone tracks',
      ],
      buttonLabel: 'Request Jeep Safari Booking (48 Jeeps/Shift)',
      bookingValue: 'Maruti Gypsy (6-Seater 4x4)',
    },
    canter: {
      title: 'Canter Safari',
      subtitle: 'Open-Top 20-Seater Safari Bus (2x2)',
      badge: '',
      image: '/images/canter_safari.jpg',
      description: 'The open 20-seater Canter features elevated stepped seating with high perspective viewpoints across tall grassland and bamboo groves. Exceptional value for tour groups.',
      specs: [
        { label: 'Capacity & Quota:', value: '20 Seats • 50 Canters / Shift' },
        { label: 'Daily Schedule:', value: 'Morning & Afternoon Shifts' },
        { label: 'Foreign National:', value: '{foreignPrice} / Person' },
        { label: 'Best For:', value: 'Groups >6 & Budget Travel' },
      ],
      features: [
        'Elevated high vantage point over forest brush and tall grass',
        '2x2 side-by-side seating layout with direct clear sightlines',
        '50 canters permitted per shift across 10 official safari gates',
        'Comfortable shared ride accompanied by authorized forest naturalist',
      ],
      buttonLabel: 'Request Canter Safari Booking (50 Canters/Shift)',
      bookingValue: 'Canter (20-Seater Safari Bus)',
    },
    advisoryTitle: 'Ranthambore Tiger Reserve Advisory:',
    advisoryText: 'Advance permits are mandatory for both Gypsy and Canter safaris. Both follow the same official routes. Visitors are advised to carry photo ID (Aadhar/Passport) matching their permit.',
  },
  contact: {
    phonePrimary: '+91 99719 65629',
    phoneSecondary: '+91 78349 42435',
    whatsapp: '+91 99719 65629',
    email: 'info@ranthamborewildlifetour.com',
    address: 'Near Ranthambore Circle, Ranthambore Road, Sawai Madhopur, Rajasthan – 322001, India',
    supportHours: '6:00 AM – 10:00 PM (Daily)',
  },
  navigation: {
    topBarBadge: 'Independent Safari Tour Operator',
    header: [
      { label: 'Home', href: '/' },
      { label: 'Safari Booking', href: '/safari-booking' },
      { label: 'Tour Packages', href: '/tour-packages' },
      { label: 'Services', href: '/services' },
      { label: 'Safari Zones', href: '/safari-zones' },
      { label: 'About Us', href: '/about-us' },
      { label: 'Travel Guide', href: '/travel-guide' },
      { label: 'Contact Us', href: '/contact-us' },
    ],
    footerColumns: [
      {
        title: 'Safari Booking',
        links: [
          { label: 'Maruti Gypsy Safari (6-Seater)', href: '/gypsy-safari' },
          { label: 'Canter Safari Bus (20-Seater)', href: '/canter-safari' },
          { label: 'Core Zones 1 to 5 Booking', href: '/core-zones-safari' },
          { label: 'Buffer Gates 6 to 10 Safaris', href: '/buffer-zones-safari' },
          { label: 'Wildlife Photography Expeditions', href: '/wildlife-photography-tour' },
          { label: 'Safari Timings & Shifts (2026-27)', href: '/safari-timings' },
        ],
      },
      {
        title: 'Tours & Info',
        links: [
          { label: '2N/3D Classic Wildlife Package', href: '/packages/2n-3d-classic-wildlife' },
          { label: '3N/4D Royal Tiger Expedition', href: '/packages/3n-4d-royal-tiger' },
          { label: 'Luxury Forest Resort Stays', href: '/resort-booking' },
          { label: 'Ranthambore Fort & Chambal Boating', href: '/chambal-safari' },
          { label: 'Jaipur & Delhi Cab Transfers', href: '/taxi-transfers' },
          { label: 'Cancellation & Refund Policy', href: '/cancellation-policy' },
          { label: 'Safari FAQs & ID Proof Rules', href: '/safari-faq-rules' },
        ],
      },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy-policy' },
      { label: 'Terms & Conditions', href: '/terms-conditions' },
      { label: 'Cancellation Policy', href: '/cancellation-policy' },
    ],
  },
  home: {
    sightings: { visible: true, badge: 'Jungle Dispatch', title: '', subtitle: '' },
    overview: {
      visible: true,
      badge: 'Ranthambore Tiger Reserve',
      title: 'Meet the Royal Bengal Tigers of *Ranthambore*',
      subtitle: "One of the world's finest natural habitats to witness wild Bengal tigers in broad daylight. Spanning 10 regulated zones across ancient fortresses, freshwater lakes, and lush deciduous jungle.",
    },
    vehicles: {
      visible: true,
      badge: 'Safari Vehicle Guide',
      title: 'Maruti Gypsy vs Canter Safari',
      subtitle: 'Choose between an exclusive 6-seater 4x4 Maruti Gypsy or an economical 20-seater Canter bus. Both explore the exact same designated forest trails across Zones 1 to 10.',
    },
    packages: {
      visible: true,
      badge: 'Curated Itineraries',
      title: 'Featured Tour Packages',
      subtitle: 'Handcrafted packages combining verified safari permits, luxury resort stays, meals, and private transfers across Ranthambore.',
    },
    services: {
      visible: true,
      badge: 'Complete Travel Assistance',
      title: 'Our Wildlife Services',
      subtitle: 'From obtaining official entry permits to coordinating luxury stays and local excursions, we provide seamless end-to-end safari planning.',
    },
    zones: {
      visible: true,
      badge: 'Park Knowledge Base',
      title: 'Safari Zones & Shift Timings',
      subtitle: 'Ranthambore National Park is organized into 10 safari zones. Explore Core & Buffer gates and plan around official forest department schedules.',
    },
    about: { visible: true, badge: 'About Ranthambore Wild Life Tour', title: '', subtitle: '' },
    testimonials: {
      visible: true,
      badge: 'Guest Experiences',
      title: 'Stories From The Wilderness',
      subtitle: 'Read genuine feedback from wildlife photographers, families, and solo explorers who experienced Ranthambore with our team.',
    },
    guides: {
      visible: true,
      badge: 'Wildlife Insights',
      title: 'Ranthambore Travel Guide',
      subtitle: 'Carefully curated practical guides prepared by our naturalists to help you prepare for an unforgettable tiger safari.',
    },
    faq: {
      visible: true,
      badge: 'Clear Answers',
      title: 'Frequently Asked Questions',
      subtitle: 'Everything you need to know about Ranthambore permits, regulations, vehicle choices, and wildlife rules.',
    },
    enquiry: {
      visible: true,
      badge: 'Direct Wildlife Concierge',
      title: 'Get an Instant Safari Quote & *Availability Check*',
      subtitle: 'Tell us your travel dates, group size, and vehicle preference. Our local wildlife specialists will check real-time gate inventory and return with a customized quote within 15 minutes.',
    },
  },
  hero: {
    seasonBadge: 'Official Safari Bookings 2026-2027',
    heading: 'Ranthambore Safari &',
    headingHighlight: 'Wildlife Tours',
    subheading:
      'Step into the realm of the Royal Bengal Tiger. Authorized 4x4 Maruti Gypsy and 20-seater Canter permits, luxury jungle resort stays, and expert naturalist trackers across Zones 1 to 10.',
    points: ['Gypsy & Canter Permits', 'Zones 1 to 10 Access', 'Certified Forest Trackers', 'Transparent Official Rates'],
    backgroundImage: '/images/tiger_portrait.jpg',
    imageAlt: 'Royal Bengal Tiger in Ranthambore National Park',
    trustBadge: 'Govt. Reg. Operator',
    primaryCta: 'Request Safari Booking',
    secondaryCta: 'View Packages',
    secondaryCtaLink: '#packages',
    whatsappCta: 'WhatsApp Quote',
    whatsappText: 'Hi Ranthambore Wild Life Tour, I am looking for a Custom Quote.',
    widget: {
      visible: true,
      showEstimate: true,
      title: 'Check Safari Availability',
      subtitle: 'Select date & preference for real-time quote',
      badge: '2026-27 Rates',
      vehicleLabel: '1. Choose Safari Vehicle',
      gypsyLabel: 'Jeep (Gypsy)',
      gypsySeats: '6-Seater',
      canterLabel: 'Canter Safari',
      canterSeats: '20-Seater',
      dateLabel: '2. Safari Date',
      dateHint: 'Advance booking advised',
      shiftLabel: 'Shift Timing',
      zoneLabel: 'Preferred Zone',
      adultsLabel: 'Adults (12+ yrs)',
      childrenLabel: 'Children (5-11 yrs)',
      costLabel: 'Estimated Safari Cost:',
      costNote: 'Incl. permit, vehicle & naturalist guide',
      button: 'Check Availability & Get Quote',
      footnote: '🔒 No advance payment needed • Fast 15-min response',
    },
    stats: [
      { value: 12, decimals: 0, suffix: '+ Yrs', label: 'Wildlife Experience' },
      { value: 4.9, decimals: 1, suffix: ' / 5.0', label: '1,400+ Reviews' },
      { value: 100, decimals: 0, suffix: '%', label: 'Verified Permits' },
    ],
  },
  sightings: [
    { badge: 'LIVE SIGHTING', tone: 'emerald', text: 'Tigress Riddhi (T-124) with 3 cubs sighted near Padam Talao Lake', zone: 'Zone 3' },
    { badge: 'TERRITORY ALERT', tone: 'amber', text: 'Male Tiger T-120 (Ganesh) patrolling near Jogi Mahal & Phuta Kot', zone: 'Zone 2' },
    { badge: 'HIGH ACTIVITY', tone: 'teal', text: 'Sloth bear family & leopard activity reported in Kachida Valley', zone: 'Zone 5' },
    { badge: 'PERMIT NOTICE', tone: 'rose', text: 'Weekend Gypsy quota filling fast! Only limited seats remaining for next 14 days', zone: 'Zones 1-10' },
    { badge: 'WEATHER & TIMINGS', tone: 'emerald', text: 'Morning Shift gate entry: 06:30 AM | Afternoon Shift entry: 02:30 PM', zone: 'Daily Gates' },
  ],
  overview: {
    tigers: [
      { name: 'T-120 (Ganesh)', title: 'Monarch of Jogi Mahal', territory: 'Zone 2 & Zone 3 Borders', image: '/images/tiger_stalking.jpg', tag: 'Apex Male Tiger', desc: 'Known for confident day strolls through dense sal groves and watering corridors near ancient ruins.', sightings: 'Very High (Morning Shift)' },
      { name: 'T-124 (Riddhi)', title: 'Queen of Padam Talao', territory: 'Zone 3 Lake System', image: '/images/tiger_lake.jpg', tag: 'Machhli Dynasty', desc: 'Dominates the iconic lake palaces and lotus beds. Globally famous for majestic shoreline hunting displays.', sightings: 'Highest Sightings Rate' },
      { name: 'Tigress with Cubs', title: 'New Generation of the Forest', territory: 'Zone 4 & 5 Corridors', image: '/images/tiger_family.jpg', tag: 'Breeding Dynasty', desc: 'Playful cubs spotted resting under centuries-old banyan canopies and cooling off in hidden limestone pools.', sightings: 'Regular Family Encounters' },
      { name: 'T-84 (Arrowhead Lineage)', title: 'Ruler of the Fort Clifftops', territory: 'Zone 1 & Fort Slopes', image: '/images/tiger_ruins.jpg', tag: 'Heritage Predator', desc: 'Often perched on ancient 10th-century stone battlements overlooking emerald canopies and river valleys.', sightings: 'Scenic Photography Gold' },
    ],
    pillars: [
      { title: 'Forest Department Permits', text: 'All safaris are governed by the Rajasthan Forest Dept. Daily quotas are limited per zone to protect wild habitat and prevent overcrowding.' },
      { title: '10 Managed Safari Zones', text: 'Zones 1 to 5 encompass historic core lakes and fort trails. Zones 6 to 10 feature rugged buffer valleys and thriving leopard corridors.' },
      { title: 'Jeep & Canter Safari Options', text: 'Choose an exclusive 6-seater 4x4 Maruti Gypsy for maneuverability or an economical 20-seater safari Canter for family groups.' },
    ],
    timelineBadge: 'Historic Conservation Journey',
    timelineTitle: "How Ranthambore Became India's Tiger Capital",
    showcaseCta: 'Book Safari in this Zone',
    timelineCta: 'Plan Your Safari Visit',
    milestones: [
      { year: '1955', title: 'Wildlife Sanctuary Declared', badge: 'Protected Genesis', desc: 'Originally royal hunting grounds of Jaipur Maharajas, preserved to safeguard wild flora and Bengal tigers.' },
      { year: '1973', title: 'Project Tiger Reserve', badge: 'Historic Landmark', desc: 'Chosen as one of India’s first Project Tiger reserves to protect the apex predator in native habitats.' },
      { year: '1991', title: 'Greater Tiger Reserve (1,300+ sq km)', badge: 'Expanded Corridors', desc: 'Unification of Sawai Mansingh & Keladevi sanctuaries into an expansive deciduous tiger migration ecosystem.' },
    ],
  },
  pricing: {
    gypsyPerPerson: 2300,
    canterPerPerson: 1800,
    gypsyForeignerPerPerson: 5500,
    canterForeignerPerPerson: 5000,
    childPricePercent: 80,
  },
  services: [
    {
      icon: 'compass',
      title: 'Maruti Gypsy Safari Booking',
      desc: 'Exclusive and sharing 4x4 open Gypsy safaris across Zones 1 to 10 with verified entry permits, licensed drivers, and certified nature guides.',
      tag: 'Core Experience',
      action: 'Book Gypsy Safari',
      link: '/gypsy-safari',
    },
    {
      icon: 'car',
      title: 'Canter Safari Booking',
      desc: 'Economical 20-seater open safari bus permits ideal for families, groups, and last-minute travellers with panoramic elevated forest views.',
      tag: 'Best Value',
      action: 'Book Canter Safari',
      link: '/canter-safari',
    },
    {
      icon: 'hotel',
      title: 'Resort & Jungle Camp Stays',
      desc: 'Curated bookings at handpicked heritage jungle resorts, eco-cottages, and 5-star wilderness retreats near National Park entry gates.',
      tag: 'Stay Assistance',
      action: 'Find Resort Deals',
      link: '/resort-booking',
    },
    {
      icon: 'map',
      title: 'Railway Station & Airport Transfers',
      desc: 'Comfortable private AC cabs from Sawai Madhopur Junction, Jaipur International Airport, or Delhi NCR straight to your resort.',
      tag: 'Safe Transfers',
      action: 'Book Transfer',
      link: '/taxi-transfers',
    },
    {
      icon: 'landmark',
      title: 'Ranthambore Fort & Chambal Safari',
      desc: 'Guided cultural excursions to the 10th-century UNESCO World Heritage Ranthambore Fort, Trinetra Ganesha Temple, and Chambal boat safari.',
      tag: 'Sightseeing',
      action: 'Explore Excursions',
      link: '/chambal-safari',
    },
    {
      icon: 'camera',
      title: 'Bespoke Wildlife Photography Tours',
      desc: 'Specialized arrangements for photographers featuring exclusive Gypsy positioning, expert trackers, beanbag mounts, and optimal lighting routes.',
      tag: 'Photography Special',
      action: 'Plan Photo Tour',
      link: '/wildlife-photography-tour',
    },
  ],
  zones: {
    zones: [
      { num: 'Zone 1', type: 'core', name: 'Singhdwar, Sultanpur & Tutti Deh', sightingRate: 85, tigers: 'T-39 (Noor), T-57, T-101', features: 'Dense dry forest terrain, rocky ridges, scenic streams. Frequent sightings of T-39 (Noor) lineage and leopards.' },
      { num: 'Zone 2', type: 'core', name: 'Jogi Mahal, Phuta Kot & Nal Ghati', sightingRate: 90, tigers: 'T-120 (Ganesh), T-84 (Arrowhead)', features: 'Historic water holes, Phuta Bandha, scenic watering points. High tiger and sloth bear activity.' },
      { num: 'Zone 3', type: 'core', name: 'Padam Talao, Rajbagh & Malik Talao', sightingRate: 94, tigers: 'T-124 (Riddhi) & cubs, T-120', features: 'The crown jewel of Ranthambore with vast lakes, ancient hunting palace ruins, and legendary Machhli lineage territory.' },
      { num: 'Zone 4', type: 'core', name: 'Tamkhan, Lakkad Dah & Berda', sightingRate: 88, tigers: 'T-125 (Siddhi), cubs', features: 'Scenic rocky water bodies, high tiger density territory, popular for mother and cubs sightings.' },
      { num: 'Zone 5', type: 'core', name: 'Kachida, Jokha & Bakola', sightingRate: 84, tigers: 'T-102 & sub-adults', features: 'Deep forest foliage, banyan trees, perennial water springs. High density of deer, birds, and tigers.' },
      { num: 'Zone 6', type: 'buffer', name: 'Kundal & Kala Pani', sightingRate: 78, tigers: 'T-58, T-57 territory', features: 'Adjoining Zone 1 landscape, expansive open valleys and steep craggy hills. Excellent for bird watching and tigers.' },
      { num: 'Zone 7', type: 'buffer', name: 'Chidikho & Kushalipura', sightingRate: 72, tigers: 'T-34, T-61', features: 'Mountainous ravines, high plateaus, quiet tranquil trails away from heavy safari traffic.' },
      { num: 'Zone 8', type: 'buffer', name: 'Balas & Neemli Dang', sightingRate: 70, tigers: 'Resident leopards & sloth bears', features: 'Scenic rocky cliffs, leopard habitats, ancient trees, and thriving birdlife.' },
      { num: 'Zone 9', type: 'buffer', name: 'Qual Ji (Chambal River Border)', sightingRate: 75, tigers: 'T-59 & transient males', features: 'Bordering the mighty Chambal River, scenic riverine banks, caracals, sloth bears, and transient tigers.' },
      { num: 'Zone 10', type: 'buffer', name: 'Aantri & Kushalipura Ravines', sightingRate: 74, tigers: 'T-99, T-108', features: 'Lush greenery, scenic waterholes, tranquil birding, and increasing big cat territory.' },
    ],
    timings: [
      { period: '1st Oct to 31st Oct', morning: '06:30 AM – 10:00 AM', afternoon: '02:30 PM – 06:00 PM', bufferOnly: false },
      { period: '1st Nov to 31st Jan (Winter)', morning: '07:00 AM – 10:30 AM', afternoon: '02:00 PM – 05:30 PM', bufferOnly: false },
      { period: '1st Feb to 31st Mar', morning: '06:30 AM – 10:00 AM', afternoon: '02:30 PM – 06:00 PM', bufferOnly: false },
      { period: '1st Apr to 15th May (Summer)', morning: '06:00 AM – 09:30 AM', afternoon: '03:00 PM – 06:30 PM', bufferOnly: false },
      { period: '16th May to 30th Jun', morning: '06:00 AM – 09:30 AM', afternoon: '03:30 PM – 07:00 PM', bufferOnly: false },
      { period: '1st Jul to 30th Sep (Monsoon)', morning: 'Core Zones Closed', afternoon: 'Select Buffer Gates Active', bufferOnly: true },
    ],
    coreTabLabel: 'Core Safari Gates (Zones 1 – 5)',
    bufferTabLabel: 'Buffer Safari Gates (Zones 6 – 10)',
    coreCardLabel: 'Core Park Gate',
    bufferCardLabel: 'Scenic Buffer Gate',
    timingsTitle: 'Official Safari Shift Timings (2026-2027)',
    timingsSubtitle: 'Safari gates open twice daily. Entry closes strictly according to Forest Department regulations.',
    timingsColumns: ['Season / Month', 'Morning Shift', 'Afternoon Shift', 'Status'],
    openLabel: 'All Gates Open',
    bufferOnlyLabel: 'Buffer Only',
    disclaimerTitle: 'Zone Allotment Transparency:',
    disclaimerText: 'Safari zones are assigned randomly by the Forest Department booking software at the time of permit issuance. We submit your preferred zone request with your application.',
  },
  about: {
    heading: 'Passionate Trackers.',
    headingHighlight: 'Unmatched Safaris.',
    intro:
      'Founded by wildlife enthusiasts and local naturalists in Sawai Madhopur, Ranthambore Wild Life Tour is an independent travel facilitation company dedicated to delivering authentic, transparent, and exhilarating wildlife expeditions.',
    body:
      'From securing coveted morning Gypsy permits to booking heritage jungle resorts, our on-ground team takes care of every detail so you can immerse yourself in the majestic wilderness of Ranthambore.',
    image: '/images/tiger_ruins.jpg',
    imageAlt: 'Royal Bengal Tiger in Ranthambore Wild Life Tour',
    floatBadgeNumber: '12+',
    floatBadgeTitle: 'Decade of Excellence',
    floatBadgeText: 'Dedicated to ethical Ranthambore wildlife tourism',
    primaryCta: 'Plan Your Safari With Us',
    secondaryCta: 'Speak to a Specialist',
    secondaryCtaLink: '#contact-us',
    points: ['Forest Department Compliance', 'Senior Certified Naturalists', 'Zero Hidden Charges Policy', '24/7 On-Ground Concierge'],
    stats: [
      { value: 12, decimals: 0, suffix: '+', label: 'Years in Ranthambore', sub: 'Local Sawai Madhopur roots' },
      { value: 15000, decimals: 0, suffix: '+', label: 'Successful Safaris', sub: 'Gypsy & Canter permits' },
      { value: 98, decimals: 0, suffix: '%', label: 'Sightings Satisfaction', sub: 'Tigers, leopards, sloth bears' },
      { value: 4.9, decimals: 1, suffix: ' / 5.0', label: 'Customer Trust Rating', sub: 'Verified traveller reviews' },
    ],
  },
  testimonials: [
    {
      name: 'Aditya & Neha Sharma',
      location: 'New Delhi, India',
      tour: 'Classic 2N/3D Wildlife Escape',
      rating: 5,
      date: 'Visited February 2026',
      quote:
        'Booking our Ranthambore safaris through Ranthambore Wild Life Tour was the best decision! We got Zone 3 on the morning safari and saw tigress Riddhi with her cubs near Padam Talao. The driver and naturalist were outstanding.',
    },
    {
      name: 'Marcus & Clara Vance',
      location: 'London, United Kingdom',
      tour: 'Tiger Photography Master Tour',
      rating: 5,
      date: 'Visited January 2026',
      quote:
        'As avid wildlife photographers, we wanted dedicated Gypsy safaris with optimal lighting angles. The team coordinated every permit flawlessly and arranged an exquisite heritage lodge. Exceptional transparency and service.',
    },
    {
      name: 'Rajesh Nair & Family',
      location: 'Bengaluru, India',
      tour: 'Family Holiday Package (3 Safaris)',
      rating: 5,
      date: 'Visited March 2026',
      quote:
        'Travelling with kids can be tricky, but from our railway station pickup to hotel check-in and Canter safari boarding, everything was executed like clockwork. 10/10 recommendation for anyone visiting Ranthambore.',
    },
  ],
  guides: [
    {
      title: 'Best Time to Visit Ranthambore: Month-by-Month Guide',
      category: 'Seasonal Planning',
      readTime: '4 min read',
      summary: 'From misty winter mornings (Nov-Feb) to hot summer months (Apr-Jun) when tigers frequent waterholes, understand seasonal sighting patterns.',
      image: '/images/tiger_lake.jpg',
      link: '/travel-guide',
    },
    {
      title: 'Essential Safari Packing List: What to Wear in the Jungle',
      category: 'Visitor Preparation',
      readTime: '3 min read',
      summary: 'Why earthy greens, browns, and khakis matter, essential winter layers for open Gypsy drives, dust protection, and camera beanbags.',
      image: '/images/tiger_foliage.jpg',
      link: '/travel-guide',
    },
    {
      title: 'How to Reach Ranthambore: Train, Road & Flight Options',
      category: 'Transit & Route',
      readTime: '5 min read',
      summary: 'Direct express trains to Sawai Madhopur (SWM), flight connections via Jaipur (JAI), and the new Delhi-Mumbai Expressway route.',
      image: '/images/gypsy_encounter.jpg',
      link: '/travel-guide',
    },
  ],
  faqs: [
    {
      q: 'How far in advance should I book my Ranthambore safari?',
      a: 'Safari permits in Ranthambore open up to 90 to 120 days in advance through the Forest Department portal. Due to strict vehicle caps per zone, peak dates (October to March, long weekends, Diwali, and New Year) sell out quickly. We strongly advise booking at least 30 to 60 days ahead for Maruti Gypsy permits.',
    },
    {
      q: 'What government ID proof is needed for booking and entry?',
      a: 'For Indian Nationals: Government photo ID such as Aadhaar Card, Passport, Voter ID, or Driving License. For Foreign Nationals: Original Passport and Visa details. The exact original ID used during booking must be carried and presented to forest officers at the entry gate during boarding.',
    },
    {
      q: 'Can I choose my specific safari zone?',
      a: 'When you submit your enquiry, we submit your zone preference (Zones 1-5 Core or Zones 6-10 Buffer). However, the Rajasthan Forest Department computerised lottery system assigns final zones based on quota availability. No operator can legitimately guarantee a specific zone number in advance.',
    },
    {
      q: 'Are tiger sightings guaranteed on a safari?',
      a: 'No. Ranthambore National Park is a protected wild habitat spanning over 1,300 sq km. Wildlife sightings depend entirely on animal movements, weather, and chance. Our expert naturalists use alarm calls, pugmarks, and territory knowledge to give you the highest possible probability of spotting tigers and other wildlife.',
    },
    {
      q: 'What is included in the safari booking price?',
      a: 'Our safari quotations include the official Forest Department permit fee, vehicle hire (Maruti Gypsy or Canter), registered driver fee, certified forest guide fee, and boarding facilitation assistance. There are no surprise extra gate entry charges.',
    },
    {
      q: 'What is the safari permit cancellation policy?',
      a: 'As per Rajasthan Forest Department regulations, confirmed safari permits are non-refundable, non-transferable, and non-amendable. If you cancel after permit issuance, permit fees cannot be refunded. For full tour packages and hotel stays, refund timelines vary according to individual resort policies.',
    },
  ],
  footer: {
    ctaBadge: 'Planning Your Ranthambore Trip?',
    ctaTitle: 'Secure Your Jungle Safari Permits Before Quotas Fill Up',
    ctaText: 'Forest Department permits for core zones are strictly limited per shift. Speak directly with our Sawai Madhopur wildlife desk for instant date checking.',
    ratingTitle: '4.9 / 5.0 Rating',
    ratingText: 'Over 1,400+ satisfied wildlife travellers & photographers',
    seasonText: '2026-2027 Season Bookings Active',
    trustBadges: ['Authorized Safari Operators', 'Govt. Identity Verification', 'Certified Naturalist Trackers', '100% Transparent Quotation'],
    copyright: '© 2026 Ranthambore Wild Life Tour. All Rights Reserved.',
    disclaimerTitle: 'Statutory Compliance & Transparency Notice',
    helpdeskTitle: 'Safari Helpdesk',
    primaryLabel: 'Primary',
    alternateLabel: 'Alternate',
    directCallLabel: 'Direct Call',
    callLabel: 'Call Safari Desk:',
    hoursLabel: 'Working Hours:',
    tagline: 'Preserving Ranthambore Wildlife Heritage',
    showAdminLink: true,
    adminLinkLabel: 'Admin Portal',
    about:
      'Your premier on-ground wildlife safari facilitator based at Sawai Madhopur. Providing official Gypsy and Canter permits, luxury wilderness resorts, and naturalist-led tiger expeditions since 2014.',
    disclaimer:
      'Ranthambore Wild Life Tour (ranthamborewildlifetour.com) is an independent travel facilitation agency providing safari permit assistance, wildlife resort bookings, and naturalist guides in Sawai Madhopur. We are NOT the official website of Ranthambore National Park or the Rajasthan Forest Department. All safari permits are issued under the regulations of the Forest Department, Government of Rajasthan. Tiger sightings are completely dependent on natural wildlife movements and cannot be legally guaranteed.',
  },
  seo: {
    siteName: 'Ranthambore Wild Life Tour',
    siteUrl: 'https://ranthamborewildlifetour.com',
    homeCanonical: '',
    title: 'Ranthambore Safari & Wildlife Tours | Gypsy & Canter Booking',
    description:
      'Plan your unforgettable Ranthambore safari experience. Book authorized Maruti Gypsy & Canter permits, luxury wildlife resort stays, and custom tiger photography tours.',
    keywords:
      'Ranthambore safari booking, Ranthambore wildlife tours, Ranthambore tour packages, Jeep safari Ranthambore, Canter safari booking Ranthambore, Ranthambore tiger reserve, Sawai Madhopur wildlife packages',
    ogImage: '/images/tiger_portrait.jpg',
    googleVerification: '',
    googleAnalyticsId: '',
  },
};

/** "+91 99719 65629" -> "+919971965629" */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, '')}`;
}

/** WhatsApp click-to-chat link; `text` is plain (unencoded) message text. */
export function waHref(phone: string, text?: string): string {
  const base = `https://wa.me/${phone.replace(/\D/g, '')}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}

/**
 * Fills "{key}" placeholders. Lines whose placeholders are all empty are dropped,
 * so optional fields (date, zone…) simply disappear from the message.
 */
export function fillTemplate(template: string, values: Record<string, string | number | null | undefined>): string {
  return template
    .split('\n')
    .filter((line) => {
      const keys = [...line.matchAll(/\{(\w+)\}/g)].map((m) => m[1]);
      return keys.length === 0 || keys.some((k) => values[k] !== undefined && values[k] !== null && values[k] !== '');
    })
    .map((line) => line.replace(/\{(\w+)\}/g, (_, k) => String(values[k] ?? '')))
    .join('\n');
}
