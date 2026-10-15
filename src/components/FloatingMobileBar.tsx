'use client';

import React from 'react';
import { Phone, MessageCircle, CalendarCheck } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

interface FloatingMobileBarProps {
  onOpenBookingModal?: () => void;
}

export default function FloatingMobileBar({ onOpenBookingModal }: FloatingMobileBarProps) {
  const { contact, ui } = useSiteContent();
  const { openBookingModal } = useBookingModal();
  const handleOpen = onOpenBookingModal || (() => openBookingModal());

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 lg:hidden bg-white/95 backdrop-blur-lg border-t border-[#d2e4d9] p-2.5 px-4 shadow-[0_-5px_20px_rgba(8,35,24,0.08)]">
      <div className="flex items-center gap-2 max-w-md mx-auto">
        <a
          href={telHref(contact.phonePrimary)}
          className="flex-1 py-2.5 rounded-xl bg-[#f8faf8] text-[#082318] border border-[#d2e4d9] text-xs font-bold flex items-center justify-center gap-1.5 transition active:scale-95 hover:border-emerald-600 shadow-sm"
          aria-label={ui.callNow}
        >
          <Phone className="w-4 h-4 text-emerald-700" />
          <span>{ui.callNow}</span>
        </a>

        <a
          href={waHref(contact.whatsapp, ui.whatsappMessages.mobileBar)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-2.5 rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-sm transition active:scale-95"
          aria-label={ui.whatsapp}
        >
          <MessageCircle className="w-4 h-4" />
          <span>{ui.whatsapp}</span>
        </a>

        <button
          onClick={handleOpen}
          className="flex-[1.2] py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md transition active:scale-95 cursor-pointer"
        >
          <CalendarCheck className="w-4 h-4" />
          <span>{ui.bookSafari}</span>
        </button>
      </div>
    </div>
  );
}
