export declare const listPosts: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        categoryId?: number | undefined;
        isFeatured?: boolean | undefined;
        search?: string | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    } | undefined;
    output: import("@flash-ship/ecom-lib").PaginatedResult<{
        id: number;
        createdAt: Date;
        deletedAt: Date | null;
        slug: string;
        title: string;
        excerpt: string | null;
        featuredImage: string | null;
        isFeatured: boolean;
        views: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        authorId: string;
        publishedAt: Date | null;
        author: {
            name: string | null;
            id: string;
            avatarUrl: string | null;
        };
        categories: {
            category: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
    }>;
    meta: object;
}>;
export declare const getBySlug: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        slug: string;
    };
    output: {
        id: number;
        createdAt: Date;
        slug: string;
        title: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        isFeatured: boolean;
        externalSource: string | null;
        sponsoredBy: string | null;
        views: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        authorId: string;
        publishedAt: Date | null;
        author: {
            name: string | null;
            id: string;
            avatarUrl: string | null;
        };
        categories: {
            category: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
        tags: {
            tag: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
    } & {
        _translatedFrom?: string;
    };
    meta: object;
}>;
export declare const categories: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        name: string;
        id: number;
        order: number;
        slug: string;
        children: {
            name: string;
            id: number;
            order: number;
            slug: string;
            children: {
                name: string;
                id: number;
                order: number;
                slug: string;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                icon: string | null;
            }[];
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            icon: string | null;
        }[];
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        icon: string | null;
    }[];
    meta: object;
}>;
export declare const tags: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        search?: string | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    } | undefined;
    output: {
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            slug: string;
            _count: {
                posts: number;
            };
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    };
    meta: object;
}>;
export declare const listComments: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        postId: number;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        items: {
            id: number;
            createdAt: Date;
            _count: {
                replies: number;
            };
            parentId: number | null;
            content: string;
            status: string;
            ipAddress: string | null;
            customerId: string | null;
            postId: number | null;
            authorName: string | null;
            authorEmail: string | null;
            pageId: number | null;
        }[];
        total: number;
        page: number;
        perPage: number;
    };
    meta: object;
}>;
export declare const submitComment: import("@trpc/server").TRPCMutationProcedure<{
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
export declare const relatedPosts: import("@trpc/server").TRPCQueryProcedure<{
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
export declare const search: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        query: string;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: import("@flash-ship/ecom-lib").PaginatedResult<{
        id: number;
        createdAt: Date;
        deletedAt: Date | null;
        slug: string;
        title: string;
        excerpt: string | null;
        featuredImage: string | null;
        isFeatured: boolean;
        views: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        authorId: string;
        publishedAt: Date | null;
        author: {
            name: string | null;
            id: string;
            avatarUrl: string | null;
        };
        categories: {
            category: {
                name: string;
                id: number;
                slug: string;
            };
        }[];
    }>;
    meta: object;
}>;
//# sourceMappingURL=blog.handler.d.ts.map