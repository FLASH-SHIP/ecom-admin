export declare const list: import("@trpc/server").TRPCQueryProcedure<{
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
//# sourceMappingURL=pages.handler.d.ts.map