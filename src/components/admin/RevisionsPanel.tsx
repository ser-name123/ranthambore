'use client';

import React, { useState } from 'react';
import { History, Loader2, RotateCcw, X } from 'lucide-react';
import { Button } from './ui';

interface Revision {
  id: string;
  created_at: string;
  created_by: string | null;
  published: boolean | null;
}

/** "History" button: lists saved versions and loads one back into the editor (not saved until you press Save). */
export default function RevisionsPanel({ entity, refId, onRestore, onError }: {
  entity: 'pages' | 'packages' | 'content';
  refId: string;
  onRestore: (data: unknown, published: boolean | null) => void;
  onError: (err: unknown) => void;
}) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [revisions, setRevisions] = useState<Revision[]>([]);
  const [restoring, setRestoring] = useState<string | null>(null);

  const load = async () => {
    setOpen(true);
    setLoading(true);
    try {
      const res = await fetch(`/api/admin/revisions?entity=${entity}&ref=${encodeURIComponent(refId)}`);
      const data = await res.json();
      if (!res.ok) throw Object.assign(new Error(data.error), { status: res.status });
      setRevisions(data.revisions);
    } catch (err) {
      onError(err);
    } finally {
      setLoading(false);
    }
  };

  const restore = async (rev: Revision) => {
    if (!confirm('Load this older version into the editor? Your current unsaved edits will be replaced. Nothing changes on the website until you save.')) return;
    setRestoring(rev.id);
    try {
      const res = await fetch(`/api/admin/revisions/${rev.id}`);
      const data = await res.json();
      if (!res.ok) throw Object.assign(new Error(data.error), { status: res.status });
      onRestore(data.revision.data, data.revision.published);
      setOpen(false);
    } catch (err) {
      onError(err);
    } finally {
      setRestoring(null);
    }
  };

  return (
    <>
      <Button variant="secondary" onClick={load}>
        <History className="h-3.5 w-3.5" /> History
      </Button>
      {open && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/30" onClick={() => setOpen(false)}>
          <aside onClick={(e) => e.stopPropagation()} className="flex h-full w-full max-w-sm flex-col bg-white shadow-2xl">
            <header className="flex items-center justify-between border-b border-[#d2e4d9] p-4">
              <div>
                <h3 className="font-bold text-[#082318]">Version history</h3>
                <p className="text-xs text-[#517362]">Older versions saved before each change</p>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close" className="cursor-pointer rounded-lg p-1.5 text-[#517362] hover:bg-[#f0f6f2]">
                <X className="h-5 w-5" />
              </button>
            </header>
            <div className="flex-1 overflow-y-auto p-4">
              {loading ? (
                <p className="flex items-center gap-2 text-sm text-[#517362]"><Loader2 className="h-4 w-4 animate-spin" /> Loading…</p>
              ) : revisions.length === 0 ? (
                <p className="text-sm text-[#517362]">No older versions yet. A version is kept every time you save a change.</p>
              ) : (
                <ul className="space-y-2">
                  {revisions.map((rev) => (
                    <li key={rev.id} className="flex items-center gap-3 rounded-xl border border-[#d2e4d9] p-3">
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#082318]">
                          {new Date(rev.created_at).toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' })}
                        </p>
                        <p className="truncate text-xs text-[#517362]">
                          Replaced by {rev.created_by ?? 'admin'}
                          {rev.published === false ? ' · was a draft' : ''}
                        </p>
                      </div>
                      <Button variant="secondary" onClick={() => restore(rev)} disabled={!!restoring}>
                        {restoring === rev.id ? <Loader2 className="h-3.5 w-3.5 animate-spin" /> : <RotateCcw className="h-3.5 w-3.5" />}
                        Load
                      </Button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </aside>
        </div>
      )}
    </>
  );
}
