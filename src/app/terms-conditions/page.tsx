'use client';

import React from 'react';
import Link from 'next/link';
import { 
  FileCheck2, 
  ShieldCheck, 
  AlertTriangle, 
  Clock, 
  IdCard, 
  Calendar, 
  Compass, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  CheckCircle2, 
  XCircle, 
  Building, 
  Fuel, 
  Sparkles,
  HelpCircle,
  AlertCircle,
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
      text: 'A 100% confirmation of the present booking is not guaranteed.',
    },
    {
      num: '03',
      title: 'Zone Selection Range',
      text: "You can choose from any one of the Ranthambore Tiger Reserve's 1 to 10 safari zones.",
    },
    {
      num: '04',
      title: 'Zone Allotment Discretion',
      text: 'A booking for a specific zone is not guaranteed, but we do our best to satisfy your requests.',
    },
  ];

  const remindersList = [
    'Safari bookings must be made with full payment in advance.',
    'Every visitor must present identification (Aadhaar Card, Voter ID, Driving License, or Passport).',
    'On confirmed bookings, there is no room for cancellation or refund.',
    'The booking is not exchangeable and cannot be given to another person.',
    'You must have on you the same identification card that you presented at the online booking.',
    'Safari bookings can be made up to 90 days in advance.',
    'Bookings for foreign visitors must include passport and nationality information.',
    'First come, first served is the policy for issuing safari permits (subject to availability).',
    'Without giving visitors any advance notice, a park may close due to weather or wildlife management.',
    'Visitors will be required to pay the difference at the time of entry into the park if there are any revisions to the costs after the booking.',
    'The tourists must arrive at the boarding location 15 minutes before the safari is due to leave.',
    'If you reserve a safari for the following day, your booking will be regarded as a "current booking," and all terms and conditions will apply as of current bookings.',
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#120f0d]">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb & Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#a89985]">
          <Link href="/" className="hover:text-[#ea580c] transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#f59e0b] font-semibold">Terms &amp; Conditions</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <FileCheck2 className="w-4 h-4 text-[#ea580c]" />
            Official Terms of Service &amp; Booking Regulations
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Terms &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Conditions
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Governing rules for jungle safari permit reservations, Tatkal / current window bookings, and wildlife travel services provided by Ranthambore Wild Life Tour.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8c7f70]">
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
          <div className="p-5 rounded-2xl bg-[#191512] border border-[#ea580c]/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <Building className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Sawai Madhopur Entity</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              Domain owned by Ranthambore Wild Life Tour, operating out of Sawai Madhopur, Rajasthan.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#191512] border border-[#f59e0b]/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center font-bold">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Tatkal / Current Safari</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              Book at least 1 day in advance. Zones 1–10 available, based on real-time gate inventory.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#191512] border border-rose-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center font-bold">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Non-Returnable Confirmed</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              No cancellations or refunds once confirmed. Unconfirmed bookings returned in full.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#191512] border border-amber-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold">
              <IdCard className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Original Photo ID Match</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              Carrying the exact original identification card presented during booking is mandatory.
            </p>
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Table of Contents & Contact Widget */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-[#191512] border border-[#2b241e] shadow-xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#29221b] pb-3">
                <FileText className="w-4 h-4 text-[#ea580c]" />
                Terms Sections
              </h3>
              <nav className="space-y-1.5">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg text-xs text-[#a89985] hover:text-white hover:bg-[#221c17] transition duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Support Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1c1713] to-[#16120f] border border-[#ea580c]/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Need Terms Clarification?</h4>
                  <span className="text-[11px] text-[#8c7f70]">Our booking office is here to help</span>
                </div>
              </div>
              <p className="text-xs text-[#b8a794] leading-relaxed">
                Speak directly with our Sawai Madhopur reservation specialists for any questions regarding permit issuance.
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="tel:+919971965629"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#241d18] hover:bg-[#2e251e] text-white border border-[#3b3127] flex items-center justify-between font-semibold transition"
                >
                  <span>+91 99719 65629</span>
                  <span className="text-[10px] text-[#ea580c]">Direct Call</span>
                </a>
                <a
                  href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20regarding%20Terms%20and%20Conditions."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 flex items-center justify-between font-semibold transition"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Support
                  </span>
                  <span className="text-[10px] text-emerald-300">Available</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Terms Clauses */}
          <main className="lg:col-span-8 space-y-10">
            {/* Section 1: Domain Ownership */}
            <section id="domain-ownership" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                <span>Section 01</span>
                <span>•</span>
                <span>Website Ownership</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                1. Domain Ownership &amp; User Agreement
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  Thank you for visiting <strong>www.ranthamborejunglesafari.in</strong> (website). The Sawai Madhopur travel company <strong>&quot;Ranthambore Wild Life Tour&quot;</strong> is the owner of the web domain <strong>https://ranthamborejunglesafari.in/</strong>.
                </p>
                <p>
                  The term <strong>&quot;You&quot;</strong> herein refers to the website&apos;s direct user or viewer. If you use the services provided by this website, it is assumed that you have read and agree to all of our terms and conditions.
                </p>
              </div>
            </section>

            {/* Section 2: Non-Returnable Charges */}
            <section id="non-refundable" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <span>Section 02</span>
                <span>•</span>
                <span>Refund &amp; Fee Policy</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                2. Jeep Safari &amp; Canter Safari Payment Terms
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p className="p-4 rounded-xl bg-[#1f1614] border border-rose-500/30 text-rose-200">
                  <strong>Canter Safari &amp; Jeep Safari: The amounts paid are not returnable.</strong> Charges for the Jeep Safari and Canter Safari are not refundable. If the safari booking is not confirmed, the current booking fees will be returned.
                </p>
                <p>
                  Because safari permits are purchased directly from the Rajasthan Forest Department portal against passenger identity proofs, funds are immediately non-reversible once issued.
                </p>
              </div>
            </section>

            {/* Section 3: Cost Escalations & Tax Revisions */}
            <section id="cost-escalations" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                <span>Section 03</span>
                <span>•</span>
                <span>Statutory Levies</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                3. Fuel, Taxes, Park Fees &amp; Guide Charges Revision
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <div className="flex items-start gap-3 p-4 rounded-xl bg-[#1e1913] border border-[#f59e0b]/30">
                  <Fuel className="w-5 h-5 text-[#f59e0b] shrink-0 mt-0.5" />
                  <p className="text-[#d8c8b6]">
                    <strong>Please be aware that after you finalise the tour/service cost, any increases in permission fees for safaris/taxes, gasoline costs, or guide fees will be added on as an additional charge.</strong>
                  </p>
                </div>
                <p>
                  Any revisions instituted by the Rajasthan Forest Department, State Government taxes, municipal fuel adjustments, or registered eco-development committee guide charges will be payable prior to boarding or entry.
                </p>
              </div>
            </section>

            {/* Section 4: Currently / Tatkal Booking */}
            <section id="current-tatkal" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-5 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Section 04</span>
                <span>•</span>
                <span>Last-Minute Permits</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                4. Ranthambhore National Park&apos;s Currently / Tatkal Booking
              </h2>
              <p className="text-xs sm:text-sm text-[#a89985]">
                Important Information for Current Booking:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {tatkalPoints.map((pt) => (
                  <div key={pt.num} className="p-4 rounded-xl bg-[#14110e] border border-[#2b231b] space-y-1.5">
                    <span className="text-[#ea580c] font-mono text-xs font-bold block">{pt.num}.</span>
                    <h3 className="font-serif text-sm font-bold text-white">{pt.title}</h3>
                    <p className="text-xs text-[#b8a794] leading-relaxed">{pt.text}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Section 5: Reminders for Safari Booking */}
            <section id="safari-reminders" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-5 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                <span>Section 05</span>
                <span>•</span>
                <span>Safari Guidelines</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                5. Reminders for Ranthambore Safari Booking
              </h2>

              <ul className="space-y-3 text-xs sm:text-sm text-[#cfc0ae]">
                {remindersList.map((reminder, idx) => (
                  <li key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#14120f] border border-[#261f18]">
                    <CheckCircle2 className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{reminder}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Section 6: Field Director Authority & Provisional Bookings */}
            <section id="field-director" className="p-7 rounded-2xl bg-gradient-to-r from-[#211a14] via-[#281f18] to-[#1c1611] border border-[#ea580c]/40 space-y-4 scroll-mt-28 shadow-2xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                <span>Section 06</span>
                <span>•</span>
                <span>Statutory Authority</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                6. Field Director Statutory Authority &amp; Provisional Bookings
              </h2>
              <div className="text-xs sm:text-sm text-[#d4c5b3] leading-relaxed space-y-3">
                <p className="font-medium text-white">
                  Note that all bookings are provisional in nature and are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve, without providing a reason.
                </p>
                <p>
                  This includes bookings for admission into and stays in the Ranthambore Wild Life Tour. Your acceptance of any and all of the terms and conditions listed above is implied when you make a booking.
                </p>
                <p className="p-3.5 rounded-xl bg-[#181310] border border-[#ea580c]/30 text-amber-200">
                  <strong>Under no circumstances shall a safari be cancelled or refunded, and no request for a refund or rescheduled safari shall be considered.</strong>
                </p>
              </div>
            </section>

            {/* Section 7: Support & Contact Coordinates */}
            <section id="helpdesk" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                <span>Section 07</span>
                <span>•</span>
                <span>Contact Desk</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                7. Official Safari Assistance Desk
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  For any clarifications regarding safari zone requests, government identity verification, or package bookings:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#13100d] border border-[#261f18]">
                    <span className="text-[11px] text-[#8c7f70] block">Helpline Phone:</span>
                    <a href="tel:+919971965629" className="text-white hover:text-[#ea580c] font-bold text-xs sm:text-sm block mt-0.5">
                      +91 99719 65629
                    </a>
                    <span className="text-[#a89985] text-xs block">+91 78349 42435</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#13100d] border border-[#261f18]">
                    <span className="text-[11px] text-[#8c7f70] block">Official Email &amp; Web:</span>
                    <span className="text-white font-bold text-xs sm:text-sm block mt-0.5">
                      ranthamborejunglesafari.in
                    </span>
                    <a href="mailto:info@ranthamborewildlifetour.com" className="text-[#ea580c] hover:underline text-xs block mt-0.5 truncate">
                      info@ranthamborewildlifetour.com
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
