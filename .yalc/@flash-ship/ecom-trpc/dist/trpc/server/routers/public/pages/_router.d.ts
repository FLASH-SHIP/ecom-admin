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
            id: number;
            createdAt: Date;
            updatedAt: Date;
            order: number;
            slug: string;
            _count: {
                children: number;
            };
            parentId: number | null;
            title: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            authorId: string;
            publishedAt: Date | null;
            template: string | null;
            author: {
                name: string | null;
                id: string;
            };
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
            content: string | null;
            excerpt: string | null;
            featuredImage: string | null;
            publishedAt: Date | null;
            template: string | null;
        } & {
            _translatedFrom?: string;
        }) | null;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map