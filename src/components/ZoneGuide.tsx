'use client';

import React, { useState } from 'react';
import { Compass, Clock, MapPin, AlertCircle, Sparkles, CheckCircle2, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

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
    <section className="py-24 bg-[#06150f] relative" id="zones">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 text-emerald-300 text-xs font-bold uppercase tracking-widest border border-emerald-500/30">
            <Compass className="w-3.5 h-3.5 text-emerald-400" />
            Park Knowledge Base
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Safari Zones &amp; Shift Timings
          </h2>
          <p className="text-sm sm:text-base text-[#bad3c6]">
            Ranthambore National Park is organized into 10 safari zones. Explore Core &amp; Buffer gates and plan around official forest department schedules.
          </p>
        </motion.div>

        {/* Zone Explorer Tabs with Animated Pill */}
        <div className="mb-14">
          <div className="flex justify-center mb-8">
            <div className="bg-[#061710] p-1.5 rounded-xl border border-[#16432f] inline-flex">
              <button
                onClick={() => {
                  setActiveZoneTab('core');
                  setSelectedZone(null);
                }}
                className={`relative px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition duration-200 cursor-pointer ${
                  activeZoneTab === 'core' ? 'text-white' : 'text-[#8cb39e] hover:text-white'
                }`}
              >
                {activeZoneTab === 'core' && (
                  <motion.div
                    layoutId="zoneTabPill"
                    className="absolute inset-0 bg-emerald-600 rounded-lg shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                Core Safari Gates (Zones 1 – 5)
              </button>
              <button
                onClick={() => {
                  setActiveZoneTab('buffer');
                  setSelectedZone(null);
                }}
                className={`relative px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition duration-200 cursor-pointer ${
                  activeZoneTab === 'buffer' ? 'text-white' : 'text-[#8cb39e] hover:text-white'
                }`}
              >
                {activeZoneTab === 'buffer' && (
                  <motion.div
                    layoutId="zoneTabPill"
                    className="absolute inset-0 bg-emerald-600 rounded-lg shadow-md -z-10"
                    transition={{ type: 'spring', stiffness: 450, damping: 30 }}
                  />
                )}
                Buffer Safari Gates (Zones 6 – 10)
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
                    spotlightColor="rgba(52, 211, 153, 0.16)"
                    enableTilt={true}
                    className="glass-card p-6 rounded-2xl border border-[#16432f] hover:border-emerald-400 transition duration-300 bg-[#092218] space-y-4 flex-1 flex flex-col justify-between group shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="px-2.5 py-1 rounded-md bg-emerald-500/20 text-emerald-300 text-xs font-bold border border-emerald-500/30">
                          {z.num}
                        </span>
                        <span className="text-[11px] text-[#7fa391]">
                          {activeZoneTab === 'core' ? 'Core Park Gate' : 'Scenic Buffer Gate'}
                        </span>
                      </div>

                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-emerald-300 transition">
                        {z.name}
                      </h4>

                      <p className="text-xs text-[#bad3c6] leading-relaxed">
                        {z.features}
                      </p>
                    </div>

                    {/* Sighting Probability Animated Progress Bar */}
                    <div className="pt-3 border-t border-[#143d2b] space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-[#7fa391] flex items-center gap-1 font-medium">
                          <Flame className="w-3.5 h-3.5 text-[#f59e0b]" />
                          Historical Sighting Rate:
                        </span>
                        <span className="font-bold text-[#f59e0b]">{z.sightingRate}%</span>
                      </div>

                      {/* Animated Progress Track */}
                      <div className="w-full h-2 bg-[#061710] rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${z.sightingRate}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.2, ease: 'easeOut', delay: 0.1 }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-[#f59e0b] rounded-full"
                        />
                      </div>

                      <div className="text-[10px] text-[#7fa391] truncate pt-0.5">
                        <span className="text-[#bad3c6] font-semibold">Tigers:</span> {z.tigers}
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
          className="glass-card rounded-2xl p-6 sm:p-8 border border-[#16432f] bg-[#092218] shadow-xl"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Official Safari Shift Timings (2026-2027)
              </h3>
              <p className="text-xs text-[#93b5a4]">
                Safari gates open twice daily. Entry closes strictly according to Forest Department regulations.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#061710] text-emerald-300 border-b border-[#143d2b]">
                <tr>
                  <th className="p-3.5 font-bold">Season / Month</th>
                  <th className="p-3.5 font-bold">Morning Shift</th>
                  <th className="p-3.5 font-bold">Afternoon Shift</th>
                  <th className="p-3.5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#143d2b] text-[#bad3c6]">
                {timings.map((t, idx) => (
                  <tr key={idx} className="hover:bg-[#0c281d] transition">
                    <td className="p-3.5 font-semibold text-white">{t.period}</td>
                    <td className="p-3.5 text-[#d4e6dc]">{t.morning}</td>
                    <td className="p-3.5 text-[#d4e6dc]">{t.afternoon}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        t.period.includes('Monsoon')
                          ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                          : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
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
          <div className="mt-6 flex items-start gap-2.5 text-xs text-[#8cb39e] bg-[#061710] p-4 rounded-xl border border-[#16432f]">
            <AlertCircle className="w-4 h-4 text-[#f59e0b] shrink-0 mt-0.5" />
            <span>
              <strong>Zone Allotment Transparency:</strong> Safari zones are assigned randomly by the Forest Department booking software at the time of permit issuance. We submit your preferred zone request with your application.
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
