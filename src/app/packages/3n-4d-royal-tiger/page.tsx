'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Package, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Users, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Hotel,
  Car,
  Award,
  Crown
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
        { time: '11:00 AM', activity: 'Private luxury transfer arrival. Traditional Aarti, garland & welcome drink at your heritage palace resort.' },
        { time: '01:00 PM', activity: 'Gourmet Rajasthani lunch in the royal courtyard.' },
        { time: '02:30 PM', activity: 'Safari Drive 1: Afternoon core zone tracking. Sunset birding around Padam Talao.' },
        { time: '07:00 PM', activity: 'Evening wildlife documentary screening with bonfire and heritage folk dance performance.' },
        { time: '08:30 PM', activity: 'Royal multi-course dinner.' },
      ],
    },
    {
      day: 'Day 2: Core Zone Tracking & Fort Heritage Walk',
      schedule: [
        { time: '06:00 AM', activity: 'Wake-up call with piping hot masala chai & cookies.' },
        { time: '06:30 AM', activity: 'Safari Drive 2: Misty dawn safari exploring deep rocky ravines for big cats & sloth bears.' },
        { time: '11:00 AM', activity: 'Brunch at the resort followed by spa therapy relaxation or swimming pool leisure.' },
        { time: '02:30 PM', activity: 'Safari Drive 3: Afternoon drive covering alternative zones with active tiger cubs.' },
        { time: '07:30 PM', activity: 'Private candlelight dinner by the pool.' },
      ],
    },
    {
      day: 'Day 3: Dawn Safari & Chambal River Excursion',
      schedule: [
        { time: '06:30 AM', activity: 'Safari Drive 4: Final morning tiger tracking drive with senior naturalist tracker.' },
        { time: '11:00 AM', activity: 'Hearty breakfast and short rest.' },
        { time: '01:30 PM', activity: 'Excursion to the pristine National Chambal Sanctuary (Palighat) for motorboat river safari. Spot Gharials, Marsh Crocodiles, and migratory birds.' },
        { time: '06:00 PM', activity: 'Visit the 10th-century Ranthambore Fort and Trinetra Ganesha Temple.' },
        { time: '08:30 PM', activity: 'Farewell Gala dinner with chef special delights.' },
      ],
    },
    {
      day: 'Day 4: Sunrise Walk & Departure',
      schedule: [
        { time: '08:00 AM', activity: 'Organic farm breakfast & peaceful nature stroll.' },
        { time: '11:00 AM', activity: 'Check out with souvenir wildlife book and private transfer to Jaipur Airport or Sawai Madhopur station.' },
      ],
    },
  ];

  const inclusions = [
    '3 Nights accommodation in 5-Star Heritage / Wilderness Resort',
    '4 Comprehensive Jungle Safaris in private Maruti Gypsy vehicles',
    'All forest entry permits, vehicle entry charges & guide fees',
    'Personal senior naturalist tracker dedicated to your group',
    'All meals on Full Board (3 Breakfasts, 3 Lunches, 3 Dinners)',
    'Motorboat safari at National Chambal River Crocodile Sanctuary',
    'Guided Ranthambore Fort excursion with historian guide',
    'Complimentary Railway Station / Hotel private transfers',
  ];

  const faqs = [
    {
      q: 'Why take 4 safaris instead of 1 or 2?',
      a: 'Tigers are wild predators that roam vast territories. Taking 4 safaris across 3 full days gives you morning and evening coverage across different core and buffer zones, increasing your cumulative tiger sighting probability to over 95%.',
    },
    {
      q: 'Can this package be customized with Jaipur pickup and drop?',
      a: 'Yes, private round-trip transfers from Jaipur Airport or Delhi NCR in an air-conditioned Innova Crysta can easily be added to your booking dossier.',
    },
    {
      q: 'Are all forest permits guaranteed for private Gypsies?',
      a: 'Yes, when booked in advance, our VIP team secures exclusive Maruti Gypsy permits registered directly under your passenger names.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#0e0d0c] text-[#f4efea] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#a89985]">
            <Link href="/" className="hover:text-[#ea580c] transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <Link href="/tour-packages" className="hover:text-[#ea580c] transition">Tour Packages</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-amber-400 font-semibold">3N/4D Royal Tiger Expedition</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <Crown className="w-3.5 h-3.5" />
                Ultra-Luxury Wildlife Tour • 3 Nights / 4 Days
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                3N/4D Royal Tiger <span className="text-amber-400">Expedition</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                The pinnacle of Ranthambore wildlife luxury. 4 private tiger safaris, 5-star heritage palace accommodation, Chambal river crocodile cruise, and dedicated naturalist escort.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161412] border border-[#2d241d] space-y-3 shrink-0 text-center sm:text-left">
              <span className="text-xs text-[#8a8175] block">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl font-bold text-amber-400">₹18,500</span>
                <span className="text-xs text-[#8a8175]">/ person</span>
              </div>
              <button
                onClick={() => openBookingModal({ packageSelected: '3N/4D Royal Tiger Expedition' })}
                className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-amber-500 to-[#ea580c] hover:from-amber-400 hover:to-[#f97316] text-stone-950 font-bold text-xs shadow-lg transition cursor-pointer"
              >
                Inquire Royal Tour
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packageHighlights.map((hl, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 flex items-center justify-center text-amber-400 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-white text-base">{hl.title}</h3>
              <p className="text-xs text-[#8a8175] leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: DETAILED ITINERARY */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Expedition Day-by-Day Schedule
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">An immersive, slow-paced luxury journey across forest, river, and royal heritage.</p>
          </div>

          <div className="space-y-6">
            {itinerary.map((dayItem, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-[#161412] border border-[#28221b] space-y-4">
                <div className="border-b border-[#26211b] pb-3 flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-400">{dayItem.day}</h3>
                  <span className="text-xs font-bold text-[#8a8175]">Day 0{idx + 1}</span>
                </div>
                <div className="space-y-3">
                  {dayItem.schedule.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs">
                      <span className="w-20 shrink-0 font-mono font-bold text-amber-400 pt-0.5">{item.time}</span>
                      <p className="text-[#c4b5a3] leading-relaxed">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INCLUSIONS */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            VIP Inclusions Breakdown
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            {inclusions.map(inc => (
              <div key={inc} className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span className="text-[#c4b5a3]">{inc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: RESORT EXPERIENCE */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            5-Star Wilderness &amp; Palace Stays
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <Hotel className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-white text-base">Royal Suites &amp; Tents</h3>
              <p className="text-[#8a8175]">Private sit-outs, marble bathrooms, antique four-poster beds, and butler assistance.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <Sparkles className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-base">Ayurvedic Spa &amp; Wellness</h3>
              <p className="text-[#8a8175]">Rejuvenate tired muscles after a bumpy safari with signature herbal massages.</p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <Award className="w-6 h-6 text-[#ea580c]" />
              <h3 className="font-bold text-white text-base">Royal Dining Experience</h3>
              <p className="text-[#8a8175]">Authentic Shikari curries, clay-oven kebabs, and candlelit courtyard dining under stars.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Royal Expedition FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#161412] border border-[#26211b] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#a89985] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#211a14] via-[#1c1713] to-[#261d15] border border-amber-500/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Reserve Your 3N/4D Royal Tiger Expedition
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
              Experience the untamed royalty of Rajasthan in grand style. Speak with our luxury safari concierge for bespoke customization.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ packageSelected: '3N/4D Royal Tiger Expedition' })}
              className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-xl transition cursor-pointer"
            >
              Book Royal Expedition
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Concierge: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
