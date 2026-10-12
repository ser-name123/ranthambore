'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, MessageCircle, Clock, ShieldCheck, Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onOpenBookingModal: (prefill?: Record<string, string>) => void;
}

export default function Header({ onOpenBookingModal }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const phoneNumbers = [
    { display: '+91 99719 65629', raw: '+919971965629' },
    { display: '+91 78349 42435', raw: '+917834942435' },
  ];

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Safari Booking', href: '#safari-booking' },
    { name: 'Tour Packages', href: '#packages' },
    { name: 'Services', href: '#services' },
    { name: 'Safari Zones', href: '#zones' },
    { name: 'About Us', href: '#about-us' },
    { name: 'Travel Guide', href: '#travel-guide' },
    { name: 'Contact Us', href: '#contact-us' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full shadow-2xl transition-all">
      {/* Top Info Bar */}
      <div className="bg-[#1c1917] border-b border-[#2e2722] text-xs text-[#d6c7b2] py-2 px-4 sm:px-8">
        <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#ea580c]/15 text-[#ea580c] font-medium border border-[#ea580c]/30">
              <ShieldCheck className="w-3.5 h-3.5" />
              Independent Safari Tour Operator
            </span>
            <span className="hidden sm:inline-flex items-center gap-1 text-[#a89985]">
              <Clock className="w-3.5 h-3.5 text-[#f59e0b]" />
              Support: 6:00 AM - 10:00 PM (Daily)
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-[#ea580c]" />
              <span className="text-[#8c7f70]">Helpline:</span>
              <a href={`tel:${phoneNumbers[0].raw}`} className="hover:text-white transition">
                {phoneNumbers[0].display}
              </a>
              <span className="text-[#4a4036]">|</span>
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
      <nav className="bg-[#141210]/95 backdrop-blur-md border-b border-[#29231d] px-4 sm:px-8 py-3">
        <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-6">
          {/* Logo & Brand Identity */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-lg border border-[#ea580c]/30 group-hover:border-[#ea580c] transition duration-300">
              <Image
                src="/logo.jpg"
                alt="Ranthambore Wild Life Tour Logo"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div>
              <span className="block font-serif text-xl sm:text-2xl font-bold tracking-tight text-white group-hover:text-[#ea580c] transition">
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
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-[#c4b5a3] hover:text-[#ea580c] transition duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Action CTAs */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={() => onOpenBookingModal()}
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#ea580c] to-[#d97706] hover:from-[#f97316] hover:to-[#ea580c] text-white text-xs font-bold shadow-lg shadow-[#ea580c]/25 flex items-center gap-1.5 transition duration-300 cursor-pointer animate-glow"
              >
                <span>Book Safari</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg bg-[#221c17] text-[#e0d6c7] hover:text-white border border-[#3b3127]"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 pt-3 border-t border-[#29231d] space-y-2 pb-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-[#c4b5a3] hover:bg-[#251e18] hover:text-[#ea580c] transition"
              >
                {link.name}
              </a>
            ))}

            <div className="pt-3 border-t border-[#29231d] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBookingModal();
                }}
                className="w-full py-2.5 rounded-lg bg-gradient-to-r from-[#ea580c] to-[#d97706] text-white text-sm font-bold text-center flex items-center justify-center gap-2 shadow-md"
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
