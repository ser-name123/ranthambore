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
    <section className="py-20 bg-[#171412] relative overflow-hidden border-t border-b border-[#29221b]">
      {/* Ambient background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#ea580c]/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#f59e0b]/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Staggered Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/20">
            <Compass className="w-3.5 h-3.5" />
            Safari Vehicle Guide
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Maruti Gypsy vs Canter Safari
          </h2>
          <p className="text-sm sm:text-base text-[#bfb09e] leading-relaxed">
            Ranthambore National Park permits two types of open safari vehicles. Compare features, seating, pricing and photography advantages to choose the right experience for your wildlife expedition.
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
              spotlightColor="rgba(234, 88, 12, 0.22)"
              enableTilt={true}
              className="glass-card rounded-2xl overflow-hidden border border-[#ea580c]/35 hover:border-[#ea580c] transition-all duration-300 flex-1 flex flex-col group shadow-xl bg-[#1a1613]"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/gypsy_safari.jpg"
                  alt="Maruti Gypsy 4x4 Safari in Ranthambore"
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] via-black/35 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#ea580c] text-white text-xs font-bold tracking-wide shadow-md flex items-center gap-1.5 animate-pulse">
                    <Sparkles className="w-3.5 h-3.5" />
                    Most Popular for Wildlife Enthusiasts
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#ea580c] transition duration-300">
                      Maruti Gypsy 4x4
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium">
                      Open Top 6-Seater Vehicle
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#d4c6b5] block">Starting from</span>
                    <span className="text-2xl font-bold text-white">₹2,300</span>
                    <span className="text-[10px] text-[#a89985] block">/ Person (Indian)</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-[#cfc1b0] leading-relaxed">
                  The open 4x4 Maruti Gypsy is the quintessential vehicle for intimate wildlife viewing. Maneuverable on steep rocky trails and narrow forest paths, offering eye-level photography and flexible positioning.
                </p>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#13110f] p-3.5 rounded-xl border border-[#2b241e]">
                  <div>
                    <span className="text-[#8c7f70] block">Capacity:</span>
                    <span className="text-white font-semibold">Max 6 Visitors + Guide &amp; Driver</span>
                  </div>
                  <div>
                    <span className="text-[#8c7f70] block">Booking Mode:</span>
                    <span className="text-white font-semibold">Seat Sharing or Full Exclusive</span>
                  </div>
                  <div>
                    <span className="text-[#8c7f70] block">Foreign National:</span>
                    <span className="text-white font-semibold">₹5,500 / Person</span>
                  </div>
                  <div>
                    <span className="text-[#8c7f70] block">Best For:</span>
                    <span className="text-white font-semibold">Photographers &amp; Families</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#d4c7b8]">
                  {[
                    'Low engine noise and silent stalking near waterbodies',
                    'Unobstructed 360-degree viewing for telephoto lenses',
                    'Access to deep ravines and tight turns across Zones 1-10',
                    'Hotel pickup and drop included within city radius',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 group-hover:translate-x-0.5 transition duration-200">
                      <Check className="w-4 h-4 text-[#ea580c] shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* Action Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectVehicle('Maruti Gypsy (6-Seater 4x4)')}
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-lg shadow-[#ea580c]/30 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
                >
                  <span>Request Gypsy Safari Booking</span>
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
              className="glass-card rounded-2xl overflow-hidden border border-[#3b3229] hover:border-[#f59e0b] transition-all duration-300 flex-1 flex flex-col group shadow-xl bg-[#1a1613]"
            >
              {/* Image Header */}
              <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                <Image
                  src="/images/ranthambore_lake.jpg"
                  alt="Canter Safari in Ranthambore National Park"
                  fill
                  className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1613] via-black/35 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-[#f59e0b] text-black text-xs font-bold tracking-wide shadow-md">
                    Best Value for Groups &amp; Budget Travelers
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                  <div>
                    <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white group-hover:text-[#f59e0b] transition duration-300">
                      Canter Safari
                    </h3>
                    <p className="text-xs text-[#f59e0b] font-medium">
                      Open Roof 20-Seater Safari Bus
                    </p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-[#d4c6b5] block">Starting from</span>
                    <span className="text-2xl font-bold text-white">₹1,800</span>
                    <span className="text-[10px] text-[#a89985] block">/ Person (Indian)</span>
                  </div>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                <p className="text-xs sm:text-sm text-[#cfc1b0] leading-relaxed">
                  The open Canter is an economical, spacious safari option. With its higher vantage point, guests get wide panoramic views over high grasslands and clear line of sight over forest clearings.
                </p>

                {/* Specs Table */}
                <div className="grid grid-cols-2 gap-3 text-xs bg-[#13110f] p-3.5 rounded-xl border border-[#2b241e]">
                  <div>
                    <span className="text-[#8c7f70] block">Capacity:</span>
                    <span className="text-white font-semibold">Max 20 Visitors + Guide &amp; Driver</span>
                  </div>
                  <div>
                    <span className="text-[#8c7f70] block">Booking Mode:</span>
                    <span className="text-white font-semibold">Seat Basis (Sharing)</span>
                  </div>
                  <div>
                    <span className="text-[#8c7f70] block">Foreign National:</span>
                    <span className="text-white font-semibold">₹5,000 / Person</span>
                  </div>
                  <div>
                    <span className="text-[#8c7f70] block">Best For:</span>
                    <span className="text-white font-semibold">Groups, Solo &amp; Student Tours</span>
                  </div>
                </div>

                {/* Feature Checklist */}
                <ul className="space-y-2.5 text-xs sm:text-sm text-[#d4c7b8]">
                  {[
                    'Elevated height gives panoramic views over tall grass & lake edges',
                    'Ideal for friends, large families, and corporate outings',
                    'Highest ticket availability even during peak festive dates',
                    'Boarding assistance at designated Ranthambore hotel points',
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
                  className="w-full py-3.5 rounded-xl bg-[#2e261f] hover:bg-[#3d332a] text-white font-bold text-sm border border-[#4a3e32] flex items-center justify-center gap-2 transition duration-200 cursor-pointer shadow-md hover:border-[#f59e0b]/50"
                >
                  <span>Request Canter Safari Booking</span>
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
          className="mt-10 p-4 rounded-xl bg-[#1f1a16] border border-[#382f25] text-xs text-[#a89985] flex items-start gap-3"
        >
          <Info className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-[#e0d3c3]">Important Safari Note: </span>
            Safari vehicles, zones, and entry gates are allotted by the Department of Forest, Rajasthan computerised booking system. While we request your preferred zone, allocation cannot be guaranteed. Wildlife sightings depend entirely on nature and animal movement.
          </div>
        </motion.div>
      </div>
    </section>
  );
}
