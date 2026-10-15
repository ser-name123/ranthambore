'use client';

import React from 'react';
import { Radio, ArrowUpRight } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContentContext';
import type { SightingTone } from '@/lib/site-content';

const TONE_CLASSES: Record<SightingTone, string> = {
  emerald: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  amber: 'bg-amber-100 text-amber-900 border-amber-300',
  teal: 'bg-teal-100 text-teal-800 border-teal-300',
  rose: 'bg-rose-100 text-rose-800 border-rose-300',
};

interface SightingsTickerProps {
  onOpenBookingModal?: (prefill?: Record<string, string>) => void;
}

export default function SightingsTicker({ onOpenBookingModal }: SightingsTickerProps) {
  const { sightings, home } = useSiteContent();

  const handleItemClick = (zone: string) => {
    if (onOpenBookingModal) {
      onOpenBookingModal({ zone });
    }
  };

  return (
    <div className="relative bg-[#edf5f0] border-y border-[#d3e7dc] overflow-hidden py-2.5 z-20 transition-colors">
      {/* Glow edges for seamless fade-out */}
      <div className="pointer-events-none absolute left-0 inset-y-0 w-16 bg-gradient-to-r from-[#edf5f0] to-transparent z-10" />
      <div className="pointer-events-none absolute right-0 inset-y-0 w-16 bg-gradient-to-l from-[#edf5f0] to-transparent z-10" />

      <div className="max-w-[1440px] mx-auto px-4 flex items-center gap-4">
        {/* Static Prefix Label */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-[#064e3b] shrink-0 text-xs font-bold uppercase tracking-wider shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
          </span>
          <Radio className="w-3.5 h-3.5 text-emerald-700" />
          <span>{home.sightings.badge}</span>
        </div>

        {/* Marquee Scroller */}
        <div className="overflow-hidden flex-1 select-none">
          <div className="animate-marquee flex items-center gap-8 text-xs">
            {/* Duplicate array to ensure infinite loop seamlessly */}
            {[...sightings, ...sightings].map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleItemClick(item.zone)}
                className="inline-flex items-center gap-2.5 py-1 px-3 rounded-lg hover:bg-emerald-100/60 transition group cursor-pointer text-left shrink-0"
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${TONE_CLASSES[item.tone] ?? TONE_CLASSES.emerald}`}
                >
                  {item.badge}
                </span>
                <span className="font-semibold text-[#082318] group-hover:text-[#047857] transition">
                  {item.text}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-white text-[#d97706] text-[10px] font-bold border border-[#c4dcce] shadow-xs">
                  {item.zone}
                </span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#618574] group-hover:text-[#047857] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
