export declare const listSenders: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: ({
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        ward: string | null;
        country: string;
        email: string | null;
        phone: string | null;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } & {
        cityName: string;
        wardName: string | null;
    })[];
    meta: object;
}>;
export declare const createSender: import("@trpc/server").TRPCMutationProcedure<{
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
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        ward: string | null;
        country: string;
        email: string | null;
        phone: string | null;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } & {
        cityName: string;
        wardName: string | null;
    }) | undefined;
    meta: object;
}>;
export declare const updateSender: import("@trpc/server").TRPCMutationProcedure<{
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
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        ward: string | null;
        country: string;
        email: string | null;
        phone: string | null;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    } & {
        cityName: string;
        wardName: string | null;
    }) | undefined;
    meta: object;
}>;
export declare const deleteSender: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const setDefaultSender: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        ward: string | null;
        country: string;
        email: string | null;
        phone: string | null;
        isDefault: boolean;
        label: string | null;
        address: string;
        city: string;
        zipCode: string | null;
    };
    meta: object;
}>;
//# sourceMappingURL=senders.handler.d.ts.map