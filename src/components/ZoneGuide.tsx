'use client';

import React, { useState } from 'react';
import { Compass, Clock, MapPin, AlertCircle, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';
import { 
  JungleTopCanopy, 
  JungleCornerBranch, 
  TigerTrackWatermark,
  JungleTreelineBackdrop,
  TigerProwlSilhouette,
  JungleSavannahGrass 
} from './JungleFoliageDecorations';

export default function ZoneGuide() {
  const [activeZoneTab, setActiveZoneTab] = useState<'core' | 'buffer'>('core');
  const [selectedZone, setSelectedZone] = useState<string | null>(null);

  const coreZones = [
    {
      num: 'Zone 1',
      name: 'Singhdwar, Sultanpur & Tutti Deh',
      sightingRate: 85,
      tigers: 'T-39 (Noor), T-57, T-101',
      features: 'Dense dry forest terrain, rocky ridges, scenic streams. Frequent sightings of T-39 (Noor) lineage and leopards.'
    },
    {
      num: 'Zone 2',
      name: 'Jogi Mahal, Phuta Kot & Nal Ghati',
      sightingRate: 90,
      tigers: 'T-120 (Ganesh), T-84 (Arrowhead)',
      features: 'Historic water holes, Phuta Bandha, scenic watering points. High tiger and sloth bear activity.'
    },
    {
      num: 'Zone 3',
      name: 'Padam Talao, Rajbagh & Malik Talao',
      sightingRate: 94,
      tigers: 'T-124 (Riddhi) & cubs, T-120',
      features: 'The crown jewel of Ranthambore with vast lakes, ancient hunting palace ruins, and legendary Machhli lineage territory.'
    },
    {
      num: 'Zone 4',
      name: 'Tamkhan, Lakkad Dah & Berda',
      sightingRate: 88,
      tigers: 'T-125 (Siddhi), cubs',
      features: 'Scenic rocky water bodies, high tiger density territory, popular for mother and cubs sightings.'
    },
    {
      num: 'Zone 5',
      name: 'Kachida, Jokha & Bakola',
      sightingRate: 84,
      tigers: 'T-102 & sub-adults',
      features: 'Deep forest foliage, banyan trees, perennial water springs. High density of deer, birds, and tigers.'
    },
  ];

  const bufferZones = [
    {
      num: 'Zone 6',
      name: 'Kundal & Kala Pani',
      sightingRate: 78,
      tigers: 'T-58, T-57 territory',
      features: 'Adjoining Zone 1 landscape, expansive open valleys and steep craggy hills. Excellent for bird watching and tigers.'
    },
    {
      num: 'Zone 7',
      name: 'Chidikho & Kushalipura',
      sightingRate: 72,
      tigers: 'T-34, T-61',
      features: 'Mountainous ravines, high plateaus, quiet tranquil trails away from heavy safari traffic.'
    },
    {
      num: 'Zone 8',
      name: 'Balas & Neemli Dang',
      sightingRate: 70,
      tigers: 'Resident leopards & sloth bears',
      features: 'Scenic rocky cliffs, leopard habitats, ancient trees, and thriving birdlife.'
    },
    {
      num: 'Zone 9',
      name: 'Qual Ji (Chambal River Border)',
      sightingRate: 75,
      tigers: 'T-59 & transient males',
      features: 'Bordering the mighty Chambal River, scenic riverine banks, caracals, sloth bears, and transient tigers.'
    },
    {
      num: 'Zone 10',
      name: 'Aantri & Kushalipura Ravines',
      sightingRate: 74,
      tigers: 'T-99, T-108',
      features: 'Lush greenery, scenic waterholes, tranquil birding, and increasing big cat territory.'
    },
  ];

  const timings = [
    { period: '1st Oct to 31st Oct', morning: '06:30 AM – 10:00 AM', afternoon: '02:30 PM – 06:00 PM' },
    { period: '1st Nov to 31st Jan (Winter)', morning: '07:00 AM – 10:30 AM', afternoon: '02:00 PM – 05:30 PM' },
    { period: '1st Feb to 31st Mar', morning: '06:30 AM – 10:00 AM', afternoon: '02:30 PM – 06:00 PM' },
    { period: '1st Apr to 15th May (Summer)', morning: '06:00 AM – 09:30 AM', afternoon: '03:00 PM – 06:30 PM' },
    { period: '16th May to 30th Jun', morning: '06:00 AM – 09:30 AM', afternoon: '03:30 PM – 07:00 PM' },
    { period: '1st Jul to 30th Sep (Monsoon)', morning: 'Core Zones Closed', afternoon: 'Select Buffer Gates Active' }
  ];

  const displayedZones = activeZoneTab === 'core' ? coreZones : bufferZones;

  return (
    <section className="py-24 bg-white relative overflow-hidden" id="zones">
      {/* Botanical Jungle Foliage & Tree Branch Accents */}
      <JungleTopCanopy className="opacity-80" />
      <JungleTreelineBackdrop />
      <JungleCornerBranch position="left" className="top-16" />
      <JungleCornerBranch position="right" className="top-24" />
      <TigerProwlSilhouette className="bottom-12 left-10 hidden lg:block" />
      <TigerTrackWatermark count={6} className="top-1/2" />
      <JungleSavannahGrass className="bottom-0" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-[#064e3b] text-xs font-bold uppercase tracking-widest border border-emerald-200 shadow-xs">
            <Compass className="w-3.5 h-3.5 text-[#047857]" />
            Park Knowledge Base
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#082318]">
            Safari Zones &amp; Shift Timings
          </h2>
          <p className="text-sm sm:text-base text-[#1b3a2a]">
            Ranthambore National Park is organized into 10 safari zones. Explore Core &amp; Buffer gates and plan around official forest department schedules.
          </p>
        </motion.div>

        {/* Zone Explorer Tabs with Animated Pill */}
        <div className="mb-14">
          <div className="flex justify-center mb-8">
            <div className="bg-[#f0f6f2] p-1.5 rounded-2xl border-2 border-[#c4dcce] inline-flex items-center gap-1.5 shadow-inner">
              <button
                type="button"
                onClick={() => {
                  setActiveZoneTab('core');
                  setSelectedZone(null);
                }}
                className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeZoneTab === 'core'
                    ? 'text-white shadow-md shadow-emerald-950/20'
                    : 'text-[#082318] hover:text-emerald-900 hover:bg-white/70'
                }`}
              >
                {activeZoneTab === 'core' && (
                  <motion.div
                    layoutId="zoneTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Compass className={`w-4 h-4 ${activeZoneTab === 'core' ? 'text-amber-300' : 'text-emerald-700'}`} />
                  <span>Core Safari Gates (Zones 1 – 5)</span>
                </span>
              </button>

              <button
                type="button"
                onClick={() => {
                  setActiveZoneTab('buffer');
                  setSelectedZone(null);
                }}
                className={`relative px-5 sm:px-6 py-2.5 sm:py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  activeZoneTab === 'buffer'
                    ? 'text-white shadow-md shadow-emerald-950/20'
                    : 'text-[#082318] hover:text-emerald-900 hover:bg-white/70'
                }`}
              >
                {activeZoneTab === 'buffer' && (
                  <motion.div
                    layoutId="zoneTabPill"
                    className="absolute inset-0 bg-gradient-to-r from-emerald-800 via-emerald-700 to-emerald-900 rounded-xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <MapPin className={`w-4 h-4 ${activeZoneTab === 'buffer' ? 'text-amber-300' : 'text-[#d97706]'}`} />
                  <span>Buffer Safari Gates (Zones 6 – 10)</span>
                </span>
              </button>
            </div>
          </div>

          {/* Animated Zone Cards */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {displayedZones.map((z) => (
                <motion.div
                  key={z.num}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <SpotlightCard
                    spotlightColor="rgba(4, 120, 87, 0.08)"
                    enableTilt={true}
                    className="p-6 rounded-2xl border border-[#d2e4d9] hover:border-emerald-500 transition duration-300 bg-white space-y-4 flex-1 flex flex-col justify-between group shadow-md hover:shadow-xl"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-100/80 text-emerald-900 text-xs font-bold border border-emerald-300">
                          {z.num}
                        </span>
                        <span className="text-[11px] text-[#1b3a2a] font-semibold">
                          {activeZoneTab === 'core' ? 'Core Park Gate' : 'Scenic Buffer Gate'}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-[#082318] group-hover:text-emerald-800 transition">
                        {z.name}
                      </h4>

                      <p className="text-xs text-[#183d2a] leading-relaxed font-normal">
                        {z.features}
                      </p>
                    </div>

                    {/* Sighting Probability Animated Progress Bar */}
                    <div className="pt-3 border-t border-[#e2ede6] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#082318] flex items-center gap-1 font-bold">
                          <Flame className="w-3.5 h-3.5 text-[#ea580c]" />
                          Historical Sighting Rate:
                        </span>
                        <span className="font-extrabold text-[#ea580c]">{z.sightingRate}%</span>
                      </div>

                      {/* Animated Progress Track */}
                      <div className="w-full h-2 bg-[#f0f6f2] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${z.sightingRate}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-emerald-600 to-[#ea580c] rounded-full"
                        />
                      </div>

                      <div className="text-[11px] text-[#183d2a] font-medium truncate pt-0.5">
                        <span className="text-[#082318] font-bold">Tigers:</span> {z.tigers}
                      </div>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Timings Schedule Table with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl p-6 sm:p-8 border border-[#d2e4d9] bg-[#f4f8f5] shadow-md"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-[#047857] flex items-center justify-center border border-emerald-200">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#082318]">
                Official Safari Shift Timings (2026-2027)
              </h3>
              <p className="text-xs text-[#375847]">
                Safari gates open twice daily. Entry closes strictly according to Forest Department regulations.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-white text-[#082318] border-b border-[#d2e4d9]">
                <tr>
                  <th className="p-3.5 font-bold">Season / Month</th>
                  <th className="p-3.5 font-bold">Morning Shift</th>
                  <th className="p-3.5 font-bold">Afternoon Shift</th>
                  <th className="p-3.5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ede6] text-[#284938]">
                {timings.map((t, idx) => (
                  <tr key={idx} className="hover:bg-white transition">
                    <td className="p-3.5 font-semibold text-[#082318]">{t.period}</td>
                    <td className="p-3.5 text-[#183d2a]">{t.morning}</td>
                    <td className="p-3.5 text-[#183d2a]">{t.afternoon}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        t.period.includes('Monsoon')
                          ? 'bg-amber-100 text-amber-900 border border-amber-300'
                          : 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                      }`}>
                        {t.period.includes('Monsoon') ? 'Buffer Only' : 'All Gates Open'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Allocation Disclaimer */}
          <div className="mt-6 flex items-start gap-2.5 text-xs text-[#375847] bg-white p-4 rounded-xl border border-[#d2e4d9] shadow-xs">
            <AlertCircle className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
            <span>
              <strong className="text-[#082318]">Zone Allotment Transparency:</strong> Safari zones are assigned randomly by the Forest Department booking software at the time of permit issuance. We submit your preferred zone request with your application.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
