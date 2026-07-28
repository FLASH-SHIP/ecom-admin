export declare const sendVerificationCode: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const register: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
        password: string;
        code: string;
    };
    output: {
        accessToken: string;
        refreshToken: string;
        customer: {
            email: string;
            id: string;
            name: string | null;
            customerCode: string | null;
            username: string;
        };
    };
    meta: object;
}>;
export declare const login: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        identifier: string;
        password: string;
    };
    output: {
        accessToken: string;
        refreshToken: string;
        customer: {
            id: string;
            email: string;
            username: string;
            name: string | null;
            avatarUrl: string | null;
        };
    };
    meta: object;
}>;
export declare const refreshToken: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        refreshToken: string;
    };
    output: {
        accessToken: string;
        refreshToken: string;
    };
    meta: object;
}>;
export declare const me: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        accessToken?: string | undefined;
    } | undefined;
    output: {
        email: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        description: string | null;
        id: string;
        createdAt: Date;
        name: string | null;
        customerCode: string | null;
        username: string;
        usernameChangeCount: number;
        usernameChangedAt: Date | null;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        lastLoginAt: Date | null;
        dob: Date | null;
        gender: string | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        updatedAt: Date;
        group: {
            code: string;
            id: number;
            name: string;
        } | null;
        socialAccounts: {
            email: string | null;
            id: number;
            createdAt: Date;
            name: string | null;
            provider: string;
        }[];
        activityLogs: {
            id: number;
            createdAt: Date;
            action: string;
            ipAddress: string | null;
        }[];
        groupId: number | null;
    } | null;
    meta: object;
}>;
export declare const updateProfile: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        accessToken?: string | undefined;
        username?: string | undefined;
        name?: string | undefined;
        phone?: string | undefined;
        dob?: string | null | undefined;
        gender?: "male" | "female" | "other" | null | undefined;
        description?: string | null | undefined;
    };
    output: {
        email: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        id: string;
        name: string | null;
        username: string;
    };
    meta: object;
}>;
export declare const verifyEmail: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        token: string;
    };
    output: {
        customerId: string;
    };
    meta: object;
}>;
export declare const forgotPassword: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        email: string;
    };
    output: {
        message: string;
    };
    meta: object;
}>;
export declare const resetPassword: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        token: string;
        password: string;
    };
    output: {
        customerId: string;
    };
    meta: object;
}>;
export declare const changePassword: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        oldPassword: string;
        newPassword: string;
        accessToken?: string | undefined;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const checkUsername: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        username: string;
    };
    output: {
        available: boolean;
    };
    meta: object;
}>;
export declare const logout: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        refreshToken: string;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
//# sourceMappingURL=auth.handler.d.ts.map