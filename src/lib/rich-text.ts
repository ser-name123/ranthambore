// Helpers for admin text fields. A field holds either rich HTML (from the admin's text editor)
// or older plain text / simple markdown. Safe to import from server and client code.

const HTML_TAG = /<\/?(p|br|strong|b|em|i|u|s|del|mark|span|a|ul|ol|li|h[1-6]|blockquote|table|thead|tbody|tr|td|th|img|hr|code|pre|sub|sup|div)\b[^>]*>/i;

/** True when the text was written with the rich text editor. */
export function isHtml(text: string | null | undefined): boolean {
  return !!text && HTML_TAG.test(text);
}

const escapeHtml = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

function inlineMarkdown(s: string): string {
  return escapeHtml(s)
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, (_, label, href) => `<a href="${href}">${label}</a>`);
}

/**
 * Converts the old simple markdown (blank line = paragraph, "- " bullets, "### " sub-heading,
 * **bold**, [link](url)) to HTML, so existing text opens formatted in the editor.
 */
export function markdownToHtml(text: string): string {
  if (!text) return '';
  if (isHtml(text)) return text;
  return text
    .replace(/\r/g, '')
    .split(/\n{2,}/)
    .map((chunk) => chunk.trim())
    .filter(Boolean)
    .map((chunk) => {
      const lines = chunk.split('\n');
      if (lines.every((l) => /^[-•]\s+/.test(l.trim()))) {
        return `<ul>${lines.map((l) => `<li><p>${inlineMarkdown(l.trim().replace(/^[-•]\s+/, ''))}</p></li>`).join('')}</ul>`;
      }
      if (chunk.startsWith('### ')) return `<h3>${inlineMarkdown(chunk.slice(4))}</h3>`;
      return `<p>${lines.map(inlineMarkdown).join('<br>')}</p>`;
    })
    .join('');
}

/** Plain text for places that cannot show formatting (meta tags, structured data, previews). */
export function toPlainText(text: string | null | undefined): string {
  if (!text) return '';
  const withoutTags = isHtml(text)
    ? text.replace(/<(br|\/p|\/li|\/h[1-6]|\/tr)\s*\/?>/gi, ' ').replace(/<[^>]+>/g, '')
    : text.replace(/\*\*|\*/g, '').replace(/\[([^\]]+)\]\([^)]+\)/g, '$1');
  return withoutTags
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

/** The editor's empty document. */
export function isEmptyHtml(html: string): boolean {
  return !html || /^(<p>(\s|&nbsp;|<br\s*\/?>)*<\/p>)*$/i.test(html.trim());
}
