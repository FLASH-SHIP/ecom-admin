export declare const getSeoMeta: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityType: "page" | "post" | "category" | "tag";
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
export declare const saveSeoMeta: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityType: "page" | "post" | "category" | "tag";
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
//# sourceMappingURL=seo.handler.d.ts.map