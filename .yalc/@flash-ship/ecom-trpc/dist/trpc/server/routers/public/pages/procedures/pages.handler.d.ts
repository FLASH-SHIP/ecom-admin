export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const getBySlug: import("@trpc/server").TRPCQueryProcedure<{
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
//# sourceMappingURL=pages.handler.d.ts.map