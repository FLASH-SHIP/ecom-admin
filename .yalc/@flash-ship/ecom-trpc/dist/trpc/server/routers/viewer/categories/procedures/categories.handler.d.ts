export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        filters?: {
            fieldKey: string;
            operator: "endsWith" | "startsWith" | "contains" | "notContains" | "equals" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "notEquals" | "between" | "betweenInclusive" | "empty" | "notEmpty";
            value: string;
            value2?: string | undefined;
        }[] | undefined;
        search?: string | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        sortBy?: "name" | "id" | "createdAt" | "order" | "status" | undefined;
        sortDir?: "asc" | "desc" | undefined;
    } | undefined;
    output: {
        items: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const tree: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        name: string;
        id: number;
        order: number;
        slug: string;
        children: {
            name: string;
            id: number;
            order: number;
            slug: string;
            children: {
                name: string;
                id: number;
                order: number;
                slug: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                icon: string | null;
            }[];
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            icon: string | null;
        }[];
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        icon: string | null;
    }[];
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        slug?: string | undefined;
        description?: string | undefined;
        icon?: string | undefined;
        isFeatured?: number | undefined;
        isDefault?: number | undefined;
        status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
        parentId?: number | undefined;
        order?: number | undefined;
    };
    output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        name?: string | undefined;
        slug?: string | undefined;
        description?: string | null | undefined;
        icon?: string | null | undefined;
        isFeatured?: number | undefined;
        isDefault?: number | undefined;
        status?: "DRAFT" | "PENDING" | "PUBLISHED" | "ARCHIVED" | undefined;
        parentId?: number | null | undefined;
        order?: number | undefined;
    };
    output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
    meta: object;
}>;
export declare const restore: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: import("@ecom/features/blog/transformers/CategoryTransformer").CategoryResponseDto;
    meta: object;
}>;
//# sourceMappingURL=categories.handler.d.ts.map