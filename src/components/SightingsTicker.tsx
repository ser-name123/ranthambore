'use client';

import React from 'react';
import { Radio, ArrowUpRight } from 'lucide-react';

interface SightingsTickerProps {
  onOpenBookingModal?: (prefill?: Record<string, string>) => void;
}

export default function SightingsTicker({ onOpenBookingModal }: SightingsTickerProps) {
  const updates = [
    {
      badge: 'LIVE SIGHTING',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      text: 'Tigress Riddhi (T-124) with 3 cubs sighted near Padam Talao Lake',
      zone: 'Zone 3',
      actionZone: 'Zone 3',
    },
    {
      badge: 'TERRITORY ALERT',
      badgeColor: 'bg-amber-100 text-amber-900 border-amber-300',
      text: 'Male Tiger T-120 (Ganesh) patrolling near Jogi Mahal & Phuta Kot',
      zone: 'Zone 2',
      actionZone: 'Zone 2',
    },
    {
      badge: 'HIGH ACTIVITY',
      badgeColor: 'bg-teal-100 text-teal-800 border-teal-300',
      text: 'Sloth bear family & leopard activity reported in Kachida Valley',
      zone: 'Zone 5',
      actionZone: 'Zone 5',
    },
    {
      badge: 'PERMIT NOTICE',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-300',
      text: 'Weekend Gypsy quota filling fast! Only limited seats remaining for next 14 days',
      zone: 'Zones 1-10',
      actionZone: 'Zone 1 to 5 (Core Gates)',
    },
    {
      badge: 'WEATHER & TIMINGS',
      badgeColor: 'bg-emerald-100 text-emerald-800 border-emerald-300',
      text: 'Morning Shift gate entry: 06:30 AM | Afternoon Shift entry: 02:30 PM',
      zone: 'Daily Gates',
      actionZone: 'Morning (06:30 AM - 10:00 AM)',
    },
  ];

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
          <span>Jungle Dispatch</span>
        </div>

        {/* Marquee Scroller */}
        <div className="overflow-hidden flex-1 select-none">
          <div className="animate-marquee flex items-center gap-8 text-xs">
            {/* Duplicate array to ensure infinite loop seamlessly */}
            {[...updates, ...updates].map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleItemClick(item.actionZone)}
                className="inline-flex items-center gap-2.5 py-1 px-3 rounded-lg hover:bg-emerald-100/60 transition group cursor-pointer text-left shrink-0"
              >
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full border ${item.badgeColor}`}
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
