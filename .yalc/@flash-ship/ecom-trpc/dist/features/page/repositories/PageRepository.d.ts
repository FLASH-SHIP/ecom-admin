import type { ContentStatus, Prisma, PrismaClient } from "@ecom/prisma";
export declare class PageRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(params: {
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
    findById(id: number): Promise<{
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
    } | null>;
    findBySlug(slug: string): Promise<{
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
    } | null>;
    create(data: {
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
    update(id: number, data: {
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
        publishedAt?: Date;
    }): Promise<{
        id: number;
        title: string;
        slug: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
    }>;
    softDelete(id: number): Promise<{
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
    findBySlugExact(slug: string): Promise<{
        id: number;
    } | null>;
}
//# sourceMappingURL=PageRepository.d.ts.map