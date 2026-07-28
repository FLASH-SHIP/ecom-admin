export declare const listNotifications: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        page?: number | undefined;
        perPage?: number | undefined;
        unreadOnly?: boolean | undefined;
        cursor?: number | undefined;
    } | undefined;
    output: {
        items: {
            type: string;
            link: string | null;
            id: number;
            createdAt: Date;
            titleKey: string;
            messageKey: string;
            variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            isRead: boolean;
            isSensitive: boolean;
            deliveryClass: string;
            sentAt: Date | null;
            deliveredAt: Date | null;
            clickedAt: Date | null;
        }[];
        nextCursor: number | undefined;
    } | {
        items: {
            type: string;
            link: string | null;
            id: number;
            createdAt: Date;
            titleKey: string;
            messageKey: string;
            variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            isRead: boolean;
            isSensitive: boolean;
            deliveryClass: string;
        }[];
        total: number;
        page: number;
        perPage: number;
    };
    meta: object;
}>;
export declare const unreadCount: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: number;
    meta: object;
}>;
export declare const markRead: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const markAllRead: import("@trpc/server").TRPCMutationProcedure<{
    input: void;
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const deleteNotification: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const registerToken: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        token: string;
        platform: string;
        deviceInfo?: string | undefined;
    };
    output: {
        userId: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        token: string;
        platform: string;
        deviceInfo: string | null;
    };
    meta: object;
}>;
export declare const unregisterToken: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        token: string;
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const getPreferences: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        eventType: string;
        category: "order" | "system" | "blog" | "account" | "wallet";
        labelKey: string;
        descriptionKey: string;
        channels: {
            inApp: {
                value: boolean;
                mandatory: boolean;
            };
            push: {
                value: boolean;
                mandatory: boolean;
            };
            email: {
                value: boolean;
                mandatory: boolean;
            };
            webhook: {
                value: boolean;
                mandatory: boolean;
            };
        };
        dndConfig: string | number | true | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonObject | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonArray | null;
    }[];
    meta: object;
}>;
export declare const updatePreference: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        eventType: string;
        channels: {
            inApp?: boolean | undefined;
            push?: boolean | undefined;
            email?: boolean | undefined;
            webhook?: boolean | undefined;
        };
        dndConfig?: Record<string, any> | undefined;
    };
    output: {
        userId: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        eventType: string;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        channelWebhook: boolean;
        dndConfig: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
    };
    meta: object;
}>;
//# sourceMappingURL=notifications.handler.d.ts.map