import { type Prisma } from "@ecom/prisma";
export declare class NotificationRepository {
    create(data: {
        userId?: string | null;
        customerId?: string | null;
        type: string;
        titleKey: string;
        messageKey: string;
        variables?: Record<string, unknown>;
        link?: string | null;
        referenceId?: string | null;
        referenceType?: string | null;
        isSensitive?: boolean;
        deliveryClass?: string;
        idempotencyKey?: string | null;
        sentAt?: Date | null;
    }): Promise<{
        id: number;
        createdAt: Date;
        link: string | null;
        type: string;
        variables: Prisma.JsonValue;
        titleKey: string;
        messageKey: string;
        isRead: boolean;
        isSensitive: boolean;
        deliveryClass: string;
    }>;
    findByOwner(params: {
        userId?: string;
        customerId?: string;
    }, options?: {
        cursor?: number;
        perPage?: number;
        unreadOnly?: boolean;
        search?: string;
        type?: string;
    }): Promise<{
        items: {
            id: number;
            createdAt: Date;
            link: string | null;
            type: string;
            variables: Prisma.JsonValue;
            titleKey: string;
            messageKey: string;
            isRead: boolean;
            isSensitive: boolean;
            deliveryClass: string;
            sentAt: Date | null;
            deliveredAt: Date | null;
            clickedAt: Date | null;
        }[];
        nextCursor: number | undefined;
    }>;
    /**
     * Legacy finder for backward compatibility with offset-based pagination.
     */
    findByUser(userId: string, options?: {
        page?: number;
        perPage?: number;
        unreadOnly?: boolean;
        search?: string;
        type?: string;
    }): Promise<{
        items: {
            id: number;
            createdAt: Date;
            link: string | null;
            type: string;
            variables: Prisma.JsonValue;
            titleKey: string;
            messageKey: string;
            isRead: boolean;
            isSensitive: boolean;
            deliveryClass: string;
        }[];
        total: number;
        page: number;
        perPage: number;
    }>;
    getUnreadCount(params: {
        userId?: string;
        customerId?: string;
    }): Promise<number>;
    markRead(id: number, isRead: boolean, params: {
        userId?: string;
        customerId?: string;
    }): Promise<Prisma.BatchPayload>;
    markAllRead(params: {
        userId?: string;
        customerId?: string;
    }): Promise<Prisma.BatchPayload>;
    delete(id: number, params: {
        userId?: string;
        customerId?: string;
    }): Promise<Prisma.BatchPayload>;
    updateTracking(id: number, field: "delivered" | "clicked"): Promise<Prisma.BatchPayload>;
    purgeOldNotifications(params: {
        readPurgeDays: number;
        unreadPurgeDays: number;
    }): Promise<{
        deletedReadCount: number;
        deletedUnreadCount: number;
    }>;
}
//# sourceMappingURL=NotificationRepository.d.ts.map