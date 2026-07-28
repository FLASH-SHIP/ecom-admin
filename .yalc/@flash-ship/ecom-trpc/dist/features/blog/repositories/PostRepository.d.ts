import type { ContentStatus, PrismaClient } from "@ecom/prisma";
export declare class PostRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        isFeatured: boolean;
        allowComments: boolean;
        formatType: string | null;
        externalSource: string | null;
        sponsoredBy: string | null;
        views: number;
        publishedAt: Date | null;
        deletedAt: Date | null;
        authorId: string;
    } | null>;
    findByIdWithRelations(id: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        isFeatured: boolean;
        allowComments: boolean;
        formatType: string | null;
        externalSource: string | null;
        sponsoredBy: string | null;
        views: number;
        publishedAt: Date | null;
        deletedAt: Date | null;
        categories: {
            category: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
        tags: {
            tag: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
        translations: {
            id: number;
            title: string;
            slug: string | null;
            content: string | null;
            excerpt: string | null;
            langCode: string;
        }[];
        seoMeta: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        authorId: string;
        author: {
            email: string;
            name: string | null;
            id: string;
            avatarUrl: string | null;
        };
    } | null>;
    findBySlug(slug: string): Promise<{
        id: number;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        isFeatured: boolean;
        externalSource: string | null;
        sponsoredBy: string | null;
        views: number;
        publishedAt: Date | null;
        categories: {
            category: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
        tags: {
            tag: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
        authorId: string;
        author: {
            name: string | null;
            id: string;
            avatarUrl: string | null;
        };
    } | null>;
    findMany(options: {
        status?: ContentStatus;
        authorId?: string;
        categoryId?: number;
        isFeatured?: boolean;
        search?: string;
        includeDeleted?: boolean;
        page?: number;
        perPage?: number;
        sortBy?: "id" | "title" | "status" | "createdAt" | "publishedAt" | "views";
        sortOrder?: "asc" | "desc";
        where?: Record<string, unknown>;
    }): Promise<import("@ecom/lib").PaginatedResult<{
        id: number;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
        excerpt: string | null;
        featuredImage: string | null;
        isFeatured: boolean;
        views: number;
        publishedAt: Date | null;
        deletedAt: Date | null;
        categories: {
            category: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
        authorId: string;
        author: {
            name: string | null;
            id: string;
            avatarUrl: string | null;
        };
    }>>;
    create(data: {
        title: string;
        slug: string;
        content?: string;
        excerpt?: string;
        featuredImage?: string;
        bannerImage?: string;
        isFeatured?: boolean;
        allowComments?: boolean;
        formatType?: string;
        externalSource?: string;
        sponsoredBy?: string;
        status?: ContentStatus;
        authorId: string;
        publishedAt?: Date;
        categoryIds?: number[];
        tagIds?: number[];
    }): Promise<{
        id: number;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
    }>;
    update(id: number, data: {
        title?: string;
        slug?: string;
        content?: string;
        excerpt?: string;
        featuredImage?: string | null;
        bannerImage?: string | null;
        isFeatured?: boolean;
        allowComments?: boolean;
        formatType?: string | null;
        externalSource?: string | null;
        sponsoredBy?: string | null;
        status?: ContentStatus;
        publishedAt?: Date | null;
        authorId?: string;
    }): Promise<{
        id: number;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
    }>;
    updateCategories(postId: number, categoryIds: number[]): Promise<void>;
    updateTags(postId: number, tagIds: number[]): Promise<void>;
    incrementViews(id: number): Promise<{
        id: number;
        views: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
        deletedAt: Date | null;
    }>;
    restore(id: number): Promise<{
        id: number;
        deletedAt: Date | null;
    }>;
    hardDelete(id: number): Promise<{
        id: number;
    }>;
}
//# sourceMappingURL=PostRepository.d.ts.map