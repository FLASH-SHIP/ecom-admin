export declare class DeviceTokenRepository {
    /**
     * Upserts a device token, enforcing that the token is unique and re-assigning it if it already exists.
     */
    upsertToken(data: {
        userId?: string | null;
        customerId?: string | null;
        token: string;
        platform: string;
        deviceInfo?: string | null;
    }, maxTokens?: number): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        userId: string | null;
        customerId: string | null;
        deviceInfo: string | null;
        token: string;
        platform: string;
    }>;
    deleteToken(token: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    findByOwner(params: {
        userId?: string;
        customerId?: string;
    }): Promise<{
        token: string;
        platform: string;
    }[]>;
    deleteMany(tokens: string[]): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    deleteInactiveSince(date: Date): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
//# sourceMappingURL=DeviceTokenRepository.d.ts.map