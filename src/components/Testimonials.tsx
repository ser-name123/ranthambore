'use client';

import { Highlight } from './cms/Text';
import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { JungleTopCanopy, JungleCornerBranch, TigerTrackWatermark, JungleGodRays, JungleSavannahGrass } from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';

export default function Testimonials() {
  const { testimonials: reviews, home, ui } = useSiteContent();
  const heading = home.testimonials;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section className="py-24 bg-white relative border-t border-[#e2ede6] overflow-hidden">
      {/* Top Jungle Canopy Vines, Sunbeams & Pugmarks */}
      <JungleGodRays />
      <JungleTopCanopy />
      <JungleCornerBranch position="right" className="top-12 right-0" />
      <TigerTrackWatermark count={4} className="top-1/2" />
      <JungleSavannahGrass className="bottom-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200">
            <Star className="w-3.5 h-3.5 fill-[#d97706] text-[#d97706]" />
            {heading.badge}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
            <Highlight text={heading.title} />
          </h2>
          <p className="text-sm sm:text-base text-[#375847]">
            {heading.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full flex flex-col">
              <SpotlightCard
                spotlightColor="rgba(4, 120, 87, 0.08)"
                enableTilt={true}
                className="p-7 rounded-2xl border border-[#d2e4d9] bg-white flex-1 flex flex-col justify-between space-y-6 relative hover:border-emerald-600 hover:shadow-xl transition duration-300 shadow-md group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#d97706] gap-1">
                      {[...Array(Math.max(0, Math.min(5, Math.round(rev.rating))))].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current transform group-hover:scale-110 transition duration-200" style={{ transitionDelay: `${i * 50}ms` }} />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-emerald-700/30 group-hover:text-emerald-700 transition duration-300" />
                  </div>

                  <p className="text-sm sm:text-base text-[#0c2419] leading-relaxed italic font-normal">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#e2ede6]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-[#082318] text-sm sm:text-base group-hover:text-emerald-800 transition">{rev.name}</h4>
                      <p className="text-xs text-[#2e5241] font-medium">{rev.location}</p>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] text-emerald-900 font-bold bg-emerald-50 px-2.5 py-0.5 rounded border border-emerald-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
                      {ui.verifiedGuest}
                    </span>
                  </div>
                  <div className="mt-2 text-xs text-[#92400e] font-semibold">
                    {rev.tour} • {rev.date}
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
