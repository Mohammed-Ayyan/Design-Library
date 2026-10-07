/**
 * HTML Sanitizer for arbitrary user-provided HTML.
 *
 * Prevents XSS, script injection, iframe exploits, and dangerous attribute handlers
 * while preserving standard structural and semantic HTML tags.
 */
export declare class HTMLSanitizer {
    private static FORBIDDEN_TAGS;
    private static DANGEROUS_URI_SCHEMES;
    /**
     * Cleans a URI string from null bytes, tabs, newlines and spaces to detect obfuscated protocols.
     */
    private static normalizeUri;
    /**
     * Sanitizes arbitrary HTML string, stripping forbidden tags, inline event handlers,
     * and malicious URIs.
     */
    static sanitize(rawHtml: string): string;
}
