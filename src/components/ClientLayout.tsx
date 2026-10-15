'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { BookingModalProvider } from '@/context/BookingModalContext';
import { SiteContentProvider, type PackageSummary } from '@/context/SiteContentContext';
import type { SiteContent } from '@/lib/site-content';
import Header from './Header';
import Footer from './Footer';
import FloatingMobileBar from './FloatingMobileBar';
import GlobalPreloader from './GlobalPreloader';
import FallingLeavesCanvas from './FallingLeavesCanvas';
import WildlifeSoundscape from './WildlifeSoundscape';

interface ClientLayoutProps {
  content: SiteContent;
  packages: PackageSummary[];
  children: React.ReactNode;
}

export default function ClientLayout({ content, packages, children }: ClientLayoutProps) {
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
      <div className="min-h-screen bg-white text-[#082318] selection:bg-emerald-700 selection:text-white font-sans antialiased">
        {children}
      </div>
    );
  }

  return (
    <SiteContentProvider content={content} packages={packages}>
      <BookingModalProvider>
      <div className="min-h-screen bg-white text-[#082318] flex flex-col relative selection:bg-emerald-700 selection:text-white">
        {/* Global Route Progress Bar */}
        <GlobalPreloader />

        {/* Global Floating Jungle Leaves Animation Canvas */}
        <FallingLeavesCanvas />

        {/* Global Interactive Jungle Wildlife Ambience Sound Toggle */}
        <WildlifeSoundscape />

        {/* Global Navigation Header across all pages */}
        <Header />

        {/* Dynamic Page Content */}
        <main className="flex-1 w-full overflow-x-hidden flex flex-col relative z-20">
          {children}
        </main>

        {/* Global Footer across all pages */}
        <Footer />

        {/* Sticky Mobile Conversion Bar */}
        <FloatingMobileBar />
      </div>
      </BookingModalProvider>
    </SiteContentProvider>
  );
}
