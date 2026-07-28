import type { RevisionService } from "@ecom/features/revision/services/RevisionService";
import { type ContentStatus } from "@ecom/prisma";
import type { PostRepository } from "../repositories/PostRepository";
import type { SlugService } from "../services/SlugService";
export interface IPostCommandsDeps {
    postRepo: PostRepository;
    slugService: SlugService;
    revisionService?: RevisionService;
}
export declare class PostCommands {
    private deps;
    constructor(deps: IPostCommandsDeps);
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
//# sourceMappingURL=PostCommands.d.ts.map