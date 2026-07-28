export declare const packingRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            search?: string | undefined;
            status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
            page?: number | undefined;
            limit?: number | undefined;
            orderBy?: "asc" | "desc" | undefined;
        };
        output: {
            items: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                image: string | null;
            }[];
            total: number;
            page: number;
            limit: number;
            totalPages: number;
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
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
            image: string | null;
        };
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            image?: string | null | undefined;
            description?: string | null | undefined;
            status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
        };
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            image: string | null;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            name?: string | undefined;
            image?: string | null | undefined;
            description?: string | null | undefined;
            status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
        };
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            image: string | null;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
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