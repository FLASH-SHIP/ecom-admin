import { type Prisma } from "@ecom/prisma";
export declare const createImportSession: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const importBatch: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const completeImportSession: import("@trpc/server").TRPCMutationProcedure<{
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
        status: string;
        id: string;
    };
    meta: object;
}>;
export declare const listImportSessions: import("@trpc/server").TRPCQueryProcedure<{
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
            status: string;
            id: string;
            createdAt: Date;
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
export declare const getImportSessionDetail: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: string;
    };
    output: {
        status: string;
        id: string;
        createdAt: Date;
        customerId: string;
        fileName: string;
        fileSize: number | null;
        totalRows: number;
        successRows: number;
        failedRows: number;
        errors: Prisma.JsonValue;
    };
    meta: object;
}>;
//# sourceMappingURL=import.handler.d.ts.map