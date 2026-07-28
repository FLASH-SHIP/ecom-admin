import type { PrismaClient } from "@ecom/prisma";
export interface RequestLogFilters {
    /** Pre-built Prisma where clause from buildPrismaWhere */
    where?: Record<string, unknown>;
    /** URL search from global search bar */
    search?: string;
    sortBy?: "id" | "createdAt" | "statusCode" | "duration";
    sortDir?: "asc" | "desc";
}
export declare class RequestLogRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: {
        userId?: string;
        method: string;
        url: string;
        statusCode?: number;
        duration?: number;
        ipAddress?: string;
        userAgent?: string;
        referer?: string;
        metadata?: unknown;
    }): Promise<{
        id: number;
    }>;
    findMany(filters: RequestLogFilters, page?: number, perPage?: number): Promise<{
        items: {
            id: number;
            createdAt: Date;
            user: {
                email: string;
                name: string | null;
                id: string;
            } | null;
            ipAddress: string | null;
            userAgent: string | null;
            method: string;
            url: string;
            statusCode: number | null;
            duration: number | null;
            referer: string | null;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
    deleteById(id: number): Promise<{
        userId: string | null;
        id: number;
        createdAt: Date;
        ipAddress: string | null;
        userAgent: string | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        method: string;
        url: string;
        statusCode: number | null;
        duration: number | null;
        referer: string | null;
    }>;
    deleteOlderThan(date: Date): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getStats(): Promise<{
        total: number;
        todayCount: number;
        errorCount: number;
        byMethod: {
            method: string;
            count: number;
        }[];
    }>;
}
//# sourceMappingURL=RequestLogRepository.d.ts.map