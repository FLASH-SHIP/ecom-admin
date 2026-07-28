/**
 * tRPC middleware to enforce resource-level policies on blog posts.
 */
export declare function requirePostPolicy(action: "canUpdate" | "canDelete"): import("@trpc/server").TRPCMiddlewareBuilder<import("..").Context, object, {
    user: import("@flash-ship/ecom-types").AuthUser;
    post: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        seoMeta: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        title: string;
        content: string | null;
        excerpt: string | null;
        featuredImage: string | null;
        bannerImage: string | null;
        isFeatured: boolean;
        allowComments: boolean;
        formatType: string | null;
        externalSource: string | null;
        sponsoredBy: string | null;
        views: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        authorId: string;
        publishedAt: Date | null;
        author: {
            name: string | null;
            id: string;
            email: string;
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
        translations: {
            id: number;
            slug: string | null;
            title: string;
            content: string | null;
            excerpt: string | null;
            langCode: string;
        }[];
    };
    locale: string | null;
    sessionToken: string | null;
    userAgent: string | null;
    ip: string | null;
}, unknown>;
//# sourceMappingURL=requirePolicy.d.ts.map