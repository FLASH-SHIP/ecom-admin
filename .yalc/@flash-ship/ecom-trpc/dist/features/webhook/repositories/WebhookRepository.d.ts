import type { Prisma, PrismaClient } from "@ecom/prisma";
export interface CreateWebhookInput {
    name: string;
    url: string;
    secret?: string | null;
    events: string[];
    retries?: number;
    timeout?: number;
    ownerId?: string | null;
    ownerType?: string | null;
    apiVersion?: string;
}
export interface UpdateWebhookInput {
    name?: string;
    url?: string;
    secret?: string | null;
    oldSecret?: string | null;
    secretUpdatedAt?: Date | null;
    events?: string[];
    isActive?: boolean;
    retries?: number;
    timeout?: number;
    apiVersion?: string;
}
export declare class WebhookRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(owner?: {
        ownerId?: string;
        ownerType?: string;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        _count: {
            logs: number;
        };
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        events: string[];
        retries: number;
        timeout: number;
        failureCount: number;
        apiVersion: string;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        events: string[];
        retries: number;
        timeout: number;
        failureCount: number;
        apiVersion: string;
    } | null>;
    findByEvent(event: string, owner?: {
        ownerId?: string;
        ownerType?: string;
    }): Promise<{
        id: number;
        url: string;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        retries: number;
        timeout: number;
        apiVersion: string;
    }[]>;
    create(data: CreateWebhookInput): Promise<{
        id: number;
        name: string;
        secret: string | null;
    }>;
    update(id: number, data: UpdateWebhookInput): Promise<{
        id: number;
        name: string;
    }>;
    remove(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        url: string;
        ownerId: string | null;
        ownerType: string | null;
        secret: string | null;
        oldSecret: string | null;
        secretUpdatedAt: Date | null;
        events: string[];
        retries: number;
        timeout: number;
        failureCount: number;
        apiVersion: string;
    }>;
    cascadeDeleteOwner(ownerId: string, ownerType: string, tx?: Prisma.TransactionClient): Promise<void>;
    incrementFailureCount(id: number): Promise<{
        id: number;
        isActive: boolean;
        failureCount: number;
    }>;
    resetFailureCount(id: number): Promise<{
        id: number;
    }>;
    rotateSecret(id: number, newSecret: string, oldSecret: string | null): Promise<{
        id: number;
        secret: string | null;
    }>;
    createLog(data: {
        webhookId: number;
        event: string;
        payload?: unknown;
        response?: string;
        statusCode?: number;
        success: boolean;
        attempts?: number;
        error?: string;
    }): Promise<{
        id: number;
    }>;
    findLogs(webhookId: number, limit?: number): Promise<{
        error: string | null;
        id: number;
        createdAt: Date;
        statusCode: number | null;
        attempts: number;
        event: string;
        payload: Prisma.JsonValue;
        response: string | null;
        success: boolean;
    }[]>;
}
//# sourceMappingURL=WebhookRepository.d.ts.map