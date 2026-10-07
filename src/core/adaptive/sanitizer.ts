/**
 * HTML Sanitizer for arbitrary user-provided HTML.
 *
 * Prevents XSS, script injection, iframe exploits, and dangerous attribute handlers
 * while preserving standard structural and semantic HTML tags.
 */
export class HTMLSanitizer {
  private static FORBIDDEN_TAGS = new Set([
    'script',
    'iframe',
    'frame',
    'frameset',
    'object',
    'embed',
    'applet',
    'meta',
    'link',
    'base',
    'template',
    'portal',
    'style', // We control styles through the Style Engine, not arbitrary <style> tags
  ]);

  private static DANGEROUS_URI_SCHEMES = [
    'javascript:',
    'vbscript:',
    'data:text/html',
    'data:application/javascript',
    'data:text/javascript',
    'data:image/svg+xml',
  ];

  /**
   * Cleans a URI string from null bytes, tabs, newlines and spaces to detect obfuscated protocols.
   */
  private static normalizeUri(val: string): string {
    return val
      .replace(/[\u0000-\u001F\u007F-\u009F\s]+/g, '')
      .toLowerCase();
  }

  /**
   * Sanitizes arbitrary HTML string, stripping forbidden tags, inline event handlers,
   * and malicious URIs.
   */
  public static sanitize(rawHtml: string): string {
    if (!rawHtml || typeof rawHtml !== 'string') return '';

    // If running in browser environment with DOMParser available
    if (typeof DOMParser !== 'undefined') {
      try {
        const parser = new DOMParser();
        const doc = parser.parseFromString(rawHtml, 'text/html');

        // 1. Remove all forbidden elements
        this.FORBIDDEN_TAGS.forEach((tag) => {
          const elements = doc.querySelectorAll(tag);
          elements.forEach((el) => el.remove());
        });

        // 2. Sanitize all remaining elements across body and any nested fragments
        const allElements = doc.body.querySelectorAll('*');
        allElements.forEach((el) => {
          const attrs = Array.from(el.attributes);
          for (const attr of attrs) {
            const attrName = attr.name.toLowerCase();

            // Block any event handlers (attributes starting with 'on')
            if (attrName.startsWith('on')) {
              el.removeAttribute(attr.name);
              continue;
            }

            // Block dangerous URI schemes in href, xlink:href, src, action, formaction, data, poster
            if (['href', 'xlink:href', 'src', 'action', 'formaction', 'data', 'poster'].includes(attrName)) {
              const normalized = this.normalizeUri(attr.value);
              if (this.DANGEROUS_URI_SCHEMES.some((scheme) => normalized.startsWith(scheme))) {
                el.removeAttribute(attr.name);
              }
            }
          }
        });

        return doc.body.innerHTML;
      } catch (err) {
        console.warn('[HTMLSanitizer] DOMParser failed, using regex fallback:', err);
      }
    }

    // Regex fallback for non-DOM / Node environments
    let clean = rawHtml;

    // Strip forbidden tags and their contents
    clean = clean.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
    clean = clean.replace(/<script\b[^>]*\/?>/gi, '');
    clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
    clean = clean.replace(/<iframe\b[^>]*\/?>/gi, '');
    clean = clean.replace(/<template\b[^<]*(?:(?!<\/template>)<[^<]*)*<\/template>/gi, '');
    clean = clean.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
    clean = clean.replace(/<embed\b[^>]*\/?>/gi, '');
    clean = clean.replace(/<link\b[^>]*\/?>/gi, '');
    clean = clean.replace(/<meta\b[^>]*\/?>/gi, '');
    clean = clean.replace(/<base\b[^>]*\/?>/gi, '');
    clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    // Strip inline on* handlers (handling whitespace or slash delimiters like <img/onerror=...>)
    clean = clean.replace(/[\s/]on\w+\s*=\s*(?:"[^"]*"|'[^']*'|[^\s>]+)/gi, '');

    // Strip obfuscated and standard javascript:/vbscript:/data:html URIs
    clean = clean.replace(/(?:href|src|action|formaction)\s*=\s*["']\s*(?:javascript|vbscript|data\s*:\s*text\/html)[^"']*["']/gi, 'href="#"');
    clean = clean.replace(/(?:href|src|action|formaction)\s*=\s*(?:javascript|vbscript):[^\s>]+/gi, 'href="#"');

    return clean;
  }
}
