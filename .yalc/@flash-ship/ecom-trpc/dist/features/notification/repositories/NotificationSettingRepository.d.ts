import { type Prisma } from "@ecom/prisma";
export declare class NotificationSettingRepository {
    findByOwner(params: {
        userId?: string;
        customerId?: string;
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
        dndConfig: Prisma.JsonValue | null;
    }[]>;
    upsertSetting(data: {
        userId?: string | null;
        customerId?: string | null;
        eventType: string;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        channelWebhook: boolean;
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
        dndConfig: Prisma.JsonValue | null;
    }>;
}
//# sourceMappingURL=NotificationSettingRepository.d.ts.map