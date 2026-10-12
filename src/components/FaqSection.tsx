'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ShieldAlert } from 'lucide-react';

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
    <section className="py-24 bg-[#121110] relative" id="faq">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold uppercase tracking-widest border border-[#f59e0b]/20">
            <HelpCircle className="w-3.5 h-3.5" />
            Clear Answers
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Frequently Asked Questions
          </h2>
          <p className="text-sm sm:text-base text-[#b8a794]">
            Everything you need to know about Ranthambore permits, regulations, vehicle choices, and wildlife rules.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="glass-card rounded-2xl border border-[#2b241e] overflow-hidden transition bg-[#171412]"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#1f1a16] transition"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ea580c] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#f59e0b]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#b8a794] leading-relaxed border-t border-[#261f19]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-12 p-5 rounded-2xl bg-[#1a1613] border border-[#3b3127] text-xs text-[#a89985] flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-5 h-5 text-[#f59e0b] shrink-0" />
            <span>Have a specific query about group bookings or foreign national permits?</span>
          </div>
          <a
            href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20about%20Safari%20Booking."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ea580c] hover:text-[#f59e0b] font-bold"
          >
            Chat with our Helpdesk →
          </a>
        </div>
      </div>
    </section>
  );
}
