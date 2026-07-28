import type { PrismaClient } from "@ecom/prisma";
export declare class SeoMetaRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByPostId(postId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    findByCategoryId(categoryId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    findByPageId(pageId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    findByTagId(tagId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    upsertForPost(postId: number, data: {
        seoTitle?: string;
        seoDescription?: string;
        seoImage?: string;
        indexMode?: string;
    }): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    }>;
    upsertForCategory(categoryId: number, data: {
        seoTitle?: string;
        seoDescription?: string;
        seoImage?: string;
        indexMode?: string;
    }): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    }>;
    upsertForPage(pageId: number, data: {
        seoTitle?: string;
        seoDescription?: string;
        seoImage?: string;
        indexMode?: string;
    }): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    }>;
    upsertForTag(tagId: number, data: {
        seoTitle?: string;
        seoDescription?: string;
        seoImage?: string;
        indexMode?: string;
    }): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    }>;
    deleteByPostId(postId: number): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
//# sourceMappingURL=SeoMetaRepository.d.ts.map