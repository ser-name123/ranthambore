import type { Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';
import type { CmsPage as CmsPageDoc } from '@/lib/cms';
import { getDraftItem, getPublishedPage, getPublishedPages, getSiteContent } from '@/lib/content.server';
import { buildMetadata } from '@/lib/seo';
import { CmsPageView } from '@/components/cms/PageView';
import PreviewBanner from '@/components/cms/PreviewBanner';

export async function generateStaticParams() {
  const pages = await getPublishedPages();
  return pages.map((p) => ({ slug: p.slug }));
}

async function loadPage(slug: string) {
  const published = await getPublishedPage(slug);
  if ((await draftMode()).isEnabled) {
    const draft = await getDraftItem<CmsPageDoc>('pages', slug);
    return draft ? { page: draft, preview: true, published: !!published } : null;
  }
  return published ? { page: published, preview: false, published: true } : null;
}

export async function generateMetadata({ params }: PageProps<'/[slug]'>): Promise<Metadata> {
  const { slug } = await params;
  const [loaded, { seo }] = await Promise.all([loadPage(slug), getSiteContent()]);
  if (!loaded) return {};
  const { page } = loaded;
  return buildMetadata(page.seo, { title: page.name, description: page.hero.subtitle, image: page.hero.image }, `/${slug}`, seo);
}

export default async function CmsPage({ params }: PageProps<'/[slug]'>) {
  const { slug } = await params;
  const loaded = await loadPage(slug);
  if (!loaded) notFound();
  return (
    <>
      <CmsPageView page={loaded.page} />
      {loaded.preview && <PreviewBanner path={`/${slug}`} published={loaded.published} />}
    </>
  );
}
