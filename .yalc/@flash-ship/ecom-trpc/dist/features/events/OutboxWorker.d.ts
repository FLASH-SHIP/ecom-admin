/**
 * Outbox Worker with adaptive polling (PERF-04).
 *
 * Instead of polling at a fixed 5s interval (~17K queries/day even when idle),
 * uses exponential backoff:
 * - When events are found: polls every 1s (fast processing)
 * - When idle: doubles interval up to 30s (saves DB resources)
 * - Resets to fast polling as soon as events appear
 */
export declare class OutboxWorker {
    private timer;
    private isProcessing;
    private maxAttempts;
    private readonly baseIntervalMs;
    private readonly maxIntervalMs;
    private currentIntervalMs;
    constructor(baseIntervalMs?: number, maxIntervalMs?: number);
    start(): void;
    stop(): void;
    private scheduleNext;
    process(): Promise<void>;
}
export declare const outboxWorker: OutboxWorker;
//# sourceMappingURL=OutboxWorker.d.ts.map