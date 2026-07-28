export declare const tagsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            page?: number | undefined;
            pageSize?: number | undefined;
            sortBy?: "name" | "id" | "createdAt" | "status" | undefined;
            sortDir?: "asc" | "desc" | undefined;
        } | undefined;
        output: {
            rows: {
                name: string;
                id: number;
                createdAt: Date;
                slug: string;
                _count: {
                    posts: number;
                };
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            _count: {
                posts: number;
            };
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string | null;
            translations: {
                name: string;
                id: number;
                langCode: string;
                description: string | null;
            }[];
            description: string | null;
            authorType: string;
        };
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            slug?: string | undefined;
            description?: string | undefined;
            status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            slug: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            name?: string | undefined;
            slug?: string | undefined;
            description?: string | undefined;
            status?: "DRAFT" | "PENDING" | "PUBLISHED" | undefined;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            _count: {
                posts: number;
            };
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string | null;
            translations: {
                name: string;
                id: number;
                langCode: string;
                description: string | null;
            }[];
            description: string | null;
            authorType: string;
        } | null;
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
        };
        meta: object;
    }>;
    restore: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
        };
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
}>>;
//# sourceMappingURL=_router.d.ts.map