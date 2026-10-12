'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

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
    <section className="py-24 bg-[#171412] relative overflow-hidden border-t border-[#29221b]" id="about-us">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

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
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#382e25] group">
              <Image
                src="/images/resort_luxury.jpg"
                alt="Ranthambore Wild Life Tour Hospitality and Safaris"
                fill
                className="object-cover group-hover:scale-105 transition duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/25" />
            </div>

            {/* Overlapping Floating Badge with Multi-Layer Glow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 glass-panel p-5 rounded-2xl border border-[#ea580c]/50 shadow-2xl max-w-xs backdrop-blur-xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="relative w-12 h-12 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#f59e0b] flex items-center justify-center text-white font-bold text-xl shadow-lg shrink-0">
                  <span className="relative z-10">12+</span>
                  <span className="absolute inset-0 rounded-xl bg-[#ea580c] animate-ping opacity-25" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Decade of Excellence</h4>
                  <p className="text-[11px] text-[#cfc0ae]">Dedicated to ethical Ranthambore wildlife tourism</p>
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              About Ranthambore Wild Life Tour
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Passionate Trackers.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
                Unmatched Safaris.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-[#cfc1b0] leading-relaxed">
              Founded by wildlife enthusiasts and local naturalists in Sawai Madhopur, <strong>Ranthambore Wild Life Tour</strong> is an independent travel facilitation company dedicated to delivering authentic, transparent, and exhilarating wildlife expeditions.
            </p>

            <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed">
              Whether securing coveted morning Gypsy permits, orchestrating family holiday packages, or matching you with the finest heritage wildlife resorts, our on-ground team takes the stress out of safari planning so you can focus entirely on the majesty of the Indian jungle.
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {[
                'Govt Department Compliance',
                'Senior Certified Naturalists',
                'Zero Hidden Charges Policy',
                '24/7 On-Ground Concierge',
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                  <span className="text-xs text-[#cfc0ae] font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ea580c]/25 flex items-center gap-2 transition cursor-pointer"
              >
                <span>Plan Your Safari With Us</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>

              <motion.a
                whileHover={{ scale: 1.03 }}
                href="#contact-us"
                className="px-5 py-3.5 rounded-xl bg-[#231d18] text-[#d4c6b5] hover:text-white border border-[#3b3127] text-xs sm:text-sm font-semibold transition"
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
          className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20 pt-12 border-t border-[#29221b]"
        >
          {stats.map((s, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -4, borderColor: '#ea580c' }}
              transition={{ duration: 0.2 }}
              className="p-5 rounded-xl bg-[#141210] border border-[#2b241e] text-center space-y-1 shadow-md transition"
            >
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#f59e0b]">
                <AnimatedCounter
                  value={s.target}
                  decimals={s.decimals || 0}
                  suffix={s.suffix}
                  duration={2}
                />
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">{s.label}</div>
              <div className="text-[11px] text-[#8c7f70]">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
