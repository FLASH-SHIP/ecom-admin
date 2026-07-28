export declare const listProvinces: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
    } | undefined;
    output: {
        code: number;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        divisionType: string;
        codeName: string;
        phoneCode: number;
    }[];
    meta: object;
}>;
export declare const listWards: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        provinceCode: number;
        search?: string | undefined;
    };
    output: {
        code: number;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        province: {
            name: string;
        };
        divisionType: string;
        codeName: string;
        provinceCode: number;
    }[];
    meta: object;
}>;
export declare const listStates: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        limit?: number | undefined;
    } | undefined;
    output: {
        code: string;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        divisionType: string;
        countryCode: string;
        nameEn: string | null;
        level: number;
        parentId: number | null;
        isActive: boolean;
        parent: {
            code: string;
            id: number;
            name: string;
        } | null;
    }[];
    meta: object;
}>;
export declare const listCities: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        parentId: number;
        search?: string | undefined;
        limit?: number | undefined;
    };
    output: {
        code: string;
        id: number;
        createdAt: Date;
        name: string;
        updatedAt: Date;
        divisionType: string;
        countryCode: string;
        nameEn: string | null;
        level: number;
        parentId: number | null;
        isActive: boolean;
        parent: {
            code: string;
            id: number;
            name: string;
        } | null;
    }[];
    meta: object;
}>;
//# sourceMappingURL=divisions.handler.d.ts.map