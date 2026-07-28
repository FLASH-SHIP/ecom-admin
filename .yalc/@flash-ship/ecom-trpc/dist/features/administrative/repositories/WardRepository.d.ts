import type { PrismaClient } from "@ecom/prisma";
export declare class WardRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    } | null>;
    findByCode(code: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    } | null>;
    findByNameAndProvince(name: string, provinceCode: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    } | null>;
    list(params: {
        provinceCode?: number;
        search?: string;
        divisionType?: string;
        skip?: number;
        take?: number;
        orderBy?: "asc" | "desc";
    }): Promise<{
        items: {
            name: string;
            code: number;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            province: {
                name: string;
            };
            divisionType: string;
            codeName: string;
            provinceCode: number;
        }[];
        total: number;
    }>;
    create(data: {
        name: string;
        code: number;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    }): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    }>;
    update(id: number, data: {
        name?: string;
        code?: number;
        divisionType?: string;
        codeName?: string;
        provinceCode?: number;
    }): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
    }>;
}
//# sourceMappingURL=WardRepository.d.ts.map