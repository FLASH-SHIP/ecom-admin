export declare const listAuditLogs: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        filters?: {
            fieldKey: string;
            operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
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
            user: {
                email: string;
                id: string;
                name: string | null;
                avatarUrl: string | null;
            } | null;
            id: number;
            createdAt: Date;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            action: string;
            ipAddress: string | null;
            module: string;
            entityId: string | null;
            entityType: string | null;
            oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
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
        user: {
            email: string;
            id: string;
            name: string | null;
            avatarUrl: string | null;
        } | null;
        userAgent: string | null;
        id: number;
        createdAt: Date;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        action: string;
        ipAddress: string | null;
        module: string;
        entityId: string | null;
        entityType: string | null;
        oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
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
        userAgent: string | null;
        userId: string | null;
        id: number;
        createdAt: Date;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        action: string;
        ipAddress: string | null;
        module: string;
        entityId: string | null;
        entityType: string | null;
        oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
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