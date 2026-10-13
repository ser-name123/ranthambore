'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Clock, 
  MapPin, 
  Calendar, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  Star, 
  Camera, 
  Utensils, 
  Building, 
  Compass, 
  Check 
} from 'lucide-react';
import { motion } from 'framer-motion';
import FeaturedPackages from '@/components/FeaturedPackages';
import Testimonials from '@/components/Testimonials';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';

export default function TourPackagesPage() {
  const { openBookingModal } = useBookingModal();
  const [activeDay, setActiveDay] = useState(1);

  const itineraryDays = [
    {
      day: 1,
      title: 'Arrival in Sawai Madhopur & Evening Safari',
      timing: '12:00 PM – 07:00 PM',
      highlights: [
        'Check-in at pre-selected jungle resort with welcome refreshments.',
        'Pre-safari naturalist briefing on tiger tracking and zone terrain.',
        'Afternoon Jeep / Canter Safari across designated core or buffer zone.',
        'Evening return, Rajasthani cultural folk dance & bonfire dinner.',
      ],
    },
    {
      day: 2,
      title: 'Dawn Tiger Safari & UNESCO Ranthambore Fort',
      timing: '06:00 AM – 06:30 PM',
      highlights: [
        'Early morning dawn safari when tigers stalk around waterholes.',
        'Sumptuous breakfast buffet at resort followed by leisure time.',
        'Guided historical trek to the 10th-century Ranthambore Fort & Trinetra Ganesh temple.',
        'Late afternoon tea and optional secondary twilight safari drive.',
      ],
    },
    {
      day: 3,
      title: 'Chambal Crocodile Boating & Departure',
      timing: '08:00 AM – 02:00 PM',
      highlights: [
        'Scenic morning excursion to National Chambal Sanctuary (Pali Ghat).',
        'Motorboat river safari spotting Marsh Crocodiles, Gharials & Skimmers.',
        'Return to resort for checkout and luggage transfer.',
        'Private cab drop at Sawai Madhopur Railway Station or Jaipur Airport.',
      ],
    },
  ];

  const resortCategories = [
    {
      name: 'Deluxe Jungle Resort',
      stars: '3-Star Standard',
      price: 'From ₹4,500/night',
      features: ['Air-conditioned cottage rooms', 'Swimming pool & garden lawn', 'Multi-cuisine buffet dining', 'Within 4 km of park gates'],
    },
    {
      name: 'Heritage Palace Haveli',
      stars: '4-Star Premium',
      price: 'From ₹8,500/night',
      features: ['Royal Rajputana architecture', 'Ayurvedic spa treatments', 'Private balconies overlooking Aravali', 'Evening naturalist lectures'],
    },
    {
      name: 'Ultra-Luxury Tented Camp',
      stars: '5-Star Luxury',
      price: 'From ₹18,000/night',
      features: ['Handcrafted royal tents with bathtub', 'Dedicated personal safari butler', 'Organic farm-to-table dining', 'Private bonfire stargazing deck'],
    },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#120f0d]">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#a89985]">
          <Link href="/" className="hover:text-[#ea580c] transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#f59e0b] font-semibold">Tour Packages</span>
        </nav>

        {/* SECTION 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ea580c]" />
            Curated Wildlife Expeditions (2026-2027)
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ranthambore Tour Packages:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Resort Stays &amp; Tiger Safaris
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            All-inclusive wildlife holiday packages combining confirmed Maruti Gypsy / Canter permits, luxury jungle resort accommodations, and expert naturalist trackers.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingModal({ packageName: 'Custom Tour Package' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 cursor-pointer transition duration-300"
            >
              <span>Build Custom Package</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20please%20send%20available%20tour%20packages%20and%20pricing."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-sm border border-[#3d3228] flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Itinerary</span>
            </a>
          </div>
        </motion.div>

        {/* SECTION 2: Filterable Featured Packages Grid */}
        <div className="mb-24">
          <FeaturedPackages
            onSelectPackage={(pkg) => openBookingModal({ packageName: pkg })}
          />
        </div>

        {/* SECTION 3: Day-by-Day Master Itinerary Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Sample 3-Day Plan
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Day-by-Day Wildlife Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              How a typical 3-day / 2-night tiger tracking package is experienced.
            </p>
          </div>

          {/* Day selection tabs */}
          <div className="flex justify-center gap-3 mb-8">
            {[1, 2, 3].map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => setActiveDay(d)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition duration-200 cursor-pointer ${
                  activeDay === d
                    ? 'bg-[#ea580c] text-white shadow-lg shadow-[#ea580c]/30'
                    : 'bg-[#1a1613] text-[#a89985] hover:text-white border border-[#2e261f]'
                }`}
              >
                Day {d} Itinerary
              </button>
            ))}
          </div>

          {/* Active Day Card */}
          {itineraryDays
            .filter((item) => item.day === activeDay)
            .map((item) => (
              <div
                key={item.day}
                className="p-7 sm:p-9 rounded-2xl bg-[#191512] border border-[#ea580c]/30 shadow-2xl max-w-4xl mx-auto space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#28211a] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c] block">
                      Day {item.day} Breakdown
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-semibold shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {item.timing}
                  </span>
                </div>

                <ul className="space-y-3">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#cfc0ae]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* SECTION 4: Inclusions vs Exclusions Matrix */}
        <div className="mb-24 p-8 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Clear Transparency
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Package Inclusions vs Exclusions
            </h2>
            <p className="text-xs text-[#a89985]">
              No hidden surprises. Everything is clearly outlined before you confirm your tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-[#13110e] border border-emerald-500/20 space-y-4">
              <h3 className="font-serif text-base font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                What is Included
              </h3>
              <ul className="space-y-2.5 text-xs text-[#c4b5a3]">
                {[
                  'Confirmed Jeep / Canter Safari permits with all government gate fees',
                  'Registered Forest Department naturalist guide for every safari drive',
                  'Luxury jungle resort stay on twin/double sharing basis',
                  'All buffet meals (Breakfast, Lunch & Dinner as per plan)',
                  'Pick-up and drop from resort to safari gate in registered Gypsy',
                  'Complimentary high-speed Wi-Fi and swimming pool access at resort',
                ].map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#13110e] border border-rose-500/20 space-y-4">
              <h3 className="font-serif text-base font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-400" />
                What is Excluded
              </h3>
              <ul className="space-y-2.5 text-xs text-[#c4b5a3]">
                {[
                  'Airfare, train tickets, or intercity transportation to Sawai Madhopur',
                  'Any camera lens fee charged directly at the forest entry gate',
                  'Personal expenses like laundry, alcoholic beverages, and tips',
                  'Early check-in or late check-out charges not specified in the voucher',
                  'Travel insurance and medical emergency expenses',
                ].map((exc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-400 shrink-0" />
                    <span>{exc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 5: Resort Categories & Luxury Tents Comparison */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Accommodations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Handpicked Jungle Resorts &amp; Tented Camps
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Choose the accommodation style that matches your comfort and safari budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resortCategories.map((resort) => (
              <SpotlightCard
                key={resort.name}
                spotlightColor="rgba(245, 158, 11, 0.16)"
                enableTilt={true}
                className="glass-card p-6 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-[#ea580c]/15 text-[#ea580c] border border-[#ea580c]/30">
                    {resort.stars}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-white">{resort.name}</h3>
                  <span className="text-lg font-bold text-[#f59e0b] block">{resort.price}</span>

                  <ul className="space-y-2 pt-3 text-xs text-[#b8a794] border-t border-[#261f18]">
                    {resort.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-[#ea580c] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openBookingModal({ notes: `Interested in: ${resort.name}` })}
                  className="w-full py-2.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-xs border border-[#3b3026] hover:border-[#ea580c] transition duration-200 cursor-pointer"
                >
                  Inquire For This Stay
                </button>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* SECTION 6: Guest Testimonials */}
        <div className="mb-24">
          <Testimonials />
        </div>

        {/* SECTION 7: Custom Package Quotation & Quick Enquiry Form */}
        <div>
          <QuickEnquirySection />
        </div>
      </div>
    </div>
  );
}
