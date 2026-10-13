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
    <div className="relative py-12 lg:py-20 overflow-hidden bg-white">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#517362]">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[#b45309] font-semibold">Tour Packages</span>
        </nav>

        {/* SECTION 1: Hero Header with Tiger Family Visual */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] mb-16 shadow-xl">
          <div className="absolute inset-0">
            <Image
              src="/images/tiger_family.jpg"
              alt="Bengal tigress resting with playful cubs in Ranthambore"
              fill
              className="object-cover object-center opacity-30"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/85 to-white/40" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 text-center max-w-4xl mx-auto py-16 px-4 sm:px-8 space-y-4"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-sm">
              <Sparkles className="w-4 h-4 text-[#d97706]" />
              Curated Wildlife Expeditions (2026-2027)
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-tight">
              Ranthambore Tour Packages:{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-teal-700 to-[#d97706]">
                Resort Stays &amp; Tiger Safaris
              </span>
            </h1>

            <p className="text-sm sm:text-base text-[#375847] leading-relaxed max-w-2xl mx-auto">
              All-inclusive wildlife holiday packages combining confirmed Maruti Gypsy / Canter permits, luxury jungle resort accommodations, and expert naturalist trackers.
            </p>

            <div className="pt-3 flex flex-wrap items-center justify-center gap-4">
              <button
                type="button"
                onClick={() => openBookingModal({ packageName: 'Custom Tour Package' })}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white font-bold text-sm shadow-md flex items-center gap-2 cursor-pointer transition duration-300"
              >
                <span>Build Custom Package</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20please%20send%20available%20tour%20packages%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-[#f0f6f2] text-[#082318] font-bold text-sm border border-[#d2e4d9] flex items-center gap-2 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Itinerary</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* SECTION 2: Filterable Featured Packages Grid */}
        <div className="mb-24">
          <FeaturedPackages
            onSelectPackage={(pkg) => openBookingModal({ packageName: pkg })}
          />
        </div>

        {/* SECTION 3: Day-by-Day Master Itinerary Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Sample 3-Day Plan
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082318]">
              Day-by-Day Wildlife Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
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
                    ? 'bg-emerald-700 text-white shadow-md'
                    : 'bg-[#f0f6f2] text-[#517362] hover:text-[#082318] border border-[#d2e4d9]'
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
                className="p-7 sm:p-9 rounded-2xl bg-white border border-[#d2e4d9] shadow-lg max-w-4xl mx-auto space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2ede6] pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block">
                      Day {item.day} Breakdown
                    </span>
                    <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082318] mt-0.5">
                      {item.title}
                    </h3>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-[#b45309] border border-amber-200 text-xs font-semibold shrink-0">
                    <Clock className="w-3.5 h-3.5" />
                    {item.timing}
                  </span>
                </div>

                <ul className="space-y-3">
                  {item.highlights.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#375847]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        {/* SECTION 4: Inclusions vs Exclusions Matrix */}
        <div className="mb-24 p-8 rounded-2xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-8 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b45309]">
              Clear Transparency
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Package Inclusions vs Exclusions
            </h2>
            <p className="text-xs text-[#517362]">
              No hidden surprises. Everything is clearly outlined before you confirm your tour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl bg-white border border-emerald-300 space-y-4 shadow-sm">
              <h3 className="font-serif text-base font-bold text-emerald-800 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-700" />
                What is Included
              </h3>
              <ul className="space-y-2.5 text-xs text-[#375847]">
                {[
                  'Confirmed Jeep / Canter Safari permits with all government gate fees',
                  'Registered Forest Department naturalist guide for every safari drive',
                  'Luxury jungle resort stay on twin/double sharing basis',
                  'All buffet meals (Breakfast, Lunch & Dinner as per plan)',
                  'Pick-up and drop from resort to safari gate in registered Gypsy',
                  'Complimentary high-speed Wi-Fi and swimming pool access at resort',
                ].map((inc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-white border border-rose-200 space-y-4 shadow-sm">
              <h3 className="font-serif text-base font-bold text-rose-700 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-600" />
                What is Excluded
              </h3>
              <ul className="space-y-2.5 text-xs text-[#375847]">
                {[
                  'Airfare, train tickets, or intercity transportation to Sawai Madhopur',
                  'Any camera lens fee charged directly at the forest entry gate',
                  'Personal expenses like laundry, alcoholic beverages, and tips',
                  'Early check-in or late check-out charges not specified in the voucher',
                  'Travel insurance and medical emergency expenses',
                ].map((exc, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500 shrink-0" />
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
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Accommodations
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082318]">
              Handpicked Jungle Resorts &amp; Tented Camps
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Choose the accommodation style that matches your comfort and safari budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resortCategories.map((resort) => (
              <SpotlightCard
                key={resort.name}
                spotlightColor="rgba(4, 120, 87, 0.12)"
                enableTilt={true}
                className="bg-white p-6 rounded-2xl border border-[#d2e4d9] space-y-4 flex flex-col justify-between shadow-md hover:border-emerald-600 hover:shadow-xl transition duration-300"
              >
                <div className="space-y-3">
                  <span className="px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-50 text-emerald-900 border border-emerald-300">
                    {resort.stars}
                  </span>
                  <h3 className="font-serif text-lg font-bold text-[#082318]">{resort.name}</h3>
                  <span className="text-lg font-bold text-[#b45309] block">{resort.price}</span>

                  <ul className="space-y-2 pt-3 text-xs text-[#1b3a2a] font-normal border-t border-[#e2ede6]">
                    {resort.features.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openBookingModal({ notes: `Interested in: ${resort.name}` })}
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-[#082318] hover:text-white font-bold text-xs border border-emerald-200 hover:border-emerald-700 transition duration-200 cursor-pointer shadow-xs"
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
