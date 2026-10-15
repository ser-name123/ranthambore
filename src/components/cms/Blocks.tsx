'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertTriangle, ArrowRight, CheckCircle2, ChevronDown, Info, MessageCircle, ShieldAlert, XCircle } from 'lucide-react';
import type { Block, CardItem } from '@/lib/cms';
import { waHref } from '@/lib/site-content';
import { useBookingModal } from '@/context/BookingModalContext';
import { usePackages, useSiteContent } from '@/context/SiteContentContext';
import QuickEnquirySection from '@/components/QuickEnquirySection';
import Testimonials from '@/components/Testimonials';
import ZoneGuide from '@/components/ZoneGuide';
import PackagesGrid from '@/components/PackagesGrid';
import SpotlightCard from '@/components/SpotlightCard';
import { CmsIcon } from './icons';
import { Highlight, RichText } from './Text';
import ContactInfo from './ContactInfo';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.5 },
};

const GRID_COLS: Record<2 | 3 | 4, string> = {
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
  4: 'grid-cols-2 lg:grid-cols-4',
};

function BlockHeading({ block, center = false }: { block: Block; center?: boolean }) {
  if (!block.heading && !block.intro && !block.badge) return null;
  return (
    <motion.div {...reveal} className={`mb-8 space-y-3 ${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}`}>
      {block.badge && (
        <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#064e3b]">
          {block.badge}
        </span>
      )}
      {block.heading && (
        <h2 className="font-serif text-2xl font-bold tracking-tight text-[#082318] sm:text-3xl lg:text-4xl">
          <Highlight text={block.heading} />
        </h2>
      )}
      {block.intro && <div className="text-sm leading-relaxed text-[#375847] sm:text-base"><RichText text={block.intro} inline /></div>}
    </motion.div>
  );
}

function Card({ item, style }: { item: CardItem; style: 'card' | 'compact' | 'image' }) {
  const { ui } = useSiteContent();
  const inner = (
    <SpotlightCard
      spotlightColor="rgba(4, 120, 87, 0.08)"
      className={`group flex h-full flex-col overflow-hidden rounded-2xl border border-[#d2e4d9] bg-white shadow-sm transition hover:border-emerald-500 hover:shadow-lg ${
        style === 'compact' ? 'p-5' : ''
      }`}
    >
      {style === 'image' && item.image && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image src={item.image} alt={item.title} fill className="object-cover transition duration-700 group-hover:scale-105" />
          {item.badge && (
            <span className="absolute left-3 top-3 rounded-md border border-emerald-200 bg-white px-2.5 py-1 text-[11px] font-bold text-emerald-900 shadow-sm">
              {item.badge}
            </span>
          )}
        </div>
      )}
      <div className={`flex flex-1 flex-col gap-2.5 ${style === 'compact' ? '' : 'p-6'}`}>
        <div className="flex items-start justify-between gap-3">
          {item.icon && (
            <span className={`flex shrink-0 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-[#047857] transition group-hover:bg-emerald-600 group-hover:text-white ${style === 'compact' ? 'h-10 w-10' : 'h-12 w-12'}`}>
              <CmsIcon name={item.icon} className={style === 'compact' ? 'h-5 w-5' : 'h-6 w-6'} />
            </span>
          )}
          {item.badge && style !== 'image' && (
            <span className="rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-[#082318]">{item.badge}</span>
          )}
        </div>
        <h3 className={`font-serif font-bold text-[#082318] transition group-hover:text-emerald-800 ${style === 'compact' ? 'text-base' : 'text-xl'}`}>{item.title}</h3>
        {item.text && <div className={`leading-relaxed text-[#1b3a2a] ${style === 'compact' ? 'text-xs' : 'text-sm'}`}><RichText text={item.text} inline /></div>}
        {item.bullets && item.bullets.length > 0 && (
          <ul className="space-y-1.5 pt-1 text-xs text-[#1b3a2a]">
            {item.bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        )}
        {(item.meta || item.link) && (
          <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#e2ede6] pt-3 text-xs">
            {item.meta && <span className="font-semibold text-[#92400e]">{item.meta}</span>}
            {item.link && (
              <span className="ml-auto inline-flex items-center gap-1 font-bold text-emerald-800">
                {ui.pageLabels.learnMore} <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
              </span>
            )}
          </div>
        )}
      </div>
    </SpotlightCard>
  );
  return item.link ? (
    <Link href={item.link} className="block h-full">
      {inner}
    </Link>
  ) : (
    inner
  );
}

