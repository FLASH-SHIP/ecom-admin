/**
 * Shared session cache utilities for Redis-backed NextAuth sessions.
 * Used by both admin and customer auth to avoid duplication.
 */
/** Try to get a cached session payload from Redis */
export declare function getCachedSession(cacheKey: string): Promise<Record<string, unknown> | null>;
/** Cache a session payload in Redis with TTL */
export declare function setCachedSession(cacheKey: string, payload: Record<string, unknown>, ttlSeconds: number): Promise<void>;
/** Invalidate a cached session in Redis */
export declare function invalidateCachedSession(cacheKey: string): Promise<void>;
//# sourceMappingURL=session-cache.d.ts.map