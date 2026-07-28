export declare const commentsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            postId?: number | undefined;
            pageId?: number | undefined;
            status?: "pending" | "approved" | "spam" | "trash" | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: {
            items: {
                id: number;
                createdAt: Date;
                _count: {
                    replies: number;
                };
                parentId: number | null;
                content: string;
                status: string;
                ipAddress: string | null;
                customerId: string | null;
                postId: number | null;
                authorName: string | null;
                authorEmail: string | null;
                pageId: number | null;
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
            id: number;
            createdAt: Date;
            parentId: number | null;
            content: string;
            status: string;
            ipAddress: string | null;
            customerId: string | null;
            postId: number | null;
            authorName: string | null;
            authorEmail: string | null;
            pageId: number | null;
            replies: {
                id: number;
                createdAt: Date;
                content: string;
                status: string;
                authorName: string | null;
            }[];
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
    approve: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            status: string;
        };
        meta: object;
    }>;
    markSpam: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            status: string;
        };
        meta: object;
    }>;
    trash: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            status: string;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            id: number;
        };
        output: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            parentId: number | null;
            content: string;
            status: string;
            ipAddress: string | null;
            customerId: string | null;
            postId: number | null;
            authorName: string | null;
            authorEmail: string | null;
            pageId: number | null;
        };
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map