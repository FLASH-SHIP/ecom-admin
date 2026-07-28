export declare const healthRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    check: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: import("@ecom/features/health/HealthCheckService").HealthCheckResult;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map