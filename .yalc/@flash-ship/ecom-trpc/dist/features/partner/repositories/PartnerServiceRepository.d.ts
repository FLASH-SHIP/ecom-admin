import type { PrismaClient, ServiceType } from "@ecom/prisma";
import { Prisma } from "@ecom/prisma";
export interface CreatePartnerServiceInput {
    partnerId: number;
    code: string;
    name: string;
    type: ServiceType;
    statusMapping?: Prisma.InputJsonValue | null;
    isActive?: boolean;
    webhookSecret?: string | null;
    timeoutMs?: number;
    rateLimitPerMinute?: number;
}
export interface UpdatePartnerServiceInput {
    code?: string;
    name?: string;
    type?: ServiceType;
    statusMapping?: Prisma.InputJsonValue | null;
    isActive?: boolean;
    webhookSecret?: string | null;
    timeoutMs?: number;
    rateLimitPerMinute?: number;
}
export declare class PartnerServiceRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
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
    } | null>;
    findManyByPartnerId(partnerId: number): Promise<{
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
    findByCode(partnerId: number, code: string): Promise<{
        id: number;
        code: string;
        name: string;
        partnerId: number;
    } | null>;
    create(data: CreatePartnerServiceInput): Promise<{
        id: number;
        code: string;
        name: string;
        partnerId: number;
    }>;
    update(id: number, data: UpdatePartnerServiceInput): Promise<{
        id: number;
        code: string;
        name: string;
        partnerId: number;
    }>;
    delete(id: number): Promise<{
        id: number;
    } | null>;
}
//# sourceMappingURL=PartnerServiceRepository.d.ts.map