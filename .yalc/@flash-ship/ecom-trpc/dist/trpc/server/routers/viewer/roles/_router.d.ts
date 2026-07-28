export declare const rolesRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    get: import("@trpc/server").TRPCQueryProcedure<{
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
    create: import("@trpc/server").TRPCMutationProcedure<{
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
    update: import("@trpc/server").TRPCMutationProcedure<{
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
    remove: import("@trpc/server").TRPCMutationProcedure<{
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
    syncPermissions: import("@trpc/server").TRPCMutationProcedure<{
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
    permissions: import("@trpc/server").TRPCQueryProcedure<{
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
}>>;
//# sourceMappingURL=_router.d.ts.map