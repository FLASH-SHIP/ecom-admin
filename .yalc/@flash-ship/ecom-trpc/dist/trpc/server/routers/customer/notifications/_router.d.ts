export declare const customerNotificationsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            page?: number | undefined;
            perPage?: number | undefined;
            unreadOnly?: boolean | undefined;
            cursor?: number | undefined;
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
    unreadCount: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: number;
        meta: object;
    }>;
    markRead: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    markAllRead: import("@trpc/server").TRPCMutationProcedure<{
        input: void;
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    registerToken: import("@trpc/server").TRPCMutationProcedure<{
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
    unregisterToken: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            token: string;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    getPreferences: import("@trpc/server").TRPCQueryProcedure<{
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
    updatePreference: import("@trpc/server").TRPCMutationProcedure<{
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
}>>;
export type CustomerNotificationsRouter = typeof customerNotificationsRouter;
//# sourceMappingURL=_router.d.ts.map