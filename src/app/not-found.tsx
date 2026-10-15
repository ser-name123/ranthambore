import type { Metadata } from 'next';
import { RichText } from '@/components/cms/Text';
import Link from 'next/link';
import { getSiteContent } from '@/lib/content.server';

export async function generateMetadata(): Promise<Metadata> {
  const { ui } = await getSiteContent();
  return { title: ui.notFound.title, robots: { index: false, follow: true } };
}

export default async function NotFound() {
  const { ui, navigation } = await getSiteContent();
  const { notFound } = ui;
  const links = navigation.header.filter((l) => l.href !== '/').slice(0, 6);

  return (
    <section className="relative overflow-hidden bg-white py-24 text-center">
      <div className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-emerald-500/5 blur-[120px]" />
      <div className="relative mx-auto max-w-2xl space-y-5 px-4">
        <p className="font-serif text-7xl font-bold text-[#d97706]">404</p>
        <h1 className="font-serif text-3xl font-bold text-[#082318] sm:text-4xl">{notFound.title}</h1>
        <div className="text-sm leading-relaxed text-[#375847] sm:text-base"><RichText text={notFound.text} inline /></div>
        <Link
          href="/"
          className="inline-flex items-center rounded-xl bg-gradient-to-r from-emerald-700 to-[#d97706] px-6 py-3 text-sm font-bold text-white shadow-md transition hover:from-emerald-600"
        >
          {notFound.button}
        </Link>
        <div className="flex flex-wrap justify-center gap-2 pt-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="rounded-full border border-[#d2e4d9] px-3 py-1 text-xs font-semibold text-[#082318] transition hover:border-emerald-500 hover:text-emerald-800">
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
