export declare const blogRouter: import("@trpc/server").TRPCBuiltRouter<{
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
    listPosts: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            categoryId?: number | undefined;
            isFeatured?: boolean | undefined;
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        } | undefined;
        output: import("@flash-ship/ecom-lib").PaginatedResult<{
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            deletedAt: Date | null;
            slug: string;
            isFeatured: boolean;
            title: string;
            publishedAt: Date | null;
            views: number;
            excerpt: string | null;
            featuredImage: string | null;
            authorId: string;
            author: {
                id: string;
                name: string | null;
                avatarUrl: string | null;
            };
            categories: {
                category: {
                    id: number;
                    name: string;
                    slug: string;
                };
            }[];
        }>;
        meta: object;
    }>;
    getBySlug: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            slug: string;
        };
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            slug: string;
            isFeatured: boolean;
            title: string;
            publishedAt: Date | null;
            views: number;
            content: string | null;
            excerpt: string | null;
            featuredImage: string | null;
            bannerImage: string | null;
            externalSource: string | null;
            sponsoredBy: string | null;
            authorId: string;
            author: {
                id: string;
                name: string | null;
                avatarUrl: string | null;
            };
            categories: {
                category: {
                    id: number;
                    name: string;
                    slug: string;
                };
            }[];
            tags: {
                tag: {
                    id: number;
                    name: string;
                    slug: string;
                };
            }[];
        } & {
            _translatedFrom?: string;
        };
        meta: object;
    }>;
    categories: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: {
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            name: string;
            children: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                name: string;
                children: {
                    status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                    id: number;
                    name: string;
                    order: number;
                    slug: string;
                    icon: string | null;
                }[];
                order: number;
                slug: string;
                icon: string | null;
            }[];
            order: number;
            slug: string;
            icon: string | null;
        }[];
        meta: object;
    }>;
    tags: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            search?: string | undefined;
            page?: number | undefined;
            perPage?: number | undefined;
        } | undefined;
        output: {
            rows: {
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                id: number;
                createdAt: Date;
                name: string;
                _count: {
                    posts: number;
                };
                slug: string;
            }[];
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
        meta: object;
    }>;
    listComments: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            postId: number;
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: {
            items: {
                status: string;
                id: number;
                createdAt: Date;
                _count: {
                    replies: number;
                };
                customerId: string | null;
                ipAddress: string | null;
                parentId: number | null;
                content: string;
                postId: number | null;
                pageId: number | null;
                authorName: string | null;
                authorEmail: string | null;
            }[];
            total: number;
            page: number;
            perPage: number;
        };
        meta: object;
    }>;
    submitComment: import("@trpc/server").TRPCMutationProcedure<{
        input: {
            postId: number;
            authorName: string;
            authorEmail: string;
            content: string;
            parentId?: number | undefined;
            website?: string | undefined;
        };
        output: {
            success: boolean;
            message: string;
        };
        meta: object;
    }>;
    relatedPosts: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            postId: number;
            limit?: number | undefined;
        };
        output: ({
            id: number;
            title: string;
            slug: string;
            excerpt: string | null;
            featuredImage: string | null;
            publishedAt: Date | null;
            score: number;
        } & {
            _translatedFrom?: string;
        })[];
        meta: object;
    }>;
    search: import("@trpc/server").TRPCQueryProcedure<{
        input: {
            query: string;
            page?: number | undefined;
            perPage?: number | undefined;
        };
        output: import("@flash-ship/ecom-lib").PaginatedResult<{
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            id: number;
            createdAt: Date;
            deletedAt: Date | null;
            slug: string;
            isFeatured: boolean;
            title: string;
            publishedAt: Date | null;
            views: number;
            excerpt: string | null;
            featuredImage: string | null;
            authorId: string;
            author: {
                id: string;
                name: string | null;
                avatarUrl: string | null;
            };
            categories: {
                category: {
                    id: number;
                    name: string;
                    slug: string;
                };
            }[];
        }>;
        meta: object;
    }>;
}>>;
//# sourceMappingURL=_router.d.ts.map