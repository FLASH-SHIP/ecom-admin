export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
        image: string | null;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
//# sourceMappingURL=packing.handler.d.ts.map