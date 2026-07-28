import type { DeviceTokenRepository } from "../repositories/DeviceTokenRepository";
interface IDeviceTokenServiceDeps {
    deviceTokenRepo: DeviceTokenRepository;
    config?: {
        maxTokensPerOwner?: number;
    };
}
export declare class DeviceTokenService {
    private deps;
    constructor(deps: IDeviceTokenServiceDeps);
    registerToken(data: {
        userId?: string | null;
        customerId?: string | null;
        token: string;
        platform: string;
        deviceInfo?: string | null;
    }): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        customerId: string | null;
        deviceInfo: string | null;
        token: string;
        platform: string;
    }>;
    unregisterToken(token: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getTokensByOwner(params: {
        userId?: string;
        customerId?: string;
    }): Promise<{
        token: string;
        platform: string;
    }[]>;
    deleteInvalidTokens(tokens: string[]): Promise<import("@ecom/prisma").Prisma.BatchPayload | undefined>;
    purgeAbandonedTokens(daysThreshold: number): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
export {};
//# sourceMappingURL=DeviceTokenService.d.ts.map