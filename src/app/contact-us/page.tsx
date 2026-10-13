'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Send, 
  Sparkles, 
  Building, 
  Info 
} from 'lucide-react';
import { motion } from 'framer-motion';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import FaqSection from '@/components/FaqSection';
import SpotlightCard from '@/components/SpotlightCard';

export default function ContactUsPage() {
  const contactChannels = [
    {
      icon: Phone,
      title: 'Direct Safari Helplines',
      desc: 'Speak directly with our Sawai Madhopur booking executives.',
      details: ['+91 99719 65629 (Primary)', '+91 78349 42435 (Alternate)'],
      action: 'tel:+919971965629',
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Wildlife Desk',
      desc: 'Instant date checking, zone quotes, and permit verification.',
      details: ['Instant response 6 AM – 10 PM', 'Direct quotation PDF delivery'],
      action: 'https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20enquire%20about%20Safari%20Booking.',
      actionText: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      title: 'Official Email Support',
      desc: 'Send detailed corporate group or bespoke photography inquiries.',
      details: ['info@ranthamborewildlifetour.com', 'Replies within 2 to 4 hours'],
      action: 'mailto:info@ranthamborewildlifetour.com',
      actionText: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      desc: 'Open 7 days a week including all public and wildlife season holidays.',
      details: ['06:00 AM – 10:00 PM (Daily)', 'Morning shift gate assistance from 5:30 AM'],
      action: '#inquiry-form',
      actionText: 'Submit Inquiry',
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
          <span className="text-[#f59e0b] font-semibold">Contact Us</span>
        </nav>

        {/* SECTION 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#ea580c]" />
            On-Ground Sawai Madhopur Safari Helpdesk
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Contact Ranthambore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Wild Life Tour
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Have questions regarding vehicle quotas, zone allocations, or custom tour itineraries? Speak directly with our local reservation desk located right in Sawai Madhopur.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8c7f70]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Direct Phone &amp; WhatsApp Active</span>
            </span>
            <span>•</span>
            <span>Average Response: Under 15 Minutes</span>
          </div>
        </motion.div>

        {/* SECTION 2: 4-Column Contact Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <SpotlightCard
                key={channel.title}
                spotlightColor="rgba(234, 88, 12, 0.16)"
                enableTilt={true}
                className="glass-card p-6 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">{channel.title}</h3>
                  <p className="text-xs text-[#a89985] leading-relaxed">{channel.desc}</p>
                  <div className="space-y-1 pt-2 border-t border-[#261f18] text-xs font-semibold text-white">
                    {channel.details.map((detail, idx) => (
                      <div key={idx} className="truncate">{detail}</div>
                    ))}
                  </div>
                </div>

                <a
                  href={channel.action}
                  className="w-full py-2.5 rounded-xl bg-[#221c17] hover:bg-[#ea580c] text-white hover:text-white text-center font-bold text-xs border border-[#3d3228] hover:border-[#ea580c] transition duration-200 block"
                >
                  {channel.actionText}
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        {/* SECTION 3: Physical Office Coordinates & Visiting Guidelines */}
        <div className="mb-24 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#1c1813] via-[#211a14] to-[#181410] border border-[#ea580c]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Physical Head Office
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Visit Our Sawai Madhopur Reservation Office
              </h2>
              <p className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed">
                We welcome visitors at our on-ground safari office. Drop by to verify original IDs, pick up printed safari vouchers, meet your assigned naturalist guide, or arrange luggage storage between morning and afternoon shifts.
              </p>
              <div className="p-4 rounded-xl bg-[#120f0d] border border-[#2b221a] space-y-1.5 text-xs text-[#a89985]">
                <span className="font-bold text-white block">Office Address:</span>
                <p>Near Ranthambore Circle, Ranthambore Road, Sawai Madhopur, Rajasthan – 322001, India</p>
                <p className="text-[#f59e0b]">Landmark: Just 2.5 km from Sawai Madhopur Railway Station (SWM)</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#120f0d] p-6 rounded-xl border border-[#2b221a] space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Direct Desk Assistance
              </h3>
              <ul className="space-y-2.5 text-xs text-[#b8a794]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Tatkal &amp; current booking token submission</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Station pickup and hotel check-in coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Official computerized government receipt handover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Foreign tourist passport verification support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* SECTION 4: Direct Interactive Quick Enquiry Form */}
        <div id="inquiry-form" className="mb-24">
          <QuickEnquirySection />
        </div>

        {/* SECTION 5: Emergency Tatkal / Current Safari Desk */}
        <div className="mb-24 p-6 sm:p-8 rounded-2xl bg-[#191512] border border-[#ea580c]/30 space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <h3 className="font-serif text-lg font-bold text-white">
                Urgent Last-Minute / Tatkal Safari Bookings
              </h3>
              <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
                Need a safari permit for tomorrow morning or afternoon? Current bookings must be requested at least 1 day in advance before government gate quota closure. Call our urgent helpline directly at{' '}
                <a href="tel:+919971965629" className="text-[#ea580c] font-bold underline">+91 99719 65629</a>{' '}
                for instant live gate inventory availability.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 6: Statutory Compliance Notice */}
        <div className="mb-24 p-6 rounded-2xl bg-[#15120e] border border-[#30251c] text-xs text-[#8f8071] space-y-2">
          <div className="flex items-center gap-2 font-semibold text-[#cfc0ae]">
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            <span>Statutory Compliance Notice</span>
          </div>
          <p className="leading-relaxed">
            Ranthambore Wild Life Tour is an independent private safari facilitation company operating in Sawai Madhopur. We assist travelers with official permit acquisition, luxury jungle resort arrangements, and naturalist guide allocations. We are not the official website of the Rajasthan Forest Department. All park admissions are regulated under government wildlife guidelines.
          </p>
        </div>

        {/* SECTION 7: Contact FAQs */}
        <div>
          <FaqSection />
        </div>
      </div>
    </div>
  );
}
