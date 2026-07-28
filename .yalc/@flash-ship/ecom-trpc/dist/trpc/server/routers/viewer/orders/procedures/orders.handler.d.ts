import type { Customer, Order, OrderActivityLog, OrderFeeItem, OrderProduct, OrderTrackingCheckpoint } from "@ecom/prisma";
import { type Prisma } from "@ecom/prisma";
export interface CachedOrder extends Omit<Order, "declaredWeight" | "baseShippingFee" | "surchargeFee" | "totalFee" | "actualWeight" | "volumeWeight" | "chargeableWeight"> {
    declaredWeight: Prisma.Decimal | number | string;
    baseShippingFee: Prisma.Decimal | number | string;
    surchargeFee: Prisma.Decimal | number | string;
    totalFee: Prisma.Decimal | number | string;
    actualWeight: Prisma.Decimal | number | string | null;
    volumeWeight: Prisma.Decimal | number | string | null;
    chargeableWeight: Prisma.Decimal | number | string | null;
    activityLogs: Omit<OrderActivityLog, "orderId">[];
    trackingCheckpoints: Omit<OrderTrackingCheckpoint, "orderId">[];
    customer: Pick<Customer, "name" | "email" | "username" | "phone">;
    feeItems?: Omit<OrderFeeItem, "orderId">[];
    products?: Omit<OrderProduct, "orderId">[];
}
export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: string;
    };
    output: CachedOrder | import("@ecom/features/order/mappers/AdminOrderMapper").AdminOrderDetailResponse | undefined;
    meta: object;
}>;
export declare const updateStatus: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const addCheckpoint: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const recalculate: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: string;
        forceRefresh?: boolean | undefined;
    };
    output: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        id: string;
        createdAt: Date;
        orderCode: string;
        totalFee: Prisma.Decimal;
    };
    meta: object;
}>;
//# sourceMappingURL=orders.handler.d.ts.map