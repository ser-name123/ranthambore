'use client';

import React from 'react';
import { Compass, Car, Hotel, MapPin, Camera, Landmark, CheckCircle, ArrowRight } from 'lucide-react';

interface ServicesGridProps {
  onSelectService: (serviceName: string) => void;
}

export default function ServicesGrid({ onSelectService }: ServicesGridProps) {
  const services = [
    {
      icon: Compass,
      title: 'Maruti Gypsy Safari Booking',
      desc: 'Exclusive and sharing 4x4 open Gypsy safaris across Zones 1 to 10 with verified entry permits, licensed drivers, and certified nature guides.',
      tag: 'Core Experience',
      action: 'Book Gypsy Safari'
    },
    {
      icon: Car,
      title: 'Canter Safari Booking',
      desc: 'Economical 20-seater open safari bus permits ideal for families, groups, and last-minute travellers with panoramic elevated forest views.',
      tag: 'Best Value',
      action: 'Book Canter Safari'
    },
    {
      icon: Hotel,
      title: 'Resort & Jungle Camp Stays',
      desc: 'Curated bookings at handpicked heritage jungle resorts, eco-cottages, and 5-star wilderness retreats near National Park entry gates.',
      tag: 'Stay Assistance',
      action: 'Find Resort Deals'
    },
    {
      icon: MapPin,
      title: 'Railway Station & Airport Transfers',
      desc: 'Comfortable private AC cabs from Sawai Madhopur Junction, Jaipur International Airport, or Delhi NCR straight to your resort.',
      tag: 'Safe Transfers',
      action: 'Book Transfer'
    },
    {
      icon: Landmark,
      title: 'Ranthambore Fort & Chambal Safari',
      desc: 'Guided cultural excursions to the 10th-century UNESCO World Heritage Ranthambore Fort, Trinetra Ganesha Temple, and Chambal boat safari.',
      tag: 'Sightseeing',
      action: 'Explore Excursions'
    },
    {
      icon: Camera,
      title: 'Bespoke Wildlife Photography Tours',
      desc: 'Specialized arrangements for photographers featuring exclusive Gypsy positioning, expert trackers, beanbag mounts, and optimal lighting routes.',
      tag: 'Photography Special',
      action: 'Plan Photo Tour'
    }
  ];

  return (
    <section className="py-24 bg-[#171412] relative border-t border-[#29221b]" id="services">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/10 text-[#ea580c] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/20">
            <Compass className="w-3.5 h-3.5" />
            Complete Travel Assistance
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Our Wildlife Services
          </h2>
          <p className="text-sm sm:text-base text-[#b8a794]">
            From obtaining official entry permits to coordinating luxury stays and local excursions, we provide seamless end-to-end safari planning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div
                key={idx}
                className="glass-card p-7 rounded-2xl border border-[#2b241e] hover:border-[#ea580c] transition-all duration-300 flex flex-col justify-between group shadow-lg bg-[#1a1714]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-[#ea580c]/15 text-[#ea580c] border border-[#ea580c]/30 flex items-center justify-center group-hover:bg-[#ea580c] group-hover:text-white transition duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#251f19] border border-[#3b3127] text-[#f59e0b]">
                      {svc.tag}
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-white group-hover:text-[#ea580c] transition">
                    {svc.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#b8a794] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[#29221b]">
                  <button
                    onClick={() => onSelectService(svc.title)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#f59e0b] hover:text-[#ea580c] transition cursor-pointer"
                  >
                    <span>{svc.action}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
