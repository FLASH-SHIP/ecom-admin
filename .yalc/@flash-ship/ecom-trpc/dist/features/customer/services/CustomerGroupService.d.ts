import type { CustomerGroupFilters, CustomerGroupRepository } from "../repositories/CustomerGroupRepository";
export interface ICustomerGroupServiceDeps {
    customerGroupRepo: CustomerGroupRepository;
}
export declare class CustomerGroupService {
    private deps;
    constructor(deps: ICustomerGroupServiceDeps);
    listCustomerGroups(filters: CustomerGroupFilters, page?: number, perPage?: number): Promise<{
        items: {
            name: string;
            code: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                customers: number;
            };
            description: string | null;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
    listAllCustomerGroups(): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    }[]>;
    getCustomerGroup(id: number): Promise<{
        name: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            customers: number;
            rateCards: number;
        };
        description: string | null;
    }>;
    createCustomerGroup(data: {
        code: string;
        name: string;
        description?: string | null;
    }): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    }>;
    updateCustomerGroup(id: number, data: {
        code?: string;
        name?: string;
        description?: string | null;
    }): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    }>;
    deleteCustomerGroup(id: number): Promise<{
        id: number;
    }>;
    getMembers(groupId: number, search?: string, page?: number, perPage?: number): Promise<{
        items: {
            email: string;
            name: string | null;
            username: string;
            id: string;
            createdAt: Date;
            phone: string | null;
            groupId: number | null;
            group: {
                name: string;
                code: string;
                id: number;
            } | null;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
    getAvailableCustomers(groupId: number, search?: string, limit?: number): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        phone: string | null;
        groupId: number | null;
        group: {
            name: string;
            code: string;
            id: number;
        } | null;
    }[]>;
    assignMembers(groupId: number, customerIds: string[]): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    removeMembers(groupId: number, customerIds: string[]): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
}
//# sourceMappingURL=CustomerGroupService.d.ts.map