'use client';

import React, { useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import VehicleComparison from '@/components/VehicleComparison';
import FeaturedPackages from '@/components/FeaturedPackages';
import ServicesGrid from '@/components/ServicesGrid';
import ZoneGuide from '@/components/ZoneGuide';
import AboutCompany from '@/components/AboutCompany';
import Testimonials from '@/components/Testimonials';
import TravelGuide from '@/components/TravelGuide';
import FaqSection from '@/components/FaqSection';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import Footer from '@/components/Footer';
import BookingModal from '@/components/BookingModal';
import FloatingMobileBar from '@/components/FloatingMobileBar';
import { MessageCircle } from 'lucide-react';

export default function HomePage() {
  const [modalOpen, setModalOpen] = useState(false);
  const [prefill, setPrefill] = useState<Record<string, string> | undefined>(undefined);

  const handleOpenModal = (prefillData?: Record<string, string>) => {
    setPrefill(prefillData);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setPrefill(undefined);
  };

  return (
    <div className="min-h-screen bg-[#121110] text-[#f4efea] flex flex-col relative selection:bg-[#ea580c] selection:text-white">
      {/* Navigation Header */}
      <Header onOpenBookingModal={handleOpenModal} />

      {/* Main Page Flow */}
      <main className="flex-1">
        {/* 1. Hero Section with Live Availability Calculator */}
        <Hero onOpenBookingModal={handleOpenModal} />

        {/* 2. Safari Vehicle Comparison: Jeep vs Canter */}
        <VehicleComparison
          onSelectVehicle={(vehicleName) => handleOpenModal({ vehicle: vehicleName })}
        />

        {/* 3. Featured Tour Packages with Filter Tabs */}
        <FeaturedPackages
          onSelectPackage={(packageName) => handleOpenModal({ packageName })}
        />

        {/* 4. Approved Services Grid */}
        <ServicesGrid
          onSelectService={(serviceTitle) => handleOpenModal({ vehicle: serviceTitle })}
        />

        {/* 5. Safari Zones & Shift Timings Explorer */}
        <ZoneGuide />

        {/* 6. About Ranthambore Wild Life Tour & Trust Pillars */}
        <AboutCompany onOpenBookingModal={() => handleOpenModal()} />

        {/* 7. Authentic Customer Testimonials */}
        <Testimonials />

        {/* 8. Wildlife Travel Guide & Preparation Insights */}
        <TravelGuide
          onOpenArticle={(title) => handleOpenModal({ notes: `Interested in: ${title}` })}
        />

        {/* 9. Frequently Asked Questions Accordion */}
        <FaqSection />

        {/* 10. Direct Safari Enquiry Form */}
        <QuickEnquirySection />
      </main>

      {/* Footer with Independent Operator Disclaimers */}
      <Footer />

      {/* Interactive Booking & Quote Modal */}
      <BookingModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        prefillData={prefill}
      />

      {/* Sticky Mobile Conversion Bar */}
      <FloatingMobileBar onOpenBookingModal={() => handleOpenModal()} />

      {/* Floating Desktop WhatsApp Button */}
      <aside aria-label="WhatsApp quick chat" className="fixed bottom-6 right-6 z-40 hidden lg:block">
        <a
          href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20would%20like%20to%20check%20safari%20availability."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-2xl shadow-emerald-900/50 hover:scale-105 transition duration-300 border border-emerald-400/40"
          aria-label="WhatsApp quick chat"
        >
          <MessageCircle className="w-5 h-5 fill-current" />
          <span>Chat on WhatsApp</span>
        </a>
      </aside>
    </div>
  );
}
