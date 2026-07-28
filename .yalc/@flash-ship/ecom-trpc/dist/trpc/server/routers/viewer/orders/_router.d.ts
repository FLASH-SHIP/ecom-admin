export declare const adminOrdersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            customerId?: string | undefined;
            status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            sortBy?: "status" | "id" | "createdAt" | "orderCode" | undefined;
            sortOrder?: "asc" | "desc" | undefined;
        } | undefined;
        output: {
            data: import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderSummaryResponse[];
            meta: import("@flash-ship/ecom-lib").PaginationMeta;
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
        output: import("./procedures/orders.handler").CachedOrder | import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderDetailResponse | undefined;
        meta: object;
    }>;
    updateStatus: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
            status: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION";
            metadata?: Record<string, any> | null | undefined;
            expectedVersion?: number | undefined;
        };
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
            id: string;
            updatedAt: Date;
            orderCode: string;
            labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
            exportCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
            importCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
            paymentStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.PaymentStatus;
            version: number;
        };
        meta: object;
    }>;
    addCheckpoint: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            orderId: string;
            checkpointDate: string | Date;
            description: string;
            location?: string | null | undefined;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    recalculate: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: string;
            forceRefresh?: boolean | undefined;
        };
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
            id: string;
            createdAt: Date;
            orderCode: string;
            totalFee: import("@prisma/client-runtime-utils").Decimal;
        };
        meta: object;
    }>;
}>>;
export type AdminOrdersRouter = typeof adminOrdersRouter;
//# sourceMappingURL=_router.d.ts.map