import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { TourPackage } from '@/lib/cms';
import { getDraftItem, getPublishedPackage, getPublishedPackages, getSiteContent } from '@/lib/content.server';
import { buildMetadata } from '@/lib/seo';
import { PackageView } from '@/components/cms/PageView';
import PreviewBanner from '@/components/cms/PreviewBanner';

export async function generateStaticParams() {
  const packages = await getPublishedPackages();
  return packages.map((p) => ({ slug: p.slug }));
}

async function loadPackage(slug: string) {
  const published = await getPublishedPackage(slug);
  if ((await draftMode()).isEnabled) {
    const draft = await getDraftItem<TourPackage>('packages', slug);
    return draft ? { pkg: draft, preview: true, published: !!published } : null;
  }
  return published ? { pkg: published, preview: false, published: true } : null;
}

export async function generateMetadata({ params }: PageProps<'/packages/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const [loaded, { seo }] = await Promise.all([loadPackage(slug), getSiteContent()]);
  if (!loaded) return {};
  const { pkg } = loaded;
  return buildMetadata(pkg.seo, { title: pkg.name, description: pkg.summary, image: pkg.image }, `/packages/${slug}`, seo);
}

export default async function PackagePage({ params }: PageProps<'/packages/[slug]'>) {
  const { slug } = await params;
  const loaded = await loadPackage(slug);
  if (!loaded) notFound();
  return (
    <>
      <PackageView pkg={loaded.pkg} />
      {loaded.preview && <PreviewBanner path={`/packages/${slug}`} published={loaded.published} />}
    </>
  );
}
