export declare const CLEANUP_QUEUE = "cleanup";
/**
 * Register the database cleanup job worker.
 * Call this once during application startup.
 */
export declare function registerCleanupWorker(): void;
/**
 * Schedule or dispatch a repeatable cleanup job.
 */
export declare function queueCleanupJob(): Promise<void>;
//# sourceMappingURL=cleanupWorker.d.ts.map