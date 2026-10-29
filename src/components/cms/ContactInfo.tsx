'use client';

import React from 'react';
import { RichText } from './Text';
import { Clock, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';
import { useSiteContent } from '@/context/SiteContentContext';
import { telHref, waHref } from '@/lib/site-content';

/** Contact channels from the admin "Contact Details" section. */
export default function ContactInfo({ compact = false }: { compact?: boolean }) {
  const { contact, ui } = useSiteContent();
  const c = ui.contactCards;
  const channels = [
    { icon: Phone, title: c.call, lines: [contact.phonePrimary, contact.phoneSecondary].filter(Boolean), href: telHref(contact.phonePrimary), action: c.callAction },
    { icon: MessageCircle, title: c.whatsapp, lines: [contact.whatsapp], href: waHref(contact.whatsapp, ui.faqBanner.whatsappText), action: c.whatsappAction, external: true },
    { icon: Mail, title: c.email, lines: [contact.email], href: `mailto:${contact.email}`, action: c.emailAction },
    { icon: Clock, title: c.hours, lines: [contact.supportHours] },
    { icon: MapPin, title: c.office, lines: [contact.address] },
  ];

  if (compact) {
    return (
      <div className="space-y-2.5 text-xs">
        {channels.slice(0, 3).map((c) => (
          <a
            key={c.title}
            href={c.href}
            target={c.external ? '_blank' : undefined}
            rel={c.external ? 'noopener noreferrer' : undefined}
            className="flex items-center gap-2.5 rounded-lg border border-[#d2e4d9] bg-white px-3 py-2.5 font-semibold text-[#082318] transition hover:border-emerald-500"
          >
            <c.icon className="h-4 w-4 shrink-0 text-emerald-700" />
            <span className="truncate">{c.lines[0]}</span>
          </a>
        ))}
      </div>
    );
  }

  return (
    // Flex-wrap (not grid) so an incomplete last row is centred.
    <div className="flex flex-wrap justify-center gap-4">
      {channels.map((c) => (
        <div
          key={c.title}
          className="flex w-full flex-col gap-3 rounded-2xl border border-[#d2e4d9] bg-white p-5 shadow-sm sm:w-[calc((100%-1rem)/2)] lg:w-[calc((100%-2rem)/3)]"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-700">
            <c.icon className="h-5 w-5" />
          </span>
          <h3 className="font-serif text-lg font-bold text-[#082318]">{c.title}</h3>
          <div className="space-y-0.5 text-sm text-[#1b3a2a]">
            {c.lines.map((l) => (
              <div key={l} className="break-words"><RichText text={l} inline /></div>
            ))}
          </div>
          {c.href && (
            <a
              href={c.href}
              target={c.external ? '_blank' : undefined}
              rel={c.external ? 'noopener noreferrer' : undefined}
              className="mt-auto inline-flex text-xs font-bold text-emerald-800 hover:text-emerald-950"
            >
              {c.action} →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
