export declare const listNotifications: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        page?: number | undefined;
        perPage?: number | undefined;
        unreadOnly?: boolean | undefined;
        cursor?: number | undefined;
        search?: string | undefined;
        type?: string | undefined;
    } | undefined;
    output: {
        items: {
            link: string | null;
            id: number;
            createdAt: Date;
            type: string;
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
            link: string | null;
            id: number;
            createdAt: Date;
            type: string;
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
        read?: boolean | undefined;
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        deviceInfo: string | null;
        customerId: string | null;
        token: string;
        platform: string;
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
        category: "order" | "account" | "system" | "blog" | "wallet";
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
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
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
export declare const listTemplates: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        layoutType: string | null;
    }[];
    meta: object;
}>;
export declare const updateTemplate: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        titleTemplate?: Record<string, string> | undefined;
        messageTemplate?: Record<string, string> | undefined;
        emailSubjectTemplate?: Record<string, string> | undefined;
        emailBodyTemplate?: Record<string, string> | undefined;
        variables?: Record<string, string> | undefined;
        channelInApp?: boolean | undefined;
        channelPush?: boolean | undefined;
        channelEmail?: boolean | undefined;
        layoutType?: string | null | undefined;
    };
    output: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        layoutType: string | null;
    };
    meta: object;
}>;
export declare const resetTemplate: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        layoutType: string | null;
    };
    meta: object;
}>;
export declare const sendTestTemplate: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        emailRecipient: string;
        variables?: Record<string, any> | undefined;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const listScheduled: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        items: {
            link: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            status: string;
            scheduledAt: Date;
            message: string;
            targetType: string;
            targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            failedReason: string | null;
            templateId: number | null;
        }[];
        total: number;
    };
    meta: object;
}>;
export declare const createScheduled: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        targetType: string;
        title: string;
        message: string;
        scheduledAt: unknown;
        targetIds?: string[] | undefined;
        link?: string | null | undefined;
    };
    output: {
        link: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    };
    meta: object;
}>;
export declare const deleteScheduled: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        link: string | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    };
    meta: object;
}>;
export declare const previewTemplate: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        variables: Record<string, any>;
        type?: string | undefined;
        templateId?: number | undefined;
        customEmailBody?: string | undefined;
        customEmailSubject?: string | undefined;
        locale?: string | undefined;
    };
    output: {
        subject: string;
        html: string;
        text: string;
    };
    meta: object;
}>;
export declare const testDispatch: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        templateId: number;
        variables: Record<string, any>;
        emailRecipient: string;
        locale?: string | undefined;
    };
    output: {
        link: string | null;
        id: number;
        createdAt: Date;
        type: string;
        titleKey: string;
        messageKey: string;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        isRead: boolean;
        isSensitive: boolean;
        deliveryClass: string;
    } | null;
    meta: object;
}>;
export declare const listBlacklist: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        page?: number | undefined;
        perPage?: number | undefined;
        search?: string | undefined;
    };
    output: {
        items: {
            id: number;
            createdAt: Date;
            email: string;
            reason: string;
        }[];
        total: number;
        page: number;
        perPage: number;
        stats: {
            bounce: number;
            complaint: number;
            manual: number;
        };
    };
    meta: object;
}>;
export declare const addToBlacklist: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
        reason: string;
    };
    output: {
        id: number;
        createdAt: Date;
        email: string;
        reason: string;
    };
    meta: object;
}>;
export declare const addToBlacklistBulk: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entries: {
            email: string;
            reason: string;
        }[];
    };
    output: void;
    meta: object;
}>;
export declare const removeFromBlacklist: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
    };
    output: void;
    meta: object;
}>;
export declare const removeFromBlacklistBulk: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        emails: string[];
    };
    output: void;
    meta: object;
}>;
export declare const updateBlacklistReason: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
        reason: string;
    };
    output: {
        id: number;
        createdAt: Date;
        email: string;
        reason: string;
    };
    meta: object;
}>;
export declare const syncCacheBulk: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        emails: string[];
    };
    output: void;
    meta: object;
}>;
//# sourceMappingURL=notifications.handler.d.ts.map