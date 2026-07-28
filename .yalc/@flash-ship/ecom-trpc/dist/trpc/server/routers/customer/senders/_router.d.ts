export declare const customerSendersRouter: import("@trpc/server").TRPCBuiltRouter<{
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
        output: ({
            email: string | null;
            id: number;
            label: string | null;
            createdAt: Date;
            name: string;
            phone: string | null;
            updatedAt: Date;
            ward: string | null;
            country: string;
            isDefault: boolean;
            city: string;
            zipCode: string | null;
            address: string;
        } & {
            cityName: string;
            wardName: string | null;
        })[];
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            name: string;
            address: string;
            city: string;
            label?: string | null | undefined;
            phone?: string | null | undefined;
            email?: string | null | undefined;
            ward?: string | null | undefined;
            zipCode?: string | null | undefined;
            country?: string | undefined;
            isDefault?: boolean | undefined;
        };
        output: ({
            email: string | null;
            id: number;
            label: string | null;
            createdAt: Date;
            name: string;
            phone: string | null;
            updatedAt: Date;
            ward: string | null;
            country: string;
            isDefault: boolean;
            city: string;
            zipCode: string | null;
            address: string;
        } & {
            cityName: string;
            wardName: string | null;
        }) | undefined;
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
                address?: string | undefined;
                city?: string | undefined;
                ward?: string | null | undefined;
                zipCode?: string | null | undefined;
                country?: string | undefined;
                isDefault?: boolean | undefined;
            };
        };
        output: ({
            email: string | null;
            id: number;
            label: string | null;
            createdAt: Date;
            name: string;
            phone: string | null;
            updatedAt: Date;
            ward: string | null;
            country: string;
            isDefault: boolean;
            city: string;
            zipCode: string | null;
            address: string;
        } & {
            cityName: string;
            wardName: string | null;
        }) | undefined;
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
            email: string | null;
            id: number;
            label: string | null;
            createdAt: Date;
            name: string;
            phone: string | null;
            updatedAt: Date;
            ward: string | null;
            country: string;
            isDefault: boolean;
            city: string;
            zipCode: string | null;
            address: string;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map