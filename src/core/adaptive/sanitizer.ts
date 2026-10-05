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
    'object',
    'embed',
    'applet',
    'meta',
    'link',
    'base',
    'style', // We control styles through the Style Engine, not arbitrary <style> tags
  ]);

  private static DANGEROUS_URI_SCHEMES = [
    'javascript:',
    'vbscript:',
    'data:text/html',
    'data:application/javascript',
  ];

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

        // 2. Sanitize all remaining elements
        const allElements = doc.body.querySelectorAll('*');
        allElements.forEach((el) => {
          // Remove all inline event handlers (attributes starting with 'on')
          const attrs = Array.from(el.attributes);
          for (const attr of attrs) {
            const attrName = attr.name.toLowerCase();

            // Block event handlers (onclick, onload, onerror, etc.)
            if (attrName.startsWith('on')) {
              el.removeAttribute(attr.name);
              continue;
            }

            // Block dangerous URI schemes in href, src, action, formaction
            if (['href', 'src', 'action', 'formaction'].includes(attrName)) {
              const val = attr.value.trim().toLowerCase();
              if (this.DANGEROUS_URI_SCHEMES.some((scheme) => val.startsWith(scheme))) {
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
    clean = clean.replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, '');
    clean = clean.replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, '');
    clean = clean.replace(/<embed\b[^>]*>/gi, '');
    clean = clean.replace(/<link\b[^>]*>/gi, '');
    clean = clean.replace(/<meta\b[^>]*>/gi, '');
    clean = clean.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '');

    // Strip inline on* handlers
    clean = clean.replace(/\son\w+\s*=\s*["'][^"']*["']/gi, '');
    clean = clean.replace(/\son\w+\s*=\s*[^\s>]+/gi, '');

    // Strip javascript: URIs
    clean = clean.replace(/href\s*=\s*["']\s*javascript:[^"']*["']/gi, 'href="#"');
    clean = clean.replace(/src\s*=\s*["']\s*javascript:[^"']*["']/gi, 'src=""');

    return clean;
  }
}
