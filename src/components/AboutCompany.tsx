'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';
import { 
  JungleCornerBranch, 
  BambooStalks, 
  TigerTrackWatermark, 
  JungleTreelineBackdrop, 
  JungleSavannahGrass,
  GiantBanyanTree,
  RanthamboreRuinsBackdrop 
} from './JungleFoliageDecorations';

interface AboutCompanyProps {
  onOpenBookingModal: () => void;
}

export default function AboutCompany({ onOpenBookingModal }: AboutCompanyProps) {
  const stats = [
    { target: 12, suffix: '+', label: 'Years in Ranthambore', sub: 'Local Sawai Madhopur roots' },
    { target: 15000, suffix: '+', label: 'Successful Safaris', sub: 'Gypsy & Canter permits' },
    { target: 98, suffix: '%', label: 'Sightings Satisfaction', sub: 'Tigers, leopards, sloth bears' },
    { target: 4.9, decimals: 1, suffix: ' / 5.0', label: 'Customer Trust Rating', sub: 'Verified traveller reviews' },
  ];

  return (
    <section className="py-24 bg-[#f4f8f5] relative overflow-hidden border-t border-[#e2ede6]" id="about-us">
      {/* Historic Ruins & Jungle Treeline Backdrop */}
      <RanthamboreRuinsBackdrop />
      <JungleTreelineBackdrop />

      {/* Giant Ancient Banyan Tree with Hanging Prop Roots */}
      <GiantBanyanTree position="right" className="opacity-45" />

      {/* Botanical Jungle Foliage & Safari Accents */}
      <JungleCornerBranch position="left" className="top-12 left-0" />
      <JungleCornerBranch position="right" className="bottom-12 right-0" />
      <BambooStalks className="bottom-0 left-6 opacity-35" />
      <TigerTrackWatermark count={5} className="top-1/3" />
      <JungleSavannahGrass className="bottom-0" />

      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage & Floating Experience Badge */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#d2e4d9] group">
              <Image
                src="/images/tiger_ruins.jpg"
                alt="Royal Bengal Tiger in Ranthambore Wild Life Tour"
                fill
                className="object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/25" />
            </div>

            {/* Overlapping Floating Badge with Multi-Layer Glow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 p-5 rounded-2xl border border-[#d2e4d9] shadow-2xl max-w-xs backdrop-blur-xl bg-white/95"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-600 to-[#d97706] flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                  <span className="relative z-10">12+</span>
                  <span className="absolute inset-0 rounded-xl bg-emerald-500 animate-ping opacity-25" />
                </div>
                <div>
                  <h4 className="text-[#082318] font-bold text-sm">Decade of Excellence</h4>
                  <p className="text-[11px] text-[#517362]">Dedicated to ethical Ranthambore wildlife tourism</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Company Story & Trust Values */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-xs">
              <ShieldCheck className="w-3.5 h-3.5 text-[#047857]" />
              About Ranthambore Wild Life Tour
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] leading-tight">
              Passionate Trackers.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706]">
                Unmatched Safaris.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#1b3a2a] leading-relaxed font-normal">
              Founded by wildlife enthusiasts and local naturalists in Sawai Madhopur, <strong className="text-[#082318] font-bold">Ranthambore Wild Life Tour</strong> is an independent travel facilitation company dedicated to delivering authentic, transparent, and exhilarating wildlife expeditions.
            </p>

            <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
              From securing coveted morning Gypsy permits to booking heritage jungle resorts, our on-ground team takes care of every detail so you can immerse yourself in the majestic wilderness of Ranthambore.
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Forest Department Compliance',
                'Senior Certified Naturalists',
                'Zero Hidden Charges Policy',
                '24/7 On-Ground Concierge',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="text-xs text-[#183d2a] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white text-xs sm:text-sm font-bold shadow-md shadow-emerald-950/20 flex items-center gap-2 transition cursor-pointer"
              >
                <span>Plan Your Safari With Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#contact-us"
                className="px-5 py-3.5 rounded-xl bg-white text-[#082318] hover:bg-emerald-50 border border-[#d2e4d9] text-xs sm:text-sm font-semibold transition shadow-xs"
              >
                Speak to a Specialist
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Stats Row with Animated Counter */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20 pt-12 border-t border-[#e2ede6]"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: '#047857' }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl bg-white border border-[#d2e4d9] text-center space-y-1 shadow-sm transition"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#ea580c]">
                <AnimatedCounter
                  value={s.target}
                  decimals={s.decimals || 0}
                  suffix={s.suffix}
                  duration={2}
                />
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#082318]">{s.label}</div>
              <div className="text-[11px] text-[#517362]">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
