import { Prisma } from "@ecom/prisma";
export declare const calculate: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        shippingMethod: "EXPRESS" | "EPACKET";
        country: string;
        weight: number;
        customerId: string;
        origin?: string | null | undefined;
        calculationDate?: unknown;
    };
    output: {
        freightCost: number;
        appliedRateCardId: number;
        appliedRateCardSnapshot: {
            rateCardId: number;
            rateCardCode: string;
            rateCardName: string;
            currency: string;
            itemId: number;
            startWeight: number;
            endWeight: number;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
            amount: number;
        };
    };
    meta: object;
}>;
export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id?: number | undefined;
        code?: string | undefined;
        type?: "DEFAULT" | "CUSTOM" | undefined;
        status?: "DRAFT" | "PENDING" | "REJECTED" | "PUBLISHED" | "REVIEW" | "ARCHIVED" | undefined;
        shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
        country?: string | undefined;
        origin?: string | undefined;
        search?: string | undefined;
        name?: string | undefined;
        startDate?: unknown;
        endDate?: unknown;
        customerGroupId?: number | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
        sortBy?: "code" | "type" | "status" | "id" | "createdAt" | "name" | "updatedAt" | "startDate" | "endDate" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    } | undefined;
    output: import("@flash-ship/ecom-lib").PaginatedResult<{
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        startDate: Date | null;
        endDate: Date | null;
        country: string;
        origin: string | null;
        currency: string;
        weightStep: Prisma.Decimal;
        minWeight: Prisma.Decimal;
        maxWeight: Prisma.Decimal;
        groups: {
            customerGroup: {
                code: string;
                id: number;
                name: string;
            };
            customerGroupId: number;
        }[];
    }>;
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        items: {
            id: number;
            startWeight: Prisma.Decimal;
            endWeight: Prisma.Decimal;
            rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
            amount: Prisma.Decimal;
        }[];
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        startDate: Date | null;
        endDate: Date | null;
        country: string;
        origin: string | null;
        currency: string;
        weightStep: Prisma.Decimal;
        minWeight: Prisma.Decimal;
        maxWeight: Prisma.Decimal;
        groups: {
            customerGroup: {
                code: string;
                id: number;
                name: string;
            };
            customerGroupId: number;
        }[];
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        code: string;
        name: string;
        shippingMethod: "EXPRESS" | "EPACKET";
        weightStep: number;
        minWeight: number;
        maxWeight: number;
        type?: "DEFAULT" | "CUSTOM" | undefined;
        country?: string | undefined;
        origin?: string | null | undefined;
        currency?: string | undefined;
        startDate?: unknown;
        endDate?: unknown;
        customerGroupIds?: number[] | undefined;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        name: string;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        code?: string | undefined;
        name?: string | undefined;
        type?: "DEFAULT" | "CUSTOM" | undefined;
        shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
        country?: string | undefined;
        origin?: string | null | undefined;
        currency?: string | undefined;
        weightStep?: number | undefined;
        minWeight?: number | undefined;
        maxWeight?: number | undefined;
        startDate?: unknown;
        endDate?: unknown;
        customerGroupIds?: number[] | undefined;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        name: string;
    };
    meta: object;
}>;
export declare const submitForReview: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        name: string;
    };
    meta: object;
}>;
export declare const approve: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        name: string;
    };
    meta: object;
}>;
export declare const reject: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        reason?: string | undefined;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        name: string;
    };
    meta: object;
}>;
export declare const checkOverlap: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        shippingMethod: "EXPRESS" | "EPACKET";
        country: string;
        excludeId?: number | undefined;
        origin?: string | null | undefined;
        customerGroupIds?: number[] | undefined;
        startDate?: unknown;
        endDate?: unknown;
    };
    output: {
        hasOverlap: boolean;
        overlappingCards: {
            code: string;
            id: number;
            startDate: Date | null;
            endDate: Date | null;
        }[];
    };
    meta: object;
}>;
export declare const assignGroups: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        customerGroupIds: number[];
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        name: string;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const listLogs: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        user: {
            email: string;
            id: string;
            name: string | null;
        } | null;
        userId: string | null;
        id: number;
        createdAt: Date;
        action: string;
        oldValues: Prisma.JsonValue;
        newValues: Prisma.JsonValue;
    }[];
    meta: object;
}>;
export declare const importSlabs: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        rateCardId: number;
        slabs: {
            startWeight: number;
            endWeight: number;
            rateType: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG";
            amount: number;
        }[];
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
export declare const exportSlabsTemplate: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        minWeight: number;
        maxWeight: number;
        weightStep: number;
        rateType?: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG" | undefined;
    };
    output: {
        slabs: {
            startWeight: number;
            endWeight: number;
            rateType: "STEP_FIXED" | "RANGE_FIXED" | "RANGE_PER_KG";
            amount: number;
        }[];
    };
    meta: object;
}>;
export declare const listGroups: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        code: string;
        id: number;
        name: string;
    }[];
    meta: object;
}>;
export declare const duplicate: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        code: string;
        type: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateCardType;
        id: number;
        name: string;
    };
    meta: object;
}>;
//# sourceMappingURL=rate-cards.handler.d.ts.map