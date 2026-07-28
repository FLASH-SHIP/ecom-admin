import type { NotificationTemplateRepository } from "../repositories/NotificationTemplateRepository";
interface ITemplateServiceDeps {
    templateRepo: NotificationTemplateRepository;
}
export declare class NotificationTemplateService {
    private deps;
    constructor(deps: ITemplateServiceDeps);
    listTemplates(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }[]>;
    getTemplateByType(type: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    } | null>;
    getTemplateById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    } | null>;
    createTemplate(data: {
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
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }>;
    updateTemplate(id: number, data: {
        titleTemplate?: Record<string, string>;
        messageTemplate?: Record<string, string>;
        emailSubjectTemplate?: Record<string, string> | null;
        emailBodyTemplate?: Record<string, string> | null;
        variables?: Record<string, string>;
        channelInApp?: boolean;
        channelPush?: boolean;
        channelEmail?: boolean;
        layoutType?: string | null;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }>;
    deleteTemplate(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        type: string;
        titleTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        messageTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        emailSubjectTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        emailBodyTemplate: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        variables: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        channelInApp: boolean;
        channelPush: boolean;
        channelEmail: boolean;
        layoutType: string | null;
    }>;
}
export {};
//# sourceMappingURL=NotificationTemplateService.d.ts.map