'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Camera, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Sliders,
  Sun
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function WildlifePhotographyTourPage() {
  const { openBookingModal } = useBookingModal();

  const tourFeatures = [
    {
      title: 'Dedicated Beanbags & Mounts',
      desc: 'Gypsies equipped with rice/beanbags mounted on door edges for vibration-free telephoto shooting.',
      icon: Camera,
    },
    {
      title: 'Veteran Naturalist & Light Tactician',
      desc: 'Senior naturalists who understand golden hour angles, animal body language, and predictive behavior.',
      icon: Sun,
    },
    {
      title: 'Custom Vehicle Positioning',
      desc: 'Drivers angle the Gypsy for optimal lens clearance, backdrop bokeh, and zero dust blow.',
      icon: Sliders,
    },
    {
      title: 'Multi-Drive Flexibility (4 to 8 Drives)',
      desc: 'Intensive itineraries combining morning mist at Padam Talao with late afternoon golden rim light.',
      icon: Clock,
    },
  ];

  const gearRecommendations = [
    { category: 'Prime Telephoto', gear: '400mm f/2.8, 500mm f/4, or 600mm f/4 for tight big cat portraits.' },
    { category: 'Telephoto Zoom', gear: '100-400mm or 70-200mm f/2.8 for environmental frames and mother-cub moments.' },
    { category: 'Camera Bodies', gear: 'Dual bodies to avoid changing lenses in dusty field conditions.' },
    { category: 'Dust Protection', gear: 'Rain & dust covers, rocket blowers, and lens wraps for open 4x4 trails.' },
  ];

  const faqs = [
    {
      q: 'Can I bring big telephoto lenses and tripods into the park?',
      a: 'Handheld telephoto lenses and beanbags are fully permitted. Monopods can rest on vehicle floors. Tripods cannot be placed on the ground outside the vehicle.',
    },
    {
      q: 'Do professional photographers need private Gypsies?',
      a: 'Yes, private Gypsies allow you to wait patiently at scenic waterholes for action without rushing or competing for angles.',
    },
    {
      q: 'What is the best time for tiger photography?',
      a: 'March to June is prime season as waterholes dry up and tigers spend hours cooling down in lake shallows in broad daylight.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#06150f] text-[#f2f7f4] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#86a898]">
            <Link href="/" className="hover:text-emerald-400 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#16432f]" />
            <span className="text-amber-400 font-semibold">Wildlife Photography Expeditions</span>
          </nav>

          {/* Visual Hero Banner with Tiger Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#16432f] bg-[#092218] shadow-2xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_portrait.jpg"
                alt="Close-up Portrait of Royal Bengal Tiger"
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
                  <Camera className="w-3.5 h-3.5" />
                  Custom Wildlife Photography Safaris
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Wildlife Photography <span className="text-amber-400">Expeditions</span>
                </h1>
                <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed">
                  Crafted by photographers for photographers. Private Gypsy vehicles, beanbag mounts, top-ranked naturalists, and strategic positioning to capture world-class portfolio shots of Royal Bengal Tigers.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ vehicle: 'Private Photography Gypsy', notes: 'Interested in Wildlife Photography Tour' })}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-400/30"
                >
                  Plan Photo Expedition
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20am%20a%20wildlife%20photographer%20planning%20an%20expedition%20to%20Ranthambore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#092218] hover:bg-[#113123] text-emerald-400 border border-[#16432f] font-bold text-sm flex items-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Specialist</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SPECIALIZED ATTRIBUTES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {tourFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-5 sm:p-6 rounded-2xl bg-[#092218] border border-[#16432f] hover:border-emerald-500/40 transition space-y-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{feat.title}</h3>
                <p className="text-xs text-[#86a898] leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </section>

        {/* SECTION 3: RECOMMENDED GEAR */}
        <section className="space-y-6 rounded-3xl bg-[#092218] border border-[#16432f] p-6 sm:p-10">
          <div className="max-w-2xl space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Essential Field Equipment Guide
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">
              Recommended optical focal lengths and accessories tailored for Ranthambore&apos;s terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearRecommendations.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#06150f] border border-[#16432f] space-y-1 text-xs">
                <span className="font-bold text-amber-400 uppercase text-[11px]">{item.category}</span>
                <p className="text-[#c2d7cd] leading-relaxed">{item.gear}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: LIGHTING & GOLDEN HOUR PLANNING */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Golden Hour Lighting Across Park Zones
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase">Morning Mist</span>
              <h3 className="font-bold text-white text-sm">Sunrise at Padam Talao (Zone 3)</h3>
              <p className="text-[#86a898] leading-relaxed">
                As morning sun hits Jogi Mahal and the water lilies, steam rises creating ethereal silhouettes of deer herds and wading tigers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase">Noon Waterhole Action</span>
              <h3 className="font-bold text-white text-sm">Lake Shallows at Rajbagh</h3>
              <p className="text-[#86a898] leading-relaxed">
                Summer heat drives big cats to submerge in clear waters against the ancient Rajput hunting palace ruins.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-3">
              <span className="text-xs font-bold text-teal-400 uppercase">Dusk Warmth</span>
              <h3 className="font-bold text-white text-sm">Deep Ravines of Bakola &amp; Lakkad Da</h3>
              <p className="text-[#86a898] leading-relaxed">
                Warm low-angle light filters through golden foliage, highlighting amber eyes as tigers awaken for dusk patrols.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: ETHICS */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#092218] border border-[#16432f] space-y-4">
          <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            Wildlife Photography Ethics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#86a898]">
            <p>• Never ask the driver to block a tiger&apos;s natural path or cut off animal movement.</p>
            <p>• Avoid repetitive clicking or flash illumination which can stress animals.</p>
            <p>• Respect other photographers and tourists by sharing prime viewing angles.</p>
            <p>• All photos must be taken strictly from inside the Gypsy without pole extensions.</p>
          </div>
        </section>

        {/* SECTION 6: FAQS & BOOKING BANNER */}
        <section className="space-y-8">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Photography Tour FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">Everything you need to plan a portfolio-grade shoot in Ranthambore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#86a898] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-emerald-500/30 text-center space-y-6 shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Book Your Custom Photography Tour
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed">
                Connect with our senior photo tour coordinator in Sawai Madhopur to design a bespoke multi-drive wildlife itinerary.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ vehicle: 'Private Photography Gypsy' })}
                className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-400/30"
              >
                Request Custom Photo Tour
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-[#06150f] hover:bg-[#092218] border border-[#16432f] text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>Call Specialist: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
