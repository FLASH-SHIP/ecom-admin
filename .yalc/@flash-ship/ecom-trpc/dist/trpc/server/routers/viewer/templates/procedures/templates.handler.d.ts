export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const duplicate: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
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
//# sourceMappingURL=templates.handler.d.ts.map