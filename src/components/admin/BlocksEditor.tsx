'use client';

import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';
import { Plus } from 'lucide-react';
import {
  Block, BlockType, blockChoiceTitles, CardItem, ChecklistGroup, ICON_NAMES, IconName, newBlockId, PricingTier, serviceRequestChoices, TimelineItem, Tone,
} from '@/lib/cms';
import { LinkPicker } from './LinkOptions';
import { Button, Field, ImagePicker, inputClass, LinesInput, ListEditor, SelectInput, TextArea, TextInput, Toggle } from './ui';

export const BLOCK_TYPES: { type: BlockType; label: string; hint: string }[] = [
  { type: 'cards', label: 'Cards grid', hint: 'Features, highlights, team, zones…' },
  { type: 'pricing', label: 'Pricing tiers', hint: 'Price cards with enquire buttons' },
  { type: 'table', label: 'Table', hint: 'Timings, routes, comparisons' },
  { type: 'timeline', label: 'Timeline / itinerary', hint: 'Day-wise plans, steps, history' },
  { type: 'faq', label: 'FAQs', hint: 'Question & answer accordion' },
  { type: 'checklist', label: 'Checklist', hint: 'Inclusions vs exclusions, dos & don’ts' },
  { type: 'imageText', label: 'Image + text', hint: 'Paragraphs beside a photo' },
  { type: 'richText', label: 'Text section', hint: 'Paragraphs, bullets (policies, articles)' },
  { type: 'callout', label: 'Notice box', hint: 'Warning / info banner' },
  { type: 'cta', label: 'Booking banner', hint: 'Call-to-action with booking button' },
  { type: 'packages', label: 'Packages grid', hint: 'Shows published tour packages' },
  { type: 'enquiryForm', label: 'Enquiry form', hint: 'Quick enquiry form section' },
  { type: 'testimonials', label: 'Guest reviews', hint: 'Reviews from “Guest Reviews”' },
  { type: 'zoneExplorer', label: 'Zones explorer', hint: 'Zones & timings from “Zones & Timings”' },
  { type: 'contactInfo', label: 'Contact details', hint: 'Phones, WhatsApp, email, address' },
  { type: 'serviceRequest', label: 'Service request form', hint: 'Name, mobile, people, service, date, message' },
];

const LABELS = Object.fromEntries(BLOCK_TYPES.map((b) => [b.type, b.label])) as Record<BlockType, string>;

export function newBlock(type: BlockType): Block {
  const id = newBlockId();
  switch (type) {
    case 'cards': return { id, type, heading: 'New section', columns: 3, style: 'card', items: [] };
    case 'pricing': return { id, type, heading: 'Pricing', tiers: [] };
    case 'table': return { id, type, heading: 'Table', columns: ['Column 1', 'Column 2'], rows: [] };
    case 'timeline': return { id, type, heading: 'Itinerary', items: [] };
    case 'faq': return { id, type, heading: 'Frequently Asked Questions', items: [] };
    case 'checklist': return { id, type, heading: 'What’s Included', groups: [{ title: 'Included', tone: 'do', items: [] }] };
    case 'imageText': return { id, type, heading: 'New section', body: '', image: '/images/tiger_portrait.jpg', imageSide: 'left' };
    case 'richText': return { id, type, heading: 'New section', body: '' };
    case 'callout': return { id, type, tone: 'info', title: 'Important', text: '' };
    case 'cta': return { id, type, title: 'Ready to book your safari?', text: '', buttonLabel: 'Enquire Now', whatsappText: '' };
    case 'serviceRequest': return { id, type, badge: 'Service Request', heading: 'Need a *Service*? Tell Us' };
    default: return { id, type } as Block;
  }
}

const ICON_OPTIONS = [{ value: '' as const, label: 'No icon' }, ...ICON_NAMES.map((n) => ({ value: n, label: n }))];

