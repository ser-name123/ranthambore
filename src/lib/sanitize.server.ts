import { FilterXSS, escapeAttrValue } from 'xss';
import { isHtml } from './rich-text';

const COLOR = /^(#[0-9a-f]{3,8}|rgba?\([\d\s.,%]+\)|[a-z]+)$/i;
const SIZE = /^\d+(px|%)$/;
const STYLED = ['style'];
const CELL = ['colspan', 'rowspan', 'colwidth', 'style'];

// Only what the admin text editor can produce.
const filter = new FilterXSS({
  whiteList: {
    p: STYLED, br: [], strong: [], b: [], em: [], i: [], u: [], s: [], del: [], mark: ['style', 'data-color'], span: STYLED,
    a: ['href', 'target'], ul: [], ol: [], li: STYLED, h2: STYLED, h3: STYLED, h4: STYLED, blockquote: [], hr: [],
    code: [], pre: [], sub: [], sup: [], table: STYLED, thead: [], tbody: [], tr: [], th: CELL, td: CELL, colgroup: [], col: STYLED,
    img: ['src', 'alt', 'title', 'width', 'height'],
  },
  stripIgnoreTag: true, // unknown tags are removed, their text kept
  stripIgnoreTagBody: ['script', 'style', 'iframe', 'object', 'embed'],
  allowCommentTag: false,
  css: {
    whiteList: {
      color: (v: string) => COLOR.test(v.trim()),
      'background-color': (v: string) => COLOR.test(v.trim()),
      'text-align': (v: string) => /^(left|right|center|justify)$/.test(v.trim()),
      width: (v: string) => SIZE.test(v.trim()),
      'min-width': (v: string) => SIZE.test(v.trim()),
    },
  },
  onTagAttr(tag, name, value) {
    if (tag === 'a' && name === 'href') {
      const href = value.trim();
      const ok = /^(https?:|mailto:|tel:)/i.test(href) || (href.startsWith('/') && !href.startsWith('//')) || href.startsWith('#');
      return ok ? `href="${escapeAttrValue(href)}"` : '';
    }
    if (tag === 'a' && name === 'target') return value === '_blank' ? 'target="_blank"' : '';
    if (tag === 'img' && name === 'src') {
      const src = value.trim();
      return /^https:\/\//i.test(src) || (src.startsWith('/') && !src.startsWith('//')) ? `src="${escapeAttrValue(src)}"` : '';
    }
    return undefined; // default handling (whitelist + safe values)
  },
});

/** Cleans editor HTML; external links and "new tab" links get target="_blank" rel="noopener noreferrer". */
export function sanitizeHtml(html: string): string {
  return filter.process(html).replace(/<a ([^>]*)>/gi, (_, attrs: string) => {
    const external = /href="https?:\/\//i.test(attrs);
    const clean = attrs.replace(/\s*target="_blank"/i, '').trim();
    return external || /target="_blank"/i.test(attrs) ? `<a ${clean} target="_blank" rel="noopener noreferrer">` : `<a ${clean}>`;
  });
}

// Raw file contents edited in the admin; never treated as HTML.
const RAW_FIELDS = new Set(['robotsCustom', 'sitemapCustom', 'whatsappTemplate']);

/** Sanitises every rich-text (HTML) string inside a content document before it is stored. */
export function sanitizeRichContent<T>(value: T, fieldName = ''): T {
  if (typeof value === 'string') {
    return (!RAW_FIELDS.has(fieldName) && isHtml(value) ? sanitizeHtml(value) : value) as T;
  }
  if (Array.isArray(value)) return value.map((v) => sanitizeRichContent(v, fieldName)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, sanitizeRichContent(v, k)])) as T;
  }
  return value;
}
