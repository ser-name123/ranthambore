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
  ArrowLeft, 
  ChevronRight, 
  Sparkles 
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
      desc: 'Send corporate group or bespoke photography tour inquiries.',
      details: ['info@ranthamborewildlifetour.com', 'Replies within 2 to 4 hours'],
      action: 'mailto:info@ranthamborewildlifetour.com',
      actionText: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      desc: 'Open 7 days a week including all public & park holidays.',
      details: ['06:00 AM – 10:00 PM (Daily)', 'Morning shift gate support from 5:30 AM'],
      action: '#inquiry-form',
      actionText: 'Submit Inquiry',
    },
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
          <span className="text-amber-400 font-semibold">Contact Us</span>
        </nav>

        {/* Visual Hero Banner with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-[#16432f] bg-[#092218] shadow-2xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/images/tiger_portrait.jpg"
              alt="Royal Bengal Tiger gazing directly ahead"
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
                <Sparkles className="w-3.5 h-3.5" />
                On-Ground Sawai Madhopur Safari Helpdesk
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                Contact Ranthambore <span className="text-amber-400">Wild Life Tour</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed">
                Have questions regarding vehicle quotas, zone allocations, or custom itineraries? Speak directly with our local reservation desk in Sawai Madhopur.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href="tel:+919971965629"
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-400/30 flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>+91 99719 65629</span>
              </a>
              <a
                href="https://wa.me/919971965629"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-[#092218] hover:bg-[#113123] text-emerald-400 border border-[#16432f] font-bold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: 4-Column Contact Coordinates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {contactChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <SpotlightCard
                key={channel.title}
                spotlightColor="rgba(16, 185, 129, 0.16)"
                enableTilt={true}
                className="glass-card p-6 rounded-2xl border border-[#16432f] bg-[#092218] space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-white">{channel.title}</h3>
                  <p className="text-xs text-[#86a898] leading-relaxed">{channel.desc}</p>
                  <div className="space-y-1 pt-2 border-t border-[#16432f] text-xs font-semibold text-[#f2f7f4]">
                    {channel.details.map((detail, idx) => (
                      <div key={idx} className="truncate">{detail}</div>
                    ))}
                  </div>
                </div>

                <a
                  href={channel.action}
                  className="w-full py-2.5 rounded-xl bg-[#06150f] hover:bg-emerald-600 text-[#c2d7cd] hover:text-white text-center font-bold text-xs border border-[#16432f] hover:border-emerald-500 transition duration-200 block"
                >
                  {channel.actionText}
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        {/* SECTION 3: Physical Office Coordinates */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-emerald-500/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Physical Head Office
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                Visit Our Sawai Madhopur Reservation Office
              </h2>
              <p className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed">
                We welcome visitors at our on-ground office. Drop by to verify original IDs, pick up printed safari vouchers, meet your assigned naturalist, or arrange luggage storage between morning and afternoon shifts.
              </p>
              <div className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1 text-xs text-[#86a898]">
                <span className="font-bold text-white block">Office Address:</span>
                <p>Near Ranthambore Circle, Ranthambore Road, Sawai Madhopur, Rajasthan – 322001, India</p>
                <p className="text-amber-400">Landmark: 2.5 km from Sawai Madhopur Railway Station (SWM)</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-[#06150f] p-6 rounded-2xl border border-[#16432f] space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                Direct Desk Assistance
              </h3>
              <ul className="space-y-2.5 text-xs text-[#c2d7cd]">
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
        <div id="inquiry-form">
          <QuickEnquirySection />
        </div>

        {/* SECTION 5: Contact FAQs */}
        <FaqSection />
      </div>
    </div>
  );
}
