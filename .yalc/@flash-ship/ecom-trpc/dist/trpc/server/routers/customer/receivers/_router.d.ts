export declare const customerReceiversRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            stateName: string;
            cityName: string;
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            country: string;
            email: string | null;
            phone: string | null;
            isDefault: boolean;
            label: string | null;
            city: string;
            zipCode: string;
            address1: string;
            address2: string | null;
            state: string;
        }[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            address1: string;
            city: string;
            state: string;
            zipCode: string;
            label?: string | null | undefined;
            phone?: string | null | undefined;
            email?: string | null | undefined;
            address2?: string | null | undefined;
            country?: string | undefined;
            isDefault?: boolean | undefined;
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            country: string;
            email: string | null;
            phone: string | null;
            isDefault: boolean;
            label: string | null;
            city: string;
            zipCode: string;
            address1: string;
            address2: string | null;
            state: string;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            data: {
                label?: string | null | undefined;
                name?: string | undefined;
                phone?: string | null | undefined;
                email?: string | null | undefined;
                address1?: string | undefined;
                address2?: string | null | undefined;
                city?: string | undefined;
                state?: string | undefined;
                zipCode?: string | undefined;
                country?: string | undefined;
                isDefault?: boolean | undefined;
            };
        };
        output: {
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            country: string;
            email: string | null;
            phone: string | null;
            isDefault: boolean;
            label: string | null;
            city: string;
            zipCode: string;
            address1: string;
            address2: string | null;
            state: string;
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
            name: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            country: string;
            email: string | null;
            phone: string | null;
            isDefault: boolean;
            label: string | null;
            city: string;
            zipCode: string;
            address1: string;
            address2: string | null;
            state: string;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map