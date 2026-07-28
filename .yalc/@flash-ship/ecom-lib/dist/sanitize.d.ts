/**
 * Input sanitization utilities for CMS content.
 *
 * Protects against XSS in user-submitted content (comments, contact forms,
 * post titles, excerpts). Does NOT sanitize rich HTML content body (that's
 * handled by the editor's built-in sanitizer).
 *
 * Inspired by Laravel's `strip_tags` + `e()` helpers.
 */
/**
 * Strip all HTML tags from a string.
 * Use for: titles, names, slugs, excerpts, search queries.
 */
export declare function stripTags(input: string): string;
/**
 * Escape HTML entities to prevent XSS.
 * Use for: rendering user content in non-rich-text contexts.
 */
export declare function escapeHtml(input: string): string;
/**
 * Remove potentially dangerous attributes from HTML (SEC-08: hardened).
 * Strips: event handlers, javascript:/vbscript: protocols, data: URIs,
 * expression() in styles, null bytes, and dangerous tags.
 *
 * For rich-text editor content that must preserve safe HTML formatting,
 * prefer `sanitizeRichHtml()` which uses a whitelist approach.
 */
export declare function sanitizeHtml(input: string): string;
/**
 * Whitelist-based HTML sanitizer for rich-text editor content.
 * Only allows safe HTML tags and attributes, stripping everything else.
 *
 * For maximum security with rich HTML, consider adding the `isomorphic-dompurify`
 * package and using: `DOMPurify.sanitize(input)` instead of this function.
 */
export declare function sanitizeRichHtml(input: string): string;
/**
 * Sanitize a plain-text input: trim, strip tags, normalize whitespace.
 * Use for: titles, names, subjects.
 */
export declare function sanitizePlainText(input: string): string;
/**
 * Sanitize a slug: lowercase, alphanumeric + hyphens only.
 */
export declare function sanitizeSlug(input: string): string;
/**
 * Sanitize an email address: trim, lowercase.
 */
export declare function sanitizeEmail(input: string): string;
/**
 * Sanitize a search query: strip tags, limit length, trim.
 */
export declare function sanitizeSearchQuery(input: string, maxLength?: number): string;
/**
 * Sanitize a URL: basic validation + trim.
 */
export declare function sanitizeUrl(input: string): string | null;
//# sourceMappingURL=sanitize.d.ts.map