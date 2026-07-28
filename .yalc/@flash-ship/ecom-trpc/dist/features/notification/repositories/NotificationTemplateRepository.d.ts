import { Prisma } from "@ecom/prisma";
export interface CreateTemplateInput {
    type: string;
    titleTemplate: Record<string, string>;
    messageTemplate: Record<string, string>;
    emailSubjectTemplate?: Record<string, string> | null;
    emailBodyTemplate?: Record<string, string> | null;
    variables?: Record<string, string>;
    channelInApp?: boolean;
    channelPush?: boolean;
    channelEmail?: boolean;
    layoutType?: string | null;
}
export interface UpdateTemplateInput {
    titleTemplate?: Record<string, string>;
    messageTemplate?: Record<string, string>;
    emailSubjectTemplate?: Record<string, string> | null;
    emailBodyTemplate?: Record<string, string> | null;
    variables?: Record<string, string>;
    channelInApp?: boolean;
    channelPush?: boolean;
    channelEmail?: boolean;
    layoutType?: string | null;
}
export declare class NotificationTemplateRepository {
    create(data: CreateTemplateInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: Prisma.JsonValue;
        messageTemplate: Prisma.JsonValue;
        emailSubjectTemplate: Prisma.JsonValue | null;
        emailBodyTemplate: Prisma.JsonValue | null;
        variables: Prisma.JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }>;
    update(id: number, data: UpdateTemplateInput): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: Prisma.JsonValue;
        messageTemplate: Prisma.JsonValue;
        emailSubjectTemplate: Prisma.JsonValue | null;
        emailBodyTemplate: Prisma.JsonValue | null;
        variables: Prisma.JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: Prisma.JsonValue;
        messageTemplate: Prisma.JsonValue;
        emailSubjectTemplate: Prisma.JsonValue | null;
        emailBodyTemplate: Prisma.JsonValue | null;
        variables: Prisma.JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }>;
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: Prisma.JsonValue;
        messageTemplate: Prisma.JsonValue;
        emailSubjectTemplate: Prisma.JsonValue | null;
        emailBodyTemplate: Prisma.JsonValue | null;
        variables: Prisma.JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    } | null>;
    findByType(type: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: Prisma.JsonValue;
        messageTemplate: Prisma.JsonValue;
        emailSubjectTemplate: Prisma.JsonValue | null;
        emailBodyTemplate: Prisma.JsonValue | null;
        variables: Prisma.JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    } | null>;
    list(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: Prisma.JsonValue;
        messageTemplate: Prisma.JsonValue;
        emailSubjectTemplate: Prisma.JsonValue | null;
        emailBodyTemplate: Prisma.JsonValue | null;
        variables: Prisma.JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }[]>;
}
//# sourceMappingURL=NotificationTemplateRepository.d.ts.map