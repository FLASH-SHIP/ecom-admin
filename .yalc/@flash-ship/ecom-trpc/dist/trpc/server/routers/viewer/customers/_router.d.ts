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
            status?: "ACTIVE" | "BANNED" | "INACTIVE" | undefined;
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            groupId?: number | undefined;
            rateCardId?: number | undefined;
        };
        output: {
            items: {
                name: string | null;
                id: string;
                createdAt: Date;
                _count: {
                    socialAccounts: number;
                    activityLogs: number;
                };
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                email: string;
                username: string;
                phone: string | null;
                avatarUrl: string | null;
                emailVerified: Date | null;
                customerCode: string | null;
                lastLoginAt: Date | null;
                groupId: number | null;
                group: {
                    name: string;
                    id: number;
                    code: string;
                } | null;
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
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            email: string;
            username?: string | undefined;
            name?: string | undefined;
            phone?: string | undefined;
            dob?: string | undefined;
            gender?: "other" | "male" | "female" | undefined;
            description?: string | undefined;
            password?: string | undefined;
            groupId?: number | null | undefined;
        };
        output: {
            name: string | null;
            id: string;
            email: string;
            username: string;
            customerCode: string | null;
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
            gender?: "other" | "male" | "female" | null | undefined;
            description?: string | null | undefined;
            status?: "ACTIVE" | "BANNED" | "INACTIVE" | undefined;
            groupId?: number | null | undefined;
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
                id: number;
                createdAt: Date;
                user: {
                    name: string | null;
                    id: string;
                    email: string;
                    avatarUrl: string | null;
                } | null;
                ipAddress: string | null;
                action: string;
                module: string;
                entityId: string | null;
                entityType: string | null;
                oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
                metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
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
                id: number;
                code: string;
                createdAt: Date;
                updatedAt: Date;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
                expiresAt: Date;
                email: string;
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