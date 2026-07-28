type HookHandler = (...args: unknown[]) => Promise<void> | void;
type FilterHandler<T = unknown> = (value: T, ...args: unknown[]) => Promise<T> | T;
/**
 * WordPress-inspired hook/filter system for CMS extensibility.
 *
 * Actions: Fire-and-forget side effects (e.g., send notification after publish)
 * Filters: Transform data through a pipeline (e.g., modify content before save)
 *
 * Usage:
 *   hooks.addAction("post.published", async (post) => { ... });
 *   hooks.addFilter("post.content", async (content) => { ... });
 *   await hooks.doAction("post.published", post);
 *   const processed = await hooks.applyFilters("post.content", rawContent);
 */
declare class HookSystem {
    private actions;
    private filters;
    /**
     * Register an action handler.
     * @param name Hook name (e.g., "post.created", "comment.approved")
     * @param handler Async/sync handler function
     * @param priority Lower = runs first (default 10)
     */
    addAction(name: string, handler: HookHandler, priority?: number): void;
    /**
     * Register a filter handler.
     */
    addFilter<T = unknown>(name: string, handler: FilterHandler<T>, priority?: number): void;
    /**
     * Execute all action handlers for a hook.
     * Errors are logged but don't stop execution.
     */
    doAction(name: string, ...args: unknown[]): Promise<void>;
    /**
     * Apply all filter handlers to a value, returning the transformed result.
     */
    applyFilters<T = unknown>(name: string, value: T, ...args: unknown[]): Promise<T>;
    /**
     * Remove all handlers for a specific hook.
     */
    removeAction(name: string): void;
    removeFilter(name: string): void;
    /**
     * Check if any handlers are registered for a hook.
     */
    hasAction(name: string): boolean;
    hasFilter(name: string): boolean;
    /**
     * Get a list of all registered hook names.
     */
    getRegisteredHooks(): {
        actions: string[];
        filters: string[];
    };
}
export declare const hooks: HookSystem;
/**
 * Pre-defined hook names for type-safe usage.
 */
export declare const HookNames: {
    readonly POST_CREATED: "post.created";
    readonly POST_UPDATED: "post.updated";
    readonly POST_PUBLISHED: "post.published";
    readonly POST_DELETED: "post.deleted";
    readonly POST_RESTORED: "post.restored";
    readonly PAGE_CREATED: "page.created";
    readonly PAGE_UPDATED: "page.updated";
    readonly PAGE_PUBLISHED: "page.published";
    readonly PAGE_DELETED: "page.deleted";
    readonly POST_CONTENT_BEFORE_SAVE: "post.content.beforeSave";
    readonly POST_CONTENT_BEFORE_RENDER: "post.content.beforeRender";
    readonly PAGE_CONTENT_BEFORE_SAVE: "page.content.beforeSave";
    readonly COMMENT_CREATED: "comment.created";
    readonly COMMENT_APPROVED: "comment.approved";
    readonly COMMENT_DELETED: "comment.deleted";
    readonly MEDIA_UPLOADED: "media.uploaded";
    readonly MEDIA_DELETED: "media.deleted";
    readonly USER_LOGGED_IN: "user.loggedIn";
    readonly USER_REGISTERED: "user.registered";
    readonly MEMBER_REGISTERED: "member.registered";
};
export {};
//# sourceMappingURL=HookSystem.d.ts.map