export declare const languages: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        name: string;
        id: number;
        code: string;
        order: number;
        isDefault: boolean;
        flag: string | null;
    }[];
    meta: object;
}>;
export declare const getTranslation: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityType: "post" | "category" | "tag" | "menuItem" | "page";
        entityId: number;
        langCode: string;
    };
    output: {
        id: number;
        slug: string | null;
        title: string;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    } | {
        name: string;
        id: number;
        langCode: string;
        description: string | null;
    } | {
        id: number;
        langCode: string;
        label: string;
    } | null;
    meta: object;
}>;
export declare const listTranslations: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityType: "post" | "category" | "tag" | "menuItem" | "page";
        entityId: number;
    };
    output: {
        id: number;
        slug: string | null;
        title: string;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    }[] | {
        name: string;
        id: number;
        langCode: string;
        description: string | null;
    }[] | {
        id: number;
        langCode: string;
        label: string;
    }[];
    meta: object;
}>;
export declare const saveTranslation: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityType: "post" | "category" | "tag" | "menuItem" | "page";
        entityId: number;
        langCode: string;
        data: Record<string, string | undefined>;
    };
    output: {
        id: number;
        slug: string | null;
        title: string;
        content: string | null;
        excerpt: string | null;
        langCode: string;
    } | {
        name: string;
        id: number;
        langCode: string;
        description: string | null;
    } | {
        id: number;
        langCode: string;
        label: string;
    };
    meta: object;
}>;
export declare const deleteTranslation: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityType: "post" | "category" | "tag" | "menuItem" | "page";
        entityId: number;
        langCode: string;
    };
    output: import("@ecom/prisma").Prisma.BatchPayload;
    meta: object;
}>;
export declare const translationStatus: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityType: "post" | "category" | "tag" | "menuItem" | "page";
        entityId: number;
    };
    output: {
        translations: {
            langCode: string;
        }[];
        originLangCode: string;
    };
    meta: object;
}>;
/**
 * Batch translation status — accepts multiple entity IDs in a single request.
 * Returns a map of entityId → langCode[] to avoid N+1 queries.
 */
export declare const batchTranslationStatus: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityType: "post" | "category" | "tag" | "menuItem" | "page";
        entityIds: number[];
    };
    output: Record<number, string[]>;
    meta: object;
}>;
//# sourceMappingURL=translations.handler.d.ts.map