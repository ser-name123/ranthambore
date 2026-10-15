'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { useSiteContent, type PackageSummary } from '@/context/SiteContentContext';
import type { PackageCategory } from '@/lib/cms';

const TAB_ORDER: ('all' | PackageCategory)[] = ['all', 'short', 'standard', 'luxury', 'custom'];

/** Filterable grid of package cards with Details + Enquire actions. */
export default function PackagesGrid({ packages, onSelectPackage, showTabs = true }: {
  packages: PackageSummary[];
  onSelectPackage: (packageName: string) => void;
  showTabs?: boolean;
}) {
  const { ui } = useSiteContent();
  const [activeTab, setActiveTab] = useState<'all' | PackageCategory>('all');
  const tabs = TAB_ORDER.map((id) => ({ id, label: ui.packageTabs[id] })).filter((t) => t.id === 'all' || packages.some((p) => p.category === t.id));
  const filtered = activeTab === 'all' ? packages : packages.filter((p) => p.category === activeTab);

  return (
    <div className="space-y-10">
      {showTabs && tabs.length > 2 && (
        <div className="flex justify-center">
          <div className="flex flex-wrap gap-1.5 bg-[#f0f6f2] p-1.5 rounded-xl border border-[#d2e4d9]">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`relative px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id ? 'text-white shadow-sm' : 'text-[#082318] hover:text-emerald-900 hover:bg-white/70'
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="packageTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filtered.map((pkg) => (
            <motion.div
              key={pkg.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col h-full"
            >
              <SpotlightCard
                spotlightColor="rgba(4, 120, 87, 0.08)"
                enableTilt={true}
                className="rounded-2xl overflow-hidden border border-[#d2e4d9] hover:border-emerald-500 transition duration-300 flex-1 flex flex-col group shadow-md hover:shadow-xl bg-white"
              >
                <Link href={`/packages/${pkg.slug}`} className="relative h-56 w-full overflow-hidden block">
                  <Image src={pkg.image} alt={pkg.name} fill className="object-cover group-hover:scale-108 transition duration-700 ease-out" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  {pkg.badge && (
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md bg-emerald-600 text-white text-[11px] font-bold shadow-md">{pkg.badge}</span>
                    </div>
                  )}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-white/90 backdrop-blur-md text-[#ea580c] text-[11px] font-bold border border-white/60 shadow-xs flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#ea580c]" />
                      {pkg.duration}
                    </span>
                  </div>
                </Link>

                <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                  <div>
                    <Link href={`/packages/${pkg.slug}`}>
                      <h3 className="font-serif text-xl font-bold text-[#082318] group-hover:text-[#047857] transition">{pkg.name}</h3>
                    </Link>
                    <div className="mt-2.5 space-y-1.5 text-xs">
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                        <span className="text-[#082318] font-semibold">{pkg.safariCount}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#d97706]" />
                        <span className="text-[#1b3a2a] font-medium">{pkg.hotelType}</span>
                      </div>
                    </div>
                    {pkg.inclusions.length > 0 && (
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {pkg.inclusions.map((inc, i) => (
                          <span key={i} className="px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 text-[10px] text-[#082318] font-semibold">✓ {inc}</span>
                        ))}
                      </div>
                    )}
                    {pkg.highlights.length > 0 && (
                      <ul className="mt-4 space-y-1.5 text-xs text-[#1b3a2a] font-normal">
                        {pkg.highlights.map((h, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  <div className="pt-4 border-t border-[#e2ede6] flex items-center justify-between gap-2">
                    <div>
                      <span className="text-[11px] text-[#2e5241] block font-semibold">{ui.startingFrom}</span>
                      <div className="flex items-baseline gap-1">
                        <span className="text-xl font-bold text-[#082318]">₹{pkg.pricePerPerson.toLocaleString('en-IN')}</span>
                        <span className="text-[10px] text-[#2e5241] font-medium">{ui.perPerson}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Link
                        href={`/packages/${pkg.slug}`}
                        className="px-3 py-2 rounded-xl bg-white border border-[#c4dcce] hover:bg-emerald-50 text-[#047857] text-xs font-bold transition"
                      >
                        {ui.details}
                      </Link>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => onSelectPackage(pkg.name)}
                        className="px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706] hover:from-emerald-600 text-white text-xs font-bold shadow-md flex items-center gap-1.5 transition cursor-pointer"
                      >
                        <span>{ui.enquire}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
