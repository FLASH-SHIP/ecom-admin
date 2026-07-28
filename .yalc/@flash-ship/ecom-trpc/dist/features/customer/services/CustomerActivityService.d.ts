import type { CustomerActivityLogRepository } from "../repositories/CustomerActivityLogRepository";
interface ICustomerActivityServiceDeps {
    activityLogRepo: CustomerActivityLogRepository;
}
export declare class CustomerActivityService {
    private deps;
    constructor(deps: ICustomerActivityServiceDeps);
    logActivity(data: {
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
    getActivityHistory(customerId: string, options?: {
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
    getCustomerStats(customerId: string): Promise<{
        total: number;
        lastActivity: {
            createdAt: Date;
            action: string;
        } | null;
    }>;
}
export {};
//# sourceMappingURL=CustomerActivityService.d.ts.map