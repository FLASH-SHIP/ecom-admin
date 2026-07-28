import type { PrismaClient } from "@ecom/prisma";
export declare class CustomerActivityLogRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    create(data: {
        customerId: string;
        action: string;
        ipAddress?: string;
        userAgent?: string;
        metadata?: Record<string, unknown>;
    }): Promise<{
        id: number;
        createdAt: Date;
        action: string;
    }>;
    findByCustomer(customerId: string, options?: {
        page?: number;
        perPage?: number;
    }): Promise<{
        items: {
            id: number;
            createdAt: Date;
            ipAddress: string | null;
            userAgent: string | null;
            action: string;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        }[];
        total: number;
        page: number;
        perPage: number;
    }>;
    getStats(customerId: string): Promise<{
        total: number;
        lastActivity: {
            createdAt: Date;
            action: string;
        } | null;
    }>;
}
//# sourceMappingURL=CustomerActivityLogRepository.d.ts.map