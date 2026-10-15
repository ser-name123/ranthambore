# Ranthambore Wild Life Tour

Official Wildlife Safari & Luxury Tour Booking Platform for Ranthambore National Park, Sawai Madhopur, Rajasthan.

## Features
- **Maruti Gypsy & Canter Safari Booking** with real-time rate calculator
- **Safari Zones Explorer** (Core Zones 1-5 & Buffer Gates 6-10)
- **Luxury Jungle Resort Stays & Tour Packages**
- **Direct WhatsApp & Phone Consultation**
- **Supabase Integration** for real-time enquiry collection
- **Modern Responsive Design** built with Next.js 16 (Turbopack) & Tailwind CSS

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Database / Backend**: Supabase
- **Icons**: Lucide React

## Getting Started

1. Clone repository:
```bash
git clone https://github.com/ser-name123/ranthambore.git
cd ranthambore
```

2. Install dependencies:
```bash
npm install
```

3. Setup environment variables:
Copy `.env.example` to `.env.local` and fill in the Supabase URL, publishable key, **service_role** key and a random `ADMIN_SESSION_SECRET` (32+ characters).

4. Create the database tables:
Run `supabase/schema.sql` in the Supabase SQL editor. It creates `site_content`, `enquiries`, `admin_users` and the public `media` storage bucket.

5. Run locally:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Admin panel (`/admin`)
- Sign in with an account from the `admin_users` table. Name, email and password can be changed under *My Account*.
- **Enquiries**: every booking and enquiry form submission, with status tracking, internal notes, WhatsApp/call shortcuts and CSV export.
- **Website content**: hero, sightings ticker, safari rates, packages, services, zones & timings, about, reviews, travel guides, FAQs, contact details, footer and SEO/GA4. Saving publishes immediately.
- **Pages**: every inner page (safaris, services, info, policies) is a CMS page rendered by `src/app/[slug]`. Each page has a banner, a list of sections (cards, pricing, table, itinerary, FAQs, checklist, image + text, text, notice, booking banner, packages grid, enquiry form…) and its own SEO. New pages can be created from the admin.
- **Tour Packages**: card details plus a detail page at `/packages/<slug>` with its own sections and SEO.
- **Page Management** sidebar: Home Page sections, every page grouped as Services & Safaris / Information / Legal & Policies, plus All Pages and Add New Page.
- **Site Settings**: logo & brand, menu & footer links, contact details, footer, booking forms (labels and dropdown options), buttons & labels, SEO & analytics.
- **Draft preview**: unpublished pages and packages can be previewed from the editor (Next.js draft mode, admins only).
- **Version history**: the previous version is saved before every change to a page, package or section (last 30 kept) and can be loaded back from “History”.
- **SEO & Google → Robots.txt & Sitemap**: both files are generated automatically (`/robots.txt`, `/sitemap.xml`), or switch either to “Custom file” to paste/upload your own. Live versions can be previewed and downloaded there.
- **Canonical URLs**: every page and package has an optional canonical override in its SEO box (empty = its own URL); the homepage canonical is under SEO & Google. Pages pointing elsewhere are left out of the sitemap.
- **Help & Guide** in the admin explains every task step by step.

### Windows: `EPERM … .next\types`
If the editor locks the `.next` folder, run the app from another folder:
```powershell
$env:NEXT_DIST_DIR=".next_alt"; npm run dev
```
Restarting VS Code releases the lock.
- Content defaults live in `src/lib/site-content.ts`. A section only gets a database row once it is saved from the admin.
- Initial pages and packages are in `supabase/seed/`. Load them into a new database with `node --env-file=.env.local supabase/seed/seed.mjs` (existing slugs are skipped; `--force` overwrites).
- All tables use RLS with no public policies. The site reads and writes them server-side with the service_role key.
