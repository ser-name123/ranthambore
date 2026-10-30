import type { Metadata } from 'next';
import { getSiteContent } from '@/lib/content.server';
import HomePage from '@/components/HomePage';

// The homepage's canonical lives here (not in the root layout) so other routes,
// e.g. /thank-you and the 404 page, don't inherit "this is the homepage".
export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getSiteContent();
  const canonical = seo.homeCanonical.trim() || '/';
  return {
    alternates: { canonical },
    // A page's openGraph replaces the layout's, so it is repeated in full here.
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: canonical,
      siteName: seo.siteName,
      images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.siteName }],
      locale: 'en_US',
      type: 'website',
    },
  };
}

export default function Page() {
  return <HomePage />;
}
