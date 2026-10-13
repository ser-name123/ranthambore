'use client';

import React from 'react';
import { Compass, Car, Hotel, MapPin, Camera, Landmark, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { JungleCornerBranch, TigerTrackWatermark, BambooStalks } from './JungleFoliageDecorations';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services = [
    {
      icon: Compass,
      title: 'Maruti Gypsy Safari Booking',
      desc: 'Exclusive and sharing 4x4 open Gypsy safaris across Zones 1 to 10 with verified entry permits, licensed drivers, and certified nature guides.',
      tag: 'Core Experience',
      action: 'Book Gypsy Safari'
    },
    {
      icon: Car,
      title: 'Canter Safari Booking',
      desc: 'Economical 20-seater open safari bus permits ideal for families, groups, and last-minute travellers with panoramic elevated forest views.',
      tag: 'Best Value',
      action: 'Book Canter Safari'
    },
    {
      icon: Hotel,
      title: 'Resort & Jungle Camp Stays',
      desc: 'Curated bookings at handpicked heritage jungle resorts, eco-cottages, and 5-star wilderness retreats near National Park entry gates.',
      tag: 'Stay Assistance',
      action: 'Find Resort Deals'
    },
    {
      icon: MapPin,
      title: 'Railway Station & Airport Transfers',
      desc: 'Comfortable private AC cabs from Sawai Madhopur Junction, Jaipur International Airport, or Delhi NCR straight to your resort.',
      tag: 'Safe Transfers',
      action: 'Book Transfer'
    },
    {
      icon: Landmark,
      title: 'Ranthambore Fort & Chambal Safari',
      desc: 'Guided cultural excursions to the 10th-century UNESCO World Heritage Ranthambore Fort, Trinetra Ganesha Temple, and Chambal boat safari.',
      tag: 'Sightseeing',
      action: 'Explore Excursions'
    },
    {
      icon: Camera,
      title: 'Bespoke Wildlife Photography Tours',
      desc: 'Specialized arrangements for photographers featuring exclusive Gypsy positioning, expert trackers, beanbag mounts, and optimal lighting routes.',
      tag: 'Photography Special',
      action: 'Plan Photo Tour'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section className="py-24 bg-[#f4f8f5] relative border-t border-[#e2ede6] overflow-hidden" id="services">
      {/* Botanical Jungle Foliage & Safari Tracks */}
      <JungleCornerBranch position="left" className="top-10 left-0" />
      <JungleCornerBranch position="right" className="top-24 right-0" />
      <TigerTrackWatermark count={4} className="top-1/3" />
      <BambooStalks className="bottom-0 left-6 opacity-30" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#047857]" />
            Complete Travel Assistance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
            Our Wildlife Services
          </h2>
          <p className="text-sm sm:text-base text-[#1b3a2a]">
            From obtaining official entry permits to coordinating luxury stays and local excursions, we provide seamless end-to-end safari planning.
          </p>
        </motion.div>

        {/* Services Grid with Staggered Motion & Spotlight Tilt */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <motion.div key={idx} variants={cardVariants} className="h-full flex flex-col">
                <SpotlightCard
                  spotlightColor="rgba(4, 120, 87, 0.08)"
                  enableTilt={true}
                  className="p-7 rounded-2xl border border-[#d2e4d9] hover:border-emerald-500 transition-all duration-300 flex-1 flex flex-col justify-between group shadow-md hover:shadow-xl bg-white"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-emerald-50 text-[#047857] border border-emerald-200 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white group-hover:rotate-6 group-hover:scale-110 transition duration-300 shadow-sm">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[11px] font-bold px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-[#082318]">
                        {svc.tag}
                      </span>
                    </div>

                    <h3 className="font-serif text-xl font-bold text-[#082318] group-hover:text-[#047857] transition">
                      {svc.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#1b3a2a] leading-relaxed font-normal">
                      {svc.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#e2ede6]">
                    <button
                      onClick={() => onSelectService(svc.title)}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-950 transition cursor-pointer"
                    >
                      <span>{svc.action}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition duration-200" />
                    </button>
                  </div>
                </SpotlightCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