function FaqList({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-4xl space-y-3">
      {items.map((faq, idx) => {
        const isOpen = open === idx;
        return (
          <div key={idx} className={`overflow-hidden rounded-2xl border bg-white shadow-sm transition ${isOpen ? 'border-emerald-600 bg-emerald-50/30' : 'border-[#d2e4d9] hover:border-emerald-600'}`}>
            <button type="button" onClick={() => setOpen(isOpen ? null : idx)} className="flex w-full cursor-pointer items-center justify-between gap-4 p-5 text-left">
              <span className={`font-serif text-base font-bold sm:text-lg ${isOpen ? 'text-emerald-900' : 'text-[#082318]'}`}>{faq.q}</span>
              <ChevronDown className={`h-5 w-5 shrink-0 text-emerald-700 transition ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }}>
                  <div className="border-t border-[#e2ede6] px-5 pb-5 pt-3">
                    <RichText text={faq.a} />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

const TONES = {
  info: { box: 'border-emerald-200 bg-emerald-50/70', icon: Info, iconCls: 'text-emerald-700' },
  success: { box: 'border-emerald-300 bg-emerald-50', icon: CheckCircle2, iconCls: 'text-emerald-700' },
  warning: { box: 'border-amber-300 bg-amber-50', icon: AlertTriangle, iconCls: 'text-[#d97706]' },
  danger: { box: 'border-rose-300 bg-rose-50', icon: ShieldAlert, iconCls: 'text-rose-700' },
};

export function BlockView({ block }: { block: Block }) {
  const { openBookingModal } = useBookingModal();
  const { contact, ui } = useSiteContent();
  const packages = usePackages();

  switch (block.type) {
    case 'cards':
      return (
        <>
          <BlockHeading block={block} />
          <div className={`grid gap-5 ${GRID_COLS[block.columns] ?? GRID_COLS[3]}`}>
            {block.items.map((item, i) => (
              <motion.div key={i} {...reveal} transition={{ duration: 0.45, delay: Math.min(i, 6) * 0.05 }} className="h-full">
                <Card item={item} style={block.style} />
              </motion.div>
            ))}
          </div>
        </>
      );

    case 'pricing':
      return (
        <>
          <BlockHeading block={block} />
          <div className={`grid gap-5 ${GRID_COLS[block.tiers.length >= 4 ? 4 : block.tiers.length === 2 ? 2 : 3]}`}>
            {block.tiers.map((tier, i) => (
              <motion.div
                key={i}
                {...reveal}
                className={`flex h-full flex-col rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-lg ${
                  tier.highlighted ? 'border-2 border-emerald-600 shadow-md' : 'border-[#d2e4d9] hover:border-emerald-500'
                } ${block.tiers.length >= 4 ? 'col-span-2 lg:col-span-1' : ''}`}
              >
                {tier.badge && (
                  <span className="mb-3 self-start rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[11px] font-bold text-amber-900">{tier.badge}</span>
                )}
                <h3 className="font-serif text-lg font-bold text-[#082318]">{tier.title}</h3>
                <div className="mt-2 flex items-baseline gap-1.5">
                  <span className="text-3xl font-bold text-[#ea580c]">{tier.price}</span>
                  <span className="text-xs font-medium text-[#517362]">{tier.unit}</span>
                </div>
                <ul className="mt-4 flex-1 space-y-2 text-xs text-[#1b3a2a]">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                {tier.footnote && <p className="mt-4 rounded-lg bg-[#f4f8f5] px-3 py-2 text-[11px] font-semibold text-[#375847]">{tier.footnote}</p>}
                <button
                  type="button"
                  onClick={() => openBookingModal({ vehicle: block.bookingPrefill ? `${block.bookingPrefill} - ${tier.title}` : tier.title })}
                  className="mt-4 w-full cursor-pointer rounded-xl bg-gradient-to-r from-emerald-700 to-[#d97706] py-2.5 text-xs font-bold text-white shadow-md transition hover:from-emerald-600"
                >
                  {block.buttonLabel || ui.pageLabels.enquireNow}
                </button>
              </motion.div>
            ))}
          </div>
          {block.note && <p className="mt-4 text-xs text-[#517362]">{block.note}</p>}
        </>
      );

    case 'table':
      return (
        <>
          <BlockHeading block={block} />
          <motion.div {...reveal} className="overflow-x-auto rounded-2xl border border-[#d2e4d9] bg-[#f4f8f5] shadow-sm">
            <table className="w-full min-w-[560px] text-left text-xs sm:text-sm">
              <thead className="border-b border-[#d2e4d9] bg-white text-[#082318]">
                <tr>
                  {block.columns.map((c, i) => (
                    <th key={i} className="p-3.5 font-bold">{c}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ede6] text-[#183d2a]">
                {block.rows.map((row, i) => (
                  <tr key={i} className="transition hover:bg-white">
                    {row.map((cell, j) => (
                      <td key={j} className={`p-3.5 ${j === 0 ? 'font-semibold text-[#082318]' : ''}`}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          {block.note && <p className="mt-3 text-xs text-[#517362]">{block.note}</p>}
        </>
      );

    case 'timeline':
      return (
        <>
          <BlockHeading block={block} />
          <div className="relative space-y-5 before:absolute before:bottom-2 before:left-[19px] before:top-2 before:w-0.5 before:bg-emerald-200 sm:before:left-[23px]">
            {block.items.map((item, i) => (
              <motion.div key={i} {...reveal} className="relative flex gap-4 sm:gap-5">
                <span className="relative z-10 flex h-10 min-w-10 shrink-0 items-center justify-center rounded-full border-2 border-white bg-emerald-700 px-2 text-[10px] font-bold text-white shadow-md sm:h-12 sm:min-w-12 sm:text-xs">
                  {item.label}
                </span>
                <div className="flex-1 rounded-2xl border border-[#d2e4d9] bg-white p-5 shadow-sm">
                  <h3 className="font-serif text-lg font-bold text-[#082318]">{item.title}</h3>
                  {item.text && <div className="mt-1.5 text-sm leading-relaxed text-[#1b3a2a]"><RichText text={item.text} inline /></div>}
                  {item.bullets && item.bullets.length > 0 && (
                    <ul className="mt-3 space-y-1.5 text-xs text-[#1b3a2a] sm:text-sm">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-600" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </>
      );

    case 'faq':
      return (
        <>
          <BlockHeading block={block} center />
          <FaqList items={block.items} />
        </>
      );

    case 'checklist':
      return (
        <>
          <BlockHeading block={block} />
          <div className={`grid gap-5 ${GRID_COLS[block.groups.length >= 4 ? 4 : block.groups.length <= 1 ? 2 : (block.groups.length as 2 | 3)]}`}>
            {block.groups.map((group, i) => (
              <motion.div
                key={i}
                {...reveal}
                className={`rounded-2xl border p-5 shadow-sm ${block.groups.length === 1 ? 'sm:col-span-2' : ''} ${
                  group.tone === 'do' ? 'border-emerald-200 bg-emerald-50/50' : group.tone === 'dont' ? 'border-rose-200 bg-rose-50/50' : 'border-[#d2e4d9] bg-white'
                }`}
              >
                {group.title && <h3 className="mb-3 font-serif text-lg font-bold text-[#082318]">{group.title}</h3>}
                <ul className={`gap-x-6 space-y-2 text-sm text-[#1b3a2a] ${block.groups.length === 1 && group.items.length > 5 ? 'sm:columns-2' : ''}`}>
                  {group.items.map((item, j) => (
                    <li key={j} className="flex break-inside-avoid gap-2">
                      {group.tone === 'dont' ? (
                        <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-rose-600" />
                      ) : (
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      )}
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </>
      );

    case 'imageText':
      return (
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          <motion.div {...reveal} className={`relative h-72 overflow-hidden rounded-3xl border border-[#d2e4d9] shadow-xl sm:h-96 ${block.imageSide === 'right' ? 'lg:order-2' : ''}`}>
            {block.image && <Image src={block.image} alt={block.heading || ''} fill className="object-cover" />}
          </motion.div>
          <motion.div {...reveal} className="space-y-4">
            <BlockHeading block={block} />
            <RichText text={block.body} />
            {block.bullets && block.bullets.length > 0 && (
              <ul className="grid grid-cols-1 gap-2.5 pt-1 sm:grid-cols-2">
                {block.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm font-medium text-[#183d2a]">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.div>
        </div>
      );

    case 'richText':
      return (
        <motion.div {...reveal} className="rounded-2xl border border-[#d2e4d9] bg-white p-6 shadow-sm sm:p-8">
          {block.badge && <span className="text-[11px] font-bold uppercase tracking-wider text-[#d97706]">{block.badge}</span>}
          {block.heading && <h2 className="mb-4 mt-1 font-serif text-xl font-bold text-[#082318] sm:text-2xl">{block.heading}</h2>}
          {block.intro && <div className="mb-3 text-sm font-semibold text-[#375847]"><RichText text={block.intro} inline /></div>}
          <RichText text={block.body} />
        </motion.div>
      );

    case 'callout': {
      const tone = TONES[block.tone] ?? TONES.info;
      const Icon = tone.icon;
      return (
        <motion.div {...reveal} className={`flex gap-3 rounded-2xl border p-5 shadow-sm ${tone.box}`}>
          <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${tone.iconCls}`} />
          <div className="space-y-1">
            {block.title && <p className="font-bold text-[#082318]">{block.title}</p>}
            <RichText text={block.text} />
          </div>
        </motion.div>
      );
    }

    case 'cta':
      return (
        <motion.div {...reveal} className="relative overflow-hidden rounded-3xl border-2 border-emerald-300/80 bg-gradient-to-br from-emerald-50/90 via-white to-amber-50/70 p-6 shadow-xl sm:p-10">
          <div className="flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
            <div className="max-w-2xl space-y-2">
              {block.badge && <span className="text-xs font-bold uppercase tracking-wider text-[#d97706]">{block.badge}</span>}
              <h2 className="font-serif text-2xl font-bold text-[#082318] sm:text-3xl"><Highlight text={block.title} /></h2>
              {block.text && <div className="text-sm leading-relaxed text-[#1b3a2a] sm:text-base"><RichText text={block.text} inline /></div>}
            </div>
            <div className="flex shrink-0 flex-wrap justify-center gap-3">
              {block.buttonLabel && (
                <button
                  type="button"
                  onClick={() => openBookingModal({ ...(block.bookingPrefill ? { vehicle: block.bookingPrefill } : {}), ...(block.bookingZone ? { zone: block.bookingZone } : {}) })}
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] px-6 py-3.5 text-sm font-bold text-white shadow-lg transition hover:from-emerald-600"
                >
                  {block.buttonLabel} <ArrowRight className="h-4 w-4" />
                </button>
              )}
              {block.whatsappText && (
                <a href={waHref(contact.whatsapp, block.whatsappText)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-300 bg-white px-5 py-3.5 text-sm font-bold text-[#082318] shadow-sm transition hover:bg-emerald-50">
                  <MessageCircle className="h-4 w-4 text-emerald-700" /> {ui.whatsapp}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      );

    case 'enquiryForm':
      return (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <QuickEnquirySection />
        </div>
      );

    case 'packages': {
      const list = block.category ? packages.filter((p) => p.category === block.category) : packages;
      return (
        <>
          <BlockHeading block={block} center />
          <PackagesGrid packages={list} onSelectPackage={(name) => openBookingModal({ packageName: name })} showTabs={!block.category} />
        </>
      );
    }

    case 'testimonials':
      return (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <Testimonials />
        </div>
      );

    case 'zoneExplorer':
      return (
        <div className="-mx-4 sm:-mx-6 lg:-mx-8">
          <ZoneGuide />
        </div>
      );

    case 'contactInfo':
      return (
        <>
          <BlockHeading block={block} />
          <ContactInfo />
        </>
      );

    default:
      return null;
  }
}
