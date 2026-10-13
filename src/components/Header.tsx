'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Phone, MessageCircle, Clock, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

interface HeaderProps {
  onOpenBookingModal?: (prefill?: Record<string, string>) => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { openBookingModal } = useBookingModal();

  const handleOpen = (prefill?: Record<string, string>) => {
    if (onOpenBookingModal) {
      onOpenBookingModal(prefill);
    } else {
      openBookingModal(prefill);
    }
  };

  const phoneNumbers = [
    { display: '+91 99719 65629', raw: '+919971965629' },
    { display: '+91 78349 42435', raw: '+917834942435' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Safari Booking', href: '/safari-booking' },
    { name: 'Tour Packages', href: '/tour-packages' },
    { name: 'Services', href: '/services' },
    { name: 'Safari Zones', href: '/safari-zones' },
    { name: 'About Us', href: '/about-us' },
    { name: 'Travel Guide', href: '/travel-guide' },
    { name: 'Contact Us', href: '/contact-us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl transition-all">
      {/* Top Info Bar */}
      <div className="bg-[#071912] border-b border-[#143526] text-xs text-[#cfdfd6] py-2 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 font-medium border border-emerald-500/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Independent Safari Tour Operator
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#93b5a4]">
              <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
              Support: 6:00 AM - 10:00 PM (Daily)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#f59e0b]" />
              <span className="text-[#7fa391]">Helpline:</span>
              <a href={`tel:${phoneNumbers[0].raw}`} className="hover:text-white transition">
                {phoneNumbers[0].display}
              </a>
              <span className="text-[#204936]">|</span>
              <a href={`tel:${phoneNumbers[1].raw}`} className="hover:text-white transition hidden sm:inline">
                {phoneNumbers[1].display}
              </a>
            </div>

            <a
              href="https://wa.me/919971965629?text=Hi%20Ranthambore%20Wild%20Life%20Tour,%20I%20want%20to%20enquire%20about%20Safari%20Booking."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300 font-semibold transition"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-[#0a2017]/95 backdrop-blur-md border-b border-[#183d2c] px-4 sm:px-8 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-emerald-500/30 group-hover:border-emerald-400 transition duration-300">
              <Image
                src="/logo.jpg"
                alt="Ranthambore Wild Life Tour Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition">
                Ranthambore
              </span>
              <span className="block text-[10px] tracking-[0.2em] uppercase font-bold text-[#f59e0b]">
                Wild Life Tour
              </span>
            </div>
          </Link>

          {/* Right Aligned Menu & Actions */}
          <div className="flex items-center gap-6 lg:gap-7">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive = link.href === '/' 
                  ? pathname === '/' 
                  : pathname === link.href || pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative px-3 py-1.5 rounded-lg text-sm font-medium transition duration-200 ${
                      isActive
                        ? 'text-emerald-300 font-bold'
                        : 'text-[#bad3c6] hover:text-[#f59e0b]'
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <motion.span
                        layoutId="activeHeaderNav"
                        className="absolute bottom-0 left-2 right-2 h-[2.5px] bg-gradient-to-r from-emerald-400 via-[#f59e0b] to-emerald-300 rounded-full shadow-[0_0_8px_rgba(52,211,153,0.9)]"
                        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => handleOpen()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-600 via-[#ea580c] to-[#d97706] hover:from-emerald-500 hover:to-[#ea580c] text-white text-xs font-bold shadow-lg shadow-emerald-950/40 flex items-center gap-1.5 transition duration-300 cursor-pointer animate-glow"
              >
                <span>Book Safari</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#0e2a1e] text-[#d4e6dc] hover:text-white border border-[#1e4c37]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#183d2c] space-y-1.5 pb-3">
            {navLinks.map((link) => {
              const isActive = link.href === '/' 
                ? pathname === '/' 
                : pathname === link.href || pathname.startsWith(`${link.href}/`);

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    isActive
                      ? 'bg-gradient-to-r from-emerald-900/40 to-[#ea580c]/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                      : 'text-[#bad3c6] hover:bg-[#0e2a1e] hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-[0_0_6px_rgba(245,158,11,1)]" />
                  )}
                </Link>
              );
            })}

            <div className="pt-3 border-t border-[#183d2c] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleOpen();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-emerald-600 to-[#d97706] text-white text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md"
              >
                <span>Request Safari Booking</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20please%20check%20safari%20availability."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-lg bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 text-sm font-semibold flex items-center justify-center gap-2 text-center"
              >
                <MessageCircle className="w-4 h-4" />
                <span>WhatsApp Safari Assistance</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
