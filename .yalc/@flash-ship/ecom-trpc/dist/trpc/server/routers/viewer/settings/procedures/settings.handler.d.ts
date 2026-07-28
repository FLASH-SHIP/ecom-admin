export declare const getAll: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: Record<string, string | null>;
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        key: string;
    };
    output: string | null;
    meta: object;
}>;
export declare const getMany: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        keys: string[];
    };
    output: Record<string, string | null>;
    meta: object;
}>;
export declare const set: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        key: string;
        value: string | null;
    };
    output: {
        key: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        value: string | null;
    };
    meta: object;
}>;
export declare const bulkSet: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        items: {
            key: string;
            value: string | null;
        }[];
    };
    output: {
        key: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        value: string | null;
    }[];
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        key: string;
    };
    output: {
        key: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        value: string | null;
    };
    meta: object;
}>;
//# sourceMappingURL=settings.handler.d.ts.map