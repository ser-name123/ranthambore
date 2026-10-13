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
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#d2e4d9] p-2.5 px-4 shadow-[0_-5px_20px_rgba(8,35,24,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href="tel:+919971965629"
          className="flex-1 py-2.5 rounded-xl bg-[#f8faf8] text-[#082318] border border-[#d2e4d9] text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 hover:border-emerald-600 shadow-sm"
          aria-label="Call Ranthambore Wild Life Tour"
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>Call Now</span>
        </a>

        <a
          href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20check%20safari%20booking%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95"
          aria-label="WhatsApp Safari Support"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <button
          onClick={handleOpen}
          className="flex-[1.2] py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition active:scale-95 cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>Book Safari</span>
        </button>
      </div>
    </div>
  );
}
