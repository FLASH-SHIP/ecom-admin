export declare const postsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
            authorId?: string | undefined;
            categoryId?: number | undefined;
            isFeatured?: boolean | undefined;
            search?: string | undefined;
            includeDeleted?: boolean | undefined;
            page?: number | undefined;
            pageSize?: number | undefined;
            perPage?: number | undefined;
            sortBy?: "id" | "createdAt" | "title" | "views" | "status" | "publishedAt" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
            sortDir?: "asc" | "desc" | undefined;
        } | undefined;
        output: import("@flash-ship/ecom-lib").PaginatedResult<{
            id: number;
            createdAt: Date;
            deletedAt: Date | null;
            slug: string;
            title: string;
            excerpt: string | null;
            featuredImage: string | null;
            isFeatured: boolean;
            views: number;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string;
            publishedAt: Date | null;
            author: {
                name: string | null;
                id: string;
                avatarUrl: string | null;
            };
            categories: {
                category: {
                    name: string;
                    id: number;
                    slug: string;
                };
            }[];
        }>;
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            title: string;
            slug?: string | undefined;
            content?: string | undefined;
            excerpt?: string | undefined;
            featuredImage?: string | undefined;
            bannerImage?: string | undefined;
            isFeatured?: boolean | undefined;
            allowComments?: boolean | undefined;
            formatType?: string | undefined;
            externalSource?: string | undefined;
            sponsoredBy?: string | undefined;
            status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
            scheduledAt?: string | null | undefined;
            expiresAt?: string | null | undefined;
            categoryIds?: number[] | undefined;
            tagIds?: number[] | undefined;
            authorId?: string | undefined;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            title?: string | undefined;
            slug?: string | undefined;
            content?: string | undefined;
            excerpt?: string | undefined;
            featuredImage?: string | null | undefined;
            bannerImage?: string | null | undefined;
            isFeatured?: boolean | undefined;
            allowComments?: boolean | undefined;
            formatType?: string | null | undefined;
            externalSource?: string | null | undefined;
            sponsoredBy?: string | null | undefined;
            status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
            scheduledAt?: string | null | undefined;
            expiresAt?: string | null | undefined;
            categoryIds?: number[] | undefined;
            tagIds?: number[] | undefined;
            authorId?: string | undefined;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    publish: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    archive: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    clone: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    restore: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
        meta: object;
    }>;
    permanentlyDelete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    bulkDelete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            ids: number[];
        };
        output: {
            success: number;
            failed: number;
        };
        meta: object;
    }>;
    bulkPublish: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            ids: number[];
        };
        output: {
            success: number;
            failed: number;
        };
        meta: object;
    }>;
    bulkArchive: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            ids: number[];
        };
        output: {
            success: number;
            failed: number;
        };
        meta: object;
    }>;
    bulkRestore: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            ids: number[];
        };
        output: {
            success: number;
            failed: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map