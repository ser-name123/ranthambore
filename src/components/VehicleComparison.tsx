'use client';

import React from 'react';
import Image from 'next/image';
import { Check, Compass, Sparkles, ArrowRight, Info, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface VehicleComparisonProps {
  onSelectVehicle: (vehicleName: string) => void;
}

export default function VehicleComparison({ onSelectVehicle }: VehicleComparisonProps) {
  return (
    <section className="py-20 bg-[#06150f] relative overflow-hidden border-t border-b border-[#123324]">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3.5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            Safari Vehicle Guide
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Maruti Gypsy vs Canter Safari
          </h2>
          <p className="text-sm sm:text-base text-[#bad3c6] leading-relaxed">
            Choose between an exclusive 6-seater 4x4 Maruti Gypsy or an economical 20-seater Canter bus. Both explore the exact same designated forest trails across Zones 1 to 10.
          </p>
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
              spotlightColor="rgba(52, 211, 153, 0.22)"
              enableTilt={true}
              className="glass-card rounded-2xl overflow-hidden border border-emerald-500/40 hover:border-emerald-400 transition-all duration-300 flex-1 flex flex-col group shadow-xl bg-[#092218]"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/gypsy_encounter.jpg"
                  alt="Maruti Gypsy 4x4 Tiger Encounter in Ranthambore"
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    Best for Wildlife Photography &amp; Families
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-emerald-300 transition duration-300">
                      Maruti Gypsy 4x4
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium">
                      Open-Top 6-Seater 4WD Jeep
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#bad3c6] block">Starting from</span>
                    <span className="text-2xl font-bold text-white">₹2,300</span>
                    <span className="text-[10px] text-[#7fa391] block">/ Person (Indian)</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-[#cfdfd6] leading-relaxed">
                  The agile 4x4 Maruti Gypsy offers quiet maneuvering on narrow trails, low engine noise for unobtrusive stalking, and eye-level photography angles for majestic tiger encounters.
                </p>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#061710] p-3.5 rounded-xl border border-[#16432f]">
                  <div>
                    <span className="text-[#6d917f] block">Capacity &amp; Quota:</span>
                    <span className="text-white font-semibold">6 Seats • 48 Jeeps / Shift</span>
                  </div>
                  <div>
                    <span className="text-[#6d917f] block">Daily Schedule:</span>
                    <span className="text-white font-semibold">Morning &amp; Afternoon Shifts</span>
                  </div>
                  <div>
                    <span className="text-[#6d917f] block">Foreign National:</span>
                    <span className="text-white font-semibold">₹5,500 / Person</span>
                  </div>
                  <div>
                    <span className="text-[#6d917f] block">Best For:</span>
                    <span className="text-white font-semibold">Privacy &amp; Camera Gear</span>
                  </div>
                </div>

                {/* Feature Checklist - Clean & Punchy */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#bad3c6]">
                  {[
                    'Exclusive 6-seater open design with unobstructed 360° sightlines',
                    'Low engine sound for silent tracking near lakes and waterholes',
                    'Option to book all 6 seats exclusively for private groups',
                    'Shares the exact same prime core and buffer zone tracks',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 group-hover:translate-x-0.5 transition duration-200">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectVehicle('Maruti Gypsy (6-Seater 4x4)')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-[#ea580c] to-[#d97706] hover:from-emerald-500 hover:to-[#ea580c] text-white font-bold text-sm shadow-lg shadow-emerald-950/40 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>Request Jeep Safari Booking (48 Jeeps/Shift)</span>
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
              spotlightColor="rgba(245, 158, 11, 0.22)"
              enableTilt={true}
              className="glass-card rounded-2xl overflow-hidden border border-[#16432f] hover:border-[#f59e0b] transition-all duration-300 flex-1 flex flex-col group shadow-xl bg-[#092218]"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/canter_safari.jpg"
                  alt="Canter Safari in Ranthambore National Park"
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-black/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-black text-xs font-bold tracking-wide shadow-md">
                    Best Value for Large Families &amp; Groups
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#f59e0b] transition duration-300">
                      Canter Safari
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium">
                      Open-Top 20-Seater Safari Bus (2x2)
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#bad3c6] block">Starting from</span>
                    <span className="text-2xl font-bold text-white">₹1,800</span>
                    <span className="text-[10px] text-[#7fa391] block">/ Person (Indian)</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                <p className="text-xs sm:text-sm text-[#cfdfd6] leading-relaxed">
                  The open 20-seater Canter features elevated stepped seating with high perspective viewpoints across tall grassland and bamboo groves. Exceptional value for tour groups.
                </p>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#061710] p-3.5 rounded-xl border border-[#16432f]">
                  <div>
                    <span className="text-[#6d917f] block">Capacity &amp; Quota:</span>
                    <span className="text-white font-semibold">20 Seats • 50 Canters / Shift</span>
                  </div>
                  <div>
                    <span className="text-[#6d917f] block">Daily Schedule:</span>
                    <span className="text-white font-semibold">Morning &amp; Afternoon Shifts</span>
                  </div>
                  <div>
                    <span className="text-[#6d917f] block">Foreign National:</span>
                    <span className="text-white font-semibold">₹5,000 / Person</span>
                  </div>
                  <div>
                    <span className="text-[#6d917f] block">Best For:</span>
                    <span className="text-white font-semibold">Groups &gt;6 &amp; Budget Travel</span>
                  </div>
                </div>

                {/* Feature Checklist - Clean & Punchy */}
                <ul className="space-y-2 text-xs sm:text-sm text-[#bad3c6]">
                  {[
                    'Elevated high vantage point over forest brush and tall grass',
                    '2x2 side-by-side seating layout with direct clear sightlines',
                    '50 canters permitted per shift across 10 official safari gates',
                    'Comfortable shared ride accompanied by authorized forest naturalist',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 group-hover:translate-x-0.5 transition duration-200">
                      <Check className="w-4 h-4 text-[#f59e0b] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectVehicle('Canter (20-Seater Safari Bus)')}
                  className="w-full py-3.5 rounded-xl bg-[#0e2a1e] hover:bg-[#133526] text-white font-bold text-sm border border-[#1b4834] flex items-center justify-center gap-2 transition duration-200 cursor-pointer shadow-md hover:border-[#f59e0b]/50"
                >
                  <span>Request Canter Safari Booking (50 Canters/Shift)</span>
                  <ArrowRight className="w-4 h-4" />
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
          className="mt-10 p-4 rounded-xl bg-[#092218] border border-[#16432f] text-xs text-[#93b5a4] flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-[#e0eee6]">Ranthambore Tiger Reserve Advisory: </span>
            <p className="leading-relaxed">
              Advance permits are mandatory for both Gypsy and Canter safaris. Both follow the same official routes. Visitors are advised to carry photo ID (Aadhar/Passport) matching their permit.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
