'use client';

import React from 'react';
import { Compass } from 'lucide-react';
import { motion } from 'framer-motion';
import PackagesGrid from './PackagesGrid';
import { Highlight } from './cms/Text';
import { JungleTopCanopy, JungleCornerBranch, BambooStalks, TigerTrackWatermark, JungleGodRays, JungleSavannahGrass } from './JungleFoliageDecorations';
import { usePackages, useSiteContent } from '@/context/SiteContentContext';
import { waHref } from '@/lib/site-content';

interface FeaturedPackagesProps {
  onSelectPackage: (packageName: string) => void;
}

export default function FeaturedPackages({ onSelectPackage }: FeaturedPackagesProps) {
  const { contact, home, ui } = useSiteContent();
  const banner = ui.packagesBanner;
  const packages = usePackages();
  const heading = home.packages;

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="packages">
      {/* Botanical Jungle Foliage & Sunbeams */}
      <JungleGodRays />
      <JungleTopCanopy className="opacity-80" />
      <JungleCornerBranch position="right" className="top-12" />
      <BambooStalks className="top-24 left-2" />
      <TigerTrackWatermark count={5} className="top-1/2" />
      <JungleSavannahGrass className="bottom-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 space-y-3"
        >
          {heading.badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-xs">
              <Compass className="w-3.5 h-3.5 text-[#047857]" />
              {heading.badge}
            </div>
          )}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
            <Highlight text={heading.title} />
          </h2>
          {heading.subtitle && <p className="text-sm sm:text-base text-[#375847]">{heading.subtitle}</p>}
        </motion.div>

        <PackagesGrid packages={packages.filter((p) => p.featured)} onSelectPackage={onSelectPackage} />

        {/* Customization Banner with Smooth Motion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 p-6 sm:p-8 rounded-2xl bg-[#f4f8f5] border border-[#d2e4d9] flex flex-col md:flex-row items-center justify-between gap-6 shadow-md relative overflow-hidden"
        >
          <div className="space-y-2 text-center md:text-left relative z-10">
            <h4 className="font-serif text-2xl font-bold text-[#082318]">
              {banner.title}
            </h4>
            <p className="text-xs sm:text-sm text-[#375847]">
              {banner.text}
            </p>
          </div>

          <div className="flex flex-wrap gap-3 relative z-10 shrink-0">
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => onSelectPackage('Customized Group / Family Tour')}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-[#d97706] hover:from-emerald-600 text-white text-xs font-bold shadow-md transition cursor-pointer"
            >
              {banner.button}
            </motion.button>
            <motion.a
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              href={waHref(contact.whatsapp, banner.whatsappText)}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3 rounded-xl bg-white hover:bg-emerald-50 text-[#047857] border border-[#c4dcce] text-xs font-bold transition flex items-center gap-1.5 shadow-xs"
            >
              {banner.whatsappButton}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
