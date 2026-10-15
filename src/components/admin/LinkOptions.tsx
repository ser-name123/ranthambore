'use client';

import React, { createContext, useContext } from 'react';
import { inputClass } from './ui';

export interface LinkOption {
  label: string;
  href: string;
  group: string;
}

const LinkOptionsContext = createContext<LinkOption[]>([]);

export function LinkOptionsProvider({ options, children }: { options: LinkOption[]; children: React.ReactNode }) {
  return <LinkOptionsContext.Provider value={options}>{children}</LinkOptionsContext.Provider>;
}

/** Choose a page/package from the site, or type a custom URL. */
export function LinkPicker({ label, value, onChange, onPick }: {
  label: string;
  value: string;
  onChange: (href: string) => void;
  /** Called with the chosen option's name, e.g. to fill an empty label. */
  onPick?: (name: string) => void;
}) {
  const options = useContext(LinkOptionsContext);
  const known = options.find((o) => o.href === value);
  const groups = [...new Set(options.map((o) => o.group))];

  return (
    <label className="block">
      <span className="mb-1 block text-xs font-semibold text-[#183d2a]">{label}</span>
      <select
        value={known ? value : '__custom'}
        onChange={(e) => {
          if (e.target.value === '__custom') return onChange(known ? '' : value);
          const opt = options.find((o) => o.href === e.target.value);
          onChange(e.target.value);
          if (opt) onPick?.(opt.label);
        }}
        className={inputClass}
      >
        {groups.map((g) => (
          <optgroup key={g} label={g}>
            {options.filter((o) => o.group === g).map((o) => (
              <option key={o.href} value={o.href}>{o.label} — {o.href}</option>
            ))}
          </optgroup>
        ))}
        <option value="__custom">Custom link (type below)…</option>
      </select>
      {!known && (
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="/page-url, #section or https://…"
          className={`${inputClass} mt-2 font-mono text-xs`}
        />
      )}
    </label>
  );
}
