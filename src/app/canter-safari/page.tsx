'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  Camera, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Compass, 
  HelpCircle,
  Award
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function CanterSafariPage() {
  const { openBookingModal } = useBookingModal();

  const pricingTiers = [
    {
      title: 'Canter Seat (Indian Nationals)',
      price: '₹1,450',
      unit: 'per person / drive',
      badge: 'Best Value for Money',
      specs: [
        'Single or multiple seats in 20-passenger open bus',
        'Rajasthan Forest Department entry permit included',
        'Certified local naturalist guide onboard',
        'Official commercial driver & fuel surcharge',
        'Zone 1 to 10 allocation based on daily quota',
      ],
      quota: 'High Daily Availability',
    },
    {
      title: 'Full Exclusive Canter (Large Group)',
      price: '₹29,000',
      unit: 'complete bus (up to 20 pax)',
      badge: 'Schools, Corporates & Weddings',
      specs: [
        'Entire 20-seat Canter reserved exclusively for your party',
        'Private group briefing & dedicated naturalist',
        'Flexible boarding coordination from single resort',
        'Great for student nature study & corporate retreats',
        'Zero outsiders sharing your wildlife drive',
      ],
      quota: 'Custom Group Booking',
    },
    {
      title: 'Canter Seat (Foreign Nationals)',
      price: '₹3,200',
      unit: 'per person / drive',
      badge: 'International Travelers',
      specs: [
        'Foreign tourist government permit and taxes',
        'English commentary by licensed forest naturalist',
        'Seat reservation across core and buffer routes',
        'Passport registration verification support',
        'Ideal for solo backpackers & budget globetrotters',
      ],
      quota: 'Official Foreign Quota',
    },
  ];

  const shiftTimings = [
    { period: '1st Oct to 31st Oct', morning: '06:30 AM – 10:00 AM', afternoon: '02:30 PM – 06:00 PM' },
    { period: '1st Nov to 31st Jan', morning: '07:00 AM – 10:30 AM', afternoon: '02:00 PM – 05:30 PM' },
    { period: '1st Feb to 31st Mar', morning: '06:30 AM – 10:00 AM', afternoon: '02:30 PM – 06:00 PM' },
    { period: '1st Apr to 15th May', morning: '06:00 AM – 09:30 AM', afternoon: '03:00 PM – 06:30 PM' },
    { period: '16th May to 30th Jun', morning: '05:30 AM – 09:00 AM', afternoon: '03:30 PM – 07:00 PM' },
  ];

  const faqs = [
    {
      q: 'What is the difference between Canter and Gypsy?',
      a: 'The Canter is an elevated 20-seat open safari bus that gives a panoramic high vantage point over tall grasslands and lake beds, making it ideal for groups and budget-conscious travelers. The Gypsy is a smaller 6-seat 4x4 jeep best suited for narrow rocky trails and photography.',
    },
    {
      q: 'Do Canters go into the same tiger zones as Gypsies?',
      a: 'Yes! Canters are permitted in almost all designated core and buffer routes (Zones 1 through 10) on wide motorable trails. Many of Ranthambore’s famous tiger sightings occur right along the main tracks frequented by Canters.',
    },
    {
      q: 'Where do we board the Canter in Sawai Madhopur?',
      a: 'Depending on resort road width, Canters either provide direct pickup from main Ranthambore Road hotels or meet guests at nearby central checkposts like the Ranthambore Circle or Forest Gate chowki.',
    },
    {
      q: 'Is Canter safari safe for senior citizens and young kids?',
      a: 'Canters feature sturdy metal safety guardrails and wide cushioned bench seats, making them very secure for multi-generational families, elderly guests, and young children.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* SECTION 1: BREADCRUMB & HERO WITH CANTER PHOTO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[#d97706] font-semibold">Canter Safari Bus</span>
          </nav>

          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] p-8 sm:p-12 shadow-xl bg-[#f4f8f5]">
            <div className="absolute inset-0">
              <Image
                src="/images/canter_safari.jpg"
                alt="Open-top 20-seater Canter safari bus driving through Ranthambore forest"
                fill
                className="object-cover object-center opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Users className="w-3.5 h-3.5" />
                  20-Seater Open Safari Bus
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-tight">
                  Canter Safari Bus <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d97706]">(20-Seater Open Safari)</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Enjoy an elevated perspective across Ranthambore&apos;s grasslands, ancient fort ruins, and scenic lake shores. The most economical, group-friendly, and enjoyable way to explore the royal tiger kingdom.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ vehicle: 'Canter Safari Bus (20-Seater)' })}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-lg transition cursor-pointer"
                >
                  Reserve Canter Seats
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20check%20Canter%20safari%20seats%20availability%20for%20Ranthambore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SPECIFICATIONS BAR */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
            <Users className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-[#082318] text-base">20 Passengers</h3>
            <p className="text-xs text-[#517362]">Tiered bench rows for open views from every single seat.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
            <Compass className="w-6 h-6 text-[#d97706]" />
            <h3 className="font-bold text-[#082318] text-base">Elevated Vantage</h3>
            <p className="text-xs text-[#517362]">See over bushes and tall grasses across lakes easily.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
            <Award className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-[#082318] text-base">Economical Rates</h3>
            <p className="text-xs text-[#517362]">The most affordable ticket price for core &amp; buffer safaris.</p>
          </div>
          <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
            <Clock className="w-6 h-6 text-emerald-700" />
            <h3 className="font-bold text-[#082318] text-base">Same 3.5h Shift</h3>
            <p className="text-xs text-[#517362]">Exact same shift timing and duration as private Gypsies.</p>
          </div>
        </section>

        {/* SECTION 3: PRICING TIERS */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Canter Safari <span className="text-emerald-700">Ticket Pricing</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              All-inclusive seat reservations including Rajasthan Forest Department entry fees, vehicle tax, and government guide fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pricingTiers.map(tier => (
              <div
                key={tier.title}
                className="rounded-2xl bg-white border border-[#d2e4d9] p-6 flex flex-col justify-between hover:border-emerald-600 transition duration-300 relative group shadow-sm"
              >
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {tier.badge}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#082318] text-base">{tier.title}</h3>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">{tier.price}</span>
                      <span className="text-[11px] text-[#517362]">{tier.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#e2ede6] text-xs text-[#375847]">
                    {tier.specs.map(spec => (
                      <li key={spec} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#e2ede6] space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#517362]">
                    <span>Quota Type</span>
                    <span className="text-amber-700 font-semibold">{tier.quota}</span>
                  </div>
                  <button
                    onClick={() => openBookingModal({ vehicle: `Canter - ${tier.title}` })}
                    className="w-full py-2.5 rounded-xl bg-[#f4f8f5] hover:bg-emerald-700 hover:text-white text-[#082318] text-xs font-bold border border-[#d2e4d9] hover:border-emerald-700 transition cursor-pointer"
                  >
                    Inquire Seats
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SHIFT SCHEDULES */}
        <section className="space-y-6 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Canter Safari Timetable (2026–2027)
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Canters depart simultaneously with Gypsies during official morning and evening gate shifts.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#d2e4d9] shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#d2e4d9] text-emerald-900 bg-[#edf5f0] uppercase text-[11px] font-bold">
                  <th className="py-3 px-4">Season / Month</th>
                  <th className="py-3 px-4 text-emerald-700">Morning Shift</th>
                  <th className="py-3 px-4 text-[#d97706]">Afternoon Shift</th>
                  <th className="py-3 px-4">Boarding Instructions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ede6]">
                {shiftTimings.map((shift, idx) => (
                  <tr key={idx} className="hover:bg-[#f8faf8] transition">
                    <td className="py-3.5 px-4 font-semibold text-[#082318]">{shift.period}</td>
                    <td className="py-3.5 px-4 text-emerald-700 font-mono font-medium">{shift.morning}</td>
                    <td className="py-3.5 px-4 text-[#d97706] font-mono font-medium">{shift.afternoon}</td>
                    <td className="py-3.5 px-4 text-[#517362]">Report at hotel lobby 45m prior</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: ADVANTAGES FOR FAMILIES & GROUPS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Why Choose a Canter Safari?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-[#d97706]">Ideal for Big Travel Groups</h3>
              <p className="text-[#375847] leading-relaxed">
                Keep your entire family, college friends, or tour party together in a single open vehicle instead of splitting into multiple scattered Gypsies.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-emerald-700">Superior Lake Vistas</h3>
              <p className="text-[#375847] leading-relaxed">
                The Canter&apos;s height provides a magnificent clear view over the waters of Padam Talao and Rajbagh Lake, spotting basking mugger crocodiles and wading birds.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-teal-700">Better Last-Minute Availability</h3>
              <p className="text-[#375847] leading-relaxed">
                With 20 seats per vehicle, Canter permits are frequently available even when Gypsy quotas have completely sold out weeks in advance.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: WHAT TO CARRY & GUIDELINES */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-4 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#082318] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-800" />
            Canter Safari Dos and Don&apos;ts
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <p className="font-bold text-[#082318]">Keep Phones on Silent</p>
              <p className="text-[#517362]">Loud ringtones and notifications can cause animals to retreat back into dense undergrowth.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <p className="font-bold text-[#082318]">Remain Seated While Moving</p>
              <p className="text-[#517362]">Standing while the vehicle is negotiating dirt tracks is dangerous and against park rules.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <p className="font-bold text-[#082318]">Carry Jacket for Morning Drives</p>
              <p className="text-[#517362]">The open bus catches strong morning wind chill between November and February.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <p className="font-bold text-[#082318]">Camera Dust Protection</p>
              <p className="text-[#517362]">Use a dry bag or wrap your DSLR body and lenses to protect from dry forest dust.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQS & BOOKING BANNER */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Canter Safari FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Common questions from first-time Canter safari travellers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
                <h3 className="font-bold text-[#082318] text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#375847] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-[#92400e] text-white text-center space-y-6 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Book Your Canter Safari Seat in Seconds
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Planning a trip with friends or family? Reserve your seats with instant date confirmation and official forest receipt.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ vehicle: 'Canter Safari Bus (20-Seater)' })}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-[#082318] font-bold text-sm shadow-xl transition cursor-pointer"
              >
                Check Canter Dates
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-400/40 text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>Call Helpdesk: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
