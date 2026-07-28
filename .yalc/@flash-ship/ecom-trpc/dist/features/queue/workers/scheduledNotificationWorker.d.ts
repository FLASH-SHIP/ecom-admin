export declare const SCHEDULED_NOTIFICATIONS_QUEUE = "scheduled-notifications";
/**
 * Register the scheduled notifications job worker.
 * Call this once during application startup.
 */
export declare function registerScheduledNotificationWorker(): void;
/**
 * Schedule or dispatch the repeatable scheduled notifications job.
 */
export declare function queueScheduledNotificationsJob(): Promise<void>;
//# sourceMappingURL=scheduledNotificationWorker.d.ts.map