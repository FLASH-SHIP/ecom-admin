import type { PrismaClient } from "@ecom/prisma";
export declare class AdministrativeDivisionRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
        name: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        parent: {
            name: string;
            code: string;
            id: number;
        } | null;
        parentId: number | null;
        divisionType: string;
        countryCode: string;
        nameEn: string | null;
        level: number;
        isActive: boolean;
    } | null>;
    findByCountryAndCode(countryCode: string, code: string): Promise<{
        name: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        parentId: number | null;
        divisionType: string;
        countryCode: string;
        nameEn: string | null;
        level: number;
        isActive: boolean;
    } | null>;
    list(params: {
        countryCode: string;
        level?: number;
        parentId?: number;
        search?: string;
        skip?: number;
        take?: number;
        orderBy?: "asc" | "desc";
    }): Promise<{
        items: {
            name: string;
            code: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            parent: {
                name: string;
                code: string;
                id: number;
            } | null;
            parentId: number | null;
            divisionType: string;
            countryCode: string;
            nameEn: string | null;
            level: number;
            isActive: boolean;
        }[];
        total: number;
    }>;
    create(data: {
        countryCode: string;
        code: string;
        name: string;
        nameEn?: string;
        divisionType: string;
        level: number;
        parentId?: number;
    }): Promise<{
        name: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        parentId: number | null;
        divisionType: string;
        countryCode: string;
        nameEn: string | null;
        level: number;
        isActive: boolean;
    }>;
    update(id: number, data: {
        name?: string;
        nameEn?: string;
        divisionType?: string;
        isActive?: boolean;
    }): Promise<{
        name: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        parentId: number | null;
        divisionType: string;
        countryCode: string;
        nameEn: string | null;
        level: number;
        isActive: boolean;
    }>;
}
//# sourceMappingURL=AdministrativeDivisionRepository.d.ts.map