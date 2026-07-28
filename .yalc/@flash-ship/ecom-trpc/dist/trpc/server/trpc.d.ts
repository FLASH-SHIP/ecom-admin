import { createCallerFactory, middleware, publicProcedure, router } from "./init";
export { createCallerFactory, middleware, publicProcedure, router };
/**
 * Protected procedure — requires authentication.
 */
export declare const authedProcedure: import("@trpc/server").TRPCProcedureBuilder<import("./createContext").Context, object, {
    user: import("@flash-ship/ecom-types").AuthUser;
    ip: string | null;
    userAgent: string | null;
    locale: string | null;
    sessionToken: string | null;
}, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, false>;
export { requirePermission } from "./middleware/requirePermission";
//# sourceMappingURL=trpc.d.ts.map