export declare const templatesRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            search?: string | undefined;
            isActive?: boolean | undefined;
        } | undefined;
        output: {
            type: string;
            id: number;
            createdAt: Date;
            name: string;
            isActive: boolean;
            slug: string;
            thumbnail: string | null;
        }[];
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            type: string;
            id: number;
            createdAt: Date;
            name: string;
            isActive: boolean;
            slug: string;
            content: string | null;
            structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            thumbnail: string | null;
            createdBy: string | null;
        };
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            slug: string;
            type: "email" | "page" | "post";
            content?: string | undefined;
            structure?: Record<string, unknown> | undefined;
            thumbnail?: string | undefined;
        };
        output: {
            type: string;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            isActive: boolean;
            slug: string;
            content: string | null;
            structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            thumbnail: string | null;
            createdBy: string | null;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            name?: string | undefined;
            slug?: string | undefined;
            content?: string | undefined;
            structure?: Record<string, unknown> | undefined;
            thumbnail?: string | undefined;
            isActive?: boolean | undefined;
        };
        output: {
            type: string;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            isActive: boolean;
            slug: string;
            content: string | null;
            structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            thumbnail: string | null;
            createdBy: string | null;
        };
        meta: object;
    }>;
    duplicate: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            type: string;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            isActive: boolean;
            slug: string;
            content: string | null;
            structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            thumbnail: string | null;
            createdBy: string | null;
        };
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            type: string;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            isActive: boolean;
            slug: string;
            content: string | null;
            structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            thumbnail: string | null;
            createdBy: string | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map