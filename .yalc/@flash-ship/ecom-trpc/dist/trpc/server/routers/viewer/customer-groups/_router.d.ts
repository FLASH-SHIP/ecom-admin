export declare const customerGroupsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
        input: {
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
            sortBy?: string | undefined;
            sortDir?: "asc" | "desc" | undefined;
        };
        output: {
            items: {
                code: string;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                updatedAt: Date;
                _count: {
                    customers: number;
                };
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    listAll: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            code: string;
            description: string | null;
            id: number;
            name: string;
        }[];
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            code: string;
            description: string | null;
            id: number;
            createdAt: Date;
            name: string;
            updatedAt: Date;
            _count: {
                customers: number;
                rateCards: number;
            };
        };
        meta: object;
    }>;
    create: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            code: string;
            name: string;
            description?: string | null | undefined;
        };
        output: {
            code: string;
            description: string | null;
            id: number;
            name: string;
        };
        meta: object;
    }>;
    update: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            code?: string | undefined;
            name?: string | undefined;
            description?: string | null | undefined;
        };
        output: {
            code: string;
            description: string | null;
            id: number;
            name: string;
        };
        meta: object;
    }>;
    remove: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
        };
        meta: object;
    }>;
    getMembers: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            groupId: number;
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: {
            items: {
                email: string;
                id: string;
                createdAt: Date;
                name: string | null;
                username: string;
                phone: string | null;
                group: {
                    code: string;
                    id: number;
                    name: string;
                } | null;
                groupId: number | null;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    getAvailableCustomers: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            groupId: number;
            search?: string | undefined;
            limit?: number | undefined;
        };
        output: {
            email: string;
            id: string;
            name: string | null;
            username: string;
            phone: string | null;
            group: {
                code: string;
                id: number;
                name: string;
            } | null;
            groupId: number | null;
        }[];
        meta: object;
    }>;
    assignMembers: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            groupId: number;
            customerIds: string[];
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    removeMembers: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            groupId: number;
            customerIds: string[];
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map