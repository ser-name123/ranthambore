'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Clock, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Sun,
  Moon,
  AlertTriangle
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

export default function SafariTimingsPage() {
  const { contact } = useSiteContent();
  const { openBookingModal } = useBookingModal();

  const seasonalTimetable = [
    {
      period: '1st Oct to 31st Oct',
      morningGate: '06:30 AM – 10:00 AM',
      afternoonGate: '02:30 PM – 06:00 PM',
      notes: 'Park opens fresh after monsoon rejuvenation.',
    },
    {
      period: '1st Nov to 31st Jan',
      morningGate: '07:00 AM – 10:30 AM',
      afternoonGate: '02:00 PM – 05:30 PM',
      notes: 'Crisp winter drives. Active big cat movement.',
    },
    {
      period: '1st Feb to 31st Mar',
      morningGate: '06:30 AM – 10:00 AM',
      afternoonGate: '02:30 PM – 06:00 PM',
      notes: 'Pleasant spring weather, ideal lighting for wildlife photography.',
    },
    {
      period: '1st Apr to 15th May',
      morningGate: '06:00 AM – 09:30 AM',
      afternoonGate: '03:00 PM – 06:30 PM',
      notes: 'Heat concentrates tigers near lakes and waterholes.',
    },
    {
      period: '16th May to 30th Jun',
      morningGate: '05:30 AM – 09:00 AM',
      afternoonGate: '03:30 PM – 07:00 PM',
      notes: 'Peak tiger sighting probability across all zones.',
    },
    {
      period: '1st Jul to 30th Sep',
      morningGate: '06:00 AM – 09:30 AM',
      afternoonGate: '03:00 PM – 06:30 PM',
      notes: 'Core Zones (1 to 5) CLOSED. Buffer Zones (6-10) remain OPEN.',
    },
  ];

  const shiftHighlights = [
    {
      shift: 'Morning Shift Experience',
      icon: Sun,
      color: 'text-amber-400',
      points: [
        'Golden sunrise over Ranthambore Fort and lake water lilies',
        'Follow fresh night pugmarks stamped along dirt tracks',
        'Crisp morning forest air with active birds and deer alarm calls',
        'Hotel pickup starts 45 minutes prior to gate opening',
      ],
    },
    {
      shift: 'Afternoon Shift Experience',
      icon: Moon,
      color: 'text-emerald-400',
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
      a: 'Both shifts offer equal chances because tigers are crepuscular (most active around dawn and dusk). In summer, afternoons are very rewarding around waterholes; in winter, mornings are great as tigers bask in the sun.',
    },
    {
      q: 'What time will the Gypsy pick me up from my hotel?',
      a: 'Hotel pickup begins 30 to 45 minutes before official gate entry time directly from your resort lobby.',
    },
    {
      q: 'What happens if we arrive late at the forest checkpost?',
      a: 'Gates close strictly at the designated minute by computerized timer, after which entry is barred without refund.',
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
            <span className="text-[#d97706] font-semibold">Safari Timings &amp; Shifts</span>
          </nav>

          {/* Visual Hero Banner with Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-[#f4f8f5] shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_stalking.jpg"
                alt="Bengal Tiger prowling in Ranthambore"
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
                  <Clock className="w-3.5 h-3.5 text-[#d97706]" />
                  Forest Department Official Schedule
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                  Safari Timings &amp; Shifts <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d97706]">(2026–2027)</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Official Rajasthan Forest Department gate opening, closing, and reporting schedules across all seasons. Plan your arrival and hotel pickups seamlessly.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal()}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-lg transition cursor-pointer"
                >
                  Book Safari Shift
                </button>
                <a
                  href={waHref(contact.whatsapp, 'Hello, please tell me today\'s safari shift timings for Ranthambore.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Instant Timing Query</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: OFFICIAL TIMETABLE */}
        <section className="space-y-6 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] p-6 sm:p-10 shadow-sm">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Official Shift Hours Month-by-Month
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Each safari drive lasts approximately 3.5 hours inside the tiger reserve.
            </p>
          </div>

          <div className="overflow-x-auto bg-white rounded-2xl border border-[#d2e4d9] shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#d2e4d9] text-emerald-900 bg-[#edf5f0] uppercase text-[11px] font-bold">
                  <th className="py-3 px-4">Period</th>
                  <th className="py-3 px-4 text-[#d97706]">Morning Shift</th>
                  <th className="py-3 px-4 text-emerald-700">Afternoon Shift</th>
                  <th className="py-3 px-4">Wildlife Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ede6]">
                {seasonalTimetable.map((row, idx) => (
                  <tr key={idx} className="hover:bg-[#f8faf8] transition">
                    <td className="py-4 px-4 font-semibold text-[#082318]">{row.period}</td>
                    <td className="py-4 px-4 text-[#d97706] font-mono font-medium">
                      {row.morningGate}
                    </td>
                    <td className="py-4 px-4 text-emerald-700 font-mono font-medium">
                      {row.afternoonGate}
                    </td>
                    <td className="py-4 px-4 text-[#517362]">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: MORNING VS AFTERNOON */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {shiftHighlights.map(item => {
            const Icon = item.icon;
            return (
              <div key={item.shift} className="p-6 sm:p-8 rounded-3xl bg-white border border-[#d2e4d9] shadow-sm space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center">
                    <Icon className={`w-5 h-5 ${item.color === 'text-amber-400' ? 'text-[#d97706]' : 'text-emerald-700'}`} />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#082318]">{item.shift}</h3>
                </div>
                <ul className="space-y-2.5 text-xs text-[#375847]">
                  {item.points.map(point => (
                    <li key={point} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </section>

        {/* SECTION 4: MONSOON NOTICE */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#f4f8f5] border border-amber-200 shadow-sm space-y-3">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-6 h-6 text-[#d97706] shrink-0" />
            <h3 className="font-serif text-xl font-bold text-[#082318]">Monsoon Operational Policy</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#375847] leading-relaxed">
            Every year, from <strong className="text-[#082318]">1st July to 30th September</strong>, Core Zones 1 to 5 remain closed for tiger breeding season. Selected Buffer Zones (6 to 10) remain fully operational subject to weather conditions.
          </p>
        </section>

        {/* SECTION 5: FAQS & CTA */}
        <section className="space-y-8">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Safari Timings FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Frequently asked questions about Ranthambore entry and exit hours.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
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

          <div className="p-8 sm:p-12 rounded-3xl border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/70 text-[#082318] shadow-xl shadow-emerald-950/5 text-center space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#082318]">
                Reserve Your Preferred Shift Today
              </h2>
              <p className="text-xs sm:text-base text-[#1b3a2a] leading-relaxed">
                Whether you prefer misty sunrise dawn drives or dramatic sunset golden hours, check shift permit availability with our local desk.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal()}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition cursor-pointer"
              >
                Check Shift Availability
              </button>
              <a
                href={telHref(contact.phonePrimary)}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 border-2 border-emerald-300 text-[#082318] font-bold text-sm flex items-center gap-2 transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Hotline: {contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
