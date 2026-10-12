'use client';

import React from 'react';
import Image from 'next/image';
import { BookOpen, Calendar, ArrowRight, ShieldCheck, Camera } from 'lucide-react';

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
      image: '/images/hero_tiger.jpg'
    },
    {
      title: 'Essential Safari Packing List: What to Wear in the Jungle',
      category: 'Visitor Preparation',
      readTime: '3 min read',
      summary: 'Why earthy greens, browns, and khakis matter, essential winter layers for open Gypsy drives, dust protection, and camera beanbags.',
      image: '/images/gypsy_safari.jpg'
    },
    {
      title: 'How to Reach Ranthambore: Train, Road & Flight Options',
      category: 'Transit & Route',
      readTime: '5 min read',
      summary: 'Direct express trains to Sawai Madhopur (SWM), flight connections via Jaipur (JAI), and the new Delhi-Mumbai Expressway route.',
      image: '/images/ranthambore_lake.jpg'
    }
  ];

  return (
    <section className="py-24 bg-[#171412] relative border-t border-[#29221b]" id="travel-guide">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/20">
              <BookOpen className="w-3.5 h-3.5" />
              Wildlife Insights
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Ranthambore Travel Guide
            </h2>
            <p className="text-sm sm:text-base text-[#b8a794] max-w-2xl">
              Carefully curated practical guides prepared by our naturalists to help you prepare for an unforgettable tiger safari.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <article
              key={idx}
              className="glass-card rounded-2xl overflow-hidden border border-[#2b241e] hover:border-[#f59e0b] transition duration-300 flex flex-col group bg-[#1a1714] shadow-lg"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <Image
                  src={art.image}
                  alt={art.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1714] via-transparent to-black/30" />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-black/60 backdrop-blur-md text-[#f59e0b] text-[11px] font-bold border border-white/10">
                  {art.category}
                </span>
                <span className="absolute bottom-3 right-3 text-[11px] text-[#e0d6c7] font-medium bg-black/50 px-2 py-0.5 rounded">
                  {art.readTime}
                </span>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2.5">
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#ea580c] transition leading-snug">
                    {art.title}
                  </h3>
                  <p className="text-xs text-[#a89985] leading-relaxed">
                    {art.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#29221b]">
                  <button
                    onClick={() => onOpenArticle(art.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f59e0b] hover:text-[#ea580c] transition cursor-pointer"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
