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
  Mail, 
  FileText, 
  Info,
  Calendar,
  Compass,
  Building2
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function CancellationPolicyPage() {
  const tableOfContents = [
    { id: 'non-refundable', title: '1. Non-Returnable Safari Fees' },
    { id: 'unconfirmed-bookings', title: '2. Unconfirmed Booking Return Guarantee' },
    { id: 'field-director-authority', title: '3. Field Director Statutory Authority' },
    { id: 'no-reschedule', title: '4. Non-Reschedulable & Non-Transferable' },
    { id: 'provisional-nature', title: '5. Provisional Nature of Admissions & Stays' },
    { id: 'implied-acceptance', title: '6. Implied Acceptance of Terms' },
    { id: 'support-contact', title: '7. Assistance & Support Desk' },
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
          <span className="text-[#f59e0b] font-semibold">Cancellation Policy</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <ShieldAlert className="w-4 h-4 text-[#ea580c]" />
            Official Safari Regulations &amp; Refund Policy
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Cancellation Policy &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Refund Terms
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Please carefully read the non-negotiable cancellation, modification, and refund regulations governing Jeep Safari, Canter Safari, and stay bookings at Ranthambore Wild Life Tour.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8c7f70]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
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
          <div className="p-5 rounded-2xl bg-[#191512] border border-[#ea580c]/30 space-y-2 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <XCircle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">100% Non-Returnable</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              Amounts paid for confirmed Jeep and Canter safaris are completely non-returnable once permits are generated.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#191512] border border-emerald-500/30 space-y-2 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center font-bold">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Unconfirmed Fee Return</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              If the safari booking is not confirmed due to gate quota exhaustion, the current booking fees will be returned.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#191512] border border-[#f59e0b]/30 space-y-2 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">Provisional In Nature</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              All bookings are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-[#191512] border border-rose-500/30 space-y-2 relative overflow-hidden">
            <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center font-bold">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-base font-bold text-white">No Rescheduling</h3>
            <p className="text-xs text-[#a89985] leading-relaxed">
              Under no circumstances shall a safari be rescheduled or refunded once allocated by the forest portal.
            </p>
          </div>
        </motion.div>

        {/* Official Statutory Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16 p-6 sm:p-7 rounded-2xl bg-gradient-to-r from-[#211a14] via-[#292018] to-[#1e1712] border border-[#ea580c]/40 text-[#d4c5b3] text-xs sm:text-sm leading-relaxed shadow-2xl relative"
        >
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/20 text-[#ea580c] flex items-center justify-center shrink-0 mt-0.5">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h2 className="font-serif text-lg font-bold text-white flex items-center gap-2">
                <span>Core Statutory Notice of Ranthambore Tiger Reserve</span>
              </h2>
              <p className="text-[#c7b8a6]">
                <strong>Canter Safari &amp; Jeep Safari:</strong> The amounts paid are not returnable. Charges for the Jeep Safari and Canter Safari are not refundable. If the safari booking is not confirmed, the current booking fees will be returned.
              </p>
              <p className="text-[#a89985]">
                Note that all bookings are provisional in nature and are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve, without providing a reason. This includes bookings for admission into and stays in the Ranthambore Wild Life Tour. Your acceptance of any and all of the terms and conditions listed above is implied when you make a booking. Under no circumstances shall a safari be cancelled or refunded, and no request for a refund or rescheduled safari shall be considered.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Content Layout with Sidebar Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <div className="p-6 rounded-2xl bg-[#191512] border border-[#2b241e] shadow-xl space-y-4">
              <h3 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#29221b] pb-3">
                <FileText className="w-4 h-4 text-[#ea580c]" />
                Policy Clauses
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

            {/* Quick Contact Helpdesk Widget */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-[#1c1713] to-[#16120f] border border-[#ea580c]/30 space-y-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-bold text-white">Have a Booking Query?</h4>
                  <span className="text-[11px] text-[#8c7f70]">Our Sawai Madhopur desk is active</span>
                </div>
              </div>
              <p className="text-xs text-[#b8a794] leading-relaxed">
                If you have questions regarding booking confirmation status or gate permit allocations, contact our team directly.
              </p>
              <div className="space-y-2 pt-1 text-xs">
                <a
                  href="tel:+919971965629"
                  className="w-full py-2.5 px-3 rounded-lg bg-[#241d18] hover:bg-[#2e251e] text-white border border-[#3b3127] flex items-center justify-between font-semibold transition"
                >
                  <span>+91 99719 65629</span>
                  <span className="text-[10px] text-[#ea580c]">Call</span>
                </a>
                <a
                  href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20regarding%20the%20Cancellation%20Policy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-lg bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/30 flex items-center justify-between font-semibold transition"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle className="w-3.5 h-3.5" />
                    WhatsApp Desk
                  </span>
                  <span className="text-[10px] text-emerald-300">Instant</span>
                </a>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Clauses */}
          <main className="lg:col-span-8 space-y-10">
            {/* Clause 1 */}
            <section id="non-refundable" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                <span>Clause 01</span>
                <span>•</span>
                <span>Safari Fees</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                1. Non-Returnable Safari Fees (Jeep &amp; Canter)
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  <strong>Canter Safari &amp; Jeep Safari: The amounts paid are not returnable.</strong> Charges for the Jeep Safari and Canter Safari are not refundable under any individual or collective circumstance once processed.
                </p>
                <p>
                  This policy is governed by the statutory framework of the Rajasthan Forest Department and Government of Rajasthan regulations. Once safari permits are requested and issued against official government identity documents (Aadhaar, Passport, Voter ID), permit charges are immediately transferred to forest treasury accounts and cannot be revoked, reimbursed, or adjusted.
                </p>
              </div>
            </section>

            {/* Clause 2 */}
            <section id="unconfirmed-bookings" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-400">
                <span>Clause 02</span>
                <span>•</span>
                <span>Guarantee Protection</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                2. Unconfirmed Booking Return Guarantee
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  <strong>If the safari booking is not confirmed, the current booking fees will be returned.</strong>
                </p>
                <p>
                  In rare situations where vehicle quotas for both preferred and alternate zones are completely exhausted on the official government reservation server for your requested date and shift, our booking desk will notify you immediately. If an alternate date or shift is not suitable for you, your current advance booking fees will be returned to your original payment source without deductions.
                </p>
                <div className="p-4 rounded-xl bg-[#1f1b16] border border-emerald-500/20 text-xs text-[#c4b5a3] flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span>Transparent refunds are processed within 5 to 7 banking days directly to the original account/mode of payment.</span>
                </div>
              </div>
            </section>

            {/* Clause 3 */}
            <section id="field-director-authority" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                <span>Clause 03</span>
                <span>•</span>
                <span>Forest Administration Powers</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                3. Field Director Statutory Authority
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  <strong>Note that all bookings are provisional in nature and are subject to modification or cancellation by the Field Director, Ranthambore Tiger Reserve, without providing a reason.</strong>
                </p>
                <p>
                  The Field Director and Chief Wildlife Warden of Ranthambore Tiger Reserve hold unilateral statutory power under the Wildlife Protection Act, 1972, to modify zone routes, shift schedules, vehicle allotments, gate entries, or temporarily close the national park due to:
                </p>
                <ul className="list-disc list-inside space-y-1.5 pl-2 text-[#a89985]">
                  <li>Wildlife census operations, VIP/VVIP security movements, or official tiger tracking protocols.</li>
                  <li>Excessive monsoon waterlogging, sudden heavy rainfall, track landslides, or fallen trees.</li>
                  <li>Emergency forest fire containment or animal rescue operations.</li>
                </ul>
                <p>
                  Neither Ranthambore Wild Life Tour nor any commercial facilitator holds legal jurisdiction over administrative closures mandated by the Forest Department.
                </p>
              </div>
            </section>

            {/* Clause 4 */}
            <section id="no-reschedule" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
                <span>Clause 04</span>
                <span>•</span>
                <span>No Modifications</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                4. Non-Reschedulable &amp; Non-Transferable Nature
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  <strong>Under no circumstances shall a safari be cancelled or refunded, and no request for a refund or rescheduled safari shall be considered.</strong>
                </p>
                <p>
                  Safari permits are issued strictly in the traveler’s registered government name and cannot be transferred to another individual, changed to another time shift (Morning to Evening or vice versa), or shifted to another date. Failure to arrive at the designated boarding point or gate on time will result in forfeiture of the permit without eligibility for refund.
                </p>
              </div>
            </section>

            {/* Clause 5 */}
            <section id="provisional-nature" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                <span>Clause 05</span>
                <span>•</span>
                <span>Admissions &amp; Accommodations</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                5. Provisional Nature of Admissions &amp; Stays
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  This provisional condition <strong>includes bookings for admission into and stays in the Ranthambore Wild Life Tour</strong> and associated wildlife accommodations. All safari entry permits, zone allotments, naturalist guides, and hotel stays are arranged in strict alignment with regional wildlife tourism guidelines.
                </p>
                <p>
                  In the event of unforeseen administrative cancellations of forest gates, resort accommodation terms will follow their respective hotel cancellation matrices.
                </p>
              </div>
            </section>

            {/* Clause 6 */}
            <section id="implied-acceptance" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#f59e0b]">
                <span>Clause 06</span>
                <span>•</span>
                <span>Customer Agreement</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                6. Implied Acceptance of Terms upon Booking
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  <strong>Your acceptance of any and all of the terms and conditions listed above is implied when you make a booking.</strong>
                </p>
                <p>
                  By submitting your safari enquiry, providing passenger identification documents, and paying the advance safari fee on our portal or via bank transfer, you acknowledge having read, understood, and consented unconditionally to all cancellation, provisional permit, and non-refundable terms without reservation.
                </p>
              </div>
            </section>

            {/* Clause 7 */}
            <section id="support-contact" className="p-7 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-4 scroll-mt-28 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#ea580c]">
                <span>Clause 07</span>
                <span>•</span>
                <span>Grievance &amp; Clarification</span>
              </div>
              <h2 className="font-serif text-xl sm:text-2xl font-bold text-white">
                7. Assistance &amp; Support Desk
              </h2>
              <div className="text-xs sm:text-sm text-[#bdae9c] leading-relaxed space-y-3">
                <p>
                  For genuine inquiries regarding unconfirmed bookings, payment reconciliation, or permit verification, our on-ground office in Sawai Madhopur is open 7 days a week:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-[#13100d] border border-[#261f18]">
                    <span className="text-[11px] text-[#8c7f70] block">Helpline Numbers:</span>
                    <span className="text-white font-bold text-xs sm:text-sm block mt-0.5">+91 99719 65629</span>
                    <span className="text-[#a89985] text-xs block">+91 78349 42435</span>
                  </div>
                  <div className="p-3.5 rounded-xl bg-[#13100d] border border-[#261f18]">
                    <span className="text-[11px] text-[#8c7f70] block">Official Email Address:</span>
                    <a href="mailto:info@ranthamborewildlifetour.com" className="text-[#ea580c] hover:underline font-bold text-xs sm:text-sm block mt-0.5 truncate">
                      info@ranthamborewildlifetour.com
                    </a>
                    <span className="text-[11px] text-[#8c7f70] block mt-0.5">Sawai Madhopur, Rajasthan – 322001</span>
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
