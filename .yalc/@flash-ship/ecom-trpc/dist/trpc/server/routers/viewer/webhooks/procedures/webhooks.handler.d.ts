export declare const listWebhooks: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const getWebhook: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const availableEvents: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: ("order.created" | "order.status_updated" | "order.checkpoint_added" | "post.created" | "post.updated" | "post.published" | "post.deleted" | "page.created" | "page.updated" | "page.published" | "page.deleted" | "member.registered" | "ping")[];
    meta: object;
}>;
export declare const createWebhook: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const updateWebhook: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const deleteWebhook: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const getWebhookLogs: import("@trpc/server").TRPCQueryProcedure<{
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
//# sourceMappingURL=webhooks.handler.d.ts.map