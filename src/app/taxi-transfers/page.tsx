'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Car, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Navigation,
  Fuel,
  Clock
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function TaxiTransfersPage() {
  const { openBookingModal } = useBookingModal();

  const routes = [
    {
      route: 'Jaipur Airport / City to Ranthambore',
      distance: '160 km',
      duration: '3.0 – 3.5 Hours',
      highways: 'Via Tonk Road / NH52 / Lalsot Bypass',
      sedanPrice: '₹3,200',
      suvPrice: '₹4,800',
      crystaPrice: '₹5,800',
    },
    {
      route: 'Delhi / NCR / Gurgaon to Ranthambore',
      distance: '380 km',
      duration: '5.5 – 6.0 Hours',
      highways: 'Via Delhi-Mumbai Expressway (NE-4)',
      sedanPrice: '₹6,800',
      suvPrice: '₹9,500',
      crystaPrice: '₹11,500',
    },
    {
      route: 'Agra (Taj Mahal) to Ranthambore',
      distance: '260 km',
      duration: '5.0 Hours',
      highways: 'Via Bharatpur / Dausa / Lalsot Highway',
      sedanPrice: '₹5,200',
      suvPrice: '₹7,500',
      crystaPrice: '₹8,800',
    },
    {
      route: 'Sawai Madhopur Local Station Pick / Drop',
      distance: '10 – 15 km',
      duration: '20 – 30 Minutes',
      highways: 'Direct resort road transfer',
      sedanPrice: '₹600',
      suvPrice: '₹900',
      crystaPrice: '₹1,200',
    },
  ];

  const fleet = [
    {
      vehicle: 'Sedan (Dzire / Etios)',
      capacity: 'Up to 3-4 Passengers + 2 Bags',
      badge: 'Economical Couples',
      desc: 'Air-conditioned sedan with clean upholstery, phone charging points, and experienced highway chauffeur.',
    },
    {
      vehicle: 'Premium SUV (Innova Crysta)',
      capacity: 'Up to 6 Passengers + 4 Large Bags',
      badge: 'Family & VIP Comfort',
      desc: 'Captain seat luxury, dual air conditioning, smooth highway suspension, and generous boot space.',
    },
    {
      vehicle: 'Luxury Tempo Traveller',
      capacity: '9 to 16 Passengers + Heavy Bags',
      badge: 'Groups & Corporate',
      desc: 'Reclining high-back seats, individual AC vents, and dedicated luggage carrier for extended group travel.',
    },
  ];

  const guarantees = [
    { title: 'All-Inclusive Transparent Pricing', desc: 'State border taxes, expressway toll charges, and driver allowance included.' },
    { title: 'Police-Verified Chauffeurs', desc: 'Courteous drivers fluent in Hindi and English with deep knowledge of Rajasthan routes.' },
    { title: '24/7 Live Highway Coordination', desc: 'Direct support from our Sawai Madhopur dispatch desk with flight delay tracking.' },
    { title: 'Sanitized & Well-Maintained', desc: 'Vehicles thoroughly inspected and cleaned prior to every trip.' },
  ];

  const faqs = [
    {
      q: 'How long does the Delhi-Mumbai Expressway take to reach Ranthambore?',
      a: 'Via the Delhi-Mumbai Expressway (NE-4), driving time from Delhi NCR or Gurgaon to Sawai Madhopur is approx 5.5 hours.',
    },
    {
      q: 'Will the driver wait if my flight into Jaipur is delayed?',
      a: 'Yes, our dispatch desk monitors flight arrivals live. Your private chauffeur will meet you with a name signboard at no extra fee for standard delays.',
    },
    {
      q: 'Are tolls and driver allowances included in the quote?',
      a: 'Yes! We provide 100% all-inclusive fixed quotations with zero hidden surcharges for tolls or night driving.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-white text-[#082318] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-100/40 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
            <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d2e4d9]" />
            <Link href="/services" className="hover:text-emerald-700 transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#d2e4d9]" />
            <span className="text-[#d97706] font-semibold">Jaipur &amp; Delhi Cab Transfers</span>
          </nav>

          {/* Visual Hero Banner with Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-white shadow-xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/gypsy_encounter.jpg"
                alt="4x4 Safari vehicle in Ranthambore"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/50" />
            </div>

            <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200">
                  <Car className="w-3.5 h-3.5 text-emerald-700" />
                  Intercity Private Chauffeur Fleet
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                  Jaipur &amp; Delhi Cab <span className="text-[#d97706]">Transfers</span>
                </h1>
                <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                  Seamless door-to-door private cab service connecting Ranthambore with Jaipur Airport, Delhi NCR, Agra Golden Triangle, and Sawai Madhopur Junction with transparent, fixed pricing.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ notes: 'Interested in Private Cab Transfer' })}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-600/30"
                >
                  Get Instant Cab Quote
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20need%20a%20private%20cab%20transfer%20to%20Ranthambore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-800 border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-700" />
                  <span>WhatsApp Dispatch</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: POPULAR ROUTES & PRICING TABLE */}
        <section className="space-y-6 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] p-6 sm:p-10">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Popular Intercity Highway Routes
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Fixed one-way private taxi rates with all toll taxes and driver allowances included.
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-[#d2e4d9] bg-white shadow-sm">
            <table className="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr className="border-b border-[#d2e4d9] text-emerald-950 uppercase text-[11px] font-bold bg-[#edf5f0]">
                  <th className="py-3 px-4">Highway Route</th>
                  <th className="py-3 px-4">Distance &amp; Time</th>
                  <th className="py-3 px-4 text-[#082318]">AC Sedan (Dzire)</th>
                  <th className="py-3 px-4 text-emerald-800">AC Ertiga / SUV</th>
                  <th className="py-3 px-4 text-[#d97706]">Innova Crysta</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ede6]">
                {routes.map((r, idx) => (
                  <tr key={idx} className="hover:bg-[#f8faf8] transition">
                    <td className="py-4 px-4">
                      <p className="font-semibold text-[#082318]">{r.route}</p>
                      <span className="text-[11px] text-[#517362]">{r.highways}</span>
                    </td>
                    <td className="py-4 px-4 text-[#375847] font-mono">
                      <div>{r.distance}</div>
                      <span className="text-[11px] text-[#517362]">{r.duration}</span>
                    </td>
                    <td className="py-4 px-4 font-bold text-[#082318] font-mono">{r.sedanPrice}</td>
                    <td className="py-4 px-4 font-bold text-emerald-800 font-mono">{r.suvPrice}</td>
                    <td className="py-4 px-4 font-bold text-[#d97706] font-mono">{r.crystaPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: FLEET OVERVIEW */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              Our Premium Intercity Taxi Fleet
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">Choose the ideal vehicle size and comfort level for your party.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {fleet.map(v => (
              <div key={v.vehicle} className="p-6 rounded-3xl bg-white border border-[#d2e4d9] space-y-4 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-lg transition">
                <div className="space-y-3">
                  <span className="inline-block px-2.5 py-0.5 rounded text-[10px] font-bold uppercase bg-emerald-50 text-emerald-800 border border-emerald-200">
                    {v.badge}
                  </span>
                  <div>
                    <h3 className="font-bold text-[#082318] text-base">{v.vehicle}</h3>
                    <p className="text-xs text-[#d97706] font-semibold mt-0.5">{v.capacity}</p>
                  </div>
                  <p className="text-xs text-[#517362] leading-relaxed">{v.desc}</p>
                </div>
                <button
                  onClick={() => openBookingModal({ notes: `Booking request for ${v.vehicle}` })}
                  className="w-full py-2.5 rounded-xl bg-[#edf5f0] hover:bg-emerald-700 hover:text-white text-[#082318] border border-[#d2e4d9] text-xs font-bold transition cursor-pointer"
                >
                  Book This Vehicle
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: SERVICE GUARANTEES */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {guarantees.map((g, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-white border border-[#d2e4d9] hover:border-emerald-500/50 hover:shadow-md transition space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-800 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-[#082318] text-base">{g.title}</h3>
              <p className="text-xs text-[#517362] leading-relaxed">{g.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 5: HIGHWAY DRIVING INSIGHTS */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Highway Driving Insights &amp; Stops
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs">
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Navigation className="w-5 h-5 text-[#d97706]" />
              <h3 className="font-bold text-[#082318] text-sm">Delhi-Mumbai Expressway (NE-4)</h3>
              <p className="text-[#517362]">World-class 8-lane expressway with modern average speeds, roadside rest plazas, food courts, and clean fuel stops.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Fuel className="w-5 h-5 text-emerald-700" />
              <h3 className="font-bold text-[#082318] text-sm">Jaipur to Ranthambore Highway</h3>
              <p className="text-[#517362]">Smooth 4-lane stretch via Lalsot with picturesque rural mustard crops and mountain views.</p>
            </div>
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Clock className="w-5 h-5 text-teal-700" />
              <h3 className="font-bold text-[#082318] text-sm">Custom Meal &amp; Chai Breaks</h3>
              <p className="text-[#517362]">Chauffeurs gladly pause at hygienic roadside stops for fresh kulhad chai and hot parathas.</p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
            Cab Transfer FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
                <h3 className="font-bold text-[#082318] text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#d97706] shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#517362] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-[#92400e] border border-emerald-600/30 text-center space-y-6 shadow-xl text-white">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Reserve Your Private Intercity Cab Transfer
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 leading-relaxed">
              Arrive relaxed, safely, and on time for your jungle safari drive. Book private taxi transfers with verified drivers.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ notes: 'Interested in Private Cab Transfer' })}
              className="px-8 py-3.5 rounded-xl bg-white hover:bg-amber-50 text-[#082318] font-bold text-sm shadow-xl transition cursor-pointer border border-white/50"
            >
              Book Cab Transfer
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-black/25 hover:bg-black/40 border border-white/20 text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-amber-300" />
              <span>Transport Desk: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
