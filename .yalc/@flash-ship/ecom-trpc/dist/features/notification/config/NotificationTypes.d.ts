export interface NotificationEventConfig {
    type: string;
    target: "USER" | "CUSTOMER";
    category: "order" | "system" | "blog" | "account" | "wallet";
    labelKey: string;
    descriptionKey: string;
    channels: {
        inApp: {
            default: boolean;
            mandatory: boolean;
        };
        push: {
            default: boolean;
            mandatory: boolean;
        };
        email: {
            default: boolean;
            mandatory: boolean;
        };
        webhook: {
            default: boolean;
            mandatory: boolean;
        };
    };
}
export declare const NOTIFICATION_EVENTS: NotificationEventConfig[];
//# sourceMappingURL=NotificationTypes.d.ts.map