interface ContentLock {
    entityType: "post" | "page";
    entityId: number;
    userId: string;
    userName: string;
    lockedAt: number;
    expiresAt: number;
}
/**
 * In-memory content locking service to prevent concurrent editing.
 *
 * When a user starts editing a post/page, a lock is acquired.
 * Other users are warned that the content is being edited.
 * Locks auto-expire after a configurable timeout (default: 5 minutes).
 *
 * For multi-server deployments, this should be backed by Redis.
 */
declare class ContentLockService {
    private locks;
    private readonly DEFAULT_TTL_MS;
    /**
     * Try to acquire a lock on content.
     * Returns the lock if successful, or the existing lock holder if locked by another user.
     */
    acquire(entityType: "post" | "page", entityId: number, userId: string, userName: string): {
        acquired: boolean;
        lock: ContentLock;
    };
    /**
     * Release a lock (only the lock holder can release it).
     */
    release(entityType: "post" | "page", entityId: number, userId: string): boolean;
    /**
     * Check if content is locked (returns lock info or null).
     */
    check(entityType: "post" | "page", entityId: number): ContentLock | null;
    /**
     * Heartbeat — extend a lock (called periodically by the editor).
     */
    heartbeat(entityType: "post" | "page", entityId: number, userId: string): boolean;
    /**
     * Force release a lock (admin only).
     */
    forceRelease(entityType: "post" | "page", entityId: number): void;
    /**
     * Get all active locks (for admin monitoring).
     */
    getActiveLocks(): ContentLock[];
    /**
     * Clean up expired locks.
     */
    cleanup(): number;
    private getKey;
}
export declare const contentLockService: ContentLockService;
export type { ContentLock };
//# sourceMappingURL=ContentLockService.d.ts.map