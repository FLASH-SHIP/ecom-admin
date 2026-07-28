export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        status?: "ACTIVE" | "BANNED" | "SUSPENDED" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    } | undefined;
    output: {
        data: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto[];
        meta: {
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
    };
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: string;
    };
    output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
        password: string;
        name?: string | undefined;
        username?: string | undefined;
        phone?: string | null | undefined;
        locale?: string | undefined;
        roleIds?: unknown[] | undefined;
    };
    output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: string;
        name?: string | undefined;
        username?: string | undefined;
        phone?: string | null | undefined;
        avatarUrl?: string | undefined;
        locale?: string | undefined;
        status?: "ACTIVE" | "BANNED" | "SUSPENDED" | undefined;
    };
    output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
    meta: object;
}>;
export declare const changePassword: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        userId: string;
        newPassword: string;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const syncRoles: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        userId: string;
        roleIds: unknown[];
    };
    output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: string;
    };
    output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
    meta: object;
}>;
export declare const toggleSuperAdmin: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        userId: string;
        isSuperAdmin: boolean;
    };
    output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
    meta: object;
}>;
//# sourceMappingURL=users.handler.d.ts.map