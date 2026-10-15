'use client';

import React from 'react';
import { RichText } from './cms/Text';
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
import { JungleCornerBranch, TigerTrackWatermark } from './JungleFoliageDecorations';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

interface FooterProps {
  onOpenBookingModal?: (prefill?: Record<string, string>) => void;
}

export default function Footer({ onOpenBookingModal }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const { contact, footer, navigation, branding, ui } = useSiteContent();



  const badgeIcons = [ShieldCheck, CheckCircle2, Compass, Sparkles];
  const trustBadges = footer.trustBadges.map((label, i) => ({ label, icon: badgeIcons[i % badgeIcons.length] }));

  return (
    <footer className="relative bg-[#f4f8f5] text-[#375847] border-t border-[#d2e4d9] pt-14 pb-24 lg:pb-12 overflow-hidden">
      {/* Corner Foliage & Wildlife Tracks */}
      <JungleCornerBranch position="left" className="top-12 left-0" />
      <JungleCornerBranch position="right" className="bottom-12 right-0" />
      <TigerTrackWatermark count={6} className="top-1/3" />

      {/* Ambient background glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[450px] h-[350px] bg-[#d97706]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="relative max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Callout Card: Safari Hotline - Luxury Jungle Theme */}
        <div className="relative mb-16 rounded-3xl p-6 sm:p-10 border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/70 text-[#082318] shadow-xl shadow-emerald-950/5 overflow-hidden">
          {/* Ambient subtle glow */}
          <div className="absolute -right-16 -top-16 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-[#d97706]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-3 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-100 text-[#064e3b] text-xs font-bold uppercase tracking-wider border border-emerald-300 shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#d97706]" />
                {footer.ctaBadge}
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082318] tracking-tight">
                {footer.ctaTitle}
              </h3>
              <div className="text-sm sm:text-base text-[#1b3a2a] max-w-2xl leading-relaxed font-normal">
                <RichText text={footer.ctaText} inline />
              </div>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 shrink-0">
              <a
                href={telHref(contact.phonePrimary)}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-800 to-emerald-900 hover:from-emerald-800 hover:to-emerald-950 text-white font-bold text-sm shadow-lg shadow-emerald-900/20 flex items-center gap-2.5 transition duration-300 transform hover:-translate-y-0.5 cursor-pointer"
              >
                <Phone className="w-4 h-4 text-emerald-200" />
                <span>{footer.callLabel} {contact.phonePrimary}</span>
              </a>

              <a
                href={waHref(contact.whatsapp, ui.whatsappMessages.footer)}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-[#082318] border-2 border-emerald-300 font-bold text-sm flex items-center gap-2 transition duration-300 shadow-sm cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>{ui.whatsappQuote}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-14 border-b border-[#d2e4d9]">
          {/* Column 1: Brand & Credentials (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3.5 group inline-flex">
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden shadow-md border border-[#d2e4d9] group-hover:border-emerald-500 transition duration-300">
                <Image
                  src={branding.logo}
                  alt={`${branding.name} ${branding.tagline}`}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div>
                <span className="block font-serif text-2xl font-bold tracking-tight text-[#082318] group-hover:text-emerald-700 transition">
                  {branding.name}
                </span>
                <span className="block text-[11px] tracking-[0.24em] uppercase font-bold text-[#d97706]">
                  {branding.tagline}
                </span>
              </div>
            </Link>

            <div className="text-xs sm:text-sm text-[#375847] leading-relaxed">
              <RichText text={footer.about} inline />
            </div>

            {/* Guest Satisfaction Rating Badge */}
            <div className="p-3.5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                <Star className="w-5 h-5 text-[#d97706] fill-[#d97706]" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-[#082318] font-bold text-sm">{footer.ratingTitle}</span>
                  <span className="text-[#d97706] text-xs">★★★★★</span>
                </div>
                <p className="text-[11px] text-[#517362]">
                  {footer.ratingText}
                </p>
              </div>
            </div>

            {/* Active Status Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-800 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{footer.seasonText}</span>
            </div>
          </div>

          {/* Columns 2-3: admin-managed link lists */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-10">
            {navigation.footerColumns.map((col, idx) => (
              <div key={idx} className="space-y-4">
                <h4 className="font-serif text-lg font-bold text-[#082318] flex items-center gap-2 border-b border-[#d2e4d9] pb-3">
                  {idx % 2 === 0 ? <Compass className="w-4 h-4 text-emerald-600" /> : <Camera className="w-4 h-4 text-[#d97706]" />}
                  {col.title}
                </h4>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {col.links.map((link) => (
                    <li key={link.href + link.label}>
                      <Link
                        href={link.href}
                        className="group flex items-center gap-2 text-[#1b3a2a] hover:text-emerald-800 font-medium transition duration-200"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-emerald-700 group-hover:text-emerald-800 group-hover:translate-x-1 transition duration-200" />
                        <span>{link.label}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Column 4: Contact Coordinates & Office (lg:col-span-3) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-bold text-[#082318] flex items-center gap-2 border-b border-[#d2e4d9] pb-3">
              <MapPin className="w-4 h-4 text-[#d97706]" />
              {footer.helpdeskTitle}
            </h4>

            <div className="space-y-3.5 text-xs text-[#1b3a2a]">
              {/* Address card */}
              <div className="p-3 rounded-xl bg-white border border-[#d2e4d9] shadow-sm flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                <div className="text-[#1b3a2a] leading-relaxed font-normal">
                  <RichText text={contact.address} inline />
                </div>
              </div>

              {/* Phone */}
              <div className="p-3 rounded-xl bg-white border border-[#d2e4d9] shadow-sm space-y-1.5">
                <div className="flex items-center gap-2 text-[#517362]">
                  <Phone className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="font-semibold text-[11px] uppercase tracking-wider text-emerald-700">{footer.directCallLabel}</span>
                </div>
                <div className="flex flex-col gap-1 text-[#082318] font-semibold">
                  <a href={telHref(contact.phonePrimary)} className="hover:text-emerald-700 transition flex items-center justify-between">
                    <span>{contact.phonePrimary}</span>
                    <span className="text-[10px] text-[#d97706] font-normal">{footer.primaryLabel}</span>
                  </a>
                  <a href={telHref(contact.phoneSecondary)} className="hover:text-emerald-700 transition flex items-center justify-between">
                    <span>{contact.phoneSecondary}</span>
                    <span className="text-[10px] text-emerald-700 font-normal">{footer.alternateLabel}</span>
                  </a>
                </div>
              </div>

              {/* Hours & Email */}
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-[#d97706]" />
                  <a href={`mailto:${contact.email}`} className="text-[#082318] hover:text-emerald-700 transition truncate font-medium">
                    {contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[#517362]">
                  <Clock className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{footer.hoursLabel} {contact.supportHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges Strip */}
        <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-[#d2e4d9]">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.label}
                className="flex items-center gap-3 p-3 rounded-xl bg-white border border-[#d2e4d9] shadow-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                  <Icon className="w-4 h-4 text-emerald-700" />
                </div>
                <span className="text-xs font-semibold text-[#082318]">{badge.label}</span>
              </div>
            );
          })}
        </div>

        {/* Mandatory Independent Agency Statutory Disclaimer */}
        <div className="py-7 border-b border-[#d2e4d9]">
          <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#d2e4d9] shadow-sm text-[11px] sm:text-xs text-[#517362] leading-relaxed">
            <div className="flex items-center gap-2 mb-2 font-semibold text-[#082318]">
              <ShieldCheck className="w-4 h-4 text-[#d97706]" />
              <span>{footer.disclaimerTitle}</span>
            </div>
            <div>
              <RichText text={footer.disclaimer} inline />
            </div>
          </div>
        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#517362] gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
            <span>{footer.copyright}</span>
            <span className="hidden sm:inline text-[#d2e4d9]">|</span>
            <div className="flex flex-wrap items-center justify-center gap-3 text-[#375847] font-medium">
              {navigation.legal.map((link) => (
                <React.Fragment key={link.href + link.label}>
                  <Link href={link.href} className="hover:text-emerald-700 transition">{link.label}</Link>
                  <span>•</span>
                </React.Fragment>
              ))}
              {footer.showAdminLink && (
                <Link href="/admin" className="hover:text-amber-600 transition flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-[#d97706]" />
                  <span>{footer.adminLinkLabel}</span>
                </Link>
              )}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-[11px] text-[#517362]">
              <Heart className="w-3.5 h-3.5 text-[#d97706] fill-[#d97706]" />
              <span>{footer.tagline}</span>
            </span>

            <button
              onClick={scrollToTop}
              className="px-3.5 py-2 rounded-xl bg-white hover:bg-emerald-600 hover:text-white text-[#082318] border border-[#d2e4d9] hover:border-emerald-600 transition duration-300 cursor-pointer flex items-center gap-1.5 font-medium shadow-sm group"
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

