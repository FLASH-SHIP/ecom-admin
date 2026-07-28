export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        parentId?: number | null | undefined;
        search?: string | undefined;
    } | undefined;
    output: {
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            children: number;
            files: number;
        };
        parentId: number | null;
        slug: string;
    }[];
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            children: number;
            files: number;
        };
        parentId: number | null;
        children: {
            id: number;
            name: string;
            slug: string;
        }[];
        slug: string;
    };
    meta: object;
}>;
export declare const tree: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        id: number;
        name: string;
        _count: {
            files: number;
        };
        children: {
            id: number;
            name: string;
            children: {
                id: number;
                name: string;
                slug: string;
            }[];
            slug: string;
        }[];
        slug: string;
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
        id: number;
        createdAt: Date;
        name: string;
        parentId: number | null;
        slug: string;
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
        id: number;
        name: string;
        updatedAt: Date;
        parentId: number | null;
        slug: string;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        force?: boolean | undefined;
    };
    output: {
        id: number;
        createdAt: Date;
        name: string;
        deletedAt: Date | null;
        updatedAt: Date;
        parentId: number | null;
        slug: string;
        color: string | null;
        isFavorite: boolean;
    };
    meta: object;
}>;
//# sourceMappingURL=folders.handler.d.ts.map