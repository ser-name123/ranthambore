'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Compass, 
  Sparkles, 
  MapPin, 
  ShieldCheck, 
  TreePine, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  PawPrint,
  Camera,
  Eye
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface ParkSafariOverviewProps {
  onOpenBookingModal?: (opts?: { vehicle?: string; zone?: string; packageName?: string }) => void;
}

export default function ParkSafariOverview({ onOpenBookingModal }: ParkSafariOverviewProps) {
  const [activeTiger, setActiveTiger] = useState(0);

  const tigerShowcase = [
    {
      name: 'T-120 (Ganesh)',
      title: 'Monarch of Jogi Mahal',
      territory: 'Zone 2 & Zone 3 Borders',
      image: '/images/tiger_stalking.jpg',
      tag: 'Apex Male Tiger',
      desc: 'Known for confident day strolls through dense sal groves and watering corridors near ancient ruins.',
      sightings: 'Very High (Morning Shift)',
    },
    {
      name: 'T-124 (Riddhi)',
      title: 'Queen of Padam Talao',
      territory: 'Zone 3 Lake System',
      image: '/images/tiger_lake.jpg',
      tag: 'Machhli Dynasty',
      desc: 'Dominates the iconic lake palaces and lotus beds. Globally famous for majestic shoreline hunting displays.',
      sightings: 'Highest Sightings Rate',
    },
    {
      name: 'Tigress with Cubs',
      title: 'New Generation of the Forest',
      territory: 'Zone 4 & 5 Corridors',
      image: '/images/tiger_family.jpg',
      tag: 'Breeding Dynasty',
      desc: 'Playful cubs spotted resting under centuries-old banyan canopies and cooling off in hidden limestone pools.',
      sightings: 'Regular Family Encounters',
    },
    {
      name: 'T-84 (Arrowhead Lineage)',
      title: 'Ruler of the Fort Clifftops',
      territory: 'Zone 1 & Fort Slopes',
      image: '/images/tiger_ruins.jpg',
      tag: 'Heritage Predator',
      desc: 'Often perched on ancient 10th-century stone battlements overlooking emerald canopies and river valleys.',
      sightings: 'Scenic Photography Gold',
    },
  ];

  const milestones = [
    {
      year: '1955',
      title: 'Wildlife Sanctuary Declared',
      badge: 'Protected Genesis',
      desc: 'Originally royal hunting grounds of Jaipur Maharajas, preserved to safeguard wild flora and Bengal tigers.',
      icon: ShieldCheck,
    },
    {
      year: '1973',
      title: 'Project Tiger Reserve',
      badge: 'Historic Landmark',
      desc: 'Chosen as one of India’s first Project Tiger reserves to protect the apex predator in native habitats.',
      icon: Flame,
    },
    {
      year: '1991',
      title: 'Greater Tiger Reserve (1,300+ sq km)',
      badge: 'Expanded Corridors',
      desc: 'Unification of Sawai Mansingh & Keladevi sanctuaries into an expansive deciduous tiger migration ecosystem.',
      icon: TreePine,
    },
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#06150f] relative overflow-hidden border-t border-[#123324]" id="safari-overview">
      {/* Decorative ambient jungle glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header - Clean & Focused */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            Ranthambore Tiger Reserve
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Meet the Royal Bengal Tigers of{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-[#f59e0b] to-[#fb923c]">
              Ranthambore
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#bad3c6] leading-relaxed">
            One of the world&apos;s finest natural habitats to witness wild Bengal tigers in broad daylight. Spanning 10 regulated zones across ancient fortresses, freshwater lakes, and lush deciduous jungle.
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* PART 1: VISUAL TIGER PHOTOGRAPHY SHOWCASE */}
        {/* ============================================================== */}
        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Big Active Tiger Image Card (lg:col-span-7) */}
            <motion.div
              layout
              className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-emerald-500/30 bg-[#092218] group h-[360px] sm:h-[460px]"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTiger}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.5 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={tigerShowcase[activeTiger].image}
                    alt={tigerShowcase[activeTiger].name}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06150f] via-[#06150f]/30 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Overlay Info Pill on Image */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1 bg-[#06150f]/85 backdrop-blur-md p-4 rounded-2xl border border-emerald-500/30 max-w-md">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 text-[10px] font-bold uppercase tracking-wider border border-emerald-500/40">
                      {tigerShowcase[activeTiger].tag}
                    </span>
                    <span className="text-[11px] text-[#f59e0b] font-semibold flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {tigerShowcase[activeTiger].sightings}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                    {tigerShowcase[activeTiger].name} – {tigerShowcase[activeTiger].title}
                  </h3>
                  <p className="text-xs text-[#bad3c6] leading-relaxed">
                    {tigerShowcase[activeTiger].desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium pt-1">
                    <MapPin className="w-3 h-3 shrink-0" />
                    <span>Territory: {tigerShowcase[activeTiger].territory}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingModal && onOpenBookingModal({ zone: tigerShowcase[activeTiger].territory })}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-[#d97706] hover:from-emerald-500 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>Book Safari in this Zone</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>

            {/* Right Side: 4 Clickable Tiger Cards (lg:col-span-5) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
              {tigerShowcase.map((tiger, idx) => {
                const isActive = activeTiger === idx;
                return (
                  <motion.button
                    key={tiger.name}
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => setActiveTiger(idx)}
                    type="button"
                    className={`p-3.5 rounded-2xl border text-left transition-all duration-300 flex items-center gap-3.5 cursor-pointer w-full relative overflow-hidden ${
                      isActive
                        ? 'bg-[#0e2a1e] border-emerald-400 shadow-xl shadow-emerald-950/40 text-white'
                        : 'bg-[#092017]/70 border-[#143d2b] text-[#93b5a4] hover:bg-[#0c241a] hover:text-white'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTigerBorder"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-400 to-[#f59e0b]"
                      />
                    )}
                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-emerald-500/30">
                      <Image
                        src={tiger.image}
                        alt={tiger.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1 mb-0.5">
                        <span className={`font-serif font-bold text-sm sm:text-base truncate ${isActive ? 'text-white' : 'text-[#cfdfd6]'}`}>
                          {tiger.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-300 shrink-0 font-medium">
                          {tiger.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#7fa391] truncate">{tiger.title}</p>
                      <div className="flex items-center gap-1 text-[11px] text-[#f59e0b] mt-1">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{tiger.territory}</span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* PART 2: 3 PILLARS - CONCISE & HIGH CONVERTING */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <SpotlightCard
            spotlightColor="rgba(52, 211, 153, 0.18)"
            enableTilt={true}
            className="glass-card p-6 rounded-2xl border border-[#164330] bg-[#092218]/90 space-y-3 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Forest Department Permits</h3>
            <p className="text-xs sm:text-sm text-[#93b5a4] leading-relaxed">
              All safaris are governed by the Rajasthan Forest Dept. Daily quotas are limited per zone to protect wild habitat and prevent overcrowding.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.18)"
            enableTilt={true}
            className="glass-card p-6 rounded-2xl border border-[#164330] bg-[#092218]/90 space-y-3 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">10 Managed Safari Zones</h3>
            <p className="text-xs sm:text-sm text-[#93b5a4] leading-relaxed">
              Zones 1 to 5 encompass historic core lakes and fort trails. Zones 6 to 10 feature rugged buffer valleys and thriving leopard corridors.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(52, 211, 153, 0.18)"
            enableTilt={true}
            className="glass-card p-6 rounded-2xl border border-[#164330] bg-[#092218]/90 space-y-3 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Jeep &amp; Canter Safari Options</h3>
            <p className="text-xs sm:text-sm text-[#93b5a4] leading-relaxed">
              Choose an exclusive 6-seater 4x4 Maruti Gypsy for maneuverability or an economical 20-seater safari Canter for family groups.
            </p>
          </SpotlightCard>
        </div>

        {/* ============================================================== */}
        {/* PART 3: STREAMLINED TIMELINE - 3 PUNCHY MILESTONES */}
        {/* ============================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#092218] via-[#0c2b1f] to-[#081f16] border border-emerald-500/25 shadow-2xl">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#143d2b]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b]">Historic Conservation Journey</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mt-1">
                How Ranthambore Became India&apos;s Tiger Capital
              </h3>
            </div>
            <button
              onClick={() => onOpenBookingModal && onOpenBookingModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-[#d97706] hover:from-emerald-500 text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>Plan Your Safari Visit</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {milestones.map((m) => {
              const Icon = m.icon;
              return (
                <div key={m.year} className="p-4 rounded-2xl bg-[#061710]/80 border border-[#16432f] space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#f59e0b]">{m.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 font-semibold border border-emerald-500/30">
                      {m.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-white">{m.title}</h4>
                  <p className="text-xs text-[#bad3c6] leading-relaxed">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
