export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        filters?: {
            fieldKey: string;
            operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
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
        sortBy?: "status" | "id" | "createdAt" | "title" | "publishedAt" | "views" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
        sortDir?: "asc" | "desc" | undefined;
    } | undefined;
    output: import("@flash-ship/ecom-lib").PaginatedResult<{
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        createdAt: Date;
        deletedAt: Date | null;
        slug: string;
        isFeatured: boolean;
        title: string;
        publishedAt: Date | null;
        views: number;
        excerpt: string | null;
        featuredImage: string | null;
        authorId: string;
        author: {
            id: string;
            name: string | null;
            avatarUrl: string | null;
        };
        categories: {
            category: {
                id: number;
                name: string;
                slug: string;
            };
        }[];
    }>;
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const publish: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
    meta: object;
}>;
export declare const archive: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
    meta: object;
}>;
export declare const restore: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
    meta: object;
}>;
export declare const permanentlyDelete: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const bulkDelete: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: {
        success: number;
        failed: number;
    };
    meta: object;
}>;
export declare const bulkPublish: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: {
        success: number;
        failed: number;
    };
    meta: object;
}>;
export declare const bulkArchive: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: {
        success: number;
        failed: number;
    };
    meta: object;
}>;
export declare const bulkRestore: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: {
        success: number;
        failed: number;
    };
    meta: object;
}>;
export declare const clone: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/PostTransformer").PostResponseDto;
    meta: object;
}>;
//# sourceMappingURL=posts.handler.d.ts.map