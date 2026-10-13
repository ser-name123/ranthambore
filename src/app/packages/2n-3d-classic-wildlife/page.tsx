'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Package, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Hotel,
  Car,
  Coffee,
  MapPin,
  Compass
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ClassicWildlifePackagePage() {
  const { openBookingModal } = useBookingModal();

  const packageHighlights = [
    { title: '2 Jungle Safaris Included', desc: 'Experience 2 thrilling open Gypsy or Canter drives across Ranthambore tiger zones.' },
    { title: '2 Nights 4-Star Resort Stay', desc: 'Air-conditioned luxury deluxe cottage or luxury Swiss tent with pool.' },
    { title: 'All Meals Included (Buffet)', desc: '2 Breakfasts, 2 Lunches, and 2 Dinners prepared with fresh local Rajasthani flavours.' },
    { title: 'Station Pickup & Drop', desc: 'Complimentary private transfer from Sawai Madhopur Junction railway station.' },
  ];

  const itinerary = [
    {
      day: 'Day 1: Arrival, Check-In & Evening Safari',
      schedule: [
        { time: '12:00 PM', activity: 'Arrive at Sawai Madhopur station. Private escort to your luxury jungle resort. Welcome drink & check-in.' },
        { time: '01:30 PM', activity: 'Buffet lunch at the resort restaurant.' },
        { time: '02:30 PM', activity: 'Board your first afternoon jungle safari drive. Track tigers, leopards, and crocodiles till sunset.' },
        { time: '06:30 PM', activity: 'Return to resort. Evening tea, traditional Rajasthani folk music & bonfire.' },
        { time: '08:30 PM', activity: 'Sumptuous multi-cuisine dinner.' },
      ],
    },
    {
      day: 'Day 2: Morning Safari & Ranthambore Fort Trek',
      schedule: [
        { time: '06:00 AM', activity: 'Early morning wake-up call with tea & cookies.' },
        { time: '06:30 AM', activity: 'Depart for your second jungle safari drive into the core forest. Dawn birding & tiger tracking.' },
        { time: '10:30 AM', activity: 'Return to resort for full hot breakfast & leisure time by the swimming pool.' },
        { time: '01:00 PM', activity: 'Buffet lunch.' },
        { time: '03:00 PM', activity: 'Guided afternoon excursion to the 10th-century UNESCO World Heritage Ranthambore Fort & Trinetra Ganesha Temple.' },
        { time: '08:00 PM', activity: 'Dinner & overnight stay.' },
      ],
    },
    {
      day: 'Day 3: Nature Walk, Breakfast & Departure',
      schedule: [
        { time: '07:30 AM', activity: 'Guided village walk / organic farm visit / sunrise nature trail.' },
        { time: '09:00 AM', activity: 'Grand farewell breakfast.' },
        { time: '11:00 AM', activity: 'Pack memories, check out, and private transfer to Sawai Madhopur railway station for onward journey.' },
      ],
    },
  ];

  const inclusions = [
    '2 Nights accommodation in Deluxe Resort on twin sharing basis',
    '2 Jungle Safaris (Gypsy or Canter based on package selection)',
    'All forest entry permits, vehicle taxes & government cess',
    'Licensed Forest Department naturalist guide for both safaris',
    'Meals on Full Board (2 Breakfasts, 2 Lunches, 2 Dinners)',
    'Complimentary Sawai Madhopur station pickup and drop',
    'Ranthambore Fort guided sightseeing trip',
  ];

  const exclusions = [
    'Train or flight tickets to Sawai Madhopur',
    'Personal expenses like laundry, phone calls, room service',
    'Alcoholic beverages and packaged mineral water bottles',
    'Tips for driver and forest guides',
    'Any safari drives beyond the 2 included drives',
  ];

  const faqs = [
    {
      q: 'Can we upgrade from Canter to Gypsy in this package?',
      a: 'Yes! We offer both Canter sharing packages (from ₹9,500 per person) and private Gypsy packages (from ₹13,500 per person). Custom upgrades are available upon enquiry.',
    },
    {
      q: 'Are resort stays kid-friendly?',
      a: 'Absolutely! Our partner resorts feature expansive lush lawns, fenced swimming pools, children play equipment, and special mild food options upon request.',
    },
    {
      q: 'Which resort will we be staying at?',
      a: 'We partner with vetted 4-star properties such as Ranthambore Regency, Tiger Den Resort, The Tigress, and Jungle Cave Resort based on your chosen date and inventory tier.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#0e0d0c] text-[#f4efea] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />

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
            <span className="text-[#f59e0b] font-semibold">2N/3D Classic Wildlife Package</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#ea580c] text-xs font-bold uppercase tracking-wider border border-[#ea580c]/30">
                <Package className="w-3.5 h-3.5" />
                Weekend Wildlife Retreat • 2 Nights / 3 Days
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                2N/3D Classic Wildlife <span className="text-[#ea580c]">Package</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                The ultimate weekend safari escape to Ranthambore. Includes 2 tiger safaris, 4-star wilderness resort accommodation, delicious buffet meals, and station transfers.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#161412] border border-[#2d241d] space-y-3 shrink-0 text-center sm:text-left">
              <span className="text-xs text-[#8a8175] block">Starting from</span>
              <div className="flex items-baseline gap-1">
                <span className="font-serif text-3xl font-bold text-white">₹9,500</span>
                <span className="text-xs text-[#8a8175]">/ person</span>
              </div>
              <button
                onClick={() => openBookingModal({ packageSelected: '2N/3D Classic Wildlife Package' })}
                className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-xs shadow-lg transition cursor-pointer"
              >
                Book Package Now
              </button>
            </div>
          </div>
        </section>

        {/* SECTION 2: HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {packageHighlights.map((hl, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/15 flex items-center justify-center text-[#ea580c] font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-white text-base">{hl.title}</h3>
              <p className="text-xs text-[#8a8175] leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: DAY-WISE DETAILED ITINERARY */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Day-by-Day Tour Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">A relaxed yet action-packed wildlife itinerary crafted for optimal wildlife viewing.</p>
          </div>

          <div className="space-y-6">
            {itinerary.map((dayItem, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-[#161412] border border-[#28221b] space-y-4">
                <div className="border-b border-[#26211b] pb-3 flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-amber-400">{dayItem.day}</h3>
                  <span className="text-xs font-bold text-[#8a8175]">Step 0{idx + 1}</span>
                </div>
                <div className="space-y-3">
                  {dayItem.schedule.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs">
                      <span className="w-20 shrink-0 font-mono font-bold text-[#ea580c] pt-0.5">{item.time}</span>
                      <p className="text-[#c4b5a3] leading-relaxed">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INCLUSIONS & EXCLUSIONS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 sm:p-8 rounded-3xl bg-[#161412] border border-emerald-500/30 space-y-4">
            <h3 className="font-serif text-xl font-bold text-emerald-400 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
              What is Included
            </h3>
            <ul className="space-y-2.5 text-xs text-[#a89985]">
              {inclusions.map(inc => (
                <li key={inc} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-[#161412] border border-[#28221b] space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#8a8175] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#8a8175]" />
              What is Excluded
            </h3>
            <ul className="space-y-2.5 text-xs text-[#73685c]">
              {exclusions.map(exc => (
                <li key={exc} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#73685c] shrink-0 mt-1.5" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: RESORT CHOICES */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Comfortable Jungle Resort Stays
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e241d] space-y-2">
              <Hotel className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-white text-sm">Deluxe AC Cottages</h3>
              <p className="text-[#8a8175]">Spacious private cottage rooms with ensuite bathrooms, wooden furniture &amp; garden verandas.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e241d] space-y-2">
              <Coffee className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Delicious Buffet Dining</h3>
              <p className="text-[#8a8175]">Hygienic multi-cuisine spreads with Indian curries, continental breakfast &amp; Rajasthani Dal Baati.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e241d] space-y-2">
              <Sparkles className="w-6 h-6 text-[#ea580c]" />
              <h3 className="font-bold text-white text-sm">Swimming Pool &amp; Lawns</h3>
              <p className="text-[#8a8175]">Relax amidst manicured lawns, take a refreshing dip, or enjoy stargazing by the open bonfire.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Package FAQs
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
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#211a14] via-[#1c1713] to-[#261d15] border border-[#ea580c]/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Reserve Your 2N/3D Weekend Wildlife Tour
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
              Customizable for couples, families, and corporate groups. Lock in early permits and discounted resort rates with our local desk.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ packageSelected: '2N/3D Classic Wildlife Package' })}
              className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold text-sm shadow-xl transition cursor-pointer"
            >
              Book 2N/3D Package
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>Call Specialist: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
