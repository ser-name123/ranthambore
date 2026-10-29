'use client';

import React from 'react';
import RichTextEditor from './RichTextEditor';
import type { FormsContent, ServiceFormContent, SiteContent, SiteContentKey, ThankYouContent } from '@/lib/site-content';
import { LinkPicker } from './LinkOptions';
import { Card, ImagePicker, LinesInput, NumberInput, SelectInput, TextArea, TextInput, Toggle } from './ui';

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

/** Everything in the Service Request Form. Also used as the section editor for the `serviceForm` key. */
export function ServiceFormFields({ value: f, onChange, onError }: { value: ServiceFormContent; onChange: (v: ServiceFormContent) => void; onError?: (m: string) => void }) {
  const update = (patch: Partial<ServiceFormContent>) => onChange({ ...f, ...patch });
  const setL = (patch: Partial<ServiceFormContent['labels']>) => update({ labels: { ...f.labels, ...patch } });
  const setE = (patch: Partial<ServiceFormContent['errors']>) => update({ errors: { ...f.errors, ...patch } });
  const setA = (patch: Partial<ServiceFormContent['aside']>) => update({ aside: { ...f.aside, ...patch } });
  return (
    <>
      <Card title="Choices in the “Service” dropdown" description="Visitors must pick one of these.">
        <SelectInput
          label="Where the choices come from"
          value={f.optionsMode}
          options={[
            { value: 'linked', label: 'Automatic: the cards of price sections whose button opens this form' },
            { value: 'manual', label: 'My own list (typed below)' },
          ]}
          onChange={(optionsMode) => update({ optionsMode })}
        />
        {f.optionsMode === 'linked' ? (
          <p className="rounded-lg bg-emerald-50 px-3 py-2 text-xs text-emerald-900">
            The dropdown lists the card titles of every price section set to “Open the Service Request form” (e.g. “Curated Resort Categories” on Resort
            Booking). Add, rename or remove a card there and this list follows by itself. If no section is linked, your own list below is used instead.
          </p>
        ) : null}
        <LinesInput
          label={f.optionsMode === 'linked' ? 'Own list (used only if no price section is linked)' : 'Service choices'}
          hint="One per line, in the order shown"
          rows={f.optionsMode === 'linked' ? 4 : 9}
          value={f.serviceOptions}
          onChange={(serviceOptions) => update({ serviceOptions })}
        />
        <TextInput label="Text shown before a service is picked" value={f.labels.servicePlaceholder} onChange={(servicePlaceholder) => setL({ servicePlaceholder })} />
      </Card>
      <Card title="Form heading" description="Shown at the top of the form box. Leave empty to hide.">
        <TextInput label="Title" value={f.title} onChange={(title) => update({ title })} />
        <RichTextEditor label="Subtitle" rows={2} value={f.subtitle} onChange={(subtitle) => update({ subtitle })} />
      </Card>
      <Card
        title="Side panel (beside the form)"
        description="The photo box on the left of the form on pages like Contact Us. Its call and WhatsApp buttons use the numbers from Site Settings → Contact Details."
      >
        <Toggle label="Show the side panel" checked={f.aside.visible} onChange={(visible) => setA({ visible })} />
        {f.aside.visible && (
          <>
            <ImagePicker label="Background photo" value={f.aside.image} onChange={(image) => setA({ image })} onError={onError ?? (() => {})} />
            <Grid>
              <TextInput label="Small label" value={f.aside.badge} onChange={(badge) => setA({ badge })} />
              <TextInput label="Heading" value={f.aside.title} onChange={(title) => setA({ title })} />
            </Grid>
            <RichTextEditor label="Text" rows={2} value={f.aside.text} onChange={(text) => setA({ text })} />
            <LinesInput label="Points with tick marks" rows={5} value={f.aside.points} onChange={(points) => setA({ points })} />
            <TextInput label="WhatsApp button message" value={f.aside.whatsappText} onChange={(whatsappText) => setA({ whatsappText })} />
          </>
        )}
      </Card>
      <Card title="Field names and hints" description="Text above each box, and the grey example text inside it. Add * to show a field is required.">
        <Grid cols={3}>
          <TextInput label="Name field" value={f.labels.name} onChange={(name) => setL({ name })} />
          <TextInput label="Name example" value={f.labels.namePlaceholder} onChange={(namePlaceholder) => setL({ namePlaceholder })} />
          <TextInput label="Mobile field" value={f.labels.phone} onChange={(phone) => setL({ phone })} />
          <TextInput label="Mobile example" value={f.labels.phonePlaceholder} onChange={(phonePlaceholder) => setL({ phonePlaceholder })} />
          <TextInput label="Email field" value={f.labels.email} onChange={(email) => setL({ email })} />
          <TextInput label="Email example" value={f.labels.emailPlaceholder} onChange={(emailPlaceholder) => setL({ emailPlaceholder })} />
          <TextInput label="Number of people field" value={f.labels.people} onChange={(people) => setL({ people })} />
          <TextInput label="Service field" value={f.labels.service} onChange={(service) => setL({ service })} />
          <TextInput label="Date field" value={f.labels.date} onChange={(date) => setL({ date })} />
          <TextInput label="Message field" value={f.labels.message} onChange={(message) => setL({ message })} />
          <TextInput label="Message example" className="sm:col-span-2" value={f.labels.messagePlaceholder} onChange={(messagePlaceholder) => setL({ messagePlaceholder })} />
        </Grid>
        <Grid cols={3}>
          <NumberInput label="Most people allowed" min={1} max={500} value={f.peopleMax} onChange={(peopleMax) => update({ peopleMax })} />
          <Toggle label="Email is required" checked={f.emailRequired} onChange={(emailRequired) => update({ emailRequired })} />
          <Toggle label="Date is required" checked={f.dateRequired} onChange={(dateRequired) => update({ dateRequired })} />
        </Grid>
        <p className="text-xs text-[#517362]">Name, mobile, number of people and service are always required.</p>
      </Card>
      <Card title="Consent and button">
        <RichTextEditor label="Consent checkbox text" hint="Leave empty to hide the checkbox. Select words and use the link button to add a link." rows={2} value={f.consent} onChange={(consent) => update({ consent })} />
        <Grid>
          <TextInput label="Submit button" value={f.submit} onChange={(submit) => update({ submit })} />
          <TextInput label="Button text while sending" value={f.submitting} onChange={(submitting) => update({ submitting })} />
        </Grid>
      </Card>
      <Card title="After the visitor submits">
        <Grid cols={3}>
          <TextInput label="Success title" value={f.successTitle} onChange={(successTitle) => update({ successTitle })} />
          <TextInput label="WhatsApp button" hint="Leave empty to hide it" value={f.successWhatsapp} onChange={(successWhatsapp) => update({ successWhatsapp })} />
          <TextInput label="“Send another” button" value={f.anotherRequest} onChange={(anotherRequest) => update({ anotherRequest })} />
        </Grid>
        <RichTextEditor label="Thank-you message" hint="You can use {name} {service} {ref}" rows={2} value={f.successMessage} onChange={(successMessage) => update({ successMessage })} />
        <TextArea
          label="WhatsApp message (sent when they tap the WhatsApp button)"
          hint="You can use: {ref} {service} {name} {phone} {email} {people} {date} {message}. A line is skipped if its fields are empty."
          rows={9}
          value={f.whatsappTemplate}
          onChange={(whatsappTemplate) => update({ whatsappTemplate })}
        />
      </Card>
      <Card title="Error messages">
        <Grid cols={3}>
          <TextInput label="Required field missing" value={f.errors.required} onChange={(required) => setE({ required })} />
          <TextInput label="Wrong mobile number" value={f.errors.phone} onChange={(phone) => setE({ phone })} />
          <TextInput label="Wrong email" value={f.errors.email} onChange={(email) => setE({ email })} />
          <TextInput label="Date in the past" value={f.errors.date} onChange={(date) => setE({ date })} />
          <TextInput label="Consent not ticked" value={f.errors.consent} onChange={(consent) => setE({ consent })} />
          <TextInput label="Could not send" value={f.errors.network} onChange={(network) => setE({ network })} />
        </Grid>
      </Card>
    </>
  );
}

