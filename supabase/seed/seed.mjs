// Loads supabase/seed/pages/*.json and supabase/seed/packages/*.json into Supabase.
// Existing rows with the same slug are left untouched unless --force is passed.
//
// Usage: node --env-file=.env.local supabase/seed/seed.mjs [--force]
import { readdirSync, readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createClient } from '@supabase/supabase-js';

const here = dirname(fileURLToPath(import.meta.url));
const force = process.argv.includes('--force');
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false },
});

const BLOCK_TYPES = new Set(['cards', 'pricing', 'table', 'timeline', 'faq', 'checklist', 'imageText', 'richText', 'callout', 'cta', 'enquiryForm', 'packages', 'testimonials', 'zoneExplorer', 'contactInfo', 'serviceRequest']);
// Pages listed here keep this order in the admin; others follow alphabetically.
const PAGE_ORDER = ['safari-booking', 'gypsy-safari', 'canter-safari', 'core-zones-safari', 'buffer-zones-safari', 'tour-packages', 'services', 'resort-booking', 'taxi-transfers', 'chambal-safari', 'wildlife-photography-tour', 'safari-zones', 'safari-timings', 'travel-guide', 'safari-faq-rules', 'about-us', 'contact-us', 'privacy-policy', 'terms-conditions', 'cancellation-policy'];

function validate(file, doc) {
  const errors = [];
  if (!doc.slug) errors.push('missing slug');
  if (!doc.seo) errors.push('missing seo');
  if (!Array.isArray(doc.blocks)) errors.push('blocks not array');
  const ids = new Set();
  for (const b of doc.blocks ?? []) {
    if (!BLOCK_TYPES.has(b.type)) errors.push(`unknown block type ${b.type}`);
    if (!b.id) errors.push(`block without id (${b.type})`);
    if (ids.has(b.id)) errors.push(`duplicate id ${b.id}`);
    ids.add(b.id);
  }
  if (errors.length) throw new Error(`${file}: ${errors.join(', ')}`);
}

async function seed(table, dir, sortFor) {
  const files = readdirSync(join(here, dir)).filter((f) => f.endsWith('.json'));
  const { data: existing, error } = await supabase.from(table).select('slug');
  if (error) throw error;
  const have = new Set(existing.map((r) => r.slug));

  for (const file of files) {
    const { sort_order, ...doc } = JSON.parse(readFileSync(join(here, dir, file), 'utf8'));
    validate(file, doc);
    if (have.has(doc.slug) && !force) {
      console.log(`skip   ${table}/${doc.slug} (exists)`);
      continue;
    }
    const row = { slug: doc.slug, data: doc, published: true, sort_order: sortFor(doc, sort_order), updated_at: new Date().toISOString() };
    const { error: e } = await supabase.from(table).upsert(row, { onConflict: 'slug' });
    if (e) throw new Error(`${file}: ${e.message}`);
    console.log(`seeded ${table}/${doc.slug}`);
  }
}

await seed('pages', 'pages', (doc) => {
  const i = PAGE_ORDER.indexOf(doc.slug);
  return i >= 0 ? i : 100;
});
await seed('packages', 'packages', (_doc, sort) => sort ?? 100);
console.log('done');
