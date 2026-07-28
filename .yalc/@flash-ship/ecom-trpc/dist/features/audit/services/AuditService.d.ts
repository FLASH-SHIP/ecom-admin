import type { PrismaClient } from "@ecom/prisma";
import type { AuditLogFilters, AuditLogRepository } from "../repositories/AuditLogRepository";
import type { RequestLogFilters, RequestLogRepository } from "../repositories/RequestLogRepository";
export interface IAuditServiceDeps {
    auditLogRepo: AuditLogRepository;
    requestLogRepo: RequestLogRepository;
    prisma: PrismaClient;
}
export declare class AuditService {
    private deps;
    constructor(deps: IAuditServiceDeps);
    logAction(data: {
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
    getAuditLogs(filters: AuditLogFilters, page?: number, perPage?: number): Promise<{
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
    getAuditLog(id: number): Promise<{
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
    getAuditStats(): Promise<{
        total: number;
        todayCount: number;
        byModule: {
            module: string;
            count: number;
        }[];
    }>;
    deleteAuditLog(id: number): Promise<{
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
    purgeAllAuditLogs(): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    purgeAuditLogs(olderThanDays: number): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    logRequest(data: {
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
    getRequestLogs(filters: RequestLogFilters, page?: number, perPage?: number): Promise<{
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
    getRequestStats(): Promise<{
        total: number;
        todayCount: number;
        errorCount: number;
        byMethod: {
            method: string;
            count: number;
        }[];
    }>;
    purgeRequestLogs(olderThanDays: number): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    deleteRequestLog(id: number): Promise<{
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
    private _systemInfoCache;
    private _inflightRefresh;
    private readonly SYSTEM_INFO_TTL_MS;
    getSystemInfo(): Promise<{
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
    }>;
    private _getDisk;
    private _getOsRelease;
    private _pingDatabase;
    private _pingRedis;
}
//# sourceMappingURL=AuditService.d.ts.map