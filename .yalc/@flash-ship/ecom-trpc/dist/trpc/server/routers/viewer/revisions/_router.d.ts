export declare const revisionsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            referenceId: number;
            referenceType: "page" | "post";
        };
        output: {
            id: number;
            createdAt: Date;
            title: string;
            author: {
                id: string;
                name: string | null;
            };
            note: string | null;
        }[];
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            referenceId: number;
            referenceType: string;
            title: string;
            content: string | null;
            author: {
                id: string;
                name: string | null;
            };
            note: string | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map