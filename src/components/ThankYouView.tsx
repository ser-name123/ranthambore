'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { ArrowRight, Check, CheckCircle2, Copy, Home, MessageCircle, Phone } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContentContext';
import { fillTemplate, telHref, waHref } from '@/lib/site-content';
import { RichText } from '@/components/cms/Text';

export type FormKind = 'booking' | 'enquiry' | 'service';

/** The /thank-you page. `reference` is already validated on the server (or empty). */
export default function ThankYouView({ reference, form }: { reference: string; form: FormKind }) {
  const { thankYou: t, contact } = useSiteContent();
  const [copied, setCopied] = useState(false);
  const values = { ref: reference, form: t.formNames[form] };

  // A real submission (valid reference) counts as a Lead in Meta Ads, once per reference.
  useEffect(() => {
    const fbq = (window as unknown as { fbq?: (...args: unknown[]) => void }).fbq;
    if (reference && fbq) fbq('track', 'Lead', { content_name: form }, { eventID: reference });
  }, [reference, form]);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    confetti({ particleCount: 80, spread: 70, origin: { y: 0.35 }, colors: ['#ea580c', '#f59e0b', '#22c55e', '#ffffff'] });
  }, []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(reference);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {}
  };

  const btn = 'inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition';

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f4f8f5] to-white py-14 sm:py-20">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <div className="rounded-3xl border border-[#d2e4d9] bg-white p-6 text-center shadow-xl sm:p-10">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border-4 border-emerald-100 bg-emerald-50 text-emerald-700">
            <CheckCircle2 className="h-11 w-11" />
          </div>
          {t.badge && (
            <span className="mt-5 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              {t.badge}
            </span>
          )}
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight text-[#082318] sm:text-4xl">{t.title}</h1>
          {t.message && (
            <div className="mx-auto mt-3 max-w-xl [&_p]:text-sm [&_p]:leading-relaxed [&_p]:text-[#375847] sm:[&_p]:text-base">
              <RichText text={fillTemplate(t.message, values)} />
            </div>
          )}

          {reference && (
            <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-2xl border border-dashed border-emerald-300 bg-[#f4f8f5] px-5 py-3">
              <div className="text-left">
                <p className="text-[11px] font-semibold uppercase tracking-wider text-[#517362]">{t.refLabel}</p>
                <p className="font-mono text-lg font-bold text-[#082318]" data-ref>{reference}</p>
              </div>
              <button
                type="button"
                onClick={copy}
                aria-label="Copy reference number"
                className="cursor-pointer rounded-lg border border-[#c4dcce] bg-white p-2 text-emerald-800 transition hover:bg-emerald-50"
              >
                {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              </button>
            </div>
          )}

          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            {t.whatsappButton && contact.whatsapp && (
              <a href={waHref(contact.whatsapp, fillTemplate(t.whatsappText, values))} target="_blank" rel="noopener noreferrer" className={`${btn} bg-[#25d366] text-white shadow-md hover:bg-[#1fb457]`}>
                <MessageCircle className="h-4 w-4" /> {t.whatsappButton}
              </a>
            )}
            {t.primaryButton && (
              <Link href={t.primaryLink || '/'} className={`${btn} bg-gradient-to-r from-emerald-700 to-[#d97706] text-white shadow-md hover:from-emerald-600`}>
                <Home className="h-4 w-4" /> {t.primaryButton}
              </Link>
            )}
            {t.secondaryButton && t.secondaryLink && (
              <Link href={t.secondaryLink} className={`${btn} border border-[#c4dcce] bg-white text-[#082318] hover:bg-[#f0f6f2]`}>
                {t.secondaryButton} <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>

        {t.nextSteps.length > 0 && (
          <div className="mt-6 rounded-3xl border border-[#d2e4d9] bg-white p-6 shadow-sm sm:p-8">
            {t.nextStepsTitle && <h2 className="font-serif text-xl font-bold text-[#082318] sm:text-2xl">{t.nextStepsTitle}</h2>}
            <ol className="mt-4 space-y-4">
              {t.nextSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-700 to-[#d97706] text-sm font-bold text-white">{i + 1}</span>
                  <p className="pt-1 text-sm leading-relaxed text-[#1b3a2a] sm:text-base">{step}</p>
                </li>
              ))}
            </ol>
            {contact.phonePrimary && (
              <p className="mt-6 flex flex-wrap items-center gap-2 border-t border-[#e2ede6] pt-4 text-sm text-[#375847]">
                <Phone className="h-4 w-4 text-emerald-700" />
                <a href={telHref(contact.phonePrimary)} className="font-bold text-[#082318] hover:text-emerald-800">{contact.phonePrimary}</a>
                {contact.phoneSecondary && (
                  <>
                    <span className="text-[#a3cbb5]">|</span>
                    <a href={telHref(contact.phoneSecondary)} className="font-bold text-[#082318] hover:text-emerald-800">{contact.phoneSecondary}</a>
                  </>
                )}
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
