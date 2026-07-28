export declare const listPackages: import("@trpc/server").TRPCQueryProcedure<{
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
//# sourceMappingURL=packages.handler.d.ts.map