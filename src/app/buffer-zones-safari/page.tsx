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
  Mountain
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function BufferZonesSafariPage() {
  const { openBookingModal } = useBookingModal();

  const bufferZones = [
    {
      number: 'Zone 6 (Kundal)',
      entryGate: 'Rajbagh Naka / Kundal Gate',
      territory: 'Kala Pani, Khabli, Patwa ki Baori, Saran Ka Patthar',
      wildlife: 'T-102 and cubs, T-39 lineage, Indian Gazelle (Chinkara), Sloth Bears',
      highlights: 'Scenic cliff landscapes, birds of prey, and dense dry scrub forests.',
      accent: 'border-emerald-500/40 text-emerald-400',
    },
    {
      number: 'Zone 7 (Chhiddir)',
      entryGate: 'Chhiddir Gate',
      territory: 'Rajbagh Naka, Chhiddir, Kushida, Jamun Deh',
      wildlife: 'Frequent leopard movement along escarpments, caracals, wild boars',
      highlights: 'High elevated plateaus with breathtaking panoramic views over the Aravali hills.',
      accent: 'border-teal-500/40 text-teal-400',
    },
    {
      number: 'Zone 8 (Balas)',
      entryGate: 'Balas Gate',
      territory: 'Neemli Dang, Kali Bhat, Balas Plateau, Mahakho',
      wildlife: 'Territorial tigers, leopards, striped hyenas, honey badgers',
      highlights: 'Rugged wild terrain with dramatic gorges and tranquil natural pools.',
      accent: 'border-emerald-400/50 text-emerald-300',
    },
    {
      number: 'Zone 9 (Kuwalji / Qualji)',
      entryGate: 'Phalodi / Kuwalji Gate (Chambal River Route)',
      territory: 'Kuwalji River Bank, 45km from Sawai Madhopur',
      wildlife: 'T-59 (Fateh lineage), Caracals, Sloth Bears, migratory waterfowl',
      highlights: 'Set along the banks of the Chambal river, offering combined forest and aquatic birding.',
      accent: 'border-cyan-500/40 text-cyan-400',
    },
    {
      number: 'Zone 10 (Antri / Kushida)',
      entryGate: 'Kushida Gate',
      territory: 'Halonda, Devpura Water Body, Antri, Bodal',
      wildlife: 'T-99, T-108, Nilgai herds, resident crocodiles in seasonal lakes',
      highlights: 'Lush valley pockets and quiet uncrowded forest tracks loved by naturalists.',
      accent: 'border-[#f59e0b]/40 text-[#f59e0b]',
    },
  ];

  const bufferAdvantages = [
    { title: 'Better Last-Minute Booking', desc: 'Permits often available even when core zones are sold out.' },
    { title: 'Dramatic Hill & Ravine Scenery', desc: 'Towering sandstone cliffs, dry waterfalls, and secluded valleys.' },
    { title: 'Active Leopard & Sloth Bear Tracking', desc: 'Higher chances of spotting elusive leopards and hyenas.' },
    { title: 'Less Vehicle Congestion', desc: 'Fewer vehicles per track create peaceful, private wildlife encounters.' },
  ];

  const faqs = [
    {
      q: 'Do tigers actually live in Buffer Zones 6 to 10?',
      a: 'Yes, absolutely! Tiger territories do not follow human demarcations. Zones 6, 7, 8, 9, and 10 have permanent resident tiger populations with multiple breeding females, sub-adult cubs, and big territorial males.',
    },
    {
      q: 'Are Buffer Zone permits cheaper than Core Zones?',
      a: 'Rajasthan Forest Department charges the exact same standardized permit fee across all zones (1 through 10).',
    },
    {
      q: 'Can we take a Gypsy into Buffer Zones?',
      a: 'Both Maruti Gypsies and Canters operate across Zones 6 to 10 with certified forest department guides and drivers.',
    },
    {
      q: 'Are Buffer Zones open during the monsoon season?',
      a: 'Yes! While Core Zones 1 to 5 close from 1st July to 30th September for the breeding and monsoon season, several buffer gates (Zones 6, 7, 8, and 10) frequently remain open for tourists.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        
        {/* SECTION 1: BREADCRUMB & HERO WITH FOLIAGE TIGER PHOTO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-emerald-700 font-semibold">Buffer Zones 6 to 10</span>
          </nav>

          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] p-8 sm:p-12 shadow-xl bg-[#f4f8f5]">
            <div className="absolute inset-0">
              <Image
                src="/images/tiger_foliage.jpg"
                alt="Bengal tiger peeking through lush green bamboo foliage in Ranthambore buffer forest"
                fill
                className="object-cover object-center opacity-25"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            </div>

            <div className="relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <div className="space-y-4 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Mountain className="w-3.5 h-3.5 text-[#d97706]" />
                  Raw Wilderness &amp; Escarpment Habitats
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-tight">
                  Buffer Zones 6 to 10 <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-[#d97706]">Safari Booking</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Untamed plateaus, secluded water ravines, and high tiger mobility. Buffer Zones 6 through 10 provide exceptional wildlife sightings, pristine solitude, and reliable last-minute booking availability.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ zonePreference: 'Buffer Zones (Zones 6-10)' })}
                  className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-lg transition cursor-pointer"
                >
                  Inquire Buffer Permits
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20check%20Buffer%20Zones%206%20to%2010%20safari%20permits."
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

        {/* SECTION 2: BUFFER ADVANTAGES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bufferAdvantages.map((adv, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#082318] text-base">{adv.title}</h3>
              <p className="text-xs text-[#517362] leading-relaxed">{adv.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: IN-DEPTH BREAKDOWN OF ZONES 6 TO 10 */}
        <section className="space-y-8">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Zones 6, 7, 8, 9 &amp; 10 Profile
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Detailed habitat breakdown and wildlife records for Ranthambore&apos;s buffer ranges.
            </p>
          </div>

          <div className="space-y-4">
            {bufferZones.map(zone => (
              <div
                key={zone.number}
                className="p-6 rounded-2xl bg-white border border-[#d2e4d9] hover:border-emerald-600 transition space-y-4 shadow-sm"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2ede6] pb-3">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-[#082318]">{zone.number}</h3>
                    <p className="text-xs text-[#517362] flex items-center gap-1.5 mt-0.5">
                      <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                      <span>Entry Gate: {zone.entryGate}</span>
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border border-emerald-300 bg-emerald-50 text-emerald-800 self-start sm:self-auto`}>
                    Buffer Wild Range
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <span className="text-[#082318] block font-semibold mb-1">Key Landmarks</span>
                    <p className="text-[#375847]">{zone.territory}</p>
                  </div>
                  <div>
                    <span className="text-[#082318] block font-semibold mb-1">Resident Wildlife</span>
                    <p className="text-emerald-700 font-semibold">{zone.wildlife}</p>
                  </div>
                  <div>
                    <span className="text-[#082318] block font-semibold mb-1">Landscape Highlights</span>
                    <p className="text-[#517362]">{zone.highlights}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: THE MONSOON ADVANTAGE */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-6 shadow-sm">
          <div className="max-w-3xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-800">Exclusive Year-Round Access</span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Ranthambore Monsoon Safaris in Buffer Zones
            </h2>
            <p className="text-xs sm:text-sm text-[#517362] leading-relaxed">
              When core zones shut between July and September, nature flourishes with emerald greenery, cascading waterfalls, and active tiger movement in Buffer Zones 6, 7, 8, and 10. Monsoon safaris offer romantic mist, cloud-capped hills, and zero tourist crowd pressure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1.5">
              <span className="font-bold text-[#082318]">Lush Greenery</span>
              <p className="text-[#517362]">Dramatic transformation from dry deciduous forest into a rainforest paradise.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1.5">
              <span className="font-bold text-[#082318]">Rainy Season Birding</span>
              <p className="text-[#517362]">Breeding plumage of Indian Pitta, Paradise Flycatcher, and Painted Storks.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1.5">
              <span className="font-bold text-[#082318]">Off-Season Tariff Discounts</span>
              <p className="text-[#517362]">Resorts offer up to 40% discount on luxury stays during monsoon months.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: SIGHTING STRATEGY IN BUFFER TERRAINS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Naturalist Tips for Buffer Zone Safaris
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-[#d97706]">Scan High Rock Escarpments</h3>
              <p className="text-[#375847] leading-relaxed">
                Leopards in Zones 6, 7, and 8 frequently sunbathe on open rock ledges early in the morning before retreating into deep caves.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-emerald-700">Listen for Deer Alarm Calls</h3>
              <p className="text-[#375847] leading-relaxed">
                In dense ravine tracks, animal calls (especially spotted deer and langurs) provide vital audio cues long before you see the predator.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-3">
              <h3 className="font-bold text-sm text-teal-700">Watch Waterhole Depressions</h3>
              <p className="text-[#375847] leading-relaxed">
                Natural springs like Kala Pani and Jamun Deh are perennial magnets for tigers, wild boars, and sloth bears during hot hours.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: MANDATORY GUIDELINES */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-4 shadow-sm">
          <h3 className="font-serif text-xl font-bold text-[#082318] flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-800" />
            Buffer Safari Entry Regulations
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#517362]">
            <p>• Government photo identity verification is strictly enforced at every buffer gate entry post.</p>
            <p>• Gypsy drivers adhere to the 20 km/h forest speed limit to prevent sudden animal collisions.</p>
            <p>• Zones 6 to 10 are protected tiger reserve zones with identical legal protection under Project Tiger.</p>
            <p>• Littering or throwing plastic bottles on the trail is punishable by immediate fine and expulsion.</p>
          </div>
        </section>

        {/* SECTION 7: FAQS & BOOKING BANNER */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Buffer Zones Safari FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Helpful facts about Zones 6 through 10 bookings.</p>
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
                Reserve Buffer Safari Permits for Zones 6 to 10
              </h2>
              <p className="text-xs sm:text-base text-[#1b3a2a] leading-relaxed">
                Looking for last-minute booking availability or high-probability leopard and tiger terrain? Connect with our desk today.
              </p>
            </div>

            <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ zonePreference: 'Buffer Zones (Zones 6-10)' })}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition cursor-pointer"
              >
                Inquire Buffer Availability
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 border-2 border-emerald-300 text-[#082318] font-bold text-sm flex items-center gap-2 transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>Call Desk: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
