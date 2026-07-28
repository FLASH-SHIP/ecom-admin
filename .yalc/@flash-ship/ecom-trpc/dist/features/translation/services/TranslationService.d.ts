import type { SlugRepository } from "@ecom/features/blog/repositories/SlugRepository";
import type { TranslationRepository } from "@ecom/features/translation/repositories/TranslationRepository";
export interface ITranslationServiceDeps {
    translationRepo: TranslationRepository;
    slugRepo: SlugRepository;
}
type EntityType = "post" | "category" | "page" | "tag" | "menuItem";
export declare class TranslationService {
    private deps;
    constructor(deps: ITranslationServiceDeps);
    getLanguages(): Promise<{
        id: number;
        code: string;
        name: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
    }[]>;
    getTranslation(entityType: EntityType, entityId: number, langCode: string): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    } | {
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    } | {
        id: number;
        label: string;
        langCode: string;
    } | null>;
    listTranslations(entityType: EntityType, entityId: number): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    }[] | {
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    }[] | {
        id: number;
        label: string;
        langCode: string;
    }[]>;
    saveTranslation(entityType: EntityType, entityId: number, langCode: string, data: Record<string, string | undefined>): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    } | {
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    } | {
        id: number;
        label: string;
        langCode: string;
    }>;
    deleteTranslation(entityType: EntityType, entityId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getTranslationStatus(entityType: EntityType, entityId: number): Promise<{
        translations: {
            langCode: string;
        }[];
        originLangCode: string;
    }>;
    getBatchTranslationStatus(entityType: EntityType, entityIds: number[]): Promise<Record<number, string[]>>;
}
export {};
//# sourceMappingURL=TranslationService.d.ts.map