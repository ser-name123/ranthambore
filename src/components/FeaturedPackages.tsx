'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { Clock, MapPin, Check, ArrowRight, Star, Sparkles, Shield, Compass } from 'lucide-react';

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
      image: '/images/gypsy_safari.jpg',
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
      image: '/images/resort_luxury.jpg',
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
      image: '/images/hero_tiger.jpg',
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
      image: '/images/ranthambore_lake.jpg',
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
      image: '/images/gypsy_safari.jpg',
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
      image: '/images/resort_luxury.jpg',
      highlights: ['Palatial suite with private courtyard', 'Chambal River Gharial & Crocodile boat safari', 'Gourmet dining & wellness spa'],
      inclusions: ['5-Star Luxury', '3 Safaris', 'Chambal Boat', 'Private Butler']
    }
  ];

  const filteredPackages = activeTab === 'all'
    ? packages
    : packages.filter(pkg => pkg.category === activeTab);

  return (
    <section className="py-24 bg-[#121110] relative" id="packages">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold uppercase tracking-widest border border-[#f59e0b]/20">
              <Compass className="w-3.5 h-3.5" />
              Curated Itineraries
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Featured Tour Packages
            </h2>
            <p className="text-sm sm:text-base text-[#b8a794] max-w-2xl">
              Handcrafted packages combining guaranteed safari permits, verified resort stays, meals, and private transfers. All packages can be customized.
            </p>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-2 bg-[#1b1714] p-1.5 rounded-xl border border-[#2e261f]">
            {[
              { id: 'all', label: 'All Packages' },
              { id: 'short', label: 'Day / 1-Day' },
              { id: 'standard', label: 'Weekend & 3-Day' },
              { id: 'luxury', label: 'Luxury Heritage' },
              { id: 'custom', label: 'Photography' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as typeof activeTab)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === tab.id
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'text-[#a89985] hover:text-white hover:bg-[#28211c]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPackages.map(pkg => (
            <div
              key={pkg.id}
              className="glass-card rounded-2xl overflow-hidden border border-[#2e261f] hover:border-[#ea580c] transition duration-300 flex flex-col group shadow-lg bg-[#181512]"
            >
              {/* Package Image */}
              <div className="relative h-56 w-full overflow-hidden">
                <Image
                  src={pkg.image}
                  alt={pkg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181512] via-black/20 to-transparent" />

                {pkg.badge && (
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-[#ea580c] text-white text-[11px] font-bold shadow-md">
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
                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#f59e0b] transition">
                    {pkg.name}
                  </h3>

                  <div className="mt-2.5 space-y-1.5 text-xs text-[#a89985]">
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#ea580c]" />
                      <span className="text-[#d4c6b5] font-medium">{pkg.safariCount}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#f59e0b]" />
                      <span className="text-[#a89985]">{pkg.hotelType}</span>
                    </div>
                  </div>

                  {/* Inclusion Pills */}
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {pkg.inclusions.map((inc, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded bg-[#251f19] border border-[#3b3026] text-[10px] text-[#cfc0ae]"
                      >
                        ✓ {inc}
                      </span>
                    ))}
                  </div>

                  {/* Highlights */}
                  <ul className="mt-4 space-y-1.5 text-xs text-[#b8a794]">
                    {pkg.highlights.map((h, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price and CTA */}
                <div className="pt-4 border-t border-[#2a221b] flex items-center justify-between">
                  <div>
                    <span className="text-[11px] text-[#8c7f70] block">Starting from</span>
                    <div className="flex items-baseline gap-1">
                      <span className="text-xl font-bold text-white">
                        ₹{pkg.pricePerPerson.toLocaleString('en-IN')}
                      </span>
                      <span className="text-[10px] text-[#8c7f70]">/ person</span>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectPackage(pkg.name)}
                    className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition cursor-pointer"
                  >
                    <span>Enquire</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Customization Banner */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#221c17] via-[#2a221b] to-[#1c1713] border border-[#ea580c]/30 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="font-serif text-2xl font-bold text-white">
              Need a Custom Wildlife Package for Family or Corporate Groups?
            </h4>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              We customize nights, safari counts, vehicle exclusivity, meal plans, and private transport from Jaipur or Delhi.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => onSelectPackage('Customized Group / Family Tour')}
              className="px-5 py-3 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white text-xs font-bold shadow-lg transition cursor-pointer"
            >
              Get Custom Quotation
            </button>
            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20need%20a%20Custom%20Wildlife%20Package."
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 text-xs font-bold transition flex items-center gap-1.5"
            >
              WhatsApp Travel Expert
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
