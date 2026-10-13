'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Star,
  ChevronRight,
  ArrowUp,
  Sparkles,
  CheckCircle2,
  Clock,
  Compass,
  Camera,
  Heart
} from 'lucide-react';

interface FooterProps {
  onOpenBookingModal?: (prefill?: Record<string, string>) => void;
}

export default function Footer({ onOpenBookingModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const phoneNumbers = [
    { display: '+91 99719 65629', raw: '+919971965629' },
    { display: '+91 78349 42435', raw: '+917834942435' },
  ];

  const safariLinks = [
    { name: 'Maruti Gypsy Safari (6-Seater)', href: '/gypsy-safari' },
    { name: 'Canter Safari Bus (20-Seater)', href: '/canter-safari' },
    { name: 'Core Zones 1 to 5 Booking', href: '/core-zones-safari' },
    { name: 'Buffer Gates 6 to 10 Safaris', href: '/buffer-zones-safari' },
    { name: 'Wildlife Photography Expeditions', href: '/wildlife-photography-tour' },
    { name: 'Safari Timings & Shifts (2026-27)', href: '/safari-timings' },
  ];

  const tourLinks = [
    { name: '2N/3D Classic Wildlife Package', href: '/packages/2n-3d-classic-wildlife' },
    { name: '3N/4D Royal Tiger Expedition', href: '/packages/3n-4d-royal-tiger' },
    { name: 'Luxury Forest Resort Stays', href: '/resort-booking' },
    { name: 'Ranthambore Fort & Chambal Boating', href: '/chambal-safari' },
    { name: 'Jaipur & Delhi Cab Transfers', href: '/taxi-transfers' },
    { name: 'Cancellation & Refund Policy', href: '/cancellation-policy' },
    { name: 'Safari FAQs & ID Proof Rules', href: '/safari-faq-rules' },
  ];

  const trustBadges = [
    { label: 'Authorized Safari Operators', icon: ShieldCheck },
    { label: 'Govt. Identity Verification', icon: CheckCircle2 },
    { label: 'Certified Naturalist Trackers', icon: Compass },
    { label: '100% Transparent Quotation', icon: Sparkles },
  ];

  return (
    <footer className="relative bg-[#0c0b0a] text-[#c4b5a3] border-t border-[#261f18] pt-16 pb-24 lg:pb-12 overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-[#ea580c]/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-[#f59e0b]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Card: Safari Hotline */}
        <div className="relative mb-16 rounded-3xl p-6 sm:p-10 border border-[#ea580c]/25 bg-gradient-to-r from-[#1c1713] via-[#161310] to-[#1a1511] shadow-2xl overflow-hidden">
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-[#ea580c]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/15 text-[#ea580c] text-xs font-bold uppercase tracking-wider border border-[#ea580c]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#f59e0b]" />
                Planning Your Ranthambore Trip?
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Secure Your Jungle Safari Permits Before Quotas Fill Up
              </h3>
              <p className="text-sm text-[#b8a794] max-w-2xl leading-relaxed">
                Forest Department permits for core zones are strictly limited per shift. Speak directly with our Sawai Madhopur wildlife desk for instant date checking.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={`tel:${phoneNumbers[0].raw}`}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/25 flex items-center gap-2.5 transition duration-300 transform hover:-translate-y-0.5"
              >
                <Phone className="w-4 h-4" />
                <span>Call Safari Desk: +91 99719 65629</span>
              </a>

              <a
                href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20check%20safari%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 border border-emerald-500/40 font-bold text-sm flex items-center gap-2 transition duration-300"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400/20" />
                <span>WhatsApp Quote</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#241d17]">
          {/* Column 1: Brand & Credentials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-xl border border-[#ea580c]/40 group-hover:border-[#ea580c] transition duration-300">
                <Image
                  src="/logo.jpg"
                  alt="Ranthambore Wild Life Tour"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-white group-hover:text-[#ea580c] transition">
                  Ranthambore
                </span>
                <span className="block text-[11px] tracking-[0.24em] uppercase font-bold text-[#f59e0b]">
                  Wild Life Tour
                </span>
              </div>
            </Link>

            <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed">
              Your premier on-ground wildlife safari facilitator based at Sawai Madhopur. Providing official Gypsy and Canter permits, luxury wilderness resorts, and naturalist-led tiger expeditions since 2014.
            </p>

            {/* Guest Satisfaction Rating Badge */}
            <div className="p-3.5 rounded-2xl bg-[#14110e] border border-[#2b221a] flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-[#f59e0b]/15 border border-[#f59e0b]/30 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-[#f59e0b] fill-[#f59e0b]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-white font-bold text-sm">4.9 / 5.0 Rating</span>
                  <span className="text-[#f59e0b] text-xs">★★★★★</span>
                </div>
                <p className="text-[11px] text-[#8f8070]">
                  Over 1,400+ satisfied wildlife travellers &amp; photographers
                </p>
              </div>
            </div>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-950/40 border border-emerald-800/40 text-xs text-emerald-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>2026-2027 Season Bookings Active</span>
            </div>
          </div>

          {/* Column 2: Safari Vehicles & Booking (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#261f18] pb-3">
              <Compass className="w-4 h-4 text-[#ea580c]" />
              Safari Booking
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {safariLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#a89985] hover:text-[#ea580c] transition duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#5e5143] group-hover:text-[#ea580c] group-hover:translate-x-1 transition duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Tour Packages & Guides (lg:col-span-2) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#261f18] pb-3">
              <Camera className="w-4 h-4 text-[#f59e0b]" />
              Tours &amp; Info
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {tourLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[#a89985] hover:text-[#ea580c] transition duration-200"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[#5e5143] group-hover:text-[#ea580c] group-hover:translate-x-1 transition duration-200" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Coordinates & Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-white flex items-center gap-2 border-b border-[#261f18] pb-3">
              <MapPin className="w-4 h-4 text-[#ea580c]" />
              Safari Helpdesk
            </h4>

            <div className="space-y-3.5 text-xs text-[#a89985]">
              {/* Address card */}
              <div className="p-3 rounded-xl bg-[#14110e] border border-[#261f18] flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
                <span className="text-[#b8a794] leading-relaxed">
                  Near Ranthambore Circle, Ranthambore Road, Sawai Madhopur, Rajasthan – 322001, India
                </span>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-xl bg-[#14110e] border border-[#261f18] space-y-1.5">
                <div className="flex items-center gap-2 text-[#8c7e6f]">
                  <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
                  <span className="font-semibold text-[11px] uppercase tracking-wider text-[#ea580c]">Direct Call</span>
                </div>
                <div className="flex flex-col gap-1 text-white font-semibold">
                  <a href="tel:+919971965629" className="hover:text-[#ea580c] transition flex items-center justify-between">
                    <span>+91 99719 65629</span>
                    <span className="text-[10px] text-[#ea580c] font-normal">Primary</span>
                  </a>
                  <a href="tel:+917834942435" className="hover:text-[#ea580c] transition flex items-center justify-between">
                    <span>+91 78349 42435</span>
                    <span className="text-[10px] text-[#f59e0b] font-normal">Alternate</span>
                  </a>
                </div>
              </div>

              {/* Hours & Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#ea580c]" />
                  <a href="mailto:info@ranthamborewildlifetour.com" className="text-white hover:text-[#ea580c] transition truncate">
                    info@ranthamborewildlifetour.com
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#7f7162]">
                  <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
                  <span>Working Hours: 6:00 AM – 10:00 PM (Daily)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-[#241d17]">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-[#14120f]/80 border border-[#261f18]"
              >
                <div className="w-8 h-8 rounded-lg bg-[#ea580c]/10 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-[#ea580c]" />
                </div>
                <span className="text-xs font-medium text-[#d3c4b2]">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Mandatory Independent Agency Statutory Disclaimer */}
        <div className="py-7 border-b border-[#211a14]">
          <div className="p-4 sm:p-5 rounded-2xl bg-[#15120e] border border-[#30251c] text-[11px] sm:text-xs text-[#8f8071] leading-relaxed">
            <div className="flex items-center gap-2 mb-2 font-semibold text-[#cfc0ae]">
              <ShieldCheck className="w-4 h-4 text-[#ea580c]" />
              <span>Statutory Compliance &amp; Transparency Notice</span>
            </div>
            <p>
              <strong>Ranthambore Wild Life Tour (ranthamborewildlifetour.com)</strong> is an independent travel facilitation agency providing safari permit assistance, wildlife resort bookings, and naturalist guides in Sawai Madhopur. We are <strong>NOT</strong> the official website of Ranthambore National Park or the Rajasthan Forest Department. All safari permits are issued under the regulations of the Forest Department, Government of Rajasthan. Tiger sightings are completely dependent on natural wildlife movements and cannot be legally guaranteed.
            </p>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#786b5e] gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>© 2026 Ranthambore Wild Life Tour. All Rights Reserved.</span>
            <span className="hidden sm:inline text-[#3d3328]">|</span>
            <div className="flex items-center gap-3 text-[#998877]">
              <Link href="/privacy-policy" className="hover:text-white transition">Privacy Policy</Link>
              <span>•</span>
              <Link href="/terms-conditions" className="hover:text-white transition">Terms &amp; Conditions</Link>
              <span>•</span>
              <Link href="/cancellation-policy" className="hover:text-white transition">Cancellation Policy</Link>
              <span>•</span>
              <Link href="/admin" className="hover:text-amber-400 transition flex items-center gap-1 text-[#b5a796]">
                <ShieldCheck className="w-3 h-3 text-[#ea580c]" />
                <span>Admin Portal</span>
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#7d6e5f]">
              <Heart className="w-3.5 h-3.5 text-[#ea580c] fill-[#ea580c]" />
              <span>Preserving Ranthambore Wildlife Heritage</span>
            </span>

            <button
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-xl bg-[#1b1713] hover:bg-[#ea580c] text-[#c4b5a3] hover:text-white border border-[#2e261f] hover:border-[#ea580c] transition duration-300 cursor-pointer flex items-center gap-1.5 font-medium shadow-md group"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition duration-200" />
              <span>Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

