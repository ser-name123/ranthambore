'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  HelpCircle, 
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
  FileText, 
  AlertCircle,
  IdCard,
  ChevronDown,
  Camera,
  Shirt,
  Ban
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function SafariFaqRulesPage() {
  const { openBookingModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const idChecklist = [
    {
      national: 'Indian Nationals',
      validIds: ['Original Aadhaar Card (Physical or PVC)', 'Original Passport', 'Original Voter ID Card', 'Original Driving License'],
      warning: 'Pan Cards and Student College IDs are NOT recognized by the Forest Department. You must carry the exact original ID specified in your permit voucher.',
    },
    {
      national: 'Foreign & NRI Nationals',
      validIds: ['Original Passport with Valid Indian Visa / OCI Card', 'Photocopies or digital images on smartphones are NOT permitted at the forest gate'],
      warning: 'Passport number and nationality entered during booking must match the physical document at gate inspection.',
    },
  ];

  const fullFaqs = [
    {
      q: 'How far in advance can I book Ranthambore safari permits?',
      a: 'Rajasthan Forest Department opens regular online permit bookings up to 90 to 120 days in advance. For core zones (Zones 1 to 5) and weekend dates during peak season (November to April), booking at least 60 to 90 days ahead is strongly advised.',
      category: 'Permits & Advance Booking',
    },
    {
      q: 'Can permits be cancelled, refunded, or rescheduled?',
      a: 'No. As per the strict statutory regulations of the Rajasthan Forest Department, confirmed safari permits are 100% non-refundable, non-reschedulable, and non-transferable under any circumstances. If the safari booking is not confirmed due to quota exhaustion, 100% of the advance fee is promptly refunded.',
      category: 'Cancellation & Refunds',
    },
    {
      q: 'How are safari zones assigned to tourists?',
      a: 'When you submit your booking enquiry, you select your preferred zone (Core Zones 1-5 or Buffer Zones 6-10). The official Rajasthan Forest Department automated computer system assigns the final zone number randomly on the day of the drive based on vehicle capacity to avoid forest congestion.',
      category: 'Zone Allocation',
    },
    {
      q: 'What is the difference between Gypsy and Canter?',
      a: 'The Maruti Gypsy is a 6-seater 4x4 open jeep that offers maximum speed, maneuverability on rocky ravines, and eye-level photography angles. The Canter is a 20-seater open safari bus offering higher seating vantage points and a budget-friendly ticket rate.',
      category: 'Safari Vehicles',
    },
    {
      q: 'What is the child ticket policy?',
      a: 'Children aged 5 years and above are charged the full ticket permit fee and occupy an individual seat. Children below 5 years can travel on a parent’s lap without park permit fees, but their original birth certificate or Aadhaar must be presented at the gate.',
      category: 'Family & Children',
    },
    {
      q: 'What clothes should I wear on a safari?',
      a: 'Wear subtle, neutral earth tones such as khaki, olive green, beige, or brown. Bright neon colors (red, fluorescent yellow, bright pink) alert animals and are discouraged. For winter morning safaris (Nov-Feb), carry heavy warm jackets, gloves, and caps as open vehicles experience strong wind chills.',
      category: 'Clothing & Essentials',
    },
    {
      q: 'Are mobile phones, drones, and cameras allowed?',
      a: 'Mobile phones are allowed but must be kept on strictly SILENT mode. Drones and flash photography are illegal and punishable under the Indian Wildlife Protection Act. Commercial video cinema cameras require prior written statutory permissions.',
      category: 'Electronics & Cameras',
    },
    {
      q: 'Is tiger sighting guaranteed on a safari?',
      a: 'No. Ranthambore is an authentic wild protected habitat spanning over 1,300 square kilometers, not a zoo. Sighting a wild predator depends on nature, forest cues, alarm calls, and patience. However, with our experienced naturalists and 2 to 4 drives, sighting probability is exceptionally high.',
      category: 'Wildlife Sightings',
    },
  ];

  const prohibitedItems = [
    { title: 'Zero Plastic & Littering', desc: 'Single-use plastic water bottles and food wrappers are strictly banned. Use reusable steel flasks.' },
    { title: 'No Smoking & No Alcohol', desc: 'Carrying cigarettes, lighters, or alcoholic beverages into the forest reserve is a criminal offense.' },
    { title: 'No Loud Audio or Horns', desc: 'Playing recorded animal calls, music speakers, or loud shouting causes immediate vehicle expulsion.' },
    { title: 'Never Step Outside Vehicle', desc: 'Alighting from your Gypsy or Canter on safari tracks is strictly forbidden and jeopardizes personal safety.' },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#0e0d0c] text-[#f4efea] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ea580c]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#f59e0b]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-24">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#a89985]">
            <Link href="/" className="hover:text-[#ea580c] transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
            <span className="text-[#f59e0b] font-semibold">Safari FAQs &amp; ID Proof Rules</span>
          </nav>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 border-b border-[#26211b] pb-10">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#ea580c] text-xs font-bold uppercase tracking-wider border border-[#ea580c]/30">
                <ShieldCheck className="w-3.5 h-3.5 text-[#f59e0b]" />
                Official Forest Department Regulations
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Safari FAQs &amp; <span className="text-[#ea580c]">Mandatory ID Proof Rules</span>
              </h1>
              <p className="text-sm sm:text-base text-[#c4b5a3] leading-relaxed">
                Complete official guidelines on photo identity documentation, dress codes, luggage restrictions, camera permits, and common booking questions for a smooth park entry.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openBookingModal()}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl transition transform hover:-translate-y-0.5 cursor-pointer"
              >
                Book Official Safari
              </button>
              <a
                href="https://wa.me/919971965629?text=Hello,%20I%20have%20a%20question%20regarding%20Ranthambore%20safari%20ID%20rules."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center gap-2 transition"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>Ask ID Helpdesk</span>
              </a>
            </div>
          </div>
        </section>

        {/* SECTION 2: MANDATORY ID CHECKLIST */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-2">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
              <IdCard className="w-4 h-4" />
              Critical Requirement Before Traveling
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Mandatory Government Photo Identity Rules
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">
              Every tourist entering Ranthambore Tiger Reserve must present a valid physical original government ID at the forest gate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idChecklist.map(item => (
              <div key={item.national} className="p-6 sm:p-8 rounded-3xl bg-[#161412] border border-[#28221b] space-y-4">
                <h3 className="font-serif text-xl font-bold text-white flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400" />
                  {item.national}
                </h3>
                <ul className="space-y-2 text-xs text-[#c4b5a3]">
                  {item.validIds.map(id => (
                    <li key={id} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{id}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-[11px] text-amber-300">
                  <strong>Warning:</strong> {item.warning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EXPANDABLE FAQS ACCORDION */}
        <section className="space-y-6 rounded-3xl bg-[#141210] border border-[#28221b] p-6 sm:p-10">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Comprehensive Safari Questions &amp; Answers
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">Click any question below to read the official Rajasthan Forest Department guidelines.</p>
          </div>

          <div className="space-y-3">
            {fullFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl bg-[#1a1714] border border-[#2b241e] overflow-hidden">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#201c18] transition"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#ea580c]">{faq.category}</span>
                      <h3 className="font-bold text-white text-sm sm:text-base">{faq.q}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#8a8175] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-amber-400' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs text-[#c4b5a3] leading-relaxed border-t border-[#241f1a] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: PROHIBITED ITEMS & STATUTORY BANS */}
        <section className="space-y-6">
          <div className="space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white flex items-center gap-2">
              <Ban className="w-6 h-6 text-rose-500" />
              Prohibited Items &amp; Strict Penalties
            </h2>
            <p className="text-xs sm:text-sm text-[#8a8175]">Under the Wildlife Protection Act, carrying or using the following items is strictly illegal.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {prohibitedItems.map((item, i) => (
              <div key={i} className="p-6 rounded-2xl bg-[#161412] border border-rose-950/40 space-y-2">
                <span className="text-xs font-bold text-rose-400 uppercase">Violation 0{i + 1}</span>
                <h3 className="font-bold text-white text-base">{item.title}</h3>
                <p className="text-xs text-[#8a8175] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: WHAT TO WEAR & SEASONAL GEAR */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#141210] border border-[#28221b] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Safari Dressing &amp; Packing Checklist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2d241d] space-y-2">
              <Shirt className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-white text-sm">Neutral Colors Only</h3>
              <p className="text-[#8a8175]">Khaki, beige, olive green, grey, and dusty brown blend with the forest backdrop.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2d241d] space-y-2">
              <Camera className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Dust Covers &amp; Sunglasses</h3>
              <p className="text-[#8a8175]">Protect your eyes, nose, and camera sensors from dry sandy trail dust with scarves and covers.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#1c1815] border border-[#2d241d] space-y-2">
              <Clock className="w-6 h-6 text-[#ea580c]" />
              <h3 className="font-bold text-white text-sm">Winter Morning Layers</h3>
              <p className="text-[#8a8175]">From November to February, morning temperatures drop to 5°C. Bring heavy jackets and beanies.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: ENTRY PROCEDURE AT THE CHECKPOST */}
        <section className="p-6 sm:p-8 rounded-3xl bg-[#161412] border border-[#28221b] space-y-4">
          <h3 className="font-serif text-xl font-bold text-white">
            Step-by-Step Gate Check-in Procedure
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2e241d] space-y-1">
              <span className="font-bold text-amber-400">Step 1: Manifest Check</span>
              <p className="text-[#8a8175]">Guide presents official permit printout with passenger names at forest gate.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2e241d] space-y-1">
              <span className="font-bold text-emerald-400">Step 2: Physical ID Match</span>
              <p className="text-[#8a8175]">Forest Officer physically examines your original Aadhaar / Passport document.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2e241d] space-y-1">
              <span className="font-bold text-cyan-400">Step 3: Security Scan</span>
              <p className="text-[#8a8175]">Vehicle is verified for absence of plastic bags, drones, or banned equipment.</p>
            </div>
            <div className="p-4 rounded-xl bg-[#1c1815] border border-[#2e241d] space-y-1">
              <span className="font-bold text-[#ea580c]">Step 4: Zone Entry</span>
              <p className="text-[#8a8175]">Barrier lifts and your vehicle embarks into the pristine reserve on the minute.</p>
            </div>
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#211a14] via-[#1c1713] to-[#261d15] border border-[#ea580c]/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Still Have Questions About Safari Rules?
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
              Our on-ground Sawai Madhopur wildlife team is available daily from 6:00 AM to 10:00 PM to help you with identity verification and permits.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold text-sm shadow-xl transition cursor-pointer"
            >
              Book Safari With Expert Guidance
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-[#161412] hover:bg-[#201c18] border border-[#3a3026] text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-[#ea580c]" />
              <span>Call Helpline: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
