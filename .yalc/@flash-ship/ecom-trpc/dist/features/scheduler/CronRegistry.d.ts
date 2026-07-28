/**
 * Central cron job registry — inspired by Laravel Console Kernel.
 *
 * Defines all scheduled tasks in one place with their cron expressions.
 *
 * Cron format: minute hour day-of-month month day-of-week
 * Examples:
 *   "0 3 * * *"     — daily at 3 AM
 *   "* /5 * * * *"  — every 5 minutes
 *   "0 0 * * SUN"   — weekly on Sunday midnight
 *   "0 0 1 * *"     — monthly on 1st
 */
export interface CronJobDefinition {
    name: string;
    cron: string;
    description: string;
    handler: () => Promise<void>;
    enabled: boolean;
}
/**
 * Registers all scheduled jobs. Import handlers lazily to avoid
 * circular dependencies and heavy startup costs.
 */
export declare function getCronJobs(): CronJobDefinition[];
/**
 * Runs all enabled cron jobs that match the current time.
 * Designed to be called from a single cron entry: `* * * * * node cron-runner.js`
 */
export declare function runDueJobs(): Promise<void>;
//# sourceMappingURL=CronRegistry.d.ts.map