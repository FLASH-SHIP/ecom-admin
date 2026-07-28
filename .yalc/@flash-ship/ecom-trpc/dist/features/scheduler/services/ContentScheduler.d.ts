/**
 * Publishes posts and pages whose scheduledAt time has passed.
 * Designed to run as a scheduled task (e.g., every minute via TaskScheduler).
 */
export declare function publishScheduledContent(): Promise<{
    publishedPosts: number;
    publishedPages: number;
}>;
//# sourceMappingURL=ContentScheduler.d.ts.map