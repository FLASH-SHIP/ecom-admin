import type { Writable } from "node:stream";
import type { PrismaClient } from "@ecom/prisma";
export interface ISystemDiagnosticsServiceDeps {
    prisma: PrismaClient;
}
export declare class SystemDiagnosticsService {
    private prisma;
    constructor(deps: ISystemDiagnosticsServiceDeps);
    /**
     * Helper to locate the monorepo root directory dynamically.
     */
    private findMonorepoRoot;
    /**
     * Helper to locate logs directory dynamically.
     */
    private getLogsDir;
    /**
     * Strips ANSI escape codes from stdout/stderr chunks.
     */
    private stripAnsi;
    /**
     * Masks sensitive credentials like passwords in connection URLs.
     */
    private maskSecrets;
    /**
     * Safely timing-safe compares the maintenance key.
     */
    private verifyMaintenanceKey;
    private verifySudoPassword;
    /**
     * Lists log files matching the pattern app-YYYY-MM-DD.log.
     */
    listLogFiles(): Promise<Array<{
        filename: string;
        size: number;
        mtime: Date;
    }>>;
    /**
     * Executes tail log command (read/stream) with filtering.
     */
    executeLogCommand(params: {
        action: "read" | "stream";
        filename?: string;
        lines?: number;
        level?: string;
        search?: string;
        sudoPassword?: string;
        userId: string;
        username: string;
        writeStream: Writable;
        maintenanceKey?: string;
    }): Promise<void>;
    /**
     * Retrieves PM2 processes details, or falls back to system status metrics.
     */
    getProcessStatus(params: {
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<unknown>;
    /**
     * Pings a whitelisted set of critical servers and external gateways.
     */
    pingExternalServices(params: {
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<unknown>;
    /**
     * Scans, reads, or deletes cache keys under whitelisted namespaces.
     */
    queryRedis(params: {
        action: "scan" | "get" | "del";
        pattern?: string;
        key?: string;
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<unknown>;
    /**
     * Executes PM2 process actions (restart/stop/reload) on non-production.
     */
    executeProcessAction(params: {
        action: "restart" | "stop" | "reload";
        target: string;
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<{
        success: boolean;
        message: string;
    }>;
    getLogLevel(): Promise<{
        level: string;
    }>;
    updateLogLevel(params: {
        level: string;
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<{
        success: boolean;
        oldLevel: string;
        newLevel: string;
    }>;
    getDatabaseStats(params: {
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<{
        databaseSizeBytes: number;
        tables: Array<{
            tableName: string;
            rowCount: number;
            totalSizeBytes: number;
            tableSizeBytes: number;
            indexSizeBytes: number;
        }>;
    }>;
    getRedisStats(params: {
        sudoPassword?: string;
        userId: string;
        maintenanceKey?: string;
    }): Promise<{
        memory: Record<string, string>;
        stats: Record<string, string>;
        keysSummary: Array<{
            pattern: string;
            count: number;
        }>;
    }>;
}
//# sourceMappingURL=SystemDiagnosticsService.d.ts.map