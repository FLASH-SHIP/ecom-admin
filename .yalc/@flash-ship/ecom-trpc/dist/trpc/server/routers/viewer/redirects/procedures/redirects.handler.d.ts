export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        isActive?: boolean | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    } | undefined;
    output: {
        items: {
            id: number;
            createdAt: Date;
            isActive: boolean;
            statusCode: number;
            note: string | null;
            fromPath: string;
            toPath: string;
            hitCount: number;
        }[];
        total: number;
        page: number;
        perPage: number;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        fromPath: string;
        toPath: string;
        statusCode?: number | undefined;
        note?: string | undefined;
    };
    output: {
        id: number;
        isActive: boolean;
        statusCode: number;
        fromPath: string;
        toPath: string;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        fromPath?: string | undefined;
        toPath?: string | undefined;
        statusCode?: number | undefined;
        isActive?: boolean | undefined;
        note?: string | undefined;
    };
    output: {
        id: number;
        isActive: boolean;
        statusCode: number;
        fromPath: string;
        toPath: string;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        statusCode: number;
        note: string | null;
        fromPath: string;
        toPath: string;
        hitCount: number;
    };
    meta: object;
}>;
//# sourceMappingURL=redirects.handler.d.ts.map