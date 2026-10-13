'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileCheck2, 
  ShieldCheck, 
  Clock, 
  IdCard, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  XCircle, 
  Building, 
  Fuel, 
  FileText
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function TermsAndConditionsPage() {
  const tableOfContents = [
    { id: 'domain-ownership', title: '1. Domain Ownership & Acceptance' },
    { id: 'non-refundable', title: '2. Jeep & Canter Safari Payments' },
    { id: 'cost-escalations', title: '3. Fuel, Taxes & Guide Fee Revisions' },
    { id: 'current-tatkal', title: '4. Currently / Tatkal Booking Protocol' },
    { id: 'safari-reminders', title: '5. Key Reminders for Safari Booking' },
    { id: 'field-director', title: '6. Field Director Statutory Authority' },
    { id: 'helpdesk', title: '7. Helpdesk & Verification' },
  ];

  const tatkalPoints = [
    {
      num: '01',
      title: 'Advance Notice Required',
      text: 'Send your booking request at least one day in advance.',
    },
    {
      num: '02',
      title: 'Confirmation Availability',
      text: 'A 100% confirmation of the present booking is subject to forest quota.',
    },
    {
      num: '03',
      title: 'Zone Selection Range',
      text: "You can request from any of Ranthambore's 1 to 10 safari zones.",
    },
    {
      num: '04',
      title: 'Zone Allotment Discretion',
      text: 'A specific zone is subject to Forest Department computer lottery.',
    },
  ];

  const remindersList = [
    'Safari bookings must be made with full payment in advance.',
    'Every visitor must present original ID (Aadhaar Card, Voter ID, Driving License, or Passport).',
    'On confirmed bookings, there is no cancellation or refund permitted by forest rules.',
    'The booking is not exchangeable and cannot be transferred to another person.',
    'You must carry the exact identification card presented during online booking.',
    'Safari bookings can be made up to 90 to 120 days in advance.',
    'Bookings for foreign visitors must include passport and nationality details.',
    'First come, first served is the policy for issuing safari permits.',
    'Park gates may close without notice due to severe weather or wildlife management orders.',
    'Visitors must pay any statutory cost revisions announced after booking prior to entry.',
    'Tourists must arrive at boarding point 15 minutes before safari departure.',
    'Same-day and next-day reservations follow current/tatkal booking rules.',
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#06150f] text-[#f2f7f4]">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb & Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#86a898]">
          <Link href="/" className="hover:text-emerald-400 transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#16432f]" />
          <span className="text-amber-400 font-semibold">Terms &amp; Conditions</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/30 shadow-sm">
            <FileCheck2 className="w-4 h-4 text-emerald-400" />
            Official Terms of Service &amp; Booking Regulations
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Terms &amp; <span className="text-amber-400">Conditions</span>
          </h1>

          <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed max-w-2xl mx-auto">
            Governing rules for jungle safari permit reservations, Tatkal / current window bookings, and wildlife travel services provided by Ranthambore Wild Life Tour.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#86a898]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Domain: ranthamborejunglesafari.in</span>
            </span>
            <span>•</span>
            <span>Season 2026-2027 Guidelines</span>
          </div>
        </motion.div>

        {/* Top 4 Quick Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Sawai Madhopur Entity</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              Domain owned by Ranthambore Wild Life Tour, operating out of Sawai Madhopur, Rajasthan.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Tatkal / Current Safari</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              Book at least 1 day in advance. Zones 1–10 available based on real-time gate inventory.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#092218] border border-rose-950/40 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center font-bold">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Non-Returnable Confirmed</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              No cancellations once confirmed by park system. Unconfirmed bookings returned in full.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold">
              <IdCard className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Original Photo ID Match</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              Carrying the exact physical original ID card presented during booking is mandatory.
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Table of Contents & Contact Widget */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] shadow-xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#16432f] pb-3">
                <FileText className="w-4 h-4 text-emerald-400" />
                Terms Sections
              </h3>
              <nav className="space-y-1.5">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg text-xs text-[#86a898] hover:text-white hover:bg-[#06150f] transition duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Support Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#092218] to-[#06150f] border border-emerald-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Need Terms Clarification?</h4>
                  <span className="text-[11px] text-[#86a898]">Our booking office is here to help</span>
                </div>
              </div>
              <p className="text-xs text-[#c2d7cd] leading-relaxed">
                Speak directly with our Sawai Madhopur reservation specialists for any questions regarding permit rules.
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="tel:+919971965629"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#06150f] hover:bg-[#113123] text-white border border-[#16432f] flex items-center justify-between font-semibold transition"
                >
                  <span>+91 99719 65629</span>
                  <span className="text-[10px] text-emerald-400">Direct Call</span>
                </a>
                <a
                  href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20regarding%20Terms%20and%20Conditions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-between font-semibold transition"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Support
                  </span>
                  <span className="text-[10px] text-emerald-200">Online</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Terms Clauses */}
          <main className="lg:col-span-8 space-y-8">
            {/* Section 1: Domain Ownership */}
            <section id="domain-ownership" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Section 01</span>
                <span>•</span>
                <span>Website Ownership</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                1. Domain Ownership &amp; User Agreement
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p>
                  Thank you for visiting <strong>www.ranthamborejunglesafari.in</strong>. The Sawai Madhopur travel company <strong>&quot;Ranthambore Wild Life Tour&quot;</strong> is the owner of the web domain <strong>https://ranthamborejunglesafari.in/</strong>.
                </p>
                <p>
                  The term <strong>&quot;You&quot;</strong> herein refers to the website&apos;s direct user or viewer. Use of this website implies full agreement to our booking terms and conditions.
                </p>
              </div>
            </section>

            {/* Section 2: Non-Returnable Charges */}
            <section id="non-refundable" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <span>Section 02</span>
                <span>•</span>
                <span>Refund &amp; Fee Policy</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                2. Jeep Safari &amp; Canter Safari Payment Terms
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p className="p-4 rounded-xl bg-rose-950/20 border border-rose-500/30 text-rose-200">
                  <strong>Canter Safari &amp; Jeep Safari: The amounts paid are non-refundable.</strong> Confirmed permit fees cannot be refunded under Forest Department rules. If a requested safari cannot be confirmed due to quota exhaustion, the full advance fee is returned.
                </p>
                <p>
                  Because safari permits are purchased directly from the Rajasthan Forest Department portal against passenger identity proofs, funds are non-reversible once issued.
                </p>
              </div>
            </section>

            {/* Section 3: Cost Escalations & Tax Revisions */}
            <section id="cost-escalations" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <span>Section 03</span>
                <span>•</span>
                <span>Statutory Levies</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                3. Fuel, Taxes, Park Fees &amp; Guide Charges Revision
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#06150f] border border-amber-500/30">
                  <Fuel className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <p className="text-[#f2f7f4]">
                    <strong>Any statutory increases in government park entry fees, taxes, fuel levies, or guide fees announced by authorities will be added to the final boarding voucher.</strong>
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4: Currently / Tatkal Booking */}
            <section id="current-tatkal" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-5 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Section 04</span>
                <span>•</span>
                <span>Last-Minute Permits</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                4. Currently / Tatkal Booking Protocol
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {tatkalPoints.map((pt) => (
                  <div key={pt.num} className="p-4 rounded-xl bg-[#06150f] border border-[#16432f] space-y-1.5">
                    <span className="text-amber-400 font-mono text-xs font-bold block">{pt.num}.</span>
                    <h3 className="font-serif text-sm font-bold text-white">{pt.title}</h3>
                    <p className="text-xs text-[#86a898] leading-relaxed">{pt.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Reminders for Safari Booking */}
            <section id="safari-reminders" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-5 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Section 05</span>
                <span>•</span>
                <span>Safari Guidelines</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                5. Key Reminders for Safari Booking
              </h2>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#c2d7cd]">
                {remindersList.map((reminder, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#06150f] border border-[#16432f]">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{reminder}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6: Field Director Authority */}
            <section id="field-director" className="p-7 rounded-2xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-amber-500/40 space-y-4 scroll-mt-28 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <span>Section 06</span>
                <span>•</span>
                <span>Statutory Authority</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                6. Field Director Statutory Authority
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p className="font-medium text-white">
                  All safari bookings are provisional in nature and subject to operational modification by the Field Director, Ranthambore Tiger Reserve, as per state wildlife regulations.
                </p>
                <p className="p-3.5 rounded-xl bg-[#06150f] border border-amber-500/30 text-amber-200">
                  <strong>Confirmed forest permits cannot be rescheduled or refunded once issued by the government portal.</strong>
                </p>
              </div>
            </section>

            {/* Section 7: Support & Contact Coordinates */}
            <section id="helpdesk" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Section 07</span>
                <span>•</span>
                <span>Contact Desk</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                7. Official Safari Assistance Desk
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-[#06150f] border border-[#16432f]">
                  <span className="text-[11px] text-[#86a898] block">Helpline Phone:</span>
                  <a href="tel:+919971965629" className="text-white hover:text-emerald-400 font-bold text-xs sm:text-sm block mt-0.5">
                    +91 99719 65629
                  </a>
                  <span className="text-[#86a898] text-xs block">+91 78349 42435</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#06150f] border border-[#16432f]">
                  <span className="text-[11px] text-[#86a898] block">Official Email &amp; Web:</span>
                  <span className="text-white font-bold text-xs sm:text-sm block mt-0.5">
                    ranthamborejunglesafari.in
                  </span>
                  <a href="mailto:info@ranthamborewildlifetour.com" className="text-emerald-400 hover:underline text-xs block mt-0.5 truncate">
                    info@ranthamborewildlifetour.com
                  </a>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
