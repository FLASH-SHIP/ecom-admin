export declare const pagesRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("../../..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../../../init").ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            filters?: {
                fieldKey: string;
                operator: "endsWith" | "startsWith" | "contains" | "notContains" | "equals" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "notEquals" | "between" | "betweenInclusive" | "empty" | "notEmpty";
                value: string;
                value2?: string | undefined;
            }[] | undefined;
            search?: string | undefined;
            status?: "DRAFT" | "PENDING" | "REVIEW" | "REJECTED" | "PUBLISHED" | "ARCHIVED" | undefined;
            parentId?: number | null | undefined;
            page?: number | undefined;
            pageSize?: number | undefined;
            perPage?: number | undefined;
            sortBy?: "id" | "createdAt" | "order" | "title" | "status" | undefined;
            sortDir?: "asc" | "desc" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        } | undefined;
        output: {
            data: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                order: number;
                slug: string;
                _count: {
                    children: number;
                };
                parentId: number | null;
                title: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                authorId: string;
                publishedAt: Date | null;
                template: string | null;
                author: {
                    name: string | null;
                    id: string;
                };
            }[];
            meta: {
                total: number;
                page: number;
                perPage: number;
                totalPages: number;
            };
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            order: number;
            slug: string;
            parentId: number | null;
            title: string;
            content: string | null;
            excerpt: string | null;
            featuredImage: string | null;
            bannerImage: string | null;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string;
            publishedAt: Date | null;
            template: string | null;
            heroBanner: string | null;
            layout: string | null;
            hideTitle: boolean;
            hideBreadcrumb: boolean;
            hideSidebar: boolean;
            hideFooter: boolean;
            gallery: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            subtitle: string | null;
            ctaText: string | null;
            ctaLink: string | null;
            author: {
                name: string | null;
                id: string;
                email: string;
            };
        };
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            title: string;
            slug: string;
            content?: string | undefined;
            excerpt?: string | undefined;
            featuredImage?: string | undefined;
            template?: string | undefined;
            order?: number | undefined;
            parentId?: number | undefined;
            status?: "DRAFT" | "PENDING" | "REVIEW" | "REJECTED" | "PUBLISHED" | "ARCHIVED" | undefined;
            scheduledAt?: string | null | undefined;
            bannerImage?: string | undefined;
            heroBanner?: string | undefined;
            layout?: string | undefined;
            hideTitle?: boolean | undefined;
            hideBreadcrumb?: boolean | undefined;
            hideSidebar?: boolean | undefined;
            hideFooter?: boolean | undefined;
            gallery?: string[] | undefined;
            subtitle?: string | undefined;
            ctaText?: string | undefined;
            ctaLink?: string | undefined;
        };
        output: {
            id: number;
            slug: string;
            title: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            title?: string | undefined;
            slug?: string | undefined;
            content?: string | undefined;
            excerpt?: string | undefined;
            featuredImage?: string | undefined;
            template?: string | undefined;
            order?: number | undefined;
            parentId?: number | null | undefined;
            status?: "DRAFT" | "PENDING" | "REVIEW" | "REJECTED" | "PUBLISHED" | "ARCHIVED" | undefined;
            scheduledAt?: string | null | undefined;
            bannerImage?: string | undefined;
            heroBanner?: string | undefined;
            layout?: string | undefined;
            hideTitle?: boolean | undefined;
            hideBreadcrumb?: boolean | undefined;
            hideSidebar?: boolean | undefined;
            hideFooter?: boolean | undefined;
            gallery?: string[] | undefined;
            subtitle?: string | undefined;
            ctaText?: string | undefined;
            ctaLink?: string | undefined;
        };
        output: {
            id: number;
            slug: string;
            title: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        };
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            deletedAt: Date | null;
            order: number;
            slug: string;
            parentId: number | null;
            title: string;
            content: string | null;
            excerpt: string | null;
            featuredImage: string | null;
            bannerImage: string | null;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string;
            publishedAt: Date | null;
            scheduledAt: Date | null;
            template: string | null;
            heroBanner: string | null;
            layout: string | null;
            hideTitle: boolean;
            hideBreadcrumb: boolean;
            hideSidebar: boolean;
            hideFooter: boolean;
            gallery: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            subtitle: string | null;
            ctaText: string | null;
            ctaLink: string | null;
        };
        meta: object;
    }>;
    revisions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            pageId: number;
        };
        output: {
            id: number;
            createdAt: Date;
            title: string;
            authorId: string;
            note: string | null;
            author: {
                name: string | null;
                id: string;
            };
        }[];
        meta: object;
    }>;
    revision: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            title: string;
            content: string | null;
            authorId: string;
            referenceId: number;
            referenceType: string;
            note: string | null;
            author: {
                name: string | null;
                id: string;
            };
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map