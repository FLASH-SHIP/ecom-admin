export interface HealthCheckResult {
    status: "healthy" | "degraded" | "unhealthy";
    timestamp: string;
    uptime: number;
    version: string;
    checks: {
        database: ComponentHealth;
        redis: ComponentHealth;
        memory: ComponentHealth;
        disk: ComponentHealth;
    };
}
interface ComponentHealth {
    status: "up" | "down" | "degraded";
    responseTime?: number;
    details?: Record<string, unknown>;
}
/**
 * Comprehensive health check service for production monitoring.
 *
 * Returns overall system health with individual component checks:
 * - Database (PostgreSQL via Prisma)
 * - Redis (connection test)
 * - Memory (heap usage)
 * - Disk (process uptime as proxy)
 */
export declare function checkHealth(): Promise<HealthCheckResult>;
export {};
//# sourceMappingURL=HealthCheckService.d.ts.map