export declare const WEBHOOK_QUEUE = "webhook-delivery";
export interface WebhookJobPayload {
    webhookId: number;
    event: string;
    payload: Record<string, unknown>;
    attempt?: number;
    eventId?: string;
}
/**
 * Register the webhook delivery job handler.
 * Call this once during application startup.
 */
export declare function registerWebhookWorker(): void;
/**
 * Dispatch a webhook delivery to be processed in the background.
 */
export declare function queueWebhookDelivery(data: WebhookJobPayload, options?: {
    delay?: number;
}): Promise<string>;
//# sourceMappingURL=webhookWorker.d.ts.map