'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Compass, 
  MapPin, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Users, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Camera, 
  HelpCircle,
  Sparkles,
  TreePine,
  Waves
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function CoreZonesSafariPage() {
  const { openBookingModal } = useBookingModal();

  const coreZones = [
    {
      number: 'Zone 1 (Singhdwar)',
      entryGate: 'Singhdwar Gate',
      territory: 'Kalyanpura, Tutikande, Dhoop Chowk, Amreshwar Dang',
      residentTigers: 'T-107 (Sultana lineage), T-120 cubs',
      highlights: 'Dense ravines, lush stream crossings, historical entry portal to tiger country.',
      accent: 'border-orange-500/40 text-orange-400',
    },
    {
      number: 'Zone 2 (Jogi Mahal)',
      entryGate: 'Jogi Mahal Main Gate',
      territory: 'Jhalra, Parniya, Nal Ghati, Phuta Bandha',
      residentTigers: 'T-124 (Riddhi territory), T-84 (Arrowhead)',
      highlights: 'Famous for Leopard encounters, freshwater springs, and dense undergrowth trails.',
      accent: 'border-amber-500/40 text-amber-400',
    },
    {
      number: 'Zone 3 (Lake Palace)',
      entryGate: 'Ranthambore Fort Chowki',
      territory: 'Padam Talao, Rajbagh Lake, Malik Talao, High Fort Cliffs',
      residentTigers: 'T-84, T-124 & Cubs, Crocodiles & Sambar deer',
      highlights: 'The crown jewel of world wildlife photography with the 10th-century fort backdrop.',
      accent: 'border-emerald-500/40 text-emerald-400',
    },
    {
      number: 'Zone 4 (Tamakhan & Bakola)',
      entryGate: 'Singhdwar / Lakarda Chowki',
      territory: 'Singh Dwar, Tamakhan, Malik Talao, Lakkad Da',
      residentTigers: 'T-111, T-120, Sloth Bear populations',
      highlights: 'Rich waterbodies, dense Dhok tree forests, and frequent tiger family sightings.',
      accent: 'border-cyan-500/40 text-cyan-400',
    },
    {
      number: 'Zone 5 (Kachida & Bakola)',
      entryGate: 'Singhdwar Common Gate',
      territory: 'Baghda, Jokha, Kachida Valley, Anatpura',
      residentTigers: 'T-102 progeny, Leopard corridors, Chital herds',
      highlights: 'High prey density, scenic valley overlooks, and excellent birding.',
      accent: 'border-yellow-500/40 text-yellow-400',
    },
  ];

  const zonePerks = [
    { title: 'Historic Lakes & Fort Vistas', desc: 'Padam Talao, Rajbagh, and Malik Talao offer timeless scenery.' },
    { title: 'Highest Core Tiger Density', desc: 'The natural heritage core has sustained famous tiger dynasties for decades.' },
    { title: 'Strict Forest Quota', desc: 'Regulated vehicular entry ensures minimal crowd disturbance for cats.' },
    { title: 'Superb Bird & Prey Activity', desc: 'Sambar stags wading in water lilies, marsh crocodiles, and raptors.' },
  ];

  const faqs = [
    {
      q: 'Why are Core Zones 1 to 5 considered the most prestigious?',
      a: 'Core Zones 1 to 5 are the original national park sanctum containing the iconic lakes (Padam, Rajbagh, Malik) and the towering 1,000-year-old Ranthambore Fort. These waterbodies attract deer and tigers year-round, creating world-famous photo opportunities.',
    },
    {
      q: 'How far in advance should I book for Zones 1 to 5?',
      a: 'Core zone permits are strictly limited by the Rajasthan Forest Department and open up to 90 to 120 days in advance. For peak months (November to April), booking at least 60 days ahead is highly recommended.',
    },
    {
      q: 'Can we book both Gypsy and Canter for Core Zones?',
      a: 'Yes, both Maruti Gypsies and 20-seater Canters are permitted inside Core Zones 1 through 5 on authorized forest tracks.',
    },
    {
      q: 'What happens if Core Zone permits are filled on my date?',
      a: 'You can book Buffer Zones 6 to 10 or apply for the Forest Department daily Tatkal quota. Buffer zones also boast thriving tiger and leopard populations.',
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
            <span className="text-[#f59e0b] font-semibold">Core Zones 1 to 5</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#ea580c] text-xs font-bold uppercase tracking-wider border border-[#ea580c]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                Sanctum Sanctorum Heritage Habitats
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Core Zones 1 to 5 <span className="text-[#ea580c]">Safari Booking</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                Step into the historic heartland of Royal Bengal Tigers. Home to legendary lakes, ancient banyan trees, and dramatic fort cliffs where Queen Machli and her royal descendants ruled the wilderness.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openBookingModal({ zonePreference: 'Core Zones (Zones 1-5)' })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/25 transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Inquire Core Zone Dates
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20check%20Core%20Zones%201%20to%205%20safari%20permits."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: CORE ZONE PERKS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonePerks.map((perk, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-[#ea580c]/15 flex items-center justify-center text-[#ea580c] font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-white text-base">{perk.title}</h3>
              <p className="text-xs text-[#8a8175] leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: IN-DEPTH BREAKDOWN OF ZONES 1 TO 5 */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Detailed Guide to Zones 1, 2, 3, 4 &amp; 5
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">
              Explore the unique geography, resident cat territories, and signature landmarks of each core zone.
            </p>
          </div>

          <div className="space-y-4">
            {coreZones.map(zone => (
              <div
                key={zone.number}
                className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] hover:border-[#ea580c]/40 transition space-y-4"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#26211b] pb-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-white">{zone.number}</h3>
                    <p className="text-xs text-[#8a8175] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-[#ea580c]" />
                      <span>Entry: {zone.entryGate}</span>
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${zone.accent} bg-[#1f1a16] self-start sm:self-auto`}>
                    Core Tiger Sector
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[#73685c] block font-semibold mb-1">Key Landmarks &amp; Waterholes</span>
                    <p className="text-[#c4b5a3]">{zone.territory}</p>
                  </div>
                  <div>
                    <span className="text-[#73685c] block font-semibold mb-1">Known Resident Wildlife</span>
                    <p className="text-amber-400 font-semibold">{zone.residentTigers}</p>
                  </div>
                  <div>
                    <span className="text-[#73685c] block font-semibold mb-1">Safari Experience</span>
                    <p className="text-[#a89985]">{zone.highlights}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PERMIT ALLOCATION SYSTEM */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Understanding Core Zone Permit Allocation
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175] leading-relaxed">
              Rajasthan Forest Department manages all entry permits through a computerized lottery quota system to prevent environmental stress. When booking through Ranthambore Wild Life Tour, your zone preference (Core 1-5) is prioritized upon submission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] space-y-2">
              <span className="font-bold text-white text-sm">Advance Quota</span>
              <p className="text-[#8a8175]">Opens 90 to 120 days prior. Best chance to lock in core zones for your chosen dates.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] space-y-2">
              <span className="font-bold text-white text-sm">Tatkal Current Quota</span>
              <p className="text-[#8a8175]">A small pool released 24-48 hours before the safari shift on a first-come basis.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] space-y-2">
              <span className="font-bold text-white text-sm">Exclusive Jeep Priority</span>
              <p className="text-[#8a8175]">Private Gypsies offer enhanced flexibility for wildlife photographers inside core tracks.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: RESIDENT TIGER DYNASTIES */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Famous Big Cats of Zones 1 to 5
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <span className="text-xs font-bold text-[#ea580c] uppercase">T-124 (Riddhi)</span>
              <h3 className="font-bold text-white text-base">The Current Queen of the Lakes</h3>
              <p className="text-[#a89985] leading-relaxed">
                Dominating the water palace of Zone 3 and parts of Zone 2, Riddhi is the granddaughter of world-famous Machli and frequently patrols Rajbagh lake.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <span className="text-xs font-bold text-amber-400 uppercase">T-84 (Arrowhead)</span>
              <h3 className="font-bold text-white text-base">The Veteran Lake Monarch</h3>
              <p className="text-[#a89985] leading-relaxed">
                Known for the distinct arrow mark above her left eye, Arrowhead has raised multiple litters around Padam Talao and Jogi Mahal.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <span className="text-xs font-bold text-emerald-400 uppercase">T-120 (Ganesh)</span>
              <h3 className="font-bold text-white text-base">The Dominant Male of Tamakhan</h3>
              <p className="text-[#a89985] leading-relaxed">
                A massive male holding territory between Zone 1, 4, and 5. Famous for his deep, booming territorial roars heard at dawn.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: SAFARI RULES */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#141210] border border-[#26211b] space-y-4">
          <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Core Reserve Entry Regulations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#a89985]">
            <p>• Only authorized Ranthambore registered Gypsies and Canters with certified drivers and guides may enter.</p>
            <p>• Leaving vehicle tracks or driving off designated roads is strictly prohibited and leads to immediate vehicle de-registration.</p>
            <p>• Smoking, consuming alcohol, and playing recorded animal calls are criminal offenses under the Wildlife Act.</p>
            <p>• Visitors must maintain silence at waterholes and maintain at least 20 meters distance from all wildlife.</p>
          </div>
        </section>

        {/* SECTION 7: FAQS & CORE BOOKING BANNER */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Core Zones Safari FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">Essential queries regarding Zones 1 to 5 bookings.</p>
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

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#211a14] via-[#1c1713] to-[#261d15] border border-[#ea580c]/30 text-center space-y-6 shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Book Core Zone 1–5 Safari Permits Today
              </h2>
              <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
                Connect directly with our Sawai Madhopur wildlife team to verify government quota availability for your chosen travel dates.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ zonePreference: 'Core Zones (Zones 1-5)' })}
                className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold text-sm shadow-xl transition cursor-pointer"
              >
                Request Core Zone Permit
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-[#ea580c]" />
                <span>Call Safari Desk: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
