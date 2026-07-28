import type { PageRepository } from "@ecom/features/page/repositories/PageRepository";
import type { RevisionRepository } from "@ecom/features/shared/repositories/RevisionRepository";
import type { ContentStatus, Prisma } from "@ecom/prisma";
export interface IPageServiceDeps {
    pageRepo: PageRepository;
    revisionRepo: RevisionRepository;
}
export declare class PageService {
    private deps;
    constructor(deps: IPageServiceDeps);
    listPages(params: {
        search?: string;
        status?: ContentStatus;
        parentId?: number | null;
        page?: number;
        perPage?: number;
        sortBy?: string;
        sortDir?: "asc" | "desc";
        where?: Record<string, unknown>;
    }): Promise<{
        data: {
            id: number;
            parentId: number | null;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                children: number;
            };
            title: string;
            slug: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string;
            publishedAt: Date | null;
            author: {
                id: string;
                name: string | null;
            };
            order: number;
            template: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
    }>;
    getPage(id: number): Promise<{
        id: number;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        authorId: string;
        publishedAt: Date | null;
        author: {
            id: string;
            name: string | null;
            email: string;
        };
        order: number;
        gallery: Prisma.JsonValue;
        template: string | null;
        heroBanner: string | null;
        layout: string | null;
        hideTitle: boolean;
        hideBreadcrumb: boolean;
        hideSidebar: boolean;
        hideFooter: boolean;
        subtitle: string | null;
        ctaText: string | null;
        ctaLink: string | null;
    }>;
    getPageBySlug(slug: string): Promise<{
        id: number;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        publishedAt: Date | null;
        seoMeta: {
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        template: string | null;
    }>;
    createPage(data: {
        title: string;
        slug: string;
        content?: string;
        excerpt?: string;
        featuredImage?: string;
        template?: string;
        order?: number;
        parentId?: number;
        status?: ContentStatus;
        authorId: string;
        bannerImage?: string;
        heroBanner?: string;
        layout?: string;
        hideTitle?: boolean;
        hideBreadcrumb?: boolean;
        hideSidebar?: boolean;
        hideFooter?: boolean;
        gallery?: Prisma.InputJsonValue;
        subtitle?: string;
        ctaText?: string;
        ctaLink?: string;
    }): Promise<{
        id: number;
        title: string;
        slug: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
    }>;
    updatePage(id: number, data: {
        title?: string;
        slug?: string;
        content?: string;
        excerpt?: string;
        featuredImage?: string;
        template?: string;
        order?: number;
        parentId?: number | null;
        status?: ContentStatus;
        bannerImage?: string;
        heroBanner?: string;
        layout?: string;
        hideTitle?: boolean;
        hideBreadcrumb?: boolean;
        hideSidebar?: boolean;
        hideFooter?: boolean;
        gallery?: Prisma.InputJsonValue;
        subtitle?: string;
        ctaText?: string;
        ctaLink?: string;
    }, authorId: string): Promise<{
        id: number;
        title: string;
        slug: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
    }>;
    deletePage(id: number): Promise<{
        id: number;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        title: string;
        slug: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        authorId: string;
        publishedAt: Date | null;
        scheduledAt: Date | null;
        order: number;
        gallery: Prisma.JsonValue | null;
        template: string | null;
        heroBanner: string | null;
        layout: string | null;
        hideTitle: boolean;
        hideBreadcrumb: boolean;
        hideSidebar: boolean;
        hideFooter: boolean;
        subtitle: string | null;
        ctaText: string | null;
        ctaLink: string | null;
    }>;
    getRevisions(pageId: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        authorId: string;
        author: {
            id: string;
            name: string | null;
        };
        note: string | null;
    }[]>;
    getRevision(revisionId: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        content: string | null;
        authorId: string;
        author: {
            id: string;
            name: string | null;
        };
        referenceId: number;
        referenceType: string;
        note: string | null;
    }>;
}
//# sourceMappingURL=PageService.d.ts.map