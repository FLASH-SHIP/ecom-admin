import type { PrismaClient } from "@ecom/prisma";
export interface CreateApiKeyInput {
    ownerId: string;
    ownerType: string;
    hashedKey: string;
    maskedKey: string;
    label?: string | null;
    expiresAt?: Date | null;
    allowedIps?: string[];
}
export declare class ApiKeyRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByHashedKey(hashedKey: string): Promise<{
        id: string;
        createdAt: Date;
        expiresAt: Date | null;
        ownerId: string;
        ownerType: string;
        maskedKey: string;
        allowedIps: string[];
    } | null>;
    findManyByOwner(ownerId: string, ownerType: string): Promise<{
        id: string;
        createdAt: Date;
        expiresAt: Date | null;
        lastUsedAt: Date | null;
        label: string | null;
        ownerId: string;
        ownerType: string;
        maskedKey: string;
        allowedIps: string[];
    }[]>;
    countByOwner(ownerId: string, ownerType: string): Promise<number>;
    create(data: CreateApiKeyInput): Promise<{
        id: string;
        createdAt: Date;
        label: string | null;
        maskedKey: string;
    }>;
    remove(id: string): Promise<{
        id: string;
        createdAt: Date;
        expiresAt: Date | null;
        lastUsedAt: Date | null;
        label: string | null;
        ownerId: string;
        ownerType: string;
        hashedKey: string;
        maskedKey: string;
        allowedIps: string[];
    }>;
    updateLastUsed(id: string): Promise<{
        id: string;
    }>;
}
//# sourceMappingURL=ApiKeyRepository.d.ts.map