'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BookingModalProvider } from '@/context/BookingModalContext';
import Header from './Header';
import Footer from './Footer';
import FloatingMobileBar from './FloatingMobileBar';
import GlobalPreloader from './GlobalPreloader';

interface ClientLayoutProps {
  children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const pathname = usePathname();

  // Instantly reset scroll to top on route change without visible rolling/scrolling
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return (
      <div className="min-h-screen bg-[#0c0b0a] text-[#f4efea] selection:bg-[#ea580c] selection:text-white font-sans antialiased">
        {children}
      </div>
    );
  }

  return (
    <BookingModalProvider>
      <div className="min-h-screen bg-[#06150f] text-[#f2f7f4] flex flex-col relative selection:bg-[#10b981] selection:text-white">
        {/* Global Route Progress Bar */}
        <GlobalPreloader />

        {/* Global Navigation Header across all pages */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full overflow-x-hidden flex flex-col">
          {children}
        </main>

        {/* Global Footer across all pages */}
        <Footer />

        {/* Sticky Mobile Conversion Bar */}
        <FloatingMobileBar />
      </div>
    </BookingModalProvider>
  );
}
