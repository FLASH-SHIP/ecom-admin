import type { Prisma, PrismaClient } from "@ecom/prisma";
export interface CustomerGroupFilters {
    search?: string;
    sortBy?: string;
    sortDir?: "asc" | "desc";
}
export declare class CustomerGroupRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(filters: CustomerGroupFilters, page?: number, perPage?: number): Promise<{
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
    findAll(): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    }[]>;
    findById(id: number): Promise<{
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
    } | null>;
    findByCode(code: string): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    } | null>;
    create(data: {
        code: string;
        name: string;
        description?: string | null;
    }): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    }>;
    update(id: number, data: {
        code?: string;
        name?: string;
        description?: string | null;
    }): Promise<{
        name: string;
        code: string;
        id: number;
        description: string | null;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
    findMembers(groupId: number, search?: string, page?: number, perPage?: number): Promise<{
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
    findAvailableCustomers(groupId: number, search?: string, limit?: number): Promise<{
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
    assignMembers(groupId: number, customerIds: string[]): Promise<Prisma.BatchPayload>;
    removeMembers(groupId: number, customerIds: string[]): Promise<Prisma.BatchPayload>;
}
//# sourceMappingURL=CustomerGroupRepository.d.ts.map