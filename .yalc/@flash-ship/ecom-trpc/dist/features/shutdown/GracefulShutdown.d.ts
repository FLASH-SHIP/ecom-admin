type ShutdownHandler = () => Promise<void> | void;
/**
 * Graceful shutdown manager.
 *
 * Registers cleanup handlers that are executed in order when the process
 * receives SIGINT or SIGTERM. Ensures DB connections, Redis, and file handles
 * are properly closed before exit.
 *
 * Inspired by NestJS app.enableShutdownHooks() and Laravel's terminating callbacks.
 *
 * Usage:
 *   import { gracefulShutdown } from "@ecom/features/shutdown/GracefulShutdown";
 *
 *   gracefulShutdown.register("Database", async () => {
 *     await prisma.$disconnect();
 *   });
 *
 *   gracefulShutdown.register("Redis", async () => {
 *     await disconnectRedis();
 *   });
 *
 *   gracefulShutdown.enable();
 */
declare class GracefulShutdownManager {
    private handlers;
    private isShuttingDown;
    private enabled;
    private timeoutMs;
    /**
     * Register a cleanup handler with a descriptive name.
     * Handlers are executed in registration order.
     */
    register(name: string, handler: ShutdownHandler): void;
    /**
     * Set the maximum time to wait for all handlers before force-exiting.
     */
    setTimeout(ms: number): void;
    /**
     * Enable signal listeners for graceful shutdown.
     * Call this once during application bootstrap.
     */
    enable(): void;
    /**
     * Get the list of registered handlers (for debugging).
     */
    getRegisteredHandlers(): string[];
    /**
     * Check if shutdown is in progress.
     */
    isInProgress(): boolean;
}
export declare const gracefulShutdown: GracefulShutdownManager;
export {};
//# sourceMappingURL=GracefulShutdown.d.ts.map