import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: '.next_app',
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
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
