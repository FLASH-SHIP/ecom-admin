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
                type: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                _count: {
                    children: number;
                };
                parentId: number | null;
                order: number;
                slug: string;
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
            type: string;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            parentId: number | null;
            children: {
                id: number;
                name: string;
                order: number;
                slug: string;
            }[];
            order: number;
            slug: string;
        };
        meta: object;
    }>;
    tree: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            type: string;
        };
        output: {
            id: number;
            name: string;
            children: {
                id: number;
                name: string;
                children: {
                    id: number;
                    name: string;
                    order: number;
                    slug: string;
                }[];
                order: number;
                slug: string;
            }[];
            order: number;
            slug: string;
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
            type: string;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            updatedAt: Date;
            parentId: number | null;
            order: number;
            slug: string;
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
            type: string;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            updatedAt: Date;
            parentId: number | null;
            order: number;
            slug: string;
        };
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            type: string;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            updatedAt: Date;
            parentId: number | null;
            order: number;
            slug: string;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map