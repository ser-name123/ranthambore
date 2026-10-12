import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout";

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
  themeColor: "#121110",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://ranthamborewildlifetour.com"),
  title: {
    default: "Ranthambore Safari & Wildlife Tours | Gypsy & Canter Booking",
    template: "%s | Ranthambore Wild Life Tour"
  },
  description: "Plan your unforgettable Ranthambore safari experience. Book authorized Maruti Gypsy & Canter permits, luxury wildlife resort stays, and custom tiger photography tours.",
  keywords: [
    "Ranthambore safari booking",
    "Ranthambore wildlife tours",
    "Ranthambore tour packages",
    "Jeep safari Ranthambore",
    "Canter safari booking Ranthambore",
    "Ranthambore tiger reserve",
    "Sawai Madhopur wildlife packages"
  ],
  authors: [{ name: "Ranthambore Wild Life Tour" }],
  openGraph: {
    title: "Ranthambore Safari & Wildlife Tours | Gypsy & Canter Booking",
    description: "Plan your unforgettable Ranthambore safari experience. Book authorized Maruti Gypsy & Canter permits, luxury wildlife resort stays, and custom tiger photography tours.",
    url: "https://ranthamborewildlifetour.com",
    siteName: "Ranthambore Wild Life Tour",
    images: [
      {
        url: "/images/hero_tiger.jpg",
        width: 1200,
        height: 630,
        alt: "Ranthambore Wild Life Tour - Royal Bengal Tiger"
      }
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ranthambore Safari & Wildlife Tours | Gypsy & Canter Booking",
    description: "Explore Ranthambore National Park with expert naturalists. Gypsy, Canter, and stay packages.",
    images: ["/images/hero_tiger.jpg"],
  },
  icons: {
    icon: "/logo.jpg",
    apple: "/logo.jpg",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="min-h-screen bg-[#121110] text-[#f4efea] font-sans antialiased selection:bg-[#ea580c] selection:text-white"
        suppressHydrationWarning
      >
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
