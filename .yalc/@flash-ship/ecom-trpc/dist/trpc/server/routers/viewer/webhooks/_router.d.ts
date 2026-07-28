export declare const webhooksRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
        };
        meta: object;
    }>;
    availableEvents: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: ("order.created" | "order.status_updated" | "order.checkpoint_added" | "post.created" | "post.updated" | "post.published" | "post.deleted" | "page.created" | "page.updated" | "page.published" | "page.deleted" | "member.registered" | "ping")[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            url: string;
            events: string[];
            secret?: string | undefined;
            retries?: number | undefined;
            timeout?: number | undefined;
        };
        output: {
            name: string;
            id: number;
            secret: string | null;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            name?: string | undefined;
            url?: string | undefined;
            secret?: string | undefined;
            events?: string[] | undefined;
            isActive?: boolean | undefined;
            retries?: number | undefined;
            timeout?: number | undefined;
        };
        output: {
            name: string;
            id: number;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
        };
        meta: object;
    }>;
    logs: import("@trpc/server").TRPCQueryProcedure<{
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
//# sourceMappingURL=_router.d.ts.map