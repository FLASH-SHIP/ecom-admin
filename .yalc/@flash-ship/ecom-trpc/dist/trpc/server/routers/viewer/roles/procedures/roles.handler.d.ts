export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            permissions: number;
            users: number;
        };
        displayName: string | null;
    }[];
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: unknown;
    };
    output: {
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            users: number;
        };
        displayName: string | null;
        permissions: {
            permission: {
                id: number;
                name: string;
                group: string | null;
                displayName: string | null;
            };
        }[];
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        displayName?: string | undefined;
        description?: string | undefined;
    };
    output: {
        description: string | null;
        id: number;
        name: string;
        displayName: string | null;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: unknown;
        displayName?: string | undefined;
        description?: string | undefined;
    };
    output: {
        description: string | null;
        id: number;
        name: string;
        displayName: string | null;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: unknown;
    };
    output: {
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        displayName: string | null;
    };
    meta: object;
}>;
export declare const syncPermissions: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        roleId: unknown;
        permissionIds: unknown[];
    };
    output: {
        description: string | null;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        _count: {
            users: number;
        };
        displayName: string | null;
        permissions: {
            permission: {
                id: number;
                name: string;
                group: string | null;
                displayName: string | null;
            };
        }[];
    } | null;
    meta: object;
}>;
export declare const permissions: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        [k: string]: {
            id: number;
            name: string;
            group: string | null;
            displayName: string | null;
        }[];
    };
    meta: object;
}>;
//# sourceMappingURL=roles.handler.d.ts.map