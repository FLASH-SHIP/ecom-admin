export declare const partnersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            status?: "ACTIVE" | "INACTIVE" | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            sortBy?: "code" | "status" | "id" | "createdAt" | "name" | "updatedAt" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        } | undefined;
        output: import("@flash-ship/ecom-lib").PaginatedResult<{
            code: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            contactName: string | null;
            contactEmail: string | null;
            contactPhone: string | null;
        }>;
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            apiConfig: Record<string, unknown> | null;
            code: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            contactName: string | null;
            contactEmail: string | null;
            contactPhone: string | null;
        };
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            code: string;
            name: string;
            contactName?: string | null | undefined;
            contactEmail?: string | null | undefined;
            contactPhone?: string | null | undefined;
            status?: "ACTIVE" | "INACTIVE" | undefined;
            description?: string | null | undefined;
            apiConfig?: Record<string, unknown> | null | undefined;
        };
        output: {
            code: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
            id: number;
            name: string;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            code?: string | undefined;
            name?: string | undefined;
            contactName?: string | null | undefined;
            contactEmail?: string | null | undefined;
            contactPhone?: string | null | undefined;
            status?: "ACTIVE" | "INACTIVE" | undefined;
            description?: string | null | undefined;
            apiConfig?: Record<string, unknown> | null | undefined;
        };
        output: {
            code: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
            id: number;
            name: string;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        } | null;
        meta: object;
    }>;
    listServices: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            partnerId: number;
        };
        output: {
            code: string;
            type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            isActive: boolean;
            partnerId: number;
            statusMapping: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            webhookSecret: string | null;
            timeoutMs: number;
            rateLimitPerMinute: number;
        }[];
        meta: object;
    }>;
    addService: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            partnerId: number;
            code: string;
            name: string;
            type: "IMPORT" | "PICKUP" | "EXPORT" | "LASTMILE";
            statusMapping?: Record<string, unknown> | null | undefined;
            isActive?: boolean | undefined;
            webhookSecret?: string | null | undefined;
            timeoutMs?: number | undefined;
            rateLimitPerMinute?: number | undefined;
        };
        output: {
            code: string;
            id: number;
            name: string;
            partnerId: number;
        };
        meta: object;
    }>;
    updateService: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: unknown;
            code?: string | undefined;
            name?: string | undefined;
            type?: "IMPORT" | "PICKUP" | "EXPORT" | "LASTMILE" | undefined;
            statusMapping?: Record<string, unknown> | null | undefined;
            isActive?: boolean | undefined;
            webhookSecret?: string | null | undefined;
            timeoutMs?: number | undefined;
            rateLimitPerMinute?: number | undefined;
        };
        output: {
            code: string;
            id: number;
            name: string;
            partnerId: number;
        };
        meta: object;
    }>;
    deleteService: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: unknown;
        };
        output: {
            id: number;
        } | null;
        meta: object;
    }>;
    testConnection: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            tempConfig?: Record<string, unknown> | null | undefined;
        };
        output: {
            success: boolean;
            message: string;
        };
        meta: object;
    }>;
}>>;
export type PartnersRouter = typeof partnersRouter;
//# sourceMappingURL=_router.d.ts.map