'use client';

import React, { useState } from 'react';
import { Compass, Clock, MapPin, AlertCircle, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ZoneGuide() {
  const [activeZoneTab, setActiveZoneTab] = useState<'core' | 'buffer'>('core');

  const coreZones = [
    {
      num: 'Zone 1',
      name: 'Singhdwar, Sultanpur & Tutti Deh',
      features: 'Dense dry forest terrain, rocky ridges, scenic streams. Frequent sightings of T-39 (Noor) lineage and leopards.'
    },
    {
      num: 'Zone 2',
      name: 'Jogi Mahal, Phuta Kot & Nal Ghati',
      features: 'Historic water holes, Phuta Bandha, scenic watering points. High tiger and sloth bear activity.'
    },
    {
      num: 'Zone 3',
      name: 'Padam Talao, Rajbagh & Malik Talao',
      features: 'The crown jewel of Ranthambore with vast lakes, ancient hunting palace ruins, and legendary Machhli lineage territory.'
    },
    {
      num: 'Zone 4',
      name: 'Tamkhan, Lakkad Dah & Berda',
      features: 'Scenic rocky water bodies, high tiger density territory, popular for mother and cubs sightings.'
    },
    {
      num: 'Zone 5',
      name: 'Kachida, Jokha & Bakola',
      features: 'Deep forest foliage, banyan trees, perennial water springs. High density of deer, birds, and tigers.'
    },
  ];

  const bufferZones = [
    {
      num: 'Zone 6',
      name: 'Kundal & Kala Pani',
      features: 'Adjoining Zone 1 landscape, expansive open valleys and steep craggy hills. Excellent for bird watching and tigers.'
    },
    {
      num: 'Zone 7',
      name: 'Chidikho & Kushalipura',
      features: 'Mountainous ravines, high plateaus, quiet tranquil trails away from heavy safari traffic.'
    },
    {
      num: 'Zone 8',
      name: 'Balas & Neemli Dang',
      features: 'Scenic rocky cliffs, leopard habitats, ancient trees, and thriving birdlife.'
    },
    {
      num: 'Zone 9',
      name: 'Qual Ji (Chambal River Border)',
      features: 'Bordering the mighty Chambal River, scenic riverine banks, caracals, sloth bears, and transient tigers.'
    },
    {
      num: 'Zone 10',
      name: 'Aantri & Kushalipura Ravines',
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

  return (
    <section className="py-24 bg-[#121110] relative" id="zones">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f59e0b]/10 text-[#f59e0b] text-xs font-bold uppercase tracking-widest border border-[#f59e0b]/20">
            <Compass className="w-3.5 h-3.5" />
            Park Knowledge Base
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Safari Zones &amp; Shift Timings
          </h2>
          <p className="text-sm sm:text-base text-[#b8a794]">
            Ranthambore National Park is organized into 10 safari zones. Understand the difference between Core and Buffer routes and plan around current park schedules.
          </p>
        </div>

        {/* Zone Explorer Tabs */}
        <div className="mb-14">
          <div className="flex justify-center mb-8">
            <div className="bg-[#1b1714] p-1 rounded-xl border border-[#2e261f] inline-flex">
              <button
                onClick={() => setActiveZoneTab('core')}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition ${
                  activeZoneTab === 'core'
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'text-[#a89985] hover:text-white'
                }`}
              >
                Core Safari Gates (Zones 1 – 5)
              </button>
              <button
                onClick={() => setActiveZoneTab('buffer')}
                className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-bold transition ${
                  activeZoneTab === 'buffer'
                    ? 'bg-[#ea580c] text-white shadow-md'
                    : 'text-[#a89985] hover:text-white'
                }`}
              >
                Buffer Safari Gates (Zones 6 – 10)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {(activeZoneTab === 'core' ? coreZones : bufferZones).map((z, idx) => (
              <div
                key={idx}
                className="glass-card p-6 rounded-2xl border border-[#29221b] hover:border-[#f59e0b] transition duration-300 bg-[#171411] space-y-3"
              >
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-[#ea580c]/20 text-[#f59e0b] text-xs font-bold">
                    {z.num}
                  </span>
                  <span className="text-[11px] text-[#8c7f70]">
                    {activeZoneTab === 'core' ? 'Core Park Gate' : 'Scenic Buffer Gate'}
                  </span>
                </div>
                <h4 className="font-serif text-lg font-bold text-white">
                  {z.name}
                </h4>
                <p className="text-xs text-[#b8a794] leading-relaxed">
                  {z.features}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Timings Schedule Table */}
        <div className="glass-card rounded-2xl p-6 sm:p-8 border border-[#2e261f] bg-[#171412]">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="w-6 h-6 text-[#ea580c]" />
            <div>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
                Official Safari Shift Timings (2026-2027)
              </h3>
              <p className="text-xs text-[#b8a794]">
                Safari gates open twice daily. Entry closes strictly according to Forest Department regulations.
              </p>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-[#221c17] text-[#f59e0b] border-b border-[#362e26]">
                <tr>
                  <th className="p-3.5 font-bold">Season / Month</th>
                  <th className="p-3.5 font-bold">Morning Shift</th>
                  <th className="p-3.5 font-bold">Afternoon Shift</th>
                  <th className="p-3.5 font-bold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#261f19] text-[#cfc0ae]">
                {timings.map((t, idx) => (
                  <tr key={idx} className="hover:bg-[#1e1915] transition">
                    <td className="p-3.5 font-semibold text-white">{t.period}</td>
                    <td className="p-3.5 text-[#e0d6c7]">{t.morning}</td>
                    <td className="p-3.5 text-[#e0d6c7]">{t.afternoon}</td>
                    <td className="p-3.5">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        t.period.includes('Monsoon')
                          ? 'bg-amber-500/20 text-amber-400'
                          : 'bg-emerald-500/20 text-emerald-400'
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
          <div className="mt-6 flex items-start gap-2.5 text-xs text-[#9c8e7e] bg-[#14110f] p-4 rounded-xl border border-[#261e18]">
            <AlertCircle className="w-4 h-4 text-[#ea580c] shrink-0 mt-0.5" />
            <span>
              <strong>Zone Allotment Transparency:</strong> Safari zones are assigned randomly by the Forest Department booking software at the time of permit issuance. We submit your preferred zone request with your application, but actual zone allocation remains subject to government lottery rules.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
