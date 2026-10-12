'use client';

import React from 'react';
import { BookingModalProvider } from '@/context/BookingModalContext';
import Header from './Header';
import Footer from './Footer';
import FloatingMobileBar from './FloatingMobileBar';
import { MessageCircle } from 'lucide-react';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  return (
    <BookingModalProvider>
      <div className="min-h-screen bg-[#121110] text-[#f4efea] flex flex-col relative selection:bg-[#ea580c] selection:text-white">
        {/* Global Navigation Header across all pages */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Global Footer across all pages */}
        <Footer />

        {/* Sticky Mobile Conversion Bar */}
        <FloatingMobileBar />

        {/* Floating Desktop WhatsApp Button with Radar Pulse Wave */}
        <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 hidden lg:block">
          <div className="relative group">
            {/* Radar Ripple Animation */}
            <span className="absolute -inset-1 rounded-full bg-emerald-500 opacity-60 animate-radar pointer-events-none" />
            <span
              className="absolute -inset-2 rounded-full bg-emerald-400 opacity-30 animate-radar pointer-events-none"
              style={{ animationDelay: '0.8s' }}
            />

            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20would%20like%20to%20check%20safari%20availability."
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-900/50 hover:scale-105 active:scale-95 transition duration-300 border border-emerald-400/40"
              aria-label="WhatsApp quick chat"
            >
              <MessageCircle className="w-5 h-5 fill-current animate-bounce" style={{ animationDuration: '2.5s' }} />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </aside>
      </div>
    </BookingModalProvider>
  );
}
