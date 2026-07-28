export declare const translationsRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    languages: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            code: string;
            id: number;
            name: string;
            order: number;
            isDefault: boolean;
            flag: string | null;
        }[];
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "page" | "post" | "category" | "tag" | "menuItem";
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
            description: string | null;
            id: number;
            name: string;
            langCode: string;
        } | {
            id: number;
            label: string;
            langCode: string;
        } | null;
        meta: object;
    }>;
    list: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "page" | "post" | "category" | "tag" | "menuItem";
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
            description: string | null;
            id: number;
            name: string;
            langCode: string;
        }[] | {
            id: number;
            label: string;
            langCode: string;
        }[];
        meta: object;
    }>;
    save: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "page" | "post" | "category" | "tag" | "menuItem";
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
            description: string | null;
            id: number;
            name: string;
            langCode: string;
        } | {
            id: number;
            label: string;
            langCode: string;
        };
        meta: object;
    }>;
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "page" | "post" | "category" | "tag" | "menuItem";
            entityId: number;
            langCode: string;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    translationStatus: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "page" | "post" | "category" | "tag" | "menuItem";
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
    batchTranslationStatus: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "page" | "post" | "category" | "tag" | "menuItem";
            entityIds: number[];
        };
        output: Record<number, string[]>;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map