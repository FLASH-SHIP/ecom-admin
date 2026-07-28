import type { CustomerReceiverRepository } from "../repositories/CustomerReceiverRepository";
export interface ICustomerReceiverServiceDeps {
    receiverRepo: CustomerReceiverRepository;
}
export declare class CustomerReceiverService {
    private deps;
    constructor(deps: ICustomerReceiverServiceDeps);
    listByCustomer(customerId: string): Promise<{
        stateName: string;
        cityName: string;
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }[]>;
    create(customerId: string, data: {
        label?: string | null;
        name: string;
        phone?: string | null;
        email?: string | null;
        address1: string;
        address2?: string | null;
        city: string;
        state: string;
        zipCode: string;
        country?: string;
        isDefault?: boolean;
    }): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }>;
    update(id: number, customerId: string, data: {
        label?: string | null;
        name?: string;
        phone?: string | null;
        email?: string | null;
        address1?: string;
        address2?: string | null;
        city?: string;
        state?: string;
        zipCode?: string;
        country?: string;
        isDefault?: boolean;
    }): Promise<{
        email: string | null;
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }>;
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
        country: string;
        isDefault: boolean;
        label: string | null;
        city: string;
        zipCode: string;
        address1: string;
        address2: string | null;
        state: string;
    }>;
}
//# sourceMappingURL=CustomerReceiverService.d.ts.map