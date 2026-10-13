'use client';

import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

interface FloatingMobileBarProps {
  onOpenBookingModal?: () => void;
}

export default function FloatingMobileBar({ onOpenBookingModal }: FloatingMobileBarProps) {
  const { openBookingModal } = useBookingModal();
  const handleOpen = onOpenBookingModal || (() => openBookingModal());

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-[#06150f]/95 backdrop-blur-lg border-t border-[#16432f] p-2.5 px-4 shadow-[0_-10px_25px_rgba(0,0,0,0.6)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+919971965629"
          className="flex-1 py-2.5 rounded-xl bg-[#092218] text-[#f2f7f4] border border-[#16432f] text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 hover:border-emerald-500/40"
          aria-label="Call Ranthambore Wild Life Tour"
        >
          <Phone className="w-4 h-4 text-emerald-400" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20check%20safari%20booking%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition active:scale-95"
          aria-label="WhatsApp Safari Support"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={handleOpen}
          className="flex-[1.2] py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-lg shadow-emerald-950/50 transition active:scale-95 cursor-pointer border border-emerald-400/30"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Safari</span>
        </button>
      </div>
    </div>
  );
}
