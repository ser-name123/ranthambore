'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Camera, 
  Sparkles, 
  ShieldCheck, 
  CheckCircle2, 
  Clock, 
  Calendar, 
  Users, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  Compass, 
  HelpCircle,
  Eye,
  Sliders,
  Sun
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function WildlifePhotographyTourPage() {
  const { openBookingModal } = useBookingModal();

  const tourFeatures = [
    {
      title: 'Dedicated Beanbags & Clamp Mounts',
      desc: 'All private Gypsies equipped with heavy-duty rice/beanbags mounted on door edges for vibration-free super-telephoto shooting.',
      icon: Camera,
    },
    {
      title: 'Veteran Naturalist & Light Tactician',
      desc: 'Accompanied by senior naturalists who understand sun direction, backlight rim glow, animal body language, and predictive behavior.',
      icon: Sun,
    },
    {
      title: 'Custom Vehicle Positioning',
      desc: 'Drivers instructed to angle the Gypsy for optimal lens clearance, unobstructed background bokeh, and zero dust blow.',
      icon: Sliders,
    },
    {
      title: 'Multi-Drive Flexibility (4 to 8 Safaris)',
      desc: 'Intensive itineraries combining morning mist at Padam Talao with late afternoon golden rim light at Bakola and Lakarda.',
      icon: Clock,
    },
  ];

  const gearRecommendations = [
    { category: 'Prime Telephoto', gear: '400mm f/2.8, 500mm f/4, or 600mm f/4 for tight big cat portraits and alert glances.' },
    { category: 'Telephoto Zoom', gear: '100-400mm or 70-200mm f/2.8 for environmental portraits and cubs with mothers.' },
    { category: 'Camera Bodies', gear: 'Dual full-frame or fast crop bodies to eliminate changing lenses in dusty field conditions.' },
    { category: 'Dust Protection', gear: 'Rain & dust covers, rocket blowers, and lens wraps for open 4x4 trails.' },
  ];

  const faqs = [
    {
      q: 'Can I bring big telephoto lenses and tripods into the park?',
      a: 'Handheld telephoto lenses and beanbags are fully permitted for tourists with standard still camera permits. Monopods can be used resting on vehicle floors. Tripods cannot be placed on the ground outside the Gypsy.',
    },
    {
      q: 'Do professional photographers need private Gypsies?',
      a: 'Yes, private Gypsies are strongly recommended. A private Gypsy allows you to wait patiently at a scenic waterhole for the tiger to drink without rushing or sharing window angles with other tourists.',
    },
    {
      q: 'What is the best time of year for tiger photography in Ranthambore?',
      a: 'March to June is the absolute prime season for photography. With natural watering holes drying up, tigers spend hours cooling down in lake shallows and water troughs in broad daylight.',
    },
    {
      q: 'Are drones or commercial video cameras allowed?',
      a: 'Drones are strictly banned under Indian wildlife law. Commercial documentary filmmaking with cinema rigs requires prior statutory permissions from the Chief Wildlife Warden of Rajasthan.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#0e0d0c] text-[#f4efea] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#a89985]">
            <Link href="/" className="hover:text-[#ea580c] transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-amber-400 font-semibold">Wildlife Photography Expeditions</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 text-amber-400 text-xs font-bold uppercase tracking-wider border border-amber-500/30">
                <Camera className="w-3.5 h-3.5" />
                Custom Wildlife Photography Safaris
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Wildlife Photography <span className="text-amber-400">Expeditions</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                Designed by photographers for photographers. Private Gypsy vehicles, beanbag mounts, top-ranked naturalists, and strategic positioning to capture world-class portfolio shots of Royal Bengal Tigers.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openBookingModal({ vehicle: 'Private Photography Gypsy', notes: 'Interested in Wildlife Photography Tour' })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-[#ea580c] hover:from-amber-400 hover:to-[#f97316] text-stone-950 font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Plan Photo Expedition
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello,%20I%20am%20a%20wildlife%20photographer%20planning%20an%20expedition%20to%20Ranthambore."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp Specialist</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: SPECIALIZED PHOTOGRAPHY ATTRIBUTES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tourFeatures.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div key={i} className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-white text-base">{feat.title}</h3>
                <p className="text-xs text-[#8a8175] leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </section>

        {/* SECTION 3: RECOMMENDED GEAR & FOCAL LENGTH GUIDE */}
        <section className="space-y-6 rounded-3xl bg-[#141210] border border-[#28221b] p-6 sm:p-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Essential Field Equipment Guide
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">
              Recommended optical focal lengths and accessories tailored for Ranthambore&apos;s terrain.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {gearRecommendations.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-[#1a1714] border border-[#2d241d] space-y-1.5 text-xs">
                <span className="font-bold text-amber-400 uppercase text-[11px]">{item.category}</span>
                <p className="text-[#c4b5a3] leading-relaxed">{item.gear}</p>
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
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-3">
              <span className="text-xs font-bold text-[#ea580c] uppercase">Morning Golden Mist</span>
              <h3 className="font-bold text-white text-sm">Sunrise at Padam Talao (Zone 3)</h3>
              <p className="text-[#a89985] leading-relaxed">
                As the morning sun hits the ancient Jogi Mahal and lake water lilies, steam rises creating ethereal silhouettes of deer herds and swimming tigers.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase">High Noon Reflections</span>
              <h3 className="font-bold text-white text-sm">Lake Shallows at Rajbagh</h3>
              <p className="text-[#a89985] leading-relaxed">
                During summer months, harsh sun drives tigers to submerge their bodies in clear waters right in front of the Rajput hunting palace ruins.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase">Late Afternoon Warmth</span>
              <h3 className="font-bold text-white text-sm">Deep Ravines of Bakola &amp; Lakkad Da</h3>
              <p className="text-[#a89985] leading-relaxed">
                Warm low-angle light filters through the golden Dhok leaves, highlighting the tiger&apos;s orange fur and amber eyes as they awaken for dusk patrol.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: RECOMMENDED MULTI-DAY ITINERARY */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Recommended Photography Expedition Blueprint (3N/4D)
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">A sample 6-safari itinerary designed to maximize chances of active behavior shots.</p>
          </div>

          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-amber-400">Day 1 (Afternoon):</span>
                <span className="text-white ml-2 font-semibold">Arrival &amp; Orientation Safari (Zones 1-5)</span>
              </div>
              <span className="text-[#8a8175]">Check camera settings &amp; beanbag positioning</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-amber-400">Day 2 (Full Day):</span>
                <span className="text-white ml-2 font-semibold">Morning Core Drive + Afternoon Valley Tracking</span>
              </div>
              <span className="text-[#8a8175]">Sunrise lake landscape &amp; active cat stalking</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-amber-400">Day 3 (Full Day):</span>
                <span className="text-white ml-2 font-semibold">Core Lake Circuit + Buffer Ravine Escarpment</span>
              </div>
              <span className="text-[#8a8175]">Leopard tracking &amp; crocodile feeding action</span>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <span className="font-bold text-amber-400">Day 4 (Morning):</span>
                <span className="text-white ml-2 font-semibold">Final Farewell Dawn Safari &amp; Departure</span>
              </div>
              <span className="text-[#8a8175]">Closing portrait series &amp; departure transfer</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: ETHICS & REGULATIONS */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#141210] border border-[#26211b] space-y-4">
          <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-amber-400" />
            Wildlife Photography Ethics
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#a89985]">
            <p>• Never ask the driver to block a tiger&apos;s natural path or cut off animal movement.</p>
            <p>• Avoid repetitive clicking or flash illumination which can stress young cubs or nursing mothers.</p>
            <p>• Respect other photographers and tourists by sharing prime shooting angles at sighting points.</p>
            <p>• All photos must be taken strictly from inside the Gypsy without any camera pole extensions.</p>
          </div>
        </section>

        {/* SECTION 7: FAQS & BOOKING BANNER */}
        <section className="space-y-10">
          <div className="max-w-2xl space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Photography Tour FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">Everything you need to plan a portfolio-grade shoot in Ranthambore.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#161412] border border-[#26211b] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#a89985] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#211a14] via-[#1c1713] to-[#261d15] border border-amber-500/30 text-center space-y-6 shadow-2xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Book Your Custom Photography Tour
              </h2>
              <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
                Connect with our senior photo tour coordinator in Sawai Madhopur to design a bespoke multi-drive wildlife itinerary.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ vehicle: 'Private Photography Gypsy' })}
                className="px-8 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-stone-950 font-bold text-sm shadow-xl transition cursor-pointer"
              >
                Request Custom Photo Tour
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call Specialist: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
