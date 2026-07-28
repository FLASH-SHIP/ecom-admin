import { Prisma } from "@ecom/prisma";
export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
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
        code: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        id: number;
        name: string;
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
        code: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        id: number;
        name: string;
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
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        isActive: boolean;
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
export declare const updateService: import("@trpc/server").TRPCMutationProcedure<{
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