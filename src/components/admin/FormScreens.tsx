'use client';

import React from 'react';
import RichTextEditor from './RichTextEditor';
import type { FormsContent, SiteContent, SiteContentKey } from '@/lib/site-content';
import { Card, LinesInput, NumberInput, TextArea, TextInput, Toggle } from './ui';

export interface ScreenProps {
  draft: SiteContent;
  set: <K extends SiteContentKey>(key: K, value: SiteContent[K]) => void;
  onError: (message: string) => void;
}

/** A form screen edits parts of several content sections; all of them are saved together. */
export interface FormScreen {
  id: `form-${string}`;
  label: string;
  desc: string;
  help: string;
  where: string;
  keys: SiteContentKey[];
  Editor: (props: ScreenProps) => React.ReactElement;
}

function Grid({ cols = 2, children }: { cols?: 2 | 3; children: React.ReactNode }) {
  return <div className={`grid grid-cols-1 gap-4 ${cols === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>{children}</div>;
}

function SharedNote({ children }: { children: React.ReactNode }) {
  return <p className="rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-900">{children}</p>;
}

/** Dropdown choices are shared by the widget, popup and enquiry form. */
function OptionsCard({ draft, set, which }: ScreenProps & { which: ('vehicle' | 'shift' | 'zone' | 'nationality')[] }) {
  const forms = draft.forms;
  const update = (patch: Partial<FormsContent>) => set('forms', { ...forms, ...patch });
  return (
    <Card title="Dropdown choices" description="The first line is selected by default.">
      <SharedNote>Shared: the same choices are used in the homepage widget, the booking popup and the enquiry form.</SharedNote>
      <Grid>
        {which.includes('vehicle') && <LinesInput label="Vehicle / package choices" value={forms.vehicleOptions} onChange={(vehicleOptions) => update({ vehicleOptions })} />}
        {which.includes('shift') && <LinesInput label="Shift timing choices" value={forms.shiftOptions} onChange={(shiftOptions) => update({ shiftOptions })} />}
        {which.includes('zone') && <LinesInput label="Zone choices" value={forms.zoneOptions} onChange={(zoneOptions) => update({ zoneOptions })} />}
        {which.includes('nationality') && <LinesInput label="Nationality choices" value={forms.nationalityOptions} onChange={(nationalityOptions) => update({ nationalityOptions })} />}
      </Grid>
    </Card>
  );
}

function AfterSubmitCard({ draft, set }: ScreenProps) {
  const forms = draft.forms;
  const update = (patch: Partial<FormsContent>) => set('forms', { ...forms, ...patch });
  return (
    <>
      <Card title="After the visitor submits">
        <SharedNote>Shared by the booking popup and the enquiry form.</SharedNote>
        <RichTextEditor label="Thank-you message" rows={2} value={forms.successMessage} onChange={(successMessage) => update({ successMessage })} />
        <TextArea
          label="WhatsApp message (sent when they tap the WhatsApp button after submitting)"
          hint="You can use: {ref} {name} {phone} {email} {date} {vehicle} {shift} {zone} {adults} {children} {nationality} {notes}. A line is skipped if its fields are empty."
          rows={11}
          value={forms.whatsappTemplate}
          onChange={(whatsappTemplate) => update({ whatsappTemplate })}
        />
      </Card>
      <Card title="Error messages">
        <Grid cols={3}>
          <TextInput label="Name or phone missing" value={forms.errors.required} onChange={(required) => update({ errors: { ...forms.errors, required } })} />
          <TextInput label="Consent box not ticked" value={forms.errors.consent} onChange={(consent) => update({ errors: { ...forms.errors, consent } })} />
          <TextInput label="Could not send" value={forms.errors.network} onChange={(network) => update({ errors: { ...forms.errors, network } })} />
        </Grid>
      </Card>
    </>
  );
}

function FieldLabelsCard({ draft, set, withEmail = true, withNationality = true }: ScreenProps & { withEmail?: boolean; withNationality?: boolean }) {
  const forms = draft.forms;
  const l = forms.labels;
  const update = (patch: Partial<FormsContent['labels']>) => set('forms', { ...forms, labels: { ...l, ...patch } });
  return (
    <Card title="Field names and hints" description="Text above each box, and the grey example text inside it.">
      <SharedNote>Shared by the booking popup and the enquiry form.</SharedNote>
      <Grid cols={3}>
        <TextInput label="Name field" value={l.name} onChange={(name) => update({ name })} />
        <TextInput label="Name example" value={l.namePlaceholder} onChange={(namePlaceholder) => update({ namePlaceholder })} />
        <TextInput label="Phone field" value={l.phone} onChange={(phone) => update({ phone })} />
        <TextInput label="Phone example" value={l.phonePlaceholder} onChange={(phonePlaceholder) => update({ phonePlaceholder })} />
        {withEmail && <TextInput label="Email field" value={l.email} onChange={(email) => update({ email })} />}
        {withEmail && <TextInput label="Email example" value={l.emailPlaceholder} onChange={(emailPlaceholder) => update({ emailPlaceholder })} />}
        <TextInput label="Date field" value={l.date} onChange={(date) => update({ date })} />
        <TextInput label="Vehicle field" value={l.vehicle} onChange={(vehicle) => update({ vehicle })} />
        <TextInput label="Shift field" value={l.shift} onChange={(shift) => update({ shift })} />
        <TextInput label="Zone field" value={l.zone} onChange={(zone) => update({ zone })} />
        {withNationality && <TextInput label="Nationality field" value={l.nationality} onChange={(nationality) => update({ nationality })} />}
        <TextInput label="Adults" value={l.adults} onChange={(adults) => update({ adults })} />
        <TextInput label="Children" value={l.children} onChange={(children) => update({ children })} />
        <TextInput label="Notes field" value={l.notes} onChange={(notes) => update({ notes })} />
        <TextInput label="Notes example" value={l.notesPlaceholder} onChange={(notesPlaceholder) => update({ notesPlaceholder })} />
      </Grid>
    </Card>
  );
}

function WidgetEditor(props: ScreenProps) {
  const { draft, set } = props;
  const hero = draft.hero;
  const w = hero.widget;
  const setW = (patch: Partial<typeof w>) => set('hero', { ...hero, widget: { ...w, ...patch } });
  const pricing = draft.pricing;
  const vehicles = draft.vehicles;
  return (
    <>
      <Card title="Show or hide">
        <div className="flex flex-col gap-2">
          <Toggle label="Show the availability box on the homepage" checked={w.visible} onChange={(visible) => setW({ visible })} />
          <Toggle label="Show the estimated cost" checked={w.showEstimate} onChange={(showEstimate) => setW({ showEstimate })} />
        </div>
      </Card>
      <Card title="Top of the box">
        <Grid cols={3}>
          <TextInput label="Title" value={w.title} onChange={(title) => setW({ title })} />
          <TextInput label="Subtitle" value={w.subtitle} onChange={(subtitle) => setW({ subtitle })} />
          <TextInput label="Badge (top right)" value={w.badge} onChange={(badge) => setW({ badge })} />
        </Grid>
      </Card>
      <Card title="1. Vehicle choice" description="The two vehicle buttons. The price shown and used for the estimate is the Indian per-person rate.">
        <TextInput label="Step heading" value={w.vehicleLabel} onChange={(vehicleLabel) => setW({ vehicleLabel })} />
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {([
            ['Gypsy (left button)', 'gypsyLabel', 'gypsySeats', 'gypsyPerPerson', 'gypsy'],
            ['Canter (right button)', 'canterLabel', 'canterSeats', 'canterPerPerson', 'canter'],
          ] as const).map(([title, labelKey, seatKey, priceKey, vehicleKey]) => (
            <div key={title} className="space-y-3 rounded-xl border border-[#d2e4d9] bg-[#f4f8f5] p-3">
              <p className="text-xs font-bold text-[#183d2a]">{title}</p>
              <Grid>
                <TextInput label="Name" value={w[labelKey]} onChange={(v) => setW({ [labelKey]: v })} />
                <TextInput label="Seats tag" value={w[seatKey]} onChange={(v) => setW({ [seatKey]: v })} />
                <NumberInput label="Price per person (₹)" value={pricing[priceKey]} onChange={(v) => set('pricing', { ...pricing, [priceKey]: v })} />
                <TextInput
                  label="Sent to the booking form as"
                  value={vehicles[vehicleKey].bookingValue}
                  onChange={(bookingValue) => set('vehicles', { ...vehicles, [vehicleKey]: { ...vehicles[vehicleKey], bookingValue } })}
                />
              </Grid>
            </div>
          ))}
        </div>
        <SharedNote>The prices are the same ones shown in “Safari Rates” and on the Gypsy vs Canter cards — changing them here changes them there too.</SharedNote>
      </Card>
      <Card title="2. Date, shift and zone">
        <Grid>
          <TextInput label="Date heading" value={w.dateLabel} onChange={(dateLabel) => setW({ dateLabel })} />
          <TextInput label="Date hint (orange, right)" value={w.dateHint} onChange={(dateHint) => setW({ dateHint })} />
          <TextInput label="Shift heading" value={w.shiftLabel} onChange={(shiftLabel) => setW({ shiftLabel })} />
          <TextInput label="Zone heading" value={w.zoneLabel} onChange={(zoneLabel) => setW({ zoneLabel })} />
        </Grid>
      </Card>
      <OptionsCard {...props} which={['shift', 'zone']} />
      <Card title="Guests and estimated cost">
        <Grid>
          <TextInput label="Adults label" value={w.adultsLabel} onChange={(adultsLabel) => setW({ adultsLabel })} />
          <TextInput label="Children label" value={w.childrenLabel} onChange={(childrenLabel) => setW({ childrenLabel })} />
          <TextInput label="Cost label" value={w.costLabel} onChange={(costLabel) => setW({ costLabel })} />
          <TextInput label="Cost note (under the price)" value={w.costNote} onChange={(costNote) => setW({ costNote })} />
          <NumberInput
            label="Child price (% of adult price)"
            hint="Estimate = adults × price + children × price × this %"
            min={0}
            max={100}
            value={pricing.childPricePercent}
            onChange={(v) => set('pricing', { ...pricing, childPricePercent: Math.max(0, Math.min(100, v)) })}
          />
        </Grid>
      </Card>
      <Card title="Button and small print">
        <Grid>
          <TextInput label="Button text" value={w.button} onChange={(button) => setW({ button })} />
          <TextInput label="Small print under the button" value={w.footnote} onChange={(footnote) => setW({ footnote })} />
        </Grid>
        <p className="text-xs text-[#517362]">The button opens the booking popup with the chosen vehicle, date, shift, zone and guests filled in. Edit the popup in Forms → Booking Popup.</p>
      </Card>
    </>
  );
}

function PopupEditor(props: ScreenProps) {
  const { draft, set } = props;
  const forms = draft.forms;
  const m = forms.modal;
  const setM = (patch: Partial<typeof m>) => set('forms', { ...forms, modal: { ...m, ...patch } });
  return (
    <>
      <Card title="Top of the popup">
        <Grid cols={3}>
          <TextInput label="Badge" value={m.badge} onChange={(badge) => setM({ badge })} />
          <TextInput label="Title" value={m.title} onChange={(title) => setM({ title })} />
          <TextInput label="Subtitle" value={m.subtitle} onChange={(subtitle) => setM({ subtitle })} />
        </Grid>
      </Card>
      <FieldLabelsCard {...props} withNationality={false} />
      <OptionsCard {...props} which={['vehicle', 'shift', 'zone']} />
      <Card title="Button and consent line">
        <Grid>
          <TextInput label="Submit button" value={m.submit} onChange={(submit) => setM({ submit })} />
          <TextInput label="Button text while sending" value={m.submitting} onChange={(submitting) => setM({ submitting })} />
        </Grid>
        <RichTextEditor
          label="Line under the button"
          hint="Select words and use the link button to add a link"
          rows={2}
          value={forms.labels.consent}
          onChange={(consent) => set('forms', { ...forms, labels: { ...forms.labels, consent } })}
        />
      </Card>
      <Card title="Success screen">
        <Grid>
          <TextInput label="Title" value={m.successTitle} onChange={(successTitle) => setM({ successTitle })} />
          <TextInput label="WhatsApp button" value={m.successWhatsapp} onChange={(successWhatsapp) => setM({ successWhatsapp })} />
        </Grid>
      </Card>
      <AfterSubmitCard {...props} />
    </>
  );
}

function EnquiryEditor(props: ScreenProps) {
  const { draft, set } = props;
  const forms = draft.forms;
  const q = forms.quick;
  const setQ = (patch: Partial<typeof q>) => set('forms', { ...forms, quick: { ...q, ...patch } });
  const heading = draft.home.enquiry;
  return (
    <>
      <Card title="Section heading (left side)" description="Wrap words in *stars* to highlight them.">
        <Toggle
          label="Show this section on the homepage"
          checked={heading.visible}
          onChange={(visible) => set('home', { ...draft.home, enquiry: { ...heading, visible } })}
        />
        <Grid>
          <TextInput label="Badge" value={heading.badge} onChange={(badge) => set('home', { ...draft.home, enquiry: { ...heading, badge } })} />
          <TextInput label="Heading" value={heading.title} onChange={(title) => set('home', { ...draft.home, enquiry: { ...heading, title } })} />
        </Grid>
        <RichTextEditor label="Text" rows={2} value={heading.subtitle} onChange={(subtitle) => set('home', { ...draft.home, enquiry: { ...heading, subtitle } })} />
      </Card>
      <Card title="Contact boxes (left side)" description="The phone numbers and WhatsApp number come from Site Settings → Contact Details.">
        <Grid>
          <TextInput label="Phone box label" value={q.phoneLabel} onChange={(phoneLabel) => setQ({ phoneLabel })} />
          <TextInput label="WhatsApp box label" value={q.whatsappLabel} onChange={(whatsappLabel) => setQ({ whatsappLabel })} />
          <TextInput label="Text after the WhatsApp number" value={q.whatsappSuffix} onChange={(whatsappSuffix) => setQ({ whatsappSuffix })} />
          <TextInput label="WhatsApp message" value={q.whatsappText} onChange={(whatsappText) => setQ({ whatsappText })} />
          <TextInput label="Privacy box title" value={q.privacyTitle} onChange={(privacyTitle) => setQ({ privacyTitle })} />
        </Grid>
        <RichTextEditor label="Privacy box text" rows={2} value={q.privacyText} onChange={(privacyText) => setQ({ privacyText })} />
      </Card>
      <Card title="Form (right side)">
        <Grid>
          <TextInput label="Form title" value={q.formTitle} onChange={(formTitle) => setQ({ formTitle })} />
          <TextInput label="Form subtitle" value={q.formSubtitle} onChange={(formSubtitle) => setQ({ formSubtitle })} />
          <TextInput label="Submit button" value={q.submit} onChange={(submit) => setQ({ submit })} />
          <TextInput label="Button text while sending" value={q.submitting} onChange={(submitting) => setQ({ submitting })} />
        </Grid>
        <RichTextEditor label="Consent checkbox text" hint="Select words and use the link button to add a link" rows={2} value={q.consent} onChange={(consent) => setQ({ consent })} />
      </Card>
      <FieldLabelsCard {...props} />
      <OptionsCard {...props} which={['vehicle', 'shift', 'zone', 'nationality']} />
      <Card title="Success screen">
        <Grid cols={3}>
          <TextInput label="Title" value={q.successTitle} onChange={(successTitle) => setQ({ successTitle })} />
          <TextInput label="WhatsApp button" value={q.successWhatsapp} onChange={(successWhatsapp) => setQ({ successWhatsapp })} />
          <TextInput label="“Send another” button" value={q.anotherRequest} onChange={(anotherRequest) => setQ({ anotherRequest })} />
        </Grid>
      </Card>
      <AfterSubmitCard {...props} />
    </>
  );
}

export const FORM_SCREENS: FormScreen[] = [
  {
    id: 'form-widget',
    label: 'Availability Widget',
    desc: 'The “Check Safari Availability” box on the homepage',
    help: 'Everything in the booking box on the right of the homepage banner: texts, the two vehicles and their prices, dropdown choices, the cost estimate and the button. Its button opens the booking popup.',
    where: '/#safari-booking',
    keys: ['hero', 'pricing', 'vehicles', 'forms'],
    Editor: WidgetEditor,
  },
  {
    id: 'form-popup',
    label: 'Booking Popup',
    desc: 'The popup that opens from every “Book Safari” button',
    help: 'The booking popup that opens from “Book Safari”, “Enquire” and the availability widget. Edit its texts, field names, dropdown choices, success screen and messages here.',
    where: '/',
    keys: ['forms'],
    Editor: PopupEditor,
  },
  {
    id: 'form-enquiry',
    label: 'Enquiry Form',
    desc: 'The “Get an Instant Safari Quote” form section',
    help: 'The enquiry form section at the bottom of the homepage and on pages like Contact Us. Edit the heading, contact boxes, form texts, field names, dropdown choices and messages here.',
    where: '/#contact-us',
    keys: ['home', 'forms'],
    Editor: EnquiryEditor,
  },
];
