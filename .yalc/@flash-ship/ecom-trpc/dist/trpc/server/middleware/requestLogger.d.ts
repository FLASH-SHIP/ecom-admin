/**
 * Structured request/response logging middleware for tRPC procedures.
 *
 * Logs: procedure path, execution time, user ID, status.
 * Does NOT log request/response bodies to avoid PII exposure.
 *
 * Disable via LOG_REQUESTS=false in .env for zero overhead.
 *
 * Inspired by Laravel's request logging and Morgan-style logging.
 */
export declare const requestLogger: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
/**
 * Verbose request logger — logs ALL requests including queries.
 * Use only in development or for debugging specific issues.
 */
export declare const verboseRequestLogger: import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, object, unknown>;
//# sourceMappingURL=requestLogger.d.ts.map