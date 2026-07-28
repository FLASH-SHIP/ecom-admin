import type { PartnerStatus, PrismaClient } from "@ecom/prisma";
import { Prisma } from "@ecom/prisma";
export interface CreatePartnerInput {
    code: string;
    name: string;
    contactName?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    status?: PartnerStatus;
    description?: string | null;
    apiConfig?: Prisma.InputJsonValue | null;
}
export interface UpdatePartnerInput {
    code?: string;
    name?: string;
    contactName?: string | null;
    contactEmail?: string | null;
    contactPhone?: string | null;
    status?: PartnerStatus;
    description?: string | null;
    apiConfig?: Prisma.InputJsonValue | null;
}
export declare class PartnerRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
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
    } | null>;
    findByCode(code: string): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    } | null>;
    findMany(options: {
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
    create(data: CreatePartnerInput): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    }>;
    update(id: number, data: UpdatePartnerInput): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.PartnerStatus;
    }>;
    delete(id: number): Promise<{
        id: number;
    } | null>;
}
//# sourceMappingURL=PartnerRepository.d.ts.map