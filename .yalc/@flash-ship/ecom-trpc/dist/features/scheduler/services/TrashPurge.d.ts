/**
 * Permanently deletes soft-deleted posts and pages older than PURGE_DAYS.
 * Designed to run as a scheduled task (e.g., daily at 2 AM).
 */
export declare function purgeTrash(): Promise<{
    purgedPosts: number;
    purgedPages: number;
}>;
//# sourceMappingURL=TrashPurge.d.ts.map