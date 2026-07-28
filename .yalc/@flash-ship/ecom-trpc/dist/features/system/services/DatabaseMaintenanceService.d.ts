import type { Writable } from "node:stream";
import type { PrismaClient } from "@ecom/prisma";
export type MaintenanceAction = "migrate-deploy" | "migrate-reset" | "migrate-status" | "db-push" | "validate" | "generate" | "seed";
export interface IDatabaseMaintenanceServiceDeps {
    prisma: PrismaClient;
}
export declare class DatabaseMaintenanceService {
    private prisma;
    private readonly LOCK_KEY;
    private readonly LOCK_TTL_SECONDS;
    constructor(deps: IDatabaseMaintenanceServiceDeps);
    /**
     * Helper to locate the packages/prisma directory dynamically.
     */
    private getPrismaDir;
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
    private prepareCliConfig;
    /**
     * Executes the database maintenance command and streams logs in real-time.
     */
    executeCommand(params: {
        action: MaintenanceAction;
        maintenanceKey?: string;
        sudoPassword?: string;
        seedOnly?: string;
        seedCategory?: string;
        userId: string;
        username: string;
        writeStream: Writable;
    }): Promise<void>;
}
//# sourceMappingURL=DatabaseMaintenanceService.d.ts.map