import type { Metadata } from 'next';
import { getSiteContent } from '@/lib/content.server';
import ThankYouView, { type FormKind } from '@/components/ThankYouView';

// Every form lands here after a successful submit, e.g. /thank-you?ref=SRV-2026-3B726E&form=service
// Kept out of Google (a thank-you page has nothing to rank for) and out of the sitemap.

export async function generateMetadata(): Promise<Metadata> {
  const { thankYou } = await getSiteContent();
  return { title: thankYou.title, robots: { index: false, follow: false } };
}

const REF = /^(RWL|SRV)-\d{4}-[0-9A-F]{4,8}$/;
const KINDS: FormKind[] = ['booking', 'enquiry', 'service'];

export default async function ThankYouPage({ searchParams }: PageProps<'/thank-you'>) {
  const params = await searchParams;
  const ref = typeof params.ref === 'string' && REF.test(params.ref) ? params.ref : '';
  const form = KINDS.find((k) => k === params.form) ?? 'enquiry';
  return <ThankYouView reference={ref} form={form} />;
}
