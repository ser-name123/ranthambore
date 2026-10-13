'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Sparkles, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  Flame, 
  Eye, 
  Info,
  Calendar,
  Layers
} from 'lucide-react';
import { motion } from 'framer-motion';
import ZoneGuide from '@/components/ZoneGuide';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';

export default function SafariZonesPage() {
  const { openBookingModal } = useBookingModal();

  const seasonalTimings = [
    {
      months: 'October (Post-Monsoon Opening)',
      morning: '06:30 AM – 10:00 AM',
      afternoon: '02:30 PM – 06:00 PM',
      highlight: 'Fresh lush green forest, active tiger movement near tracks',
    },
    {
      months: 'November to January (Peak Winter)',
      morning: '07:00 AM – 10:30 AM',
      afternoon: '02:00 PM – 05:30 PM',
      highlight: 'Brisk morning fog, tigers basking on open rocks in afternoon sun',
    },
    {
      months: 'February to March (Pleasant Spring)',
      morning: '06:30 AM – 10:00 AM',
      afternoon: '02:30 PM – 06:00 PM',
      highlight: 'Flame of the Forest (Palash) blooming red, migratory birds active',
    },
    {
      months: 'April to June (Summer Sightings Peak)',
      morning: '06:00 AM – 09:30 AM',
      afternoon: '03:30 PM – 07:00 PM',
      highlight: 'Highest tiger sightings as cats linger around Padam & Rajbagh lakes',
    },
  ];

  const tigerTerritories = [
    {
      zone: 'Zone 1 to 3',
      name: 'Lakes & Royal Ruins Core',
      tigers: 'T-84 (Arrowhead), T-124 (Riddhi), T-125 (Siddhi)',
      features: 'Padam Talao, Rajbagh Palace, Malik Talao, High tiger density',
    },
    {
      zone: 'Zone 4 & 5',
      name: 'Semli & Kachida Territory',
      tigers: 'T-120 (Ganesh), T-86 (Chirico), T-107 (Sultana)',
      features: 'Bakola watering holes, deep gorges, high sloth bear population',
    },
    {
      zone: 'Zone 6 to 8',
      name: 'Kala Pani & Balas Buffer',
      tigers: 'T-101, T-58 (Rocky), T-108',
      features: 'Balas cliffs, Chidikho, high leopard frequency, tranquil drives',
    },
    {
      zone: 'Zone 9 & 10',
      name: 'Chawal & Kushalipura Corridors',
      tigers: 'T-108, T-99, T-113',
      features: 'Chambal river banks, Kailadevi corridor, rugged hilly terrain',
    },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#120f0d]">
      {/* Ambient background glows */}
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
          <span className="text-[#f59e0b] font-semibold">Safari Zones</span>
        </nav>

        {/* SECTION 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <Compass className="w-4 h-4 text-[#ea580c]" />
            Official Zone Directory &amp; Territorial Map (2026-2027)
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ranthambore Safari Zones:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              1 to 10 Gate Explorer
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Discover the landscape, watering holes, prominent resident tigers, and seasonal shift timings for each of Ranthambore Tiger Reserve&apos;s 10 designated safari zones.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingModal({ zone: 'Zone 1-5 (Core)' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 cursor-pointer transition duration-300"
            >
              <span>Check Zone Availability</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20which%20safari%20zone%20has%20the%20best%20tiger%20sightings%20currently?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-sm border border-[#3d3228] flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask Sighting Specialist</span>
            </a>
          </div>
        </motion.div>

        {/* SECTION 2: Interactive Zone Explorer Component */}
        <div className="mb-24">
          <ZoneGuide />
        </div>

        {/* SECTION 3: Seasonal Safari Shift Timings Table */}
        <div className="mb-24 p-8 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Official Safari Shift Timings (By Season)
              </h2>
              <span className="text-xs text-[#a89985]">
                Rajasthan Forest Department Gate Opening &amp; Closing Schedule
              </span>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#29221b] text-[#f59e0b] uppercase font-bold text-[11px] tracking-wider">
                  <th className="py-3 px-4">Period / Month</th>
                  <th className="py-3 px-4">Morning Shift</th>
                  <th className="py-3 px-4">Afternoon Shift</th>
                  <th className="py-3 px-4">Wild Sighting Dynamics</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#211a14] text-[#cfc0ae]">
                {seasonalTimings.map((item, idx) => (
                  <tr key={idx} className="hover:bg-[#1f1914] transition">
                    <td className="py-3.5 px-4 font-semibold text-white">{item.months}</td>
                    <td className="py-3.5 px-4 text-emerald-400 font-mono">{item.morning}</td>
                    <td className="py-3.5 px-4 text-[#ea580c] font-mono">{item.afternoon}</td>
                    <td className="py-3.5 px-4 text-xs text-[#a89985]">{item.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 4: Prominent Tiger Territories Breakdown */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Predator Range Map
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Tiger Territories Across Zones
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Where Ranthambore&apos;s most iconic Bengal tigers establish their home ranges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tigerTerritories.map((item) => (
              <SpotlightCard
                key={item.zone}
                spotlightColor="rgba(234, 88, 12, 0.16)"
                enableTilt={true}
                className="glass-card p-6 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase px-2.5 py-0.5 rounded bg-[#ea580c]/15 text-[#ea580c] border border-[#ea580c]/30">
                    {item.zone}
                  </span>
                  <h3 className="font-serif text-base font-bold text-white">{item.name}</h3>
                  <div className="text-xs text-[#f59e0b] font-medium pt-1">
                    <span>Key Tigers: </span>
                    <span className="text-white font-semibold">{item.tigers}</span>
                  </div>
                  <p className="text-xs text-[#a89985] leading-relaxed pt-1">{item.features}</p>
                </div>
                <button
                  type="button"
                  onClick={() => openBookingModal({ zone: item.zone })}
                  className="w-full mt-3 py-2 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-xs border border-[#382f25] hover:border-[#ea580c] transition cursor-pointer"
                >
                  Request {item.zone}
                </button>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* SECTION 5: Core vs Buffer Zones Comparison */}
        <div className="mb-24 p-8 rounded-2xl bg-[#191512] border border-[#2b241e] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Zone Architecture
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Core Zones (1–5) vs Buffer Gates (6–10)
            </h2>
            <p className="text-xs text-[#a89985]">
              Understanding the ecological diversity between historical lake basins and rugged buffer hills.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs sm:text-sm text-[#bdae9c]">
            <div className="p-6 rounded-xl bg-[#13110e] border border-[#261f18] space-y-3">
              <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ea580c]" />
                Core Zones (Gates 1 to 5)
              </h3>
              <p className="leading-relaxed">
                Covers the historical heart of Ranthambore featuring ancient Chauhan dynasty ruins, Banyan trees, Padam Talao, Rajbagh Lake, and Malik Lake. Highest prey concentration of Sambar and spotted deer with world-famous waterbody tiger sightings.
              </p>
            </div>

            <div className="p-6 rounded-xl bg-[#13110e] border border-[#261f18] space-y-3">
              <h3 className="font-serif text-base font-bold text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]" />
                Buffer Zones (Gates 6 to 10)
              </h3>
              <p className="leading-relaxed">
                Surrounding woodlands including Sawai Mansingh Sanctuary and Chambal corridors. Dramatic escarpments, deep ravines, and high leopard density. Far less vehicular congestion, providing peaceful birdwatching and elusive big cat tracking.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: Zone Allotment Transparency Notice */}
        <div className="mb-24 p-6 sm:p-7 rounded-2xl bg-[#171411] border border-[#3d3227] text-xs text-[#a89985] flex items-start gap-3">
          <Info className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
          <div className="space-y-1">
            <span className="font-bold text-white">Official Zone Allotment Notice: </span>
            <p className="leading-relaxed">
              While we submit your zone preference (Zones 1-5 or 6-10), the final zone number is assigned through the Rajasthan Forest Department computerised lottery system on the day of the safari. No tour operator can legally guarantee a specific single zone number in advance. Both core and buffer zones host thriving tiger populations.
            </p>
          </div>
        </div>

        {/* SECTION 7: Direct Zone Availability Form */}
        <div>
          <QuickEnquirySection />
        </div>
      </div>
    </div>
  );
}
