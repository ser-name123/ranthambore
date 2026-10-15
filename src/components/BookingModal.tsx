'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteContent } from '@/context/SiteContentContext';
import { Markdown } from './cms/Text';
import { Counter, OptionSelect } from './FormBits';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: Record<string, string>;
}

const inputCls =
  'w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition';

export default function BookingModal({ isOpen, onClose, prefillData }: BookingModalProps) {
  const { forms } = useSiteContent();
  const { labels, modal } = forms;

  const emptyForm = () => ({
    name: '',
    phone: '',
    email: '',
    safari_date: '',
    safari_mode: forms.vehicleOptions[0] ?? '',
    timing_preference: forms.shiftOptions[0] ?? '',
    zone_preference: forms.zoneOptions[0] ?? '',
    adults: 2,
    children: 0,
    notes: '',
    source: 'Booking popup',
  });

  const [formData, setFormData] = useState(emptyForm);
  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  // Each time the popup opens: clear a previous success screen and apply the prefill.
  const [wasOpen, setWasOpen] = useState(isOpen);
  if (isOpen !== wasOpen) {
    setWasOpen(isOpen);
    if (isOpen) {
      setSuccessResult(null);
      setErrorMessage('');
      if (prefillData) {
        setFormData((prev) => ({
          ...prev,
          safari_mode: prefillData.vehicle || prefillData.packageName || prev.safari_mode,
          notes: prefillData.notes || prev.notes,
          safari_date: prefillData.date || prev.safari_date,
          timing_preference: prefillData.shift || prev.timing_preference,
          zone_preference: prefillData.zone || prev.zone_preference,
          adults: prefillData.adults ? parseInt(prefillData.adults) : prev.adults,
          children: prefillData.children ? parseInt(prefillData.children) : prev.children,
        }));
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage(forms.errors.required);
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
      if (!res.ok) throw new Error(data.error || forms.errors.network);

      setSuccessResult(data);
      setFormData(emptyForm());
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.5 } });
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error && err.message !== 'Failed to fetch' ? err.message : forms.errors.network);
    } finally {
      setLoading(false);
    }
  };

  const set = (patch: Partial<ReturnType<typeof emptyForm>>) => setFormData((f) => ({ ...f, ...patch }));

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            className="relative w-full max-w-lg rounded-2xl bg-white border border-[#d2e4d9] p-6 sm:p-7 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-[#f4f8f5] text-[#082318] hover:bg-[#e4ede7] border border-[#d2e4d9] transition duration-200 cursor-pointer shadow-xs"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {successResult ? (
              <div className="py-6 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto border border-emerald-200">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-900 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  Ref: {successResult.referenceId}
                </span>
                <h3 className="font-serif text-2xl font-bold text-[#082318]">{modal.successTitle}</h3>
                <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">{successResult.message}</p>
                <div className="pt-4 flex flex-col gap-2.5">
                  <a
                    href={successResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{modal.successWhatsapp}</span>
                  </a>
                  <button
                    onClick={onClose}
                    className="w-full py-2.5 rounded-xl bg-[#f0f6f2] text-[#082318] hover:bg-emerald-100 border border-[#d2e4d9] text-xs font-bold transition cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Honeypot for bots: hidden from people and screen readers */}
                  <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 opacity-0" />
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider border border-emerald-200">
                    <Sparkles className="w-3 h-3 text-[#d97706]" />
                    {modal.badge}
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#082318] mt-1">{modal.title}</h3>
                  <p className="text-xs text-[#1b3a2a] font-medium">{modal.subtitle}</p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.name}</span>
                    <input type="text" required placeholder={labels.namePlaceholder} value={formData.name} onChange={(e) => set({ name: e.target.value })} className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.phone}</span>
                    <input type="tel" required placeholder={labels.phonePlaceholder} value={formData.phone} onChange={(e) => set({ phone: e.target.value })} className={inputCls} />
                  </label>
                </div>

                <label className="block">
                  <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.email}</span>
                  <input type="email" placeholder={labels.emailPlaceholder} value={formData.email} onChange={(e) => set({ email: e.target.value })} className={inputCls} />
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.date}</span>
                    <input type="date" value={formData.safari_date} onChange={(e) => set({ safari_date: e.target.value })} className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.vehicle}</span>
                    <OptionSelect value={formData.safari_mode} options={forms.vehicleOptions} onChange={(v) => set({ safari_mode: v })} className={inputCls} />
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.shift}</span>
                    <OptionSelect value={formData.timing_preference} options={forms.shiftOptions} onChange={(v) => set({ timing_preference: v })} className={inputCls} />
                  </label>
                  <label className="block">
                    <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.zone}</span>
                    <OptionSelect value={formData.zone_preference} options={forms.zoneOptions} onChange={(v) => set({ zone_preference: v })} className={inputCls} />
                  </label>
                </div>

                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 bg-[#f8faf8] p-2.5 rounded-xl border border-[#d2e4d9] text-xs">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#082318]">{labels.adults}</span>
                    <Counter value={formData.adults} min={1} onChange={(adults) => set({ adults })} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[#082318]">{labels.children}</span>
                    <Counter value={formData.children} min={0} onChange={(children) => set({ children })} />
                  </div>
                </div>

                <label className="block">
                  <span className="block text-xs font-semibold text-[#082318] mb-1">{labels.notes}</span>
                  <textarea rows={2} placeholder={labels.notesPlaceholder} value={formData.notes} onChange={(e) => set({ notes: e.target.value })} className={inputCls} />
                </label>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition duration-200 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>{modal.submitting}</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{modal.submit}</span>
                    </>
                  )}
                </motion.button>

                <div onClick={(e) => (e.target as HTMLElement).closest('a') && onClose()} className="pt-1 text-center [&_p]:text-[11px] [&_p]:text-[#517362]">
                  <Markdown text={labels.consent} />
                </div>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
