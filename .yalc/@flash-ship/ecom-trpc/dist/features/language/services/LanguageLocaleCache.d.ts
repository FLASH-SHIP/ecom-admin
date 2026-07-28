/**
 * In-memory language locale cache — mirrors Botble's `LanguageLocaleCache` pattern.
 *
 * Caches active languages and default language to avoid repeated DB queries.
 * Invalidated automatically when language CRUD operations occur.
 *
 * This is a singleton cache living in the Node.js process. For multi-process
 * deployments, set a TTL to ensure eventual consistency.
 */
export interface CachedLanguage {
    id: number;
    name: string;
    locale: string;
    code: string;
    flag: string | null;
    isDefault: boolean;
    isActive: boolean;
    isRtl: boolean;
    order: number;
}
type LanguageFetcher = {
    findActive: () => Promise<CachedLanguage[]>;
    findDefault: () => Promise<CachedLanguage | null>;
};
declare class LanguageLocaleCacheImpl {
    private activeLanguages;
    private defaultLanguage;
    private localeToCodeMap;
    private codeToLocaleMap;
    private lastFetchTime;
    private ttlMs;
    private fetcher;
    constructor(ttlMs?: number);
    /** Inject the data fetcher (called once during DI setup) */
    setFetcher(fetcher: LanguageFetcher): void;
    private isStale;
    private ensureLoaded;
    /** Force reload from DB — called on CRUD operations */
    reload(): Promise<void>;
    /** Invalidate all cached data — called after create/update/delete */
    invalidate(): void;
    /** Get all active languages (cached) */
    getActiveLanguages(): Promise<CachedLanguage[]>;
    /** Get the default language (cached) */
    getDefaultLanguage(): Promise<CachedLanguage | null>;
    /** Get default locale code (e.g., "vi") */
    getDefaultLocaleCode(): Promise<string>;
    /**
     * Normalize a locale to its full language code.
     * e.g., "en" → "en_US", "vi" → "vi"
     */
    normalizeLanguageCode(locale: string): Promise<string | null>;
    /**
     * Resolve a full language code to its short locale.
     * e.g., "en_US" → "en", "vi" → "vi"
     */
    resolveToLocale(code: string): Promise<string | null>;
    /** Check if a locale is supported and active */
    isActiveLocale(locale: string): Promise<boolean>;
}
/** Singleton instance */
export declare const LanguageLocaleCache: LanguageLocaleCacheImpl;
export {};
//# sourceMappingURL=LanguageLocaleCache.d.ts.map