import React from 'react';
import Link from 'next/link';

const GRADIENT = 'text-transparent bg-clip-text bg-gradient-to-r from-emerald-700 via-[#ea580c] to-[#d97706]';

/** Renders "Plain *highlighted* text": words wrapped in single stars get the brand gradient. */
export function Highlight({ text }: { text: string }) {
  const parts = text.split(/\*([^*]+)\*/g);
  return (
    <>
      {parts.map((part, i) => (i % 2 === 1 ? <span key={i} className={GRADIENT}>{part}</span> : part))}
    </>
  );
}

// Inline: **bold** and [label](href)
function inline(text: string, keyPrefix: string): React.ReactNode[] {
  const out: React.ReactNode[] = [];
  const re = /\*\*([^*]+)\*\*|\[([^\]]+)\]\(([^)\s]+)\)/g;
  let last = 0;
  let m: RegExpExecArray | null;
  while ((m = re.exec(text))) {
    if (m.index > last) out.push(text.slice(last, m.index));
    if (m[1]) out.push(<strong key={`${keyPrefix}-${m.index}`} className="font-bold text-[#082318]">{m[1]}</strong>);
    else {
      const href = m[3];
      out.push(
        href.startsWith('/') ? (
          <Link key={`${keyPrefix}-${m.index}`} href={href} className="font-semibold text-emerald-700 hover:underline">{m[2]}</Link>
        ) : (
          <a key={`${keyPrefix}-${m.index}`} href={href} target="_blank" rel="noopener noreferrer" className="font-semibold text-emerald-700 hover:underline">{m[2]}</a>
        )
      );
    }
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(text.slice(last));
  return out;
}

/**
 * Minimal markdown for admin-written text: blank line separates paragraphs,
 * lines starting with "- " are bullets, "### " is a sub-heading, plus **bold** and [links](/path).
 */
export function Markdown({ text, className = '' }: { text: string; className?: string }) {
  const chunks = text.replace(/\r/g, '').split(/\n{2,}/).map((c) => c.trim()).filter(Boolean);
  return (
    <div className={`space-y-3 text-sm leading-relaxed text-[#1b3a2a] sm:text-[15px] ${className}`}>
      {chunks.map((chunk, i) => {
        const lines = chunk.split('\n');
        if (lines.every((l) => /^[-•]\s+/.test(l.trim()))) {
          return (
            <ul key={i} className="space-y-1.5">
              {lines.map((l, j) => (
                <li key={j} className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                  <span>{inline(l.trim().replace(/^[-•]\s+/, ''), `${i}-${j}`)}</span>
                </li>
              ))}
            </ul>
          );
        }
        if (chunk.startsWith('### ')) {
          return <h4 key={i} className="pt-1 font-serif text-lg font-bold text-[#082318]">{chunk.slice(4)}</h4>;
        }
        return (
          <p key={i}>
            {lines.map((l, j) => (
              <React.Fragment key={j}>
                {j > 0 && <br />}
                {inline(l, `${i}-${j}`)}
              </React.Fragment>
            ))}
          </p>
        );
      })}
    </div>
  );
}
