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
  // Redirects are managed in Admin → SEO & Google → URLs & Redirects (see src/proxy.ts).
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
