export declare const customerApiKeysRouter: import("@trpc/server").TRPCBuiltRouter<{
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
        input: void;
        output: {
            id: string;
            ownerId: string;
            ownerType: string;
            maskedKey: string;
            label: string | null;
            allowedIps: string[];
            expiresAt: Date | null;
            lastUsedAt: Date | null;
            createdAt: Date;
        }[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            label?: string | null | undefined;
            expiresAt?: Date | null | undefined;
            allowedIps?: string[] | null | undefined;
        };
        output: {
            rawKey: string;
            maskedKey: string;
        };
        meta: object;
    }>;
    revoke: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
}>>;
export type CustomerApiKeysRouter = typeof customerApiKeysRouter;
//# sourceMappingURL=_router.d.ts.map