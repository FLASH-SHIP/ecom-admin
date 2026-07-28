/**
 * Laravel-style Task Scheduler for Node.js/TypeScript.
 *
 * Usage:
 *   const scheduler = new TaskScheduler();
 *   scheduler
 *     .task("Prune audit logs")
 *     .cron("0 2 * * *")
 *     .handle(async () => { ... });
 *
 *   scheduler.start();
 */
export declare class TaskScheduler {
    private tasks;
    private interval;
    task(name: string): {
        cron: (expression: string) => /*elided*/ any;
        handle: (handler: () => Promise<void>) => /*elided*/ any;
        disable: () => /*elided*/ any;
    };
    start(checkIntervalMs?: number): void;
    stop(): void;
    getRegisteredTasks(): {
        name: string;
        cronExpression: string;
        enabled: boolean;
        lastRunAt: Date | undefined;
    }[];
    private tick;
    /**
     * Simple cron matcher. Supports: minute hour day-of-month month day-of-week.
     * Supports * and step values (e.g., *​/5).
     */
    private shouldRun;
    private matchField;
}
//# sourceMappingURL=TaskScheduler.d.ts.map