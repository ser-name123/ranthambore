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
  Phone, 
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
    <div className="relative py-12 lg:py-20 overflow-hidden">
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
          <span className="text-[#f59e0b] font-semibold">Privacy Policy</span>
        </nav>

        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
            Official Privacy &amp; Data Protection Statement
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Privacy Policy &amp;{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Personal Data Respect
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            Your right to privacy is respected by Jungle Safari India and Ranthambore Wild Life Tour. Read our official terms concerning data confidentiality, security practices, and cookie usage.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4 text-xs text-[#8c7f70]">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
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
                className="glass-card p-4 sm:p-5 rounded-2xl border border-[#2b241e] bg-[#161310] space-y-2 hover:border-[#ea580c]/50 transition duration-300"
              >
                <div className="w-9 h-9 rounded-xl bg-[#ea580c]/15 text-[#ea580c] border border-[#ea580c]/25 flex items-center justify-center">
                  <Icon className="w-4 h-4" />
                </div>
                <h2 className="text-white text-xs sm:text-sm font-bold">{item.title}</h2>
                <p className="text-[11px] text-[#8c7f70] leading-snug">{item.desc}</p>
              </div>
            );
          })}
        </motion.div>

        {/* Main Content Layout with Sticky Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Sticky Table of Contents (lg:col-span-4) */}
          <aside className="lg:col-span-4 sticky top-28 space-y-5">
            <div className="glass-panel p-5 rounded-2xl border border-[#2e261f] bg-[#171411]">
              <h3 className="font-serif text-base font-bold text-white mb-3.5 flex items-center gap-2 pb-2 border-b border-[#29221b]">
                <FileText className="w-4 h-4 text-[#ea580c]" />
                <span>Policy Navigation</span>
              </h3>
              <nav className="space-y-1.5 text-xs">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block px-3 py-2 rounded-lg text-[#b8a794] hover:text-white hover:bg-[#251f19] hover:border-l-2 hover:border-[#ea580c] transition duration-200"
                  >
                    {item.title}
                  </a>
                ))}
              </nav>
            </div>

            {/* Quick Contact Grievance Card */}
            <div className="p-5 rounded-2xl bg-[#1b1714] border border-[#ea580c]/30 space-y-3.5 shadow-lg">
              <div className="flex items-center gap-2 text-xs font-bold text-[#f59e0b]">
                <Mail className="w-4 h-4 text-[#ea580c]" />
                <span>Privacy Contact Officer</span>
              </div>
              <p className="text-xs text-[#a89985] leading-relaxed">
                Contact Jungle Safari India if you have any inquiries or worries about privacy-related matters.
              </p>
              <div className="flex items-center gap-2 bg-[#12100e] p-2.5 rounded-xl border border-[#2e261f]">
                <a
                  href="mailto:junglesafariranthambhore@gmail.com"
                  className="text-xs text-white font-medium hover:text-[#ea580c] transition truncate flex-1"
                >
                  junglesafariranthambhore@gmail.com
                </a>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg bg-[#251f19] text-[#a89985] hover:text-white transition cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy email address"
                >
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>
          </aside>

          {/* Right Column: Detailed Policy Sections (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            {/* Section 1: Commitment */}
            <motion.section
              id="commitment"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#ea580c] text-xs font-bold uppercase tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Clause 1</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Your Right to Privacy
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  Your right to privacy is respected by <strong>Jungle Safari India</strong>. Your name, date of birth, address, phone number, legal status, debit/credit card information, and other personal information that you merely share with us will be kept private and confidential.
                </p>
                <div className="p-3.5 rounded-xl bg-[#13110f] border border-[#28211b] flex items-start gap-2.5 text-xs text-[#a89985]">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
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
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-bold uppercase tracking-wider">
                <Eye className="w-4 h-4" />
                <span>Clause 2</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Use of Personal Information
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  <strong>Jungle Safari India</strong> guarantees that your personal information will only be used or disclosed to the extent necessary to do the intended business with you, or as otherwise required by law.
                </p>
              </div>
            </motion.section>

            {/* Section 3: Subsidiaries & Partners */}
            <motion.section
              id="sharing"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#ea580c] text-xs font-bold uppercase tracking-wider">
                <Users className="w-4 h-4" />
                <span>Clause 3</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Sharing with Subsidiaries &amp; Business Partners
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  If your personal information is shared by <strong>Ranthambore Wild Life Tour</strong> with its subsidiaries, business partners, etc., <strong>Ranthambore Wild Life Tour</strong> promises you that it will only be done so in order to conduct the intended business with you.
                </p>
              </div>
            </motion.section>

            {/* Section 4: Site Analytics & Surveys */}
            <motion.section
              id="surveys-analytics"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4" />
                <span>Clause 4</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Aggregate Analytics, Usage Patterns &amp; Surveys
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  In order to improve services to its users, <strong>Ranthambore Wild Life Tour</strong> retains the right to collect, examine, and publish aggregate site usage patterns of all of its visitors. This includes disseminating the information to its affiliates and partners as common business practise.
                </p>
                <p>
                  As allowed by law, <strong>Ranthambore Wild Life Tour</strong> may conduct online surveys and contests as part of its business, and it retains the right to use and share the information gathered to improve its guest services. Additionally, as a standard practise of business, the company shall share the information with its subsidiaries and business partners.
                </p>
              </div>
            </motion.section>

            {/* Section 5: Security & Web Disclaimer */}
            <motion.section
              id="security-disclaimer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider">
                <AlertCircle className="w-4 h-4" />
                <span>Clause 5</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Security Protections &amp; Web Disclaimer
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  Although <strong>Ranthambore Wild Life Tour</strong> guarantees that it will use its best efforts to protect the privacy and security of your personal information, it disclaims all liability for any violation of this policy or unauthorised third parties&apos; use of your personal information as a result of improper use of the web environment.
                </p>
              </div>
            </motion.section>

            {/* Section 6: Cookie Policy */}
            <motion.section
              id="cookies"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#ea580c] text-xs font-bold uppercase tracking-wider">
                <Cookie className="w-4 h-4" />
                <span>Clause 6</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Cookies &amp; Tracking Technologies
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  <strong>Cookies:</strong> We may issue your computer browser a single random number called a cookie in order to tailor your experience on our website or to support one of our promotions. Cookies improve website performance in significant ways, such as by enhancing your visit or personalising your experience. Accepting a cookie from our website doesn&apos;t jeopardise your security or privacy.
                </p>
                <div className="p-4 rounded-xl bg-[#13110f] border border-[#28211b] space-y-2">
                  <span className="font-semibold text-white block">Key Facts About Our Cookies:</span>
                  <ul className="space-y-1.5 text-xs text-[#a89985]">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                      <span>Cookies are not used by Ranthambore Wild Life Tour to collect personal data.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#ea580c] shrink-0 mt-0.5" />
                      <span>Cookies are unable to access cookie files from other websites or data from the hard drive of your computer.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.section>

            {/* Section 7: Modifications & Acceptance */}
            <motion.section
              id="modifications"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card p-6 sm:p-8 rounded-2xl border border-[#2b241e] bg-[#171412] space-y-4 shadow-lg"
            >
              <div className="flex items-center gap-2 text-[#f59e0b] text-xs font-bold uppercase tracking-wider">
                <FileText className="w-4 h-4" />
                <span>Clause 7</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Policy Modifications &amp; Website User Consent
              </h2>
              <div className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed space-y-3">
                <p>
                  In order to make the policy more readable, <strong>Ranthambore Wild Life Tour</strong> reserves the right to modify it from time to time at its discretion.
                </p>
                <p>
                  You agree to the privacy statement and the terms and conditions of the website use by accessing or using this website.
                </p>
                <p>
                  In order to ensure that you are aware of the conditions under which you intend to share your personal information with us, we have taken care to draw your attention to the current privacy policy in the website&apos;s design. In light of this, <strong>Ranthambore Wild Life Tour</strong> will assume that you have no objections to the conditions of this privacy statement if you choose to share your personal information with us.
                </p>
              </div>
            </motion.section>

            {/* Section 8: Direct Contact & Grievance Redressal */}
            <motion.section
              id="contact"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#201914] via-[#261f18] to-[#1a1410] border border-[#ea580c]/40 space-y-4 shadow-xl"
            >
              <div className="flex items-center gap-2 text-[#ea580c] text-xs font-bold uppercase tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Clause 8</span>
              </div>
              <h2 className="font-serif text-2xl font-bold text-white">
                Contact &amp; Privacy Queries
              </h2>
              <p className="text-xs sm:text-sm text-[#d4c7b8] leading-relaxed">
                Contact <strong>Jungle Safari India</strong> at{' '}
                <a
                  href="mailto:junglesafariranthambhore@gmail.com"
                  className="text-[#f59e0b] hover:text-[#ea580c] font-bold underline transition"
                >
                  junglesafariranthambhore@gmail.com
                </a>{' '}
                if you have any inquiries or worries about privacy-related matters.
              </p>

              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="mailto:junglesafariranthambhore@gmail.com"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-xs shadow-md transition flex items-center gap-2 cursor-pointer"
                >
                  <Mail className="w-4 h-4" />
                  <span>Email Privacy Officer</span>
                </a>
                <a
                  href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20have%20a%20question%20regarding%20the%20Privacy%20Policy."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-600/30 font-bold text-xs transition flex items-center gap-2"
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
