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
            name: string | null;
            id: string;
            email: string;
            username: string;
            customerCode: string | null;
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
        name: string | null;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        email: string;
        username: string;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        description: string | null;
        customerCode: string | null;
        usernameChangeCount: number;
        usernameChangedAt: Date | null;
        lastLoginAt: Date | null;
        dob: Date | null;
        gender: string | null;
        groupId: number | null;
        group: {
            name: string;
            id: number;
            code: string;
        } | null;
        socialAccounts: {
            name: string | null;
            id: number;
            createdAt: Date;
            email: string | null;
            provider: string;
        }[];
        activityLogs: {
            id: number;
            createdAt: Date;
            ipAddress: string | null;
            action: string;
        }[];
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
        gender?: "other" | "male" | "female" | null | undefined;
        description?: string | null | undefined;
    };
    output: {
        name: string | null;
        id: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        email: string;
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