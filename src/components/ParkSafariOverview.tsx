'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Compass, 
  Sparkles, 
  Clock, 
  MapPin, 
  ShieldCheck, 
  TreePine, 
  Calendar, 
  ChevronRight, 
  Flame, 
  CheckCircle2, 
  ArrowRight,
  PawPrint
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SpotlightCard from './SpotlightCard';

interface ParkSafariOverviewProps {
  onOpenBookingModal?: (opts?: { vehicle?: string; zone?: string; packageName?: string }) => void;
}

export default function ParkSafariOverview({ onOpenBookingModal }: ParkSafariOverviewProps) {
  const [activeTimeline, setActiveTimeline] = useState(1);
  const [wildlifeCategory, setWildlifeCategory] = useState<'all' | 'predators' | 'herbivores' | 'mammals' | 'reptiles'>('all');

  const timelineMilestones = [
    {
      year: '1955',
      title: 'Sawai Madhopur Gaming Sanctuary',
      badge: 'Genesis',
      desc: 'The reserve was originally designated by the Indian government as the Sawai Madhopur Gaming Sanctuary to safeguard the royal hunting grounds of the Maharajas of Jaipur.',
      icon: ShieldCheck,
    },
    {
      year: '1973',
      title: 'Project Tiger Reserve Induction',
      badge: 'Historic Landmark',
      desc: 'Recognizing its crucial Bengal tiger population, Ranthambore was brought under the prestigious national Project Tiger initiative to establish dedicated tiger conservation reserves.',
      icon: Flame,
    },
    {
      year: '1980',
      title: 'Declared a National Park',
      badge: 'Full Protection',
      desc: 'The central core forest spanning 282.03 sq km was officially declared a National Park, instituting strict non-commercial wilderness laws and scientific forestry management.',
      icon: TreePine,
    },
    {
      year: '1984',
      title: 'Mansingh & Keladevi Sanctuaries',
      badge: 'Buffer Expansion',
      desc: 'To create vital migration corridors, the neighbouring deciduous woodlands of Sawai Mansingh Sanctuary and Keladevi Sanctuary were legally notified.',
      icon: MapPin,
    },
    {
      year: '1991',
      title: 'Greater Ranthambore Tiger Reserve',
      badge: 'Complete Amalgamation',
      desc: 'Sawai Mansingh Sanctuary in the south and Keladevi Sanctuary in the north were formally amalgamated into the Greater Ranthambore Tiger Reserve, encompassing over 1,300 sq km of protected wild habitat.',
      icon: Compass,
    },
  ];

  const wildlifeItems = [
    {
      name: 'Royal Bengal Tiger',
      sci: 'Panthera tigris tigris',
      cat: 'predators',
      tag: 'Apex Carnivore',
      desc: 'The legendary apex carnivore roaming freely across lakes, ruins, and ravines. Globally famous for day sightings.',
      accent: 'border-[#ea580c]/50 text-[#ea580c] bg-[#ea580c]/10',
    },
    {
      name: 'Indian Leopard',
      sci: 'Panthera pardus fusca',
      cat: 'predators',
      tag: 'Big Cat',
      desc: 'Stealthy arboreal predator often spotted on high rocky cliffs, crags, and buffer zone trails.',
      accent: 'border-[#f59e0b]/50 text-[#f59e0b] bg-[#f59e0b]/10',
    },
    {
      name: 'Caracal & Desert Cat',
      sci: 'Caracal caracal',
      cat: 'predators',
      tag: 'Rare Feline',
      desc: 'Elusive tufted-ear nocturnal hunter inhabiting dry scrublands and riverine ravines near Chambal.',
      accent: 'border-[#f59e0b]/50 text-[#f59e0b] bg-[#f59e0b]/10',
    },
    {
      name: 'Striped Hyena & Bengal Fox',
      sci: 'Hyaena hyaena',
      cat: 'predators',
      tag: 'Scavengers & Canids',
      desc: 'Striped hyenas, Indian wolves, Dhole (wild dogs), Rommel, and golden jackals active across open valleys.',
      accent: 'border-[#ea580c]/50 text-[#ea580c] bg-[#ea580c]/10',
    },
    {
      name: 'Wild Water Ox & Indian Gaur',
      sci: 'Bos gaurus',
      cat: 'herbivores',
      tag: 'Massive Bovines',
      desc: 'The world’s largest bovine species, with impressive curved horns grazing near forest watering holes.',
      accent: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
    },
    {
      name: 'Sambar & Spotted Deer (Chital)',
      sci: 'Rusa unicolor',
      cat: 'herbivores',
      tag: 'Deer Species',
      desc: 'Large herds of Sambar, Indian hog deer, and spotted deer serving as the primary prey base for tigers.',
      accent: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
    },
    {
      name: 'Nilgai, Chinkara & Black Buck',
      sci: 'Antilope cervicapra',
      cat: 'herbivores',
      tag: 'Antelopes',
      desc: 'Graceful antelopes including the four-horned antelope (Chousingha), Indian gazelle, and massive Nilgai (Blue bull).',
      accent: 'border-emerald-500/50 text-emerald-400 bg-emerald-500/10',
    },
    {
      name: 'Sloth Bear & Indian Pangolin',
      sci: 'Melursus ursinus',
      cat: 'mammals',
      tag: 'Specialized Mammals',
      desc: 'Shaggy termite-hunting sloth bears frequently active in morning zones, along with scaly Indian pangolins.',
      accent: 'border-sky-500/50 text-sky-400 bg-sky-500/10',
    },
    {
      name: 'Langurs & Bats',
      sci: 'Semnopithecus entellus',
      cat: 'mammals',
      tag: 'Canopy Wildlife',
      desc: 'Southern plains grey langurs, rhesus macaques, Indian fruit bats, and greater false vampire bats in ancient trees.',
      accent: 'border-sky-500/50 text-sky-400 bg-sky-500/10',
    },
    {
      name: 'Mugger Crocodile & Ancient Banyans',
      sci: 'Crocodylus palustris',
      cat: 'reptiles',
      tag: 'Reptiles & Flora',
      desc: 'Basking marsh crocodiles in Padam Talao and Rajbagh lakes, shadowed by India’s largest second-generation banyan trees.',
      accent: 'border-amber-500/50 text-amber-400 bg-amber-500/10',
    },
  ];

  const filteredWildlife = wildlifeCategory === 'all'
    ? wildlifeItems
    : wildlifeItems.filter(item => item.cat === wildlifeCategory);

  return (
    <section className="py-24 bg-[#14120f] relative overflow-hidden border-t border-[#29221b]" id="safari-overview">
      {/* Decorative ambient gradients */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#ea580c]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#f59e0b]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#ea580c]/15 text-[#fba156] text-xs font-bold uppercase tracking-widest border border-[#ea580c]/30 shadow-sm">
            <Compass className="w-3.5 h-3.5 text-[#ea580c]" />
            Natural History &amp; Wilderness
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
            Safari in Ranthambore{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] via-[#ea580c] to-[#fb923c]">
              National Park
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed">
            The best site to see the majestic, gorgeous Bengal Tiger roaming freely in its native habitat is in the <strong>Ranthambore Wild Life Tour</strong>. Discover the royal history, deciduous biodiversity, and crowd-managed safari system across 10 pristine zones.
          </p>
        </motion.div>

        {/* 3 Pillar Summary Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <SpotlightCard
            spotlightColor="rgba(234, 88, 12, 0.18)"
            enableTilt={true}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-[#2b241e] bg-[#1a1714] space-y-3.5 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#ea580c]/15 text-[#ea580c] border border-[#ea580c]/30 flex items-center justify-center font-bold">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Regulated Forest Governance</h3>
            <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed">
              The Ranthambore Tiger Reserve&apos;s forest administration maintains all official procedures, allocating vehicles and strictly controlling crowds to safeguard natural habitats.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(245, 158, 11, 0.18)"
            enableTilt={true}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-[#2b241e] bg-[#1a1714] space-y-3.5 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#f59e0b]/15 text-[#f59e0b] border border-[#f59e0b]/30 flex items-center justify-center font-bold">
              <Compass className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">10 Managed Safari Zones</h3>
            <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed">
              The entire national park is separated into ten distinct safari zones, and tiger safaris are organised in each of them to ensure equitable coverage and smooth wildlife management.
            </p>
          </SpotlightCard>

          <SpotlightCard
            spotlightColor="rgba(234, 88, 12, 0.18)"
            enableTilt={true}
            className="glass-card p-6 sm:p-7 rounded-2xl border border-[#2b241e] bg-[#1a1714] space-y-3.5 shadow-lg"
          >
            <div className="w-11 h-11 rounded-xl bg-[#ea580c]/15 text-[#ea580c] border border-[#ea580c]/30 flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <h3 className="font-serif text-xl font-bold text-white">Jeep &amp; Canter Dual System</h3>
            <p className="text-xs sm:text-sm text-[#a89985] leading-relaxed">
              Two kinds of jungle safaris are available: Maruti Jeep and Canter Bus. Advance seat reservations are required by entering basic details to lock your entry permit.
            </p>
          </SpotlightCard>
        </div>

        {/* Online Safari Reservation Advisory & Action Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#1f1914] via-[#261f18] to-[#1a1511] border border-[#ea580c]/30 shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 max-w-3xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#f59e0b]">Official Online Safari Portal</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-white">
              Online Safari Reservations for Every Traveler
            </h3>
            <p className="text-xs sm:text-sm text-[#c4b5a3] leading-relaxed">
              You must reserve your seat in advance for both types of safari (Jeep &amp; Canter). By entering basic information on the website, you can make an online safari reservation. The Ranthambore Tiger Reserve&apos;s forest administration maintains all the procedures, including allocating vehicles and controlling crowds across the 10 zones.
            </p>
          </div>

          <div className="shrink-0 w-full md:w-auto">
            <button
              type="button"
              onClick={() => onOpenBookingModal && onOpenBookingModal()}
              className="w-full md:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#ea580c] to-[#f59e0b] hover:from-[#f97316] hover:to-[#ea580c] text-white font-bold text-sm shadow-xl shadow-[#ea580c]/30 flex items-center justify-center gap-2 transition duration-200 cursor-pointer"
            >
              <span>Book Online Safari Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>

        {/* ============================================================== */}
        {/* PART 1: RANTHAMBORE NATIONAL PARK BRIEF JOURNEY (TIMELINE) */}
        {/* ============================================================== */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f59e0b]">
              Conservation Chronicle
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
              Ranthambore National Park: Brief Journey
            </h3>
            <p className="text-xs sm:text-sm text-[#b8a794]">
              From a royal game preserve to India’s most celebrated Project Tiger sanctuary.
            </p>
          </div>

          {/* Interactive Stepper / Timeline Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-8">
            {timelineMilestones.map((milestone, idx) => {
              const isActive = activeTimeline === idx;
              return (
                <button
                  key={milestone.year}
                  type="button"
                  onClick={() => setActiveTimeline(idx)}
                  className={`p-3.5 rounded-xl border text-left transition duration-300 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? 'bg-gradient-to-br from-[#ea580c]/25 to-[#f59e0b]/15 border-[#ea580c] text-white shadow-xl shadow-[#ea580c]/15'
                      : 'bg-[#181512] border-[#29221b] text-[#9c8e7e] hover:bg-[#201a15] hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="timelineActiveIndicator"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ea580c] to-[#f59e0b]"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  <span className={`block font-serif text-lg sm:text-xl font-bold ${isActive ? 'text-[#f59e0b]' : 'text-zinc-400'}`}>
                    {milestone.year}
                  </span>
                  <span className="block text-xs font-bold truncate mt-0.5">
                    {milestone.title}
                  </span>
                  <span className="text-[10px] text-[#8c7f70] block uppercase tracking-wider mt-1">
                    {milestone.badge}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Active Milestone Card with Motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTimeline}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35 }}
              className="p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-[#1c1814] via-[#221c17] to-[#181411] border border-[#ea580c]/35 shadow-2xl relative"
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                <div className="md:col-span-8 space-y-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#ea580c]/20 text-[#f59e0b] text-xs font-bold">
                    <span>Year {timelineMilestones[activeTimeline].year} Milestone</span>
                    <span>•</span>
                    <span>{timelineMilestones[activeTimeline].badge}</span>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                    {timelineMilestones[activeTimeline].title}
                  </h4>
                  <p className="text-sm sm:text-base text-[#cfc0ae] leading-relaxed">
                    {timelineMilestones[activeTimeline].desc}
                  </p>
                </div>

                <div className="md:col-span-4 bg-[#14110e] p-5 rounded-xl border border-[#2e261f] space-y-2 text-xs text-[#a89985]">
                  <span className="font-bold text-white text-xs block">Key Historical Fact:</span>
                  <p className="leading-relaxed">
                    Visitors may readily spot tigers at any time in this reserve, which is the only one in the region. This is one of the factors contributing to the region&apos;s global popularity for tiger safaris.
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* ============================================================== */}
        {/* PART 2: RANTHAMBORE'S WILD LIFE (FLORA & FAUNA SHOWCASE) */}
        {/* ============================================================== */}
        <div>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#ea580c]">
                Biodiversity Catalog
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                Ranthambore&apos;s Wild Life &amp; Deciduous Forest
              </h3>
              <p className="text-xs sm:text-sm text-[#b8a794] max-w-2xl leading-relaxed">
                Ranthambore Park is home to rich tropical dry deciduous forests and wildlife spanning carnivores, herbivores, birds, reptiles, and India’s most significant heritage banyan trees.
              </p>
            </div>

            {/* Wildlife Filter Pills with Sliding Indicator */}
            <div className="flex flex-wrap gap-1.5 bg-[#1b1714] p-1.5 rounded-xl border border-[#2e261f]">
              {[
                { id: 'all', label: 'All Wildlife' },
                { id: 'predators', label: 'Big Cats & Predators' },
                { id: 'herbivores', label: 'Deer & Bovines' },
                { id: 'mammals', label: 'Bears & Mammals' },
                { id: 'reptiles', label: 'Crocodiles & Banyans' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setWildlifeCategory(tab.id as typeof wildlifeCategory)}
                  className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition duration-200 cursor-pointer ${
                    wildlifeCategory === tab.id ? 'text-white' : 'text-[#a89985] hover:text-white'
                  }`}
                >
                  {wildlifeCategory === tab.id && (
                    <motion.div
                      layoutId="wildlifeTabPill"
                      className="absolute inset-0 bg-[#ea580c] rounded-lg shadow-md -z-10"
                      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                    />
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Wildlife Cards Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <AnimatePresence mode="popLayout">
              {filteredWildlife.map((item, idx) => (
                <motion.div
                  key={item.name}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  className="h-full flex flex-col"
                >
                  <SpotlightCard
                    spotlightColor="rgba(245, 158, 11, 0.16)"
                    enableTilt={true}
                    className="glass-card p-6 rounded-2xl border border-[#2b241e] bg-[#171411] space-y-3.5 flex-1 flex flex-col justify-between hover:border-[#ea580c]/60 transition duration-300 shadow-md group"
                  >
                    <div className="space-y-2.5">
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold border ${item.accent}`}>
                          {item.tag}
                        </span>
                        <PawPrint className="w-4 h-4 text-zinc-600 group-hover:text-[#ea580c] transition duration-300" />
                      </div>

                      <h4 className="font-serif text-lg font-bold text-white group-hover:text-[#f59e0b] transition">
                        {item.name}
                      </h4>

                      <span className="text-[11px] text-[#8c7f70] italic block -mt-1 font-mono">
                        {item.sci}
                      </span>

                      <p className="text-xs text-[#b8a794] leading-relaxed pt-1">
                        {item.desc}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#251f18] text-[11px] text-[#7d6f61] flex items-center justify-between">
                      <span>Protected Native Habitat</span>
                      <span className="text-emerald-400 font-medium">Zones 1–10</span>
                    </div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
