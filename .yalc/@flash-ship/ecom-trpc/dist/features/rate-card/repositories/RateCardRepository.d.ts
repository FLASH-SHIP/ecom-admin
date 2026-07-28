import type { ContentStatus, PrismaClient, RateCardType, RateItemType, ShippingMethod } from "@ecom/prisma";
export interface CreateRateCardInput {
    code: string;
    name: string;
    type?: RateCardType;
    status?: ContentStatus;
    shippingMethod: ShippingMethod;
    country?: string;
    origin?: string | null;
    currency?: string;
    weightStep: number;
    minWeight: number;
    maxWeight: number;
    startDate?: Date | null;
    endDate?: Date | null;
    customerGroupIds?: number[];
}
export interface UpdateRateCardInput {
    code?: string;
    name?: string;
    type?: RateCardType;
    status?: ContentStatus;
    shippingMethod?: ShippingMethod;
    country?: string;
    origin?: string | null;
    currency?: string;
    weightStep?: number;
    minWeight?: number;
    maxWeight?: number;
    startDate?: Date | null;
    endDate?: Date | null;
    customerGroupIds?: number[];
}
export declare class RateCardRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        items: {
            id: number;
            amount: import("@prisma/client-runtime-utils").Decimal;
            startWeight: import("@prisma/client-runtime-utils").Decimal;
            endWeight: import("@prisma/client-runtime-utils").Decimal;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
        }[];
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        country: string;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        currency: string;
        origin: string | null;
        weightStep: import("@prisma/client-runtime-utils").Decimal;
        minWeight: import("@prisma/client-runtime-utils").Decimal;
        maxWeight: import("@prisma/client-runtime-utils").Decimal;
        startDate: Date | null;
        endDate: Date | null;
        groups: {
            customerGroup: {
                id: number;
                code: string;
                name: string;
            };
            customerGroupId: number;
        }[];
    } | null>;
    findByCode(code: string): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
    } | null>;
    findActiveByGroup(method: ShippingMethod, country: string, origin: string | null, customerGroupId: number, date?: Date): Promise<{
        id: number;
        code: string;
        name: string;
        items: {
            id: number;
            amount: import("@prisma/client-runtime-utils").Decimal;
            startWeight: import("@prisma/client-runtime-utils").Decimal;
            endWeight: import("@prisma/client-runtime-utils").Decimal;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
        }[];
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        country: string;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        currency: string;
        origin: string | null;
        weightStep: import("@prisma/client-runtime-utils").Decimal;
        minWeight: import("@prisma/client-runtime-utils").Decimal;
        maxWeight: import("@prisma/client-runtime-utils").Decimal;
    } | null>;
    findActiveDefault(method: ShippingMethod, country: string, origin: string | null, date?: Date): Promise<{
        id: number;
        code: string;
        name: string;
        items: {
            id: number;
            amount: import("@prisma/client-runtime-utils").Decimal;
            startWeight: import("@prisma/client-runtime-utils").Decimal;
            endWeight: import("@prisma/client-runtime-utils").Decimal;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
        }[];
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        country: string;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        currency: string;
        origin: string | null;
        weightStep: import("@prisma/client-runtime-utils").Decimal;
        minWeight: import("@prisma/client-runtime-utils").Decimal;
        maxWeight: import("@prisma/client-runtime-utils").Decimal;
    } | null>;
    findMany(options: {
        id?: number;
        code?: string;
        type?: RateCardType;
        status?: ContentStatus;
        shippingMethod?: ShippingMethod;
        country?: string;
        origin?: string;
        search?: string;
        name?: string;
        startDate?: Date;
        endDate?: Date;
        customerGroupId?: number;
        page?: number;
        perPage?: number;
        sortBy?: "id" | "code" | "name" | "type" | "status" | "createdAt" | "updatedAt" | "startDate" | "endDate";
        sortOrder?: "asc" | "desc";
    }): Promise<import("@ecom/lib").PaginatedResult<{
        id: number;
        code: string;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        country: string;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        currency: string;
        origin: string | null;
        weightStep: import("@prisma/client-runtime-utils").Decimal;
        minWeight: import("@prisma/client-runtime-utils").Decimal;
        maxWeight: import("@prisma/client-runtime-utils").Decimal;
        startDate: Date | null;
        endDate: Date | null;
        groups: {
            customerGroup: {
                id: number;
                code: string;
                name: string;
            };
            customerGroupId: number;
        }[];
    }>>;
    create(data: CreateRateCardInput): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
    }>;
    update(id: number, data: UpdateRateCardInput): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
    }>;
    delete(id: number): Promise<{
        id: number;
    }>;
    duplicate(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
    } | null>;
    approveDefaultCardTransaction(params: {
        id: number;
        shippingMethod: ShippingMethod;
        country: string;
        origin: string | null;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
    }>;
    archivePreviousActiveDefault(shippingMethod: ShippingMethod, country: string, origin: string | null, excludeId?: number): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    replaceSlabs(rateCardId: number, slabs: {
        startWeight: number;
        endWeight: number;
        rateType: RateItemType;
        amount: number;
    }[]): Promise<void>;
    findCustomerGroupIdByCustomerId(customerId: string): Promise<number | null>;
    findAuditLogs(rateCardId: number): Promise<{
        id: number;
        createdAt: Date;
        user: {
            id: string;
            name: string | null;
            email: string;
        } | null;
        action: string;
        oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        userId: string | null;
    }[]>;
    findOverlappingRateCards(params: {
        excludeId?: number;
        shippingMethod: ShippingMethod;
        country: string;
        origin: string | null;
        customerGroupIds: number[];
        startDate?: Date | null;
        endDate?: Date | null;
    }): Promise<{
        id: number;
        code: string;
        startDate: Date | null;
        endDate: Date | null;
    }[]>;
}
//# sourceMappingURL=RateCardRepository.d.ts.map