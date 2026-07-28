export declare const exportData: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        module: "customers" | "categories" | "tags" | "posts" | "pages" | "settings" | "all";
    };
    output: {
        exportedAt: string;
        version: string;
        data: {
            posts: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                updatedAt: Date;
                slug: string;
                isFeatured: boolean;
                title: string;
                views: number;
                content: string | null;
                excerpt: string | null;
                allowComments: boolean;
                formatType: string | null;
                author: {
                    email: string;
                    id: string;
                    name: string | null;
                };
                categories: {
                    category: {
                        id: number;
                        name: string;
                    };
                }[];
                tags: {
                    tag: {
                        id: number;
                        name: string;
                    };
                }[];
            }[];
            categories: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                description: string | null;
                id: number;
                createdAt: Date;
                name: string;
                parentId: number | null;
                order: number;
                slug: string;
            }[];
            tags: {
                id: number;
                createdAt: Date;
                name: string;
                slug: string;
            }[];
            pages: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                order: number;
                slug: string;
                title: string;
                content: string | null;
                excerpt: string | null;
                template: string | null;
            }[];
            customers: {
                email: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
                id: string;
                createdAt: Date;
                name: string | null;
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
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            updatedAt: Date;
            slug: string;
            isFeatured: boolean;
            title: string;
            views: number;
            content: string | null;
            excerpt: string | null;
            allowComments: boolean;
            formatType: string | null;
            author: {
                email: string;
                id: string;
                name: string | null;
            };
            categories: {
                category: {
                    id: number;
                    name: string;
                };
            }[];
            tags: {
                tag: {
                    id: number;
                    name: string;
                };
            }[];
        }[];
    } | {
        module: string;
        data: {
            id: number;
            createdAt: Date;
            name: string;
            slug: string;
        }[];
    } | {
        module: string;
        data: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            order: number;
            slug: string;
            title: string;
            content: string | null;
            excerpt: string | null;
            template: string | null;
        }[];
    } | {
        module: string;
        data: {
            email: string;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.CustomerStatus;
            id: string;
            createdAt: Date;
            name: string | null;
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
        module: "categories" | "tags" | "posts" | "pages" | "settings";
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
        type: "page" | "post";
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
        types?: ("page" | "post")[] | undefined;
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