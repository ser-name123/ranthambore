'use client';

import React from 'react';

/** Select over admin-managed options; a prefilled value not in the list is still shown and kept. */
export function OptionSelect({ value, options, onChange, className }: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
  className: string;
}) {
  const list = value && !options.includes(value) ? [value, ...options] : options;
  return (
    <select value={value} onChange={(e) => onChange(e.target.value)} className={className}>
      {list.map((o) => (
        <option key={o} value={o}>{o}</option>
      ))}
    </select>
  );
}

export function Counter({ value, min, onChange }: { value: number; min: number; onChange: (v: number) => void }) {
  const btn = 'w-7 h-7 rounded-lg bg-white border border-[#d2e4d9] text-[#082318] hover:bg-emerald-50 font-bold transition cursor-pointer';
  return (
    <div className="flex items-center gap-2">
      <button type="button" className={btn} onClick={() => onChange(Math.max(min, value - 1))} aria-label="Decrease">-</button>
      <span className="w-5 text-center font-bold text-[#082318]">{value}</span>
      <button type="button" className={btn} onClick={() => onChange(Math.min(50, value + 1))} aria-label="Increase">+</button>
    </div>
  );
}
