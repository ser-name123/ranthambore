'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Sparkles, 
  Compass, 
  MapPin, 
  Car, 
  Building, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  Phone, 
  MessageCircle, 
  Clock, 
  Anchor, 
  Castle, 
  Users 
} from 'lucide-react';
import { motion } from 'framer-motion';
import ServicesGrid from '@/components/ServicesGrid';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ServicesPage() {
  const { openBookingModal } = useBookingModal();

  const transferRoutes = [
    {
      from: 'Jaipur International Airport (JAI)',
      distance: '160 km (Approx. 3.5 hrs)',
      vehicle: 'Sedan (Dzire/Etios) or SUV (Innova Crysta)',
      price: 'Starting ₹3,200',
    },
    {
      from: 'Delhi / NCR / Gurgaon',
      distance: '360 km (Approx. 6 hrs via Expressway)',
      vehicle: 'AC Innova Crysta / Ertiga / Tempo Traveller',
      price: 'Starting ₹6,800',
    },
    {
      from: 'Agra Cantt / Taj Mahal',
      distance: '250 km (Approx. 5 hrs)',
      vehicle: 'Commercial tourist taxi with experienced highway driver',
      price: 'Starting ₹4,800',
    },
    {
      from: 'Sawai Madhopur Railway Station (SWM)',
      distance: 'Within 5–10 km radius',
      vehicle: 'Station pickup & hotel drop in private Gypsy/Cab',
      price: 'Complimentary in Packages',
    },
  ];

  return (
    <div className="relative py-12 lg:py-20 overflow-hidden bg-[#120f0d]">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-xs text-[#a89985]">
          <Link href="/" className="hover:text-[#ea580c] transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-zinc-600" />
          <span className="text-[#f59e0b] font-semibold">Services</span>
        </nav>

        {/* SECTION 1: Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <Compass className="w-4 h-4 text-[#ea580c]" />
            Full-Spectrum Wildlife Tourism &amp; Logistics
          </div>

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Our Wildlife Tourism Services in{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              Sawai Madhopur
            </span>
          </h1>

          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed max-w-2xl mx-auto">
            From official Gypsy and Canter safari permit allocation to luxury heritage resorts, UNESCO Ranthambore Fort historical treks, Chambal river boat safaris, and intercity airport cabs.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => openBookingModal({ vehicle: 'All-Services Inquiry' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center gap-2 cursor-pointer transition duration-300"
            >
              <span>Inquire For Any Service</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/919971965629?text=Hello%20Ranthambore%20Wild%20Life%20Tour,%20I%20need%20information%20about%20your%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-[#221c17] hover:bg-[#2b241e] text-white font-bold text-sm border border-[#3d3228] flex items-center gap-2 transition"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp Safari Desk</span>
            </a>
          </div>
        </motion.div>

        {/* SECTION 2: Approved Services Grid */}
        <div className="mb-24">
          <ServicesGrid
            onSelectService={(service) => openBookingModal({ vehicle: service })}
          />
        </div>

        {/* SECTION 3: Chambal Crocodile & Gharial Sanctuary Deep Dive */}
        <div className="mb-24 p-8 sm:p-10 rounded-2xl bg-gradient-to-r from-[#171411] via-[#1c1813] to-[#15120f] border border-[#ea580c]/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/15 text-[#f59e0b] text-xs font-bold uppercase tracking-wider">
                <Anchor className="w-3.5 h-3.5" />
                Special River Excursion (Pali Ghat)
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                National Chambal Gharial Sanctuary Boat Safari
              </h2>
              <p className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed">
                Located just 45 km from Sawai Madhopur at Pali Ghat, the National Chambal Sanctuary is India’s premier clean river sanctuary. Glide along the pristine waters on a silent motorboat to witness critically endangered Gharials, Mugger Crocodiles, Gangetic River Dolphins, and over 300 migratory waterbirds.
              </p>
              <ul className="space-y-2 text-xs text-[#a89985]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Boat Duration: 1 Hour guided ride with certified river lifejackets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Departure Shifts: 08:00 AM, 11:00 AM, 02:00 PM &amp; 04:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>Roundtrip private taxi transfer arranged directly from your resort</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => openBookingModal({ vehicle: 'Chambal Safari' })}
                className="mt-2 px-6 py-2.5 rounded-xl bg-[#ea580c] hover:bg-[#f97316] text-white font-bold text-xs shadow-md transition cursor-pointer"
              >
                Book Chambal Boat Safari
              </button>
            </div>

            <div className="lg:col-span-5 bg-[#120f0d] p-6 rounded-xl border border-[#2b221a] space-y-4">
              <h3 className="font-serif text-lg font-bold text-white">Chambal Safari Snapshot</h3>
              <div className="space-y-3 text-xs text-[#b8a794]">
                <div className="flex justify-between border-b border-[#241c16] pb-2">
                  <span>Boat Safari Ticket (Indian):</span>
                  <span className="text-white font-bold">₹1,200 / person</span>
                </div>
                <div className="flex justify-between border-b border-[#241c16] pb-2">
                  <span>Boat Safari Ticket (Foreigner):</span>
                  <span className="text-white font-bold">₹2,400 / person</span>
                </div>
                <div className="flex justify-between border-b border-[#241c16] pb-2">
                  <span>Roundtrip Cab from Resort:</span>
                  <span className="text-white font-bold">₹2,200 (Private Sedan)</span>
                </div>
                <div className="flex justify-between">
                  <span>Ideal Season:</span>
                  <span className="text-emerald-400 font-bold">Oct to April (Peak Migratory)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: UNESCO Ranthambore Fort Guided Treks */}
        <div className="mb-24 p-8 sm:p-10 rounded-2xl bg-[#171411] border border-[#2b241e] space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center font-bold">
              <Castle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">
                UNESCO World Heritage Ranthambore Fort Trek
              </h2>
              <span className="text-xs text-[#a89985]">
                10th-Century Chauhan Dynasty Citadel overlooking the tiger reserve
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#bdae9c]">
            <div className="p-5 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white text-sm">Trinetra Ganesh Temple</h3>
              <p className="leading-relaxed">
                One of India&apos;s oldest and most sacred temples where devotees send wedding invitations to Lord Ganesha. Located at the summit of the hill citadel.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white text-sm">Padam Talao Lake Viewpoint</h3>
              <p className="leading-relaxed">
                Offers breathtaking panoramic views overlooking the core forest, Padam Talao, and Rajbagh ruins where tigers are frequently seen swimming below.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e] border border-[#261f18] space-y-2">
              <h3 className="font-bold text-white text-sm">Govt. Certified Guide Service</h3>
              <p className="leading-relaxed">
                Expert local guides who narrate the rich siege history of Raja Hammir Dev, royal stepwells (Baoris), cenotaphs, and ancient palaces inside the ramparts.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 5: Private Intercity Cab Transfers */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Comfort Logistics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Intercity Cab Transfers &amp; Station Pickups
            </h2>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              Reliable, sanitized AC tourist vehicles with experienced highway drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {transferRoutes.map((route) => (
              <SpotlightCard
                key={route.from}
                spotlightColor="rgba(234, 88, 12, 0.16)"
                enableTilt={true}
                className="glass-card p-6 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#ea580c]/15 text-[#ea580c] flex items-center justify-center">
                    <Car className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-white">{route.from}</h3>
                  <span className="text-[11px] text-[#f59e0b] block">{route.distance}</span>
                  <p className="text-xs text-[#a89985] leading-relaxed">{route.vehicle}</p>
                </div>
                <div className="pt-3 border-t border-[#261f18] flex items-center justify-between">
                  <span className="text-xs font-bold text-white">{route.price}</span>
                  <button
                    type="button"
                    onClick={() => openBookingModal({ notes: `Cab inquiry: ${route.from}` })}
                    className="text-xs text-[#ea580c] hover:underline font-semibold cursor-pointer"
                  >
                    Inquire Cab
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </div>

        {/* SECTION 6: Trust Pillars & Local Expertise */}
        <div className="mb-24 p-8 rounded-2xl bg-[#191512] border border-[#2b241e] space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
              Why Travelers Trust Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              The Ranthambore Wild Life Tour Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#cfc0ae]">
            <div className="p-5 rounded-xl bg-[#13110e] border border-[#28211a] space-y-2">
              <ShieldCheck className="w-6 h-6 text-[#ea580c]" />
              <h3 className="font-bold text-white text-sm">100% Genuine Permits</h3>
              <p className="text-[#a89985]">
                Direct booking through official Rajasthan Forest Department channels with government passenger receipts.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e] border border-[#28211a] space-y-2">
              <MapPin className="w-6 h-6 text-[#f59e0b]" />
              <h3 className="font-bold text-white text-sm">Local Sawai Madhopur Office</h3>
              <p className="text-[#a89985]">
                Headquartered directly on Ranthambore Road. On-ground support staff present at all 10 safari gates every shift.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-[#13110e] border border-[#28211a] space-y-2">
              <Users className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Expert Naturalist Trackers</h3>
              <p className="text-[#a89985]">
                We partner with senior jungle trackers who read pugmarks, listen to alarm calls, and understand tiger territory movements.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 7: Quick Enquiry Section */}
        <div>
          <QuickEnquirySection />
        </div>
      </div>
    </div>
  );
}
