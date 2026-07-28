export type SubscriptionStatus = "active" | "unsubscribed" | "bounced";
export interface Subscriber {
    id: number;
    email: string;
    name: string | null;
    status: SubscriptionStatus;
    subscribedAt: Date;
    unsubscribedAt: Date | null;
    metadata: Record<string, unknown> | null;
}
interface INewsletterDeps {
    findSubscriberByEmail: (email: string) => Promise<Subscriber | null>;
    createSubscriber: (data: {
        email: string;
        name?: string;
    }) => Promise<Subscriber>;
    updateSubscriber: (id: number, data: Partial<Subscriber>) => Promise<Subscriber>;
    findActiveSubscribers: (options?: {
        page?: number;
        perPage?: number;
    }) => Promise<Subscriber[]>;
    countActiveSubscribers: () => Promise<number>;
}
/**
 * Newsletter service — subscriber management.
 *
 * Handles subscribe, unsubscribe, and subscriber list.
 * Actual email sending should be delegated to an email service.
 *
 * Inspired by Ghost Newsletter and Buttondown.
 */
export declare class NewsletterService {
    private deps;
    constructor(deps: INewsletterDeps);
    /**
     * Subscribe an email address.
     */
    subscribe(email: string, name?: string): Promise<Subscriber>;
    /**
     * Unsubscribe an email address.
     */
    unsubscribe(email: string): Promise<void>;
    /**
     * Get subscriber stats.
     */
    getStats(): Promise<{
        totalActive: number;
    }>;
    /**
     * List active subscribers.
     */
    listSubscribers(options?: {
        page?: number;
        perPage?: number;
    }): Promise<Subscriber[]>;
}
export {};
//# sourceMappingURL=NewsletterService.d.ts.map