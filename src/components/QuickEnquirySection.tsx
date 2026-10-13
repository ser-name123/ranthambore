'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import confetti from 'canvas-confetti';
import { Send, CheckCircle2, MessageCircle, Phone, Sparkles, AlertCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { JungleCornerBranch, BambooStalks, TigerTrackWatermark, JungleTreelineBackdrop, JungleSavannahGrass } from './JungleFoliageDecorations';

export default function QuickEnquirySection() {
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
    nationality: 'Indian',
    notes: '',
    consent: true,
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
      setErrorMessage('Please fill in your Name and Mobile Number.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please check the consent box to proceed.');
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
      if (!res.ok) {
        throw new Error(data.error || 'Failed to submit enquiry');
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
      setErrorMessage(err instanceof Error ? err.message : 'Network error. Please WhatsApp directly.');
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
              Direct Wildlife Concierge
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] leading-tight">
              Get an Instant Safari Quote &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-[#d97706]">
                Availability Check
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#1b3a2a] leading-relaxed font-normal">
              Tell us your travel dates, group size, and vehicle preference. Our local wildlife specialists will check real-time gate inventory and return with a customized quote within 15 minutes.
            </p>

            <div className="space-y-4 pt-2">
              <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] flex items-center gap-4 hover:border-emerald-600 transition duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#2e5241] font-semibold block">Phone Helplines:</span>
                  <div className="text-sm font-bold text-[#082318] flex items-center gap-2">
                    <a href="tel:+919971965629" className="hover:text-emerald-800 transition">+91 99719 65629</a>
                    <span className="text-[#a3cbb5]">|</span>
                    <a href="tel:+917834942435" className="hover:text-emerald-800 transition">+91 78349 42435</a>
                  </div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] flex items-center gap-4 hover:border-emerald-600 transition duration-300 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 border border-emerald-200">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] text-[#2e5241] font-semibold block">Instant WhatsApp Support:</span>
                  <a
                    href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20please%20send%20me%20safari%20quotation."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-bold text-emerald-800 hover:text-emerald-950 transition"
                  >
                    +91 99719 65629 (Click to Chat)
                  </a>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] text-xs text-[#1b3a2a] leading-relaxed shadow-sm">
              <span className="font-bold text-emerald-900">Privacy Assurance: </span>
              Your contact details and travel dates are strictly used for your safari quotation. We never share visitor info with third parties or marketing spammers.
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
                    <h3 className="font-serif text-2xl font-bold text-[#082318] mt-3">
                      Enquiry Submitted Successfully!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#375847] mt-2 max-w-md mx-auto">
                      {successResult.message}
                    </p>
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                    <a
                      href={successResult.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Continue on WhatsApp Now</span>
                    </a>
                    <button
                      onClick={() => setSuccessResult(null)}
                      className="px-5 py-3 rounded-xl bg-[#f0f6f2] text-[#375847] hover:text-[#082318] border border-[#d2e4d9] text-xs font-bold transition cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="border-b border-[#e2ede6] pb-3 mb-2">
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082318]">
                      Request Safari Booking / Tour Quote
                    </h3>
                    <p className="text-xs text-[#517362]">
                      Fill out the form below for fast quotation and availability verification
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-800 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Mobile / WhatsApp No. *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. rahul@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Safari Date *
                      </label>
                      <input
                        type="date"
                        required
                        value={formData.safari_date}
                        onChange={(e) => setFormData({ ...formData, safari_date: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2.5 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Vehicle Type
                      </label>
                      <select
                        value={formData.safari_mode}
                        onChange={(e) => setFormData({ ...formData, safari_mode: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                      >
                        <option value="Maruti Gypsy (6-Seater 4x4)">Maruti Gypsy (6-Seater 4x4)</option>
                        <option value="Canter (20-Seater Bus)">Canter (20-Seater Bus)</option>
                        <option value="Hotel + Safari Package">Hotel + Safari Package</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Shift Preference
                      </label>
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
                      <label className="block text-xs font-semibold text-[#082318] mb-1">
                        Nationality
                      </label>
                      <select
                        value={formData.nationality}
                        onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
                        className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-2.5 py-2 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                      >
                        <option value="Indian">Indian</option>
                        <option value="Foreign National">Foreign National</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 bg-[#f0f6f2] p-3 rounded-xl border border-[#d2e4d9]">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#082318] font-bold">Adults:</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          type="button"
                          onClick={() => setFormData({ ...formData, adults: Math.max(1, formData.adults - 1) })}
                          className="w-6 h-6 rounded bg-white border border-[#d2e4d9] text-[#082318] hover:bg-emerald-600 hover:text-white text-xs transition cursor-pointer font-bold"
                        >-</motion.button>
                        <span className="text-[#082318] font-bold text-xs">{formData.adults}</span>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          type="button"
                          onClick={() => setFormData({ ...formData, adults: formData.adults + 1 })}
                          className="w-6 h-6 rounded bg-white border border-[#d2e4d9] text-[#082318] hover:bg-emerald-600 hover:text-white text-xs transition cursor-pointer font-bold"
                        >+</motion.button>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-[#082318] font-bold">Children:</span>
                      <div className="flex items-center gap-2">
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          type="button"
                          onClick={() => setFormData({ ...formData, children: Math.max(0, formData.children - 1) })}
                          className="w-6 h-6 rounded bg-white border border-[#d2e4d9] text-[#082318] hover:bg-emerald-600 hover:text-white text-xs transition cursor-pointer font-bold"
                        >-</motion.button>
                        <span className="text-[#082318] font-bold text-xs">{formData.children}</span>
                        <motion.button
                          whileTap={{ scale: 0.85 }}
                          type="button"
                          onClick={() => setFormData({ ...formData, children: formData.children + 1 })}
                          className="w-6 h-6 rounded bg-white border border-[#d2e4d9] text-[#082318] hover:bg-emerald-600 hover:text-white text-xs transition cursor-pointer font-bold"
                        >+</motion.button>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#082318] mb-1">
                      Special Requests / Notes (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="e.g. Need hotel stay, railway pickup, or zone 3 preference..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full bg-[#f8faf8] border border-[#d2e4d9] rounded-xl px-3.5 py-2 text-[#082318] text-xs sm:text-sm focus:outline-none focus:border-emerald-600 focus:bg-white transition"
                    />
                  </div>

                  {/* Consent checkbox */}
                  <label className="flex items-start gap-2.5 text-xs text-[#1b3a2a] cursor-pointer pt-1">
                    <input
                      type="checkbox"
                      checked={formData.consent}
                      onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                      className="mt-0.5 accent-emerald-600"
                    />
                    <span className="leading-relaxed">
                      I agree to receive booking availability updates on WhatsApp / Phone, and accept the{' '}
                      <Link href="/terms-conditions" className="text-emerald-800 hover:underline font-bold">
                        Terms &amp; Conditions
                      </Link>{' '}
                      and{' '}
                      <Link href="/cancellation-policy" className="text-emerald-800 hover:underline font-bold">
                        Cancellation Policy
                      </Link>.
                    </span>
                  </label>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={loading}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2 transition duration-200 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Processing Enquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Safari Booking Request</span>
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
