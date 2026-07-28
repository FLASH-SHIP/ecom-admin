export declare const EMAIL_QUEUE = "email";
interface EmailJobPayload {
    to: string;
    subject: string;
    html: string;
    text?: string;
}
/**
 * Register the email job handler.
 * Call this once during application startup.
 */
export declare function registerEmailWorker(): void;
/**
 * Dispatch an email to be sent in the background.
 */
export declare function queueEmail(data: EmailJobPayload): Promise<string>;
export {};
//# sourceMappingURL=emailWorker.d.ts.map