'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ShieldCheck, 
  Lock, 
  Cookie, 
  Eye, 
  FileText, 
  Mail, 
  ArrowLeft, 
  ChevronRight, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Users, 
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { motion } from 'framer-motion';

export default function PrivacyPolicyPage() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('junglesafariranthambhore@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const tableOfContents = [
    { id: 'commitment', title: '1. Commitment to Privacy' },
    { id: 'collection-use', title: '2. Use of Personal Information' },
    { id: 'sharing', title: '3. Subsidiaries & Business Partners' },
    { id: 'surveys-analytics', title: '4. Site Analytics & Surveys' },
    { id: 'security-disclaimer', title: '5. Security & Web Disclaimer' },
    { id: 'cookies', title: '6. Cookie Policy' },
    { id: 'modifications', title: '7. Policy Updates & Acceptance' },
    { id: 'contact', title: '8. Privacy Questions & Support' },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-white text-[#082318]">
      {/* Ambient background glow accents */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb & Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#517362]">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#d2e4d9]" />
          <span className="text-[#d97706] font-semibold">Privacy Policy</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
            Official Privacy &amp; Data Protection Statement
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight leading-tight">
            Privacy Policy &amp; <span className="text-[#d97706]">Data Respect</span>
          </h1>

          <p className="text-sm sm:text-base text-[#375847] leading-relaxed max-w-2xl mx-auto">
            Your right to privacy is respected by Jungle Safari India and Ranthambore Wild Life Tour. Read our terms concerning data confidentiality, security practices, and cookie usage.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#517362]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-600" />
              <span>Current Season 2026-2027 Policy</span>
            </span>
            <span>•</span>
            <span>Last Updated: March 2026</span>
          </div>
        </motion.div>

        {/* Top 4 Key Highlights Summary Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            {
              icon: Lock,
              title: 'Strict Confidentiality',
              desc: 'Personal details kept secure & private',
            },
            {
              icon: Eye,
              title: 'Intended Business Only',
              desc: 'Used solely for safari & booking services',
            },
            {
              icon: Cookie,
              title: 'Privacy-Safe Cookies',
              desc: 'No personal data mined from your hard drive',
            },
            {
              icon: ShieldCheck,
              title: 'Statutory Transparency',
              desc: 'Full regulatory compliance & clear terms',
            },
          ].map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-2xl border border-[#d2e4d9] bg-white space-y-2 hover:border-emerald-500/50 hover:shadow-md transition duration-300 shadow-sm"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center justify-center">
                  <Icon className="w-4 h-4 text-emerald-700" />
                </div>
                <h2 className="text-[#082318] text-xs sm:text-sm font-bold">{item.title}</h2>
                <p className="text-[11px] text-[#517362] leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Table of Contents */}
          <aside className="lg:col-span-4 sticky top-28 space-y-5">
            <div className="p-5 rounded-2xl border border-[#d2e4d9] bg-[#f4f8f5] shadow-md">
              <h3 className="font-serif text-base font-bold text-[#082318] mb-3.5 flex items-center gap-2 pb-2 border-b border-[#d2e4d9]">
                <FileText className="w-4 h-4 text-emerald-700" />
                <span>Policy Navigation</span>
              </h3>
              <nav className="space-y-1.5 text-xs">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg text-[#517362] hover:text-[#082318] hover:bg-white transition duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact Grievance Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-950 border border-emerald-700/40 space-y-3.5 shadow-xl text-white">
              <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                <Mail className="w-4 h-4 text-emerald-300" />
                <span>Privacy Contact Officer</span>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Contact Jungle Safari India if you have inquiries or concerns about privacy matters.
              </p>
              <div className="flex items-center gap-2 bg-black/25 p-2.5 rounded-xl border border-white/20">
                <a
                  href="mailto:junglesafariranthambhore@gmail.com"
                  className="text-xs text-white font-medium hover:text-amber-200 transition truncate flex-1"
                >
                  junglesafariranthambhore@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-white/10 text-white hover:bg-white/20 transition cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-300" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Sections */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section 1: Commitment */}
            <motion.section
              id="commitment"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Lock className="w-4 h-4 text-emerald-700" />
                <span>Clause 1</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Your Right to Privacy
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  Your right to privacy is respected by <strong>Jungle Safari India</strong>. Your name, date of birth, address, phone number, and personal identification information shared with us is kept strictly confidential.
                </p>
                <div className="p-3.5 rounded-xl bg-[#f8faf8] border border-[#d2e4d9] flex items-start gap-2.5 text-xs text-[#517362]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span>
                    All identity documentation provided for government park gate verification is protected under strict access controls.
                  </span>
                </div>
              </div>
            </motion.section>

            {/* Section 2: Use of Personal Information */}
            <motion.section
              id="collection-use"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-[#d97706] text-xs font-bold uppercase tracking-wider">
                <Eye className="w-4 h-4 text-[#d97706]" />
                <span>Clause 2</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Use of Personal Information
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  <strong>Jungle Safari India</strong> guarantees that personal information is only used or disclosed to the extent necessary to process safari permits and fulfill your booked services.
                </p>
              </div>
            </motion.section>

            {/* Section 3: Subsidiaries & Partners */}
            <motion.section
              id="sharing"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4 text-emerald-700" />
                <span>Clause 3</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Sharing with Subsidiaries &amp; Business Partners
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  If personal information is shared with local resorts, taxi drivers, or naturalist trackers, it is done solely to facilitate your scheduled reservation in Sawai Madhopur.
                </p>
              </div>
            </motion.section>

            {/* Section 4: Site Analytics & Surveys */}
            <motion.section
              id="surveys-analytics"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-[#d97706] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-[#d97706]" />
                <span>Clause 4</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Site Analytics &amp; Experience Improvement
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  To enhance visitor experience, aggregate web traffic trends may be analyzed anonymously to optimize page performance, fast form loading, and booking workflows.
                </p>
              </div>
            </motion.section>

            {/* Section 5: Security & Web Disclaimer */}
            <motion.section
              id="security-disclaimer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-rose-700 text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4 text-rose-600" />
                <span>Clause 5</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Security Protections &amp; Web Disclaimer
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  We utilize standard SSL encryption and secure communication channels to protect the confidentiality of personal booking records.
                </p>
              </div>
            </motion.section>

            {/* Section 6: Cookie Policy */}
            <motion.section
              id="cookies"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-teal-800 text-xs font-bold uppercase tracking-wider">
                <Cookie className="w-4 h-4 text-teal-700" />
                <span>Clause 6</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Cookies &amp; Tracking Technologies
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  Cookies improve website performance by remembering form preferences and session variables. Cookies never access data from your hard drive or external websites.
                </p>
              </div>
            </motion.section>

            {/* Section 7: Modifications & Acceptance */}
            <motion.section
              id="modifications"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl border border-[#d2e4d9] bg-white space-y-4 shadow-sm"
            >
              <div className="flex items-center gap-2 text-[#d97706] text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4 text-[#d97706]" />
                <span>Clause 7</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                Policy Modifications &amp; User Consent
              </h2>
              <div className="text-xs sm:text-sm text-[#375847] leading-relaxed space-y-3">
                <p>
                  Ranthambore Wild Life Tour reserves the right to periodically update this privacy statement to reflect new statutory data guidelines. Use of this site implies agreement to these conditions.
                </p>
              </div>
            </motion.section>

            {/* Section 8: Direct Contact */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-[#92400e] border border-emerald-600/30 space-y-4 shadow-xl text-white"
            >
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Clause 8</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Contact &amp; Privacy Queries
              </h2>
              <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
                Contact <strong>Jungle Safari India</strong> at{' '}
                <a
                  href="mailto:junglesafariranthambhore@gmail.com"
                  className="text-amber-300 hover:text-white font-bold underline transition"
                >
                  junglesafariranthambhore@gmail.com
                </a>{' '}
                if you have questions regarding data privacy.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:junglesafariranthambhore@gmail.com"
                  className="px-5 py-2.5 rounded-xl bg-white hover:bg-amber-50 text-[#082318] font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer border border-white/50"
                >
                  <Mail className="w-4 h-4 text-emerald-800" />
                  <span>Email Privacy Officer</span>
                </a>
                <a
                  href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20regarding%20the%20Privacy%20Policy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-black/25 text-white border border-white/20 hover:bg-black/40 font-bold text-xs transition flex items-center gap-2"
                >
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </motion.section>
          </div>
        </div>
      </div>
    </div>
  );
}
