export type RateLimitConfig = {
    maxRequests: number;
    windowSeconds: number;
    key: string;
    enabled?: boolean;
} | null;
/**
 * Dynamic Redis-backed rate limiter middleware for tRPC procedures.
 * Evaluates the limit configuration dynamically at request-time based on context and input.
 */
export declare function dynamicRateLimit(configFn: (ctx: unknown, input: unknown) => RateLimitConfig, prefix?: string): import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
/**
 * Redis-backed rate limiter middleware for tRPC procedures.
 * (Static backwards-compatible wrapper calling dynamicRateLimit)
 */
export declare function rateLimit(maxRequests: number, windowSeconds: number, prefix?: string): import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
/**
 * Pre-configured rate limiters for common use cases.
 */
export declare const rateLimiters: {
    /** Auth endpoints: 10 requests per 15 minutes per IP */
    auth: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
    /** Registration: 5 requests per hour per IP */
    register: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
    /** Public API: 60 requests per minute per IP */
    publicApi: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
    /** Mutations: 30 requests per minute per IP */
    mutation: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
    /** Contact form: 5 submissions per hour per IP */
    contact: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
    /** File upload: 20 uploads per minute per IP */
    upload: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
    /** Search: 30 queries per minute per IP */
    search: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
};
//# sourceMappingURL=rateLimit.d.ts.map