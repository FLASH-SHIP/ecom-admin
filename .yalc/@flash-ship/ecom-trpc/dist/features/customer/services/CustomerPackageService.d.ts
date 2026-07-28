import type { CustomerPackageRepository } from "../repositories/CustomerPackageRepository";
export interface ICustomerPackageServiceDeps {
    packageRepo: CustomerPackageRepository;
}
export declare class CustomerPackageService {
    private deps;
    constructor(deps: ICustomerPackageServiceDeps);
    listByCustomer(customerId: string): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }[]>;
    create(customerId: string, data: {
        label?: string | null;
        packageName: string;
        packingTypeId: number;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        weight: number;
        isDefault?: boolean;
    }): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }>;
    update(id: number, customerId: string, data: {
        label?: string | null;
        packageName?: string;
        packingTypeId?: number;
        length?: number | null;
        width?: number | null;
        height?: number | null;
        weight?: number;
        isDefault?: boolean;
    }): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }>;
    delete(id: number, customerId: string): Promise<{
        id: number;
    }>;
    setDefault(id: number, customerId: string): Promise<{
        length: number | null;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        isDefault: boolean;
        packingTypeId: number | null;
        label: string | null;
        packageName: string;
        width: number | null;
        height: number | null;
        weight: number;
    }>;
}
//# sourceMappingURL=CustomerPackageService.d.ts.map