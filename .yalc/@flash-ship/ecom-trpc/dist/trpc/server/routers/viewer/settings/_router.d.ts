export declare const settingsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    getAll: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: Record<string, string | null>;
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            key: string;
        };
        output: string | null;
        meta: object;
    }>;
    getMany: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            keys: string[];
        };
        output: Record<string, string | null>;
        meta: object;
    }>;
    set: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            key: string;
            value: string | null;
        };
        output: {
            key: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            value: string | null;
        };
        meta: object;
    }>;
    bulkSet: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            items: {
                key: string;
                value: string | null;
            }[];
        };
        output: {
            key: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            value: string | null;
        }[];
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            key: string;
        };
        output: {
            key: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            value: string | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map