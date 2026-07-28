import { Queue, Worker } from "bullmq";
type JobHandler = (payload: Record<string, unknown>) => Promise<void>;
/**
 * BullMQ-backed job queue system.
 * Falls back to synchronous execution if Redis is down.
 */
export declare class JobQueue {
    /**
     * Register a job handler for a named queue.
     */
    static register(queueName: string, handler: JobHandler, retries?: number): void;
    /**
     * Dispatch a job to a named queue.
     */
    static dispatch(queueName: string, payload: Record<string, unknown>, options?: {
        delay?: number;
        removeOnComplete?: boolean | number | {
            age: number;
            count?: number;
            limit?: number;
        };
        removeOnFail?: boolean | number | {
            age: number;
            count?: number;
            limit?: number;
        };
    }): Promise<string>;
    /**
     * Process one job.
     * @deprecated Handled automatically by BullMQ Worker
     */
    static processOne(_queueName: string): Promise<boolean>;
    /**
     * Start a worker loop that continuously processes jobs from a queue.
     */
    static startWorker(queueName: string): Worker;
    /**
     * Close all active workers and the queue Redis connection manually.
     */
    static close(): Promise<void>;
    /**
     * Get the length of a named queue.
     */
    static getQueueLength(queueName: string): Promise<number>;
    /**
     * Get dead letter queue length.
     */
    static getDeadLetterCount(queueName: string): Promise<number>;
    /**
     * Get all registered queues as BullMQ Queue instances.
     */
    static getQueues(): Queue[];
}
export {};
//# sourceMappingURL=JobQueue.d.ts.map