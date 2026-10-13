'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import FireflyCanvas from './FireflyCanvas';

export default function GlobalPreloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Tracking Royal Bengal Tigers in Zones 1–10...');
  const [routeLoading, setRouteLoading] = useState(false);
  const pathname = usePathname();

  // Initial cinematic preloader (runs on every reload/visit for a crisp 1.3s)
  useEffect(() => {
    // Start fast and smooth
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setLoading(false);
          }, 350);
          return 100;
        }

        const increment = Math.floor(Math.random() * 14) + 8;
        const next = Math.min(100, prev + increment);

        if (next > 25 && next <= 60) {
          setStatusMessage('Synchronizing Live Forest Gate Quotas...');
        } else if (next > 60 && next <= 90) {
          setStatusMessage('Preparing 4x4 Gypsy & Canter Fleet...');
        } else if (next > 90) {
          setStatusMessage('Welcome to Ranthambore Wilderness');
        }

        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  // Sleek top progress line on route transitions
  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, [pathname]);

  // SVG circle circumference for r=46: 2 * Math.PI * 46 = 289
  const radius = 46;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <>
      {/* 1. Page Route Transition Glowing Top Bar */}
      <AnimatePresence>
        {routeLoading && !loading && (
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#fbbf24] z-[99999] origin-left shadow-[0_0_15px_rgba(245,158,11,1)] pointer-events-none"
          >
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#fbbf24] blur-[3px] shadow-[0_0_12px_#fbbf24]" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. Full-Screen Cinematic Luxury Tiger Safari Preloader */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader-overlay"
            initial={{ opacity: 1 }}
            exit={{
              opacity: 0,
              scale: 1.05,
              filter: 'blur(8px)',
              transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
            }}
            onClick={() => setLoading(false)}
            className="fixed inset-0 z-[100000] bg-[#090705] flex flex-col items-center justify-center overflow-hidden px-4 select-none cursor-pointer"
          >
            {/* Ambient Background Glowing Radial Halos */}
            <div className="absolute w-[650px] h-[650px] rounded-full bg-[#ea580c]/12 blur-[150px] pointer-events-none" />
            <div className="absolute w-[450px] h-[450px] rounded-full bg-[#f59e0b]/10 blur-[110px] pointer-events-none" />

            {/* Firefly Ambient Floating Embers in Night Forest */}
            <div className="absolute inset-0 pointer-events-none opacity-70">
              <FireflyCanvas />
            </div>

            {/* Central Luxury Container */}
            <div className="relative z-10 flex flex-col items-center text-center max-w-lg w-full">
              {/* Circular Gauge with Golden Bengal Tiger Emblem */}
              <div className="relative w-36 h-36 sm:w-40 sm:h-40 mb-8 flex items-center justify-center">
                {/* Outermost Rotating Astrolabe / Compass Degree Marks */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
                  className="absolute inset-0 rounded-full border border-dashed border-[#ea580c]/30"
                />

                {/* Counter-rotating Cardinal Navigation Points */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
                  className="absolute -inset-2.5 rounded-full border border-amber-500/20"
                >
                  <span className="absolute -top-1.5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#f59e0b] tracking-wider">N</span>
                  <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 text-[9px] font-bold text-[#ea580c] tracking-wider">S</span>
                  <span className="absolute top-1/2 -left-1.5 -translate-y-1/2 text-[9px] font-bold text-[#f59e0b] tracking-wider">W</span>
                  <span className="absolute top-1/2 -right-1.5 -translate-y-1/2 text-[9px] font-bold text-[#ea580c] tracking-wider">E</span>
                </motion.div>

                {/* Circular Precision Progress SVG Ring */}
                <svg className="w-32 h-32 sm:w-36 sm:h-36 -rotate-90 transform">
                  {/* Track Background Ring */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="rgba(42, 33, 24, 0.6)"
                    strokeWidth="3.5"
                    fill="transparent"
                  />
                  {/* Glowing Amber Gradient Progress Arc */}
                  <circle
                    cx="50%"
                    cy="50%"
                    r={radius}
                    stroke="url(#tigerGoldGrad)"
                    strokeWidth="4"
                    fill="transparent"
                    strokeDasharray={circumference}
                    strokeDashoffset={strokeDashoffset}
                    strokeLinecap="round"
                    className="transition-all duration-150 ease-out"
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(245, 158, 11, 0.8))',
                    }}
                  />
                  <defs>
                    <linearGradient id="tigerGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ea580c" />
                      <stop offset="50%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Central Glowing Tiger Emblem Avatar */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-20 h-20 sm:w-22 sm:h-22 rounded-2xl overflow-hidden shadow-2xl border border-[#ea580c]/50 p-1 bg-[#14100c] flex items-center justify-center group"
                  >
                    <Image
                      src="/logo.jpg"
                      alt="Ranthambore Tiger"
                      fill
                      className="object-cover rounded-xl"
                      priority
                    />
                    {/* Glowing golden border pulse */}
                    <div className="absolute inset-0 rounded-xl border border-[#f59e0b]/40 pointer-events-none" />
                  </motion.div>
                </div>
              </div>

              {/* Majestic Luxury Typography */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-1.5 mb-6"
              >
                <h1 className="font-serif text-3xl sm:text-4xl font-extrabold tracking-[0.18em] text-transparent bg-clip-text bg-gradient-to-r from-[#fbbf24] via-[#f59e0b] to-[#ea580c] uppercase drop-shadow-[0_2px_15px_rgba(245,158,11,0.45)]">
                  RANTHAMBORE
                </h1>
                <div className="flex items-center justify-center gap-3 text-xs tracking-[0.32em] text-[#cfc0ae] uppercase font-semibold">
                  <span className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#ea580c]" />
                  <span className="text-[#f59e0b]">Wild Life Tour</span>
                  <span className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#ea580c]" />
                </div>
              </motion.div>

              {/* Progress Percentage & Status Dispatcher */}
              <div className="w-72 space-y-3">
                {/* Digital Precision Number */}
                <div className="flex items-center justify-between px-1">
                  <span className="font-mono text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-[#fbbf24]">
                    {progress}%
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-[11px] text-[#a89985] font-medium uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                    <span>Gate Dispatch</span>
                  </span>
                </div>

                {/* Sleek Horizontal Fill Track */}
                <div className="h-1.5 w-full bg-[#201a14] rounded-full overflow-hidden p-[1px] border border-[#3b3025]">
                  <motion.div
                    className="h-full bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#fbbf24] rounded-full shadow-[0_0_12px_rgba(245,158,11,0.9)]"
                    style={{ width: `${progress}%` }}
                    transition={{ ease: 'easeOut' }}
                  />
                </div>

                {/* Live Wildlife Dispatch Status */}
                <motion.p
                  key={statusMessage}
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.25 }}
                  className="text-xs text-[#8c7f70] text-center italic font-medium h-5 pt-0.5 truncate"
                >
                  {statusMessage}
                </motion.p>
              </div>
            </div>

            {/* Bottom Subtle Guidance */}
            <div className="absolute bottom-6 flex flex-col items-center gap-1 text-[11px] text-[#6d6255]">
              <span className="tracking-wide">Sawai Madhopur • Rajasthan Forest Department Approved</span>
              <span className="text-[10px] text-[#554a3d]">(Click anywhere to enter immediately)</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
