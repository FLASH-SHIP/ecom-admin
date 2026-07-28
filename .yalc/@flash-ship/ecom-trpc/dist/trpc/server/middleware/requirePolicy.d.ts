/**
 * tRPC middleware to enforce resource-level policies on blog posts.
 */
export declare function requirePostPolicy(action: "canUpdate" | "canDelete"): import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, {
    user: import("@flash-ship/ecom-types").AuthUser;
    post: {
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        id: number;
        createdAt: Date;
        deletedAt: Date | null;
        updatedAt: Date;
        slug: string;
        seoMeta: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        isFeatured: boolean;
        title: string;
        publishedAt: Date | null;
        views: number;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        allowComments: boolean;
        formatType: string | null;
        externalSource: string | null;
        sponsoredBy: string | null;
        authorId: string;
        author: {
            email: string;
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
        translations: {
            id: number;
            slug: string | null;
            title: string;
            content: string | null;
            excerpt: string | null;
            langCode: string;
        }[];
    };
    ip: string | null;
    userAgent: string | null;
    locale: string | null;
    sessionToken: string | null;
}, unknown>;
//# sourceMappingURL=requirePolicy.d.ts.map