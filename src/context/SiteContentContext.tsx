'use client';

import React, { createContext, useContext } from 'react';
import { DEFAULT_SITE_CONTENT, SiteContent } from '@/lib/site-content';
import type { TourPackage } from '@/lib/cms';

/** Card fields of a published package (detail blocks and SEO are left out to keep the payload small). */
export type PackageSummary = Omit<TourPackage, 'blocks' | 'seo'>;

const SiteContentContext = createContext<SiteContent>(DEFAULT_SITE_CONTENT);
const PackagesContext = createContext<PackageSummary[]>([]);

export function SiteContentProvider({ content, packages, children }: {
  content: SiteContent;
  packages: PackageSummary[];
  children: React.ReactNode;
}) {
  return (
    <SiteContentContext.Provider value={content}>
      <PackagesContext.Provider value={packages}>{children}</PackagesContext.Provider>
    </SiteContentContext.Provider>
  );
}

/** Admin-managed website content (loaded from Supabase in the root layout). */
export function useSiteContent(): SiteContent {
  return useContext(SiteContentContext);
}

/** Published tour packages in admin order. */
export function usePackages(): PackageSummary[] {
  return useContext(PackagesContext);
}
