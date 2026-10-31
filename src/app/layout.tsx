import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";
import { getPublishedPackages, getSiteContent, getSiteContentResolved } from "@/lib/content.server";
import { toPlainText } from "@/lib/rich-text";
import { DEFAULT_SITE_CONTENT } from "@/lib/site-content";

const cormorant = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export async function generateMetadata(): Promise<Metadata> {
  const { seo, branding } = await getSiteContent();
  const keywords = seo.keywords.split(",").map((k) => k.trim()).filter(Boolean);

  return {
    metadataBase: new URL(seo.siteUrl || "https://ranthamborewildlifetour.com"),
    title: {
      default: seo.title,
      template: `%s | ${seo.siteName}`,
    },
    description: seo.description,
    keywords,
    authors: [{ name: seo.siteName }],
    // No canonical here: each page sets its own (pages/packages automatically, the homepage in app/page.tsx).
    openGraph: {
      title: seo.title,
      description: seo.description,
      siteName: seo.siteName,
      images: [{ url: seo.ogImage, width: 1200, height: 630, alt: seo.siteName }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.ogImage],
    },
    verification: seo.googleVerification ? { google: seo.googleVerification } : undefined,
    // favicon.ico (src/app) is added by Next automatically; the admin-chosen icon comes first.
    icons: {
      icon: branding.favicon ? [{ url: branding.favicon }] : undefined,
      apple: branding.favicon && branding.favicon !== DEFAULT_SITE_CONTENT.branding.favicon ? branding.favicon : "/apple-touch-icon.png",
    },
  };
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Resolved: the Service Request Form's choices come from the linked price sections.
  const [content, packageRows] = await Promise.all([getSiteContentResolved(), getPublishedPackages()]);
  // Card fields only; detail blocks and SEO stay on the package pages.
  const packages = packageRows.map(({ data: { blocks: _blocks, seo: _seo, ...card } }) => card);
  const { contact, seo } = content;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    name: seo.siteName,
    url: seo.siteUrl,
    image: seo.ogImage.startsWith('http') ? seo.ogImage : `${seo.siteUrl.replace(/\/+$/, '')}${seo.ogImage}`,
    description: seo.description,
    telephone: contact.phonePrimary,
    email: contact.email,
    address: { "@type": "PostalAddress", streetAddress: toPlainText(contact.address), addressLocality: "Sawai Madhopur", addressRegion: "Rajasthan", addressCountry: "IN" },
  };
  const gaId = content.seo.googleAnalyticsId.trim();
  const pixelId = content.seo.metaPixelId.trim();

  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable}`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#ffffff] text-[#082318] font-sans antialiased selection:bg-[#047857] selection:text-white"
        suppressHydrationWarning
      >
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "<") }} />
        <ClientLayout content={content} packages={packages}>
          {children}
        </ClientLayout>
        {/^G-[A-Z0-9]+$/.test(gaId) && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${gaId}');`}
            </Script>
          </>
        )}
        {/^\d{10,20}$/.test(pixelId) && (
          <>
            {/* Meta (Facebook) Pixel — ID from Admin → SEO & Google. Page views on in-site navigation are tracked by the pixel itself. */}
            <Script id="meta-pixel" strategy="afterInteractive">
              {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${pixelId}');fbq('track','PageView');`}
            </Script>
            <noscript>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img height="1" width="1" style={{ display: "none" }} alt="" src={`https://www.facebook.com/tr?id=${pixelId}&ev=PageView&noscript=1`} />
            </noscript>
          </>
        )}
      </body>
    </html>
  );
}
