/**
 * Simple in-memory cache with TTL.
 *
 * Used for rarely-changing data like category trees, settings, and permissions
 * to reduce database round-trips on hot paths.
 */
export declare class MemoryCache<T> {
    private cache;
    private defaultTtlMs;
    constructor(defaultTtlMs?: number);
    get(key: string): T | undefined;
    set(key: string, data: T, ttlMs?: number): void;
    invalidate(key: string): void;
    invalidatePrefix(prefix: string): void;
    clear(): void;
}
/** Shared cache instances — one per data type for isolation. */
export declare const categoryCache: MemoryCache<unknown>;
export declare const settingsCache: MemoryCache<unknown>;
export declare const permissionsCache: MemoryCache<unknown>;
//# sourceMappingURL=cache.d.ts.map