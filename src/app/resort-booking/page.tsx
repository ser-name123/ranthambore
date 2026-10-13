'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Hotel, 
  Sparkles, 
  CheckCircle2, 
  Clock, 
  ChevronRight, 
  ArrowLeft, 
  Phone, 
  MessageCircle, 
  HelpCircle,
  Coffee,
  MapPin,
  Compass,
  Utensils
} from 'lucide-react';
import { useBookingModal } from '@/context/BookingModalContext';

export default function ResortBookingPage() {
  const { openBookingModal } = useBookingModal();

  const resortCategories = [
    {
      category: '5-Star Ultra Luxury & Heritage Palaces',
      priceRange: '₹22,000 – ₹65,000 / Night',
      badge: 'Royal Opulence',
      resorts: ['The Oberoi Vanyavilas', 'SUJÁN Sher Bagh Tented Camp', 'Nahargarh Ranthambore Palace', 'Aman-i-Khás Luxury Lodges'],
      features: ['Private plunge pools & butler service', 'Royal Mughal tents & Rajput palaces', 'Fine-dining organic farm cuisine', 'Private naturalist briefings'],
    },
    {
      category: '4-Star Premium Wildlife Resorts',
      priceRange: '₹7,500 – ₹16,000 / Night',
      badge: 'Best Family Choice',
      resorts: ['Ranthambore Regency', 'The Tigress Resort & Spa', 'Tiger Den Resort', 'Fateh’s Retreat'],
      features: ['Swimming pools & lush gardens', 'Spacious AC cottages & Swiss tents', 'Evening Rajasthani folk music', 'Close proximity to core safari gates'],
    },
    {
      category: 'Eco-Nature Lodges & Wilderness Tents',
      priceRange: '₹3,500 – ₹6,500 / Night',
      badge: 'Value & Nature Lovers',
      resorts: ['Tiger Safari Resort', 'Jungle Cave Resort', 'Ranthambore Heritage Haveli', 'Khem Villas Eco Luxury'],
      features: ['Clean sanitized AC rooms', 'Homestyle traditional Indian food', 'Quiet countryside surroundings', 'Station pickup assistance'],
    },
  ];

  const amenities = [
    { title: 'Swimming Pools & Lawns', desc: 'Cool down between safari drives with clear pools and shaded sun-loungers.' },
    { title: 'Authentic Rajasthani Food', desc: 'Savor royal Rajput specialties including Laal Maas and fresh vegetarian buffets.' },
    { title: 'Jungle Bonfire Evenings', desc: 'Gather under star-lit skies for live folk music, dance, and traveler tales.' },
    { title: 'Ayurvedic Spas', desc: 'Therapeutic herbal oil massages to soothe tired muscles after an off-road trail.' },
  ];

  const faqs = [
    {
      q: 'Do you offer combined Resort + Safari permit packages?',
      a: 'Yes! Over 80% of guests book complete combos bundling resort stay, buffet meals, Gypsy permits, and station transfers in a single confirmed booking.',
    },
    {
      q: 'How far are the resorts from safari gates?',
      a: 'Most premier resorts are situated along Ranthambore Road, just 5 to 15 minutes drive from Singhdwar and Rajbagh entry gates.',
    },
    {
      q: 'Can special dietary meals be arranged?',
      a: 'Yes, partner resorts readily cater to Pure Vegetarian, Jain, Vegan, and Gluten-Free requirements with prior notice.',
    },
  ];

  return (
    <div className="relative py-10 lg:py-16 bg-[#06150f] text-[#f2f7f4] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-96 h-96 bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12 lg:space-y-16">
        
        {/* SECTION 1: BREADCRUMB & HERO */}
        <section className="space-y-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[#86a898]">
            <Link href="/" className="hover:text-emerald-400 transition flex items-center gap-1.5 font-medium">
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Home</span>
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#16432f]" />
            <Link href="/services" className="hover:text-emerald-400 transition">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[#16432f]" />
            <span className="text-amber-400 font-semibold">Luxury Forest Resort Stays</span>
          </nav>

          {/* Visual Hero Banner with Tiger Photo */}
          <div className="relative rounded-3xl overflow-hidden border border-[#16432f] bg-[#092218] shadow-2xl">
            <div className="relative h-72 sm:h-96 w-full">
              <Image
                src="/images/tiger_lake.jpg"
                alt="Tiger resting by Padam Talao lake in Ranthambore"
                fill
                priority
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06150f] via-[#06150f]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#06150f]/80 via-transparent to-[#06150f]/40" />
            </div>

            <div className="p-6 sm:p-10 -mt-24 sm:-mt-32 relative z-10 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/15 text-emerald-400 text-xs font-bold uppercase tracking-wider border border-emerald-500/30 backdrop-blur-md">
                  <Hotel className="w-3.5 h-3.5" />
                  Handpicked Wilderness Stays &amp; Tented Camps
                </div>
                <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
                  Luxury Forest Resort <span className="text-amber-400">Stays</span>
                </h1>
                <p className="text-sm sm:text-base text-[#c2d7cd] leading-relaxed">
                  From regal stone palaces and heritage havelis to luxury Swiss tents pitched on the edge of the jungle. Book handpicked stays in Sawai Madhopur with verified tariffs and seamless safari combos.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <button
                  onClick={() => openBookingModal({ notes: 'Interested in Luxury Forest Resort Booking' })}
                  className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-400/30"
                >
                  Inquire Resort Availability
                </button>
                <a
                  href="https://wa.me/919971965629?text=Hello,%20I%20want%20to%20inquire%20about%20resort%20stays%20in%20Ranthambore."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3.5 rounded-xl bg-[#092218] hover:bg-[#113123] text-emerald-400 border border-[#16432f] font-bold text-sm flex items-center gap-2 transition"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Resort Desk</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: RESORT CATEGORIES */}
        <section className="space-y-6">
          <div className="space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Curated Resort Categories in Ranthambore
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898]">Find the ideal balance of comfort, jungle character, and budget for your holiday.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {resortCategories.map(cat => (
              <div
                key={cat.category}
                className="rounded-3xl bg-[#092218] border border-[#16432f] p-6 sm:p-8 flex flex-col justify-between hover:border-emerald-500/40 transition space-y-6"
              >
                <div className="space-y-4">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                    {cat.badge}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-white">{cat.category}</h3>
                    <p className="text-xs font-mono font-bold text-amber-400 mt-1">{cat.priceRange}</p>
                  </div>

                  <div className="pt-2 border-t border-[#16432f] space-y-2 text-xs">
                    <span className="text-[#86a898] font-semibold block uppercase text-[10px]">Featured Partner Properties:</span>
                    <ul className="space-y-1 text-[#c2d7cd]">
                      {cat.resorts.map(resort => (
                        <li key={resort} className="flex items-center gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                          <span>{resort}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-[#16432f] space-y-2 text-xs">
                    <span className="text-[#86a898] font-semibold block uppercase text-[10px]">Included Amenities:</span>
                    <ul className="space-y-1 text-[#86a898]">
                      {cat.features.map(f => (
                        <li key={f} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => openBookingModal({ notes: `Interested in ${cat.category}` })}
                  className="w-full py-2.5 rounded-xl bg-[#06150f] hover:bg-emerald-600 hover:text-white text-[#c2d7cd] border border-[#16432f] text-xs font-bold transition cursor-pointer"
                >
                  Check {cat.badge} Dates
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3: RESORT AMENITIES HIGHLIGHTS */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {amenities.map((item, i) => (
            <div key={i} className="p-5 sm:p-6 rounded-2xl bg-[#092218] border border-[#16432f] hover:border-emerald-500/40 transition space-y-2">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center text-emerald-400 font-bold text-xs">
                0{i + 1}
              </div>
              <h3 className="font-bold text-white text-base">{item.title}</h3>
              <p className="text-xs text-[#86a898] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </section>

        {/* SECTION 4: LOCATION ADVANTAGES */}
        <section className="p-6 sm:p-10 rounded-3xl bg-[#092218] border border-[#16432f] space-y-6">
          <div className="max-w-3xl space-y-1">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
              Why Stay Near Ranthambore Road?
            </h2>
            <p className="text-xs sm:text-sm text-[#86a898] leading-relaxed">
              All our partner resorts are situated within 5 to 15 minutes of the main park gates. This eliminates highway fatigue so you can wake up refreshed for your dawn safari.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-5 rounded-2xl bg-[#06150f] border border-[#16432f] space-y-2">
              <MapPin className="w-5 h-5 text-amber-400" />
              <h3 className="font-bold text-white text-sm">Singhdwar Core Gate (10 Mins)</h3>
              <p className="text-[#86a898]">Shortest transfer times to Zones 1, 2, 3, 4, and 5.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#06150f] border border-[#16432f] space-y-2">
              <Compass className="w-5 h-5 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Rajbagh Naka Gate (8 Mins)</h3>
              <p className="text-[#86a898]">Quick access to the dramatic Kundal cliff trails of Zone 6.</p>
            </div>
            <div className="p-5 rounded-2xl bg-[#06150f] border border-[#16432f] space-y-2">
              <Clock className="w-5 h-5 text-teal-400" />
              <h3 className="font-bold text-white text-sm">Station Transfer (15 Mins)</h3>
              <p className="text-[#86a898]">Effortless railway connectivity to Sawai Madhopur Junction.</p>
            </div>
          </div>
        </section>

        {/* SECTION 5: DINING & HOSPITALITY */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Dining &amp; Wildlife Evenings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs">
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
              <Utensils className="w-6 h-6 text-amber-400" />
              <h3 className="font-bold text-white text-sm">Fresh Organic Produce</h3>
              <p className="text-[#86a898] leading-relaxed">
                Vegetables and herbs sourced directly from resort organic gardens for flavorful farm-to-table dining.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
              <Coffee className="w-6 h-6 text-emerald-400" />
              <h3 className="font-bold text-white text-sm">Pre-Safari Dawn Breakfast</h3>
              <p className="text-[#86a898] leading-relaxed">
                Freshly brewed coffee, hot tea, and cookies served before your Gypsy arrives at the lobby.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
              <Sparkles className="w-6 h-6 text-teal-400" />
              <h3 className="font-bold text-white text-sm">Jungle Bonfire Nights</h3>
              <p className="text-[#86a898] leading-relaxed">
                Unwind by crackling outdoor fire pits with wildlife documentaries, live folk instruments, and fellow travelers.
              </p>
            </div>
          </div>
        </section>

        {/* SECTION 6: FAQS */}
        <section className="space-y-6">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-white">
            Resort Booking FAQs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {faqs.map((faq, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[#092218] border border-[#16432f] space-y-2">
                <h3 className="font-bold text-white text-sm flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{faq.q}</span>
                </h3>
                <p className="text-[#86a898] leading-relaxed pl-6">{faq.a}</p>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 7: HIGH-CONVERSION BOOKING BANNER */}
        <section className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#092218] via-[#0d2e20] to-[#092218] border border-emerald-500/30 text-center space-y-6 shadow-2xl">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-serif text-2xl sm:text-4xl font-bold text-white">
              Book Your Wilderness Resort Stay in Ranthambore
            </h2>
            <p className="text-xs sm:text-sm text-[#c2d7cd] leading-relaxed">
              Enjoy verified room confirmation, discounted tariffs, and combined safari packages with our local team.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openBookingModal({ notes: 'Interested in Resort Booking' })}
              className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-sm shadow-xl transition cursor-pointer border border-emerald-400/30"
            >
              Check Resort Dates &amp; Rates
            </button>
            <a
              href="tel:+919971965629"
              className="px-6 py-3.5 rounded-xl bg-[#06150f] hover:bg-[#092218] border border-[#16432f] text-white font-bold text-sm flex items-center gap-2 transition"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>Call Resort Desk: +91 99719 65629</span>
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}
