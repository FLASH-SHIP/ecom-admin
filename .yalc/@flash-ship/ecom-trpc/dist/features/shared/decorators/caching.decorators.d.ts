export interface CacheOptions {
    /**
     * Custom key generator function that maps method arguments to a string.
     */
    keyMap?: (...args: any[]) => string;
}
/**
 * Cacheable decorator - Cache method return value.
 * Uses responseCache.remember under the hood.
 * Cache key pattern: `${prefix}:${args.join(':')}`
 */
export declare function Cacheable(prefix: string, ttlMs: number, options?: CacheOptions): (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
export interface EvictOptions {
    /**
     * Custom key generator function that maps method arguments to a string.
     */
    keyMap?: (...args: any[]) => string;
}
/**
 * CacheEvict decorator - Invalidate cache key or pattern.
 */
export declare function CacheEvict(prefix: string, evictAll?: boolean, options?: EvictOptions): (_target: unknown, _propertyKey: string, descriptor: PropertyDescriptor) => PropertyDescriptor;
//# sourceMappingURL=caching.decorators.d.ts.map