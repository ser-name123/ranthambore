'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Crown, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  HelpCircle,
  Hotel,
  Award
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function RoyalTigerExpeditionPage() {
  const { openBookingModal } = useBookingModal();

  const packageHighlights = [
    { title: '4 Exclusive Tiger Safaris', desc: 'Cover multiple varied zones across morning and afternoon shifts for maximal sighting chances.' },
    { title: '3 Nights Heritage Resort Stay', desc: 'Luxury heritage property with royal Rajput architecture, private pool, and spa.' },
    { title: 'Chambal River Boating Included', desc: 'Excursion to the National Chambal Sanctuary to spot Gharials and rare river dolphins.' },
    { title: 'VIP Transport & All Meals', desc: 'Full board dining, private cab transfers from Jaipur/Delhi, and personalized concierge.' },
  ];

  const itinerary = [
    {
      day: 'Day 1: Royal Welcome & Sunset Safari',
      schedule: [
        { time: '11:00 AM', activity: 'Private luxury transfer arrival. Traditional Aarti & welcome drink at your heritage resort.' },
        { time: '01:00 PM', activity: 'Gourmet Rajasthani lunch in the royal courtyard.' },
        { time: '02:30 PM', activity: 'Safari Drive 1: Afternoon core zone tracking. Sunset birding around Padam Talao.' },
        { time: '07:30 PM', activity: 'Evening wildlife documentary screening with bonfire and heritage folk music.' },
      ],
    },
    {
      day: 'Day 2: Core Zone Tracking & Fort Heritage Walk',
      schedule: [
        { time: '06:00 AM', activity: 'Safari Drive 2: Misty dawn safari exploring deep rocky ravines for big cats.' },
        { time: '11:00 AM', activity: 'Brunch at the resort followed by spa therapy relaxation or swimming pool leisure.' },
        { time: '02:30 PM', activity: 'Safari Drive 3: Afternoon drive covering alternative zones with active tiger cubs.' },
        { time: '07:30 PM', activity: 'Private candlelight dinner by the pool.' },
      ],
    },
    {
      day: 'Day 3: Dawn Safari & Chambal River Excursion',
      schedule: [
        { time: '06:30 AM', activity: 'Safari Drive 4: Final morning tiger tracking drive with senior naturalist tracker.' },
        { time: '01:30 PM', activity: 'Motorboat river safari at National Chambal Sanctuary. Spot Gharials & marsh crocodiles.' },
        { time: '05:30 PM', activity: 'Visit the 10th-century Ranthambore Fort and Trinetra Ganesha Temple.' },
        { time: '08:00 PM', activity: 'Farewell Gala dinner with chef special delights.' },
      ],
    },
    {
      day: 'Day 4: Sunrise Walk & Departure',
      schedule: [
        { time: '08:00 AM', activity: 'Organic farm breakfast & peaceful nature stroll.' },
        { time: '11:00 AM', activity: 'Check out and private transfer to Jaipur Airport or Sawai Madhopur station.' },
      ],
    },
  ];

  const inclusions = [
    '3 Nights accommodation in 5-Star Heritage / Wilderness Resort',
    '4 Comprehensive Jungle Safaris in private Maruti Gypsy vehicles',
    'All forest entry permits, vehicle entry charges & guide fees',
    'Personal senior naturalist tracker dedicated to your group',
    'All meals on Full Board (Breakfast, Lunch & Dinner)',
    'Motorboat safari at National Chambal River Crocodile Sanctuary',
    'Guided Ranthambore Fort excursion with historian guide',
    'Complimentary Railway Station / Hotel private transfers',
  ];

  const faqs = [
    {
      q: 'Why take 4 safaris instead of 1 or 2?',
      a: 'Tigers are wild predators that roam vast territories. Taking 4 safaris across 3 full days gives you morning and evening coverage across different zones, maximizing your cumulative tiger sighting probability to over 95%.',
    },
    {
      q: 'Can this package be customized with Jaipur pickup and drop?',
      a: 'Yes, private round-trip transfers from Jaipur Airport or Delhi NCR in an air-conditioned Innova Crysta can easily be added to your booking.',
    },
    {
      q: 'Are all forest permits guaranteed for private Gypsies?',
      a: 'Yes, when booked in advance, our team secures exclusive Maruti Gypsy permits registered directly under your passenger names.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <Link href="/tour-packages" className="hover:text-emerald-700 transition">Tour Packages</Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[#d97706] font-semibold">3N/4D Royal Tiger Expedition</span>
          </nav>

          {/* Visual Hero Banner with Tiger Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-[#f4f8f5] shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_stalking.jpg"
                alt="Bengal Tiger prowling on jungle trail"
                fill
                priority
                className="object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/50" />
            </div>

            <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs font-bold uppercase tracking-wider border border-amber-200 backdrop-blur-md">
                  <Crown className="w-3.5 h-3.5 text-[#d97706]" />
                  Ultra-Luxury Wildlife Tour • 3 Nights / 4 Days
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                  3N/4D Royal Tiger <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d97706]">Expedition</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  The pinnacle of Ranthambore wildlife luxury. 4 private tiger safaris, 5-star heritage resort accommodation, Chambal river crocodile cruise, and dedicated naturalist escort.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#d2e4d9] space-y-3 shrink-0 text-center sm:text-left shadow-lg">
                <span className="text-xs text-[#517362] block font-medium">Starting from</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-[#d97706]">₹18,500</span>
                  <span className="text-xs text-[#517362]">/ person</span>
                </div>
                <button
                  onClick={() => openBookingModal({ packageSelected: '3N/4D Royal Tiger Expedition' })}
                  className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-xs shadow-md transition cursor-pointer"
                >
                  Inquire Royal Tour
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {packageHighlights.map((hl, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm hover:border-emerald-600 transition space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-[#d97706] font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#082318] text-base">{hl.title}</h3>
              <p className="text-xs text-[#517362] leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: DETAILED ITINERARY */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Expedition Day-by-Day Schedule
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">An immersive journey across prime jungle habitats, river wildlife, and royal heritage.</p>
          </div>

          <div className="space-y-4">
            {itinerary.map((dayItem, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d2e4d9] shadow-sm space-y-4">
                <div className="border-b border-[#e2ede6] pb-3 flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#d97706]">{dayItem.day}</h3>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Day 0{idx + 1}</span>
                </div>
                <div className="space-y-2.5">
                  {dayItem.schedule.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs">
                      <span className="w-20 shrink-0 font-mono font-bold text-[#d97706] pt-0.5">{item.time}</span>
                      <p className="text-[#375847] leading-relaxed">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INCLUSIONS */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] shadow-sm space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            VIP Inclusions Breakdown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {inclusions.map(inc => (
              <div key={inc} className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <span className="text-[#375847]">{inc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: RESORT EXPERIENCE */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            5-Star Wilderness &amp; Palace Stays
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <Hotel className="w-6 h-6 text-[#d97706]" />
              <h3 className="font-bold text-[#082318] text-base">Royal Suites &amp; Tents</h3>
              <p className="text-[#517362]">Private sit-outs, marble bathrooms, antique four-poster beds, and butler assistance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <Sparkles className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-[#082318] text-base">Ayurvedic Spa &amp; Wellness</h3>
              <p className="text-[#517362]">Rejuvenate tired muscles after a bumpy safari with signature herbal massages.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <Award className="w-6 h-6 text-teal-700" />
              <h3 className="font-bold text-[#082318] text-base">Royal Dining Experience</h3>
              <p className="text-[#517362]">Authentic Shikari curries, clay-oven kebabs, and candlelit courtyard dining under stars.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Royal Expedition FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
                <h3 className="font-bold text-[#082318] text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#375847] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-[#92400e] text-white text-center space-y-6 shadow-xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Reserve Your 3N/4D Royal Tiger Expedition
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Experience the untamed royalty of Rajasthan in grand style. Speak with our luxury safari concierge for bespoke customization.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ packageSelected: '3N/4D Royal Tiger Expedition' })}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-[#082318] font-bold text-sm shadow-xl transition cursor-pointer"
            >
              Book Royal Expedition
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-400/40 text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-200" />
              <span>Call Concierge: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
