'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'How far in advance should I book my Ranthambore safari?',
      a: 'Safari permits in Ranthambore open up to 90 to 120 days in advance through the Forest Department portal. Due to strict vehicle caps per zone, peak dates (October to March, long weekends, Diwali, and New Year) sell out quickly. We strongly advise booking at least 30 to 60 days ahead for Maruti Gypsy permits.'
    },
    {
      q: 'What government ID proof is needed for booking and entry?',
      a: 'For Indian Nationals: Government photo ID such as Aadhaar Card, Passport, Voter ID, or Driving License. For Foreign Nationals: Original Passport and Visa details. The exact original ID used during booking must be carried and presented to forest officers at the entry gate during boarding.'
    },
    {
      q: 'Can I choose my specific safari zone?',
      a: 'When you submit your enquiry, we submit your zone preference (Zones 1-5 Core or Zones 6-10 Buffer). However, the Rajasthan Forest Department computerised lottery system assigns final zones based on quota availability. No operator can legitimately guarantee a specific zone number in advance.'
    },
    {
      q: 'Are tiger sightings guaranteed on a safari?',
      a: 'No. Ranthambore National Park is a protected wild habitat spanning over 1,300 sq km. Wildlife sightings depend entirely on animal movements, weather, and chance. Our expert naturalists use alarm calls, pugmarks, and territory knowledge to give you the highest possible probability of spotting tigers and other wildlife.'
    },
    {
      q: 'What is included in the safari booking price?',
      a: 'Our safari quotations include the official Forest Department permit fee, vehicle hire (Maruti Gypsy or Canter), registered driver fee, certified forest guide fee, and boarding facilitation assistance. There are no surprise extra gate entry charges.'
    },
    {
      q: 'What is the safari permit cancellation policy?',
      a: 'As per Rajasthan Forest Department regulations, confirmed safari permits are non-refundable, non-transferable, and non-amendable. If you cancel after permit issuance, permit fees cannot be refunded. For full tour packages and hotel stays, refund timelines vary according to individual resort policies.'
    }
  ];

  return (
    <section className="py-24 bg-[#06150f] relative border-t border-[#123324]" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-400" />
            Clear Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#bad3c6]">
            Everything you need to know about Ranthambore permits, regulations, vehicle choices, and wildlife rules.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.06 }}
                className={`glass-card rounded-2xl border transition-all duration-300 overflow-hidden bg-[#092218] ${
                  isOpen ? 'border-emerald-400/60 shadow-lg shadow-emerald-950/20' : 'border-[#16432f] hover:border-[#1d523a]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#0c2a1e] transition"
                >
                  <span className={`font-serif text-base sm:text-lg font-bold transition duration-200 ${
                    isOpen ? 'text-emerald-300' : 'text-white'
                  }`}>
                    {faq.q}
                  </span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="shrink-0"
                  >
                    <ChevronDown
                      className={`w-5 h-5 transition-colors ${
                        isOpen ? 'text-emerald-300' : 'text-emerald-400'
                      }`}
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.04, 0.62, 0.23, 0.98] }}
                    >
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#bad3c6] leading-relaxed border-t border-[#143d2b]">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 p-5 rounded-2xl bg-[#092218] border border-[#16432f] text-xs text-[#8cb39e] flex items-center justify-between flex-wrap gap-4 shadow-md"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#f59e0b] shrink-0" />
            <span>Have a specific query about group bookings or foreign national permits?</span>
          </div>
          <a
            href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20about%20Safari%20Booking."
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-400 hover:text-emerald-300 font-bold transition flex items-center gap-1"
          >
            <span>Chat with our Helpdesk</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
