export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
        sortBy?: string | undefined;
        sortDir?: "asc" | "desc" | undefined;
    };
    output: {
        items: {
            name: string;
            id: number;
            code: string;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                customers: number;
            };
            description: string | null;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const listAll: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        name: string;
        id: number;
        code: string;
        description: string | null;
    }[];
    meta: object;
}>;
export declare const get: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        code: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            customers: number;
            rateCards: number;
        };
        description: string | null;
    };
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        code: string;
        name: string;
        description?: string | null | undefined;
    };
    output: {
        name: string;
        id: number;
        code: string;
        description: string | null;
    };
    meta: object;
}>;
export declare const update: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        code?: string | undefined;
        name?: string | undefined;
        description?: string | null | undefined;
    };
    output: {
        name: string;
        id: number;
        code: string;
        description: string | null;
    };
    meta: object;
}>;
export declare const remove: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
    };
    meta: object;
}>;
export declare const getMembers: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        groupId: number;
        search?: string | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        items: {
            name: string | null;
            id: string;
            createdAt: Date;
            email: string;
            username: string;
            phone: string | null;
            groupId: number | null;
            group: {
                name: string;
                id: number;
                code: string;
            } | null;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const getAvailableCustomers: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        groupId: number;
        search?: string | undefined;
        limit?: number | undefined;
    };
    output: {
        name: string | null;
        id: string;
        email: string;
        username: string;
        phone: string | null;
        groupId: number | null;
        group: {
            name: string;
            id: number;
            code: string;
        } | null;
    }[];
    meta: object;
}>;
export declare const assignMembers: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        groupId: number;
        customerIds: string[];
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const removeMembers: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        groupId: number;
        customerIds: string[];
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
//# sourceMappingURL=customer-groups.handler.d.ts.map