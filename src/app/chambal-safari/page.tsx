'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Waves, 
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
  HelpCircle,
  MapPin,
  Compass,
  Camera,
  Castle,
  LifeBuoy
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ChambalSafariPage() {
  const { openBookingModal } = useBookingModal();

  const highlights = [
    { title: 'National Chambal Sanctuary', desc: 'Protected pristine river ecosystem situated 45 km from Sawai Madhopur at Palighat.' },
    { title: 'Critically Endangered Gharials', desc: 'Home to the world’s largest breeding population of fish-eating long-snouted Gharials.' },
    { title: 'Marsh Mugger Crocodiles', desc: 'Spot massive 14-foot marsh crocodiles basking silently on sandy river islets.' },
    { title: 'UNESCO 10th-Century Fort Trek', desc: 'Explore Trinetra Ganesha Temple, 7 colossal stone gates, and ancient stepwells.' },
  ];

  const riverWildlife = [
    { name: 'Gharial (Gavialis gangeticus)', desc: 'Prehistoric fish-eating crocodilians with slender snouts, swimming gracefully in transparent waters.' },
    { name: 'Mugger Crocodile', desc: 'Powerful broad-snouted apex predators sunbathing along rocky limestone shores.' },
    { name: 'Gangetic River Dolphin', desc: 'Rare freshwater mammal surfacing for breaths in deep Chambal river channels.' },
    { name: 'Indian Skimmers & Waterfowl', desc: 'Over 300 bird species including Bar-headed geese, Black-bellied terns, and Sarus Cranes.' },
  ];

  const faqs = [
    {
      q: 'How far is the Chambal River safari from Ranthambore?',
      a: 'The boarding point at Palighat on the Chambal River is approximately 45 km (about 1 hour scenic drive) from Sawai Madhopur through rural mustard fields.',
    },
    {
      q: 'How long is the Chambal boat ride?',
      a: 'The motorboat safari lasts approximately 1 to 1.5 hours along the calm, tranquil river. Life jackets and licensed forest department boatmen are mandatory.',
    },
    {
      q: 'Can we combine Chambal boating with Ranthambore Fort in a single day?',
      a: 'Yes! Many guests do a morning Chambal river cruise followed by an afternoon visit to Ranthambore Fort and Trinetra Ganesha Temple on their non-safari day.',
    },
    {
      q: 'Is private taxi transport included?',
      a: 'We provide round-trip private AC cab transfers from your Ranthambore hotel directly to Palighat and the Fort gate with waiting driver.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#0e0d0c] text-[#f4efea] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-[140px] pointer-events-none" />
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
            <Link href="/services" className="hover:text-[#ea580c] transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-cyan-400 font-semibold">Chambal Safari &amp; Fort Excursion</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 text-cyan-400 text-xs font-bold uppercase tracking-wider border border-cyan-500/30">
                <Waves className="w-3.5 h-3.5" />
                River Boating &amp; Heritage Citadel Day Tour
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ranthambore Fort &amp; <span className="text-cyan-400">Chambal River Boating</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                Experience Rajasthan&apos;s wildest aquatic marvel. Cruise the unpolluted waters of the National Chambal Sanctuary to observe prehistoric Gharials and crocodiles, followed by a dramatic trek up the 10th-century Ranthambore Fort.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openBookingModal({ notes: 'Interested in Chambal Safari & Fort Excursion' })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-600 to-[#ea580c] hover:from-cyan-500 hover:to-[#f97316] text-white font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Chambal Day Tour
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20inquire%20about%20Chambal%20River%20boating%20and%20Fort%20tour."
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

        {/* SECTION 2: HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((hl, i) => (
            <div key={i} className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 flex items-center justify-center text-cyan-400 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-white text-base">{hl.title}</h3>
              <p className="text-xs text-[#8a8175] leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: CHAMBAL RIVER WILDLIFE */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Aquatic Wildlife of the Chambal River
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">One of the cleanest and most biodiversity-rich river sanctuaries in Asia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {riverWildlife.map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#161412] border border-[#28221b] space-y-2">
                <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
                  <Waves className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                <p className="text-xs text-[#a89985] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: RANTHAMBORE FORT OVERVIEW */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <div className="max-w-3xl space-y-2">
            <Castle className="w-8 h-8 text-amber-400" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              UNESCO World Heritage Ranthambore Fort
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175] leading-relaxed">
              Perched atop a 700-foot sheer cliff within the core tiger reserve, this monumental Chauhan fortress dates back to 944 AD. Hike through massive stone gates (Navlakha Pol, Hathi Pol), admire 360-degree views of Padam Talao below, and pay homage at the revered Trinetra Ganesha Temple.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] space-y-1">
              <span className="font-bold text-white">Trinetra Ganesha</span>
              <p className="text-[#8a8175]">Ancient 3-eyed Ganesha temple receiving wedding invitations from across India daily.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] space-y-1">
              <span className="font-bold text-white">Panoramic Lake Views</span>
              <p className="text-[#8a8175]">Look down from high stone ramparts directly into Zone 3 and spot swimming tigers.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2d241d] space-y-1">
              <span className="font-bold text-white">Rajput Stone Architecture</span>
              <p className="text-[#8a8175]">Intricate stone cenotaphs (chhatris), ancient stepwells, and Badal Mahal palaces.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: FULL-DAY TOUR ITINERARY BLUEPRINT */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Sample Day Excursion Schedule
          </h2>
          <div className="space-y-3 text-xs">
            <div className="p-4 rounded-xl bg-[#161412] border border-[#28221b] flex items-center justify-between">
              <div>
                <span className="font-bold text-cyan-400">08:30 AM:</span>
                <span className="text-white ml-2">Private AC cab pickup from your Ranthambore hotel</span>
              </div>
              <span className="text-[#8a8175]">Scenic 1-hour countryside drive</span>
            </div>
            <div className="p-4 rounded-xl bg-[#161412] border border-[#28221b] flex items-center justify-between">
              <div>
                <span className="font-bold text-cyan-400">10:00 AM:</span>
                <span className="text-white ml-2">Board authorized motorboat at Palighat for 1.5h Chambal river cruise</span>
              </div>
              <span className="text-[#8a8175]">Spot Gharials, Crocodiles &amp; Skimmers</span>
            </div>
            <div className="p-4 rounded-xl bg-[#161412] border border-[#28221b] flex items-center justify-between">
              <div>
                <span className="font-bold text-cyan-400">01:00 PM:</span>
                <span className="text-white ml-2">Return to Sawai Madhopur for traditional lunch</span>
              </div>
              <span className="text-[#8a8175]">Authentic Rajasthani cuisine</span>
            </div>
            <div className="p-4 rounded-xl bg-[#161412] border border-[#28221b] flex items-center justify-between">
              <div>
                <span className="font-bold text-cyan-400">03:30 PM:</span>
                <span className="text-white ml-2">Guided trek of Ranthambore Fort &amp; Trinetra Ganesha Temple</span>
              </div>
              <span className="text-[#8a8175]">Sunset over tiger valley</span>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Chambal &amp; Fort FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#161412] border border-[#26211b] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#a89985] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#17201f] via-[#141817] to-[#1c1f17] border border-cyan-500/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Book Chambal Boating &amp; Fort Excursion
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
              Complete private package including sanitized AC cab, driver, forest boat tickets, and guide. Speak with our local desk to reserve your excursion.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ notes: 'Interested in Chambal Safari & Fort Tour' })}
              className="px-8 py-3.5 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white font-bold text-sm shadow-xl transition cursor-pointer"
            >
              Inquire Excursion Rates
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>Call Helpline: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
