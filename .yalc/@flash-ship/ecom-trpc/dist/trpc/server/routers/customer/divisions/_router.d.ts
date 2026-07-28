export declare const customerDivisionsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    listWards: import("@trpc/server").TRPCQueryProcedure<{
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
    listStates: import("@trpc/server").TRPCQueryProcedure<{
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
    listCities: import("@trpc/server").TRPCQueryProcedure<{
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
}>>;
//# sourceMappingURL=_router.d.ts.map