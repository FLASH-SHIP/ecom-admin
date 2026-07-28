import type { Customer, Order, OrderActivityLog, OrderProduct, OrderTrackingCheckpoint } from "@ecom/prisma";
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
    products?: Omit<OrderProduct, "orderId">[];
}
export declare const calculateFreight: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        shippingMethod: "EXPRESS" | "EPACKET";
        country: string;
        declaredWeight: number;
        dimensionLength?: number | null | undefined;
        dimensionWidth?: number | null | undefined;
        dimensionHeight?: number | null | undefined;
        origin?: string | null | undefined;
    };
    output: {
        baseShippingRate: number;
        surchargeFee: number;
        totalAmount: number;
        chargeableWeight: number;
        volumeWeight: number;
        appliedRateCardId: number;
        appliedRateCardItemId: number;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        shippingMethod: "EXPRESS" | "EPACKET";
        receiverName: string;
        receiverCity: string;
        receiverState: string;
        receiverAddress1: string;
        receiverCountry: string;
        receiverZipCode: string;
        detailDescription: string;
        declaredWeight: number;
        declaredValue: number;
        shippingOrigin?: "HAN" | "SGN" | undefined;
        sellerOrderId?: string | null | undefined;
        importId?: string | null | undefined;
        senderName?: string | null | undefined;
        senderAddress?: string | null | undefined;
        senderPhone?: string | null | undefined;
        senderEmail?: string | null | undefined;
        senderCountry?: string | null | undefined;
        senderState?: string | null | undefined;
        senderCity?: string | null | undefined;
        senderWard?: string | null | undefined;
        senderZipCode?: string | null | undefined;
        receiverPhone?: string | null | undefined;
        receiverEmail?: string | null | undefined;
        receiverAddress2?: string | null | undefined;
        dimensionLength?: number | null | undefined;
        dimensionWidth?: number | null | undefined;
        dimensionHeight?: number | null | undefined;
        packingTypeId?: number | null | undefined;
        isGetLabel?: number | undefined;
        products?: {
            description: string;
            quantity: number;
            value: number;
            hsCode?: string | null | undefined;
            originCountry?: string | null | undefined;
            weight?: number | null | undefined;
            sku?: string | null | undefined;
        }[] | undefined;
    };
    output: {
        totalFee: number;
        volumeWeight: number;
        chargeableWeight: number;
        dimensionText: string | null;
        id: string;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        orderCode: string;
    };
    meta: object;
}>;
export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
        fromDate?: string | undefined;
        toDate?: string | undefined;
        shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
        sortBy?: "id" | "createdAt" | "status" | "orderCode" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    } | undefined;
    output: import("@flash-ship/ecom-lib").PaginatedResult<{
        id: string;
        createdAt: Date;
        customer: {
            name: string | null;
            email: string;
            username: string;
        };
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        customerId: string;
        orderCode: string;
        labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        shippingOrigin: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingOrigin;
        sellerOrderId: string | null;
        receiverName: string;
        receiverPhone: string | null;
        receiverCity: string;
        receiverState: string;
        receiverAddress1: string;
        receiverCountry: string;
        receiverZipCode: string;
        declaredWeight: number;
        ecomTrackingNumber: string | null;
        baseShippingFee: Prisma.Decimal;
        surchargeFee: Prisma.Decimal;
        totalFee: Prisma.Decimal;
    }>;
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: string;
    };
    output: CachedOrder | undefined;
    meta: object;
}>;
export declare const listPackingTypes: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        page?: number | undefined;
        limit?: number | undefined;
    } | undefined;
    output: {
        items: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
            image: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const exportExcel: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        search?: string | undefined;
        status?: "DRAFT" | "PENDING_LABEL" | "LABEL_CREATED" | "LABEL_NOT_CREATED" | "WAITING_FOR_PICKUP" | "PICKED_UP" | "PACKAGE_RECEIVED" | "RECEIVED_AT_ORIGIN_WAREHOUSE" | "ON_THE_WAY" | "EXPORT_CUSTOMS_CLEARANCE" | "DEPARTED_ORIGIN_COUNTRY" | "INTERNATIONAL_TRANSIT" | "ARRIVED_AT_DESTINATION_COUNTRY" | "IMPORT_CUSTOMS_CLEARANCE" | "RECEIVED_BY_LAST_MILE_CARRIER" | "PICK_UP" | "OUT_FOR_DELIVERY" | "DELIVERY" | "DELIVERED" | "CANCELLED" | "EXCEPTION" | undefined;
        fromDate?: string | undefined;
        toDate?: string | undefined;
        shippingMethod?: "EXPRESS" | "EPACKET" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
        sortBy?: "id" | "createdAt" | "status" | "orderCode" | undefined;
        sortOrder?: "asc" | "desc" | undefined;
    } | undefined;
    output: {
        filename: string;
        fileData: string;
    };
    meta: object;
}>;
//# sourceMappingURL=orders.handler.d.ts.map