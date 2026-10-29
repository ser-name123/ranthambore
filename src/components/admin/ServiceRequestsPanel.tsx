'use client';

import React, { useMemo, useState } from 'react';
import { Download, Loader2, Mail, MessageCircle, Phone, RefreshCw, Search, Trash2, X } from 'lucide-react';
import type { EnquiryStatus, ServiceRequest } from '@/lib/supabase';
import { telHref, waHref } from '@/lib/site-content';
import { formatDateTime, STATUSES, StatusBadge } from './EnquiriesPanel';
import { Button, inputClass } from './ui';

type Patch = Partial<Pick<ServiceRequest, 'status' | 'admin_notes'>>;

function formatDate(date: string | null) {
  if (!date) return '—';
  return new Date(`${date}T00:00:00`).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

function toCsv(rows: ServiceRequest[]) {
  const cols: (keyof ServiceRequest)[] = [
    'reference_id', 'created_at', 'status', 'name', 'phone', 'email', 'service', 'people', 'preferred_date', 'message', 'admin_notes', 'page_url', 'consent',
  ];
  const esc = (v: unknown) => `"${String(v ?? '').replace(/"/g, '""')}"`;
  return [cols.join(','), ...rows.map((r) => cols.map((c) => esc(r[c])).join(','))].join('\n');
}

export default function ServiceRequestsPanel({ requests, loading, onRefresh, onUpdate, onDelete }: {
  requests: ServiceRequest[];
  loading: boolean;
  onRefresh: () => void;
  onUpdate: (id: string, patch: Patch) => Promise<boolean>;
  onDelete: (id: string) => Promise<boolean>;
}) {
  const [query, setQuery] = useState('');
  const [status, setStatus] = useState<EnquiryStatus | 'All'>('All');
  const [service, setService] = useState('All');
  const services = useMemo(() => [...new Set(requests.map((r) => r.service))].sort(), [requests]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = requests.find((r) => r.id === selectedId) ?? null;

  const counts = useMemo(() => {
    const c: Record<string, number> = { All: requests.length };
    for (const s of STATUSES) c[s] = requests.filter((r) => r.status === s).length;
    return c;
  }, [requests]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return requests.filter((r) => {
      if (status !== 'All' && r.status !== status) return false;
      if (service !== 'All' && r.service !== service) return false;
      if (!q) return true;
      return [r.name, r.phone, r.email, r.reference_id, r.service, r.message].some((v) => v?.toLowerCase().includes(q));
    });
  }, [requests, query, status, service]);

  const exportCsv = () => {
    const blob = new Blob([toCsv(filtered)], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `service-requests-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-[#517362]" />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search name, phone, email, service or reference…" className={`${inputClass} pl-9`} />
        </div>
        <div className="flex gap-2">
          <select value={service} onChange={(e) => setService(e.target.value)} className={`${inputClass} w-auto`} aria-label="Filter by service">
            <option value="All">All services</option>
            {services.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          <Button variant="secondary" onClick={onRefresh} disabled={loading}>
            <RefreshCw className={`h-3.5 w-3.5 ${loading ? 'animate-spin' : ''}`} /> Refresh
          </Button>
          <Button variant="secondary" onClick={exportCsv} disabled={filtered.length === 0}>
            <Download className="h-3.5 w-3.5" /> Export CSV
          </Button>
        </div>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {(['All', ...STATUSES] as const).map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            className={`cursor-pointer rounded-full border px-3 py-1 text-xs font-semibold transition ${
              status === s ? 'border-emerald-700 bg-emerald-700 text-white' : 'border-[#d2e4d9] bg-white text-[#375847] hover:border-emerald-500'
            }`}
          >
            {s} <span className="opacity-70">({counts[s] ?? 0})</span>
          </button>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl border border-[#d2e4d9] bg-white shadow-sm">
        {loading && requests.length === 0 ? (
          <div className="flex items-center justify-center gap-2 p-10 text-sm text-[#517362]">
            <Loader2 className="h-4 w-4 animate-spin" /> Loading service requests…
          </div>
        ) : filtered.length === 0 ? (
          <div className="p-10 text-center text-sm text-[#517362]">
            {requests.length === 0 ? 'No service requests yet. Requests sent from the Service Request Form will appear here.' : 'No service requests match your filters.'}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-[#d2e4d9] bg-[#f4f8f5] text-[11px] font-bold uppercase tracking-wide text-[#517362]">
                <tr>
                  <th className="px-4 py-3">Guest</th>
                  <th className="px-4 py-3">Service</th>
                  <th className="px-4 py-3">People</th>
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3">Received</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e2ede6]">
                {filtered.map((r) => (
                  <tr key={r.id} data-request={r.reference_id} onClick={() => setSelectedId(r.id)} className="cursor-pointer transition hover:bg-[#f4f8f5]">
                    <td className="px-4 py-3">
                      <p className="font-semibold text-[#082318]">{r.name}</p>
                      <p className="font-mono text-xs text-[#517362]">{r.phone}</p>
                    </td>
                    <td className="max-w-[240px] truncate px-4 py-3 text-[#183d2a]">{r.service}</td>
                    <td className="px-4 py-3 text-[#183d2a]">{r.people}</td>
                    <td className="px-4 py-3 text-[#183d2a]">{formatDate(r.preferred_date)}</td>
                    <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
                    <td className="whitespace-nowrap px-4 py-3 text-xs text-[#517362]">{formatDateTime(r.created_at)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {selected && (
        <RequestDrawer
          key={selected.id}
          request={selected}
          onClose={() => setSelectedId(null)}
          onUpdate={onUpdate}
          onDelete={async (id) => {
            if (await onDelete(id)) setSelectedId(null);
          }}
        />
      )}
    </div>
  );
}

function RequestDrawer({ request: r, onClose, onUpdate, onDelete }: {
  request: ServiceRequest;
  onClose: () => void;
  onUpdate: (id: string, patch: Patch) => Promise<boolean>;
  onDelete: (id: string) => void;
}) {
  const [notes, setNotes] = useState(r.admin_notes ?? '');
  const [savingNotes, setSavingNotes] = useState(false);
  const notesDirty = notes !== (r.admin_notes ?? '');

  const rows: [string, React.ReactNode][] = [
    ['Reference', <span key="r" className="font-mono">{r.reference_id}</span>],
    ['Received', formatDateTime(r.created_at)],
    ['Service', r.service],
    ['Number of people', r.people],
    ['Preferred date', formatDate(r.preferred_date)],
    ['Mobile', r.phone],
    ['Email', r.email || '—'],
    ['Submitted on page', r.page_url || '—'],
    ['Consent given', r.consent === null ? '—' : r.consent ? 'Yes' : 'No'],
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/30" onClick={onClose}>
      <aside onClick={(e) => e.stopPropagation()} className="flex h-full w-full max-w-md flex-col bg-white shadow-2xl" aria-label="Service request details">
        <header className="flex items-start justify-between gap-3 border-b border-[#d2e4d9] p-5">
          <div>
            <h3 className="text-lg font-bold text-[#082318]">{r.name}</h3>
            <p className="text-sm text-[#517362]">{r.service}</p>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="cursor-pointer rounded-lg p-1.5 text-[#517362] hover:bg-[#f0f6f2]">
            <X className="h-5 w-5" />
          </button>
        </header>

        <div className="flex-1 space-y-5 overflow-y-auto p-5">
          <div className="grid grid-cols-3 gap-2">
            <a href={waHref(r.phone, `Hello ${r.name}, this is Ranthambore Wild Life Tour regarding your request for ${r.service} (${r.reference_id}).`)} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 rounded-xl border border-emerald-200 bg-emerald-50 p-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={telHref(r.phone)} className="flex flex-col items-center gap-1 rounded-xl border border-[#d2e4d9] bg-white p-2.5 text-xs font-bold text-[#082318] hover:bg-[#f0f6f2]">
              <Phone className="h-4 w-4" /> Call
            </a>
            <a
              href={r.email ? `mailto:${r.email}?subject=${encodeURIComponent(`Your request for ${r.service} (${r.reference_id})`)}` : undefined}
              aria-disabled={!r.email}
              className={`flex flex-col items-center gap-1 rounded-xl border border-[#d2e4d9] bg-white p-2.5 text-xs font-bold text-[#082318] ${r.email ? 'hover:bg-[#f0f6f2]' : 'pointer-events-none opacity-40'}`}
            >
              <Mail className="h-4 w-4" /> Email
            </a>
          </div>

          <label className="block">
            <span className="mb-1 block text-xs font-semibold text-[#183d2a]">Status</span>
            <select value={r.status} onChange={(e) => onUpdate(r.id, { status: e.target.value as EnquiryStatus })} className={inputClass}>
              {STATUSES.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </label>

          <dl className="divide-y divide-[#e2ede6] rounded-xl border border-[#d2e4d9] text-sm">
            {rows.map(([k, v]) => (
              <div key={k} className="flex gap-3 px-3 py-2">
                <dt className="w-32 shrink-0 text-xs font-semibold text-[#517362]">{k}</dt>
                <dd className="min-w-0 break-words text-[#082318]">{v}</dd>
              </div>
            ))}
          </dl>

          {r.message && (
            <div>
              <p className="mb-1 text-xs font-semibold text-[#183d2a]">Message from the guest</p>
              <p className="whitespace-pre-wrap rounded-xl bg-[#f4f8f5] p-3 text-sm text-[#183d2a]">{r.message}</p>
            </div>
          )}

          <div>
            <label className="block">
              <span className="mb-1 block text-xs font-semibold text-[#183d2a]">Internal notes (not visible to guest)</span>
              <textarea rows={4} value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Called back, quote sent, booking confirmed…" className={`${inputClass} resize-y`} />
            </label>
            <div className="mt-2 flex justify-end">
              <Button
                disabled={!notesDirty || savingNotes}
                onClick={async () => {
                  setSavingNotes(true);
                  await onUpdate(r.id, { admin_notes: notes });
                  setSavingNotes(false);
                }}
              >
                {savingNotes && <Loader2 className="h-3.5 w-3.5 animate-spin" />} Save notes
              </Button>
            </div>
          </div>
        </div>

        <footer className="border-t border-[#d2e4d9] p-4">
          <Button
            variant="danger"
            className="w-full"
            onClick={() => confirm(`Permanently delete service request ${r.reference_id} from ${r.name}?`) && onDelete(r.id)}
          >
            <Trash2 className="h-3.5 w-3.5" /> Delete request
          </Button>
        </footer>
      </aside>
    </div>
  );
}
