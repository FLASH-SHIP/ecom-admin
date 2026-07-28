import { Prisma } from "@ecom/prisma";
export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        status?: "ACTIVE" | "INACTIVE" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
        sortBy?: "name" | "id" | "code" | "createdAt" | "updatedAt" | "status" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    } | undefined;
    output: import("@flash-ship/ecom-lib").PaginatedResult<{
        name: string;
        id: number;
        code: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        description: string | null;
        contactName: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>;
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        apiConfig: Record<string, unknown> | null;
        name: string;
        id: number;
        code: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        description: string | null;
        contactName: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
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
        name: string;
        id: number;
        code: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
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
        name: string;
        id: number;
        code: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    } | null;
    meta: object;
}>;
export declare const listServices: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        partnerId: number;
    };
    output: {
        name: string;
        id: number;
        code: string;
        createdAt: Date;
        updatedAt: Date;
        isActive: boolean;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
        partnerId: number;
        statusMapping: Prisma.JsonValue;
        webhookSecret: string | null;
        timeoutMs: number;
        rateLimitPerMinute: number;
    }[];
    meta: object;
}>;
export declare const addService: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        partnerId: number;
        code: string;
        name: string;
        type: "PICKUP" | "EXPORT" | "IMPORT" | "LASTMILE";
        statusMapping?: Record<string, unknown> | null | undefined;
        isActive?: boolean | undefined;
        webhookSecret?: string | null | undefined;
        timeoutMs?: number | undefined;
        rateLimitPerMinute?: number | undefined;
    };
    output: {
        name: string;
        id: number;
        code: string;
        partnerId: number;
    };
    meta: object;
}>;
export declare const updateService: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: unknown;
        code?: string | undefined;
        name?: string | undefined;
        type?: "PICKUP" | "EXPORT" | "IMPORT" | "LASTMILE" | undefined;
        statusMapping?: Record<string, unknown> | null | undefined;
        isActive?: boolean | undefined;
        webhookSecret?: string | null | undefined;
        timeoutMs?: number | undefined;
        rateLimitPerMinute?: number | undefined;
    };
    output: {
        name: string;
        id: number;
        code: string;
        partnerId: number;
    };
    meta: object;
}>;
export declare const deleteService: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: unknown;
    };
    output: {
        id: number;
    } | null;
    meta: object;
}>;
export declare const testConnection: import("@trpc/server").TRPCMutationProcedure<{
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
//# sourceMappingURL=partners.handler.d.ts.map