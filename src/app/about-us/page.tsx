'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Award, 
  Heart, 
  Star, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  MapPin, 
  Calendar, 
  Flame, 
  TreePine, 
  CheckCircle2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import AboutCompany from '@/components/AboutCompany';
import Testimonials from '@/components/Testimonials';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';

export default function AboutUsPage() {
  const { openBookingModal } = useBookingModal();
  const [activeTimeline, setActiveTimeline] = useState(1);

  const timelineMilestones = [
    {
      year: '1955',
      title: 'Sawai Madhopur Gaming Sanctuary',
      badge: 'Genesis',
      desc: 'The reserve was originally designated by the Indian government as the Sawai Madhopur Gaming Sanctuary to safeguard the royal hunting grounds of the Maharajas of Jaipur.',
    },
    {
      year: '1973',
      title: 'Project Tiger Reserve Induction',
      badge: 'Historic Landmark',
      desc: 'Recognizing its crucial Bengal tiger population, Ranthambore was brought under the prestigious national Project Tiger initiative to establish dedicated tiger conservation reserves.',
    },
    {
      year: '1980',
      title: 'Declared a National Park',
      badge: 'Full Protection',
      desc: 'The central core forest spanning 282.03 sq km was officially declared a National Park, instituting strict non-commercial wilderness laws and scientific forestry management.',
    },
    {
      year: '1984',
      title: 'Mansingh & Keladevi Sanctuaries',
      badge: 'Buffer Expansion',
      desc: 'To create vital migration corridors, the neighbouring deciduous woodlands of Sawai Mansingh Sanctuary and Keladevi Sanctuary were legally notified.',
    },
    {
      year: '1991',
      title: 'Greater Ranthambore Tiger Reserve',
      badge: 'Complete Amalgamation',
      desc: 'Sawai Mansingh Sanctuary in the south and Keladevi Sanctuary in the north were formally amalgamated into the Greater Ranthambore Tiger Reserve, encompassing over 1,300 sq km of protected wild habitat.',
    },
  ];

  const teamMembers = [
    {
      role: 'Chief Naturalist Tracker',
      name: 'Rameshwar Meena',
      exp: '18+ Years Forest Experience',
      bio: 'Lifelong resident of Sawai Madhopur with an extraordinary gift for identifying tiger alarm calls and tracking cat pugmarks across Zones 1–5.',
    },
    {
      role: 'Senior Safari Logistics Lead',
      name: 'Vikram Singh Rathore',
      exp: '12+ Years Operations',
      bio: 'Coordinates gate tokens, computerized vehicle allotments, and guest hotel pickups ensuring seamless departures across morning and evening shifts.',
    },
    {
      role: 'Wildlife Photographer & Guide',
      name: 'Kavita Sharma',
      exp: '9+ Years Photography',
      bio: 'Specialist in vehicle positioning for telephoto bird and big cat photography, golden hour lighting angles, and forest ecology interpretation.',
    },
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
          <span className="text-[#f59e0b] font-semibold">About Us</span>
        </nav>

        {/* SECTION 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            Local Wildlife Pioneers Since 2014
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            About Ranthambore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Wild Life Tour
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Based directly in Sawai Madhopur, we are an independent wildlife safari facilitation agency dedicated to ethical tiger tracking, authentic naturalist guidance, and seamless park permits.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 cursor-pointer transition duration-300"
            >
              <span>Speak With Our Team</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-sm border border-[#3d3228] flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>+91 99719 65629</span>
            </a>
          </div>
        </motion.div>

        {/* SECTION 2: Company Heritage & Trust Pillars Component */}
        <div className="mb-24">
          <AboutCompany onOpenBookingModal={openBookingModal} />
        </div>

        {/* SECTION 3: Historical Journey Timeline */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Conservation Chronicle
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ranthambore National Park: Brief Journey
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              From royal game preserve in 1955 to a globally celebrated Project Tiger haven.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {timelineMilestones.map((milestone, idx) => {
              const isActive = activeTimeline === idx;
              return (
                <button
                  key={milestone.year}
                  type="button"
                  onClick={() => setActiveTimeline(idx)}
                  className={`p-3.5 rounded-xl border text-left transition duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-[#ea580c]/20 border-[#ea580c] text-white shadow-lg'
                      : 'bg-[#181512] border-[#29221b] text-[#9c8e7e] hover:bg-[#201a15] hover:text-white'
                  }`}
                >
                  <span className={`block font-serif text-lg font-bold ${isActive ? 'text-[#f59e0b]' : 'text-zinc-400'}`}>
                    {milestone.year}
                  </span>
                  <span className="block text-xs font-bold truncate mt-0.5">
                    {milestone.title}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="p-7 sm:p-9 rounded-2xl bg-[#171411] border border-[#ea580c]/30 shadow-xl">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white mb-2">
              {timelineMilestones[activeTimeline].year} — {timelineMilestones[activeTimeline].title}
            </h3>
            <p className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed">
              {timelineMilestones[activeTimeline].desc}
            </p>
          </div>
        </div>

        {/* SECTION 4: Our Guiding Principles */}
        <div className="mb-24 p-8 rounded-2xl bg-[#191512] border border-[#2b241e] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Core Ethics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Ethical Wildlife Tourism Code
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#cfc0ae]">
            <div className="p-5 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <Heart className="w-5 h-5 text-[#ea580c]" />
              <h3 className="font-bold text-white text-sm">Wildlife First Ethos</h3>
              <p className="text-[#a89985]">
                We maintain respectful distances from tigers and wild animals, adhering to forest speed limits and zero-noise codes.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <ShieldCheck className="w-5 h-5 text-[#f59e0b]" />
              <h3 className="font-bold text-white text-sm">Transparent Quotas</h3>
              <p className="text-[#a89985]">
                No deceptive promises. We educate guests on the official 10-zone lottery and provide genuine government receipts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <Users className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Community Empowerment</h3>
              <p className="text-[#a89985]">
                100% of our drivers, naturalists, and desk managers are local residents of Sawai Madhopur and surrounding villages.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: Meet Our Naturalist Trackers */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Field Team
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Meet Our Jungle Trackers &amp; Naturalists
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Decades of wilderness knowledge passed down through generations in Ranthambore.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {teamMembers.map((member) => (
              <SpotlightCard
                key={member.name}
                spotlightColor="rgba(245, 158, 11, 0.16)"
                enableTilt={true}
                className="glass-card p-6 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-3"
              >
                <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="font-serif text-lg font-bold text-white">{member.name}</h3>
                <span className="text-xs font-semibold text-[#f59e0b] block">{member.role}</span>
                <span className="text-[11px] text-[#8c7f70] block">{member.exp}</span>
                <p className="text-xs text-[#a89985] leading-relaxed pt-2 border-t border-[#261f18]">
                  {member.bio}
                </p>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* SECTION 6: Testimonials & Trust */}
        <div className="mb-24">
          <Testimonials />
        </div>

        {/* SECTION 7: Office Coordinates & Quick Enquiry */}
        <div>
          <QuickEnquirySection />
        </div>
      </div>
    </div>
  );
}
