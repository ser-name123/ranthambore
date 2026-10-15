'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  ShieldCheck, 
  Users, 
  Heart, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone
} from 'lucide-react';
import { motion } from 'framer-motion';
import AboutCompany from '@/components/AboutCompany';
import Testimonials from '@/components/Testimonials';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref } from '@/lib/site-content';

export default function AboutUsPage() {
  const { contact } = useSiteContent();
  const { openBookingModal } = useBookingModal();
  const [activeTimeline, setActiveTimeline] = useState(1);

  const timelineMilestones = [
    {
      year: '1955',
      title: 'Sawai Madhopur Gaming Sanctuary',
      badge: 'Genesis',
      desc: 'Originally designated as the Sawai Madhopur Gaming Sanctuary to safeguard royal hunting grounds.',
    },
    {
      year: '1973',
      title: 'Project Tiger Reserve Induction',
      badge: 'Historic Landmark',
      desc: 'Ranthambore was brought under the national Project Tiger initiative to establish dedicated tiger conservation reserves.',
    },
    {
      year: '1980',
      title: 'Declared a National Park',
      badge: 'Full Protection',
      desc: 'The central core forest spanning 282 sq km was officially declared a National Park, instituting strict protection.',
    },
    {
      year: '1984',
      title: 'Mansingh & Keladevi Sanctuaries',
      badge: 'Corridor Expansion',
      desc: 'Deciduous woodlands of Sawai Mansingh and Keladevi Sanctuaries were notified to create vital tiger corridors.',
    },
    {
      year: '1991',
      title: 'Greater Ranthambore Tiger Reserve',
      badge: 'Complete Sanctuary',
      desc: 'Amalgamated into the Greater Ranthambore Tiger Reserve, encompassing over 1,300 sq km of protected wild habitat.',
    },
  ];

  const teamMembers = [
    {
      role: 'Chief Naturalist Tracker',
      name: 'Rameshwar Meena',
      exp: '18+ Years Forest Experience',
      bio: 'Lifelong resident of Sawai Madhopur with an extraordinary gift for identifying tiger alarm calls and tracking pugmarks.',
    },
    {
      role: 'Senior Safari Logistics Lead',
      name: 'Vikram Singh Rathore',
      exp: '12+ Years Operations',
      bio: 'Coordinates gate tokens, computerized vehicle allotments, and guest hotel pickups ensuring seamless departures.',
    },
    {
      role: 'Wildlife Photographer & Guide',
      name: 'Kavita Sharma',
      exp: '9+ Years Photography',
      bio: 'Specialist in vehicle positioning for telephoto bird and big cat photography, golden hour angles, and forest ecology.',
    },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-white text-[#082318]">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[#b45309] font-semibold">About Us</span>
        </nav>

        {/* Visual Hero Banner with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-white shadow-xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/images/tiger_foliage.jpg"
              alt="Bengal tiger peering through lush jungle leaves"
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/40" />
          </div>

          <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 backdrop-blur-md">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                Local Wildlife Pioneers Since 2014
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                About Ranthambore <span className="text-[#b45309]">Wild Life Tour</span>
              </h1>
              <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                Based directly in Sawai Madhopur, we are an independent wildlife safari facilitation agency dedicated to ethical tiger tracking, authentic naturalist guidance, and verified park permits.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-sm shadow-md transition cursor-pointer flex items-center gap-2"
              >
                <span>Plan Your Safari</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={telHref(contact.phonePrimary)}
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#f0f6f2] text-[#082318] border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{contact.phonePrimary}</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: Company Heritage & Trust Pillars Component */}
        <AboutCompany onOpenBookingModal={openBookingModal} />

        {/* SECTION 3: Historical Journey Timeline */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b45309]">
              Conservation Chronicle
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082318]">
              Ranthambore National Park: Brief Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              From royal game preserve in 1955 to a globally celebrated Project Tiger haven.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5">
            {timelineMilestones.map((milestone, idx) => {
              const isActive = activeTimeline === idx;
              return (
                <button
                  key={milestone.year}
                  type="button"
                  onClick={() => setActiveTimeline(idx)}
                  className={`p-3.5 rounded-xl border text-left transition duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 border-emerald-600 text-[#082318] shadow-sm'
                      : 'bg-[#f8faf8] border-[#d2e4d9] text-[#517362] hover:bg-[#f0f6f2] hover:text-[#082318]'
                  }`}
                >
                  <span className={`block font-serif text-lg font-bold ${isActive ? 'text-emerald-800' : 'text-[#517362]'}`}>
                    {milestone.year}
                  </span>
                  <span className="block text-xs font-bold truncate mt-0.5">
                    {milestone.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-7 sm:p-9 rounded-2xl bg-white border border-[#d2e4d9] shadow-md">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082318] mb-2">
              {timelineMilestones[activeTimeline].year} — {timelineMilestones[activeTimeline].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#375847] leading-relaxed">
              {timelineMilestones[activeTimeline].desc}
            </p>
          </div>
        </section>

        {/* SECTION 4: Our Guiding Principles */}
        <section className="p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-6 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Core Ethics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Ethical Wildlife Tourism Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#375847]">
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Heart className="w-5 h-5 text-[#b45309]" />
              <h3 className="font-bold text-[#082318] text-sm">Wildlife First Ethos</h3>
              <p className="text-[#517362]">
                We maintain respectful distances from tigers and wild animals, adhering to forest speed limits and zero-noise codes.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-[#082318] text-sm">Transparent Quotas</h3>
              <p className="text-[#517362]">
                No false promises. We educate guests on the official 10-zone lottery and provide genuine government receipts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Users className="w-6 h-6 text-teal-700" />
              <h3 className="font-bold text-[#082318] text-sm">Community Empowerment</h3>
              <p className="text-[#517362]">
                100% of our drivers, naturalists, and desk managers are local residents of Sawai Madhopur and surrounding villages.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Meet Our Naturalist Trackers */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b45309]">
              Field Team
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082318]">
              Meet Our Jungle Trackers &amp; Naturalists
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Decades of wilderness knowledge passed down through generations in Ranthambore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <SpotlightCard
                key={member.name}
                spotlightColor="rgba(4, 120, 87, 0.12)"
                enableTilt={true}
                className="bg-white p-6 rounded-2xl border border-[#d2e4d9] space-y-3 shadow-md hover:border-emerald-600 hover:shadow-xl transition duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-[#082318]">{member.name}</h3>
                <span className="text-xs font-semibold text-[#b45309] block">{member.role}</span>
                <span className="text-[11px] text-[#2e5241] font-semibold block">{member.exp}</span>
                <p className="text-xs text-[#1b3a2a] leading-relaxed font-normal pt-2 border-t border-[#e2ede6]">
                  {member.bio}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* SECTION 6: Testimonials & Trust */}
        <Testimonials />

        {/* SECTION 7: Office Coordinates & Quick Enquiry */}
        <QuickEnquirySection />
      </div>
    </div>
  );
}
