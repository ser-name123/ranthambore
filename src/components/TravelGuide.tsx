'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface TravelGuideProps {
  onOpenArticle: (title: string) => void;
}

export default function TravelGuide({ onOpenArticle }: TravelGuideProps) {
  const articles = [
    {
      title: 'Best Time to Visit Ranthambore: Month-by-Month Guide',
      category: 'Seasonal Planning',
      readTime: '4 min read',
      summary: 'From misty winter mornings (Nov-Feb) to hot summer months (Apr-Jun) when tigers frequent waterholes, understand seasonal sighting patterns.',
      image: '/images/tiger_lake.jpg'
    },
    {
      title: 'Essential Safari Packing List: What to Wear in the Jungle',
      category: 'Visitor Preparation',
      readTime: '3 min read',
      summary: 'Why earthy greens, browns, and khakis matter, essential winter layers for open Gypsy drives, dust protection, and camera beanbags.',
      image: '/images/tiger_foliage.jpg'
    },
    {
      title: 'How to Reach Ranthambore: Train, Road & Flight Options',
      category: 'Transit & Route',
      readTime: '5 min read',
      summary: 'Direct express trains to Sawai Madhopur (SWM), flight connections via Jaipur (JAI), and the new Delhi-Mumbai Expressway route.',
      image: '/images/gypsy_encounter.jpg'
    }
  ];

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
    <section className="py-24 bg-[#06150f] relative border-t border-[#123324]" id="travel-guide">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
              <BookOpen className="w-3.5 h-3.5 text-emerald-400" />
              Wildlife Insights
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ranthambore Travel Guide
            </h2>
            <p className="text-sm sm:text-base text-[#bad3c6] max-w-2xl">
              Carefully curated practical guides prepared by our naturalists to help you prepare for an unforgettable tiger safari.
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
                spotlightColor="rgba(52, 211, 153, 0.16)"
                enableTilt={true}
                className="glass-card rounded-2xl overflow-hidden border border-[#16432f] hover:border-emerald-400 transition duration-300 flex-1 flex flex-col group bg-[#092218] shadow-lg"
              >
                <div className="relative h-52 w-full overflow-hidden">
                  <Image
                    src={art.image}
                    alt={art.title}
                    fill
                    className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-transparent to-black/30" />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#061710]/80 backdrop-blur-md text-emerald-300 text-[11px] font-bold border border-emerald-500/30">
                    {art.category}
                  </span>
                  <span className="absolute bottom-3 right-3 text-[11px] text-[#e0eee6] font-medium bg-black/60 px-2 py-0.5 rounded">
                    {art.readTime}
                  </span>
                </div>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2.5">
                    <h3 className="font-serif text-xl font-bold text-white group-hover:text-emerald-300 transition leading-snug">
                      {art.title}
                    </h3>
                    <p className="text-xs text-[#bad3c6] leading-relaxed">
                      {art.summary}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#143d2b]">
                    <button
                      onClick={() => onOpenArticle(art.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-400 hover:text-emerald-300 transition cursor-pointer"
                    >
                      <span>Read Full Guide</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition duration-200" />
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
