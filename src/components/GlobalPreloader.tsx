'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function GlobalPreloader() {
  const [routeLoading, setRouteLoading] = useState(false);
  const pathname = usePathname();

  // Sleek top glowing progress line on route transitions
  useEffect(() => {
    setRouteLoading(true);
    const timer = setTimeout(() => {
      setRouteLoading(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <AnimatePresence>
      {routeLoading && (
        <motion.div
          initial={{ scaleX: 0, opacity: 1 }}
          animate={{ scaleX: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed top-0 left-0 right-0 h-[3.5px] bg-gradient-to-r from-[#ea580c] via-[#f59e0b] to-[#fbbf24] z-[99999] origin-left shadow-[0_0_15px_rgba(245,158,11,1)] pointer-events-none"
        >
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#fbbf24] blur-[3px] shadow-[0_0_12px_#fbbf24]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
