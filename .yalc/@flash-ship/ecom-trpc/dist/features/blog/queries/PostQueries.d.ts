import type { ContentStatus } from "@ecom/prisma";
import type { PostRepository } from "../repositories/PostRepository";
export interface IPostQueriesDeps {
    postRepo: PostRepository;
}
export declare class PostQueries {
    private deps;
    constructor(deps: IPostQueriesDeps);
    listPosts(options: {
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
    getPost(id: number): Promise<{
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
    }>;
    getPostBySlug(slug: string): Promise<{
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
    }>;
}
//# sourceMappingURL=PostQueries.d.ts.map