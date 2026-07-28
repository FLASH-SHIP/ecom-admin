export declare const customersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            status?: "ACTIVE" | "INACTIVE" | "BANNED" | undefined;
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            groupId?: number | undefined;
            rateCardId?: number | undefined;
        };
        output: {
            items: {
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                id: string;
                createdAt: Date;
                name: string | null;
                customerCode: string | null;
                username: string;
                phone: string | null;
                avatarUrl: string | null;
                emailVerified: Date | null;
                lastLoginAt: Date | null;
                group: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
                groupId: number | null;
                _count: {
                    socialAccounts: number;
                    activityLogs: number;
                };
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
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
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            email: string;
            username?: string | undefined;
            name?: string | undefined;
            phone?: string | undefined;
            dob?: string | undefined;
            gender?: "male" | "female" | "other" | undefined;
            description?: string | undefined;
            password?: string | undefined;
            groupId?: number | null | undefined;
        };
        output: {
            email: string;
            id: string;
            name: string | null;
            customerCode: string | null;
            username: string;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
            username?: string | undefined;
            name?: string | undefined;
            phone?: string | undefined;
            avatarUrl?: string | undefined;
            dob?: string | null | undefined;
            gender?: "male" | "female" | "other" | null | undefined;
            description?: string | null | undefined;
            status?: "ACTIVE" | "INACTIVE" | "BANNED" | undefined;
            groupId?: number | null | undefined;
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
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
        };
        output: {
            id: string;
        };
        meta: object;
    }>;
    stats: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            total: number;
            active: number;
            inactive: number;
            banned: number;
        };
        meta: object;
    }>;
    checkUsername: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            username: string;
        };
        output: {
            available: boolean;
        };
        meta: object;
    }>;
    verifyEmail: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
        };
        output: {
            id: string;
            emailVerified: Date | null;
        };
        meta: object;
    }>;
    setPassword: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
            password: string;
        };
        output: {
            id: string;
        };
        meta: object;
    }>;
    auditHistory: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
        output: {
            items: {
                user: {
                    email: string;
                    id: string;
                    name: string | null;
                    avatarUrl: string | null;
                } | null;
                id: number;
                createdAt: Date;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                action: string;
                ipAddress: string | null;
                module: string;
                entityId: string | null;
                entityType: string | null;
                oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    verificationCodesList: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: {
            items: {
                code: string;
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
                id: number;
                expiresAt: Date;
                createdAt: Date;
                updatedAt: Date;
                attempts: number;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map