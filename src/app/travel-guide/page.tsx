'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Camera, 
  Sun, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  MessageCircle, 
  Shirt
} from 'lucide-react';
import TravelGuide from '@/components/TravelGuide';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';

export default function TravelGuidePage() {
  const { openBookingModal } = useBookingModal();

  const seasonGuides = [
    {
      period: 'October to November',
      climate: 'Lush Green & Pleasant (20°C - 30°C)',
      status: 'Post-Monsoon Opening',
      desc: 'The park reopens with vibrant green foliage, waterfalls in ravines, and high lake water levels. Excellent for landscape photography and birding.',
    },
    {
      period: 'December to February',
      climate: 'Crisp & Cold Mornings (8°C - 24°C)',
      status: 'Peak Winter Season',
      desc: 'Chilly morning safaris requiring warm fleece jackets. Tigers frequently bask in open grasslands, ruins, and sunny dirt tracks.',
    },
    {
      period: 'March to April',
      climate: 'Warm & Blooming (24°C - 36°C)',
      status: 'Spring Transition',
      desc: 'Palash trees (Flame of the Forest) burst into orange blossoms. As foliage thins, animal visibility across ravines and lakes increases.',
    },
    {
      period: 'May to June',
      climate: 'Hot & Dry (35°C - 44°C)',
      status: 'Peak Tiger Sighting Window',
      desc: 'Water sources dry up, concentrating tigers near Padam, Rajbagh, and Malik Talao lakes. Unmatched predator action and photography opportunities.',
    },
  ];

  const packingItems = [
    { category: 'Clothing Colors', items: 'Earthy tones (Khaki, Olive Green, Muted Brown). Avoid bright red, neon, or stark white.' },
    { category: 'Weather Gear', items: 'Heavy fleece jackets for winter mornings; light breathable cottons, sun hat & shades for summer.' },
    { category: 'Dust Protection', items: 'Bandana / scarf / buff to cover nose & mouth from dirt tracks; dust cover sleeve for camera lens.' },
    { category: 'Optics & Tech', items: 'Binoculars (8x42 or 10x42), telephoto lens (100-400mm or 70-200mm), extra memory cards and batteries.' },
    { category: 'Personal Care', items: 'High SPF sunscreen, mosquito repellent, lip balm, rehydration electrolytes (ORS), and personal medicines.' },
    { category: 'Govt. Documents', items: 'Original Government Photo ID (exact proof provided during online booking) is 100% mandatory.' },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#06150f] text-[#f2f7f4]">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#86a898]">
          <Link href="/" className="hover:text-emerald-400 transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#16432f]" />
          <span className="text-amber-400 font-semibold">Travel Guide</span>
        </nav>

        {/* Visual Hero Banner with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-[#16432f] bg-[#092218] shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/images/tiger_lake.jpg"
              alt="Tiger resting by Padam Talao in Ranthambore"
              fill
              priority
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#06150f] via-[#06150f]/60 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#06150f]/80 via-transparent to-[#06150f]/40" />
          </div>

          <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5" />
                Official Wildlife Safari Expedition Guide
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Ranthambore Travel Guide: <span className="text-amber-400">Planning Your Safari</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed">
                Everything you need to know before visiting Ranthambore Tiger Reserve: seasonal weather windows, camera gear advice, packing lists, forest etiquette, and travel logistics.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-400/30 flex items-center gap-2"
              >
                <span>Plan Your Safari</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20can%20you%20share%20travel%20recommendations?"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#092218] hover:bg-[#113123] text-emerald-400 border border-[#16432f] font-bold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Ask Naturalist</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: Interactive Travel Guide Component */}
        <TravelGuide onOpenArticle={(title) => openBookingModal({ notes: `Interested in: ${title}` })} />

        {/* SECTION 3: Month-by-Month Safari Seasons Guide */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
              Seasonal Dynamics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Best Time to Visit Ranthambore
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">
              Each season offers unique wildlife sightings, photography light, and landscape moods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonGuides.map((season) => (
              <SpotlightCard
                key={season.period}
                spotlightColor="rgba(16, 185, 129, 0.16)"
                enableTilt={true}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-[#16432f] bg-[#092218] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-400">
                    {season.status}
                  </span>
                  <Sun className="w-4 h-4 text-amber-400" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{season.period}</h3>
                <span className="text-xs font-mono text-amber-400 block">{season.climate}</span>
                <p className="text-xs sm:text-sm text-[#86a898] leading-relaxed pt-1">
                  {season.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* SECTION 4: Safari Packing Checklist */}
        <section className="p-8 rounded-3xl bg-[#092218] border border-[#16432f] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Safari Packing &amp; Dress Code Essentials
              </h2>
              <span className="text-xs text-[#86a898]">
                Blend into the wilderness and stay comfortable on open 4x4 Gypsy drives
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packingItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1">
                <span className="text-xs font-bold text-amber-400 block">{item.category}</span>
                <p className="text-xs text-[#c2d7cd] leading-relaxed">{item.items}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: Wildlife Photography Tips */}
        <section className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-emerald-500/30 space-y-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Wildlife Photography Masterclass Tips
              </h2>
              <span className="text-xs text-[#86a898]">
                Capturing Royal Bengal Tigers in dense dry deciduous scrub
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#c2d7cd]">
            <div className="p-5 rounded-xl bg-[#06150f] border border-[#16432f] space-y-2">
              <h3 className="font-bold text-white text-sm">Lens Recommendation</h3>
              <p className="leading-relaxed text-[#86a898]">
                A versatile 100-400mm or 150-600mm telephoto zoom is ideal. Tigers frequently cross right in front of the vehicle or walk across lake edges 80m away.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#06150f] border border-[#16432f] space-y-2">
              <h3 className="font-bold text-white text-sm">Bean Bag Stabilization</h3>
              <p className="leading-relaxed text-[#86a898]">
                Tripods are prohibited inside safari vehicles. Bring an unfilled bean bag to rest your telephoto lens smoothly on the Gypsy safety rail.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#06150f] border border-[#16432f] space-y-2">
              <h3 className="font-bold text-white text-sm">Shutter Speed &amp; Shaded Light</h3>
              <p className="leading-relaxed text-[#86a898]">
                Keep shutter speeds above 1/1000s for moving animals. Raise ISO to 1600–3200 under dense Dhok canopy and early morning low-light shifts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: Dos & Don'ts */}
        <section className="p-8 rounded-3xl bg-[#092218] border border-[#16432f] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Responsible Ecotourism
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Dos &amp; Don&apos;ts in the Tiger Reserve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#06150f] border border-emerald-500/30 space-y-3">
              <h3 className="font-serif text-base font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Dos (Must Follow)
              </h3>
              <ul className="space-y-2 text-[#c2d7cd]">
                <li>• Always follow the instructions of your assigned forest naturalist guide.</li>
                <li>• Remain seated inside the vehicle at all times; disembarking is strictly forbidden.</li>
                <li>• Keep your voice at a low whisper when an animal or tiger is sighted.</li>
                <li>• Carry drinking water, hat, and sunglasses for open-top sun exposure.</li>
              </ul>
            </div>

            <div className="p-6 rounded-2xl bg-[#06150f] border border-rose-950/40 space-y-3">
              <h3 className="font-serif text-base font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-400" />
                Don&apos;ts (Strictly Prohibited)
              </h3>
              <ul className="space-y-2 text-[#c2d7cd]">
                <li>• Do NOT litter or throw plastic bottles/wrappers inside the national park.</li>
                <li>• Do NOT use camera flash or make loud noises to provoke wildlife.</li>
                <li>• Do NOT play music, blow horns, or carry pets into the reserve.</li>
                <li>• Do NOT smoke or ignite fires anywhere within the protected forest area.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 7: How to Reach & Quick Enquiry */}
        <QuickEnquirySection />
      </div>
    </div>
  );
}
