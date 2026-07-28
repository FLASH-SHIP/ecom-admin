export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        filters?: {
            fieldKey: string;
            operator: "endsWith" | "startsWith" | "contains" | "equals" | "notContains" | "notEquals" | "between" | "betweenInclusive" | "greaterThan" | "greaterThanOrEqual" | "lessThan" | "lessThanOrEqual" | "empty" | "notEmpty";
            value: string;
            value2?: string | undefined;
        }[] | undefined;
        search?: string | undefined;
        page?: number | undefined;
        pageSize?: number | undefined;
        sortBy?: "status" | "id" | "createdAt" | "name" | undefined;
        sortDir?: "asc" | "desc" | undefined;
    } | undefined;
    output: {
        rows: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            name: string;
            _count: {
                posts: number;
            };
            slug: string;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            posts: number;
        };
        slug: string;
        authorId: string | null;
        translations: {
            description: string | null;
            id: number;
            name: string;
            langCode: string;
        }[];
        authorType: string;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        slug?: string | undefined;
        description?: string | undefined;
        status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
    };
    output: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        slug: string;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        name?: string | undefined;
        slug?: string | undefined;
        description?: string | undefined;
        status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
    };
    output: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            posts: number;
        };
        slug: string;
        authorId: string | null;
        translations: {
            description: string | null;
            id: number;
            name: string;
            langCode: string;
        }[];
        authorType: string;
    } | null;
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        slug: string;
    };
    meta: object;
}>;
export declare const restore: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        slug: string;
    };
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
//# sourceMappingURL=tags.handler.d.ts.map