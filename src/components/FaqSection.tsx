'use client';

import { Highlight } from './cms/Text';
import React, { useState } from 'react';
import { RichText } from './cms/Text';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { JungleCornerBranch, TigerTrackWatermark, BambooStalks } from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';
import { waHref } from '@/lib/site-content';

export default function FaqSection() {
  const { contact, faqs, home, ui } = useSiteContent();
  const heading = home.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);


  return (
    <section className="py-24 bg-white relative border-t border-[#e2ede6] overflow-hidden" id="faq">
      {/* Botanical Jungle Foliage & Tracks */}
      <JungleCornerBranch position="left" className="top-12 left-0" />
      <JungleCornerBranch position="right" className="top-28 right-0" />
      <TigerTrackWatermark count={4} className="top-1/2" />
      <BambooStalks className="bottom-0 right-4 opacity-30" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-700" />
            {heading.badge}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
            <Highlight text={heading.title} />
          </h2>
          <div className="text-sm sm:text-base text-[#1b3a2a]">
            <RichText text={heading.subtitle} inline />
          </div>
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
                className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white shadow-sm ${
                  isOpen ? 'border-emerald-600 bg-emerald-50/30 shadow-md' : 'border-[#d2e4d9] hover:border-emerald-600'
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f0f6f2] transition"
                >
                  <span className={`font-serif text-base sm:text-lg font-bold transition duration-200 ${
                    isOpen ? 'text-emerald-900' : 'text-[#082318]'
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
                        isOpen ? 'text-emerald-800' : 'text-emerald-600'
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
                      <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#1b3a2a] font-normal leading-relaxed border-t border-[#e2ede6]">
                        <RichText text={faq.a} inline />
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
          className="mt-12 p-5 rounded-2xl bg-[#f4f8f5] border border-[#d2e4d9] text-xs text-[#375847] flex items-center justify-between flex-wrap gap-4 shadow-sm"
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#d97706] shrink-0" />
            <span>{ui.faqBanner.text}</span>
          </div>
          <a
            href={waHref(contact.whatsapp, ui.faqBanner.whatsappText)}
            target="_blank"
            rel="noopener noreferrer"
            className="text-emerald-700 hover:text-emerald-900 font-bold transition flex items-center gap-1"
          >
            <span>{ui.faqBanner.link}</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
