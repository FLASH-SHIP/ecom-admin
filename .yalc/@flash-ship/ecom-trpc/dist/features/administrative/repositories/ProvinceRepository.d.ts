import type { PrismaClient } from "@ecom/prisma";
export declare class ProvinceRepository {
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
        phoneCode: number;
    } | null>;
    findByCode(code: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    } | null>;
    findByName(name: string): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    } | null>;
    list(params: {
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
            divisionType: string;
            codeName: string;
            phoneCode: number;
        }[];
        total: number;
    }>;
    create(data: {
        name: string;
        code: number;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    }): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    }>;
    update(id: number, data: {
        name?: string;
        code?: number;
        divisionType?: string;
        codeName?: string;
        phoneCode?: number;
    }): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    }>;
    softDelete(id: number): Promise<{
        id: number;
    }>;
}
//# sourceMappingURL=ProvinceRepository.d.ts.map