export declare const customerPackagesRouter: import("@trpc/server").TRPCBuiltRouter<{
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
        input: void;
        output: {
            length: number | null;
            id: number;
            label: string | null;
            createdAt: Date;
            updatedAt: Date;
            weight: number;
            packingTypeId: number | null;
            width: number | null;
            isDefault: boolean;
            packageName: string;
            height: number | null;
        }[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            packageName: string;
            packingTypeId: number;
            weight: number;
            label?: string | null | undefined;
            length?: number | null | undefined;
            width?: number | null | undefined;
            height?: number | null | undefined;
            isDefault?: boolean | undefined;
        };
        output: {
            length: number | null;
            id: number;
            label: string | null;
            createdAt: Date;
            updatedAt: Date;
            weight: number;
            packingTypeId: number | null;
            width: number | null;
            isDefault: boolean;
            packageName: string;
            height: number | null;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            data: {
                label?: string | null | undefined;
                packageName?: string | undefined;
                packingTypeId?: number | undefined;
                length?: number | null | undefined;
                width?: number | null | undefined;
                height?: number | null | undefined;
                weight?: number | undefined;
                isDefault?: boolean | undefined;
            };
        };
        output: {
            length: number | null;
            id: number;
            label: string | null;
            createdAt: Date;
            updatedAt: Date;
            weight: number;
            packingTypeId: number | null;
            width: number | null;
            isDefault: boolean;
            packageName: string;
            height: number | null;
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
    setDefault: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            length: number | null;
            id: number;
            label: string | null;
            createdAt: Date;
            updatedAt: Date;
            weight: number;
            packingTypeId: number | null;
            width: number | null;
            isDefault: boolean;
            packageName: string;
            height: number | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map