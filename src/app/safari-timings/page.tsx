'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Clock, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Calendar, 
  Users, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Sun,
  Moon,
  AlertTriangle,
  Compass
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function SafariTimingsPage() {
  const { openBookingModal } = useBookingModal();

  const seasonalTimetable = [
    {
      period: '1st October to 31st October',
      morningGate: '06:30 AM',
      morningExit: '10:00 AM',
      afternoonGate: '02:30 PM',
      afternoonExit: '06:00 PM',
      notes: 'Park opens fresh after monsoon rejuvenation. Clear autumn skies.',
    },
    {
      period: '1st November to 31st January',
      morningGate: '07:00 AM',
      morningExit: '10:30 AM',
      afternoonGate: '02:00 PM',
      afternoonExit: '05:30 PM',
      notes: 'Winter mornings require heavy jackets and woolen caps. High predator activity.',
    },
    {
      period: '1st February to 31st March',
      morningGate: '06:30 AM',
      morningExit: '10:00 AM',
      afternoonGate: '02:30 PM',
      afternoonExit: '06:00 PM',
      notes: 'Pleasant spring weather, ideal lighting for wildlife photography.',
    },
    {
      period: '1st April to 15th May',
      morningGate: '06:00 AM',
      morningExit: '09:30 AM',
      afternoonGate: '03:00 PM',
      afternoonExit: '06:30 PM',
      notes: 'Summer heat concentrates tigers near lakes and perennial waterholes.',
    },
    {
      period: '16th May to 30th June',
      morningGate: '05:30 AM',
      morningExit: '09:00 AM',
      afternoonGate: '03:30 PM',
      afternoonExit: '07:00 PM',
      notes: 'Earliest dawn entry. Peak tiger sighting probability across all zones.',
    },
    {
      period: '1st July to 30th September',
      morningGate: '06:00 AM',
      morningExit: '09:30 AM',
      afternoonGate: '03:00 PM',
      afternoonExit: '06:30 PM',
      notes: 'Core Zones (1 to 5) CLOSED for monsoon. Selected Buffer Zones (6-10) remain OPEN.',
    },
  ];

  const shiftHighlights = [
    {
      shift: 'Morning Shift Experience',
      icon: Sun,
      color: 'text-amber-400',
      points: [
        'Witness golden sunrise over Ranthambore Fort and lake water lilies',
        'Follow fresh night pugmarks stamped along dirt tracks',
        'Crisp morning forest air with active birds and deer alarm calls',
        'Hotel pickup starts 45 minutes prior to gate opening',
      ],
    },
    {
      shift: 'Afternoon Shift Experience',
      icon: Moon,
      color: 'text-[#ea580c]',
      points: [
        'Tigers wake up from midday siestas to drink at cooling waterholes',
        'Glorious warm late afternoon rim lighting on big cat fur',
        'Dust tracks settle down, offering peaceful golden hour atmosphere',
        'Concludes with majestic sunset over Aravali hill ridgelines',
      ],
    },
  ];

  const faqs = [
    {
      q: 'Which shift is better for tiger sightings: Morning or Afternoon?',
      a: 'Both shifts offer equal sighting chances because tigers are crepuscular (most active around dawn and dusk). In summer, afternoon shifts are very rewarding as tigers drink before twilight. In winter, late morning drives offer sightings as tigers bask in the warming sun.',
    },
    {
      q: 'What time will the Gypsy pick me up from my hotel?',
      a: 'Hotel pickup typically begins 30 to 45 minutes before the official gate entry time. Your driver coordinates with our desk and arrives directly in your resort lobby.',
    },
    {
      q: 'What happens if we arrive late at the forest checkpost?',
      a: 'The Rajasthan Forest Department operates strict computerized gate barriers. Late arrivals miss entry without refund, as gates close precisely at the designated minute.',
    },
    {
      q: 'Is Ranthambore completely closed during the monsoon months?',
      a: 'Core Zones 1 to 5 close from July 1st to September 30th for the tiger breeding season. However, several scenic Buffer Zones (such as Zones 6, 7, 8, and 10) remain open for adventurous monsoon travelers.',
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
            <span className="text-[#f59e0b] font-semibold">Safari Timings &amp; Shifts</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#ea580c] text-xs font-bold uppercase tracking-wider border border-[#ea580c]/30">
                <Clock className="w-3.5 h-3.5" />
                Forest Department Official Schedule
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Safari Timings &amp; Shifts <span className="text-[#ea580c]">(2026–2027)</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                Official Rajasthan Forest Department gate opening, closing, and reporting schedules across all seasons. Plan your arrival and hotel pickups seamlessly.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Current Season Safari
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello,%20please%20tell%20me%20today's%20safari%20shift%20timings%20for%20Ranthambore."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>Instant Timing Query</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: OFFICIAL MONTH-BY-MONTH TIMETABLE */}
        <section className="space-y-6 rounded-3xl bg-[#141210] border border-[#28221b] p-6 sm:p-10">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Official Shift Hours Month-by-Month
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">
              Each safari drive lasts approximately 3.5 hours inside the tiger reserve.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#28221b] text-[#8a8175] uppercase text-[11px] font-bold">
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4 text-amber-400">Morning Shift</th>
                  <th className="py-3 px-4 text-[#ea580c]">Afternoon Shift</th>
                  <th className="py-3 px-4">Wildlife Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#211b16]">
                {seasonalTimetable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#1a1714] transition">
                    <td className="py-4 px-4 font-semibold text-white">{row.period}</td>
                    <td className="py-4 px-4 text-amber-400 font-mono font-medium">
                      {row.morningGate} – {row.morningExit}
                    </td>
                    <td className="py-4 px-4 text-[#ea580c] font-mono font-medium">
                      {row.afternoonGate} – {row.afternoonExit}
                    </td>
                    <td className="py-4 px-4 text-[#8a8175]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: MORNING VS AFTERNOON DEEP DIVE */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {shiftHighlights.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.shift} className="p-8 rounded-3xl bg-[#161412] border border-[#28221b] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#211a14] border border-[#35291f] flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${item.color}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-white">{item.shift}</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-[#a89985]">
                  {item.points.map(point => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        {/* SECTION 4: MONSOON & SEASONAL CLOSURE NOTICE */}
        <section className="p-6 sm:p-8 rounded-3xl bg-amber-950/20 border border-amber-500/30 space-y-4">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-amber-400 shrink-0" />
            <h3 className="font-serif text-xl font-bold text-white">Monsoon Season Operational Policy</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#c4b5a3] leading-relaxed">
            Every year, from <strong className="text-white">1st July to 30th September</strong>, Core Zones 1 to 5 remain completely closed to tourists to allow unhindered breeding of Royal Bengal Tigers and other wild animals. Selected Buffer Zones (Zones 6, 7, 8, and 10) remain operational subject to rainfall conditions.
          </p>
        </section>

        {/* SECTION 5: BOARDING & RESORT PICKUP LOGISTICS */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Hotel Pickup &amp; Gate Reporting Guidelines
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e241d] space-y-2">
              <span className="font-bold text-amber-400">Step 1: Lobby Assembly</span>
              <p className="text-[#8a8175]">Wait in your hotel lobby 45 minutes prior to shift gate opening. Have your printed voucher ready.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e241d] space-y-2">
              <span className="font-bold text-emerald-400">Step 2: ID Verification</span>
              <p className="text-[#8a8175]">Carry the original Aadhaar or Passport. The forest ranger checks physical ID against the manifest.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2e241d] space-y-2">
              <span className="font-bold text-[#ea580c]">Step 3: Forest Chowki Departure</span>
              <p className="text-[#8a8175]">Vehicle enters the assigned zone checkpoint promptly on the minute. Full 3.5 hours of jungle exploration.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS & SCHEDULE QUESTIONS */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Safari Timings FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">Frequently asked questions about Ranthambore entry and exit hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#161412] border border-[#26211b] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#ea580c] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#a89985] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#211a14] via-[#1c1713] to-[#261d15] border border-[#ea580c]/30 text-center space-y-6 shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Reserve Your Preferred Shift Today
              </h2>
              <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
                Whether you prefer the misty sunrise dawn drive or the dramatic sunset golden hour, check shift permit availability with our local Sawai Madhopur desk.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal()}
                className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold text-sm shadow-xl transition cursor-pointer"
              >
                Check Shift Availability
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span>Call Hotline: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
