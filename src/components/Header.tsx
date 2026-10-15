'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, ShieldCheck, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

interface HeaderProps {
  onOpenBookingModal?: (prefill?: Record<string, string>) => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();
  const { contact, navigation, branding, ui } = useSiteContent();

  const handleOpen = (prefill?: Record<string, string>) => {
    if (onOpenBookingModal) {
      onOpenBookingModal(prefill);
    } else {
      openBookingModal(prefill);
    }
  };

  const navLinks = navigation.header.map((l) => ({ name: l.label, href: l.href, children: l.children ?? [] }));
  const [openMobileGroup, setOpenMobileGroup] = useState<string | null>(null);
  const matches = (href: string) => (href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`));
  const isLinkActive = (link: (typeof navLinks)[number]) => matches(link.href) || link.children.some((c) => matches(c.href));

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl transition-all">
      {/* Top Info Bar */}
      <div className="bg-[#f4f8f5] border-b border-[#d2e4d9] text-xs text-[#375847] py-2 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-semibold border border-emerald-200">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
              {navigation.topBarBadge}
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#517362]">
              <Clock className="w-3.5 h-3.5 text-[#d97706]" />
              Support: {contact.supportHours}
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#d97706]" />
              <span className="text-[#517362]">{ui.helplineLabel}</span>
              <a href={telHref(contact.phonePrimary)} className="text-[#082318] hover:text-emerald-800 font-semibold transition">
                {contact.phonePrimary}
              </a>
              <span className="text-[#d2e4d9]">|</span>
              <a href={telHref(contact.phoneSecondary)} className="text-[#082318] hover:text-emerald-800 font-semibold transition hidden sm:inline">
                {contact.phoneSecondary}
              </a>
            </div>

            <a
              href={waHref(contact.whatsapp, ui.whatsappMessages.header)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-800 hover:text-emerald-950 font-bold transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current text-emerald-700" />
              <span>{ui.whatsapp}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-[#e2ece6] px-4 sm:px-8 py-3 transition-colors duration-200">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-md border border-emerald-600/20 group-hover:border-emerald-500 transition duration-300">
              <Image
                src={branding.logo}
                alt={`${branding.name} ${branding.tagline}`}
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#082318] group-hover:text-[#047857] transition">
                {branding.name}
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#d97706]">
                {branding.tagline}
              </span>
            </div>
          </Link>

          {/* Right Aligned Menu & Actions */}
          <div className="flex items-center gap-6 lg:gap-7">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = isLinkActive(link);
                const hasChildren = link.children.length > 0;
                return (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      className={`relative flex items-center gap-1 px-3 py-1.5 rounded-lg text-sm font-semibold transition duration-200 ${
                        isActive ? 'text-[#047857]' : 'text-[#284838] hover:text-[#d97706]'
                      }`}
                      aria-haspopup={hasChildren || undefined}
                    >
                      <span>{link.name}</span>
                      {hasChildren && <ChevronDown className="w-3.5 h-3.5 transition group-hover:rotate-180" />}
                      {isActive && (
                        <motion.span
                          layoutId="activeHeaderNav"
                          className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-gradient-to-r from-emerald-600 via-[#d97706] to-emerald-500 rounded-full shadow-[0_0_8px_rgba(4,120,87,0.4)]"
                          transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                        />
                      )}
                    </Link>
                    {hasChildren && (
                      <div className="invisible opacity-0 translate-y-1 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-0 transition duration-150 absolute left-0 top-full pt-2 z-50">
                        <div className="min-w-60 rounded-xl border border-[#d2e4d9] bg-white p-1.5 shadow-xl">
                          {link.children.map((child) => (
                            <Link
                              key={child.href + child.label}
                              href={child.href}
                              className={`block rounded-lg px-3 py-2 text-sm font-medium transition ${
                                matches(child.href) ? 'bg-emerald-50 text-[#047857]' : 'text-[#284838] hover:bg-[#f0f6f2] hover:text-[#082318]'
                              }`}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleOpen()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 hover:to-[#ea580c] text-white text-xs font-bold shadow-md shadow-emerald-950/20 flex items-center gap-1.5 transition duration-300 cursor-pointer"
              >
                <span>{ui.bookSafari}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#f0f6f2] text-[#082318] hover:bg-[#e4ede7] border border-[#d2e4d9]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#e2ece6] space-y-1.5 pb-3">
            {navLinks.map((link) => {
              const isActive = isLinkActive(link);
              const hasChildren = link.children.length > 0;
              const expanded = openMobileGroup === link.name || (openMobileGroup === null && isActive);
              return (
                <div key={link.name}>
                  <div className="flex items-center gap-1">
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex-1 flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                        isActive
                          ? 'bg-emerald-50 text-[#047857] border border-emerald-200 shadow-sm'
                          : 'text-[#284838] hover:bg-[#f0f6f2] hover:text-[#082318]'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && !hasChildren && <span className="w-2 h-2 rounded-full bg-[#d97706]" />}
                    </Link>
                    {hasChildren && (
                      <button
                        type="button"
                        onClick={() => setOpenMobileGroup(expanded ? '' : link.name)}
                        className="p-2.5 rounded-xl text-[#284838] hover:bg-[#f0f6f2]"
                        aria-label={link.name}
                        aria-expanded={expanded}
                      >
                        <ChevronDown className={`w-4 h-4 transition ${expanded ? 'rotate-180' : ''}`} />
                      </button>
                    )}
                  </div>
                  {hasChildren && expanded && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-emerald-100 pl-3">
                      {link.children.map((child) => (
                        <Link
                          key={child.href + child.label}
                          href={child.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={`block px-3 py-2 rounded-lg text-sm font-medium ${matches(child.href) ? 'text-[#047857] bg-emerald-50' : 'text-[#375847] hover:bg-[#f0f6f2]'}`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-3 border-t border-[#e2ece6] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpen();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-700 to-[#d97706] text-white text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>{ui.requestBooking}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={waHref(contact.whatsapp, ui.whatsappMessages.mobileMenu)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-50 text-[#047857] border border-emerald-200 text-sm font-semibold flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{ui.mobileMenuWhatsapp}</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
