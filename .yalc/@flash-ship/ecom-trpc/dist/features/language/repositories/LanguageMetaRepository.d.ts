import type { PrismaClient } from "@ecom/prisma";
export declare class LanguageMetaRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByReference(referenceId: number, referenceType: string): Promise<{
        id: number;
        langCode: string;
        referenceId: number;
        referenceType: string;
        origin: string;
    } | null>;
    findByOrigin(origin: string): Promise<{
        id: number;
        langCode: string;
        referenceId: number;
        referenceType: string;
        language: {
            id: number;
            code: string;
            name: string;
            locale: string;
            flag: string | null;
        };
        origin: string;
    }[]>;
    findRelatedItems(referenceId: number, referenceType: string): Promise<{
        id: number;
        langCode: string;
        referenceId: number;
        referenceType: string;
        language: {
            id: number;
            code: string;
            name: string;
            locale: string;
            flag: string | null;
        };
        origin: string;
    }[]>;
    saveMetaData(referenceId: number, referenceType: string, langCode: string, origin?: string): Promise<{
        id: number;
        langCode: string;
        referenceId: number;
        referenceType: string;
        origin: string;
    }>;
    deleteByReference(referenceId: number, referenceType: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    deleteByLangCode(langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
//# sourceMappingURL=LanguageMetaRepository.d.ts.map