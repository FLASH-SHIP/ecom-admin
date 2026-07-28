import { ZodError } from "zod";
import type { Context } from "./createContext";
export interface ZodErrorDetail {
    field: string;
    issue: string;
    message: string;
}
export declare function formatZodError(error: ZodError, locale: string | null | undefined): {
    message: string;
    details: ZodErrorDetail[];
};
export declare const router: import("@trpc/server").TRPCRouterBuilder<{
    ctx: Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}>;
export declare const publicProcedure: import("@trpc/server").TRPCProcedureBuilder<Context, object, object, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, import("@trpc/server").TRPCUnsetMarker, false>;
export declare const middleware: <$ContextOverrides>(fn: import("@trpc/server").TRPCMiddlewareFunction<Context, object, object, $ContextOverrides, unknown>) => import("@trpc/server").TRPCMiddlewareBuilder<Context, object, $ContextOverrides, unknown>;
export declare const createCallerFactory: import("@trpc/server").TRPCRouterCallerFactory<{
    ctx: Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}>;
//# sourceMappingURL=init.d.ts.map