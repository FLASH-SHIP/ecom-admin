export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const rollSecret: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        secret: string;
    };
    meta: object;
}>;
export declare const testWebhook: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const listLogs: import("@trpc/server").TRPCQueryProcedure<{
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