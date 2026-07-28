import type { PartnerStatus, Prisma, ServiceType } from "@ecom/prisma";
import type { PartnerRepository } from "../repositories/PartnerRepository";
import type { PartnerServiceRepository } from "../repositories/PartnerServiceRepository";
export declare function encryptConfig(config: unknown): unknown;
export declare function decryptConfig(config: unknown): unknown;
export interface IPartnerServiceDeps {
    partnerRepo: PartnerRepository;
    partnerServiceRepo: PartnerServiceRepository;
}
export declare class PartnerService {
    private deps;
    private cache;
    constructor(deps: IPartnerServiceDeps);
    getPartner(id: number, decrypt?: boolean): Promise<{
        id: number;
        code: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        description: string | null;
        contactName: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        apiConfig: Prisma.JsonValue;
    }>;
    getPartnerByCode(code: string, decrypt?: boolean): Promise<{
        id: number;
        code: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        description: string | null;
        contactName: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
        apiConfig: Prisma.JsonValue;
    }>;
    listPartners(options: {
        search?: string;
        status?: PartnerStatus;
        page?: number;
        perPage?: number;
        sortBy?: "id" | "code" | "name" | "status" | "createdAt" | "updatedAt";
        sortOrder?: "asc" | "desc";
    }): Promise<import("@ecom/lib").PaginatedResult<{
        id: number;
        code: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
        description: string | null;
        contactName: string | null;
        contactEmail: string | null;
        contactPhone: string | null;
    }>>;
    createPartner(data: {
        code: string;
        name: string;
        contactName?: string | null;
        contactEmail?: string | null;
        contactPhone?: string | null;
        status?: PartnerStatus;
        description?: string | null;
        apiConfig?: Prisma.InputJsonValue | null;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    }>;
    updatePartner(id: number, data: {
        code?: string;
        name?: string;
        contactName?: string | null;
        contactEmail?: string | null;
        contactPhone?: string | null;
        status?: PartnerStatus;
        description?: string | null;
        apiConfig?: Prisma.InputJsonValue | null;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    }>;
    deletePartner(id: number): Promise<{
        id: number;
    } | null>;
    getService(id: number, decrypt?: boolean): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
        partner: {
            id: number;
            code: string;
            name: string;
            apiConfig: Prisma.JsonValue;
        };
        partnerId: number;
        statusMapping: Prisma.JsonValue;
        webhookSecret: string | null;
        timeoutMs: number;
        rateLimitPerMinute: number;
    }>;
    getServiceWithCachedConfig(id: number): Promise<Record<string, unknown>>;
    listServices(partnerId: number): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.ServiceType;
        partnerId: number;
        statusMapping: Prisma.JsonValue;
        webhookSecret: string | null;
        timeoutMs: number;
        rateLimitPerMinute: number;
    }[]>;
    addService(data: {
        partnerId: number;
        code: string;
        name: string;
        type: ServiceType;
        statusMapping?: Prisma.InputJsonValue | null;
        isActive?: boolean;
        webhookSecret?: string | null;
        timeoutMs?: number;
        rateLimitPerMinute?: number;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        partnerId: number;
    }>;
    updateService(id: number, data: {
        code?: string;
        name?: string;
        type?: ServiceType;
        statusMapping?: Prisma.InputJsonValue | null;
        isActive?: boolean;
        webhookSecret?: string | null;
        timeoutMs?: number;
        rateLimitPerMinute?: number;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        partnerId: number;
    }>;
    deleteService(id: number): Promise<{
        id: number;
    } | null>;
    testConnection(partnerId: number, tempConfig?: Record<string, unknown>): Promise<{
        success: boolean;
        message: string;
    }>;
}
//# sourceMappingURL=PartnerService.d.ts.map