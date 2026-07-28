import { type Prisma } from "@ecom/prisma";
export interface CreateScheduledInput {
    targetType: string;
    targetIds?: string[];
    title: string;
    message: string;
    link?: string | null;
    scheduledAt: Date;
}
export interface UpdateScheduledInput {
    status?: string;
    failedReason?: string | null;
}
export declare class ScheduledNotificationRepository {
    create(data: CreateScheduledInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        link: string | null;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: Prisma.JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    }>;
    update(id: number, data: UpdateScheduledInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        link: string | null;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: Prisma.JsonValue | null;
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
        targetIds: Prisma.JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    }>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        link: string | null;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: Prisma.JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    } | null>;
    findPendingBefore(date: Date): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        link: string | null;
        title: string;
        status: string;
        scheduledAt: Date;
        message: string;
        targetType: string;
        targetIds: Prisma.JsonValue | null;
        failedReason: string | null;
        templateId: number | null;
    }[]>;
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
            targetIds: Prisma.JsonValue | null;
            failedReason: string | null;
            templateId: number | null;
        }[];
        total: number;
    }>;
}
//# sourceMappingURL=ScheduledNotificationRepository.d.ts.map