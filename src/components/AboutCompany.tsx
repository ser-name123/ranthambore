'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Award, Users, HeartHandshake, Compass, CheckCircle2, ArrowRight } from 'lucide-react';

interface AboutCompanyProps {
  onOpenBookingModal: () => void;
}

export default function AboutCompany({ onOpenBookingModal }: AboutCompanyProps) {
  const stats = [
    { value: '12+', label: 'Years in Ranthambore', sub: 'Local Sawai Madhopur roots' },
    { value: '15,000+', label: 'Successful Safaris', sub: 'Gypsy & Canter permits' },
    { value: '98%', label: 'Sightings Satisfaction', sub: 'Tigers, leopards, sloth bears' },
    { value: '4.9/5', label: 'Customer Trust Rating', sub: 'Verified traveller reviews' },
  ];

  return (
    <section className="py-24 bg-[#171412] relative overflow-hidden border-t border-[#29221b]" id="about-us">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Collage & Experience Badge */}
          <div className="lg:col-span-6 relative">
            <div className="relative h-[420px] sm:h-[480px] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#382e25]">
              <Image
                src="/images/resort_luxury.jpg"
                alt="Ranthambore Wild Life Tour Hospitality and Safaris"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141210] via-transparent to-black/20" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:right-6 glass-panel p-5 rounded-2xl border border-[#ea580c]/40 shadow-2xl max-w-xs animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#ea580c] to-[#f59e0b] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                  12+
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">Decade of Excellence</h4>
                  <p className="text-[11px] text-[#cfc0ae]">Dedicated to ethical Ranthambore wildlife tourism</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Company Story & Trust Values */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/20">
              <ShieldCheck className="w-3.5 h-3.5" />
              About Ranthambore Wild Life Tour
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              Passionate Trackers.{' '}
              <span className="text-[#f59e0b]">Unmatched Safaris.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#cfc1b0] leading-relaxed">
              Founded by wildlife enthusiasts and local naturalists in Sawai Madhopur, <strong>Ranthambore Wild Life Tour</strong> is an independent travel facilitation company dedicated to delivering authentic, transparent, and exhilarating wildlife expeditions.
            </p>

            <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed">
              Whether securing coveted morning Gypsy permits, orchestrating family holiday packages, or matching you with the finest heritage wildlife resorts, our on-ground team takes the stress out of safari planning so you can focus entirely on the majesty of the Indian jungle.
            </p>

            {/* Trust Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="text-xs text-[#cfc0ae]">Govt Department Compliance</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="text-xs text-[#cfc0ae]">Senior Certified Naturalists</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="text-xs text-[#cfc0ae]">Zero Hidden Charges Policy</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="text-xs text-[#cfc0ae]">24/7 On-Ground Concierge</span>
              </div>
            </div>

            {/* CTA */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                onClick={onOpenBookingModal}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#ea580c]/25 flex items-center gap-2 transition cursor-pointer"
              >
                <span>Plan Your Safari With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="#contact-us"
                className="px-5 py-3.5 rounded-xl bg-[#231d18] text-[#d4c6b5] hover:text-white border border-[#3b3127] text-xs sm:text-sm font-semibold transition"
              >
                Speak to a Specialist
              </a>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 mt-20 pt-12 border-t border-[#29221b]">
          {stats.map((s, idx) => (
            <div key={idx} className="p-5 rounded-xl bg-[#141210] border border-[#2b241e] text-center space-y-1">
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#f59e0b]">
                {s.value}
              </div>
              <div className="text-xs sm:text-sm font-bold text-white">{s.label}</div>
              <div className="text-[11px] text-[#8c7f70]">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
