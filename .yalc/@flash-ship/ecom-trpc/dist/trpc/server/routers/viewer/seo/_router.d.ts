export declare const seoRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "post" | "category" | "tag" | "page";
            entityId: number;
        };
        output: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        meta: object;
    }>;
    save: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "post" | "category" | "tag" | "page";
            entityId: number;
            data: {
                seoTitle?: string | undefined;
                seoDescription?: string | undefined;
                seoImage?: string | undefined;
                indexMode?: "index" | "noindex" | undefined;
            };
        };
        output: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map