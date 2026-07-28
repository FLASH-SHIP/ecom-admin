import type { CustomerRepository } from "@ecom/features/customer/repositories/CustomerRepository";
import type { UserRepository } from "@ecom/features/rbac/repositories/UserRepository";
import type { ScheduledNotificationRepository } from "../repositories/ScheduledNotificationRepository";
import type { NotificationService } from "./NotificationService";
interface IScheduledNotificationDeps {
    scheduledRepo: ScheduledNotificationRepository;
    notificationService: NotificationService;
    userRepo: UserRepository;
    customerRepo: CustomerRepository;
}
export declare class ScheduledNotificationService {
    private deps;
    constructor(deps: IScheduledNotificationDeps);
    create(data: {
        targetType: string;
        targetIds?: string[];
        title: string;
        message: string;
        link?: string | null;
        scheduledAt: Date;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        link: string | null;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        link: string | null;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    }>;
    list(params: {
        page: number;
        perPage: number;
    }): Promise<{
        items: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            link: string | null;
            title: string;
            status: string;
            scheduledAt: Date;
            message: string;
            targetType: string;
            targetIds: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            failedReason: string | null;
            templateId: number | null;
        }[];
        total: number;
    }>;
    private resolveRecipients;
    private dispatchSingleItem;
    dispatchDueNotifications(): Promise<void>;
}
export {};
//# sourceMappingURL=ScheduledNotificationService.d.ts.map