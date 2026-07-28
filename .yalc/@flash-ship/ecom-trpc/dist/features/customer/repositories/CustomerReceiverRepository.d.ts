import type { PrismaClient } from "@ecom/prisma";
export declare class CustomerReceiverRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByCustomerId(customerId: string): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }[]>;
    findById(id: number): Promise<{
        email: string | null;
        name: string;
        id: number;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    } | null>;
    create(data: {
        customerId: string;
        label?: string | null;
        name: string;
        phone?: string | null;
        email?: string | null;
        address1: string;
        address2?: string | null;
        city: string;
        state: string;
        zipCode: string;
        country?: string;
        isDefault?: boolean;
    }): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }>;
    update(id: number, data: {
        label?: string | null;
        name?: string;
        phone?: string | null;
        email?: string | null;
        address1?: string;
        address2?: string | null;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
        isDefault?: boolean;
    }): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }>;
    softDelete(id: number): Promise<{
        id: number;
    }>;
    resetDefault(customerId: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    countByCustomerId(customerId: string): Promise<number>;
    findDivisionsByCodes(countryCode: string, codes: string[]): Promise<{
        name: string;
        code: string;
    }[]>;
}
//# sourceMappingURL=CustomerReceiverRepository.d.ts.map