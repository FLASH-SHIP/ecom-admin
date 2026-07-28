import type { RevisionService } from "@ecom/features/revision/services/RevisionService";
import type { ContentStatus } from "@ecom/prisma";
import type { PostRepository } from "../repositories/PostRepository";
import type { SlugService } from "./SlugService";
interface IPostServiceDeps {
    postRepo: PostRepository;
    slugService: SlugService;
    revisionService?: RevisionService;
}
export declare class PostService {
    private queries;
    private commands;
    constructor(deps: IPostServiceDeps);
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
    createPost(data: {
        title: string;
        slug?: string;
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
        categoryIds?: number[];
        tagIds?: number[];
    }): Promise<{
        id: number;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
    }>;
    updatePost(id: number, data: {
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
        categoryIds?: number[];
        tagIds?: number[];
        authorId?: string;
    }): Promise<{
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
    publishPost(id: number): Promise<{
        id: number;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
    }>;
    archivePost(id: number): Promise<{
        id: number;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
    }>;
    recordView(id: number): Promise<{
        id: number;
        views: number;
    }>;
    deletePost(id: number): Promise<{
        id: number;
        deletedAt: Date | null;
    }>;
    restorePost(id: number): Promise<{
        id: number;
        deletedAt: Date | null;
    }>;
    permanentlyDeletePost(id: number): Promise<{
        id: number;
    }>;
    clonePost(id: number, authorId: string): Promise<{
        id: number;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        title: string;
        slug: string;
    }>;
}
export {};
//# sourceMappingURL=PostService.d.ts.map