export declare const contentLocksRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("../../..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../../../init").ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    acquire: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "page" | "post";
            entityId: number;
        };
        output: {
            acquired: boolean;
            lock: import("@ecom/features/content-lock/ContentLockService").ContentLock;
        };
        meta: object;
    }>;
    release: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "page" | "post";
            entityId: number;
        };
        output: boolean;
        meta: object;
    }>;
    check: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "page" | "post";
            entityId: number;
        };
        output: import("@ecom/features/content-lock/ContentLockService").ContentLock | null;
        meta: object;
    }>;
    heartbeat: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "page" | "post";
            entityId: number;
        };
        output: boolean;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map