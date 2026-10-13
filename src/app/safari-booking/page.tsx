'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Sparkles, 
  Clock, 
  Calendar, 
  ShieldCheck, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  Users, 
  IdCard, 
  FileText 
} from 'lucide-react';
import { motion } from 'framer-motion';
import VehicleComparison from '@/components/VehicleComparison';
import SightingsTicker from '@/components/SightingsTicker';
import FaqSection from '@/components/FaqSection';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';

export default function SafariBookingPage() {
  const { openBookingModal } = useBookingModal();

  const pricingTiers = [
    {
      vehicle: 'Maruti Gypsy (6-Seater 4x4)',
      type: 'Per Person Sharing (Indian)',
      price: '₹2,300',
      quota: '48 Jeeps / Shift',
      features: ['Up to 6 guests + Guide + Driver', 'Deep forest & rocky trail agility', 'Best for photographers & families', 'Zone 1 to 10 allocation'],
      popular: true,
    },
    {
      vehicle: 'Maruti Gypsy (Full Exclusive)',
      type: 'Private Jeep (Indian Nationals)',
      price: '₹13,800',
      quota: 'Private 6 Seats',
      features: ['All 6 seats reserved for your group', 'Personalized naturalist guidance', 'Maximum photographic mobility', 'Hotel pickup & drop included'],
      popular: false,
    },
    {
      vehicle: 'Canter Safari Bus (20-Seater)',
      type: 'Per Person Sharing (Indian)',
      price: '₹1,800',
      quota: '50 Canters / Shift',
      features: ['Open-top minibus (2x2 seating)', 'Elevated vantage point over tall grass', 'Identical forest path to Gypsy', 'Recommended for groups >6'],
      popular: false,
    },
    {
      vehicle: 'Foreign National Gypsy / Canter',
      type: 'Per Person (Foreign Passport)',
      price: '₹5,500',
      quota: 'Govt. Foreign Quota',
      features: ['Includes foreign permit surcharge', 'Original passport verification', 'English-fluent certified guide', 'Gate entry & forest eco fee included'],
      popular: false,
    },
  ];

  const bookingSteps = [
    {
      step: '01',
      title: 'Select Date & Vehicle',
      desc: 'Choose between the nimble 6-seater Gypsy or budget-friendly 20-seater Canter bus for Morning or Afternoon shift.',
    },
    {
      step: '02',
      title: 'Submit Government ID Proofs',
      desc: 'Provide Aadhaar Card, Passport, or Voter ID for every traveler as required by the Rajasthan Forest Department.',
    },
    {
      step: '03',
      title: 'Permit Allocation & Confirmation',
      desc: 'Our local desk submits your permit request to the computerised gate lottery system across Zones 1 to 10.',
    },
    {
      step: '04',
      title: 'Hotel Pickup & Safari Boarding',
      desc: 'Your designated safari vehicle and naturalist guide arrive at your hotel 15 minutes before the shift departure.',
    },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#120f0d]">
      {/* Decorative ambient gradients */}
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
          <span className="text-[#f59e0b] font-semibold">Safari Booking</span>
        </nav>

        {/* SECTION 1: Page Hero & Booking Trigger */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <Compass className="w-4 h-4 text-[#ea580c]" />
            Official Safari Booking Portal (2026-2027)
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Book Ranthambore Safari:{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Gypsy &amp; Canter Permits
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Reserve advance and Tatkal / current jungle safaris across all 10 zones. Regulated vehicle allocations, certified forest naturalists, and transparent booking fees.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 cursor-pointer transition duration-300"
            >
              <span>Instant Safari Permit Request</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20check%20safari%20booking%20dates."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-sm border border-[#3d3228] flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Helpline</span>
            </a>
          </div>
        </motion.div>

        {/* SECTION 2: Live Sightings & Gate Status Ticker */}
        <div className="mb-20">
          <SightingsTicker onOpenBookingModal={openBookingModal} />
        </div>

        {/* SECTION 3: Vehicle Comparison (Gypsy vs Canter with 48/50 Shift Quotas) */}
        <div className="mb-24">
          <VehicleComparison
            onSelectVehicle={(vehicleName) => openBookingModal({ vehicle: vehicleName })}
          />
        </div>

        {/* SECTION 4: Step-by-Step Booking Process */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Seamless Workflow
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              How Your Safari Booking Works
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Four simple steps from date selection to boarding your safari vehicle at Sawai Madhopur.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bookingSteps.map((step) => (
              <div
                key={step.step}
                className="p-6 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-3 relative overflow-hidden group hover:border-[#ea580c]/50 transition duration-300"
              >
                <span className="text-2xl font-serif font-bold text-[#ea580c] block">
                  {step.step}
                </span>
                <h3 className="font-serif text-lg font-bold text-white group-hover:text-[#f59e0b] transition">
                  {step.title}
                </h3>
                <p className="text-xs text-[#a89985] leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* SECTION 5: Safari Tariff & Pricing Matrix */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Transparent Pricing
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Safari Tariff &amp; Quota Matrix
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Government forest entrance fees, vehicle fees, and naturalist guide charges included.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pricingTiers.map((tier) => (
              <SpotlightCard
                key={tier.vehicle}
                spotlightColor="rgba(234, 88, 12, 0.18)"
                enableTilt={true}
                className={`glass-card p-6 rounded-2xl border flex flex-col justify-between space-y-6 ${
                  tier.popular ? 'border-[#ea580c] bg-[#1d1713]' : 'border-[#2d251e] bg-[#171411]'
                }`}
              >
                <div className="space-y-3">
                  {tier.popular && (
                    <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-[#ea580c] text-white">
                      Recommended
                    </span>
                  )}
                  <h3 className="font-serif text-lg font-bold text-white">{tier.vehicle}</h3>
                  <span className="text-xs text-[#8c7f70] block">{tier.type}</span>
                  <div className="pt-2">
                    <span className="text-2xl font-bold text-white">{tier.price}</span>
                    <span className="text-xs text-[#a89985] block mt-0.5">{tier.quota}</span>
                  </div>

                  <ul className="space-y-2 pt-3 text-xs text-[#bfae9b] border-t border-[#261f18]">
                    {tier.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openBookingModal({ vehicle: tier.vehicle })}
                  className="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-xs shadow-md transition duration-200 cursor-pointer"
                >
                  Book This Vehicle
                </button>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* SECTION 6: Important Booking Reminders & Tatkal Protocol */}
        <div className="mb-24 p-8 rounded-2xl bg-[#191512] border border-[#2b241e] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <IdCard className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Mandatory Identification &amp; Boarding Reminders
              </h2>
              <span className="text-xs text-[#a89985]">
                Rajasthan Forest Department Statutory Entry Regulations
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-[#cfc0ae]">
            <div className="p-4 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Original Photo ID Proof
              </h3>
              <p className="text-[#a89985] leading-relaxed">
                Every visitor must carry the exact original ID presented during booking (Aadhaar, Passport, or Voter ID). Forest officials verify names at entry gates before releasing boarding tokens.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#f59e0b]" />
                15-Minute Prior Boarding
              </h3>
              <p className="text-[#a89985] leading-relaxed">
                Tourists must arrive at the boarding location 15 minutes before the safari is due to leave. Late arrivals lead to permit forfeiture under strict gate closing rules.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7: Safari FAQs & Quick Enquiry Section */}
        <div className="space-y-16">
          <FaqSection />
          <QuickEnquirySection />
        </div>
      </div>
    </div>
  );
}
