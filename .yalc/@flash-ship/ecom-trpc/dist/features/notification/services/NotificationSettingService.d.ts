import type { NotificationSettingRepository } from "../repositories/NotificationSettingRepository";
interface INotificationSettingServiceDeps {
    notificationSettingRepo: NotificationSettingRepository;
}
export declare class NotificationSettingService {
    private deps;
    constructor(deps: INotificationSettingServiceDeps);
    /**
     * Resolves the full list of preferences for a given user or customer,
     * merging schema-defined defaults with database overrides.
     */
    getPreferences(params: {
        userId?: string;
        customerId?: string;
    }): Promise<{
        eventType: string;
        category: "order" | "blog" | "account" | "system" | "wallet";
        labelKey: string;
        descriptionKey: string;
        channels: {
            inApp: {
                value: boolean;
                mandatory: boolean;
            };
            push: {
                value: boolean;
                mandatory: boolean;
            };
            email: {
                value: boolean;
                mandatory: boolean;
            };
            webhook: {
                value: boolean;
                mandatory: boolean;
            };
        };
        dndConfig: string | number | true | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonObject | import("@ecom/prisma/src/generated/prisma/runtime/client").JsonArray | null;
    }[]>;
    /**
     * Updates preference settings for a user/customer.
     */
    updatePreference(params: {
        userId?: string;
        customerId?: string;
    }, eventType: string, channels: {
        inApp?: boolean;
        push?: boolean;
        email?: boolean;
        webhook?: boolean;
        dndConfig?: unknown;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        customerId: string | null;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        eventType: string;
        channelWebhook: boolean;
        dndConfig: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
    }>;
}
export {};
//# sourceMappingURL=NotificationSettingService.d.ts.map