import type { CustomerSenderRepository } from "../repositories/CustomerSenderRepository";
export interface ICustomerSenderServiceDeps {
    senderRepo: CustomerSenderRepository;
}
export declare class CustomerSenderService {
    private deps;
    constructor(deps: ICustomerSenderServiceDeps);
    listByCustomer(customerId: string): Promise<({
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } & {
        cityName: string;
        wardName: string | null;
    })[]>;
    private resolveSenderNames;
    create(customerId: string, data: {
        label?: string | null;
        name: string;
        phone?: string | null;
        email?: string | null;
        address: string;
        city: string;
        ward?: string | null;
        zipCode?: string | null;
        country?: string;
        isDefault?: boolean;
    }): Promise<({
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } & {
        cityName: string;
        wardName: string | null;
    }) | undefined>;
    update(id: number, customerId: string, data: {
        label?: string | null;
        name?: string;
        phone?: string | null;
        email?: string | null;
        address?: string;
        city?: string;
        ward?: string | null;
        zipCode?: string | null;
        country?: string;
        isDefault?: boolean;
    }): Promise<({
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } & {
        cityName: string;
        wardName: string | null;
    }) | undefined>;
    delete(id: number, customerId: string): Promise<{
        id: number;
    }>;
    setDefault(id: number, customerId: string): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        ward: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    }>;
}
//# sourceMappingURL=CustomerSenderService.d.ts.map