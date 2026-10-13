'use client';

import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const }
    }
  };

  return (
    <section className="py-24 bg-[#06150f] relative border-t border-[#123324]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
            <Star className="w-3.5 h-3.5 fill-[#f59e0b] text-[#f59e0b]" />
            Guest Experiences
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Stories From The Wilderness
          </h2>
          <p className="text-sm sm:text-base text-[#bad3c6]">
            Read genuine feedback from wildlife photographers, families, and solo explorers who experienced Ranthambore with our team.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {reviews.map((rev, idx) => (
            <motion.div key={idx} variants={cardVariants} className="h-full flex flex-col">
              <SpotlightCard
                spotlightColor="rgba(52, 211, 153, 0.16)"
                enableTilt={true}
                className="glass-card p-7 rounded-2xl border border-[#16432f] bg-[#092218] flex-1 flex flex-col justify-between space-y-6 relative hover:border-emerald-400 transition duration-300 shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex text-[#f59e0b] gap-1">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current transform group-hover:scale-110 transition duration-200" style={{ transitionDelay: `${i * 50}ms` }} />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-emerald-500/30 group-hover:text-emerald-400 transition duration-300" />
                  </div>

                  <p className="text-xs sm:text-sm text-[#bad3c6] leading-relaxed italic">
                    &ldquo;{rev.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-[#143d2b]">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-white text-sm group-hover:text-emerald-300 transition">{rev.name}</h4>
                      <p className="text-[11px] text-[#7fa391]">{rev.location}</p>
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
              </SpotlightCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
