export declare const rateCardsRouter: import("@trpc/server").TRPCBuiltRouter<{
    ctx: import("../../..").Context;
    meta: object;
    errorShape: {
        message: string;
        data: {
            zodError: {
                message: string;
                details: import("../../../init").ZodErrorDetail[];
            } | null;
            code: import("@trpc/server").TRPC_ERROR_CODE_KEY;
            httpStatus: number;
            path?: string;
            stack?: string;
        };
        code: import("@trpc/server").TRPC_ERROR_CODE_NUMBER;
    };
    transformer: true;
}, import("@trpc/server").TRPCDecorateCreateRouterOptions<{
    calculate: import("@trpc/server").TRPCQueryProcedure<{
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
    list: import("@trpc/server").TRPCQueryProcedure<{
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
            weightStep: import("@prisma/client-runtime-utils").Decimal;
            minWeight: import("@prisma/client-runtime-utils").Decimal;
            maxWeight: import("@prisma/client-runtime-utils").Decimal;
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
    get: import("@trpc/server").TRPCQueryProcedure<{
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
                startWeight: import("@prisma/client-runtime-utils").Decimal;
                endWeight: import("@prisma/client-runtime-utils").Decimal;
                rateType: import("@ecom/prisma/src/generated/prisma/client").$Enums.RateItemType;
                amount: import("@prisma/client-runtime-utils").Decimal;
            }[];
            shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
            startDate: Date | null;
            endDate: Date | null;
            country: string;
            origin: string | null;
            currency: string;
            weightStep: import("@prisma/client-runtime-utils").Decimal;
            minWeight: import("@prisma/client-runtime-utils").Decimal;
            maxWeight: import("@prisma/client-runtime-utils").Decimal;
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
    create: import("@trpc/server").TRPCMutationProcedure<{
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
    update: import("@trpc/server").TRPCMutationProcedure<{
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
    submitForReview: import("@trpc/server").TRPCMutationProcedure<{
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
    approve: import("@trpc/server").TRPCMutationProcedure<{
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
    reject: import("@trpc/server").TRPCMutationProcedure<{
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
    assignGroups: import("@trpc/server").TRPCMutationProcedure<{
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
    checkOverlap: import("@trpc/server").TRPCQueryProcedure<{
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
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    listLogs: import("@trpc/server").TRPCQueryProcedure<{
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
            oldValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            newValues: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        }[];
        meta: object;
    }>;
    importSlabs: import("@trpc/server").TRPCMutationProcedure<{
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
    exportSlabsTemplate: import("@trpc/server").TRPCQueryProcedure<{
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
    listGroups: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            code: string;
            id: number;
            name: string;
        }[];
        meta: object;
    }>;
    duplicate: import("@trpc/server").TRPCMutationProcedure<{
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
}>>;
export type RateCardsRouter = typeof rateCardsRouter;
//# sourceMappingURL=_router.d.ts.map