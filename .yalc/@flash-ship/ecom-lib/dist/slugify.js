"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slugify = slugify;
/**
 * Convert a string to a URL-safe slug.
 * Transliterates Vietnamese diacritics and other non-Latin characters.
 */
function slugify(input) {
    return input
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[đ]/g, "d")
        .replace(/[Đ]/g, "d")
        .replace(/[^a-z0-9\s-]/g, "")
        .replace(/\s+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, "")
        .trim();
}
