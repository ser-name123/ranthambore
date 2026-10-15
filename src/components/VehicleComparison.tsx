'use client';

import { Highlight } from './cms/Text';
import React from 'react';
import { RichText } from './cms/Text';
import Image from 'next/image';
import { Check, Compass, Sparkles, ArrowRight, Info, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { 
  JungleTopCanopy, 
  JungleCornerBranch, 
  TigerTrackWatermark, 
  BambooStalks,
  JungleTreelineBackdrop,
  JungleSavannahGrass,
  JungleMorningMist,
  GiantBanyanTree,
  AravalliLandscapeBackdrop
} from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';

interface VehicleComparisonProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export default function VehicleComparison({ onSelectVehicle }: VehicleComparisonProps) {
  const { pricing, home, vehicles, ui } = useSiteContent();
  const { gypsy, canter } = vehicles;
  const inr = (n: number) => `₹${n.toLocaleString('en-IN')}`;
  const spec = (value: string, foreign: number) => value.replace('{foreignPrice}', inr(foreign));
  const heading = home.vehicles;

  return (
    <section className="py-20 bg-[#f4f8f5] relative overflow-hidden border-t border-b border-[#e2ede6]">
      {/* Panoramic Aravalli Cliffs & Safari Grassland Backdrop */}
      <AravalliLandscapeBackdrop />

      {/* Hanging Jungle Canopy Vines along top border */}
      <JungleTopCanopy />

      {/* Giant Ancient Banyan Tree with Hanging Prop Roots */}
      <GiantBanyanTree position="left" className="opacity-45" />

      {/* Misty Forest Treeline & Morning Mist Layers */}
      <JungleTreelineBackdrop />
      <JungleMorningMist />

      {/* Jungle Branches on left & right margins */}
      <JungleCornerBranch position="left" className="top-20" />
      <JungleCornerBranch position="right" className="top-40" />
      <BambooStalks className="bottom-0 left-2 opacity-35" />

      {/* Tiger Tracks across background */}
      <TigerTrackWatermark count={4} className="top-1/2" />

      {/* Tall Savannah Grass along bottom border */}
      <JungleSavannahGrass className="bottom-0" />

      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#047857]" />
            {heading.badge}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
            <Highlight text={heading.title} />
          </h2>
          <div className="text-sm sm:text-base text-[#375847] leading-relaxed">
            <RichText text={heading.subtitle} inline />
          </div>
        </motion.div>

        {/* 2-Column Comparison Grid with Motion & Spotlight Tilt */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Maruti Gypsy (Jeep) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-full flex flex-col"
          >
            <SpotlightCard
              spotlightColor="rgba(4, 120, 87, 0.08)"
              enableTilt={true}
              className="rounded-2xl overflow-hidden border border-[#d2e4d9] hover:border-emerald-500 transition-all duration-300 flex-1 flex flex-col group shadow-lg bg-white"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={gypsy.image}
                  alt={`${gypsy.title} – ${gypsy.subtitle}`}
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    {gypsy.badge}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition duration-300">
                      {gypsy.title}
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium">
                      {gypsy.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#d1e5db] block">{ui.startingFrom}</span>
                    <span className="text-2xl font-bold text-white">{inr(pricing.gypsyPerPerson)}</span>
                    <span className="text-[10px] text-[#bad3c6] block">/ Person (Indian)</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
                  <RichText text={gypsy.description} inline />
                </div>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#f0f6f2] p-3.5 rounded-xl border border-[#d2e4d9]">
                  {gypsy.specs.map((sp, i) => (
                    <div key={i}>
                      <span className="text-[#2e5241] font-medium block">{sp.label}</span>
                      <span className="text-[#082318] font-bold">{spec(sp.value, pricing.gypsyForeignerPerPerson)}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Checklist - Clean & Punchy */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#082318] font-medium">
                  {gypsy.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 group-hover:translate-x-0.5 transition duration-200">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectVehicle(gypsy.bookingValue)}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-md shadow-emerald-950/20 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>{gypsy.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </SpotlightCard>
          </motion.div>

          {/* Card 2: Canter Safari (20-Seater) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="h-full flex flex-col"
          >
            <SpotlightCard
              spotlightColor="rgba(217, 119, 6, 0.08)"
              enableTilt={true}
              className="rounded-2xl overflow-hidden border border-[#d2e4d9] hover:border-[#d97706] transition-all duration-300 flex-1 flex flex-col group shadow-lg bg-white"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src={canter.image}
                  alt={`${canter.title} – ${canter.subtitle}`}
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-black text-xs font-bold tracking-wide shadow-md">
                    Best Value for Large Families &amp; Groups
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#f59e0b] transition duration-300">
                      {canter.title}
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium">
                      {canter.subtitle}
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#d1e5db] block">{ui.startingFrom}</span>
                    <span className="text-2xl font-bold text-white">{inr(pricing.canterPerPerson)}</span>
                    <span className="text-[10px] text-[#bad3c6] block">/ Person (Indian)</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <div className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
                  <RichText text={canter.description} inline />
                </div>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#f0f6f2] p-3.5 rounded-xl border border-[#d2e4d9]">
                  {canter.specs.map((sp, i) => (
                    <div key={i}>
                      <span className="text-[#2e5241] font-medium block">{sp.label}</span>
                      <span className="text-[#082318] font-bold">{spec(sp.value, pricing.canterForeignerPerPerson)}</span>
                    </div>
                  ))}
                </div>

                {/* Feature Checklist - Clean & Punchy */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#082318] font-medium">
                  {canter.features.map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 group-hover:translate-x-0.5 transition duration-200">
                      <Check className="w-4 h-4 text-[#d97706] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectVehicle(canter.bookingValue)}
                  className="w-full py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-[#082318] font-bold text-sm border-2 border-emerald-600 flex items-center justify-center gap-2 transition duration-200 cursor-pointer shadow-sm hover:shadow-md"
                >
                  <span>{canter.buttonLabel}</span>
                  <ArrowRight className="w-4 h-4 text-emerald-600" />
                </motion.button>
              </div>
            </SpotlightCard>
          </motion.div>
        </div>

        {/* Note on Zone & Wildlife rules */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10 p-4 rounded-xl bg-white border border-[#d2e4d9] text-xs text-[#375847] flex items-start gap-3 shadow-xs"
        >
          <Info className="w-5 h-5 text-[#d97706] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#082318]">{vehicles.advisoryTitle} </span>
            <div className="leading-relaxed">
              <RichText text={vehicles.advisoryText} inline />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
