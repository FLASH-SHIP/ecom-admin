import type { PrismaClient } from "@ecom/prisma";
export interface AuditLogFilters {
    /** Pre-built Prisma where clause from buildPrismaWhere */
    where?: Record<string, unknown>;
    sortBy?: "id" | "createdAt";
    sortDir?: "asc" | "desc";
}
export declare class AuditLogRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: {
        userId?: string;
        action: string;
        module: string;
        entityId?: string;
        entityType?: string;
        oldValues?: unknown;
        newValues?: unknown;
        ipAddress?: string;
        userAgent?: string;
        metadata?: unknown;
    }): Promise<{
        id: number;
    }>;
    findMany(filters: AuditLogFilters, page?: number, perPage?: number): Promise<{
        items: {
            id: number;
            createdAt: Date;
            user: {
                email: string;
                name: string | null;
                id: string;
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
    }>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        user: {
            email: string;
            name: string | null;
            id: string;
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
    } | null>;
    deleteById(id: number): Promise<{
        userId: string | null;
        id: number;
        createdAt: Date;
        ipAddress: string | null;
        userAgent: string | null;
        action: string;
        module: string;
        entityId: string | null;
        entityType: string | null;
        oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
    }>;
    deleteAll(keepLatest?: boolean): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    deleteOlderThan(date: Date, keepLatest?: boolean): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getStats(): Promise<{
        total: number;
        todayCount: number;
        byModule: {
            module: string;
            count: number;
        }[];
    }>;
}
//# sourceMappingURL=AuditLogRepository.d.ts.map