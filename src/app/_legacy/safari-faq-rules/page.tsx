'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  CheckCircle2, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  IdCard,
  ChevronDown,
  Camera,
  Shirt,
  Ban,
  Clock
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

export default function SafariFaqRulesPage() {
  const { contact } = useSiteContent();
  const { openBookingModal } = useBookingModal();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const idChecklist = [
    {
      national: 'Indian Nationals',
      validIds: ['Original Aadhaar Card (Physical / PVC)', 'Original Passport', 'Original Voter ID Card', 'Original Driving License'],
      warning: 'PAN Cards and Student IDs are NOT valid. You must carry the exact original physical ID stated on your voucher.',
    },
    {
      national: 'Foreign & NRI Nationals',
      validIds: ['Original Passport with Valid Indian Visa / OCI Card', 'Digital phone copies or photocopies are strictly invalid at the gate'],
      warning: 'Passport details entered during booking must match the physical document presented at gate inspection.',
    },
  ];

  const fullFaqs = [
    {
      q: 'How far in advance can I book Ranthambore safari permits?',
      a: 'Online permit bookings open up to 90 to 120 days in advance. For core zones (1 to 5) and peak season weekends, booking 60 to 90 days ahead is strongly advised.',
      category: 'Permits & Advance Booking',
    },
    {
      q: 'Can permits be cancelled, refunded, or rescheduled?',
      a: 'No. As per Rajasthan Forest Department regulations, confirmed safari permits are 100% non-refundable, non-reschedulable, and non-transferable under any circumstances.',
      category: 'Cancellation & Refunds',
    },
    {
      q: 'How are safari zones assigned to tourists?',
      a: 'You can express a preference for Core or Buffer zones. The Forest Department computerized lottery system makes final allocations on the morning of the drive to balance forest traffic.',
      category: 'Zone Allocation',
    },
    {
      q: 'What is the difference between Gypsy and Canter?',
      a: 'The Maruti Gypsy is a 6-seater 4x4 open jeep offering nimble handling and eye-level photography angles. The Canter is a 20-seater open safari bus with high elevated vantage points.',
      category: 'Safari Vehicles',
    },
    {
      q: 'What clothes should I wear on a safari?',
      a: 'Wear neutral earthy tones such as khaki, olive green, beige, or brown. In winter mornings (Nov-Feb), carry warm windbreakers and beanies as open jeeps get cold.',
      category: 'Clothing & Essentials',
    },
    {
      q: 'Is tiger sighting guaranteed on a safari?',
      a: 'Ranthambore is a vast wild protected sanctuary over 1,300 sq km, not a zoo. Sighting depends on patience, tracking, and nature. With 2 to 4 drives, sighting odds are exceptionally high.',
      category: 'Wildlife Sightings',
    },
  ];

  const prohibitedItems = [
    { title: 'Zero Plastic & Littering', desc: 'Single-use plastic bottles and polythene bags are banned. Carry reusable metal flasks.' },
    { title: 'No Smoking & No Alcohol', desc: 'Carrying cigarettes, matches, or liquor into the reserve is a legal offense.' },
    { title: 'No Drones or Loud Music', desc: 'Drones and loud speakers are prohibited under the Wildlife Protection Act.' },
    { title: 'Never Step Outside Vehicle', desc: 'Stepping off the vehicle onto forest ground is illegal and dangerous.' },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d2e4d9]" />
            <span className="text-[#d97706] font-semibold">Safari FAQs &amp; ID Proof Rules</span>
          </nav>

          {/* Visual Hero Banner with Tiger Family Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-white shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_family.jpg"
                alt="Tigress with cubs in Ranthambore"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/50" />
            </div>

            <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
                  Official Forest Department Regulations
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                  Safari FAQs &amp; <span className="text-[#d97706]">ID Proof Rules</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Official guidelines on identity documents, dress codes, luggage restrictions, camera permits, and common booking questions for hassle-free entry.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal()}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-600/30"
                >
                  Book Official Safari
                </button>
                <a
                  href={waHref(contact.whatsapp, 'Hello, I have a question regarding Ranthambore safari ID rules.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>Ask ID Helpdesk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: MANDATORY ID CHECKLIST */}
        <section className="space-y-6">
          <div className="max-w-3xl space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#d97706]">
              <IdCard className="w-4 h-4" />
              Critical Requirement Before Traveling
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Mandatory Government Photo Identity Rules
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Every tourist entering Ranthambore Tiger Reserve must present a valid physical original government ID at the forest gate.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {idChecklist.map(item => (
              <div key={item.national} className="p-6 sm:p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-4">
                <h3 className="font-serif text-xl font-bold text-[#082318] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-700" />
                  {item.national}
                </h3>
                <ul className="space-y-2 text-xs text-[#375847]">
                  {item.validIds.map(id => (
                    <li key={id} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                      <span>{id}</span>
                    </li>
                  ))}
                </ul>
                <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-[11px] text-amber-900">
                  <strong>Warning:</strong> {item.warning}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: EXPANDABLE FAQS ACCORDION */}
        <section className="space-y-6 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] p-6 sm:p-10">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Comprehensive Safari Questions &amp; Answers
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Click any question below to read the official Rajasthan Forest Department guidelines.</p>
          </div>

          <div className="space-y-3">
            {fullFaqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="rounded-2xl bg-white border border-[#d2e4d9] overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#f8faf8] transition"
                  >
                    <div className="space-y-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#d97706]">{faq.category}</span>
                      <h3 className="font-bold text-[#082318] text-sm sm:text-base">{faq.q}</h3>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-[#517362] transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-emerald-700' : ''}`} />
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs text-[#375847] leading-relaxed border-t border-[#e2ede6] pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 4: PROHIBITED ITEMS */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318] flex items-center gap-2">
              <Ban className="w-6 h-6 text-rose-600" />
              Prohibited Items &amp; Strict Penalties
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Under the Wildlife Protection Act, carrying or using the following items is strictly illegal.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {prohibitedItems.map((item, i) => (
              <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white border border-rose-200 space-y-2 shadow-sm">
                <span className="text-xs font-bold text-rose-700 uppercase">Violation 0{i + 1}</span>
                <h3 className="font-bold text-[#082318] text-base">{item.title}</h3>
                <p className="text-xs text-[#517362] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5: WHAT TO WEAR */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Safari Dressing &amp; Packing Checklist
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Shirt className="w-6 h-6 text-[#d97706]" />
              <h3 className="font-bold text-[#082318] text-sm">Neutral Colors Only</h3>
              <p className="text-[#517362]">Khaki, beige, olive green, grey, and dusty brown blend with the forest backdrop.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Camera className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-[#082318] text-sm">Dust Covers &amp; Sunglasses</h3>
              <p className="text-[#517362]">Protect eyes, nose, and camera gear from dry sandy dust with scarves and covers.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Clock className="w-6 h-6 text-teal-700" />
              <h3 className="font-bold text-[#082318] text-sm">Winter Morning Layers</h3>
              <p className="text-[#517362]">From November to February, mornings drop to 5°C. Carry warm fleece jackets and beanies.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/70 text-[#082318] shadow-xl shadow-emerald-950/5 text-center space-y-6 relative overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-[#082318]">
              Still Have Questions About Safari Rules?
            </h2>
            <p className="text-xs sm:text-base text-[#1b3a2a] leading-relaxed">
              Our on-ground Sawai Madhopur wildlife team is available daily from 6:00 AM to 10:00 PM to assist with identity verification and permits.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 transition cursor-pointer"
            >
              Book Safari With Expert Guidance
            </button>
            <a
              href={telHref(contact.phonePrimary)}
              className="px-6 py-3.5 rounded-xl bg-white hover:bg-emerald-50 border-2 border-emerald-300 text-[#082318] font-bold text-sm flex items-center gap-2 transition shadow-sm"
            >
              <Phone className="w-4 h-4 text-emerald-700" />
              <span>Call Helpline: {contact.phonePrimary}</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
