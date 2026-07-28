export declare const taxonomiesRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            type?: string | undefined;
            parentId?: number | null | undefined;
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        } | undefined;
        output: {
            items: {
                name: string;
                id: number;
                createdAt: Date;
                order: number;
                slug: string;
                _count: {
                    children: number;
                };
                parentId: number | null;
                type: string;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                description: string | null;
            }[];
            total: number;
            page: number;
            perPage: number;
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
            order: number;
            slug: string;
            parentId: number | null;
            children: {
                name: string;
                id: number;
                order: number;
                slug: string;
            }[];
            type: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            description: string | null;
        };
        meta: object;
    }>;
    tree: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            type: string;
        };
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
                }[];
            }[];
        }[];
        meta: object;
    }>;
    types: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            type: string;
            count: number;
        }[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            slug: string;
            type: string;
            description?: string | undefined;
            parentId?: number | undefined;
            order?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            slug: string;
            parentId: number | null;
            type: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
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
            parentId?: number | null | undefined;
            order?: number | undefined;
            metadata?: Record<string, unknown> | undefined;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            slug: string;
            parentId: number | null;
            type: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            description: string | null;
        };
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
            order: number;
            slug: string;
            parentId: number | null;
            type: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            description: string | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map