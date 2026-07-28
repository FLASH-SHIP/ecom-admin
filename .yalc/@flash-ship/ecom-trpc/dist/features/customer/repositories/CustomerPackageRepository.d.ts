import type { PrismaClient } from "@ecom/prisma";
export declare class CustomerPackageRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByCustomerId(customerId: string): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }[]>;
    findById(id: number): Promise<{
        length: number | null;
        id: number;
        customerId: string;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    } | null>;
    create(data: {
        customerId: string;
        label?: string | null;
        packageName: string;
        packingTypeId: number;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        weight: number;
        isDefault?: boolean;
    }): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }>;
    update(id: number, data: {
        label?: string | null;
        packageName?: string;
        packingTypeId?: number;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        weight?: number;
        isDefault?: boolean;
    }): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
    }>;
    resetDefault(customerId: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    countByCustomerId(customerId: string): Promise<number>;
}
//# sourceMappingURL=CustomerPackageRepository.d.ts.map