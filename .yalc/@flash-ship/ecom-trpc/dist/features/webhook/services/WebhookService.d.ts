import type { WebhookRepository } from "@ecom/features/webhook/repositories/WebhookRepository";
export interface IWebhookServiceDeps {
    webhookRepo: WebhookRepository;
}
export declare class WebhookService {
    private static AVAILABLE_EVENTS;
    private deps;
    constructor(deps: IWebhookServiceDeps);
    getAvailableEvents(): ("post.created" | "order.created" | "order.status_updated" | "order.checkpoint_added" | "post.updated" | "post.published" | "post.deleted" | "page.created" | "page.updated" | "page.published" | "page.deleted" | "member.registered" | "ping")[];
    listWebhooks(owner?: {
        ownerId: string;
        ownerType: string;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        _count: {
            logs: number;
        };
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        events: string[];
        retries: number;
        timeout: number;
        failureCount: number;
        apiVersion: string;
    }[]>;
    getWebhook(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        events: string[];
        retries: number;
        timeout: number;
        failureCount: number;
        apiVersion: string;
    }>;
    createWebhook(data: {
        name: string;
        url: string;
        secret?: string | null;
        events: string[];
        retries?: number;
        timeout?: number;
        ownerId?: string | null;
        ownerType?: string | null;
        apiVersion?: string;
    }): Promise<{
        id: number;
        name: string;
        secret: string | null;
    }>;
    updateWebhook(id: number, data: {
        name?: string;
        url?: string;
        secret?: string | null;
        events?: string[];
        isActive?: boolean;
        retries?: number;
        timeout?: number;
        apiVersion?: string;
    }): Promise<{
        id: number;
        name: string;
    }>;
    deleteWebhook(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        events: string[];
        retries: number;
        timeout: number;
        failureCount: number;
        apiVersion: string;
    }>;
    getWebhookLogs(webhookId: number): Promise<{
        error: string | null;
        id: number;
        createdAt: Date;
        statusCode: number | null;
        attempts: number;
        event: string;
        payload: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        response: string | null;
        success: boolean;
    }[]>;
    rotateWebhookSecret(id: number): Promise<string>;
    /**
     * Dispatch an event to all subscribed webhooks.
     * Pushes jobs to BullMQ for asynchronous background execution.
     */
    dispatch(event: string, payload: Record<string, unknown>, owner?: {
        ownerId: string;
        ownerType: string;
    }): Promise<void>;
    /**
     * Execute the actual delivery of a webhook (called by BullMQ worker).
     */
    executeWebhookDelivery(webhookId: number, event: string, rawPayload: Record<string, unknown>, attempt?: number, eventId?: string): Promise<void>;
    private handleRetryOrDeactivation;
    private getBackoffDelay;
    private handlePostDeliveryStatus;
    private buildWebhookHeaders;
    private performSingleDeliveryAttempt;
    /**
     * Format payload into thin resource reference structure based on event type.
     */
    private formatPayloadForVersion;
}
//# sourceMappingURL=WebhookService.d.ts.map