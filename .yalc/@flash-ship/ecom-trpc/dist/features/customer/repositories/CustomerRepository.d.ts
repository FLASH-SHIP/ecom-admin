import type { CustomerStatus, Prisma, PrismaClient } from "@ecom/prisma";
export interface CustomerFilters {
    status?: CustomerStatus;
    search?: string;
    groupId?: number;
    rateCardId?: number;
}
export declare class CustomerRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    generateUniqueCustomerCode(prefix?: string, maxRetries?: number): Promise<string>;
    findMany(filters: CustomerFilters, page?: number, perPage?: number): Promise<{
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
    findById(id: string): Promise<{
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
        metadata: Prisma.JsonValue;
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
    findByCode(customerCode: string): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        phone: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        customerCode: string | null;
    } | null>;
    findByEmail(email: string): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
    } | null>;
    findByUsername(username: string): Promise<{
        email: string;
        username: string;
        id: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
    } | null>;
    findByEmailOrUsername(identifier: string): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        avatarUrl: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        hashedPassword: string | null;
    } | null>;
    isUsernameAvailable(username: string): Promise<boolean>;
    generateUniqueUsername(email: string): Promise<string>;
    create(data: {
        customerCode?: string;
        email: string;
        username: string;
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
    update(id: string, data: {
        username?: string;
        usernameChangeCount?: number;
        usernameChangedAt?: Date;
        name?: string;
        phone?: string;
        avatarUrl?: string;
        dob?: Date | null;
        gender?: string | null;
        description?: string | null;
        status?: CustomerStatus;
        groupId?: number | null;
    }): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
    }>;
    delete(id: string): Promise<{
        id: string;
    }>;
    restore(id: string): Promise<{
        id: string;
    }>;
    hardDelete(id: string): Promise<{
        email: string;
        tokenVersion: number;
        name: string | null;
        username: string;
        id: string;
        createdAt: Date;
        updatedAt: Date;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        deletedAt: Date | null;
        metadata: Prisma.JsonValue | null;
        description: string | null;
        customerCode: string | null;
        usernameChangeCount: number;
        usernameChangedAt: Date | null;
        hashedPassword: string | null;
        lastLoginAt: Date | null;
        dob: Date | null;
        gender: string | null;
        groupId: number | null;
    }>;
    getStats(): Promise<{
        total: number;
        active: number;
        inactive: number;
        banned: number;
    }>;
    findByEmailWithPassword(email: string): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        avatarUrl: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        hashedPassword: string | null;
    } | null>;
    findByUsernameWithPassword(username: string): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        avatarUrl: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        hashedPassword: string | null;
    } | null>;
    findByIdWithPassword(id: string): Promise<{
        username: string;
        id: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
        usernameChangeCount: number;
        hashedPassword: string | null;
    } | null>;
    createWithPassword(data: {
        customerCode?: string;
        email: string;
        username: string;
        name?: string;
        hashedPassword: string;
        groupId?: number | null;
    }): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        customerCode: string | null;
    }>;
    updatePassword(id: string, hashedPassword: string): Promise<{
        id: string;
    }>;
    updateLastLogin(id: string): Promise<{
        id: string;
    }>;
    verifyEmail(id: string): Promise<{
        id: string;
        emailVerified: Date | null;
    }>;
    deleteSessions(customerId: string, excludeSessionToken?: string): Promise<void>;
    invalidatePreviousVerificationCodes(email: string): Promise<void>;
    createVerificationCode(email: string, code: string, expiresAt: Date): Promise<{
        email: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
        expiresAt: Date;
        attempts: number;
    }>;
    findLatestPendingVerificationCode(email: string): Promise<{
        email: string;
        code: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.VerificationCodeStatus;
        expiresAt: Date;
        attempts: number;
    } | null>;
    markVerificationCodeVerified(id: number): Promise<void>;
    markVerificationCodeExpired(id: number): Promise<void>;
    incrementVerificationCodeAttempts(id: number): Promise<number>;
    findVerificationCodes(search?: string, page?: number, perPage?: number): Promise<{
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
    private buildWhere;
    getAllIdsAndEmails(): Promise<{
        email: string;
        id: string;
    }[]>;
}
//# sourceMappingURL=CustomerRepository.d.ts.map