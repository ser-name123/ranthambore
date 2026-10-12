'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, Compass, Clock, ShieldCheck, Sparkles, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';

interface HeroProps {
  onOpenBookingModal: (prefill?: Record<string, string>) => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  const [vehicle, setVehicle] = useState<'gypsy' | 'canter'>('gypsy');
  const [safariDate, setSafariDate] = useState('');
  const [shift, setShift] = useState('Morning (06:30 AM - 10:00 AM)');
  const [zone, setZone] = useState('Zone 1 to 5 (Core Gates)');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const estimatedPerPerson = vehicle === 'gypsy' ? 2300 : 1800;
  const estimatedTotal = estimatedPerPerson * adults + (estimatedPerPerson * 0.8 * children);

  const handleWidgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      vehicle: vehicle === 'gypsy' ? 'Maruti Gypsy (6-Seater 4x4)' : 'Canter (20-Seater Safari Bus)',
      date: safariDate,
      shift,
      zone,
      adults: adults.toString(),
      children: children.toString()
    });
  };

  return (
    <section className="relative min-h-[calc(100vh-106px)] lg:h-[calc(100vh-106px)] flex items-center justify-center overflow-hidden py-6 lg:py-4">
      {/* Background Image with Dark Vignette */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero_tiger.jpg"
          alt="Royal Bengal Tiger in Ranthambore National Park"
          fill
          priority
          className="object-cover object-center transform scale-105 transition duration-1000"
        />
        {/* Cinematic Multi-stop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/95 via-[#0d0c0b]/80 to-[#0d0c0b]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/50" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          {/* Left Column: Heading, Value Props & Social Proof */}
          <div className="lg:col-span-7 space-y-4 lg:space-y-5">
            {/* Live Status & Trust Pill */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/20 border border-[#ea580c]/40 text-[#fba156] text-xs font-semibold tracking-wide backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                <span>Official Safari Bookings 2026-2027</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/60 border border-emerald-700/50 text-[11px] text-emerald-300 font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Govt. Reg. Operator</span>
              </div>
            </div>

            {/* H1 Heading */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]">
              Ranthambore Safari &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
                Wildlife Tours
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-sm sm:text-base text-[#d3c5b4] leading-relaxed max-w-2xl font-normal">
              Step into the majestic realm of the Royal Bengal Tiger. We facilitate verified Maruti Gypsy and Canter safari permits, luxury resort stays, and customized wilderness expeditions with certified naturalist guides.
            </p>

            {/* Key Value Points */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]">
                <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>Gypsy &amp; Canter Permits</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]">
                <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>Zones 1 to 10 Access</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]">
                <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>Hotel + Safari Combos</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]">
                <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>Certified Park Guides</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]">
                <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>Instant Availability</span>
              </div>
              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]">
                <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                <span>Transparent Rates</span>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 transform hover:-translate-y-0.5 transition duration-200 cursor-pointer animate-glow"
              >
                <span>Request Safari Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#packages"
                className="px-5 py-3 rounded-xl bg-[#25201b]/80 hover:bg-[#342c25] text-[#f4efe8] font-semibold text-sm border border-[#483c31] transition duration-200 flex items-center gap-1.5"
              >
                <span>View Packages</span>
              </a>

              <a
                href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20am%20looking%20for%20a%20Custom%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition px-2 py-1"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Quote</span>
              </a>
            </div>

            {/* Balanced Stats Bar: Fills empty space and builds credibility */}
            <div className="pt-2 border-t border-[#29221b]/80 grid grid-cols-3 gap-3 max-w-lg">
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-white">12+ Yrs</span>
                <span className="block text-[11px] text-[#9c8e7e]">Wildlife Experience</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#f59e0b]">4.9 / 5.0</span>
                <span className="block text-[11px] text-[#9c8e7e]">1,400+ Reviews</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-white">100%</span>
                <span className="block text-[11px] text-[#9c8e7e]">Verified Permits</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Live Safari Booking & Availability Card */}
          <div className="lg:col-span-5" id="safari-booking">
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-[#ea580c]/30 shadow-2xl relative">
              {/* Header inside widget */}
              <div className="flex items-center justify-between border-b border-[#362e26] pb-2.5 mb-3.5">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white">
                    Check Safari Availability
                  </h3>
                  <p className="text-[11px] text-[#b8a794]">
                    Select date &amp; preference for real-time quote
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded bg-[#ea580c]/20 border border-[#ea580c]/30 text-[#f59e0b] text-[10px] font-bold uppercase tracking-wider">
                  2026-27 Rates
                </span>
              </div>

              <form onSubmit={handleWidgetSubmit} className="space-y-3">
                {/* Vehicle Selection Tabs */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#cfc0ae] mb-1.5 uppercase tracking-wider">
                    1. Choose Safari Vehicle
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setVehicle('gypsy')}
                      className={`p-2.5 rounded-xl border text-left transition ${
                        vehicle === 'gypsy'
                          ? 'bg-[#ea580c]/20 border-[#ea580c] text-white shadow-md'
                          : 'bg-[#211b17] border-[#362e26] text-[#b8a794] hover:bg-[#28211c]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm">Jeep (Gypsy)</span>
                        <span className="text-[9px] bg-[#ea580c] text-white px-1.5 py-0.2 rounded font-bold">6-Seater</span>
                      </div>
                      <p className="text-[10px] text-[#f59e0b] mt-0.5">₹2,300 / person</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVehicle('canter')}
                      className={`p-2.5 rounded-xl border text-left transition ${
                        vehicle === 'canter'
                          ? 'bg-[#ea580c]/20 border-[#ea580c] text-white shadow-md'
                          : 'bg-[#211b17] border-[#362e26] text-[#b8a794] hover:bg-[#28211c]'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm">Canter Safari</span>
                        <span className="text-[9px] bg-[#d97706] text-white px-1.5 py-0.2 rounded font-bold">20-Seater</span>
                      </div>
                      <p className="text-[10px] text-[#f59e0b] mt-0.5">₹1,800 / person</p>
                    </button>
                  </div>
                </div>

                {/* Safari Date Input */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#cfc0ae] mb-1 uppercase tracking-wider flex items-center justify-between">
                    <span>2. Safari Date</span>
                    <span className="text-[9px] text-[#ea580c] font-normal">Advance booking advised</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={safariDate}
                      onChange={(e) => setSafariDate(e.target.value)}
                      className="w-full bg-[#1e1915] border border-[#3b3127] rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#ea580c] transition"
                    />
                  </div>
                </div>

                {/* Shift & Zone Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#cfc0ae] mb-1 uppercase tracking-wider">
                      Shift Timing
                    </label>
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full bg-[#1e1915] border border-[#3b3127] rounded-xl px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-[#ea580c]"
                    >
                      <option>Morning (06:30 AM - 10:00 AM)</option>
                      <option>Afternoon (02:30 PM - 06:00 PM)</option>
                      <option>Both Shifts (Full Day)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#cfc0ae] mb-1 uppercase tracking-wider">
                      Preferred Zone
                    </label>
                    <select
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="w-full bg-[#1e1915] border border-[#3b3127] rounded-xl px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-[#ea580c]"
                    >
                      <option>Zone 1 to 5 (Core Gates)</option>
                      <option>Zone 6 to 10 (Buffer Gates)</option>
                      <option>Best Available (Max Sightings)</option>
                    </select>
                  </div>
                </div>

                {/* Guest Counters */}
                <div className="grid grid-cols-2 gap-2.5 bg-[#171310] p-2 rounded-xl border border-[#2e261f]">
                  <div>
                    <span className="text-[10px] text-[#a89985] block">Adults (12+ yrs)</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <button
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-white font-bold text-xs">{adults}</span>
                      <button
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#a89985] block">Children (5-11 yrs)</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <button
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </button>
                      <span className="text-white font-bold text-xs">{children}</span>
                      <button
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Estimated Price */}
                <div className="flex items-center justify-between px-1 text-xs">
                  <span className="text-[#a89985] text-[11px]">Estimated Safari Cost:</span>
                  <div className="text-right">
                    <span className="text-base font-bold text-[#f59e0b]">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[9px] text-[#8c7f70] block">
                      Incl. permit, vehicle &amp; naturalist guide
                    </span>
                  </div>
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#ea580c]/30 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>Check Availability &amp; Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>

              <div className="mt-2 text-center">
                <span className="text-[10px] text-[#8c7f70]">
                  🔒 No advance payment needed • Fast 15-min response
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
