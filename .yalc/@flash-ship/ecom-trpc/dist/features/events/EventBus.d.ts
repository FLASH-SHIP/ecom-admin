/**
 * Type-safe event definitions for all CMS domain events.
 * Inspired by Laravel Events/Listeners pattern.
 */
export interface EventMap {
    "order.created": {
        orderId: string;
        customerId: string;
        status: string;
        orderCode: string;
    };
    "order.status_updated": {
        orderId: string;
        customerId: string;
        status: string;
        orderCode: string;
    };
    "order.checkpoint_added": {
        orderId: string;
        customerId: string;
        status: string;
        orderCode: string;
        checkpoint: string;
    };
    "post.created": {
        postId: number;
        authorId: string;
        title: string;
    };
    "post.updated": {
        postId: number;
        authorId: string;
        changes: string[];
    };
    "post.published": {
        postId: number;
        slug: string;
        authorId: string;
    };
    "post.unpublished": {
        postId: number;
        authorId: string;
    };
    "post.deleted": {
        postId: number;
        authorId: string;
        permanent: boolean;
    };
    "post.restored": {
        postId: number;
        authorId: string;
    };
    "post.statusChanged": {
        postId: number;
        from: string;
        to: string;
        authorId: string;
    };
    "page.created": {
        pageId: number;
        authorId: string;
        title: string;
    };
    "page.updated": {
        pageId: number;
        authorId: string;
    };
    "page.published": {
        pageId: number;
        slug: string;
    };
    "page.deleted": {
        pageId: number;
        authorId: string;
    };
    "comment.created": {
        commentId: number;
        postId: number;
        authorName: string;
    };
    "comment.approved": {
        commentId: number;
        postId: number;
    };
    "comment.rejected": {
        commentId: number;
        postId: number;
    };
    "comment.deleted": {
        commentId: number;
        postId: number;
    };
    "media.uploaded": {
        fileId: number;
        fileName: string;
        size: number;
        uploadedBy: number;
    };
    "media.deleted": {
        fileId: number;
        fileName: string;
    };
    "user.loggedIn": {
        userId: string;
        ip: string;
    };
    "user.registered": {
        userId: string;
        email: string;
    };
    "user.passwordChanged": {
        userId: string;
    };
    "member.registered": {
        memberId: string;
        email: string;
    };
    "member.activated": {
        memberId: string;
    };
    "contact.submitted": {
        contactId: number;
        email: string;
        subject: string;
    };
    "system.backup.created": {
        exportedAt: string;
    };
    "system.backup.restored": {
        importedAt: string;
    };
    "cache.cleared": {
        pattern?: string;
    };
    "webhook.deactivated": {
        webhookId: number;
        name: string;
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        reason: string;
    };
}
type EventHandler<T> = (payload: T) => Promise<void> | void;
/**
 * Type-safe event bus.
 *
 * Usage:
 *   eventBus.on("post.published", async ({ postId, slug }) => {
 *     await clearCache(`post:${slug}`);
 *   });
 *
 *   await eventBus.emit("post.published", { postId: 1, slug: "hello", authorId: 1 });
 */
declare class TypedEventBus {
    private handlers;
    /**
     * Register a persistent event listener.
     */
    on<K extends keyof EventMap>(event: K, handler: EventHandler<EventMap[K]>, priority?: number): () => void;
    /**
     * Register a one-time event listener (auto-removed after first trigger).
     */
    once<K extends keyof EventMap>(event: K, handler: EventHandler<EventMap[K]>, priority?: number): () => void;
    /**
     * Emit an event — runs all handlers in priority order.
     * Errors are logged but don't stop other handlers.
     */
    emit<K extends keyof EventMap>(event: K, payload: EventMap[K]): Promise<void>;
    /**
     * Remove all handlers for a specific event.
     */
    off<K extends keyof EventMap>(event: K): void;
    /**
     * Check if any handlers are registered for an event.
     */
    hasListeners<K extends keyof EventMap>(event: K): boolean;
    /**
     * Get count of registered events.
     */
    getRegisteredEvents(): string[];
    /**
     * Clear all handlers (useful for testing).
     */
    clear(): void;
    private addHandler;
}
export declare const eventBus: TypedEventBus;
export {};
//# sourceMappingURL=EventBus.d.ts.map