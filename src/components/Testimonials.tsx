'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Aditya & Neha Sharma',
      location: 'New Delhi, India',
      tour: 'Classic 2N/3D Wildlife Escape',
      rating: 5,
      date: 'Visited February 2026',
      quote:
        'Booking our Ranthambore safaris through Ranthambore Wild Life Tour was the best decision! We got Zone 3 on the morning safari and saw tigress Riddhi with her cubs near Padam Talao. The driver and naturalist were outstanding.'
    },
    {
      name: 'Marcus & Clara Vance',
      location: 'London, United Kingdom',
      tour: 'Tiger Photography Master Tour',
      rating: 5,
      date: 'Visited January 2026',
      quote:
        'As avid wildlife photographers, we wanted dedicated Gypsy safaris with optimal lighting angles. The team coordinated every permit flawlessly and arranged an exquisite heritage lodge. Exceptional transparency and service.'
    },
    {
      name: 'Rajesh Nair & Family',
      location: 'Bengaluru, India',
      tour: 'Family Holiday Package (3 Safaris)',
      rating: 5,
      date: 'Visited March 2026',
      quote:
        'Travelling with kids can be tricky, but from our railway station pickup to hotel check-in and Canter safari boarding, everything was executed like clockwork. 10/10 recommendation for anyone visiting Ranthambore.'
    }
  ];

  return (
    <section className="py-24 bg-[#121110] relative">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold uppercase tracking-widest border border-[#f59e0b]/20">
            <Star className="w-3.5 h-3.5 fill-[#f59e0b]" />
            Guest Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Stories From The Wilderness
          </h2>
          <p className="text-sm sm:text-base text-[#b8a794]">
            Read genuine feedback from wildlife photographers, families, and solo explorers who experienced Ranthambore with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="glass-card p-7 rounded-2xl border border-[#2e261f] bg-[#181512] flex flex-col justify-between space-y-6 relative hover:border-[#ea580c] transition duration-300 shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex text-[#f59e0b]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#ea580c]/30" />
                </div>

                <p className="text-xs sm:text-sm text-[#cfc0ae] leading-relaxed italic">
                  &ldquo;{rev.quote}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#29221b]">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-white text-sm">{rev.name}</h4>
                    <p className="text-[11px] text-[#8c7f70]">{rev.location}</p>
                  </div>
                  <span className="inline-flex items-center gap-1 text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified Guest
                  </span>
                </div>
                <div className="mt-2 text-[10px] text-[#f59e0b] font-medium">
                  {rev.tour} • {rev.date}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
