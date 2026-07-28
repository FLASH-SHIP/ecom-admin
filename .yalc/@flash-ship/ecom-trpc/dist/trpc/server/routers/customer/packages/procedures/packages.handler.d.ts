export declare const listPackages: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const createPackage: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const updatePackage: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const deletePackage: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const setDefaultPackage: import("@trpc/server").TRPCMutationProcedure<{
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
//# sourceMappingURL=packages.handler.d.ts.map