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
            createdAt: Date;
            updatedAt: Date;
            isDefault: boolean;
            packingTypeId: number | null;
            label: string | null;
            packageName: string;
            width: number | null;
            height: number | null;
            weight: number;
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
            createdAt: Date;
            updatedAt: Date;
            isDefault: boolean;
            packingTypeId: number | null;
            label: string | null;
            packageName: string;
            width: number | null;
            height: number | null;
            weight: number;
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
            createdAt: Date;
            updatedAt: Date;
            isDefault: boolean;
            packingTypeId: number | null;
            label: string | null;
            packageName: string;
            width: number | null;
            height: number | null;
            weight: number;
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
            createdAt: Date;
            updatedAt: Date;
            isDefault: boolean;
            packingTypeId: number | null;
            label: string | null;
            packageName: string;
            width: number | null;
            height: number | null;
            weight: number;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map