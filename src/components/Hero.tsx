'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, Compass, Clock, ShieldCheck, Sparkles, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FireflyCanvas from './FireflyCanvas';
import AnimatedCounter from './AnimatedCounter';
import SightingsTicker from './SightingsTicker';

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

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  };

  return (
    <section className="relative min-h-[calc(100vh-98px)] lg:h-[calc(100vh-98px)] flex flex-col justify-between overflow-hidden">
      {/* Background Image with Cinematic Subtle Pulse / Zoom */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
          className="relative w-full h-full"
        >
          <Image
            src="/images/hero_tiger.jpg"
            alt="Royal Bengal Tiger in Ranthambore National Park"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Ambient Firefly / Ember Particles Overlay */}
        <FireflyCanvas />

        {/* Cinematic Multi-stop Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0c0b]/95 via-[#0d0c0b]/85 to-[#0d0c0b]/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-transparent to-black/60" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex items-center py-2 sm:py-3">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center w-full">
          {/* Left Column: Heading, Value Props & Social Proof with Framer Motion */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-4 lg:space-y-5"
          >
            {/* Live Status & Trust Pill */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/20 border border-[#ea580c]/40 text-[#fba156] text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b] animate-spin" style={{ animationDuration: '6s' }} />
                <span>Official Safari Bookings 2026-2027</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-950/70 border border-emerald-700/50 text-[11px] text-emerald-300 font-medium relative">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
                </span>
                <span>Govt. Reg. Operator</span>
              </div>
            </motion.div>

            {/* H1 Heading with Gradient Reveal */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-[1.15]"
            >
              Ranthambore Safari &amp;{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c] animate-gradient">
                Wildlife Tours
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-sm sm:text-base text-[#d3c5b4] leading-relaxed max-w-2xl font-normal"
            >
              Step into the majestic realm of the Royal Bengal Tiger. We facilitate verified Maruti Gypsy and Canter safari permits, luxury resort stays, and customized wilderness expeditions with certified naturalist guides.
            </motion.p>

            {/* Key Value Points */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
              {[
                'Gypsy & Canter Permits',
                'Zones 1 to 10 Access',
                'Hotel + Safari Combos',
                'Certified Park Guides',
                'Instant Availability',
                'Transparent Rates',
              ].map((point, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#e8dfd3]"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                  <span>{point}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Quick Actions */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-3 pt-2">
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onOpenBookingModal()}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/35 flex items-center gap-2 cursor-pointer animate-glow relative overflow-hidden group"
              >
                {/* Button shine sweep effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform pointer-events-none" />
                <span>Request Safari Booking</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href="#packages"
                className="px-5 py-3 rounded-xl bg-[#25201b]/80 hover:bg-[#342c25] text-[#f4efe8] font-semibold text-sm border border-[#483c31] transition duration-200 flex items-center gap-1.5"
              >
                <span>View Packages</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20am%20looking%20for%20a%20Custom%20Quote."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400 hover:text-emerald-300 transition px-2 py-1"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>WhatsApp Quote</span>
              </motion.a>
            </motion.div>

            {/* Balanced Stats Bar with Animated Counter */}
            <motion.div
              variants={itemVariants}
              className="pt-2 border-t border-[#29221b]/80 grid grid-cols-3 gap-3 max-w-lg"
            >
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-white">
                  <AnimatedCounter value={12} suffix="+ Yrs" duration={1.8} />
                </span>
                <span className="block text-[11px] text-[#9c8e7e]">Wildlife Experience</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-[#f59e0b]">
                  <AnimatedCounter value={4.9} decimals={1} suffix=" / 5.0" duration={2} />
                </span>
                <span className="block text-[11px] text-[#9c8e7e]">1,400+ Reviews</span>
              </div>
              <div>
                <span className="block font-serif text-lg sm:text-xl font-bold text-white">
                  <AnimatedCounter value={100} suffix="%" duration={1.5} />
                </span>
                <span className="block text-[11px] text-[#9c8e7e]">Verified Permits</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Live Safari Booking & Availability Card with Framer Motion */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
            id="safari-booking"
          >
            <div className="glass-panel p-4 sm:p-5 rounded-2xl border border-[#ea580c]/35 shadow-2xl relative backdrop-blur-xl">
              {/* Header inside widget */}
              <div className="flex items-center justify-between border-b border-[#362e26] pb-2.5 mb-3.5">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-white flex items-center gap-2">
                    <span>Check Safari Availability</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
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
                {/* Vehicle Selection Tabs with Animated Pill Transition */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#cfc0ae] mb-1.5 uppercase tracking-wider">
                    1. Choose Safari Vehicle
                  </label>
                  <div className="grid grid-cols-2 gap-2 relative bg-[#171310] p-1 rounded-xl border border-[#2b241e]">
                    <button
                      type="button"
                      onClick={() => setVehicle('gypsy')}
                      className={`relative z-10 p-2 rounded-lg text-left transition duration-200 cursor-pointer ${
                        vehicle === 'gypsy' ? 'text-white' : 'text-[#b8a794] hover:text-white'
                      }`}
                    >
                      {vehicle === 'gypsy' && (
                        <motion.div
                          layoutId="heroVehicleTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/30 to-[#f59e0b]/20 border border-[#ea580c] rounded-lg shadow-md -z-10"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm">Jeep (Gypsy)</span>
                        <span className="text-[9px] bg-[#ea580c] text-white px-1.5 py-0.2 rounded font-bold">6-Seater</span>
                      </div>
                      <p className="text-[10px] text-[#f59e0b] mt-0.5 font-medium">₹2,300 / person</p>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVehicle('canter')}
                      className={`relative z-10 p-2 rounded-lg text-left transition duration-200 cursor-pointer ${
                        vehicle === 'canter' ? 'text-white' : 'text-[#b8a794] hover:text-white'
                      }`}
                    >
                      {vehicle === 'canter' && (
                        <motion.div
                          layoutId="heroVehicleTab"
                          className="absolute inset-0 bg-gradient-to-r from-[#ea580c]/30 to-[#f59e0b]/20 border border-[#ea580c] rounded-lg shadow-md -z-10"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs sm:text-sm">Canter Safari</span>
                        <span className="text-[9px] bg-[#d97706] text-white px-1.5 py-0.2 rounded font-bold">20-Seater</span>
                      </div>
                      <p className="text-[10px] text-[#f59e0b] mt-0.5 font-medium">₹1,800 / person</p>
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
                      className="w-full bg-[#1e1915] border border-[#3b3127] rounded-xl px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#ea580c] transition duration-200"
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
                      className="w-full bg-[#1e1915] border border-[#3b3127] rounded-xl px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-[#ea580c] transition"
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
                      className="w-full bg-[#1e1915] border border-[#3b3127] rounded-xl px-2.5 py-1.5 text-white text-xs focus:outline-none focus:border-[#ea580c] transition"
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
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </motion.button>
                      <span className="text-white font-bold text-xs">{adults}</span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#a89985] block">Children (5-11 yrs)</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </motion.button>
                      <span className="text-white font-bold text-xs">{children}</span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 rounded bg-[#2e261f] text-white hover:bg-[#ea580c] transition flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Live Estimated Price with Animated Number */}
                <div className="flex items-center justify-between px-1 text-xs">
                  <span className="text-[#a89985] text-[11px]">Estimated Safari Cost:</span>
                  <div className="text-right">
                    <span className="text-base font-bold text-[#f59e0b] inline-block">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[9px] text-[#8c7f70] block">
                      Incl. permit, vehicle &amp; naturalist guide
                    </span>
                  </div>
                </div>

                {/* Submit CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-xs sm:text-sm tracking-wide shadow-lg shadow-[#ea580c]/30 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>Check Availability &amp; Get Quote</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>

              <div className="mt-2 text-center">
                <span className="text-[10px] text-[#8c7f70]">
                  🔒 No advance payment needed • Fast 15-min response
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Docked Live Sightings Ticker */}
      <div className="relative z-20 w-full shrink-0">
        <SightingsTicker onOpenBookingModal={onOpenBookingModal} />
      </div>
    </section>
  );
}
