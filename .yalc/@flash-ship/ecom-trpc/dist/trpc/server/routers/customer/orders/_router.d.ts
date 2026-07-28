export declare const customerOrdersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    calculateFreight: import("@trpc/server").TRPCQueryProcedure<{
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
    create: import("@trpc/server").TRPCMutationProcedure<{
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
    list: import("@trpc/server").TRPCQueryProcedure<{
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
            baseShippingFee: import("@prisma/client-runtime-utils").Decimal;
            surchargeFee: import("@prisma/client-runtime-utils").Decimal;
            totalFee: import("@prisma/client-runtime-utils").Decimal;
        }>;
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
        output: import("./procedures/orders.handler").CachedOrder | undefined;
        meta: object;
    }>;
    exportExcel: import("@trpc/server").TRPCMutationProcedure<{
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
    createImportSession: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            fileName: string;
            totalRows: number;
            fileSize?: number | null | undefined;
        };
        output: {
            id: string;
        };
        meta: object;
    }>;
    importBatch: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            importId: string;
            batchIndex: number;
            orders: {
                excelRowNumbers: number[];
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
                senderName?: string | null | undefined;
                senderAddress?: string | null | undefined;
                senderPhone?: string | null | undefined;
                senderEmail?: string | null | undefined;
                senderCountry?: string | null | undefined;
                senderState?: string | null | undefined;
                senderCity?: string | null | undefined;
                senderZipCode?: string | null | undefined;
                receiverPhone?: string | null | undefined;
                receiverEmail?: string | null | undefined;
                receiverAddress2?: string | null | undefined;
                dimensionLength?: number | null | undefined;
                dimensionWidth?: number | null | undefined;
                dimensionHeight?: number | null | undefined;
                packagingCode?: string | null | undefined;
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
            }[];
        };
        output: {
            successCount: number;
            failedCount: number;
            errors: {
                line: number;
                columnName: string;
                enteredValue: string;
                errorReason: string;
            }[];
        };
        meta: object;
    }>;
    completeImportSession: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            importId: string;
            successRows: number;
            failedRows: number;
            errors: {
                line: number;
                columnName: string;
                enteredValue: string;
                errorReason: string;
            }[];
            status?: "completed" | "failed" | undefined;
        };
        output: {
            id: string;
            status: string;
        };
        meta: object;
    }>;
    listImportSessions: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            page?: number | undefined;
            perPage?: number | undefined;
            search?: string | undefined;
            startDate?: string | undefined;
            endDate?: string | undefined;
            timezoneOffset?: string | undefined;
        };
        output: {
            total: number;
            items: {
                id: string;
                createdAt: Date;
                status: string;
                fileName: string;
                fileSize: number | null;
                totalRows: number;
                successRows: number;
                failedRows: number;
            }[];
            page: number;
            perPage: number;
        };
        meta: object;
    }>;
    getImportSessionDetail: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: string;
        };
        output: {
            id: string;
            createdAt: Date;
            status: string;
            customerId: string;
            fileName: string;
            fileSize: number | null;
            totalRows: number;
            successRows: number;
            failedRows: number;
            errors: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        };
        meta: object;
    }>;
    listPackingTypes: import("@trpc/server").TRPCQueryProcedure<{
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
}>>;
export type CustomerOrdersRouter = typeof customerOrdersRouter;
//# sourceMappingURL=_router.d.ts.map