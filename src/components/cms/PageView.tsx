'use client';

import React from 'react';
import { RichText } from './Text';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, ChevronRight, Clock, MessageCircle } from 'lucide-react';
import type { Block, CmsPage, PageHero, TourPackage } from '@/lib/cms';
import { waHref } from '@/lib/site-content';
import { useBookingModal } from '@/context/BookingModalContext';
import { useSiteContent } from '@/context/SiteContentContext';
import { BlockView } from './Blocks';
import ContactInfo from './ContactInfo';

// Blocks that render full-width sections of their own.
const FULL_BLEED: Block['type'][] = ['enquiryForm', 'testimonials', 'zoneExplorer'];

function Breadcrumb({ trail }: { trail: { label: string; href?: string }[] }) {
  const { ui } = useSiteContent();
  return (
    <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-2 text-xs text-[#517362]">
      <Link href="/" className="flex items-center gap-1.5 font-medium transition hover:text-emerald-700">
        <ArrowLeft className="h-3.5 w-3.5" /> {ui.pageLabels.home}
      </Link>
      {trail.map((t, i) => (
        <React.Fragment key={i}>
          <ChevronRight className="h-3.5 w-3.5 text-emerald-600" />
          {t.href ? (
            <Link href={t.href} className="font-medium transition hover:text-emerald-700">{t.label}</Link>
          ) : (
            <span className="font-semibold text-[#d97706]">{t.label}</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
}

function Hero({ hero, extra }: { hero: PageHero; extra?: React.ReactNode }) {
  const { openBookingModal } = useBookingModal();
  const { contact, ui } = useSiteContent();
  return (
    <div className="relative overflow-hidden rounded-3xl border border-[#d2e4d9] bg-[#f4f8f5] p-7 shadow-xl sm:p-12">
      {hero.image && (
        <div className="absolute inset-0">
          <Image src={hero.image} alt={hero.title} fill priority className="object-cover object-center opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      )}
      <div className="relative z-10 flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
        <div className="max-w-3xl space-y-4">
          {hero.badge && (
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-emerald-800">
              {hero.badge}
            </span>
          )}
          <h1 className="font-serif text-3xl font-bold leading-tight tracking-tight text-[#082318] sm:text-4xl lg:text-5xl">
            {hero.title}
            {hero.highlight && (
              <>
                {' '}
                <span className="bg-gradient-to-r from-emerald-700 to-[#d97706] bg-clip-text text-transparent">{hero.highlight}</span>
              </>
            )}
          </h1>
          {hero.subtitle && <div className="text-sm leading-relaxed text-[#375847] sm:text-base"><RichText text={hero.subtitle} inline /></div>}
          {extra}
        </div>
        {(hero.ctaLabel || hero.whatsappText) && (
          <div className="flex shrink-0 flex-wrap items-center gap-3">
            {hero.ctaLabel && (
              <button
                type="button"
                onClick={() =>
                  openBookingModal({
                    ...(hero.bookingPrefill ? { vehicle: hero.bookingPrefill } : {}),
                    ...(hero.bookingZone ? { zone: hero.bookingZone } : {}),
                  })
                }
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 via-emerald-600 to-[#d97706] px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:from-emerald-600 hover:to-[#ea580c]"
              >
                {hero.ctaLabel} <ArrowRight className="h-4 w-4" />
              </button>
            )}
            {hero.whatsappText && (
              <a
                href={waHref(contact.whatsapp, hero.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-xl border border-[#d2e4d9] bg-white px-5 py-3.5 text-sm font-bold text-emerald-800 shadow-sm transition hover:bg-emerald-50"
              >
                <MessageCircle className="h-4 w-4 text-emerald-600" /> {ui.pageLabels.whatsappDesk}
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function BlockList({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block) => (
        <section key={block.id} id={block.id} className="scroll-mt-32">
          <BlockView block={block} pageBlocks={blocks} />
        </section>
      ))}
    </>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden bg-white py-10 text-[#082318] lg:py-16">
      <div className="pointer-events-none absolute right-1/4 top-0 h-96 w-96 rounded-full bg-emerald-500/5 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-1/3 left-10 h-96 w-96 rounded-full bg-amber-500/5 blur-[140px]" />
      <div className="relative z-10 mx-auto max-w-[1440px] space-y-14 px-4 sm:px-6 lg:space-y-20 lg:px-8">{children}</div>
    </div>
  );
}

export function CmsPageView({ page }: { page: CmsPage }) {
  const { ui } = useSiteContent();
  const tocBlocks = page.blocks.filter((b) => b.heading && !FULL_BLEED.includes(b.type));

  return (
    <Shell>
      <div className="space-y-6">
        <Breadcrumb trail={[{ label: page.name }]} />
        <Hero hero={page.hero} />
      </div>

      {page.showToc && tocBlocks.length > 1 ? (
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4 xl:col-span-3">
            <div className="space-y-5 lg:sticky lg:top-32">
              <nav className="rounded-2xl border border-[#d2e4d9] bg-[#f4f8f5] p-5 shadow-sm">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#517362]">{ui.pageLabels.onThisPage}</p>
                <ul className="space-y-1.5 text-sm">
                  {tocBlocks.map((b) => (
                    <li key={b.id}>
                      <a href={`#${b.id}`} className="block rounded-lg px-2 py-1.5 font-medium text-[#1b3a2a] transition hover:bg-white hover:text-emerald-800">
                        {b.heading}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="rounded-2xl border border-[#d2e4d9] bg-[#f4f8f5] p-5 shadow-sm">
                <p className="mb-3 text-xs font-bold uppercase tracking-wider text-[#517362]">{ui.pageLabels.needHelp}</p>
                <ContactInfo compact />
              </div>
            </div>
          </aside>
          <div className="space-y-8 lg:col-span-8 xl:col-span-9">
            <BlockList blocks={page.blocks} />
          </div>
        </div>
      ) : (
        <BlockList blocks={page.blocks} />
      )}
    </Shell>
  );
}

export function PackageView({ pkg }: { pkg: TourPackage }) {
  const { ui } = useSiteContent();
  const hero: PageHero = {
    badge: pkg.badge,
    title: pkg.name,
    highlight: '',
    subtitle: pkg.summary,
    image: pkg.image,
    ctaLabel: ui.pageLabels.packageEnquire,
    bookingPrefill: pkg.name,
    whatsappText: `Hello, I want to enquire about the ${pkg.name} package.`,
  };

  return (
    <Shell>
      <div className="space-y-6">
        <Breadcrumb trail={[{ label: ui.pageLabels.packagesBreadcrumb, href: '/tour-packages' }, { label: pkg.name }]} />
        <Hero
          hero={hero}
          extra={
            <div className="flex flex-wrap gap-2.5 pt-1 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-[#d2e4d9] bg-white px-3 py-1.5 text-[#ea580c]">
                <Clock className="h-3.5 w-3.5" /> {pkg.duration}
              </span>
              <span className="rounded-lg border border-[#d2e4d9] bg-white px-3 py-1.5 text-[#082318]">{pkg.safariCount}</span>
              <span className="rounded-lg border border-[#d2e4d9] bg-white px-3 py-1.5 text-[#082318]">{pkg.hotelType}</span>
              <span className="rounded-lg border border-emerald-300 bg-emerald-50 px-3 py-1.5 text-emerald-900">
                {ui.pageLabels.fromPrice} ₹{pkg.pricePerPerson.toLocaleString('en-IN')} {ui.perPerson}
              </span>
            </div>
          }
        />
      </div>
      <BlockList blocks={pkg.blocks} />
    </Shell>
  );
}
