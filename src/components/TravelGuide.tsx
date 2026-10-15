'use client';

import { Highlight } from './cms/Text';
import React from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { JungleCornerBranch, TigerTrackWatermark, BambooStalks, JungleTreelineBackdrop, JungleSavannahGrass } from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';

interface TravelGuideProps {
  onOpenArticle: (title: string) => void;
}

export default function TravelGuide({ onOpenArticle }: TravelGuideProps) {
  const { guides: articles, home, ui } = useSiteContent();
  const heading = home.guides;
  const router = useRouter();

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
    <section className="py-24 bg-[#f4f8f5] relative border-t border-[#e2ede6] overflow-hidden" id="travel-guide">
      {/* Botanical Jungle Foliage, Treeline & Tiger Tracks */}
      <JungleTreelineBackdrop />
      <JungleCornerBranch position="left" className="top-8 left-0" />
      <JungleCornerBranch position="right" className="top-24 right-0" />
      <TigerTrackWatermark count={4} className="top-1/2" />
      <BambooStalks className="bottom-0 right-6 opacity-30" />
      <JungleSavannahGrass className="bottom-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200">
              <BookOpen className="w-3.5 h-3.5 text-emerald-700" />
              {heading.badge}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
              <Highlight text={heading.title} />
            </h2>
            <p className="text-sm sm:text-base text-[#375847] max-w-2xl">
              {heading.subtitle}
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {articles.map((art, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full flex flex-col">
              <SpotlightCard
                spotlightColor="rgba(4, 120, 87, 0.08)"
                enableTilt={true}
                className="rounded-2xl overflow-hidden border border-[#d2e4d9] hover:border-emerald-600 transition duration-300 flex-1 flex flex-col group bg-white shadow-md hover:shadow-xl"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white text-emerald-900 text-[11px] font-bold border border-emerald-200 shadow-sm">
                    {art.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[11px] text-white font-medium bg-black/75 px-2 py-0.5 rounded">
                    {art.readTime}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4 bg-white">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl font-bold text-[#082318] group-hover:text-emerald-800 transition leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#e2ede6]">
                    <button
                      onClick={() => (art.link ? router.push(art.link) : onOpenArticle(art.title))}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition cursor-pointer"
                    >
                      <span>{ui.readGuide}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition duration-200 text-emerald-700" />
                    </button>
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
