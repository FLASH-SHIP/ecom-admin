export declare const customerWebhooksRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            name: string;
            id: number;
            createdAt: Date;
            _count: {
                logs: number;
            };
            isActive: boolean;
            url: string;
            secret: string | null;
            oldSecret: string | null;
            secretUpdatedAt: Date | null;
            events: string[];
            retries: number;
            timeout: number;
            ownerId: string | null;
            ownerType: string | null;
            failureCount: number;
            apiVersion: string;
        }[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            url: string;
            events: string[];
            apiVersion?: string | undefined;
        };
        output: {
            name: string;
            id: number;
            secret: string | null;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    rollSecret: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            secret: string;
        };
        meta: object;
    }>;
    testWebhook: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    listLogs: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            webhookId: number;
        };
        output: {
            error: string | null;
            id: number;
            createdAt: Date;
            statusCode: number | null;
            attempts: number;
            event: string;
            payload: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            response: string | null;
            success: boolean;
        }[];
        meta: object;
    }>;
}>>;
export type CustomerWebhooksRouter = typeof customerWebhooksRouter;
//# sourceMappingURL=_router.d.ts.map