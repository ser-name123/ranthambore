'use client';

import { Highlight } from './cms/Text';
import React, { useState } from 'react';
import { RichText } from './cms/Text';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageCircle, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { JungleCornerBranch, BambooStalks, TigerTrackWatermark, JungleTreelineBackdrop, JungleSavannahGrass } from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';
import { Counter, OptionSelect } from './FormBits';

export default function QuickEnquirySection() {
  const { contact, home, forms } = useSiteContent();
  const { labels, quick } = forms;
  const heading = home.enquiry;
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    safari_date: '',
    safari_mode: forms.vehicleOptions[0] ?? '',
    timing_preference: forms.shiftOptions[0] ?? '',
    zone_preference: forms.zoneOptions[0] ?? '',
    adults: 2,
    children: 0,
    nationality: forms.nationalityOptions[0] ?? '',
    notes: '',
    consent: true,
    source: 'Enquiry form',
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage(forms.errors.required);
      return;
    }
    if (!formData.consent) {
      setErrorMessage(forms.errors.consent);
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          page_url: window.location.pathname,
          website: String(new FormData(e.currentTarget as HTMLFormElement).get('website') ?? ''),
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || forms.errors.network);
      }

      setSuccessResult(data);
      // Trigger festive celebration confetti
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ea580c', '#f59e0b', '#22c55e', '#ffffff']
      });
    } catch (err: unknown) {
      console.error(err);
      setErrorMessage(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : forms.errors.network);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-24 bg-[#f4f8f5] relative border-t border-[#e2ede6] overflow-hidden" id="contact-us">
      {/* Botanical Jungle Foliage, Treeline & Pugmark Watermarks */}
      <JungleTreelineBackdrop />
      <JungleCornerBranch position="left" className="top-10 left-0" />
      <JungleCornerBranch position="right" className="bottom-10 right-0" />
      <BambooStalks className="bottom-0 right-4 opacity-35" />
      <TigerTrackWatermark count={5} className="top-1/4" />
      <JungleSavannahGrass className="bottom-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Assistance Context */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200">
              <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
              {heading.badge}
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] leading-tight">
              <Highlight text={heading.title} />
            </h2>

            <div className="text-sm sm:text-base text-[#1b3a2a] leading-relaxed font-normal">
              <RichText text={heading.subtitle} inline />
            </div>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] flex items-center gap-4 hover:border-emerald-600 transition duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#2e5241] font-semibold block">{quick.phoneLabel}</span>
                  <div className="text-sm font-bold text-[#082318] flex items-center gap-2">
                    <a href={telHref(contact.phonePrimary)} className="hover:text-emerald-800 transition">{contact.phonePrimary}</a>
                    <span className="text-[#a3cbb5]">|</span>
                    <a href={telHref(contact.phoneSecondary)} className="hover:text-emerald-800 transition">{contact.phoneSecondary}</a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] flex items-center gap-4 hover:border-emerald-600 transition duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#2e5241] font-semibold block">{quick.whatsappLabel}</span>
                  <a
                    href={waHref(contact.whatsapp, quick.whatsappText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-800 hover:text-emerald-950 transition"
                  >
                    {contact.whatsapp} {quick.whatsappSuffix}
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] text-xs text-[#1b3a2a] leading-relaxed shadow-sm">
              <span className="font-bold text-emerald-900">{quick.privacyTitle} </span>
              <RichText text={quick.privacyText} inline />
            </div>
          </motion.div>

          {/* Right Column: Lead Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] shadow-xl relative bg-white">
              {successResult ? (
                <div className="py-8 text-center space-y-5 animate-fadeIn">
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div>
                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                      Reference: {successResult.referenceId}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#082318] mt-3">{quick.successTitle}</h3>
                    <div className="text-xs sm:text-sm text-[#375847] mt-2 max-w-md mx-auto"><RichText text={successResult.message} inline /></div>
                  </div>
                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={successResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{quick.successWhatsapp}</span>
                    </a>
                    <button
                      onClick={() => setSuccessResult(null)}
                      className="px-5 py-3 rounded-xl bg-[#f0f6f2] text-[#375847] hover:text-[#082318] border border-[#d2e4d9] text-xs font-bold transition cursor-pointer"
                    >
                      {quick.anotherRequest}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for bots: hidden from people and screen readers */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
                  <div className="border-b border-[#e2ede6] pb-3 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082318]">{quick.formTitle}</h3>
                    <p className="text-xs text-[#517362]">{quick.formSubtitle}</p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.name}</span>
                      <input type="text" required placeholder={labels.namePlaceholder} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.phone}</span>
                      <input type="tel" required placeholder={labels.phonePlaceholder} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.email}</span>
                      <input type="email" placeholder={labels.emailPlaceholder} value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.date}</span>
                      <input type="date" required value={formData.safari_date} onChange={(e) => setFormData({ ...formData, safari_date: e.target.value })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.vehicle}</span>
                      <OptionSelect value={formData.safari_mode} options={forms.vehicleOptions} onChange={(v) => setFormData({ ...formData, safari_mode: v })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.shift}</span>
                      <OptionSelect value={formData.timing_preference} options={forms.shiftOptions} onChange={(v) => setFormData({ ...formData, timing_preference: v })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.zone}</span>
                      <OptionSelect value={formData.zone_preference} options={forms.zoneOptions} onChange={(v) => setFormData({ ...formData, zone_preference: v })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                    <label className="block">
                      <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.nationality}</span>
                      <OptionSelect value={formData.nationality} options={forms.nationalityOptions} onChange={(v) => setFormData({ ...formData, nationality: v })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                    </label>
                  </div>

                  <div className="flex flex-wrap items-center gap-x-8 gap-y-2 bg-[#f0f6f2] p-3 rounded-xl border border-[#d2e4d9] text-xs">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#082318]">{labels.adults}</span>
                      <Counter value={formData.adults} min={1} onChange={(adults) => setFormData({ ...formData, adults })} />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-[#082318]">{labels.children}</span>
                      <Counter value={formData.children} min={0} onChange={(children) => setFormData({ ...formData, children })} />
                    </div>
                  </div>

                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.notes}</span>
                    <textarea rows={2} placeholder={labels.notesPlaceholder} value={formData.notes} onChange={(e) => setFormData({ ...formData, notes: e.target.value })} className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition" />
                  </label>

                  <div className="flex items-start gap-2.5 pt-1">
                    <input
                      id="enquiry-consent"
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-1 accent-emerald-600"
                    />
                    <label htmlFor="enquiry-consent" className="cursor-pointer [&_p]:text-xs">
                      <RichText text={quick.consent} />
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>{quick.submitting}</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>{quick.submit}</span>
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
