export declare const exportData: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        module: "settings" | "posts" | "pages" | "categories" | "tags" | "customers" | "all";
    };
    output: {
        exportedAt: string;
        version: string;
        data: {
            posts: {
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                title: string;
                content: string | null;
                excerpt: string | null;
                isFeatured: boolean;
                allowComments: boolean;
                formatType: string | null;
                views: number;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                author: {
                    name: string | null;
                    id: string;
                    email: string;
                };
                categories: {
                    category: {
                        name: string;
                        id: number;
                    };
                }[];
                tags: {
                    tag: {
                        name: string;
                        id: number;
                    };
                }[];
            }[];
            categories: {
                name: string;
                id: number;
                createdAt: Date;
                order: number;
                slug: string;
                parentId: number | null;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
            }[];
            tags: {
                name: string;
                id: number;
                createdAt: Date;
                slug: string;
            }[];
            pages: {
                id: number;
                createdAt: Date;
                order: number;
                slug: string;
                title: string;
                content: string | null;
                excerpt: string | null;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                template: string | null;
            }[];
            customers: {
                name: string | null;
                id: string;
                createdAt: Date;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                email: string;
                username: string;
                phone: string | null;
                emailVerified: Date | null;
            }[];
            settings: {
                key: string;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                value: string | null;
            }[];
        };
    } | {
        module: string;
        data: {
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            title: string;
            content: string | null;
            excerpt: string | null;
            isFeatured: boolean;
            allowComments: boolean;
            formatType: string | null;
            views: number;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            author: {
                name: string | null;
                id: string;
                email: string;
            };
            categories: {
                category: {
                    name: string;
                    id: number;
                };
            }[];
            tags: {
                tag: {
                    name: string;
                    id: number;
                };
            }[];
        }[];
    } | {
        module: string;
        data: {
            name: string;
            id: number;
            createdAt: Date;
            slug: string;
        }[];
    } | {
        module: string;
        data: {
            id: number;
            createdAt: Date;
            order: number;
            slug: string;
            title: string;
            content: string | null;
            excerpt: string | null;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            template: string | null;
        }[];
    } | {
        module: string;
        data: {
            name: string | null;
            id: string;
            createdAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
            email: string;
            username: string;
            phone: string | null;
            emailVerified: Date | null;
        }[];
    } | {
        module: string;
        data: {
            key: string;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            value: string | null;
        }[];
    };
    meta: object;
}>;
export declare const importData: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        module: "settings" | "posts" | "pages" | "categories" | "tags";
        data: Record<string, unknown>[];
    };
    output: import("@ecom/features/tools/services/ImportService").ImportResult;
    meta: object;
}>;
export declare const fullBackup: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: import("@ecom/features/tools/services/ImportExportService").ExportData;
    meta: object;
}>;
export declare const fullRestore: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        version: string;
        exportedAt: string;
        posts: Record<string, unknown>[];
        pages: Record<string, unknown>[];
        categories: Record<string, unknown>[];
        tags: Record<string, unknown>[];
        redirects: Record<string, unknown>[];
    };
    output: {
        categories: number;
        tags: number;
        posts: number;
        pages: number;
        redirects: number;
    };
    meta: object;
}>;
export declare const checkDuplicates: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        title: string;
        type: "post" | "page";
        slug?: string | undefined;
        excludeId?: number | undefined;
    };
    output: {
        titleDuplicates: string[];
        slugDuplicate: boolean;
    };
    meta: object;
}>;
export declare const fullTextSearch: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        query: string;
        types?: ("post" | "page")[] | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        results: import("@ecom/features/search/services/FullTextSearchService").SearchResult[];
        total: number;
        page: number;
        perPage: number;
    };
    meta: object;
}>;
//# sourceMappingURL=tools.handler.d.ts.map