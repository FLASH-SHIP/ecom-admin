export declare const publicPagesRouter: import("@trpc/server").TRPCBuiltRouter<{
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
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            _count: {
                children: number;
            };
            parentId: number | null;
            order: number;
            slug: string;
            title: string;
            publishedAt: Date | null;
            authorId: string;
            author: {
                id: string;
                name: string | null;
            };
            template: string | null;
        } & {
            _translatedFrom?: string;
        })[];
        meta: object;
    }>;
    getBySlug: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            slug: string;
        };
        output: ({
            id: number;
            slug: string;
            seoMeta: {
                seoTitle: string | null;
                seoDescription: string | null;
                seoImage: string | null;
                indexMode: string | null;
            } | null;
            title: string;
            publishedAt: Date | null;
            content: string | null;
            excerpt: string | null;
            featuredImage: string | null;
            template: string | null;
        } & {
            _translatedFrom?: string;
        }) | null;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map