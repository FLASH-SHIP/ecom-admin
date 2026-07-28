import type { PrismaClient } from "@ecom/prisma";
export declare class TranslationRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findActiveLanguages(): Promise<{
        id: number;
        code: string;
        name: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
    }[]>;
    findPostTranslation(postId: number, langCode: string): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    } | null>;
    findPostTranslations(postId: number): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    }[]>;
    upsertPostTranslation(postId: number, langCode: string, data: {
        title: string;
        slug?: string;
        excerpt?: string;
        content?: string;
    }): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    }>;
    deletePostTranslation(postId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    findCategoryTranslation(categoryId: number, langCode: string): Promise<{
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    } | null>;
    findCategoryTranslations(categoryId: number): Promise<{
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    }[]>;
    upsertCategoryTranslation(categoryId: number, langCode: string, data: {
        name: string;
        description?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    }>;
    deleteCategoryTranslation(categoryId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    findPageTranslation(pageId: number, langCode: string): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
        pageId: number;
        subtitle: string | null;
        ctaText: string | null;
        ctaLink: string | null;
    } | null>;
    findPageTranslations(pageId: number): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
        pageId: number;
        subtitle: string | null;
        ctaText: string | null;
        ctaLink: string | null;
    }[]>;
    upsertPageTranslation(pageId: number, langCode: string, data: {
        title: string;
        slug?: string;
        content?: string;
        excerpt?: string;
        subtitle?: string;
        ctaText?: string;
        ctaLink?: string;
    }): Promise<{
        id: number;
        title: string;
        slug: string | null;
        content: string | null;
        excerpt: string | null;
        langCode: string;
        subtitle: string | null;
        ctaText: string | null;
        ctaLink: string | null;
    }>;
    deletePageTranslation(pageId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    findTagTranslation(tagId: number, langCode: string): Promise<{
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    } | null>;
    findTagTranslations(tagId: number): Promise<{
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    }[]>;
    upsertTagTranslation(tagId: number, langCode: string, data: {
        name: string;
        description?: string | null;
    }): Promise<{
        id: number;
        name: string;
        description: string | null;
        langCode: string;
    }>;
    deleteTagTranslation(tagId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    findMenuItemTranslation(menuItemId: number, langCode: string): Promise<{
        id: number;
        label: string;
        langCode: string;
    } | null>;
    findMenuItemTranslations(menuItemId: number): Promise<{
        id: number;
        label: string;
        langCode: string;
    }[]>;
    upsertMenuItemTranslation(menuItemId: number, langCode: string, data: {
        label: string;
    }): Promise<{
        id: number;
        label: string;
        langCode: string;
    }>;
    deleteMenuItemTranslation(menuItemId: number, langCode: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getTranslationStatus(entityType: string, entityId: number): Promise<{
        translations: {
            langCode: string;
        }[];
        originLangCode: string;
    }>;
    /**
     * Batch translation status — single query for multiple entity IDs.
     * Returns a map of entityId → langCode[] including the original language from LanguageMeta.
     */
    private getRawTranslationRows;
    getBatchTranslationStatus(entityType: string, entityIds: number[]): Promise<Record<number, string[]>>;
}
//# sourceMappingURL=TranslationRepository.d.ts.map