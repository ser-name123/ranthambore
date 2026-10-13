'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ShieldAlert, 
  AlertTriangle, 
  RefreshCw, 
  CheckCircle2, 
  XCircle, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  FileText, 
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CancellationPolicyPage() {
  const tableOfContents = [
    { id: 'non-refundable', title: '1. Non-Returnable Safari Fees' },
    { id: 'unconfirmed-bookings', title: '2. Unconfirmed Booking Return Guarantee' },
    { id: 'field-director-authority', title: '3. Field Director Statutory Authority' },
    { id: 'no-reschedule', title: '4. Non-Reschedulable & Non-Transferable' },
    { id: 'support-contact', title: '5. Assistance & Support Desk' },
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
          <span className="text-amber-400 font-semibold">Cancellation Policy</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-widest border border-emerald-500/30 shadow-sm">
            <ShieldAlert className="w-4 h-4 text-emerald-400" />
            Official Safari Regulations &amp; Refund Policy
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Cancellation Policy &amp; <span className="text-amber-400">Refund Terms</span>
          </h1>

          <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed max-w-2xl mx-auto">
            Please carefully read the statutory cancellation, modification, and refund regulations governing Jeep Safari, Canter Safari, and stay bookings at Ranthambore Wild Life Tour.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#86a898]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span>Rajasthan Forest Department Rules Applicable</span>
            </span>
            <span>•</span>
            <span>Season 2026-2027</span>
          </div>
        </motion.div>

        {/* Top 4 Key Policy Highlights Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-16"
        >
          <div className="p-5 rounded-2xl bg-[#092218] border border-rose-950/40 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center font-bold">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">100% Non-Returnable</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              Amounts paid for confirmed Jeep and Canter safaris are completely non-returnable once permits are generated.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#092218] border border-emerald-500/30 space-y-2">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Unconfirmed Fee Return</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              If the safari booking is not confirmed due to gate quota exhaustion, advance booking fees are returned.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 text-amber-400 flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Provisional In Nature</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              All bookings are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
            <div className="w-10 h-10 rounded-xl bg-teal-500/15 text-teal-400 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">No Rescheduling</h3>
            <p className="text-xs text-[#86a898] leading-relaxed">
              Under no circumstances shall a safari be rescheduled or refunded once allocated by the forest portal.
            </p>
          </div>
        </motion.div>

        {/* Official Statutory Callout Banner */}
        <div className="mb-16 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-emerald-500/40 text-[#c2d7cd] text-xs sm:text-sm leading-relaxed shadow-2xl">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-white">
                Core Statutory Notice of Ranthambore Tiger Reserve
              </h2>
              <p className="text-[#f2f7f4]">
                <strong>Canter Safari &amp; Jeep Safari:</strong> The amounts paid are not returnable. Charges for the Jeep Safari and Canter Safari are not refundable. If the safari booking is not confirmed, the current booking fees will be returned.
              </p>
              <p className="text-[#86a898]">
                Note that all bookings are provisional in nature and are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve, without providing a reason. Your acceptance of the terms is implied upon booking.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content Layout with Sidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] shadow-xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#16432f] pb-3">
                <FileText className="w-4 h-4 text-emerald-400" />
                Policy Clauses
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

            {/* Quick Contact Helpdesk Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#092218] to-[#06150f] border border-emerald-500/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Have a Booking Query?</h4>
                  <span className="text-[11px] text-[#86a898]">Our Sawai Madhopur desk is active</span>
                </div>
              </div>
              <p className="text-xs text-[#c2d7cd] leading-relaxed">
                If you have questions regarding booking confirmation status or gate permit allocations, contact our team directly.
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="tel:+919971965629"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#06150f] hover:bg-[#113123] text-white border border-[#16432f] flex items-center justify-between font-semibold transition"
                >
                  <span>+91 99719 65629</span>
                  <span className="text-[10px] text-emerald-400">Call</span>
                </a>
                <a
                  href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20regarding%20the%20Cancellation%20Policy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white flex items-center justify-between font-semibold transition"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Desk
                  </span>
                  <span className="text-[10px] text-emerald-200">Instant</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Clauses */}
          <main className="lg:col-span-8 space-y-8">
            {/* Clause 1 */}
            <section id="non-refundable" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <span>Clause 01</span>
                <span>•</span>
                <span>Safari Fees</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                1. Non-Returnable Safari Fees (Jeep &amp; Canter)
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p>
                  <strong>Canter Safari &amp; Jeep Safari: The amounts paid are not returnable.</strong> Charges for the Jeep Safari and Canter Safari are not refundable under any individual or collective circumstance once processed.
                </p>
                <p>
                  This policy is governed by the statutory framework of the Rajasthan Forest Department. Once safari permits are requested and issued against official government identity documents, permit charges are immediately transferred to forest treasury accounts and cannot be revoked.
                </p>
              </div>
            </section>

            {/* Clause 2 */}
            <section id="unconfirmed-bookings" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Clause 02</span>
                <span>•</span>
                <span>Guarantee Protection</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                2. Unconfirmed Booking Return Guarantee
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p>
                  <strong>If the safari booking is not confirmed, the current booking fees will be returned.</strong>
                </p>
                <p>
                  In rare situations where vehicle quotas for both preferred and alternate zones are completely exhausted on the official government reservation server for your requested date and shift, our booking desk will notify you immediately and return advance fees.
                </p>
                <div className="p-4 rounded-xl bg-[#06150f] border border-emerald-500/20 text-xs text-[#c2d7cd] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Refunds are processed within 5 to 7 banking days directly to your original payment method.</span>
                </div>
              </div>
            </section>

            {/* Clause 3 */}
            <section id="field-director-authority" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-400">
                <span>Clause 03</span>
                <span>•</span>
                <span>Forest Department Powers</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                3. Field Director Statutory Authority
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p>
                  Note that all bookings are provisional in nature and are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve, without providing a reason.
                </p>
                <p>
                  Such administrative decisions are rare and typically relate to extreme weather, security VIP protocols, or active big cat movement management.
                </p>
              </div>
            </section>

            {/* Clause 4 */}
            <section id="no-reschedule" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <span>Clause 04</span>
                <span>•</span>
                <span>Reschedule Regulations</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                4. Non-Reschedulable &amp; Non-Transferable Bookings
              </h2>
              <div className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed space-y-3">
                <p>
                  Under no circumstances shall a confirmed safari permit be transferred to another passenger or rescheduled to an alternate date. Permits are locked with passenger ID numbers in the forest server.
                </p>
              </div>
            </section>

            {/* Clause 5 */}
            <section id="support-contact" className="p-7 rounded-2xl bg-[#092218] border border-[#16432f] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Clause 05</span>
                <span>•</span>
                <span>Contact Desk</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                5. Assistance &amp; Support Desk
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 rounded-xl bg-[#06150f] border border-[#16432f]">
                  <span className="text-[11px] text-[#86a898] block">Reservation Helpline:</span>
                  <a href="tel:+919971965629" className="text-white hover:text-emerald-400 font-bold text-xs sm:text-sm block mt-0.5">
                    +91 99719 65629
                  </a>
                  <span className="text-[#86a898] text-xs block">+91 78349 42435</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#06150f] border border-[#16432f]">
                  <span className="text-[11px] text-[#86a898] block">Official Email:</span>
                  <a href="mailto:info@ranthamborewildlifetour.com" className="text-emerald-400 hover:underline text-xs block mt-0.5 truncate">
                    info@ranthamborewildlifetour.com
                  </a>
                  <span className="text-[#86a898] text-[11px] block mt-0.5">Operating Daily 6 AM – 10 PM</span>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
