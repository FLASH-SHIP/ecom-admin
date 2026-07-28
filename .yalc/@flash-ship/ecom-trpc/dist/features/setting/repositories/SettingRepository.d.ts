import type { PrismaClient } from "@ecom/prisma";
export declare class SettingRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByKey(key: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    } | null>;
    findByKeys(keys: string[]): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }[]>;
    findAll(): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }[]>;
    set(key: string, value: string | null): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }>;
    bulkSet(items: Array<{
        key: string;
        value: string | null;
    }>): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }[]>;
    delete(key: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }>;
}
//# sourceMappingURL=SettingRepository.d.ts.map