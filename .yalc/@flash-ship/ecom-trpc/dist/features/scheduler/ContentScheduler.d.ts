interface ISchedulerDeps {
    prisma: {
        post: {
            findMany: (args: Record<string, unknown>) => Promise<{
                id: number;
                title: string;
            }[]>;
            updateMany: (args: Record<string, unknown>) => Promise<{
                count: number;
            }>;
        };
    };
}
/**
 * Content Scheduler — handles automated publishing and expiry.
 *
 * - Publishes posts with scheduledAt <= now and status DRAFT
 * - Archives posts with expiresAt <= now and status PUBLISHED
 *
 * Designed to run as a cron job (e.g., every minute).
 */
export declare class ContentScheduler {
    private deps;
    constructor(deps: ISchedulerDeps);
    /**
     * Publish posts that are scheduled for now or earlier.
     */
    publishScheduledPosts(): Promise<number>;
    /**
     * Archive posts that have expired.
     */
    archiveExpiredPosts(): Promise<number>;
    /**
     * Run both scheduled publish and expiry checks.
     * Call this from a cron job.
     */
    tick(): Promise<{
        published: number;
        archived: number;
    }>;
}
export {};
//# sourceMappingURL=ContentScheduler.d.ts.map