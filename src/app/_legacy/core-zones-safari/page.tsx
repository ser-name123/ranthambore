'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

export default function CoreZonesSafariPage() {
  const { contact } = useSiteContent();
  const { openBookingModal } = useBookingModal();

  const coreZones = [
    {
      number: 'Zone 1 (Singhdwar)',
      entryGate: 'Singhdwar Gate',
      territory: 'Kalyanpura, Tutikande, Dhoop Chowk, Amreshwar Dang',
      residentTigers: 'T-107 (Sultana lineage), T-120 cubs',
      highlights: 'Dense ravines, lush stream crossings, historical entry portal to tiger country.',
      accent: 'border-emerald-500/40 text-emerald-400',
    },
    {
      number: 'Zone 2 (Jogi Mahal)',
      entryGate: 'Jogi Mahal Main Gate',
      territory: 'Jhalra, Parniya, Nal Ghati, Phuta Bandha',
      residentTigers: 'T-124 (Riddhi territory), T-84 (Arrowhead)',
      highlights: 'Famous for Leopard encounters, freshwater springs, and dense undergrowth trails.',
      accent: 'border-teal-500/40 text-teal-400',
    },
    {
      number: 'Zone 3 (Lake Palace)',
      entryGate: 'Ranthambore Fort Chowki',
      territory: 'Padam Talao, Rajbagh Lake, Malik Talao, High Fort Cliffs',
      residentTigers: 'T-84, T-124 & Cubs, Crocodiles & Sambar deer',
      highlights: 'The crown jewel of world wildlife photography with the 10th-century fort backdrop.',
      accent: 'border-emerald-400/50 text-emerald-300',
    },
    {
      number: 'Zone 4 (Tamakhan & Bakola)',
      entryGate: 'Singhdwar / Lakarda Chowki',
      territory: 'Singh Dwar, Tamakhan, Malik Talao, Lakkad Da',
      residentTigers: 'T-111, T-120, Sloth Bear populations',
      highlights: 'Rich waterbodies, dense Dhok tree forests, and frequent tiger family sightings.',
      accent: 'border-amber-500/40 text-amber-400',
    },
    {
      number: 'Zone 5 (Kachida & Bakola)',
      entryGate: 'Singhdwar Common Gate',
      territory: 'Baghda, Jokha, Kachida Valley, Anatpura',
      residentTigers: 'T-102 progeny, Leopard corridors, Chital herds',
      highlights: 'High prey density, scenic valley overlooks, and excellent birding.',
      accent: 'border-[#f59e0b]/40 text-[#f59e0b]',
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
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* SECTION 1: BREADCRUMB & HERO WITH TIGER RUINS PHOTO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[#d97706] font-semibold">Core Zones 1 to 5</span>
          </nav>

          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] p-8 sm:p-12 shadow-xl bg-[#f4f8f5]">
            <div className="absolute inset-0">
              <Image
                src="/images/tiger_ruins.jpg"
                alt="Bengal tiger resting on ancient fort ruins in Ranthambore core forest"
                fill
                className="object-cover object-center opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                  Sanctum Sanctorum Heritage Habitats
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-tight">
                  Core Zones 1 to 5 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d97706]">Safari Booking</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Step into the historic heartland of Royal Bengal Tigers. Home to legendary lakes, ancient banyan trees, and dramatic fort cliffs where Queen Machli and her royal descendants ruled the wilderness.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ zonePreference: 'Core Zones (Zones 1-5)' })}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-lg transition cursor-pointer"
                >
                  Inquire Core Zone Dates
                </button>
                <a
                  href={waHref(contact.whatsapp, 'Hello, I want to check Core Zones 1 to 5 safari permits.')}
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

        {/* SECTION 2: CORE ZONE PERKS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {zonePerks.map((perk, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#082318] text-base">{perk.title}</h3>
              <p className="text-xs text-[#517362] leading-relaxed">{perk.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: IN-DEPTH BREAKDOWN OF ZONES 1 TO 5 */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Detailed Guide to Zones 1, 2, 3, 4 &amp; 5
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Explore the unique geography, resident cat territories, and signature landmarks of each core zone.
            </p>
          </div>

          <div className="space-y-4">
            {coreZones.map(zone => (
              <div
                key={zone.number}
                className="p-6 rounded-2xl bg-white border border-[#d2e4d9] hover:border-emerald-600 transition space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2ede6] pb-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#082318]">{zone.number}</h3>
                    <p className="text-xs text-[#517362] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Entry: {zone.entryGate}</span>
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border border-emerald-300 bg-emerald-50 text-emerald-800 self-start sm:self-auto`}>
                    Core Tiger Sector
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[#082318] block font-semibold mb-1">Key Landmarks &amp; Waterholes</span>
                    <p className="text-[#375847]">{zone.territory}</p>
                  </div>
                  <div>
                    <span className="text-[#082318] block font-semibold mb-1">Known Resident Wildlife</span>
                    <p className="text-amber-700 font-semibold">{zone.residentTigers}</p>
                  </div>
                  <div>
                    <span className="text-[#082318] block font-semibold mb-1">Safari Experience</span>
                    <p className="text-[#517362]">{zone.highlights}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: PERMIT ALLOCATION SYSTEM */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-6 shadow-sm">
          <div className="max-w-3xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Understanding Core Zone Permit Allocation
            </h2>
            <p className="text-xs sm:text-sm text-[#517362] leading-relaxed">
              Rajasthan Forest Department manages all entry permits through a computerized lottery quota system to prevent environmental stress. When booking through Ranthambore Wild Life Tour, your zone preference (Core 1-5) is prioritized upon submission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <span className="font-bold text-[#082318] text-sm">Advance Quota</span>
              <p className="text-[#517362]">Opens 90 to 120 days prior. Best chance to lock in core zones for your chosen dates.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <span className="font-bold text-[#082318] text-sm">Tatkal Current Quota</span>
              <p className="text-[#517362]">A small pool released 24-48 hours before the safari shift on a first-come basis.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <span className="font-bold text-[#082318] text-sm">Exclusive Jeep Priority</span>
              <p className="text-[#517362]">Private Gypsies offer enhanced flexibility for wildlife photographers inside core tracks.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: RESIDENT TIGER DYNASTIES */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Famous Big Cats of Zones 1 to 5
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <span className="text-xs font-bold text-emerald-700 uppercase">T-124 (Riddhi)</span>
              <h3 className="font-bold text-[#082318] text-base">The Current Queen of the Lakes</h3>
              <p className="text-[#375847] leading-relaxed">
                Dominating the water palace of Zone 3 and parts of Zone 2, Riddhi is the granddaughter of world-famous Machli and frequently patrols Rajbagh lake.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <span className="text-xs font-bold text-amber-700 uppercase">T-84 (Arrowhead)</span>
              <h3 className="font-bold text-[#082318] text-base">The Veteran Lake Monarch</h3>
              <p className="text-[#375847] leading-relaxed">
                Known for the distinct arrow mark above her left eye, Arrowhead has raised multiple litters around Padam Talao and Jogi Mahal.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <span className="text-xs font-bold text-teal-700 uppercase">T-120 (Ganesh)</span>
              <h3 className="font-bold text-[#082318] text-base">The Dominant Male of Tamakhan</h3>
              <p className="text-[#375847] leading-relaxed">
                A massive male holding territory between Zone 1, 4, and 5. Famous for his deep, booming territorial roars heard at dawn.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: SAFARI RULES */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-4 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#082318] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-800" />
            Core Reserve Entry Regulations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#517362]">
            <p>• Only authorized Ranthambore registered Gypsies and Canters with certified drivers and guides may enter.</p>
            <p>• Leaving vehicle tracks or driving off designated roads is strictly prohibited and leads to immediate vehicle de-registration.</p>
            <p>• Smoking, consuming alcohol, and playing recorded animal calls are criminal offenses under the Wildlife Act.</p>
            <p>• Visitors must maintain silence at waterholes and maintain at least 20 meters distance from all wildlife.</p>
          </div>
        </section>

        {/* SECTION 7: FAQS & CORE BOOKING BANNER */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Core Zones Safari FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Essential queries regarding Zones 1 to 5 bookings.</p>
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

          <div className="p-8 sm:p-12 rounded-3xl border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/70 text-[#082318] shadow-xl shadow-emerald-950/5 text-center space-y-6 relative overflow-hidden">
            <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#082318]">
                Book Core Zone 1–5 Safari Permits Today
              </h2>
              <p className="text-xs sm:text-base text-[#1b3a2a] leading-relaxed">
                Connect directly with our Sawai Madhopur wildlife team to verify government quota availability for your chosen travel dates.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ zonePreference: 'Core Zones (Zones 1-5)' })}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition cursor-pointer"
              >
                Request Core Zone Permit
              </button>
              <a
                href={telHref(contact.phonePrimary)}
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 border-2 border-emerald-300 text-[#082318] font-bold text-sm flex items-center gap-2 transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Safari Desk: {contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
