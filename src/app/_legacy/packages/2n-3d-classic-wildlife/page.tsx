'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Package, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  HelpCircle,
  Hotel,
  Coffee,
  Camera
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref } from '@/lib/site-content';

export default function ClassicWildlifePackagePage() {
  const { contact } = useSiteContent();
  const { openBookingModal } = useBookingModal();

  const packageHighlights = [
    { title: '2 Jungle Safaris', desc: 'Thrilling open Gypsy or Canter drives across Ranthambore tiger zones.' },
    { title: '4-Star Resort Stay', desc: 'AC deluxe cottage or Swiss tent with swimming pool.' },
    { title: 'All Meals Included', desc: 'Delicious buffet breakfasts, lunches, and dinners with local specialties.' },
    { title: 'Station Pickup & Drop', desc: 'Private transfer from Sawai Madhopur Junction railway station.' },
  ];

  const itinerary = [
    {
      day: 'Day 1: Arrival, Check-In & Evening Safari',
      schedule: [
        { time: '12:00 PM', activity: 'Arrive at Sawai Madhopur station. Private escort to luxury jungle resort & check-in.' },
        { time: '01:30 PM', activity: 'Buffet lunch at the resort dining hall.' },
        { time: '02:30 PM', activity: 'Board your first afternoon tiger safari into the jungle. Return at sunset.' },
        { time: '07:30 PM', activity: 'Evening folk music by the bonfire followed by dinner.' },
      ],
    },
    {
      day: 'Day 2: Morning Safari & Ranthambore Fort',
      schedule: [
        { time: '06:00 AM', activity: 'Early morning core zone tiger safari. Track predators at dawn.' },
        { time: '10:30 AM', activity: 'Hearty breakfast & leisure time by the swimming pool.' },
        { time: '03:00 PM', activity: 'Guided visit to the 10th-century UNESCO Ranthambore Fort & Trinetra Ganesha Temple.' },
        { time: '08:00 PM', activity: 'Dinner & overnight stay.' },
      ],
    },
    {
      day: 'Day 3: Breakfast & Departure',
      schedule: [
        { time: '08:30 AM', activity: 'Breakfast amidst bird songs and lush green surroundings.' },
        { time: '11:00 AM', activity: 'Check out and transfer to Sawai Madhopur station.' },
      ],
    },
  ];

  const inclusions = [
    '2 Nights accommodation in Deluxe Resort on twin sharing basis',
    '2 Jungle Safaris (Gypsy or Canter based on booking)',
    'All forest entry permits, vehicle taxes & government cess',
    'Licensed Forest Department naturalist guide for both safaris',
    'Full board meals (Breakfast, Lunch & Dinner)',
    'Sawai Madhopur station pickup & drop',
    'Ranthambore Fort excursion assistance',
  ];

  const exclusions = [
    'Train or flight tickets to Sawai Madhopur',
    'Personal expenses & room service',
    'Packaged alcohol & soft drinks',
    'Tips for naturalist and safari driver',
  ];

  const faqs = [
    {
      q: 'Can we upgrade from Canter to Gypsy in this package?',
      a: 'Yes! Both Canter sharing and private 6-seater Gypsy options are available with customizable pricing.',
    },
    {
      q: 'Are resort stays kid-friendly?',
      a: 'Yes, partner resorts feature swimming pools, sprawling lawns, and child-friendly meal options.',
    },
    {
      q: 'Which resort will we be staying at?',
      a: 'We partner with vetted 4-star properties such as Ranthambore Regency, Tiger Den, and The Tigress.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

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
            <span className="text-[#d97706] font-semibold">2N/3D Classic Wildlife</span>
          </nav>

          {/* Visual Hero Banner with Tiger Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-[#f4f8f5] shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_portrait.jpg"
                alt="Royal Bengal Tiger in Ranthambore"
                fill
                priority
                className="object-cover object-center opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/50" />
            </div>

            <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 backdrop-blur-md">
                  <Package className="w-3.5 h-3.5 text-[#d97706]" />
                  Weekend Wildlife Retreat • 2 Nights / 3 Days
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                  2N/3D Classic Wildlife <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d97706]">Package</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  The ideal weekend wilderness escape. Includes 2 game drives into prime tiger territory, 4-star resort stay, buffet meals, and station transfers.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-[#d2e4d9] space-y-3 shrink-0 text-center sm:text-left shadow-lg">
                <span className="text-xs text-[#517362] block font-medium">All-inclusive from</span>
                <div className="flex items-baseline gap-1">
                  <span className="font-serif text-3xl font-bold text-[#082318]">₹9,500</span>
                  <span className="text-xs text-[#517362]">/ person</span>
                </div>
                <button
                  onClick={() => openBookingModal({ packageSelected: '2N/3D Classic Wildlife Package' })}
                  className="w-full py-2.5 px-6 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-xs shadow-md transition cursor-pointer"
                >
                  Book Package Now
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {packageHighlights.map((hl, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm hover:border-emerald-600 transition space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#082318] text-base">{hl.title}</h3>
              <p className="text-xs text-[#517362] leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: DAY-WISE ITINERARY */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Day-by-Day Safari Itinerary
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Action-packed wildlife schedule crafted for optimal tiger viewing.</p>
          </div>

          <div className="space-y-4">
            {itinerary.map((dayItem, idx) => (
              <div key={idx} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d2e4d9] shadow-sm space-y-4">
                <div className="border-b border-[#e2ede6] pb-3 flex items-center justify-between">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#d97706]">{dayItem.day}</h3>
                  <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Step 0{idx + 1}</span>
                </div>
                <div className="space-y-2.5">
                  {dayItem.schedule.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 text-xs">
                      <span className="w-20 shrink-0 font-mono font-bold text-emerald-700 pt-0.5">{item.time}</span>
                      <p className="text-[#375847] leading-relaxed">{item.activity}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: INCLUSIONS & EXCLUSIONS */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-emerald-300 shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-emerald-800 flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-emerald-700" />
              What is Included
            </h3>
            <ul className="space-y-2.5 text-xs text-[#375847]">
              {inclusions.map(inc => (
                <li key={inc} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                  <span>{inc}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d2e4d9] shadow-sm space-y-4">
            <h3 className="font-serif text-xl font-bold text-[#517362] flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-[#517362]" />
              What is Excluded
            </h3>
            <ul className="space-y-2.5 text-xs text-[#517362]">
              {exclusions.map(exc => (
                <li key={exc} className="flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d2e4d9] shrink-0 mt-1.5" />
                  <span>{exc}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* SECTION 5: RESORT CHOICES */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] shadow-sm space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Comfortable Jungle Resort Stays
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <Hotel className="w-6 h-6 text-[#d97706]" />
              <h3 className="font-bold text-[#082318] text-sm">Deluxe AC Cottages</h3>
              <p className="text-[#517362]">Spacious cottages with ensuite bathrooms, wooden furniture & private garden verandas.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <Coffee className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-[#082318] text-sm">Delicious Buffet Dining</h3>
              <p className="text-[#517362]">Hygienic multi-cuisine spreads with Indian curries, continental breakfast & Rajasthani Dal Baati.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <Sparkles className="w-6 h-6 text-teal-700" />
              <h3 className="font-bold text-[#082318] text-sm">Swimming Pool & Lawns</h3>
              <p className="text-[#517362]">Relax amidst green manicured lawns, take a refreshing dip, or enjoy stargazing by the open bonfire.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Package FAQs
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
        <section className="p-8 sm:p-12 rounded-3xl border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/70 text-[#082318] shadow-xl shadow-emerald-950/5 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#082318]">
              Reserve Your 2N/3D Weekend Wildlife Tour
            </h2>
            <p className="text-xs sm:text-base text-[#1b3a2a] leading-relaxed">
              Customizable for couples, families, and wildlife enthusiasts. Lock in early permits and best resort cottages with our local team.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ packageSelected: '2N/3D Classic Wildlife Package' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition cursor-pointer"
            >
              Book 2N/3D Package
            </button>
            <a
              href={telHref(contact.phonePrimary)}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 border-2 border-emerald-300 text-[#082318] font-bold text-sm flex items-center gap-2 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Specialist: {contact.phonePrimary}</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
