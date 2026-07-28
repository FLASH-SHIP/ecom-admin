import type { RateCardService } from "@ecom/features/rate-card/services/RateCardService";
import { OrderStatus, type ShippingMethod, type ShippingOrigin } from "@ecom/prisma";
import type { OrderRepository } from "../repositories/OrderRepository";
export interface IOrderServiceDeps {
    orderRepo: OrderRepository;
    rateCardService: RateCardService;
    orderCodePrefix?: string;
}
export interface CalculateOrderFreightParams {
    customerId: string;
    shippingMethod: ShippingMethod;
    country: string;
    declaredWeight: number;
    dimensionLength?: number | null;
    dimensionWidth?: number | null;
    dimensionHeight?: number | null;
    origin?: string | null;
}
export interface CreateOrderParams {
    customerId: string;
    shippingMethod: ShippingMethod;
    shippingOrigin?: ShippingOrigin;
    sellerOrderId?: string | null;
    importId?: string | null;
    senderName?: string | null;
    senderAddress?: string | null;
    senderPhone?: string | null;
    senderEmail?: string | null;
    senderCountry?: string | null;
    senderState?: string | null;
    senderCity?: string | null;
    senderWard?: string | null;
    senderZipCode?: string | null;
    receiverName: string;
    receiverPhone?: string | null;
    receiverEmail?: string | null;
    receiverCity: string;
    receiverState: string;
    receiverAddress1: string;
    receiverAddress2?: string | null;
    receiverCountry: string;
    receiverZipCode: string;
    detailDescription: string;
    declaredWeight: number;
    dimensionLength?: number | null;
    dimensionWidth?: number | null;
    dimensionHeight?: number | null;
    declaredValue: number;
    packingTypeId?: number | null;
    packagingCode?: string | null;
    isGetLabel?: number;
    products?: {
        description: string;
        quantity: number;
        value: number;
        hsCode?: string | null;
        originCountry?: string | null;
        weight?: number | null;
        sku?: string | null;
    }[];
}
export declare class OrderService {
    private deps;
    constructor(deps: IOrderServiceDeps);
    private resolveActorInfo;
    /**
     * Helper to format double-digit numbers for dates.
     */
    private padZero;
    /**
     * Generates a unique public order tracking code.
     * Format: Prefix (e.g. EC) + YYMMDD + 8-char Base36 random string
     */
    generateOrderCode(): string;
    /**
     * Calculates volume weight and chargeable weight.
     * Standard Air Freight Divisor: 5000 (meaning volumeWeightGrams = L * W * H / 5)
     */
    calculateWeights(declaredWeightGrams: number, lengthCm?: number | null, widthCm?: number | null, heightCm?: number | null): {
        volumeWeightGrams: number;
        chargeableWeightGrams: number;
    };
    /**
     * Calculates estimated shipping freight cost.
     */
    calculateOrderFreight(params: CalculateOrderFreightParams): Promise<{
        baseShippingRate: number;
        surchargeFee: number;
        totalAmount: number;
        chargeableWeight: number;
        volumeWeight: number;
        appliedRateCardId: number;
        appliedRateCardItemId: number;
    }>;
    /**
     * Creates a single order inside a transaction.
     */
    createOrder(params: CreateOrderParams): Promise<{
        totalFee: number;
        volumeWeight: number;
        chargeableWeight: number;
        dimensionText: string | null;
        id: string;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        orderCode: string;
    }>;
    /**
     * Updates order status with logging.
     */
    updateOrderStatus(id: string, newStatus: OrderStatus, operatorId: string, metadata?: Record<string, unknown> | null, expectedVersion?: number): Promise<{
        id: string;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        orderCode: string;
        labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
        exportCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
        importCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
        paymentStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.PaymentStatus;
        version: number;
    }>;
    /**
     * Adds custom tracking checkpoints (for webhook or scanner updates).
     */
    addTrackingCheckpoint(orderId: string, checkpoint: {
        checkpointDate: Date;
        location?: string | null;
        description: string;
        carrierCode?: string | null;
    }, operatorId: string): Promise<{
        id: number;
    }>;
    /**
     * Recalculates order fees.
     * If forceRefresh is true, it queries the live active RateCard.
     * Otherwise, it uses the rateCardId stored in the order to calculate based on the original version.
     */
    recalculateOrderFees(orderId: string, operatorId: string, forceRefresh?: boolean): Promise<{
        id: string;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        orderCode: string;
        totalFee: import("@prisma/client-runtime-utils").Decimal;
    }>;
    /**
     * Retrieves paginated orders for a customer with filtering options.
     */
    getCustomerOrders(params: {
        customerId: string;
        page?: number;
        perPage?: number;
        status?: OrderStatus;
        orderCode?: string;
        sellerOrderId?: string;
        fromDate?: Date;
        toDate?: Date;
        search?: string;
    }): Promise<{
        data: import("../mappers").CustomerOrderSummaryResponse[];
        meta: import("@ecom/lib").PaginationMeta;
    }>;
    /**
     * Retrieves full order detail by ID, orderCode, or sellerOrderId for a customer.
     */
    getCustomerOrderDetail(customerId: string, identifier: string): Promise<import("../mappers").CustomerOrderDetailResponse>;
    /**
     * Cancels an order requested by the customer.
     * Only orders in PENDING_LABEL status can be cancelled.
     */
    cancelCustomerOrder(customerId: string, identifier: string, reason?: string): Promise<{
        id: string;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        orderCode: string;
        labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
        exportCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
        importCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
        paymentStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.PaymentStatus;
        version: number;
    } | {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.OrderStatus;
        orderCode: string;
        labelStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.LabelStatus;
        exportCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
        importCustomsStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomsStatus;
        paymentStatus: import("@ecom/prisma/src/generated/prisma/client").$Enums.PaymentStatus;
        shippingMethod: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingMethod;
        shippingOrigin: import("@ecom/prisma/src/generated/prisma/client").$Enums.ShippingOrigin;
        sellerOrderId: string | null;
        senderName: string | null;
        senderAddress: string | null;
        senderPhone: string | null;
        senderEmail: string | null;
        senderCountry: string | null;
        senderState: string | null;
        senderCity: string | null;
        senderWard: string | null;
        senderZipCode: string | null;
        receiverName: string;
        receiverPhone: string | null;
        receiverEmail: string | null;
        receiverCity: string;
        receiverState: string;
        receiverAddress1: string;
        receiverAddress2: string | null;
        receiverCountry: string;
        receiverZipCode: string;
        detailDescription: string;
        declaredWeight: number;
        dimensionText: string | null;
        dimensionLength: import("@prisma/client-runtime-utils").Decimal | null;
        dimensionWidth: import("@prisma/client-runtime-utils").Decimal | null;
        dimensionHeight: import("@prisma/client-runtime-utils").Decimal | null;
        declaredValue: import("@prisma/client-runtime-utils").Decimal;
        packagingCode: string | null;
        actualWeight: import("@prisma/client-runtime-utils").Decimal | null;
        volumeWeight: import("@prisma/client-runtime-utils").Decimal | null;
        chargeableWeight: import("@prisma/client-runtime-utils").Decimal | null;
        ecomTrackingNumber: string | null;
        baseShippingFee: import("@prisma/client-runtime-utils").Decimal;
        surchargeFee: import("@prisma/client-runtime-utils").Decimal;
        totalFee: import("@prisma/client-runtime-utils").Decimal;
        trackingCheckpoints: {
            id: number;
            description: string;
            location: string | null;
            checkpointDate: Date;
            carrierCode: string | null;
        }[];
        feeItems: {
            id: number;
            name: string;
            createdAt: Date;
            feeType: string;
            amount: import("@prisma/client-runtime-utils").Decimal;
            currency: string;
        }[];
        products: {
            id: number;
            description: string;
            value: import("@prisma/client-runtime-utils").Decimal;
            weight: number | null;
            hsCode: string | null;
            quantity: number;
            originCountry: string | null;
            sku: string | null;
        }[];
    }>;
}
//# sourceMappingURL=OrderService.d.ts.map