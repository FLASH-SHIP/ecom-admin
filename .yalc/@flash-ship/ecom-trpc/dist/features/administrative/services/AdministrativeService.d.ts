import type { AdministrativeDivisionRepository } from "../repositories/AdministrativeDivisionRepository";
import type { ProvinceRepository } from "../repositories/ProvinceRepository";
import type { WardRepository } from "../repositories/WardRepository";
export interface IAdministrativeServiceDeps {
    provinceRepo: ProvinceRepository;
    wardRepo: WardRepository;
    divisionRepo: AdministrativeDivisionRepository;
}
export declare class AdministrativeService {
    private deps;
    constructor(deps: IAdministrativeServiceDeps);
    getProvince(id: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    }>;
    getProvinceByCode(code: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    }>;
    listProvinces(params: {
        search?: string;
        divisionType?: string;
        page?: number;
        limit?: number;
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
        page: number;
        limit: number;
        totalPages: number;
    }>;
    createProvince(data: {
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
    private validateProvinceUpdate;
    updateProvince(id: number, data: {
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
    deleteProvince(id: number): Promise<{
        id: number;
    }>;
    getWard(id: number): Promise<{
        name: string;
        code: number;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        provinceCode: number;
    }>;
    listWards(params: {
        provinceCode?: number;
        search?: string;
        divisionType?: string;
        page?: number;
        limit?: number;
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
        page: number;
        limit: number;
        totalPages: number;
    }>;
    createWard(data: {
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
    private validateWardUpdate;
    updateWard(id: number, data: {
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
    deleteWard(id: number): Promise<{
        id: number;
    }>;
    listDivisions(params: {
        countryCode: string;
        level?: number;
        parentId?: number;
        search?: string;
        page?: number;
        limit?: number;
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
        page: number;
        limit: number;
        totalPages: number;
    }>;
    getDivision(id: number): Promise<{
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
    }>;
    createDivision(data: {
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
    updateDivision(id: number, data: {
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
//# sourceMappingURL=AdministrativeService.d.ts.map