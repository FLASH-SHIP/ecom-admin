/**
 * Prisma query scope builders — inspired by Laravel Model Scopes.
 *
 * Provides reusable, composable query conditions to avoid
 * repeating common filters across repositories.
 *
 * Usage:
 *   this.prisma.post.findMany({ where: { ...PostScopes.published(), ...PostScopes.featured() } })
 */
export declare const PostScopes: {
    active: () => {
        readonly deletedAt: null;
    };
    published: () => {
        status: "PUBLISHED";
        deletedAt: null;
    };
    draft: () => {
        status: "DRAFT";
        deletedAt: null;
    };
    pending: () => {
        status: "PENDING";
        deletedAt: null;
    };
    archived: () => {
        status: "ARCHIVED";
        deletedAt: null;
    };
    featured: () => {
        isFeatured: boolean;
        deletedAt: null;
    };
    byAuthor: (authorId: number) => {
        authorId: number;
        deletedAt: null;
    };
    byCategory: (categoryId: number) => {
        categories: {
            some: {
                categoryId: number;
            };
        };
        deletedAt: null;
    };
    search: (query: string) => {
        OR: ({
            title: {
                contains: string;
                mode: "insensitive";
            };
            content?: undefined;
            excerpt?: undefined;
        } | {
            content: {
                contains: string;
                mode: "insensitive";
            };
            title?: undefined;
            excerpt?: undefined;
        } | {
            excerpt: {
                contains: string;
                mode: "insensitive";
            };
            title?: undefined;
            content?: undefined;
        })[];
    };
    trashed: () => {
        deletedAt: {
            not: null;
        };
    };
    scheduledForPublish: () => {
        status: "DRAFT";
        publishedAt: {
            lte: Date;
        };
        deletedAt: null;
    };
};
export declare const PageScopes: {
    active: () => {
        readonly deletedAt: null;
    };
    published: () => {
        status: "PUBLISHED";
        deletedAt: null;
    };
    draft: () => {
        status: "DRAFT";
        deletedAt: null;
    };
    byTemplate: (template: string) => {
        template: string;
        deletedAt: null;
    };
    search: (query: string) => {
        OR: ({
            title: {
                contains: string;
                mode: "insensitive";
            };
            content?: undefined;
        } | {
            content: {
                contains: string;
                mode: "insensitive";
            };
            title?: undefined;
        })[];
    };
    trashed: () => {
        deletedAt: {
            not: null;
        };
    };
    topLevel: () => {
        parentId: null;
        deletedAt: null;
    };
};
export declare const CommentScopes: {
    approved: () => {
        status: "approved";
    };
    pending: () => {
        status: "pending";
    };
    byPost: (postId: number) => {
        postId: number;
    };
    topLevel: () => {
        parentId: null;
    };
};
//# sourceMappingURL=scopes.d.ts.map