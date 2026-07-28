export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        parentId?: number | null | undefined;
        search?: string | undefined;
    } | undefined;
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        _count: {
            children: number;
            files: number;
        };
        parentId: number | null;
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
        updatedAt: Date;
        slug: string;
        _count: {
            children: number;
            files: number;
        };
        parentId: number | null;
        children: {
            name: string;
            id: number;
            slug: string;
        }[];
    };
    meta: object;
}>;
export declare const tree: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        name: string;
        id: number;
        slug: string;
        _count: {
            files: number;
        };
        children: {
            name: string;
            id: number;
            slug: string;
            children: {
                name: string;
                id: number;
                slug: string;
            }[];
        }[];
    }[];
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        slug?: string | undefined;
        parentId?: number | null | undefined;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        slug: string;
        parentId: number | null;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        name?: string | undefined;
        slug?: string | undefined;
        parentId?: number | null | undefined;
    };
    output: {
        name: string;
        id: number;
        updatedAt: Date;
        slug: string;
        parentId: number | null;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        force?: boolean | undefined;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        parentId: number | null;
        color: string | null;
        isFavorite: boolean;
    };
    meta: object;
}>;
//# sourceMappingURL=folders.handler.d.ts.map