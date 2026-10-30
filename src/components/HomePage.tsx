'use client';

import React from 'react';
import Hero from '@/components/Hero';
import SightingsTicker from '@/components/SightingsTicker';
import ParkSafariOverview from '@/components/ParkSafariOverview';
import VehicleComparison from '@/components/VehicleComparison';
import FeaturedPackages from '@/components/FeaturedPackages';
import ServicesGrid from '@/components/ServicesGrid';
import ZoneGuide from '@/components/ZoneGuide';
import AboutCompany from '@/components/AboutCompany';
import Testimonials from '@/components/Testimonials';
import TravelGuide from '@/components/TravelGuide';
import FaqSection from '@/components/FaqSection';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';

export default function HomePage() {
  const { openBookingModal } = useBookingModal();
  const { home } = useSiteContent();

  return (
    <>
      {/* 1. Full-Screen Hero Section with Live Availability Calculator & Docked Sightings Ticker */}
      <Hero onOpenBookingModal={openBookingModal} />

      {/* 2. Ranthambore Safari Overview, Brief Journey Timeline & Wildlife Catalog */}
      {home.overview.visible && (
        <ParkSafariOverview onOpenBookingModal={openBookingModal} />
      )}

      {/* 3. Safari Vehicle Comparison: Jeep vs Canter */}
      {home.vehicles.visible && (
        <VehicleComparison
          onSelectVehicle={(vehicleName) => openBookingModal({ vehicle: vehicleName })}
        />
      )}

      {/* 3. Featured Tour Packages with Filter Tabs */}
      {home.packages.visible && (
        <FeaturedPackages
          onSelectPackage={(packageName) => openBookingModal({ packageName })}
        />
      )}

      {/* 4. Approved Services Grid */}
      {home.services.visible && (
        <ServicesGrid
          onSelectService={(serviceTitle) => openBookingModal({ vehicle: serviceTitle })}
        />
      )}

      {/* 5. Safari Zones & Shift Timings Explorer */}
      {home.zones.visible && (
        <ZoneGuide />
      )}

      {/* 6. About Ranthambore Wild Life Tour & Trust Pillars */}
      {home.about.visible && (
        <AboutCompany onOpenBookingModal={() => openBookingModal()} />
      )}

      {/* 7. Authentic Customer Testimonials */}
      {home.testimonials.visible && (
        <Testimonials />
      )}

      {/* 8. Wildlife Travel Guide & Preparation Insights */}
      {home.guides.visible && (
        <TravelGuide
          onOpenArticle={(title) => openBookingModal({ notes: `Interested in: ${title}` })}
        />
      )}

      {/* 9. Frequently Asked Questions Accordion */}
      {home.faq.visible && (
        <FaqSection />
      )}

      {/* 10. Direct Safari Enquiry Form */}
      {home.enquiry.visible && (
        <QuickEnquirySection />
      )}
    </>
  );
}
