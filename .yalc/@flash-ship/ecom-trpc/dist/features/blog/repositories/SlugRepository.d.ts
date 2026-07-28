import type { PrismaClient } from "@ecom/prisma";
export declare class SlugRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByKeyAndPrefix(key: string, prefix: string): Promise<{
        key: string;
        id: number;
        referenceId: number;
        referenceType: string;
        prefix: string;
    } | null>;
    findByReference(referenceId: number, referenceType: string): Promise<{
        key: string;
        id: number;
        translations: {
            key: string;
            id: number;
            langCode: string;
        }[];
        prefix: string;
    } | null>;
    exists(key: string, prefix: string, excludeId?: number): Promise<boolean>;
    existsTranslation(key: string, prefix: string, langCode: string, excludeSlugId?: number): Promise<boolean>;
    upsert(data: {
        referenceId: number;
        referenceType: string;
        key: string;
        prefix: string;
    }): Promise<{
        key: string;
        id: number;
        prefix: string;
    }>;
    deleteByReference(referenceId: number, referenceType: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    upsertTranslation(slugId: number, langCode: string, key: string): Promise<{
        key: string;
        id: number;
        langCode: string;
        slugId: number;
    }>;
    deleteTranslation(slugId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
//# sourceMappingURL=SlugRepository.d.ts.map