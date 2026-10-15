'use client';

import React, { useState } from 'react';
import { RichText } from './cms/Text';
import Image from 'next/image';
import { Calendar, Users, Compass, Clock, ShieldCheck, Sparkles, CheckCircle, ArrowRight, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import FireflyCanvas from './FireflyCanvas';
import AnimatedCounter from './AnimatedCounter';
import SightingsTicker from './SightingsTicker';
import { JungleTopCanopy, JungleCornerBranch, JungleGodRays, JungleSavannahGrass } from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';
import { waHref } from '@/lib/site-content';

interface HeroProps {
  onOpenBookingModal: (prefill?: Record<string, string>) => void;
}

export default function Hero({ onOpenBookingModal }: HeroProps) {
  const { contact, hero, pricing, home, forms, vehicles } = useSiteContent();
  const w = hero.widget;
  const [vehicle, setVehicle] = useState<'gypsy' | 'canter'>('gypsy');
  const [safariDate, setSafariDate] = useState('');
  const [shift, setShift] = useState(forms.shiftOptions[0] ?? '');
  const [zone, setZone] = useState(forms.zoneOptions[0] ?? '');
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const estimatedPerPerson = vehicle === 'gypsy' ? pricing.gypsyPerPerson : pricing.canterPerPerson;
  const estimatedTotal = estimatedPerPerson * adults + (estimatedPerPerson * (pricing.childPricePercent / 100) * children);

  const handleWidgetSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBookingModal({
      vehicle: vehicle === 'gypsy' ? vehicles.gypsy.bookingValue : vehicles.canter.bookingValue,
      date: safariDate,
      shift,
      zone,
      adults: adults.toString(),
      children: children.toString()
    });
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 1, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const },
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
            src={hero.backgroundImage}
            alt={hero.imageAlt}
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>

        {/* Ambient Firefly / Ember Particles Overlay */}
        <FireflyCanvas />

        {/* Cinematic Multi-stop Overlay - Jungle with White Theme */}
        {/* Left side stays light for heading readability; the tiger shows through clearly in the middle/right */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 from-15% via-white/60 via-45% to-transparent to-80%" />
        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white/90 to-transparent" />
      </div>

      {/* Hanging Jungle Canopy Vines, Sunbeams & Tree Foliage */}
      <JungleGodRays />
      <JungleTopCanopy className="opacity-90" />
      <JungleCornerBranch position="right" className="top-16 right-0 opacity-70" />
      <JungleSavannahGrass className="bottom-14 hidden sm:block" />

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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold tracking-wide backdrop-blur-md shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706] animate-spin" style={{ animationDuration: '6s' }} />
                <span>{hero.seasonBadge}</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100/70 border border-emerald-300 text-[11px] text-emerald-900 font-medium relative">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-600 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600" />
                </span>
                <span>{hero.trustBadge}</span>
              </div>
            </motion.div>

            {/* H1 Heading with Gradient Reveal */}
            <motion.h1
              variants={itemVariants}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-[1.15]"
            >
              {hero.heading}{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706]">
                {hero.headingHighlight}
              </span>
            </motion.h1>

            {/* Subheading - Concise & Punchy */}
            <motion.div
              variants={itemVariants}
              className="text-sm sm:text-base text-[#1b3a2a] leading-relaxed max-w-2xl font-normal"
            >
              <RichText text={hero.subheading} inline />
            </motion.div>

            {/* Key Value Points - Clean & Visual */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-2.5 pt-1">
              {hero.points.map((point, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ scale: 1.03, x: 2 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-center gap-2 text-xs sm:text-sm text-[#183d2a] font-medium"
                >
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
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
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-emerald-950/20 flex items-center gap-2 cursor-pointer relative overflow-hidden group"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform pointer-events-none" />
                <span>{hero.primaryCta}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03, y: -1 }}
                whileTap={{ scale: 0.98 }}
                href={hero.secondaryCtaLink}
                className="px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#082318] font-semibold text-sm border border-[#cbe0d3] shadow-sm transition duration-200 flex items-center gap-1.5"
              >
                <span>{hero.secondaryCta}</span>
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                href={waHref(contact.whatsapp, hero.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#047857] hover:text-[#065f46] transition px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>{hero.whatsappCta}</span>
              </motion.a>
            </motion.div>

            {/* Balanced Stats Bar with Animated Counter */}
            <motion.div
              variants={itemVariants}
              className="pt-2 border-t border-[#d8eae0] grid grid-cols-3 gap-3 max-w-lg"
            >
              {hero.stats.slice(0, 3).map((stat, idx) => (
                <div key={idx}>
                  <span className={`block font-serif text-lg sm:text-xl font-bold ${['text-[#082318]', 'text-[#ea580c]', 'text-[#047857]'][idx]}`}>
                    <AnimatedCounter value={stat.value} decimals={stat.decimals} suffix={stat.suffix} duration={1.8} />
                  </span>
                  <span className="block text-[11px] text-[#4d6f5f]">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column: Interactive Live Safari Booking & Availability Card */}
          {w.visible && (
          <div
            className="lg:col-span-5"
            id="safari-booking"
          >
            <div className="p-4 sm:p-5 rounded-2xl border border-[#d2e5da] bg-white/95 shadow-2xl relative backdrop-blur-xl">
              {/* Header inside widget */}
              <div className="flex items-center justify-between border-b border-[#e2ede6] pb-2.5 mb-3.5">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#082318] flex items-center gap-2">
                    <span>{w.title}</span>
                    <span className="inline-block w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  </h3>
                  <p className="text-[11px] text-[#4d6f5f]">
                    {w.subtitle}
                  </p>
                </div>
                <span className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-emerald-800 text-[10px] font-bold uppercase tracking-wider">
                  {w.badge}
                </span>
              </div>

              <form onSubmit={handleWidgetSubmit} className="space-y-3">
                {/* Vehicle Selection Tabs */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#183d2a] mb-1.5 uppercase tracking-wider">
                    {w.vehicleLabel}
                  </label>
                  <div className="grid grid-cols-2 gap-2 relative bg-[#f0f6f2] p-1 rounded-xl border border-[#d2e4d9]">
                    <button
                      type="button"
                      onClick={() => setVehicle('gypsy')}
                      className={`relative p-2 rounded-lg text-left transition duration-200 cursor-pointer ${
                        vehicle === 'gypsy' ? 'text-[#064e3b]' : 'text-[#416352] hover:text-[#082318]'
                      }`}
                    >
                      {vehicle === 'gypsy' && (
                        <motion.div
                          layoutId="heroVehicleTab"
                          className="absolute inset-0 bg-white border-2 border-emerald-600 rounded-lg shadow-sm"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm">{w.gypsyLabel}</span>
                          <span className="text-[9px] bg-emerald-600 text-white px-1.5 py-0.2 rounded font-bold">{w.gypsySeats}</span>
                        </div>
                        <p className="text-[10px] text-emerald-700 mt-0.5 font-semibold">₹{pricing.gypsyPerPerson.toLocaleString('en-IN')} / person</p>
                      </div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setVehicle('canter')}
                      className={`relative p-2 rounded-lg text-left transition duration-200 cursor-pointer ${
                        vehicle === 'canter' ? 'text-[#78350f]' : 'text-[#416352] hover:text-[#082318]'
                      }`}
                    >
                      {vehicle === 'canter' && (
                        <motion.div
                          layoutId="heroVehicleTab"
                          className="absolute inset-0 bg-white border-2 border-[#d97706] rounded-lg shadow-sm"
                          transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                        />
                      )}
                      <div className="relative z-10">
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xs sm:text-sm">{w.canterLabel}</span>
                          <span className="text-[9px] bg-[#d97706] text-white px-1.5 py-0.2 rounded font-bold">{w.canterSeats}</span>
                        </div>
                        <p className="text-[10px] text-[#b45309] mt-0.5 font-semibold">₹{pricing.canterPerPerson.toLocaleString('en-IN')} / person</p>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Safari Date Input */}
                <div>
                  <label className="block text-[11px] font-semibold text-[#183d2a] mb-1 uppercase tracking-wider flex items-center justify-between">
                    <span>{w.dateLabel}</span>
                    <span className="text-[9px] text-[#ea580c] font-medium">{w.dateHint}</span>
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      required
                      value={safariDate}
                      onChange={(e) => setSafariDate(e.target.value)}
                      className="w-full bg-[#f8faf8] border border-[#c4dcce] rounded-xl px-3 py-1.5 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 transition duration-200"
                    />
                  </div>
                </div>

                {/* Shift & Zone Dropdowns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold text-[#183d2a] mb-1 uppercase tracking-wider">
                      {w.shiftLabel}
                    </label>
                    <select
                      value={shift}
                      onChange={(e) => setShift(e.target.value)}
                      className="w-full bg-[#f8faf8] border border-[#c4dcce] rounded-xl px-2.5 py-1.5 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 transition"
                    >
                      {forms.shiftOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-[#183d2a] mb-1 uppercase tracking-wider">
                      {w.zoneLabel}
                    </label>
                    <select
                      value={zone}
                      onChange={(e) => setZone(e.target.value)}
                      className="w-full bg-[#f8faf8] border border-[#c4dcce] rounded-xl px-2.5 py-1.5 text-[#082318] text-xs focus:outline-none focus:border-emerald-600 transition"
                    >
                      {forms.zoneOptions.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                {/* Guest Counters */}
                <div className="grid grid-cols-2 gap-2.5 bg-[#f0f6f2] p-2 rounded-xl border border-[#d2e4d9]">
                  <div>
                    <span className="text-[10px] text-[#416352] block font-medium">{w.adultsLabel}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setAdults(Math.max(1, adults - 1))}
                        className="w-6 h-6 rounded bg-white border border-[#c4dcce] text-[#082318] hover:bg-emerald-50 transition flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </motion.button>
                      <span className="text-[#082318] font-bold text-xs">{adults}</span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setAdults(adults + 1)}
                        className="w-6 h-6 rounded bg-white border border-[#c4dcce] text-[#082318] hover:bg-emerald-50 transition flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] text-[#416352] block font-medium">{w.childrenLabel}</span>
                    <div className="flex items-center gap-2 mt-0.5">
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setChildren(Math.max(0, children - 1))}
                        className="w-6 h-6 rounded bg-white border border-[#c4dcce] text-[#082318] hover:bg-emerald-50 transition flex items-center justify-center font-bold text-xs"
                      >
                        -
                      </motion.button>
                      <span className="text-[#082318] font-bold text-xs">{children}</span>
                      <motion.button
                        whileTap={{ scale: 0.85 }}
                        type="button"
                        onClick={() => setChildren(children + 1)}
                        className="w-6 h-6 rounded bg-white border border-[#c4dcce] text-[#082318] hover:bg-emerald-50 transition flex items-center justify-center font-bold text-xs"
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Live Estimated Price with Animated Number */}
                {w.showEstimate && (
                <div className="flex items-center justify-between px-1 text-xs">
                  <span className="text-[#082318] text-[11px] font-semibold">{w.costLabel}</span>
                  <div className="text-right">
                    <span className="text-base font-bold text-[#ea580c] inline-block">
                      ₹{estimatedTotal.toLocaleString('en-IN')}
                    </span>
                    <span className="text-[9px] text-[#2e5241] font-medium block">
                      {w.costNote}
                    </span>
                  </div>
                </div>
                )}

                {/* Submit CTA */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-xs sm:text-sm tracking-wide shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>{w.button}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </form>

              <div className="mt-2 text-center">
                <span className="text-[10px] text-[#082318] font-medium">
                  {w.footnote}
                </span>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>

      {/* Bottom Docked Live Sightings Ticker */}
      {home.sightings.visible && (
        <div className="relative z-20 w-full shrink-0">
          <SightingsTicker onOpenBookingModal={onOpenBookingModal} />
        </div>
      )}
    </section>
  );
}
