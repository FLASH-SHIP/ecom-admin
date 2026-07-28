export declare const notificationsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            search?: string | undefined;
            type?: string | undefined;
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
    unreadCount: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: number;
        meta: object;
    }>;
    markRead: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            read?: boolean | undefined;
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
    listTemplates: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            type: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
    updateTemplate: import("@trpc/server").TRPCMutationProcedure<{
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
            type: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
    sendTestTemplate: import("@trpc/server").TRPCMutationProcedure<{
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
    resetTemplate: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            type: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
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
    listScheduled: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: {
            items: {
                message: string;
                status: string;
                link: string | null;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                title: string;
                scheduledAt: Date;
                targetType: string;
                targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
                failedReason: string | null;
                templateId: number | null;
            }[];
            total: number;
        };
        meta: object;
    }>;
    createScheduled: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            targetType: string;
            title: string;
            message: string;
            scheduledAt: unknown;
            targetIds?: string[] | undefined;
            link?: string | null | undefined;
        };
        output: {
            message: string;
            status: string;
            link: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            scheduledAt: Date;
            targetType: string;
            targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            failedReason: string | null;
            templateId: number | null;
        };
        meta: object;
    }>;
    deleteScheduled: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            message: string;
            status: string;
            link: string | null;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            title: string;
            scheduledAt: Date;
            targetType: string;
            targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            failedReason: string | null;
            templateId: number | null;
        };
        meta: object;
    }>;
    previewTemplate: import("@trpc/server").TRPCQueryProcedure<{
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
    testDispatch: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            templateId: number;
            variables: Record<string, any>;
            emailRecipient: string;
            locale?: string | undefined;
        };
        output: {
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
        } | null;
        meta: object;
    }>;
    blacklist: import("@trpc/server").TRPCBuiltRouter<{
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
                search?: string | undefined;
            };
            output: {
                items: {
                    email: string;
                    id: number;
                    createdAt: Date;
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
        add: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
                reason: string;
            };
            output: {
                email: string;
                id: number;
                createdAt: Date;
                reason: string;
            };
            meta: object;
        }>;
        addBulk: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                entries: {
                    email: string;
                    reason: string;
                }[];
            };
            output: void;
            meta: object;
        }>;
        remove: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
            };
            output: void;
            meta: object;
        }>;
        removeBulk: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                emails: string[];
            };
            output: void;
            meta: object;
        }>;
        updateReason: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                email: string;
                reason: string;
            };
            output: {
                email: string;
                id: number;
                createdAt: Date;
                reason: string;
            };
            meta: object;
        }>;
        syncCache: import("@trpc/server").TRPCMutationProcedure<{
            input: {
                emails: string[];
            };
            output: void;
            meta: object;
        }>;
    }>>;
}>>;
//# sourceMappingURL=_router.d.ts.map