export declare const authRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    me: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            id: string;
            email: string;
            name: string | null;
            phone: string | null;
            username: string | null;
            locale: string | null;
            avatarUrl: string | null;
            emailVerified: Date | null;
            createdAt: Date;
            roles: {
                id: number;
                name: string;
                displayName: string | null;
            }[];
            permissions: string[];
        };
        meta: object;
    }>;
    getUserProfile: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            userId: string;
        };
        output: {
            id: string;
            email: string;
            name: string | null;
            phone: string | null;
            username: string | null;
            locale: string | null;
            avatarUrl: string | null;
            emailVerified: Date | null;
            createdAt: Date;
            roles: {
                id: number;
                name: string;
                displayName: string | null;
            }[];
            permissions: string[];
        };
        meta: object;
    }>;
    updateProfile: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            userId?: string | undefined;
            name?: string | undefined;
            username?: string | undefined;
            phone?: string | null | undefined;
            avatarUrl?: string | null | undefined;
            locale?: "vi" | "en" | undefined;
        };
        output: {
            name: string | null;
            id: string;
            email: string;
            username: string | null;
            phone: string | null;
            avatarUrl: string | null;
            locale: string | null;
        };
        meta: object;
    }>;
    changePasswordSelf: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            userId: string;
            newPassword: string;
            confirmPassword: string;
            currentPassword?: string | undefined;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
    getPreferences: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            userId?: string | undefined;
        };
        output: {
            theme: "light" | "dark";
        };
        meta: object;
    }>;
    updatePreferences: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            userId?: string | undefined;
            theme?: "light" | "dark" | undefined;
        };
        output: {
            success: boolean;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map