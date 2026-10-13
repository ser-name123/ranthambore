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
  AlertCircle,
  HelpCircle,
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useBookingModal } from '@/context/BookingModalContext';

export default function GypsySafariPage() {
  const { openBookingModal } = useBookingModal();

  const pricingTiers = [
    {
      title: 'Sharing Gypsy Seat (Indian)',
      price: '₹2,300',
      unit: 'per person / drive',
      badge: 'Most Popular',
      specs: [
        'Sharing with up to 5 other wildlife enthusiasts',
        'Official Rajasthan Forest Dept Permit included',
        'Certified English & Hindi Naturalist Guide',
        'Authorized 4x4 Gypsy & Forest Driver fees',
        'Hotel pickup & drop within Sawai Madhopur',
      ],
      quota: 'Subject to Govt. Shift Quota',
    },
    {
      title: 'Full Exclusive Gypsy (Indian)',
      price: '₹13,800',
      unit: 'complete vehicle (up to 6 pax)',
      badge: 'Recommended for Families',
      specs: [
        'All 6 passenger seats exclusively for your group',
        'Unrestricted 360° photography movement',
        'Dedicated forest driver & seasoned tracker',
        'Full hotel door-to-door private pickup',
        'Customized pace for birders & photographers',
      ],
      quota: 'Instant Group Allocation',
    },
    {
      title: 'Sharing Gypsy (Foreign Nationals)',
      price: '₹4,600',
      unit: 'per person / drive',
      badge: 'International Guests',
      specs: [
        'Foreign national government entrance permit',
        'Fluent English-speaking naturalist guide',
        'Park entry fee, vehicle fee & guide tax included',
        'Sawai Madhopur resort transfer included',
        'Passport registration & verification assistance',
      ],
      quota: 'Advance Passport Verification',
    },
    {
      title: 'Full Exclusive Gypsy (Foreign)',
      price: '₹27,600',
      unit: 'private vehicle (up to 6 pax)',
      badge: 'VIP International',
      specs: [
        'Private Gypsy for up to 6 international guests',
        'Top-rated senior tiger tracker & guide',
        'Permit documentation & gate coordination',
        'Priority hotel pickup in luxury resort sector',
        'Ample space for telephoto lenses & tripods',
      ],
      quota: 'VIP Advance Quota',
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
      q: 'How many people can sit in a Maruti Gypsy?',
      a: 'The Maruti Gypsy accommodates a maximum of 6 tourists per vehicle, plus 1 registered Rajasthan Forest Department naturalist guide and 1 authorized park driver.',
    },
    {
      q: 'Can we choose our preferred safari zone in a Gypsy?',
      a: 'You can submit your preference for Core Zones (1 to 5) or Buffer Zones (6 to 10) at the time of enquiry. The Rajasthan Forest Department allocation software assigns final zones based on daily quota availability.',
    },
    {
      q: 'Are children charged full price for a Gypsy seat?',
      a: 'Children aged 5 years and above require a full seat and permit. Children under 5 years of age can travel on parent lap free of government park entry fees, but original ID must still be presented.',
    },
    {
      q: 'What should we carry during the Gypsy safari?',
      a: 'You must carry the exact original Government Photo ID (Aadhaar/Passport) used during booking, warm layers for winter mornings, UV sunglasses, dust mask/scarf, and camera gear with dust covers.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#06150f] text-[#f2f7f4] overflow-hidden">
      {/* Ambient background accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#16432f]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* SECTION 1: BREADCRUMB & HERO WITH PHOTO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#86a898]">
            <Link href="/" className="hover:text-emerald-400 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-700" />
            <span className="text-[#f59e0b] font-semibold">Maruti Gypsy Safari</span>
          </nav>

          <div className="relative rounded-3xl overflow-hidden border border-[#16432f] p-8 sm:p-12 shadow-2xl">
            <div className="absolute inset-0">
              <Image
                src="/images/gypsy_encounter.jpg"
                alt="Maruti Gypsy safari watching tiger cross jungle trail"
                fill
                className="object-cover object-center opacity-30"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06150f] via-[#06150f]/85 to-[#06150f]/50" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30">
                  <Car className="w-3.5 h-3.5 text-[#f59e0b]" />
                  Official 4x4 Wildlife Vehicle
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                  Maruti Gypsy Safari <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-[#f59e0b]">(6-Seater 4x4)</span>
                </h1>
                <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed">
                  The quintessential Ranthambore wildlife experience. High-clearance four-wheel-drive agility, 360-degree open wilderness visibility, and unrestricted access to the deepest rocky ravines of Zones 1 to 10.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ vehicle: 'Maruti Gypsy (6-Seater 4x4)' })}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-[#f59e0b] hover:from-emerald-500 hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-emerald-950/50 transition cursor-pointer"
                >
                  Book Gypsy Permit
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20inquire%20about%20Maruti%20Gypsy%20Safari%20booking%20at%20Ranthambore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#092218] hover:bg-[#113123] text-emerald-400 border border-[#16432f] font-bold text-sm flex items-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                  <span>WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: KEY VEHICLE SPECIFICATIONS */}
        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <Users className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-base">6 Guests Max</h3>
            <p className="text-xs text-[#86a898]">Open seating with dedicated guide and driver upfront.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <Compass className="w-6 h-6 text-[#f59e0b]" />
            <h3 className="font-bold text-white text-base">4x4 Mountain Agility</h3>
            <p className="text-xs text-[#86a898]">Climbs steep rocky trails in Zone 1, 2, and 3 easily.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <Camera className="w-6 h-6 text-emerald-400" />
            <h3 className="font-bold text-white text-base">360° Photography</h3>
            <p className="text-xs text-[#86a898]">No window pillars or roof obstruction for lenses.</p>
          </div>
          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <Clock className="w-6 h-6 text-teal-400" />
            <h3 className="font-bold text-white text-base">3.5 Hours Duration</h3>
            <p className="text-xs text-[#86a898]">Deep trail exploration in morning or afternoon shifts.</p>
          </div>
        </section>

        {/* SECTION 3: GYPSY PRICING & TIER BREAKDOWN */}
        <section className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Authorized Gypsy Safari <span className="text-emerald-400">Pricing &amp; Options</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">
              Transparent per-person sharing seats and private group bookings. Includes all park taxes, driver allowances, and naturalist fees.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map(tier => (
              <div
                key={tier.title}
                className="rounded-2xl bg-[#092218] border border-[#16432f] p-6 flex flex-col justify-between hover:border-emerald-500/50 transition duration-300 relative group"
              >
                <div className="space-y-4">
                  <span className="inline-block px-2.5 py-1 rounded-md text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-300 border border-emerald-500/30">
                    {tier.badge}
                  </span>
                  <div>
                    <h3 className="font-bold text-white text-base">{tier.title}</h3>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="font-serif text-2xl sm:text-3xl font-bold text-white">{tier.price}</span>
                      <span className="text-[11px] text-[#86a898]">{tier.unit}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 pt-2 border-t border-[#16432f] text-xs text-[#c2d7cd]">
                    {tier.specs.map(spec => (
                      <li key={spec} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{spec}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-4 border-t border-[#16432f] space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#86a898]">
                    <span>Govt Status</span>
                    <span className="text-amber-400 font-semibold">{tier.quota}</span>
                  </div>
                  <button
                    onClick={() => openBookingModal({ vehicle: `Gypsy - ${tier.title}` })}
                    className="w-full py-2.5 rounded-xl bg-[#06150f] hover:bg-emerald-600 text-white text-xs font-bold border border-[#16432f] hover:border-emerald-500 transition cursor-pointer"
                  >
                    Select &amp; Inquire
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SHIFT TIMINGS & SEASONAL SCHEDULE TABLE */}
        <section className="space-y-6 rounded-3xl bg-[#092218] border border-[#16432f] p-6 sm:p-10">
          <div className="max-w-2xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <Clock className="w-3.5 h-3.5" />
              Official Rajasthan Forest Department Timings
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Gypsy Safari Shift Schedules (2026–2027)
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">
              Entry times change with sunrise and sunset to ensure safe navigation and optimum wildlife activity.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#16432f] text-[#86a898] uppercase text-[11px] font-bold">
                  <th className="py-3 px-4">Period / Month</th>
                  <th className="py-3 px-4 text-emerald-400">Morning Shift</th>
                  <th className="py-3 px-4 text-[#f59e0b]">Afternoon Shift</th>
                  <th className="py-3 px-4">Reporting Time</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#16432f]">
                {shiftTimings.map((shift, idx) => (
                  <tr key={idx} className="hover:bg-[#0c2a1e] transition">
                    <td className="py-3.5 px-4 font-semibold text-white">{shift.period}</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-mono">{shift.morning}</td>
                    <td className="py-3.5 px-4 text-[#f59e0b] font-mono">{shift.afternoon}</td>
                    <td className="py-3.5 px-4 text-[#86a898]">30 mins before gate entry</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 5: RECOMMENDED ZONES & PHOTOGRAPHY GUIDE */}
        <section className="space-y-8">
          <div className="max-w-3xl space-y-3">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Why Maruti Gypsy Outperforms for Tiger Tracking
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898] leading-relaxed">
              Ranthambore&apos;s terrain is renowned for rocky plateaus, dry deciduous forests, and river beds. The compact 4x4 Maruti Gypsy can navigate tight corners where tigers often stalk chital deer, giving you front-row vantage points impossible in larger vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-3">
              <h3 className="font-bold text-white text-sm text-[#f59e0b]">Agile Forest Maneuvering</h3>
              <p className="text-[#c2d7cd] leading-relaxed">
                When fresh tiger pugmarks or deer alarm calls echo through the valley, drivers can quickly reverse and redirect into narrow ravines without disturbing the wildlife.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-3">
              <h3 className="font-bold text-white text-sm text-emerald-400">Eye-Level Photography Angles</h3>
              <p className="text-[#c2d7cd] leading-relaxed">
                Unlike buses with elevated views, the Gypsy sits low enough to capture dramatic eye-level portraits of big cats, sloths, and leopards against the ancient Banyan trees.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-3">
              <h3 className="font-bold text-white text-sm text-teal-400">Silent Engine Stalking</h3>
              <p className="text-[#c2d7cd] leading-relaxed">
                Lightweight petrol engines create minimal vibrations, allowing birds, crocodiles, and deer herds to continue their natural behaviors undisturbed.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: MANDATORY RULES & CHECKLIST */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#092218] border border-[#16432f] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h3 className="font-serif text-xl font-bold text-white">Government ID &amp; Boarding Checklist</h3>
              <p className="text-xs text-[#86a898]">Follow these Rajasthan Forest Department guidelines strictly.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1.5">
              <p className="font-bold text-white">1. Carry Exact Original ID</p>
              <p className="text-[#86a898]">The Forest Ranger at the gate matches original Aadhaar / Passport with the printed permit voucher. No photocopies or phone images permitted.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1.5">
              <p className="font-bold text-white">2. Stay Inside Vehicle at All Times</p>
              <p className="text-[#86a898]">Alighting from the Gypsy inside the core reserve is strictly prohibited and carries severe government fines.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1.5">
              <p className="font-bold text-white">3. Neutral Color Clothing</p>
              <p className="text-[#86a898]">Wear khaki, olive green, beige, or brown. Bright neon colors disturb territorial animals.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1.5">
              <p className="font-bold text-white">4. No Plastic &amp; No Drones</p>
              <p className="text-[#86a898]">Ranthambore is a zero-plastic zone. Drones and flash photography are illegal under the Wildlife Protection Act.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: FAQS & INSTANT BOOKING CTA */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Frequently Asked Questions (Maruti Gypsy)
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">Got queries before reserving your Gypsy? Here are quick answers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#c2d7cd] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* Bottom High-Conversion Banner */}
          <div className="p-8 sm:p-12 rounded-3xl bg-[#092218] border border-emerald-500/30 text-center space-y-6 shadow-2xl relative overflow-hidden">
            <div className="max-w-2xl mx-auto space-y-3">
              <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                Limited Quota Notice
              </span>
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Only 48 Gypsy Permits Available Per Shift
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed">
                Govt quotas for core zones (Zones 1-5) often book out 60 to 90 days in advance. Speak with our Sawai Madhopur booking desk today to lock in your dates.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ vehicle: 'Maruti Gypsy (6-Seater 4x4)' })}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-[#f59e0b] hover:from-emerald-500 hover:to-[#ea580c] text-white font-bold text-sm shadow-xl transition cursor-pointer"
              >
                Inquire Gypsy Availability
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-[#06150f] hover:bg-[#113123] border border-[#16432f] text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Hotline: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
