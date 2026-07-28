export interface CustomerOrderSummaryResponse {
    id: string;
    orderCode: string;
    sellerOrderId: string | null;
    status: string;
    labelStatus: string;
    shippingMethod: string;
    shippingOrigin: string;
    ecomTrackingNumber: string | null;
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
    createdAt: Date | string;
}
export interface CustomerOrderFeeItemResponse {
    id: number;
    feeType: string;
    name: string;
    amount: number;
    currency: string;
    createdAt: Date | string;
}
export interface CustomerOrderProductResponse {
    id: number;
    description: string;
    quantity: number;
    value: number;
    hsCode: string | null;
    originCountry: string | null;
    weight: number | null;
    sku: string | null;
}
export interface CustomerOrderCheckpointResponse {
    id: number;
    checkpointDate: Date | string;
    location: string | null;
    description: string;
    carrierCode: string | null;
}
export interface CustomerOrderDetailResponse extends CustomerOrderSummaryResponse {
    totalPackets: number;
    exportCustomsStatus?: string;
    importCustomsStatus?: string;
    paymentStatus?: string;
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
    actualWeight: number | null;
    volumeWeight: number | null;
    chargeableWeight: number | null;
    feeItems?: CustomerOrderFeeItemResponse[];
    products?: CustomerOrderProductResponse[];
    trackingCheckpoints?: CustomerOrderCheckpointResponse[];
    updatedAt: Date | string;
}
/**
 * Maps a single order database record to a clean, public Customer Order Summary DTO.
 * Excludes internal fields (version, rateCardId, boxId, port, carrier tracking, etc.)
 * and converts Prisma Decimal objects to JavaScript numbers.
 */
export declare function mapToCustomerOrderSummaryResponse(order: any): CustomerOrderSummaryResponse;
/**
 * Maps a full order database record to a detailed public Customer Order DTO.
 */
export declare function mapToCustomerOrderDetailResponse(order: any): CustomerOrderDetailResponse;
/**
 * Maps freight estimation calculation result to clean public Customer DTO.
 */
export declare function mapToEstimateFreightResponse(result: any): {
    baseShippingFee: number;
    surchargeFee: number;
    totalFee: number;
    volumeWeight: any;
    chargeableWeight: any;
};
//# sourceMappingURL=CustomerOrderMapper.d.ts.map