function ServiceFormEditor({ draft, set, onError }: ScreenProps) {
  return <ServiceFormFields value={draft.serviceForm} onChange={(v) => set('serviceForm', v)} onError={onError} />;
}

/** The /thank-you page. Also used as the section editor for the `thankYou` key. */
export function ThankYouFields({ value: t, onChange }: { value: ThankYouContent; onChange: (v: ThankYouContent) => void; onError?: (m: string) => void }) {
  const update = (patch: Partial<ThankYouContent>) => onChange({ ...t, ...patch });
  const setName = (patch: Partial<ThankYouContent['formNames']>) => update({ formNames: { ...t.formNames, ...patch } });
  return (
    <>
      <Card title="When is it used?">
        <Toggle label="Send visitors to the Thank-you page after every form" checked={t.enabled} onChange={(enabled) => update({ enabled })} />
        <p className="text-xs text-[#517362]">
          Used by the booking popup, the enquiry form and the service request form (also its popup on price cards). Switch off to show each form’s own
          success message instead. The page is hidden from Google, and with Google Analytics you can count visits to <span className="font-mono">/thank-you</span> as
          conversions.
        </p>
      </Card>
      <Card title="Main message" description="You can use {form} (which form was sent) and {ref} (the visitor’s reference number).">
        <Grid>
          <TextInput label="Small label" value={t.badge} onChange={(badge) => update({ badge })} />
          <TextInput label="Heading" value={t.title} onChange={(title) => update({ title })} />
        </Grid>
        <RichTextEditor label="Message" rows={3} value={t.message} onChange={(message) => update({ message })} />
        <TextInput label="Reference number label" value={t.refLabel} onChange={(refLabel) => update({ refLabel })} />
      </Card>
      <Card title="Form names" description="What {form} becomes for each form.">
        <Grid cols={3}>
          <TextInput label="Booking popup" value={t.formNames.booking} onChange={(booking) => setName({ booking })} />
          <TextInput label="Enquiry form" value={t.formNames.enquiry} onChange={(enquiry) => setName({ enquiry })} />
          <TextInput label="Service request form" value={t.formNames.service} onChange={(service) => setName({ service })} />
        </Grid>
      </Card>
      <Card title="Buttons" description="Leave a button’s text empty to hide it.">
        <Grid>
          <TextInput label="WhatsApp button" value={t.whatsappButton} onChange={(whatsappButton) => update({ whatsappButton })} />
          <TextInput label="WhatsApp message" hint="You can use {ref} and {form}" value={t.whatsappText} onChange={(whatsappText) => update({ whatsappText })} />
          <TextInput label="Main button" value={t.primaryButton} onChange={(primaryButton) => update({ primaryButton })} />
          <LinkPicker label="Main button goes to" value={t.primaryLink} onChange={(primaryLink) => update({ primaryLink })} />
          <TextInput label="Second button" value={t.secondaryButton} onChange={(secondaryButton) => update({ secondaryButton })} />
          <LinkPicker label="Second button goes to" value={t.secondaryLink} onChange={(secondaryLink) => update({ secondaryLink })} />
        </Grid>
      </Card>
      <Card title="What happens next" description="Numbered steps under the message. Leave empty to hide the box. Phone numbers come from Contact Details.">
        <TextInput label="Heading" value={t.nextStepsTitle} onChange={(nextStepsTitle) => update({ nextStepsTitle })} />
        <LinesInput label="Steps" hint="One step per line" rows={5} value={t.nextSteps} onChange={(nextSteps) => update({ nextSteps })} />
      </Card>
    </>
  );
}

function ThankYouEditor({ draft, set, onError }: ScreenProps) {
  return <ThankYouFields value={draft.thankYou} onChange={(v) => set('thankYou', v)} onError={onError} />;
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
  {
    id: 'form-service',
    label: 'Service Request Form',
    desc: 'The service request form on the Contact Us page',
    help: 'The form where visitors ask for a service (safari, hotel, transfer…): name, mobile, email, number of people, service, date and message. Edit the service list, field names and messages here. Every submission is saved in Forms → Service Requests. To place the form on another page, add a “Service request form” section to that page.',
    where: '/contact-us#service-request',
    keys: ['serviceForm'],
    Editor: ServiceFormEditor,
  },
  {
    id: 'form-thankyou',
    label: 'Thank-you Page',
    desc: 'The page visitors see after sending any form',
    help: 'After the booking popup, enquiry form or service request form is sent, the visitor lands on this page with their reference number. Edit its heading, message, buttons and next steps here, or switch it off to show the form’s own success message.',
    where: '/thank-you?ref=SRV-2026-ABC123&form=service',
    keys: ['thankYou'],
    Editor: ThankYouEditor,
  },
];
