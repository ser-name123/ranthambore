import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // On Windows the editor can lock .next/types; set NEXT_DIST_DIR=.next_alt to build/run in another folder.
  distDir: process.env.NEXT_DIST_DIR || ".next",
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  images: {
    // Images uploaded from the admin panel live in the Supabase "media" bucket.
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.supabase.co',
        pathname: '/storage/v1/object/public/media/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/cancellation',
        destination: '/cancellation-policy',
        permanent: true,
      },
      {
        source: '/refund-policy',
        destination: '/cancellation-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/terms-and-conditions',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/terms-of-service',
        destination: '/terms-conditions',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about-us',
        permanent: true,
      },
      {
        source: '/contact',
        destination: '/contact-us',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/api/enquiry',
        destination: '/api/booking',
      },
    ];
  },
};

export default nextConfig;
