'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { X, Send, CheckCircle2, MessageCircle, AlertCircle, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefillData?: Record<string, string>;
}

export default function BookingModal({ isOpen, onClose, prefillData }: BookingModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    safari_date: '',
    safari_mode: 'Maruti Gypsy (6-Seater 4x4)',
    timing_preference: 'Morning (06:30 AM)',
    zone_preference: 'Zone 1-5 (Core)',
    adults: 2,
    children: 0,
    notes: '',
  });

  const [loading, setLoading] = useState(false);
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    message: string;
    whatsappUrl: string;
  } | null>(null);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (prefillData) {
      setFormData((prev) => ({
        ...prev,
        safari_mode: prefillData.vehicle || prefillData.packageName || prev.safari_mode,
        safari_date: prefillData.date || prev.safari_date,
        timing_preference: prefillData.shift || prev.timing_preference,
        zone_preference: prefillData.zone || prev.zone_preference,
        adults: prefillData.adults ? parseInt(prefillData.adults) : prev.adults,
        children: prefillData.children ? parseInt(prefillData.children) : prev.children,
      }));
    }
  }, [prefillData]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      setErrorMessage('Please enter your name and contact phone number.');
      return;
    }

    setLoading(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/booking', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to submit request');

      setSuccessResult(data);
      confetti({
        particleCount: 60,
        spread: 60,
        origin: { y: 0.5 },
      });
    } catch (err: unknown) {
      setErrorMessage(err instanceof Error ? err.message : 'Submission failed. Please WhatsApp us directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-lg rounded-2xl bg-white border border-[#d2e4d9] p-6 sm:p-7 shadow-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
          >
            {/* Close Button */}
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

                <h3 className="font-serif text-2xl font-bold text-[#082318]">
                  Booking Request Received!
                </h3>

                <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
                  {successResult.message}
                </p>

                <div className="pt-4 flex flex-col gap-2.5">
                  <a
                    href={successResult.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Confirm on WhatsApp Now</span>
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
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-900 text-[11px] font-bold uppercase tracking-wider border border-emerald-200">
                    <Sparkles className="w-3 h-3 text-[#d97706]" />
                    Quick Booking Request
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-[#082318] mt-1">
                    Ranthambore Safari Enquiry
                  </h3>
                  <p className="text-xs text-[#1b3a2a] font-medium">
                    We verify permits and reply with exact quotation
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-lg bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="Full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 Mobile number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">Safari Date</label>
                    <input
                      type="date"
                      value={formData.safari_date}
                      onChange={(e) => setFormData({ ...formData, safari_date: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">Vehicle / Package</label>
                    <input
                      type="text"
                      value={formData.safari_mode}
                      onChange={(e) => setFormData({ ...formData, safari_mode: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">Shift</label>
                    <select
                      value={formData.timing_preference}
                      onChange={(e) => setFormData({ ...formData, timing_preference: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    >
                      <option value="Morning (06:30 AM)">Morning (06:30 AM)</option>
                      <option value="Afternoon (02:30 PM)">Afternoon (02:30 PM)</option>
                      <option value="Both Shifts">Both Shifts</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">Zone Preference</label>
                    <select
                      value={formData.zone_preference}
                      onChange={(e) => setFormData({ ...formData, zone_preference: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    >
                      <option value="Zone 1-5 (Core)">Zone 1-5 (Core)</option>
                      <option value="Zone 6-10 (Buffer)">Zone 6-10 (Buffer)</option>
                      <option value="Any Available">Any Available</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#082318] mb-1">Travellers</label>
                  <div className="flex items-center gap-4 bg-[#f8faf8] p-2 rounded-xl border border-[#d2e4d9] text-xs">
                    <span className="text-[#375847]">Adults: <strong className="text-[#082318]">{formData.adults}</strong></span>
                    <span className="text-[#375847]">Children: <strong className="text-[#082318]">{formData.children}</strong></span>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#082318] mb-1">Notes / Preferences</label>
                  <textarea
                    rows={2}
                    placeholder="Hotel required, railway pickup, etc."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3 py-1.5 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                  />
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition duration-200 cursor-pointer disabled:opacity-50"
                >
                  {loading ? (
                    <span>Checking Availability...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Booking Request</span>
                    </>
                  )}
                </motion.button>

                <p className="text-[11px] text-[#517362] text-center pt-2">
                  By submitting, you agree to our{' '}
                  <Link href="/terms-conditions" className="text-emerald-700 hover:underline" onClick={() => onClose()}>
                    Terms &amp; Conditions
                  </Link>{' '}
                  and{' '}
                  <Link href="/cancellation-policy" className="text-emerald-700 hover:underline" onClick={() => onClose()}>
                    Cancellation Policy
                  </Link>.
                </p>
              </form>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
