import Redis from "ioredis";
/**
 * Get or create a singleton Redis client.
 * Connection URL can be configured via REDIS_URL env var.
 */
export declare function getRedisClient(): Redis;
/**
 * Disconnect the Redis client gracefully.
 */
export declare function disconnectRedis(): Promise<void>;
/**
 * Redis-backed cache with TTL — drop-in replacement for MemoryCache on hot paths.
 *
 * Serializes values to JSON. For complex types, ensure they are JSON-serializable.
 */
export declare class RedisCache<T> {
    private prefix;
    private defaultTtlSeconds;
    constructor(prefix: string, defaultTtlSeconds?: number);
    private key;
    get(key: string): Promise<T | undefined>;
    set(key: string, data: T, ttlSeconds?: number): Promise<void>;
    invalidate(key: string): Promise<void>;
    /**
     * Invalidate all keys matching a prefix using cursor-based SCAN.
     * SCAN is non-blocking unlike KEYS which does a full O(N) scan (PERF-01).
     */
    invalidatePrefix(prefix: string): Promise<void>;
    /**
     * Clear all keys for this cache namespace using cursor-based SCAN (PERF-01).
     */
    clear(): Promise<void>;
}
/**
 * Redis-backed sliding window rate limiter.
 *
 * Uses sorted sets for precise sliding window counting.
 *
 * Usage:
 *   const limiter = new RedisRateLimiter("api", 100, 60);
 *   const { allowed, remaining, resetIn } = await limiter.check(clientIp);
 */
export declare class RedisRateLimiter {
    private prefix;
    private maxRequests;
    private windowSeconds;
    constructor(prefix: string, maxRequests: number, windowSeconds: number);
    private key;
    /**
     * Check rate limit for an identifier.
     * Optimized: checks count BEFORE adding entry to avoid
     * unnecessary add+remove for rejected requests (PERF-05).
     */
    check(identifier: string): Promise<{
        allowed: boolean;
        remaining: number;
        resetIn: number;
        total: number;
    }>;
    reset(identifier: string): Promise<void>;
}
//# sourceMappingURL=redis.d.ts.map