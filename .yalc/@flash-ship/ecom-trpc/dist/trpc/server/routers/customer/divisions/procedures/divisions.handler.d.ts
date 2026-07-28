export declare const listProvinces: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
    } | undefined;
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        phoneCode: number;
        createdAt: Date;
        updatedAt: Date;
    }[];
    meta: object;
}>;
export declare const listWards: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        provinceCode: number;
        search?: string | undefined;
    };
    output: {
        name: string;
        province: {
            name: string;
        };
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        createdAt: Date;
        updatedAt: Date;
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
        name: string;
        id: number;
        code: string;
        divisionType: string;
        createdAt: Date;
        updatedAt: Date;
        countryCode: string;
        nameEn: string | null;
        level: number;
        parentId: number | null;
        isActive: boolean;
        parent: {
            name: string;
            id: number;
            code: string;
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
        name: string;
        id: number;
        code: string;
        divisionType: string;
        createdAt: Date;
        updatedAt: Date;
        countryCode: string;
        nameEn: string | null;
        level: number;
        parentId: number | null;
        isActive: boolean;
        parent: {
            name: string;
            id: number;
            code: string;
        } | null;
    }[];
    meta: object;
}>;
//# sourceMappingURL=divisions.handler.d.ts.map