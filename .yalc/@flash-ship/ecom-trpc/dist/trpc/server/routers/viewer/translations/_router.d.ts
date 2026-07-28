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
            name: string;
            id: number;
            code: string;
            order: number;
            isDefault: boolean;
            flag: string | null;
        }[];
        meta: object;
    }>;
    get: import("@trpc/server").TRPCQueryProcedure<{
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
    list: import("@trpc/server").TRPCQueryProcedure<{
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
    save: import("@trpc/server").TRPCMutationProcedure<{
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
    delete: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            entityType: "post" | "category" | "tag" | "menuItem" | "page";
            entityId: number;
            langCode: string;
        };
        output: import("@ecom/prisma").Prisma.BatchPayload;
        meta: object;
    }>;
    translationStatus: import("@trpc/server").TRPCQueryProcedure<{
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
    batchTranslationStatus: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            entityType: "post" | "category" | "tag" | "menuItem" | "page";
            entityIds: number[];
        };
        output: Record<number, string[]>;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map