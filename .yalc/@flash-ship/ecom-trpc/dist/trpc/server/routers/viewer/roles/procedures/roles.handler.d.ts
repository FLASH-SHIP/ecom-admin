export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            permissions: number;
            users: number;
        };
        description: string | null;
        displayName: string | null;
    }[];
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: unknown;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            users: number;
        };
        description: string | null;
        displayName: string | null;
        permissions: {
            permission: {
                name: string;
                id: number;
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
        name: string;
        id: number;
        description: string | null;
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
        name: string;
        id: number;
        description: string | null;
        displayName: string | null;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: unknown;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
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
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            users: number;
        };
        description: string | null;
        displayName: string | null;
        permissions: {
            permission: {
                name: string;
                id: number;
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
            name: string;
            id: number;
            group: string | null;
            displayName: string | null;
        }[];
    };
    meta: object;
}>;
//# sourceMappingURL=roles.handler.d.ts.map