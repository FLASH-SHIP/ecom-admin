/**
 * Middleware factory that enforces one or more permissions on the current user.
 *
 * Usage:
 *   authedProcedure.use(requirePermission("blog.posts.create")).mutation(...)
 *
 * The user must have **all** listed permissions. If any is missing, a FORBIDDEN
 * error is thrown immediately — the handler never executes.
 */
export declare function requirePermission(...permissions: string[]): import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, {
    user: import("@flash-ship/ecom-types").AuthUser;
    locale: string | null;
    sessionToken: string | null;
    userAgent: string | null;
    ip: string | null;
}, unknown>;
//# sourceMappingURL=requirePermission.d.ts.map