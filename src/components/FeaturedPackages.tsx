'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, MapPin, Check, ArrowRight, Star, Sparkles, Shield, Compass } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface FeaturedPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

interface PackageItem {
  id: string;
  name: string;
  category: 'all' | 'short' | 'standard' | 'luxury' | 'custom';
  duration: string;
  safariCount: string;
  hotelType: string;
  pricePerPerson: number;
  badge?: string;
  image: string;
  highlights: string[];
  inclusions: string[];
}

export default function FeaturedPackages({ onSelectPackage }: FeaturedPackagesProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'short' | 'standard' | 'luxury' | 'custom'>('all');

  const packages: PackageItem[] = [
    {
      id: 'day-tour',
      name: 'Ranthambore Day Safari Express',
      category: 'short',
      duration: '1 Day Trip',
      safariCount: '1 Gypsy or Canter Safari',
      hotelType: 'Day Rest / Fresh-up Facility',
      pricePerPerson: 2999,
      badge: 'Best for Quick Trips',
      image: '/images/gypsy_encounter.jpg',
      highlights: ['Morning or afternoon safari session', 'Sawai Madhopur station transfers', 'National Park permit & guide fee'],
      inclusions: ['Safari Permit', 'Local Pickup', 'Guide Assistance']
    },
    {
      id: 'weekend-escape',
      name: 'Ranthambore Weekend Wildlife Tour',
      category: 'standard',
      duration: '1 Night / 2 Days',
      safariCount: '1 Tiger Safari Included',
      hotelType: '3-Star / Heritage Resort',
      pricePerPerson: 6499,
      badge: 'Most Popular',
      image: '/images/tiger_stalking.jpg',
      highlights: ['1 Night stay with Breakfast & Dinner', 'Choice of Gypsy or Canter safari', 'Evening campfire & Rajasthani folk music'],
      inclusions: ['Resort Stay', '1 Safari Session', 'Meals Included', 'Station Transfer']
    },
    {
      id: 'wildlife-escape',
      name: 'Classic Ranthambore Wildlife Escape',
      category: 'standard',
      duration: '2 Nights / 3 Days',
      safariCount: '2 Distinct Safari Sessions',
      hotelType: '4-Star Deluxe Resort with Pool',
      pricePerPerson: 12999,
      badge: 'Highest Sightings Rate',
      image: '/images/tiger_portrait.jpg',
      highlights: ['2 Safaris (Morning & Afternoon zones)', 'All Meals (Breakfast, Lunch, Dinner)', 'Visit to UNESCO Ranthambore Fort'],
      inclusions: ['2 Safaris', 'Resort Stay', 'All Meals', 'Fort Sightseeing']
    },
    {
      id: 'photography-expedition',
      name: 'Tiger Photography Master Expedition',
      category: 'custom',
      duration: '3 Nights / 4 Days',
      safariCount: '4 Exclusive Gypsy Safaris',
      hotelType: 'Luxury Wildlife Jungle Camp',
      pricePerPerson: 27999,
      badge: "Photographers' Choice",
      image: '/images/tiger_lake.jpg',
      highlights: ['Private 4x4 Gypsy for camera gear', 'Senior wildlife tracker & naturalist', 'Early morning golden hour slots'],
      inclusions: ['4 Private Safaris', 'Luxury Villa', 'Expert Naturalist', 'All Transfers']
    },
    {
      id: 'jaipur-excursion',
      name: 'Jaipur to Ranthambore Tour Package',
      category: 'short',
      duration: 'Same Day or 1N/2D',
      safariCount: '1 Scheduled Safari Session',
      hotelType: 'Optional Resort Stay',
      pricePerPerson: 8499,
      badge: 'Door-to-Door Cab',
      image: '/images/tiger_foliage.jpg',
      highlights: ['Private AC sedan from Jaipur hotel/airport', 'Safari permit pre-coordinated', 'Scenic drive via Delhi-Mumbai Expressway'],
      inclusions: ['Jaipur Cab', 'Safari Permit', 'Driver Allowance', 'Entry Assistance']
    },
    {
      id: 'royal-heritage-tour',
      name: 'Royal Heritage & Wilderness Tour',
      category: 'luxury',
      duration: '3 Nights / 4 Days',
      safariCount: '3 Safaris + Chambal Sanctuary',
      hotelType: '5-Star Heritage Palace / Oberoi/Taj Class',
      pricePerPerson: 38999,
      badge: 'Ultimate Luxury',
      image: '/images/tiger_ruins.jpg',
      highlights: ['Palatial suite with private courtyard', 'Chambal River Gharial & Crocodile boat safari', 'Gourmet dining & wellness spa'],
      inclusions: ['5-Star Luxury', '3 Safaris', 'Chambal Boat', 'Private Butler']
    }
  ];

  const filteredPackages = activeTab === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === activeTab);

  const tabs = [
    { id: 'all', label: 'All Packages' },
    { id: 'short', label: 'Day / 1-Day' },
    { id: 'standard', label: 'Weekend & 3-Day' },
    { id: 'luxury', label: 'Luxury Heritage' },
    { id: 'custom', label: 'Photography' },
  ] as const;

  return (
    <section className="py-24 bg-[#06150f] relative" id="packages">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6"
        >
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
              <Compass className="w-3.5 h-3.5 text-emerald-400" />
              Curated Itineraries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured Tour Packages
            </h2>
            <p className="text-sm sm:text-base text-[#bad3c6] max-w-2xl">
              Handcrafted packages combining verified safari permits, luxury resort stays, meals, and private transfers across Ranthambore.
            </p>
          </div>

          {/* Filter Tabs with Animated Sliding Pill */}
          <div className="flex flex-wrap gap-1.5 bg-[#061710] p-1.5 rounded-xl border border-[#16432f]">
            {tabs.map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition duration-200 cursor-pointer ${
                  activeTab === tab.id ? 'text-white' : 'text-[#8cb39e] hover:text-white'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="packageTabPill"
                    className="absolute inset-0 bg-emerald-600 rounded-lg shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Packages Grid with AnimatePresence & Layout */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredPackages.map(pkg => (
              <motion.div
                key={pkg.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col h-full"
              >
                <SpotlightCard
                  spotlightColor="rgba(52, 211, 153, 0.18)"
                  enableTilt={true}
                  className="glass-card rounded-2xl overflow-hidden border border-[#16432f] hover:border-emerald-400 transition duration-300 flex-1 flex flex-col group shadow-lg bg-[#092218]"
                >
                  {/* Package Image */}
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={pkg.image}
                      alt={pkg.name}
                      fill
                      className="object-cover group-hover:scale-108 transition duration-700 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#092218] via-black/25 to-transparent" />

                    {pkg.badge && (
                      <div className="absolute top-3 left-3">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold shadow-md">
                          {pkg.badge}
                        </span>
                      </div>
                    )}

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-md bg-black/60 backdrop-blur-md text-[#f59e0b] text-[11px] font-semibold border border-white/10 flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {pkg.duration}
                      </span>
                    </div>
                  </div>

                  {/* Package Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-white group-hover:text-emerald-300 transition">
                        {pkg.name}
                      </h3>

                      <div className="mt-2.5 space-y-1.5 text-xs text-[#93b5a4]">
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          <span className="text-[#bad3c6] font-medium">{pkg.safariCount}</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                          <span className="text-[#7fa391]">{pkg.hotelType}</span>
                        </div>
                      </div>

                      {/* Inclusion Pills */}
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {pkg.inclusions.map((inc, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded bg-[#061710] border border-[#16432f] text-[10px] text-[#bad3c6]"
                          >
                            ✓ {inc}
                          </span>
                        ))}
                      </div>

                      {/* Highlights */}
                      <ul className="mt-4 space-y-1.5 text-xs text-[#bad3c6]">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Price and CTA */}
                    <div className="pt-4 border-t border-[#143d2b] flex items-center justify-between">
                      <div>
                        <span className="text-[11px] text-[#6d917f] block">Starting from</span>
                        <div className="flex items-baseline gap-1">
                          <span className="text-xl font-bold text-white">
                            ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
                          </span>
                          <span className="text-[10px] text-[#6d917f]">/ person</span>
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectPackage(pkg.name)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 via-[#ea580c] to-[#d97706] hover:from-emerald-500 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <span>Enquire</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Customization Banner with Smooth Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-emerald-500/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="font-serif text-2xl font-bold text-white">
              Need a Custom Wildlife Package for Family or Corporate Groups?
            </h4>
            <p className="text-xs sm:text-sm text-[#c2d7cd]">
              We customize nights, safari counts, vehicle exclusivity, meal plans, and private transport from Jaipur or Delhi.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectPackage('Customized Group / Family Tour')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white text-xs font-bold shadow-lg shadow-emerald-950/50 transition cursor-pointer border border-emerald-400/30"
            >
              Get Custom Quotation
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20need%20a%20Custom%20Wildlife%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-[#06150f] hover:bg-[#113123] text-emerald-400 border border-[#16432f] text-xs font-bold transition flex items-center gap-1.5"
            >
              WhatsApp Travel Expert
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
