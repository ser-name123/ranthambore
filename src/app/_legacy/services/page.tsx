'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Compass, 
  Car, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  ChevronRight, 
  MessageCircle, 
  Anchor, 
  Castle, 
  Users 
} from 'lucide-react';
import ServicesGrid from '@/components/ServicesGrid';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import SpotlightCard from '@/components/SpotlightCard';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { waHref } from '@/lib/site-content';

export default function ServicesPage() {
  const { contact } = useSiteContent();
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
      vehicle: 'Tourist taxi with experienced highway chauffeur',
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
    <div className="relative py-12 lg:py-20 overflow-hidden bg-white text-[#082318]">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#517362]">
          <Link href="/" className="hover:text-emerald-700 transition flex items-center gap-1.5 font-medium">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-emerald-600" />
          <span className="text-[#b45309] font-semibold">Services</span>
        </nav>

        {/* Visual Hero Banner with Photo */}
        <div className="relative rounded-3xl overflow-hidden border border-[#d2e4d9] bg-white shadow-xl">
          <div className="relative h-72 sm:h-96 w-full">
            <Image
              src="/images/tiger_foliage.jpg"
              alt="Bengal tiger peering through jungle foliage"
              fill
              priority
              className="object-cover object-center opacity-30"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-transparent to-white/40" />
          </div>

          <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider border border-emerald-200 backdrop-blur-md">
                <Compass className="w-3.5 h-3.5 text-emerald-700" />
                Full-Spectrum Wildlife Tourism &amp; Logistics
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318] tracking-tight">
                Our Wildlife Tourism Services in <span className="text-[#b45309]">Sawai Madhopur</span>
              </h1>
              <p className="text-sm sm:text-base text-[#375847] leading-relaxed">
                From official Gypsy and Canter safari permit allocation to luxury heritage resorts, UNESCO Ranthambore Fort historical treks, Chambal river boat safaris, and intercity airport cabs.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                type="button"
                onClick={() => openBookingModal({ vehicle: 'All-Services Inquiry' })}
                className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-700 to-teal-700 hover:from-emerald-800 hover:to-teal-800 text-white font-bold text-sm shadow-md transition cursor-pointer flex items-center gap-2"
              >
                <span>Inquire For Any Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href={waHref(contact.whatsapp, 'Hello Ranthambore Wild Life Tour, I need information about your services.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3.5 rounded-xl bg-white hover:bg-[#f0f6f2] text-[#082318] border border-[#d2e4d9] font-bold text-sm flex items-center gap-2 transition shadow-sm"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Safari Desk</span>
              </a>
            </div>
          </div>
        </div>

        {/* SECTION 2: Approved Services Grid */}
        <ServicesGrid
          onSelectService={(service) => openBookingModal({ vehicle: service })}
        />

        {/* SECTION 3: Chambal Crocodile Sanctuary Deep Dive */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-800 text-xs font-bold uppercase tracking-wider border border-teal-200">
                <Anchor className="w-3.5 h-3.5 text-teal-700" />
                Special River Excursion (Pali Ghat)
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
                National Chambal Gharial Sanctuary Boat Safari
              </h2>
              <p className="text-xs sm:text-sm text-[#375847] leading-relaxed">
                Located 45 km from Sawai Madhopur at Pali Ghat, the National Chambal Sanctuary is India’s premier clean river sanctuary. Glide along the pristine waters on a silent motorboat to witness critically endangered Gharials, Marsh Crocodiles, and migratory birds.
              </p>
              <ul className="space-y-2 text-xs text-[#517362]">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Boat Duration: 1 Hour guided ride with certified river lifejackets</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Departure Shifts: 08:00 AM, 11:00 AM, 02:00 PM &amp; 04:00 PM</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                  <span>Roundtrip private taxi transfer arranged directly from your resort</span>
                </li>
              </ul>
              <button
                type="button"
                onClick={() => openBookingModal({ vehicle: 'Chambal Safari' })}
                className="mt-2 px-6 py-2.5 rounded-xl bg-teal-700 hover:bg-teal-800 text-white font-bold text-xs shadow-sm transition cursor-pointer"
              >
                Book Chambal Boat Safari
              </button>
            </div>

            <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-[#d2e4d9] space-y-4 shadow-sm">
              <h3 className="font-serif text-lg font-bold text-[#082318]">Chambal Safari Snapshot</h3>
              <div className="space-y-3 text-xs text-[#375847]">
                <div className="flex justify-between border-b border-[#e2ede6] pb-2">
                  <span>Boat Safari Ticket (Indian):</span>
                  <span className="text-[#082318] font-bold">₹1,200 / person</span>
                </div>
                <div className="flex justify-between border-b border-[#e2ede6] pb-2">
                  <span>Boat Safari Ticket (Foreigner):</span>
                  <span className="text-[#082318] font-bold">₹2,400 / person</span>
                </div>
                <div className="flex justify-between border-b border-[#e2ede6] pb-2">
                  <span>Roundtrip Cab from Resort:</span>
                  <span className="text-[#082318] font-bold">₹2,200 (Private Sedan)</span>
                </div>
                <div className="flex justify-between">
                  <span>Ideal Season:</span>
                  <span className="text-emerald-700 font-bold">Oct to April (Peak Season)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4: UNESCO Fort Treks */}
        <section className="p-8 sm:p-10 rounded-3xl bg-white border border-[#d2e4d9] space-y-6 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-[#b45309] flex items-center justify-center font-bold border border-amber-200">
              <Castle className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-serif text-2xl font-bold text-[#082318]">
                UNESCO World Heritage Ranthambore Fort Trek
              </h2>
              <span className="text-xs text-[#517362]">
                10th-Century Chauhan Dynasty Citadel overlooking the tiger reserve
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#375847]">
            <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#d2e4d9] space-y-2">
              <h3 className="font-bold text-[#082318] text-sm">Trinetra Ganesh Temple</h3>
              <p className="leading-relaxed text-[#517362]">
                One of India&apos;s oldest sacred temples where devotees send wedding invitations to Lord Ganesha, situated at the fort summit.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#d2e4d9] space-y-2">
              <h3 className="font-bold text-[#082318] text-sm">Padam Talao Lake Viewpoint</h3>
              <p className="leading-relaxed text-[#517362]">
                Offers breathtaking panoramic views overlooking the core forest, Padam Talao, and Rajbagh ruins where tigers are frequently seen below.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-[#f8faf8] border border-[#d2e4d9] space-y-2">
              <h3 className="font-bold text-[#082318] text-sm">Govt. Certified Guide Service</h3>
              <p className="leading-relaxed text-[#517362]">
                Local guides who narrate the rich siege history of Raja Hammir Dev, royal stepwells (Baoris), and ancient palaces inside the ramparts.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 5: Intercity Cab Transfers */}
        <section className="space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-[#b45309]">
              Comfort Logistics
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#082318]">
              Intercity Cab Transfers &amp; Station Pickups
            </h2>
            <p className="text-xs sm:text-sm text-[#517362]">
              Reliable, sanitized AC tourist vehicles with experienced highway drivers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {transferRoutes.map((route) => (
              <SpotlightCard
                key={route.from}
                spotlightColor="rgba(4, 120, 87, 0.12)"
                enableTilt={true}
                className="bg-white p-6 rounded-2xl border border-[#d2e4d9] space-y-3 flex flex-col justify-between shadow-md hover:border-emerald-600 hover:shadow-xl transition duration-300"
              >
                <div className="space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center border border-emerald-200">
                    <Car className="w-4 h-4" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#082318]">{route.from}</h3>
                  <span className="text-[11px] text-[#b45309] block font-semibold">{route.distance}</span>
                  <p className="text-xs text-[#1b3a2a] leading-relaxed font-normal">{route.vehicle}</p>
                </div>
                <div className="pt-3 border-t border-[#e2ede6] flex items-center justify-between">
                  <span className="text-xs font-bold text-[#082318]">{route.price}</span>
                  <button
                    type="button"
                    onClick={() => openBookingModal({ notes: `Cab inquiry: ${route.from}` })}
                    className="text-xs text-emerald-800 hover:text-emerald-950 hover:underline font-bold cursor-pointer"
                  >
                    Inquire Cab
                  </button>
                </div>
              </SpotlightCard>
            ))}
          </div>
        </section>

        {/* SECTION 6: Trust Pillars */}
        <section className="p-8 rounded-3xl bg-[#f4f8f5] border border-[#d2e4d9] space-y-6 shadow-sm">
          <div className="text-center max-w-2xl mx-auto space-y-1">
            <span className="text-xs font-bold uppercase tracking-widest text-emerald-800">
              Why Travelers Trust Us
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#082318]">
              The Ranthambore Wild Life Tour Advantage
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs text-[#375847]">
            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-emerald-700" />
              <h3 className="font-bold text-[#082318] text-sm">100% Genuine Permits</h3>
              <p className="text-[#517362]">
                Direct booking through official Rajasthan Forest Department channels with government passenger receipts.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#b45309]" />
              <h3 className="font-bold text-[#082318] text-sm">Local Sawai Madhopur Office</h3>
              <p className="text-[#517362]">
                Headquartered directly on Ranthambore Road. On-ground support staff present at safari gates every shift.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white border border-[#d2e4d9] space-y-2 shadow-sm">
              <Users className="w-6 h-6 text-teal-700" />
              <h3 className="font-bold text-[#082318] text-sm">Expert Naturalist Trackers</h3>
              <p className="text-[#517362]">
                We partner with senior trackers who read pugmarks, listen to alarm calls, and understand tiger territory movements.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 7: Quick Enquiry Section */}
        <QuickEnquirySection />
      </div>
    </div>
  );
}
