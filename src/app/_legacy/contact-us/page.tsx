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
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

export default function ContactUsPage() {
  const { contact } = useSiteContent();
  const contactChannels = [
    {
      icon: Phone,
      title: 'Direct Safari Helplines',
      desc: 'Speak directly with our Sawai Madhopur booking executives.',
      details: [`${contact.phonePrimary} (Primary)`, `${contact.phoneSecondary} (Alternate)`],
      action: telHref(contact.phonePrimary),
      actionText: 'Call Now',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp Wildlife Desk',
      desc: 'Instant date checking, zone quotes, and permit verification.',
      details: ['Instant response 6 AM – 10 PM', 'Direct quotation PDF delivery'],
      action: waHref(contact.whatsapp, 'Hello Ranthambore Wild Life Tour, I want to enquire about Safari Booking.'),
      actionText: 'Chat on WhatsApp',
    },
    {
      icon: Mail,
      title: 'Official Email Support',
      desc: 'Send corporate group or bespoke photography tour inquiries.',
      details: [contact.email, 'Replies within 2 to 4 hours'],
      action: `mailto:${contact.email}`,
      actionText: 'Send Email',
    },
    {
      icon: Clock,
      title: 'Operating Hours',
      desc: 'Open 7 days a week including all public & park holidays.',
      details: [contact.supportHours, 'Morning shift gate support from 5:30 AM'],
      action: '#inquiry-form',
      actionText: 'Submit Inquiry',
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
          <span className="text-[#b45309] font-semibold">Contact Us</span>
        </nav>

        {/* Visual Hero Banner with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-white shadow-xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/images/tiger_portrait.jpg"
              alt="Royal Bengal Tiger gazing directly ahead"
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
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                On-Ground Sawai Madhopur Safari Helpdesk
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                Contact Ranthambore <span className="text-[#b45309]">Wild Life Tour</span>
              </h1>
              <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                Have questions regarding vehicle quotas, zone allocations, or custom itineraries? Speak directly with our local reservation desk in Sawai Madhopur.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={telHref(contact.phonePrimary)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] hover:from-emerald-800 hover:to-[#b45309] text-white font-bold text-sm shadow-md transition cursor-pointer flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{contact.phonePrimary}</span>
              </a>
              <a
                href={waHref(contact.whatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#f0f6f2] text-[#082318] border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
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
                spotlightColor="rgba(4, 120, 87, 0.12)"
                enableTilt={true}
                className="bg-white p-6 rounded-2xl border border-[#d2e4d9] space-y-4 flex flex-col justify-between shadow-md hover:shadow-xl hover:border-emerald-600 transition duration-300"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center font-bold border border-emerald-200">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-serif text-lg font-bold text-[#082318]">{channel.title}</h3>
                  <p className="text-xs text-[#1b3a2a] leading-relaxed font-normal">{channel.desc}</p>
                  <div className="space-y-1 pt-2 border-t border-[#e2ede6] text-xs font-bold text-[#082318]">
                    {channel.details.map((detail, idx) => (
                      <div key={idx} className="truncate">{detail}</div>
                    ))}
                  </div>
                </div>

                <a
                  href={channel.action}
                  className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-700 text-[#082318] hover:text-white text-center font-bold text-xs border border-emerald-200 hover:border-emerald-700 transition duration-200 block shadow-xs"
                >
                  {channel.actionText}
                </a>
              </SpotlightCard>
            );
          })}
        </div>

        {/* SECTION 3: Physical Office Coordinates */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                <MapPin className="w-3.5 h-3.5 text-emerald-700" />
                Physical Head Office
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
                Visit Our Sawai Madhopur Reservation Office
              </h2>
              <p className="text-xs sm:text-sm text-[#375847] leading-relaxed">
                We welcome visitors at our on-ground office. Drop by to verify original IDs, pick up printed safari vouchers, meet your assigned naturalist, or arrange luggage storage between morning and afternoon shifts.
              </p>
              <div className="p-4 rounded-xl bg-white border border-[#d2e4d9] space-y-1 text-xs text-[#517362] shadow-sm">
                <span className="font-bold text-[#082318] block">Office Address:</span>
                <p>{contact.address}</p>
                <p className="text-[#b45309] font-medium">Landmark: 2.5 km from Sawai Madhopur Railway Station (SWM)</p>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#d2e4d9] space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#082318] flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-700" />
                Direct Desk Assistance
              </h3>
              <ul className="space-y-2.5 text-xs text-[#375847]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Tatkal &amp; current booking token submission</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Station pickup and hotel check-in coordination</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
                  <span>Official computerized government receipt handover</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0" />
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
