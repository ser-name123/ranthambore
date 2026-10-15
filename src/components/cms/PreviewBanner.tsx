import React from 'react';

/** Shown on pages rendered in draft mode (admin preview of unpublished changes). */
export default function PreviewBanner({ path, published }: { path: string; published: boolean }) {
  return (
    <div className="fixed bottom-20 left-1/2 z-[60] flex -translate-x-1/2 items-center gap-3 rounded-full border border-amber-300 bg-amber-50 px-4 py-2 text-xs font-semibold text-amber-900 shadow-xl lg:bottom-6">
      <span className="h-2 w-2 animate-pulse rounded-full bg-amber-500" />
      <span>Preview mode{published ? '' : ' — this page is a draft and hidden from visitors'}</span>
      <a href={`/api/admin/preview/exit?path=${encodeURIComponent(path)}`} className="rounded-full bg-amber-600 px-3 py-1 text-white hover:bg-amber-700">
        Exit preview
      </a>
    </div>
  );
}
