export declare const systemRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    requestLogs: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            filters?: {
                fieldKey: string;
                operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
                value: string;
                value2?: string | undefined;
            }[] | undefined;
            search?: string | undefined;
            page?: number | undefined;
            pageSize?: number | undefined;
            sortBy?: "duration" | "id" | "createdAt" | "statusCode" | undefined;
            sortDir?: "asc" | "desc" | undefined;
        };
        output: {
            items: {
                url: string;
                user: {
                    email: string;
                    id: string;
                    name: string | null;
                } | null;
                userAgent: string | null;
                duration: number | null;
                id: number;
                createdAt: Date;
                ipAddress: string | null;
                statusCode: number | null;
                method: string;
                referer: string | null;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    requestStats: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            total: number;
            todayCount: number;
            errorCount: number;
            byMethod: {
                method: string;
                count: number;
            }[];
        };
        meta: object;
    }>;
    purgeRequestLogs: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            olderThanDays: number;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    deleteRequestLog: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            url: string;
            userAgent: string | null;
            userId: string | null;
            duration: number | null;
            id: number;
            createdAt: Date;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            ipAddress: string | null;
            statusCode: number | null;
            method: string;
            referer: string | null;
        };
        meta: object;
    }>;
    systemInfo: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            nodeVersion: string;
            platform: NodeJS.Platform;
            arch: NodeJS.Architecture;
            env: string;
            timezone: string;
            hostname: string;
            processUptime: number;
            systemUptime: number;
            memoryUsage: NodeJS.MemoryUsage;
            system: {
                totalMem: number;
                freeMem: number;
                cpuModel: string;
                cpuCores: number;
                loadAvg: [number, number, number];
            };
            disk: {
                total: number;
                used: number;
                free: number;
                mountpoint: string;
            } | null;
            osRelease: string | null;
            database: {
                ok: boolean;
                latencyMs: number | null;
            };
            redis: {
                ok: boolean;
                latencyMs: number | null;
                usedMemory: string | null;
            };
        };
        meta: object;
    }>;
    dashboardStats: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            content: {
                totalPosts: number;
                publishedPosts: number;
                draftPosts: number;
                scheduledPosts: number;
                totalPages: number;
                totalCategories: number;
                totalTags: number;
            };
            engagement: {
                totalComments: number;
                pendingComments: number;
                totalContacts: number;
                newContacts: number;
            };
            people: {
                totalCustomers: number;
            };
            media: {
                totalMedia: number;
                totalSize: number;
            };
            recentPosts: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                slug: string;
                title: string;
            }[];
            popularPosts: {
                id: number;
                slug: string;
                title: string;
                views: number;
            }[];
        };
        meta: object;
    }>;
    publishingTrends: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            days?: number | undefined;
        } | undefined;
        output: {
            date: string;
            count: number;
        }[];
        meta: object;
    }>;
    popularContent: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            limit?: number | undefined;
        } | undefined;
        output: {
            id: number;
            slug: string;
            title: string;
            publishedAt: Date | null;
            views: number;
        }[];
        meta: object;
    }>;
    statusBreakdown: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            count: number;
        }[];
        meta: object;
    }>;
    authorStats: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            limit?: number | undefined;
        } | undefined;
        output: {
            authorId: string;
            name: string;
            email: string;
            postCount: number;
            totalViews: number;
        }[];
        meta: object;
    }>;
    categoryStats: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            id: number;
            name: string;
            slug: string;
            postCount: number;
        }[];
        meta: object;
    }>;
    engagementOverview: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            days?: number | undefined;
        } | undefined;
        output: {
            period: string;
            newComments: number;
            newContacts: number;
            newCustomers: number;
        };
        meta: object;
    }>;
    workflowTransitions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            currentStatus: string;
        };
        output: {
            currentStatus: string;
            availableTransitions: string[];
        };
        meta: object;
    }>;
    workflowDescription: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: Record<string, string>;
        meta: object;
    }>;
    cacheStats: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            redis: {
                memoryUsed: string;
                version: string;
                uptimeSeconds: number;
                connectedClients: number;
                hitRate: number | null;
                hits: number;
                misses: number;
            };
            namespaces: {
                cache: number;
                rateLimit: number;
                byNamespace: Record<string, number>;
            };
        };
        meta: object;
    }>;
    clearCache: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            namespace: "category" | "permissions" | "settings" | "all" | "ratelimit";
        };
        output: {
            namespace: "category" | "permissions" | "settings" | "all" | "ratelimit";
            cleared: number;
        };
        meta: object;
    }>;
    getQueueDashboardUrl: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            url: string;
        };
        meta: object;
    }>;
    listLogFiles: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            filename: string;
            size: number;
            mtime: Date;
        }[];
        meta: object;
    }>;
    getProcessStatus: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            sudoPassword: string;
            maintenanceKey: string;
        };
        output: unknown;
        meta: object;
    }>;
    executeProcessAction: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            action: "restart" | "stop" | "reload";
            target: string;
            sudoPassword: string;
            maintenanceKey: string;
        };
        output: {
            success: boolean;
            message: string;
        };
        meta: object;
    }>;
    pingServices: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            sudoPassword: string;
            maintenanceKey: string;
        };
        output: unknown;
        meta: object;
    }>;
    queryRedis: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            action: "get" | "scan" | "del";
            sudoPassword: string;
            maintenanceKey: string;
            pattern?: string | undefined;
            key?: string | undefined;
        };
        output: unknown;
        meta: object;
    }>;
    executeDbCommand: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            action: "migrate-deploy" | "migrate-reset" | "migrate-status" | "db-push" | "validate" | "generate" | "seed";
            sudoPassword: string;
            maintenanceKey: string;
            seedOnly?: string | undefined;
        };
        output: {
            success: boolean;
            output: string;
        };
        meta: object;
    }>;
    executeLogCommand: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            sudoPassword: string;
            maintenanceKey: string;
            filename?: string | undefined;
            lines?: number | undefined;
            level?: string | undefined;
            search?: string | undefined;
        };
        output: {
            success: boolean;
            output: string;
        };
        meta: object;
    }>;
    getLogLevel: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            level: string;
        };
        meta: object;
    }>;
    updateLogLevel: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            level: string;
            sudoPassword: string;
            maintenanceKey: string;
        };
        output: {
            success: boolean;
            oldLevel: string;
            newLevel: string;
        };
        meta: object;
    }>;
    getDatabaseStats: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            sudoPassword: string;
            maintenanceKey: string;
        };
        output: {
            databaseSizeBytes: number;
            tables: Array<{
                tableName: string;
                rowCount: number;
                totalSizeBytes: number;
                tableSizeBytes: number;
                indexSizeBytes: number;
            }>;
        };
        meta: object;
    }>;
    getRedisStats: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            sudoPassword: string;
            maintenanceKey: string;
        };
        output: {
            memory: Record<string, string>;
            stats: Record<string, string>;
            keysSummary: Array<{
                pattern: string;
                count: number;
            }>;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map