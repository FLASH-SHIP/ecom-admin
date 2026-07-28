import type { PrismaClient } from "@ecom/prisma";
export declare class CustomerSenderRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByCustomerId(customerId: string): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    }[]>;
    findById(id: number): Promise<{
        email: string | null;
        name: string;
        id: number;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } | null>;
    create(data: {
        customerId: string;
        label?: string | null;
        name: string;
        phone?: string | null;
        email?: string | null;
        address: string;
        city: string;
        ward?: string | null;
        zipCode?: string | null;
        country?: string;
        isDefault?: boolean;
    }): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    }>;
    update(id: number, data: {
        label?: string | null;
        name?: string;
        phone?: string | null;
        email?: string | null;
        address?: string;
        city?: string;
        ward?: string | null;
        zipCode?: string | null;
        country?: string;
        isDefault?: boolean;
    }): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    }>;
    softDelete(id: number): Promise<{
        id: number;
    }>;
    resetDefault(customerId: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    countByCustomerId(customerId: string): Promise<number>;
    findProvincesByCodes(codes: number[]): Promise<{
        name: string;
        code: number;
    }[]>;
    findWardsByCodes(codes: number[]): Promise<{
        name: string;
        code: number;
    }[]>;
}
//# sourceMappingURL=CustomerSenderRepository.d.ts.map