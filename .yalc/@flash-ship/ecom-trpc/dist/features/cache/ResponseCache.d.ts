/**
 * In-memory response cache for frequently accessed, rarely-changing data.
 *
 * Inspired by Laravel's Cache facade with TTL support.
 * Suitable for: settings, categories, tags, feature flags, templates.
 *
 * ⚠️  PERF-02: SINGLE-INSTANCE LIMITATION
 * This cache is process-local (JavaScript Map). In multi-instance deployments:
 * - Each instance maintains its own cache → data inconsistency
 * - Invalidation only clears the local instance → stale data on others
 * - Memory usage is duplicated across instances
 *
 * For multi-instance production deployments, use RedisCache from @ecom/lib/redis
 * instead for any data that requires cross-instance consistency.
 *
 * Current deployment: single-instance (acceptable).
 * TODO: Migrate to RedisCache when scaling to multiple instances.
 */
declare class ResponseCache {
    private cache;
    private hitCount;
    private missCount;
    private readonly maxSize;
    private pruneCounter;
    constructor(maxSize?: number);
    /**
     * Get a cached value or compute it if missing/expired.
     *
     * @param key - Unique cache key
     * @param ttlMs - Time-to-live in milliseconds
     * @param factory - Async function to compute the value on miss
     */
    remember<T>(key: string, ttlMs: number, factory: () => Promise<T>): Promise<T>;
    /**
     * Invalidate a specific cache key or pattern.
     */
    forget(key: string): void;
    /**
     * Invalidate all keys matching a prefix.
     * Example: forgetByPrefix("categories:") clears all category caches.
     */
    forgetByPrefix(prefix: string): number;
    /**
     * Clear the entire cache.
     */
    flush(): void;
    /**
     * Get cache statistics for monitoring.
     */
    stats(): {
        size: number;
        hits: number;
        misses: number;
        hitRate: string;
    };
    /**
     * Remove expired entries (garbage collection).
     */
    prune(): number;
}
export declare const responseCache: ResponseCache;
export declare const CacheTTL: {
    readonly SHORT: number;
    readonly MEDIUM: number;
    readonly LONG: number;
    readonly HOUR: number;
    readonly DAY: number;
};
export declare const CacheKeys: {
    readonly SETTINGS: "settings";
    readonly CATEGORIES: "categories:list";
    readonly TAGS: "tags:list";
    readonly FEATURE_FLAGS: "flags:";
    readonly TEMPLATES: "templates:list";
    readonly MENUS: "menus:";
    readonly PUBLIC_POST: "public:post:";
    readonly PUBLIC_PAGE: "public:page:";
};
export {};
//# sourceMappingURL=ResponseCache.d.ts.map