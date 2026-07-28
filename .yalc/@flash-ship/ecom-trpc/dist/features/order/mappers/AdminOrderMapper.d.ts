import type { CustomsStatus, LabelStatus, OrderStatus, PaymentStatus, ShippingMethod, ShippingOrigin } from "@ecom/prisma";
export interface AdminOrderSummaryResponse {
    id: string;
    orderCode: string;
    customerId: string;
    customer?: {
        name: string;
        email: string;
        username: string;
        phone?: string | null;
    } | null;
    importId: string | null;
    status: OrderStatus;
    labelStatus: LabelStatus;
    exportCustomsStatus: CustomsStatus;
    importCustomsStatus: CustomsStatus;
    paymentStatus: PaymentStatus;
    shippingMethod: ShippingMethod;
    shippingOrigin: ShippingOrigin;
    sellerOrderId: string | null;
    trackingNumber: string | null;
    ecomTrackingNumber: string | null;
    mawb: string | null;
    flightNumber: string | null;
    receiverName: string;
    receiverPhone: string | null;
    receiverCity: string;
    receiverState: string;
    receiverCountry: string;
    receiverZipCode: string;
    receiverAddress1: string;
    declaredWeight: number;
    baseShippingFee: number;
    surchargeFee: number;
    totalFee: number;
    rateCardId: number | null;
    boxId: string | null;
    port: string | null;
    version: number;
    createdAt: Date | string;
}
export interface AdminOrderDetailResponse extends AdminOrderSummaryResponse {
    totalPackets: number;
    senderName: string | null;
    senderPhone: string | null;
    senderEmail: string | null;
    senderAddress: string | null;
    senderWard: string | null;
    senderCity: string | null;
    senderState: string | null;
    senderCountry: string | null;
    senderZipCode: string | null;
    receiverEmail: string | null;
    receiverAddress2: string | null;
    detailDescription: string;
    dimensionText: string | null;
    dimensionLength: number | null;
    dimensionWidth: number | null;
    dimensionHeight: number | null;
    declaredValue: number;
    packagingCode: string | null;
    packingTypeId: number | null;
    actualWeight: number | null;
    volumeWeight: number | null;
    chargeableWeight: number | null;
    isGetLabel: number;
    updatedAt: Date | string;
    import?: any;
    feeItems?: any[];
    products?: any[];
    trackingCheckpoints?: any[];
    activityLogs?: any[];
    partners?: any[];
}
/**
 * Maps an order database record to a comprehensive Admin Order Summary DTO.
 * Includes customer info, carrier tracking, customs statuses, and converts Decimal objects.
 */
export declare function mapToAdminOrderSummaryResponse(order: any): AdminOrderSummaryResponse;
/**
 * Maps a full order database record to a complete Admin Order Detail DTO including activity logs & partners.
 */
export declare function mapToAdminOrderDetailResponse(order: any): AdminOrderDetailResponse;
//# sourceMappingURL=AdminOrderMapper.d.ts.map