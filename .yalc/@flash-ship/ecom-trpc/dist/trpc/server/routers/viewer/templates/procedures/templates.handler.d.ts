export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        type?: string | undefined;
        search?: string | undefined;
        isActive?: boolean | undefined;
    } | undefined;
    output: {
        name: string;
        id: number;
        createdAt: Date;
        slug: string;
        isActive: boolean;
        type: string;
        thumbnail: string | null;
    }[];
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        slug: string;
        isActive: boolean;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        thumbnail: string | null;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        slug: string;
        type: "post" | "page" | "email";
        content?: string | undefined;
        structure?: Record<string, unknown> | undefined;
        thumbnail?: string | undefined;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        isActive: boolean;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
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
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        isActive: boolean;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    };
    meta: object;
}>;
export declare const duplicate: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        isActive: boolean;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        isActive: boolean;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    };
    meta: object;
}>;
//# sourceMappingURL=templates.handler.d.ts.map