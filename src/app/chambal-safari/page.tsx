'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Waves, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Castle
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ChambalSafariPage() {
  const { openBookingModal } = useBookingModal();

  const highlights = [
    { title: 'National Chambal Sanctuary', desc: 'Pristine river ecosystem situated 45 km from Sawai Madhopur at Palighat.' },
    { title: 'Critically Endangered Gharials', desc: 'Home to the world’s largest breeding population of long-snouted Gharials.' },
    { title: 'Marsh Mugger Crocodiles', desc: 'Spot massive marsh crocodiles basking silently on sandy river islets.' },
    { title: 'UNESCO 10th-Century Fort Trek', desc: 'Explore Trinetra Ganesha Temple, 7 colossal stone gates, and ancient stepwells.' },
  ];

  const riverWildlife = [
    { name: 'Gharial (Gavialis gangeticus)', desc: 'Prehistoric fish-eating crocodilians with slender snouts swimming gracefully in clear waters.' },
    { name: 'Mugger Crocodile', desc: 'Powerful broad-snouted apex predators sunbathing along rocky shores.' },
    { name: 'Gangetic River Dolphin', desc: 'Rare freshwater mammals surfacing for breaths in deep river channels.' },
    { name: 'Indian Skimmers & Waterfowl', desc: 'Over 300 bird species including Bar-headed geese and Sarus Cranes.' },
  ];

  const faqs = [
    {
      q: 'How far is the Chambal River safari from Ranthambore?',
      a: 'The boarding point at Palighat is approximately 45 km (about 1 hour scenic drive) from Sawai Madhopur.',
    },
    {
      q: 'How long is the Chambal boat ride?',
      a: 'The motorboat safari lasts approximately 1 to 1.5 hours along the calm, tranquil river. Life jackets are provided.',
    },
    {
      q: 'Can we combine Chambal boating with Ranthambore Fort in a single day?',
      a: 'Yes! A morning Chambal river cruise followed by an afternoon visit to Ranthambore Fort is our most popular day combo.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <Link href="/services" className="hover:text-emerald-700 transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
            <span className="text-[#047857] font-semibold">Chambal Safari &amp; Fort Excursion</span>
          </nav>

          {/* Visual Hero Banner with Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-[#f4f8f5] shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_ruins.jpg"
                alt="Ancient Ranthambore Fort ruins amidst forest"
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
                  <Waves className="w-3.5 h-3.5 text-emerald-700" />
                  River Boating &amp; Heritage Citadel Day Tour
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                  Ranthambore Fort &amp; <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 to-teal-700">Chambal River Boating</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Experience Rajasthan&apos;s wildest aquatic marvel. Cruise the unpolluted waters of the National Chambal Sanctuary to observe prehistoric Gharials and crocodiles, followed by a dramatic trek up the 10th-century Ranthambore Fort.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ notes: 'Interested in Chambal Safari & Fort Excursion' })}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white font-bold text-sm shadow-lg transition cursor-pointer"
                >
                  Book Chambal Day Tour
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20inquire%20about%20Chambal%20River%20boating%20and%20Fort%20tour."
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

        {/* SECTION 2: HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((hl, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm hover:border-emerald-600 transition space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#082318] text-base">{hl.title}</h3>
              <p className="text-xs text-[#517362] leading-relaxed">{hl.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 3: CHAMBAL RIVER WILDLIFE */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Aquatic Wildlife of the Chambal River
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">One of the cleanest and most biodiversity-rich river sanctuaries in Asia.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {riverWildlife.map((item, idx) => (
              <div key={idx} className="p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-emerald-700 font-bold text-sm">
                  <Waves className="w-4 h-4" />
                  <span>{item.name}</span>
                </div>
                <p className="text-xs text-[#517362] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: RANTHAMBORE FORT OVERVIEW */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] shadow-sm space-y-6">
          <div className="max-w-3xl space-y-1">
            <Castle className="w-8 h-8 text-[#d97706]" />
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              UNESCO World Heritage Ranthambore Fort
            </h2>
            <p className="text-xs sm:text-sm text-[#517362] leading-relaxed">
              Perched atop a 700-foot sheer cliff within the core tiger reserve, this fortress dates back to 944 AD. Hike through massive stone gates, admire 360-degree views of Padam Talao below, and pay homage at the revered Trinetra Ganesha Temple.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <span className="font-bold text-[#082318]">Trinetra Ganesha</span>
              <p className="text-[#517362]">Ancient 3-eyed Ganesha temple receiving wedding invitations from across India daily.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <span className="font-bold text-[#082318]">Panoramic Lake Views</span>
              <p className="text-[#517362]">Look down from high stone ramparts directly into Zone 3 and spot wild deer &amp; tigers.</p>
            </div>
            <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1">
              <span className="font-bold text-[#082318]">Rajput Architecture</span>
              <p className="text-[#517362]">Intricate stone cenotaphs (chhatris), ancient stepwells, and Badal Mahal ruins.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: FAQS & CTA */}
        <section className="space-y-8">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Chambal &amp; Fort FAQs
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Helpful tips for planning your river and fort day tour.</p>
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

          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-[#92400e] text-white text-center space-y-6 shadow-xl">
            <div className="max-w-2xl mx-auto space-y-3">
              <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
                Book Chambal Boating &amp; Fort Excursion
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Complete private package including sanitized AC cab, driver, forest boat tickets, and guide. Speak with our local desk to reserve your excursion.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => openBookingModal({ notes: 'Interested in Chambal Safari & Fort Tour' })}
                className="px-8 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-[#082318] font-bold text-sm shadow-xl transition cursor-pointer"
              >
                Inquire Excursion Rates
              </button>
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 border border-emerald-400/40 text-white font-bold text-sm flex items-center gap-2 transition"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>Call Helpline: +91 99719 65629</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
