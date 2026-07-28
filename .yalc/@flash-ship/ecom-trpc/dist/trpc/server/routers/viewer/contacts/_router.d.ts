export declare const contactsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            formSlug?: string | undefined;
            status?: "new" | "read" | "replied" | "archived" | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: {
            items: {
                message: string;
                email: string;
                status: string;
                id: number;
                createdAt: Date;
                name: string;
                phone: string | null;
                formSlug: string;
                subject: string | null;
                assigneeId: string | null;
                repliedAt: Date | null;
            }[];
            total: number;
            page: number;
            perPage: number;
        };
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            id: number;
        };
        output: {
            message: string;
            email: string;
            status: string;
            id: number;
            createdAt: Date;
            name: string;
            phone: string | null;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            updatedAt: Date;
            ipAddress: string | null;
            formSlug: string;
            subject: string | null;
            assigneeId: string | null;
            repliedAt: Date | null;
            assignee: {
                id: string;
                name: string | null;
            } | null;
        };
        meta: object;
    }>;
    statusCounts: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            [k: string]: number;
        };
        meta: object;
    }>;
    updateStatus: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            status: "new" | "read" | "replied" | "archived";
        };
        output: {
            status: string;
            id: number;
        };
        meta: object;
    }>;
    assignTo: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
            assigneeId: string;
        };
        output: {
            id: number;
            assigneeId: string | null;
        };
        meta: object;
    }>;
    markReplied: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            status: string;
            id: number;
            repliedAt: Date | null;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            message: string;
            email: string;
            status: string;
            id: number;
            createdAt: Date;
            name: string;
            phone: string | null;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
            updatedAt: Date;
            ipAddress: string | null;
            formSlug: string;
            subject: string | null;
            assigneeId: string | null;
            repliedAt: Date | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map