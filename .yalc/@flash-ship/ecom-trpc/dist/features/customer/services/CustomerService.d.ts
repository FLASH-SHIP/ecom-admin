import type { CustomerStatus } from "@ecom/prisma";
import type { CustomerRepository } from "../repositories/CustomerRepository";
export interface ICustomerServiceDeps {
    customerRepo: CustomerRepository;
}
export declare class CustomerService {
    #private;
    private deps;
    constructor(deps: ICustomerServiceDeps);
    listCustomers(filters: {
        status?: CustomerStatus;
        search?: string;
        groupId?: number;
        rateCardId?: number;
    }, page?: number, perPage?: number): Promise<{
        items: {
            email: string;
            name: string | null;
            username: string;
            id: string;
            createdAt: Date;
            phone: string | null;
            avatarUrl: string | null;
            emailVerified: Date | null;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
            _count: {
                socialAccounts: number;
                activityLogs: number;
            };
            customerCode: string | null;
            lastLoginAt: Date | null;
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
    getCustomer(id: string): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        description: string | null;
        customerCode: string | null;
        usernameChangeCount: number;
        usernameChangedAt: Date | null;
        lastLoginAt: Date | null;
        dob: Date | null;
        gender: string | null;
        groupId: number | null;
        group: {
            name: string;
            code: string;
            id: number;
        } | null;
        socialAccounts: {
            email: string | null;
            name: string | null;
            id: number;
            createdAt: Date;
            provider: string;
        }[];
        activityLogs: {
            id: number;
            createdAt: Date;
            ipAddress: string | null;
            action: string;
        }[];
    } | null>;
    createCustomer(data: {
        email: string;
        username?: string;
        name?: string;
        phone?: string;
        dob?: Date;
        gender?: string;
        description?: string;
        hashedPassword?: string;
        groupId?: number | null;
    }): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        customerCode: string | null;
    }>;
    updateCustomer(id: string, data: {
        username?: string;
        name?: string;
        phone?: string;
        avatarUrl?: string;
        dob?: Date | null;
        gender?: string | null;
        description?: string | null;
        status?: CustomerStatus;
        groupId?: number | null;
    }, options?: {
        bypassUsernameLimit?: boolean;
    }): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
    }>;
    deleteCustomer(id: string): Promise<{
        id: string;
    }>;
    getStats(): Promise<{
        total: number;
        active: number;
        inactive: number;
        banned: number;
    }>;
    checkUsernameAvailability(username: string): Promise<boolean>;
    verifyCustomerEmail(id: string): Promise<{
        id: string;
        emailVerified: Date | null;
    }>;
    setCustomerPassword(id: string, password: string): Promise<{
        id: string;
    }>;
    listVerificationCodes(search?: string, page?: number, perPage?: number): Promise<{
        items: {
            email: string;
            code: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
            expiresAt: Date;
            attempts: number;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
}
//# sourceMappingURL=CustomerService.d.ts.map