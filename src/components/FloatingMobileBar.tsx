'use client';

import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';

interface FloatingMobileBarProps {
  onOpenBookingModal: () => void;
}

export default function FloatingMobileBar({ onOpenBookingModal }: FloatingMobileBarProps) {
  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#141210]/95 backdrop-blur-lg border-t border-[#29221b] p-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.5)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+919971965629"
          className="flex-1 py-2.5 rounded-xl bg-[#201a15] text-[#e0d6c7] border border-[#382d23] text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95"
          aria-label="Call Ranthambore Wild Life Tour"
        >
          <Phone className="w-4 h-4 text-[#ea580c]" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20check%20safari%20booking%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-700/80 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition active:scale-95"
          aria-label="WhatsApp Safari Support"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={onOpenBookingModal}
          className="flex-[1.2] py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-[#ea580c]/30 transition active:scale-95"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Safari</span>
        </button>
      </div>
    </div>
  );
}
