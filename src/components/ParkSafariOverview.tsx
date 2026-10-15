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
import { 
  JungleTopCanopy, 
  JungleCornerBranch, 
  TigerTrackWatermark, 
  BambooStalks, 
  JungleLeavesWatermark,
  JungleGodRays,
  TigerProwlSilhouette,
  JungleSavannahGrass,
  GiantBanyanTree,
  RanthamboreRuinsBackdrop
} from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';
import { Highlight } from './cms/Text';

interface ParkSafariOverviewProps {
  onOpenBookingModal?: (opts?: { vehicle?: string; zone?: string; packageName?: string }) => void;
}

export default function ParkSafariOverview({ onOpenBookingModal }: ParkSafariOverviewProps) {
  const [activeTiger, setActiveTiger] = useState(0);

  const { overview, home, ui } = useSiteContent();
  const heading = home.overview;
  const tigerShowcase = overview.tigers;
  const activeT = tigerShowcase[Math.min(activeTiger, tigerShowcase.length - 1)];

  const milestones = overview.milestones;

  return (
    <section className="py-20 sm:py-24 bg-white relative overflow-hidden border-t border-[#e2ece6]" id="safari-overview">
      {/* Historic Ranthambore Lake Ruin & Sunbeams */}
      <RanthamboreRuinsBackdrop />
      <JungleGodRays />
      <JungleTopCanopy className="opacity-85" />

      {/* Giant Ancient Banyan Tree with Hanging Prop Roots */}
      <GiantBanyanTree position="right" className="opacity-45" />

      {/* Jungle Branches & Wildlife Tracks */}
      <JungleCornerBranch position="left" className="top-10 left-0" />
      <JungleCornerBranch position="right" className="top-24 right-0" />
      <JungleLeavesWatermark position="right" className="top-1/3" />
      <TigerProwlSilhouette className="bottom-10 right-12 hidden lg:block" />
      <BambooStalks className="bottom-0 left-4 opacity-40" />
      <TigerTrackWatermark count={5} className="top-1/3" />
      <JungleSavannahGrass className="bottom-0" />

      {/* Decorative ambient subtle glows */}
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#047857]" />
            {heading.badge}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-tight">
<Highlight text={heading.title} />
          </h2>
          <p className="text-sm sm:text-base text-[#1b3a2a] leading-relaxed">
            {heading.subtitle}
          </p>
        </motion.div>

        {/* ============================================================== */}
        {/* PART 1: VISUAL TIGER PHOTOGRAPHY SHOWCASE */}
        {/* ============================================================== */}
        {activeT && <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Big Active Tiger Image Card (lg:col-span-7) */}
            <motion.div
              layout
              className="lg:col-span-7 relative rounded-3xl overflow-hidden shadow-2xl border border-[#d2e4d9] bg-[#f4f8f5] group h-[360px] sm:h-[460px]"
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
                    src={activeT.image}
                    alt={activeT.name}
                    fill
                    priority
                    className="object-cover group-hover:scale-105 transition duration-700 ease-out"
                  />
                  {/* Subtle Gradient Shade */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
                </motion.div>
              </AnimatePresence>

              {/* Overlay Info Pill on Image */}
              <div className="absolute bottom-5 left-5 right-5 z-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
                <div className="space-y-1 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-[#d2e4d9] max-w-md shadow-xl text-[#082318]">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 text-[10px] font-bold uppercase tracking-wider border border-emerald-200">
                      {activeT.tag}
                    </span>
                    <span className="text-[11px] text-[#d97706] font-semibold flex items-center gap-1">
                      <Eye className="w-3 h-3" />
                      {activeT.sightings}
                    </span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082318]">
                    {activeT.name} – {activeT.title}
                  </h3>
                  <p className="text-xs text-[#1b3a2a] leading-relaxed font-normal">
                    {activeT.desc}
                  </p>
                  <div className="flex items-center gap-1.5 text-[11px] text-emerald-800 font-semibold pt-1">
                    <MapPin className="w-3 h-3 shrink-0 text-emerald-700" />
                    <span>{ui.territoryLabel} {activeT.territory}</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenBookingModal && onOpenBookingModal({ zone: activeT.territory })}
                  className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 text-white font-bold text-xs shadow-lg flex items-center justify-center gap-2 cursor-pointer shrink-0"
                >
                  <span>{overview.showcaseCta}</span>
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
                        ? 'bg-emerald-50/80 border-2 border-emerald-600 shadow-md text-[#082318]'
                        : 'bg-[#f8faf8] border-[#d8eae0] text-[#335344] hover:bg-white hover:border-emerald-500/50 hover:shadow-xs'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeTigerBorder"
                        className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-emerald-600 to-[#d97706]"
                      />
                    )}
                    {/* Thumbnail */}
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-[#c4dcce]">
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
                        <span className={`font-serif font-bold text-sm sm:text-base truncate ${isActive ? 'text-[#082318]' : 'text-[#183d2a]'}`}>
                          {tiger.name}
                        </span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 text-emerald-800 shrink-0 font-medium border border-emerald-200">
                          {tiger.tag}
                        </span>
                      </div>
                      <p className="text-xs text-[#517362] truncate">{tiger.title}</p>
                      <div className="flex items-center gap-1 text-[11px] text-[#ea580c] mt-1 font-medium">
                        <MapPin className="w-3 h-3 shrink-0" />
                        <span className="truncate">{tiger.territory}</span>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>}

        {/* ============================================================== */}
        {/* PART 2: 3 PILLARS - CONCISE & HIGH CONVERTING */}
        {/* ============================================================== */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <SpotlightCard
            spotlightColor="rgba(4, 120, 87, 0.08)"
            enableTilt={true}
            className="p-6 rounded-2xl border border-[#dcebe1] bg-white space-y-3 shadow-md"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#047857] border border-emerald-200 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#082318]">{overview.pillars[0]?.title}</h3>
            <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
              {overview.pillars[0]?.text}
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(217, 119, 6, 0.08)"
            enableTilt={true}
            className="p-6 rounded-2xl border border-[#dcebe1] bg-white space-y-3 shadow-md"
          >
            <div className="w-11 h-11 rounded-xl bg-amber-50 text-[#d97706] border border-amber-200 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#082318]">{overview.pillars[1]?.title}</h3>
            <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
              {overview.pillars[1]?.text}
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(4, 120, 87, 0.08)"
            enableTilt={true}
            className="p-6 rounded-2xl border border-[#dcebe1] bg-white space-y-3 shadow-md"
          >
            <div className="w-11 h-11 rounded-xl bg-emerald-50 text-[#047857] border border-emerald-200 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-[#082318]">{overview.pillars[2]?.title}</h3>
            <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
              {overview.pillars[2]?.text}
            </p>
          </SpotlightCard>
        </div>

        {/* ============================================================== */}
        {/* PART 3: STREAMLINED TIMELINE - 3 PUNCHY MILESTONES */}
        {/* ============================================================== */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] shadow-md">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-6 pb-6 border-b border-[#dcebe1]">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#d97706]">{overview.timelineBadge}</span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318] mt-1">
                {overview.timelineTitle}
              </h3>
            </div>
            <button
              onClick={() => onOpenBookingModal && onOpenBookingModal()}
              className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-700 to-[#d97706] hover:from-emerald-600 text-white font-bold text-xs shadow-md flex items-center gap-2 cursor-pointer shrink-0"
            >
              <span>{overview.timelineCta}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {milestones.map((m) => {
              return (
                <div key={m.year} className="p-4 rounded-2xl bg-white border border-[#dcebe1] space-y-2 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-2xl font-bold text-[#d97706]">{m.year}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
                      {m.badge}
                    </span>
                  </div>
                  <h4 className="font-serif text-base font-bold text-[#082318]">{m.title}</h4>
                  <p className="text-xs text-[#1b3a2a] leading-relaxed font-normal">{m.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