function IconSelect({ value, onChange }: { value?: IconName; onChange: (v: IconName | undefined) => void }) {
  return (
    <Field label="Icon">
      <select value={value ?? ''} onChange={(e) => onChange((e.target.value || undefined) as IconName | undefined)} className={inputClass}>
        {ICON_OPTIONS.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </Field>
  );
}

/** Text input for structured values: keeps the raw text while typing, re-syncs when the value changes elsewhere. */
function DelimitedInput<T>({ label, hint, value, format, parse, onChange, multiline = false }: {
  label: string;
  hint: string;
  value: T;
  format: (v: T) => string;
  parse: (t: string) => T;
  onChange: (v: T) => void;
  multiline?: boolean;
}) {
  const [text, setText] = useState(format(value));
  if (format(parse(text)) !== format(value)) setText(format(value));
  const handle = (t: string) => {
    setText(t);
    onChange(parse(t));
  };
  return multiline ? (
    <TextArea label={label} hint={hint} rows={Math.max(4, text.split('\n').length + 1)} value={text} onChange={handle} />
  ) : (
    <TextInput label={label} hint={hint} value={text} onChange={handle} />
  );
}

function grid(children: React.ReactNode, cols = 2) {
  return <div className={`grid grid-cols-1 gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{children}</div>;
}

function CommonFields({ block, update, withHeading = true }: { block: Block; update: (p: Partial<Block>) => void; withHeading?: boolean }) {
  if (!withHeading) return null;
  return (
    <>
      {grid(
        <>
          <TextInput label="Heading" hint="Wrap words in *stars* to highlight" value={block.heading ?? ''} onChange={(v) => update({ heading: v })} />
          <TextInput label="Small badge above heading" value={block.badge ?? ''} onChange={(v) => update({ badge: v })} />
        </>
      )}
      <RichTextEditor label="Intro text" rows={2} value={block.intro ?? ''} onChange={(v) => update({ intro: v })} />
    </>
  );
}

function BlockFields({ block, update, onError, pageBlocks = [] }: { block: Block; update: (p: Partial<Block>) => void; onError: (m: string) => void; pageBlocks?: Block[] }) {
  // `update` is typed for the union; each case narrows `block`.
  const set = update as (p: Record<string, unknown>) => void;

  switch (block.type) {
    case 'cards':
      return (
        <>
          <CommonFields block={block} update={update} />
          {grid(
            <>
              <SelectInput label="Card style" value={block.style} options={[{ value: 'card', label: 'Card (rich)' }, { value: 'compact', label: 'Compact tile' }, { value: 'image', label: 'With photo' }]} onChange={(v) => set({ style: v })} />
              <SelectInput label="Columns" value={String(block.columns) as '2' | '3' | '4'} options={[{ value: '2', label: '2' }, { value: '3', label: '3' }, { value: '4', label: '4' }]} onChange={(v) => set({ columns: Number(v) })} />
            </>
          )}
          <ListEditor<CardItem>
            items={block.items}
            onChange={(items) => set({ items })}
            addLabel="Add card"
            itemLabel={(c) => c.title}
            newItem={() => ({ title: '', text: '' })}
            renderItem={(c, u) => (
              <>
                {grid(
                  <>
                    <TextInput label="Title" value={c.title} onChange={(v) => u({ title: v })} />
                    <TextInput label="Badge" value={c.badge ?? ''} onChange={(v) => u({ badge: v })} />
                  </>
                )}
                <RichTextEditor label="Text" value={c.text} onChange={(v) => u({ text: v })} />
                <LinesInput label="Bullet points (optional)" value={c.bullets ?? []} onChange={(v) => u({ bullets: v })} rows={3} />
                {grid(
                  <>
                    <IconSelect value={c.icon} onChange={(v) => u({ icon: v })} />
                    <TextInput label="Footer line (optional)" value={c.meta ?? ''} onChange={(v) => u({ meta: v })} />
                  </>
                )}
                <LinkPicker label="Link (optional — makes the card clickable)" value={c.link ?? ''} onChange={(link) => u({ link })} />
                {block.style === 'image' && <ImagePicker label="Photo" value={c.image ?? ''} onChange={(v) => u({ image: v })} onError={onError} />}
              </>
            )}
          />
        </>
      );

    case 'pricing':
      return (
        <>
          <CommonFields block={block} update={update} />
          {grid(
            <>
              <TextInput label="Booking form prefill" hint="Tier title is appended, e.g. “Gypsy - Sharing Seat”" value={block.bookingPrefill ?? ''} onChange={(v) => set({ bookingPrefill: v })} />
              <TextInput label="Button text" value={block.buttonLabel ?? ''} onChange={(v) => set({ buttonLabel: v })} placeholder="Enquire Now" />
            </>
          )}
          <SelectInput
            label="When a visitor presses the button"
            value={block.enquiryForm ?? 'booking'}
            options={[
              { value: 'booking', label: 'Open the safari booking popup' },
              { value: 'service', label: 'Open the Service Request form (choices = the card titles below)' },
            ]}
            onChange={(v) => set({ enquiryForm: v === 'service' ? 'service' : undefined })}
          />
          {block.enquiryForm === 'service' && (
            <p className="rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
              The form opens with the pressed card already selected. Its “Service” list shows only these cards’ titles — add or rename a card and the list
              updates by itself. Submissions arrive in Forms → Service Requests.
            </p>
          )}
          <ListEditor<PricingTier>
            items={block.tiers}
            onChange={(tiers) => set({ tiers })}
            addLabel="Add price tier"
            itemLabel={(t) => `${t.title} · ${t.price}`}
            newItem={() => ({ title: '', price: '₹', unit: 'per person', features: [] })}
            renderItem={(t, u) => (
              <>
                {grid(
                  <>
                    <TextInput label="Title" value={t.title} onChange={(v) => u({ title: v })} />
                    <TextInput label="Badge" value={t.badge ?? ''} onChange={(v) => u({ badge: v })} />
                    <TextInput label="Price" value={t.price} onChange={(v) => u({ price: v })} />
                    <TextInput label="Price unit" value={t.unit} onChange={(v) => u({ unit: v })} />
                  </>
                )}
                <LinesInput label="Features" value={t.features} onChange={(v) => u({ features: v })} />
                <TextInput label="Small print" value={t.footnote ?? ''} onChange={(v) => u({ footnote: v })} />
                <Toggle label="Highlight this tier" checked={!!t.highlighted} onChange={(v) => u({ highlighted: v })} />
              </>
            )}
          />
          <TextInput label="Note below tiers" value={block.note ?? ''} onChange={(v) => set({ note: v })} />
        </>
      );

    case 'table':
      return (
        <>
          <CommonFields block={block} update={update} />
          <DelimitedInput
            label="Column headings"
            hint="Separate with |"
            value={block.columns}
            format={(cols) => cols.join(' | ')}
            parse={(t) => t.split('|').map((c) => c.trim())}
            onChange={(columns) => set({ columns })}
          />
          <DelimitedInput
            label="Rows"
            hint="One row per line, cells separated with |"
            multiline
            value={block.rows}
            format={(rows) => rows.map((row) => row.join(' | ')).join('\n')}
            parse={(t) => t.split('\n').filter((l) => l.trim()).map((l) => l.split('|').map((c) => c.trim()))}
            onChange={(rows) => set({ rows })}
          />
          <TextInput label="Note below table" value={block.note ?? ''} onChange={(v) => set({ note: v })} />
        </>
      );

    case 'timeline':
      return (
        <>
          <CommonFields block={block} update={update} />
          <ListEditor<TimelineItem>
            items={block.items}
            onChange={(items) => set({ items })}
            addLabel="Add step / day"
            itemLabel={(t) => `${t.label} — ${t.title}`}
            newItem={() => ({ label: `Day ${block.items.length + 1}`, title: '', text: '' })}
            renderItem={(t, u) => (
              <>
                {grid(
                  <>
                    <TextInput label="Label (Day 1, 1973, Step 1…)" value={t.label} onChange={(v) => u({ label: v })} />
                    <TextInput label="Title" value={t.title} onChange={(v) => u({ title: v })} />
                  </>
                )}
                <RichTextEditor mode="full" onError={onError} label="Text" value={t.text} onChange={(v) => u({ text: v })} />
                <LinesInput label="Bullet points (optional)" value={t.bullets ?? []} onChange={(v) => u({ bullets: v })} />
              </>
            )}
          />
        </>
      );

    case 'faq':
      return (
        <>
          <CommonFields block={block} update={update} />
          <ListEditor
            items={block.items}
            onChange={(items) => set({ items })}
            addLabel="Add question"
            itemLabel={(f) => f.q}
            newItem={() => ({ q: '', a: '' })}
            renderItem={(f, u) => (
              <>
                <TextInput label="Question" value={f.q} onChange={(v) => u({ q: v })} />
                <RichTextEditor mode="full" onError={onError} label="Answer" rows={4} value={f.a} onChange={(v) => u({ a: v })} />
              </>
            )}
          />
        </>
      );

    case 'checklist':
      return (
        <>
          <CommonFields block={block} update={update} />
          <ListEditor<ChecklistGroup>
            items={block.groups}
            onChange={(groups) => set({ groups })}
            addLabel="Add list"
            itemLabel={(g) => g.title || 'List'}
            newItem={() => ({ title: '', tone: 'neutral', items: [] })}
            renderItem={(g, u) => (
              <>
                {grid(
                  <>
                    <TextInput label="List title" value={g.title} onChange={(v) => u({ title: v })} />
                    <SelectInput label="Style" value={g.tone} options={[{ value: 'do', label: '✓ Green (included / do)' }, { value: 'dont', label: '✗ Red (excluded / don’t)' }, { value: 'neutral', label: '✓ Neutral' }]} onChange={(v) => u({ tone: v })} />
                  </>
                )}
                <LinesInput label="Items" value={g.items} onChange={(v) => u({ items: v })} rows={6} />
              </>
            )}
          />
        </>
      );

    case 'imageText':
      return (
        <>
          <CommonFields block={block} update={update} />
          <RichTextEditor mode="full" onError={onError} label="Text" rows={6} value={block.body} onChange={(v) => set({ body: v })} />
          <LinesInput label="Check points (optional)" value={block.bullets ?? []} onChange={(v) => set({ bullets: v })} />
          <ImagePicker label="Image" value={block.image} onChange={(v) => set({ image: v })} onError={onError} />
          <SelectInput label="Image position" value={block.imageSide} options={[{ value: 'left', label: 'Left' }, { value: 'right', label: 'Right' }]} onChange={(v) => set({ imageSide: v })} />
        </>
      );

    case 'richText':
      return (
        <>
          <CommonFields block={block} update={update} />
          <RichTextEditor mode="full" onError={onError} label="Text" rows={10} value={block.body} onChange={(v) => set({ body: v })} />
        </>
      );

    case 'callout':
      return (
        <>
          {grid(
            <>
              <TextInput label="Title" value={block.title} onChange={(v) => set({ title: v })} />
              <SelectInput<Tone> label="Style" value={block.tone} options={[{ value: 'info', label: 'Info (green)' }, { value: 'success', label: 'Success' }, { value: 'warning', label: 'Warning (amber)' }, { value: 'danger', label: 'Important (red)' }]} onChange={(v) => set({ tone: v })} />
            </>
          )}
          <RichTextEditor mode="full" onError={onError} label="Text" rows={4} value={block.text} onChange={(v) => set({ text: v })} />
        </>
      );

    case 'cta':
      return (
        <>
          <TextInput label="Badge" value={block.badge ?? ''} onChange={(v) => set({ badge: v })} />
          <TextInput label="Title" value={block.title} onChange={(v) => set({ title: v })} />
          <RichTextEditor label="Text" rows={2} value={block.text} onChange={(v) => set({ text: v })} />
          {grid(
            <>
              <TextInput label="Button text" hint="Empty hides the booking button" value={block.buttonLabel} onChange={(v) => set({ buttonLabel: v })} />
              <TextInput label="WhatsApp message" hint="Empty hides the WhatsApp button" value={block.whatsappText ?? ''} onChange={(v) => set({ whatsappText: v })} />
              <TextInput label="Booking form: vehicle / package" value={block.bookingPrefill ?? ''} onChange={(v) => set({ bookingPrefill: v })} />
              <TextInput label="Booking form: zone" value={block.bookingZone ?? ''} onChange={(v) => set({ bookingZone: v })} />
            </>
          )}
        </>
      );

    case 'packages':
      return (
        <>
          <CommonFields block={block} update={update} />
          <SelectInput
            label="Show"
            value={(block.category ?? '') as '' | 'short' | 'standard' | 'luxury' | 'custom'}
            options={[{ value: '', label: 'All published packages (with filter tabs)' }, { value: 'short', label: 'Day / 1-Day only' }, { value: 'standard', label: 'Weekend & 3-Day only' }, { value: 'luxury', label: 'Luxury Heritage only' }, { value: 'custom', label: 'Photography only' }]}
            onChange={(v) => set({ category: v || undefined })}
          />
        </>
      );

    case 'contactInfo':
      return (
        <>
          <CommonFields block={block} update={update} />
          <p className="text-xs text-[#517362]">Shows the details from “Contact Details”.</p>
        </>
      );

    case 'serviceRequest': {
      // Sections on this page that can supply choices (price cards, cards, timeline, table).
      const sources = pageBlocks.filter((b) => b.id !== block.id && blockChoiceTitles(b).length > 0);
      const from = block.optionsFrom ?? '';
      const choices = serviceRequestChoices(block, pageBlocks);
      return (
        <>
          <CommonFields block={block} update={update} />
          <SelectInput
            label="Choices in the “Service” dropdown"
            value={from}
            options={[
              { value: '', label: 'Same as the form setting (Forms → Service Request Form)' },
              ...sources.map((b) => ({ value: b.id, label: `From the section “${(b.heading || LABELS[b.type]).replace(/\*/g, '')}”` })),
              { value: 'custom', label: 'My own list for this page (typed below)' },
            ]}
            onChange={(v) => set({ optionsFrom: v || undefined })}
          />
          {from === 'custom' && (
            <LinesInput label="Choices for this page" hint="One per line, in the order shown" value={block.options ?? []} onChange={(options) => set({ options })} />
          )}
          {from && from !== 'custom' && (
            <p className="rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
              {choices?.length ? <>Visitors choose from: <strong>{choices.join(' · ')}</strong>. Edit that section and this list follows by itself.</> : 'That section has no titles yet, so the form setting is used.'}
            </p>
          )}
          <p className="text-xs text-[#517362]">
            The form’s field names, side panel and messages are edited in Forms → Service Request Form. Submissions appear in Forms → Service Requests and then go to the Thank-you page.
          </p>
        </>
      );
    }

    default:
      return <p className="text-xs text-[#517362]">This section has no settings here. Its content comes from the matching homepage section in the sidebar.</p>;
  }
}

export default function BlocksEditor({ blocks, onChange, onError }: { blocks: Block[]; onChange: (b: Block[]) => void; onError: (m: string) => void }) {
  const [addType, setAddType] = useState<BlockType>('cards');

  return (
    <div className="space-y-3">
      <ListEditor<Block>
        items={blocks}
        onChange={onChange}
        hideAdd
        newItem={() => newBlock('cards')}
        itemTag={(b) => LABELS[b.type] ?? b.type}
        itemLabel={(b) => {
          if (b.heading) return b.heading;
          if ('title' in b && b.title) return b.title;
          const first = 'items' in b ? b.items[0] : 'tiers' in b ? b.tiers[0] : 'groups' in b ? b.groups[0] : undefined;
          const name = first && ('title' in first ? first.title : 'q' in first ? first.q : '');
          return name ? `${name}${'items' in b && b.items.length > 1 ? ` + ${b.items.length - 1} more` : ''}` : '(no heading)';
        }}
        renderItem={(b, u) => (
          <>
            <BlockFields block={b} update={u as (p: Partial<Block>) => void} onError={onError} pageBlocks={blocks} />
            <TextInput label="Anchor id" hint="Used for #links and the table of contents" value={b.id} onChange={(v) => u({ id: v.replace(/[^a-z0-9-]/gi, '-').toLowerCase() } as Partial<Block>)} />
          </>
        )}
      />
      <div className="flex flex-col gap-2 rounded-xl border border-dashed border-[#c4dcce] bg-[#f4f8f5] p-3 sm:flex-row sm:items-center">
        <select value={addType} onChange={(e) => setAddType(e.target.value as BlockType)} className={`${inputClass} sm:flex-1`}>
          {BLOCK_TYPES.map((t) => (
            <option key={t.type} value={t.type}>{t.label} — {t.hint}</option>
          ))}
        </select>
        <Button onClick={() => onChange([...blocks, newBlock(addType)])}>
          <Plus className="h-3.5 w-3.5" /> Add section
        </Button>
      </div>
    </div>
  );
}
