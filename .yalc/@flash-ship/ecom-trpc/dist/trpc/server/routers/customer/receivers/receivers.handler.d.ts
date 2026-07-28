export declare const listReceivers: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        stateName: string;
        cityName: string;
        email: string | null;
        id: number;
        label: string | null;
        createdAt: Date;
        name: string;
        phone: string | null;
        updatedAt: Date;
        country: string;
        isDefault: boolean;
        address1: string;
        address2: string | null;
        city: string;
        state: string;
        zipCode: string;
    }[];
    meta: object;
}>;
export declare const createReceiver: import("@trpc/server").TRPCMutationProcedure<{
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
        email: string | null;
        id: number;
        label: string | null;
        createdAt: Date;
        name: string;
        phone: string | null;
        updatedAt: Date;
        country: string;
        isDefault: boolean;
        address1: string;
        address2: string | null;
        city: string;
        state: string;
        zipCode: string;
    };
    meta: object;
}>;
export declare const updateReceiver: import("@trpc/server").TRPCMutationProcedure<{
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
        email: string | null;
        id: number;
        label: string | null;
        createdAt: Date;
        name: string;
        phone: string | null;
        updatedAt: Date;
        country: string;
        isDefault: boolean;
        address1: string;
        address2: string | null;
        city: string;
        state: string;
        zipCode: string;
    };
    meta: object;
}>;
export declare const deleteReceiver: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const setDefaultReceiver: import("@trpc/server").TRPCMutationProcedure<{
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
        country: string;
        isDefault: boolean;
        address1: string;
        address2: string | null;
        city: string;
        state: string;
        zipCode: string;
    };
    meta: object;
}>;
//# sourceMappingURL=receivers.handler.d.ts.map