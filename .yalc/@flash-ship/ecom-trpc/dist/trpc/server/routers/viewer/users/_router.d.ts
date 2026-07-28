export declare const usersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
        output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
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
    update: import("@trpc/server").TRPCMutationProcedure<{
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
    changePassword: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            userId: string;
            newPassword: string;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    syncRoles: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            userId: string;
            roleIds: unknown[];
        };
        output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
        meta: object;
    }>;
    toggleSuperAdmin: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            userId: string;
            isSuperAdmin: boolean;
        };
        output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
        };
        output: import("@ecom/features/rbac/transformers/UserTransformer").UserResponseDto;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map