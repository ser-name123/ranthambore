'use client';

import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Check, CheckCircle2, Clock, Loader2, MessageCircle, Phone, Send, X } from 'lucide-react';
import { telHref, waHref } from '@/lib/site-content';
import { useSiteContent } from '@/context/SiteContentContext';
import { RichText } from '@/components/cms/Text';

const input =
  'w-full rounded-xl border border-[#c4dcce] bg-white px-3.5 py-2.5 text-sm text-[#082318] placeholder:text-[#7a9a88] outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-600/20';
const label = 'mb-1.5 block text-xs font-bold text-[#183d2a]';

function todayLocal(): string {
  const d = new Date();
  return new Date(d.getTime() - d.getTimezoneOffset() * 60_000).toISOString().slice(0, 10);
}

const EMPTY = { name: '', phone: '', email: '', people: '1', service: '', preferred_date: '', message: '', consent: false };

/**
 * "Service Request Form". Every submission is stored in the database (Admin → Forms → Service Requests).
 * `options` replaces the admin's service list (e.g. the cards of a price section); `defaultService` preselects one.
 */
export default function ServiceRequestForm({ options, defaultService = '', inPopup = false }: { options?: string[]; defaultService?: string; inPopup?: boolean }) {
  const { serviceForm: f, thankYou } = useSiteContent();
  const router = useRouter();
  const l = f.labels;
  const serviceOptions = options ?? f.serviceOptions;
  const empty = { ...EMPTY, service: serviceOptions.includes(defaultService) ? defaultService : '' };
  const [data, setData] = useState(empty);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');
  const [done, setDone] = useState<{ message: string; whatsappUrl: string; referenceId: string } | null>(null);
  const set = (patch: Partial<typeof EMPTY>) => setData((d) => ({ ...d, ...patch }));
  const max = Math.max(1, f.peopleMax || 50);

  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    if (!data.name.trim() || !data.phone.trim() || !data.service || !data.people || (f.emailRequired && !data.email.trim()) || (f.dateRequired && !data.preferred_date)) {
      return setError(f.errors.required);
    }
    if (!/^\+?\d{7,15}$/.test(data.phone.replace(/[\s\-().]/g, ''))) return setError(f.errors.phone);
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(data.email.trim())) return setError(f.errors.email);
    if (f.consent.trim() && !data.consent) return setError(f.errors.consent);

    setSending(true);
    try {
      const res = await fetch('/api/service-request', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          ...data,
          people: Number(data.people),
          page_url: window.location.pathname,
          website: String(new FormData(e.currentTarget).get('website') ?? ''),
        }),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.success) throw new Error(json.error || f.errors.network);
      // Admin → Forms → Thank-you Page: go there, unless it is switched off.
      if (thankYou.enabled && json.referenceId) {
        router.push(`/thank-you?ref=${encodeURIComponent(json.referenceId)}&form=service`);
        return;
      }
      setDone({ message: json.message, whatsappUrl: json.whatsappUrl, referenceId: json.referenceId });
      setData(empty);
    } catch (err) {
      setError(err instanceof Error && err.message ? err.message : f.errors.network);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className={inPopup ? 'relative' : 'relative h-full rounded-2xl border border-[#d2e4d9] bg-white p-6 shadow-xl sm:p-8'}>
      {done ? (
        <div className="space-y-5 py-6 text-center" role="status">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-emerald-200 bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <div>
            <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald-800">{done.referenceId}</span>
            <h3 className="mt-3 font-serif text-2xl font-bold text-[#082318]">{f.successTitle}</h3>
            <div className="mx-auto mt-2 max-w-md [&_p]:text-sm [&_p]:text-[#375847]"><RichText text={done.message} /></div>
          </div>
          <div className="flex flex-col justify-center gap-3 sm:flex-row">
            {done.whatsappUrl && (
              <a href={done.whatsappUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-bold text-white shadow-md transition hover:bg-emerald-800">
                <MessageCircle className="h-4 w-4" /> {f.successWhatsapp}
              </a>
            )}
            <button type="button" onClick={() => setDone(null)} className="cursor-pointer rounded-xl border border-[#d2e4d9] bg-[#f0f6f2] px-5 py-3 text-xs font-bold text-[#375847] transition hover:text-[#082318]">
              {f.anotherRequest}
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="space-y-4">
          {!inPopup && (f.title || f.subtitle) && (
            <div className="mb-2 border-b border-[#e2ede6] pb-4">
              {f.title && <h3 className="font-serif text-xl font-bold text-[#082318] sm:text-2xl">{f.title}</h3>}
              {f.subtitle && <div className="mt-1 [&_p]:text-sm [&_p]:text-[#375847]"><RichText text={f.subtitle} /></div>}
            </div>
          )}
          {/* Honeypot for bots; hidden from people and screen readers */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="block">
              <span className={label}>{l.name}</span>
              <input name="name" autoComplete="name" maxLength={120} value={data.name} onChange={(e) => set({ name: e.target.value })} placeholder={l.namePlaceholder} className={input} />
            </label>
            <label className="block">
              <span className={label}>{l.phone}</span>
              <input name="phone" type="tel" inputMode="tel" autoComplete="tel" maxLength={30} value={data.phone} onChange={(e) => set({ phone: e.target.value })} placeholder={l.phonePlaceholder} className={input} />
            </label>
            <label className="block">
              <span className={label}>{l.email}</span>
              <input name="email" type="email" autoComplete="email" maxLength={160} value={data.email} onChange={(e) => set({ email: e.target.value })} placeholder={l.emailPlaceholder} className={input} />
            </label>
            <label className="block">
              <span className={label}>{l.people}</span>
              <input name="people" type="number" inputMode="numeric" min={1} max={max} value={data.people} onChange={(e) => set({ people: e.target.value })} className={input} />
            </label>
            <label className="block">
              <span className={label}>{l.service}</span>
              <select name="service" value={data.service} onChange={(e) => set({ service: e.target.value })} className={`${input} cursor-pointer`}>
                <option value="" disabled>{l.servicePlaceholder}</option>
                {serviceOptions.map((o) => (
                  <option key={o} value={o}>{o}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className={label}>{l.date}</span>
              <input name="preferred_date" type="date" min={todayLocal()} value={data.preferred_date} onChange={(e) => set({ preferred_date: e.target.value })} className={input} />
            </label>
          </div>
          <label className="block">
            <span className={label}>{l.message}</span>
            <textarea name="message" rows={4} maxLength={2000} value={data.message} onChange={(e) => set({ message: e.target.value })} placeholder={l.messagePlaceholder} className={`${input} resize-y`} />
          </label>

          {f.consent.trim() && (
            <label className="flex cursor-pointer items-start gap-2.5 text-xs text-[#375847]">
              <input type="checkbox" checked={data.consent} onChange={(e) => set({ consent: e.target.checked })} className="mt-0.5 h-4 w-4 shrink-0 accent-emerald-700" />
              <span className="[&_a]:font-semibold [&_a]:text-emerald-800 [&_a]:underline [&_p]:text-xs [&_p]:text-[#375847]"><RichText text={f.consent} /></span>
            </label>
          )}

          {error && <p role="alert" className="rounded-lg border border-rose-200 bg-rose-50 px-3 py-2 text-xs font-semibold text-rose-700">{error}</p>}

          <button
            type="submit"
            disabled={sending}
            className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] py-3.5 text-sm font-bold text-white shadow-lg transition hover:from-emerald-600 hover:to-[#ea580c] disabled:opacity-60"
          >
            {sending ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
            {sending ? f.submitting : f.submit}
          </button>
        </form>
      )}
    </div>
  );
}

/** The Service Request Form in a popup, e.g. opened from a price card's "Enquire Now". */
export function ServiceRequestModal({ title, options, defaultService, onClose }: {
  title: string;
  options: string[];
  defaultService: string;
  onClose: () => void;
}) {
  const { serviceForm: f } = useSiteContent();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, [onClose]);

  // Portal: price cards sit in transformed (animated) containers, which would trap a fixed popup.
  return createPortal(
    <div className="fixed inset-0 z-[100] flex items-end justify-center bg-black/50 p-0 backdrop-blur-sm sm:items-center sm:p-4" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        data-service-modal
        onClick={(e) => e.stopPropagation()}
        className="max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-white p-6 shadow-2xl sm:rounded-2xl sm:p-8"
      >
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-[#e2ede6] pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-[#082318] sm:text-2xl">{title}</h3>
            {f.subtitle && <div className="mt-1 [&_p]:text-sm [&_p]:text-[#375847]"><RichText text={f.subtitle} /></div>}
          </div>
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close" className="shrink-0 cursor-pointer rounded-lg p-1.5 text-[#517362] transition hover:bg-[#f0f6f2] hover:text-[#082318]">
            <X className="h-5 w-5" />
          </button>
        </div>
        <ServiceRequestForm options={options} defaultService={defaultService} inPopup />
      </div>
    </div>,
    document.body
  );
}

/** The form on a page: a photo panel with reasons to book and quick contact beside it (stacks on mobile). */
export function ServiceRequestSection() {
  const { serviceForm: f, contact, ui } = useSiteContent();
  const a = f.aside;
  if (!a.visible) return <div className="max-w-4xl"><ServiceRequestForm /></div>;

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-8">
      <aside className="relative order-2 overflow-hidden rounded-2xl border border-[#d2e4d9] bg-[#0b3a26] text-white shadow-xl lg:order-1 lg:col-span-5">
        {a.image && <Image src={a.image} alt="" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062a1b]/80 via-[#062a1b]/85 to-[#062a1b]/95" />
        <div className="relative flex h-full flex-col gap-6 p-6 sm:p-8">
          <div className="space-y-3">
            {a.badge && (
              <span className="inline-flex rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-emerald-100 backdrop-blur">
                {a.badge}
              </span>
            )}
            {a.title && <h3 className="font-serif text-2xl font-bold leading-snug sm:text-3xl">{a.title}</h3>}
            {a.text && (
              <div className="text-sm leading-relaxed [&_*]:!text-emerald-50 [&_a]:underline [&_p]:text-sm">
                <RichText text={a.text} className="!text-emerald-50" />
              </div>
            )}
          </div>

          {a.points.length > 0 && (
            <ul className="space-y-3">
              {a.points.map((p, i) => (
                <li key={i} className="flex items-start gap-3 text-sm font-medium text-white">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#d97706]">
                    <Check className="h-3 w-3" strokeWidth={3} />
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-auto grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            {contact.phonePrimary && (
              <a href={telHref(contact.phonePrimary)} className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur transition hover:bg-white/20">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white text-emerald-800">
                  <Phone className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold text-emerald-100">{ui.contactCards.call}</span>
                  <span className="block truncate text-sm font-bold">{contact.phonePrimary}</span>
                </span>
              </a>
            )}
            {contact.whatsapp && (
              <a href={waHref(contact.whatsapp, a.whatsappText)} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur transition hover:bg-white/20">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#25d366] text-white">
                  <MessageCircle className="h-5 w-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-[11px] font-semibold text-emerald-100">{ui.contactCards.whatsapp}</span>
                  <span className="block truncate text-sm font-bold">{ui.contactCards.whatsappAction}</span>
                </span>
              </a>
            )}
          </div>
          {contact.supportHours && (
            <p className="flex items-center gap-2 text-xs text-emerald-100/80">
              <Clock className="h-3.5 w-3.5" /> {ui.contactCards.hours}: {contact.supportHours}
            </p>
          )}
        </div>
      </aside>
      {/* Form first on phones, so visitors do not have to scroll past the panel */}
      <div className="order-1 lg:order-2 lg:col-span-7">
        <ServiceRequestForm />
      </div>
    </div>
  );
}
