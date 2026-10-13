'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Sparkles, 
  Camera, 
  Sun, 
  Wind, 
  MapPin, 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  Train, 
  Plane, 
  Car, 
  Shirt, 
  ShieldAlert 
} from 'lucide-react';
import { motion } from 'framer-motion';
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
      status: 'Post-Monsoon Forest Opening',
      desc: 'The park reopens with vibrant green foliage, roaring waterfalls in ravines, and scenic lake water levels. Excellent for landscape photography and birdwatching.',
    },
    {
      period: 'December to February',
      climate: 'Crisp & Cold Mornings (8°C - 24°C)',
      status: 'Peak Tourist Season',
      desc: 'Chilly morning safaris requiring warm jackets and beanies. Tigers frequently bask in open grasslands, ruins, and sunny dirt tracks during midday hours.',
    },
    {
      period: 'March to April',
      climate: 'Warm & Blooming (24°C - 36°C)',
      status: 'Spring Transition',
      desc: 'Palash trees (Flame of the Forest) burst into fiery orange blossoms. As foliage thins, wildlife visibility across ravines and watering holes increases significantly.',
    },
    {
      period: 'May to June',
      climate: 'Hot & Dry (35°C - 44°C)',
      status: 'Peak Tiger Sighting Window',
      desc: 'Forest water sources dry up, congregating tigers and prey animals near Padam, Rajbagh, and Malik Talao lakes. Unmatched predator action and photography opportunities.',
    },
  ];

  const packingItems = [
    { category: 'Clothing Colors', items: 'Earthy tones (Khaki, Olive Green, Muted Brown). Avoid bright red, neon, or white.' },
    { category: 'Weather Gear', items: 'Heavy fleece jackets for winter mornings; light breathable cottons, sun hat & shades for summer.' },
    { category: 'Dust Protection', items: 'Bandana / scarf / buff to cover nose & mouth from dirt tracks; dust cover sleeve for camera lens.' },
    { category: 'Optics & Tech', items: 'Binoculars (8x42 or 10x42), telephoto lens (100-400mm or 70-200mm), extra memory cards and camera batteries.' },
    { category: 'Personal Care', items: 'High SPF sunscreen, mosquito repellent, lip balm, rehydration electrolytes (ORS), and personal medicines.' },
    { category: 'Govt. Documents', items: 'Original Government Photo ID (same proof provided during online booking) is 100% mandatory.' },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#120f0d]">
      {/* Decorative ambient glows */}
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
          <span className="text-[#f59e0b] font-semibold">Travel Guide</span>
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
            Official Wildlife Safari Expedition Guide
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Ranthambore Travel Guide:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Planning Your Tiger Safari
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Everything you need to know before visiting Ranthambore Tiger Reserve: seasonal weather windows, camera gear advice, packing lists, forest etiquette, and travel logistics.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 cursor-pointer transition duration-300"
            >
              <span>Book Safari With Travel Plan</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20can%20you%20share%20travel%20recommendations?"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-sm border border-[#3d3228] flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Ask Our Naturalist</span>
            </a>
          </div>
        </motion.div>

        {/* SECTION 2: Interactive Travel Guide Component */}
        <div className="mb-24">
          <TravelGuide onOpenArticle={(title) => openBookingModal({ notes: `Interested in: ${title}` })} />
        </div>

        {/* SECTION 3: Month-by-Month Safari Seasons Guide */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Seasonal Dynamics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Best Time to Visit Ranthambore
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Each season offers unique wildlife sightings, photography light, and landscape moods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {seasonGuides.map((season) => (
              <SpotlightCard
                key={season.period}
                spotlightColor="rgba(234, 88, 12, 0.16)"
                enableTilt={true}
                className="glass-card p-6 sm:p-7 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                    {season.status}
                  </span>
                  <Sun className="w-4 h-4 text-[#f59e0b]" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">{season.period}</h3>
                <span className="text-xs font-mono text-[#f59e0b] block">{season.climate}</span>
                <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed pt-1">
                  {season.desc}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* SECTION 4: Comprehensive Safari Packing Checklist */}
        <div className="mb-24 p-8 rounded-2xl bg-[#191512] border border-[#2b241e] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <Shirt className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Safari Packing &amp; Dress Code Essentials
              </h2>
              <span className="text-xs text-[#a89985]">
                Blend into the wilderness and stay comfortable on open 4x4 Gypsy drives
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {packingItems.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-[#13110e] border border-[#261f18] space-y-1.5">
                <span className="text-xs font-bold text-[#f59e0b] block">{item.category}</span>
                <p className="text-xs text-[#c4b5a3] leading-relaxed">{item.items}</p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: Wildlife Photography Tips */}
        <div className="mb-24 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#1c1813] via-[#211a14] to-[#181410] border border-[#ea580c]/30 space-y-6 shadow-2xl">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Wildlife Photography Masterclass Tips
              </h2>
              <span className="text-xs text-[#a89985]">
                Capturing Royal Bengal Tigers in dense dry deciduous scrub
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#bdae9c]">
            <div className="p-5 rounded-xl bg-[#13100d] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white text-sm">Lens Recommendation</h3>
              <p className="leading-relaxed">
                A versatile 100-400mm or 150-600mm telephoto zoom lens is ideal. Tigers frequently cross directly in front of the vehicle or walk across lake edges 80 meters away.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13100d] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white text-sm">Bean Bag Stabilization</h3>
              <p className="leading-relaxed">
                Tripods are strictly prohibited inside safari vehicles due to passenger movement. Bring an unfilled bean bag to rest your telephoto lens on the Gypsy safety rail.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13100d] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white text-sm">Shutter Speed &amp; Shaded Light</h3>
              <p className="leading-relaxed">
                Keep shutter speeds above 1/1000s for moving animals. Be prepared to raise ISO to 1600–3200 under dense Dhok canopy and early morning low-light shifts.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: Dos & Don'ts of Jungle Safari */}
        <div className="mb-24 p-8 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-400">
              Responsible Ecotourism
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Dos &amp; Don&apos;ts in the Tiger Reserve
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            <div className="p-6 rounded-xl bg-[#13110e] border border-emerald-500/20 space-y-3">
              <h3 className="font-serif text-base font-bold text-emerald-400 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Dos (Must Follow)
              </h3>
              <ul className="space-y-2 text-[#c4b5a3]">
                <li>• Always follow the instructions of your assigned forest naturalist guide.</li>
                <li>• Remain seated inside the vehicle at all times; disembarking is strictly forbidden.</li>
                <li>• Keep your voice at a low whisper when an animal or tiger is sighted.</li>
                <li>• Carry drinking water, hat, and sunglasses for open-top sun exposure.</li>
              </ul>
            </div>

            <div className="p-6 rounded-xl bg-[#13110e] border border-rose-500/20 space-y-3">
              <h3 className="font-serif text-base font-bold text-rose-400 flex items-center gap-2">
                <XCircle className="w-5 h-5 text-rose-400" />
                Don&apos;ts (Strictly Prohibited)
              </h3>
              <ul className="space-y-2 text-[#c4b5a3]">
                <li>• Do NOT litter or throw plastic bottles/wrappers inside the national park.</li>
                <li>• Do NOT use camera flash or make loud noises to provoke wildlife.</li>
                <li>• Do NOT play music, blow horns, or carry pets into the reserve.</li>
                <li>• Do NOT smoke or ignite fires anywhere within the protected forest area.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 7: How to Reach & Quick Enquiry */}
        <div>
          <QuickEnquirySection />
        </div>
      </div>
    </div>
  );
}
