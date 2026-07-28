export declare const listAuditLogs: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const getAuditLog: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const getAuditStats: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const deleteAuditLog: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const purgeAllAuditLogs: import("@trpc/server").TRPCMutationProcedure<{
    input: void;
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const purgeAuditLogs: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        olderThanDays: number;
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
//# sourceMappingURL=audit-logs.handler.d.ts.map