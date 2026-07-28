export declare const auditLogsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            filters?: {
                fieldKey: string;
                operator: "endsWith" | "startsWith" | "contains" | "notContains" | "equals" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "notEquals" | "between" | "betweenInclusive" | "empty" | "notEmpty";
                value: string;
                value2?: string | undefined;
            }[] | undefined;
            page?: number | undefined;
            pageSize?: number | undefined;
            sortBy?: "id" | "createdAt" | undefined;
            sortDir?: "asc" | "desc" | undefined;
        };
        output: {
            items: {
                id: number;
                createdAt: Date;
                user: {
                    name: string | null;
                    id: string;
                    email: string;
                    avatarUrl: string | null;
                } | null;
                ipAddress: string | null;
                action: string;
                module: string;
                entityId: string | null;
                entityType: string | null;
                oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            user: {
                name: string | null;
                id: string;
                email: string;
                avatarUrl: string | null;
            } | null;
            ipAddress: string | null;
            userAgent: string | null;
            action: string;
            module: string;
            entityId: string | null;
            entityType: string | null;
            oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        } | null;
        meta: object;
    }>;
    stats: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            total: number;
            todayCount: number;
            byModule: {
                module: string;
                count: number;
            }[];
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            userId: string | null;
            ipAddress: string | null;
            userAgent: string | null;
            action: string;
            module: string;
            entityId: string | null;
            entityType: string | null;
            oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        };
        meta: object;
    }>;
    purgeAll: import("@trpc/server").TRPCMutationProcedure<{
        input: void;
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    purge: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            olderThanDays: number;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map