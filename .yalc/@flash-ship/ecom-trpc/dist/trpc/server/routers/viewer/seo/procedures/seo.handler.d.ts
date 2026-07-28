export declare const getSeoMeta: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const saveSeoMeta: import("@trpc/server").TRPCMutationProcedure<{
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
//# sourceMappingURL=seo.handler.d.ts.map