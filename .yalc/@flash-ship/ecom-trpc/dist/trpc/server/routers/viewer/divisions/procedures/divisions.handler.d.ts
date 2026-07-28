export declare const listProvinces: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        divisionType?: string | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        orderBy?: "asc" | "desc" | undefined;
    };
    output: {
        items: {
            name: string;
            id: number;
            code: number;
            divisionType: string;
            codeName: string;
            phoneCode: number;
            createdAt: Date;
            updatedAt: Date;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const getProvince: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        phoneCode: number;
        createdAt: Date;
        updatedAt: Date;
    };
    meta: object;
}>;
export declare const createProvince: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        code: number;
        divisionType: string;
        phoneCode: number;
        codeName?: string | undefined;
    };
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        phoneCode: number;
        createdAt: Date;
        updatedAt: Date;
    };
    meta: object;
}>;
export declare const updateProvince: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        name?: string | undefined;
        code?: number | undefined;
        divisionType?: string | undefined;
        codeName?: string | undefined;
        phoneCode?: number | undefined;
    };
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        phoneCode: number;
        createdAt: Date;
        updatedAt: Date;
    };
    meta: object;
}>;
export declare const deleteProvince: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const listWards: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        provinceCode?: number | undefined;
        search?: string | undefined;
        divisionType?: string | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        orderBy?: "asc" | "desc" | undefined;
    };
    output: {
        items: {
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
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const getWard: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        createdAt: Date;
        updatedAt: Date;
        provinceCode: number;
    };
    meta: object;
}>;
export declare const createWard: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        name: string;
        code: number;
        divisionType: string;
        provinceCode: number;
        codeName?: string | undefined;
    };
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        createdAt: Date;
        updatedAt: Date;
        provinceCode: number;
    };
    meta: object;
}>;
export declare const updateWard: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        name?: string | undefined;
        code?: number | undefined;
        divisionType?: string | undefined;
        codeName?: string | undefined;
        provinceCode?: number | undefined;
    };
    output: {
        name: string;
        id: number;
        code: number;
        divisionType: string;
        codeName: string;
        createdAt: Date;
        updatedAt: Date;
        provinceCode: number;
    };
    meta: object;
}>;
export declare const deleteWard: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const listDivisions: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        countryCode: string;
        level?: number | undefined;
        parentId?: number | undefined;
        search?: string | undefined;
        page?: number | undefined;
        limit?: number | undefined;
        orderBy?: "asc" | "desc" | undefined;
    };
    output: {
        items: {
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
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const getDivision: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
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
    };
    meta: object;
}>;
export declare const createDivision: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        countryCode: string;
        code: string;
        name: string;
        divisionType: string;
        level: number;
        nameEn?: string | undefined;
        parentId?: number | undefined;
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
    };
    meta: object;
}>;
export declare const updateDivision: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        name?: string | undefined;
        nameEn?: string | undefined;
        divisionType?: string | undefined;
        isActive?: boolean | undefined;
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
    };
    meta: object;
}>;
//# sourceMappingURL=divisions.handler.d.ts.map