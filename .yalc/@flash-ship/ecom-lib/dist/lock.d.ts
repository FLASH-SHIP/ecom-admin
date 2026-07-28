export type LockFallbackStrategy = "deny" | "allow";
export declare class DistributedLockManager {
    private fallbackStrategy;
    constructor(fallbackStrategy?: LockFallbackStrategy);
    /**
     * Acquire a lock.
     * Returns a lock token if successful, or null if failed.
     *
     * Fallback behavior when Redis is unavailable (PERF-03):
     * - "deny" (default): Returns null → lock acquisition fails → caller must handle
     * - "allow": Returns fallback token → operation proceeds (use for non-critical paths only)
     */
    acquire(key: string, ttlMs: number): Promise<string | null>;
    /**
     * Release a lock safely using a Lua script to ensure only the owner can release it.
     */
    release(key: string, token: string): Promise<boolean>;
    /**
     * Run a function wrapped in a lock.
     */
    runWithLock<T>(key: string, ttlMs: number, fn: () => Promise<T>, retryDelayMs?: number, maxRetries?: number): Promise<T>;
}
/** Default lock manager: fail-closed (deny) for safety-critical operations */
export declare const lockManager: DistributedLockManager;
/** Lock manager for non-critical paths where operations can proceed without Redis */
export declare const softLockManager: DistributedLockManager;
//# sourceMappingURL=lock.d.ts.map