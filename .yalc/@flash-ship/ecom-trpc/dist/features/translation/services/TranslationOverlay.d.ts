/**
 * Translation overlay utilities for public API responses.
 *
 * These functions take an entity (post, category, etc.) and a locale code,
 * then merge translated fields over the original entity — matching Botble's
 * `getTranslatedAttribute()` pattern but applied at the API response level.
 */
type PostLike = {
    id: number;
    title: string;
    slug: string;
    excerpt?: string | null;
    content?: string | null;
    [key: string]: unknown;
};
type CategoryLike = {
    id: number;
    name: string;
    description?: string | null;
    [key: string]: unknown;
};
type TagLike = {
    id: number;
    name: string;
    description?: string | null;
    [key: string]: unknown;
};
/**
 * Overlays translated post fields onto a post object.
 * Returns the original post with translated title, slug, excerpt, content if translation exists.
 */
export declare function overlayPostTranslation<T extends PostLike>(post: T, locale: string | null): Promise<T & {
    _translatedFrom?: string;
}>;
/**
 * Overlays translated fields onto multiple posts in a batch.
 * Uses a single DB query for performance.
 */
export declare function overlayPostTranslations<T extends PostLike>(posts: T[], locale: string | null): Promise<(T & {
    _translatedFrom?: string;
})[]>;
/**
 * Overlays translated category fields.
 */
export declare function overlayCategoryTranslation<T extends CategoryLike>(category: T, locale: string | null): Promise<T & {
    _translatedFrom?: string;
}>;
/**
 * Overlays translated fields onto a category tree (with nested children) in a batch.
 * Collects all IDs across tree depth, fetches translations in one query, then overlays recursively.
 */
export declare function overlayCategoryTranslations<T extends CategoryLike>(categories: T[], locale: string | null): Promise<T[]>;
/**
 * Overlays translated tag fields in a batch.
 */
export declare function overlayTagTranslations<T extends TagLike>(tags: T[], locale: string | null): Promise<(T & {
    _translatedFrom?: string;
})[]>;
type PageLike = {
    id: number;
    title: string;
    slug: string;
    content?: string | null;
    [key: string]: unknown;
};
/**
 * Overlays translated page fields onto a single page.
 * Falls back to default language content when translation doesn't exist.
 */
export declare function overlayPageTranslation<T extends PageLike>(page: T, locale: string | null): Promise<T & {
    _translatedFrom?: string;
}>;
/**
 * Overlays translated page fields in batch (single DB query).
 * Falls back to default language content when translation doesn't exist.
 */
export declare function overlayPageTranslations<T extends PageLike>(pages: T[], locale: string | null): Promise<(T & {
    _translatedFrom?: string;
})[]>;
/**
 * Overlays translated menu item fields in batch.
 * Falls back to default language text when translation doesn't exist.
 */
export declare function overlayMenuItemTranslations<T extends {
    id: number;
    title: string;
    [key: string]: unknown;
}>(items: T[], locale: string | null): Promise<(T & {
    _translatedFrom?: string;
})[]>;
/**
 * Find a post by its translated slug.
 * Resolution order: SlugTranslation → original Slug.
 */
export declare function findPostByTranslatedSlug(slug: string, locale: string | null): Promise<{
    postId: number;
    resolvedLocale: string;
} | null>;
export {};
//# sourceMappingURL=TranslationOverlay.d.ts.map