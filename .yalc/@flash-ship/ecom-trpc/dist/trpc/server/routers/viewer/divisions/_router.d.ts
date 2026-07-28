export declare const divisionsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    listProvinces: import("@trpc/server").TRPCQueryProcedure<{
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
    getProvince: import("@trpc/server").TRPCQueryProcedure<{
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
    createProvince: import("@trpc/server").TRPCMutationProcedure<{
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
    updateProvince: import("@trpc/server").TRPCMutationProcedure<{
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
    deleteProvince: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    listWards: import("@trpc/server").TRPCQueryProcedure<{
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
    getWard: import("@trpc/server").TRPCQueryProcedure<{
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
    createWard: import("@trpc/server").TRPCMutationProcedure<{
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
    updateWard: import("@trpc/server").TRPCMutationProcedure<{
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
    deleteWard: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    listDivisions: import("@trpc/server").TRPCQueryProcedure<{
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
    getDivision: import("@trpc/server").TRPCQueryProcedure<{
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
    createDivision: import("@trpc/server").TRPCMutationProcedure<{
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
    updateDivision: import("@trpc/server").TRPCMutationProcedure<{
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
}>>;
//# sourceMappingURL=_router.d.ts.map