import type { CustomerRepository } from "@ecom/features/customer/repositories/CustomerRepository";
import type { UserRepository } from "@ecom/features/rbac/repositories/UserRepository";
import { type Prisma } from "@ecom/prisma";
import type { NotificationRepository } from "../repositories/NotificationRepository";
import type { NotificationTemplateRepository } from "../repositories/NotificationTemplateRepository";
import type { DeviceTokenService } from "./DeviceTokenService";
import type { NotificationSettingService } from "./NotificationSettingService";
import type { PushNotificationService } from "./PushNotificationService";
interface INotificationServiceDeps {
    notificationRepo: NotificationRepository;
    notificationSettingService: NotificationSettingService;
    deviceTokenService: DeviceTokenService;
    pushNotificationService: PushNotificationService;
    templateRepo: NotificationTemplateRepository;
    userRepo?: UserRepository;
    customerRepo?: CustomerRepository;
    config?: {
        deduplicationTtlSec?: number;
        dndDefaultStart?: string;
        dndDefaultEnd?: string;
        timezone?: string;
        smartRoutingFallbackSec?: number;
        jwtSecret?: string;
        apiUrl?: string;
    };
}
export declare class NotificationService {
    private deps;
    private templateCache;
    constructor(deps: INotificationServiceDeps);
    private getEmailVariables;
    private compileTemplate;
    private getNestedValue;
    private acquireIdempotency;
    private getDndConfig;
    private isQuietHours;
    private dispatchPush;
    private dispatchEmail;
    private dispatchWebhook;
    private resolveDeliveryChannels;
    private handleEmailDispatch;
    /**
     * Main dispatch method to send a notification to a User or Customer
     */
    notify(data: {
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
        deliveryClass?: "TRANSACTIONAL" | "MARKETING";
        idempotencyKey?: string | null;
        emailRecipient?: string | null;
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
    } | null>;
    listNotifications(ownerId: string, options?: {
        page?: number;
        cursor?: number;
        perPage?: number;
        unreadOnly?: boolean;
        isCustomer?: boolean;
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
    } | {
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
    getUnreadCount(ownerId: string, isCustomer?: boolean): Promise<number>;
    markRead(id: number, ownerId: string, isRead?: boolean, isCustomer?: boolean): Promise<Prisma.BatchPayload>;
    markAllRead(ownerId: string, isCustomer?: boolean): Promise<Prisma.BatchPayload>;
    deleteNotification(id: number, ownerId: string, isCustomer?: boolean): Promise<Prisma.BatchPayload>;
    recordDelivered(id: number): Promise<Prisma.BatchPayload>;
    recordClicked(id: number): Promise<Prisma.BatchPayload>;
    cleanOldHistory(readDays: number, unreadDays: number): Promise<{
        deletedReadCount: number;
        deletedUnreadCount: number;
    }>;
    previewTemplate(params: {
        type?: string;
        templateId?: number;
        customEmailBody?: string;
        customEmailSubject?: string;
        variables: Record<string, unknown>;
        locale?: string;
        emailRecipient?: string;
    }): Promise<{
        subject: string;
        html: string;
        text: string;
    }>;
    sendDirectEmail(params: {
        type: string;
        emailRecipient: string;
        variables?: Record<string, unknown>;
        locale?: string;
    }): Promise<void>;
    private getCachedBlacklistReason;
    isEmailBlacklisted(email: string, deliveryClass?: "TRANSACTIONAL" | "MARKETING"): Promise<boolean>;
    listBlacklist(params: {
        page: number;
        perPage: number;
        search?: string;
    }): Promise<{
        items: {
            id: number;
            createdAt: Date;
            email: string;
            reason: string;
        }[];
        total: number;
        page: number;
        perPage: number;
        stats: {
            bounce: number;
            complaint: number;
            manual: number;
        };
    }>;
    addToBlacklistBulk(entries: {
        email: string;
        reason: string;
    }[]): Promise<void>;
    addToBlacklist(email: string, reason: string): Promise<{
        id: number;
        createdAt: Date;
        email: string;
        reason: string;
    }>;
    removeFromBlacklist(email: string): Promise<void>;
    removeFromBlacklistBulk(emails: string[]): Promise<void>;
    updateBlacklistReason(email: string, reason: string): Promise<{
        id: number;
        createdAt: Date;
        email: string;
        reason: string;
    }>;
    syncCacheBulk(emails: string[]): Promise<void>;
}
export {};
//# sourceMappingURL=NotificationService.d.ts.map