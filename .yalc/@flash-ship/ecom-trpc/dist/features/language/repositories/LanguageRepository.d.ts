import type { PrismaClient } from "@ecom/prisma";
export declare class LanguageRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }[]>;
    findActive(): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    } | null>;
    findByCode(code: string): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    } | null>;
    findByLocale(locale: string): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    } | null>;
    findDefault(): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    } | null>;
    create(data: {
        name: string;
        locale: string;
        code: string;
        flag?: string;
        isDefault?: boolean;
        isActive?: boolean;
        isRtl?: boolean;
        order?: number;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }>;
    update(id: number, data: {
        name?: string;
        locale?: string;
        code?: string;
        flag?: string;
        isDefault?: boolean;
        isActive?: boolean;
        isRtl?: boolean;
        order?: number;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
    setDefault(id: number): Promise<[import("@ecom/prisma").Prisma.BatchPayload, {
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }]>;
    count(): Promise<number>;
}
//# sourceMappingURL=LanguageRepository.d.ts.map