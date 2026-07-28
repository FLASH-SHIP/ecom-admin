/**
 * Aggregates dashboard overview stats in a single efficient query batch.
 */
export declare function getDashboardStats(): Promise<{
    content: {
        totalPosts: number;
        publishedPosts: number;
        draftPosts: number;
        scheduledPosts: number;
        totalPages: number;
        totalCategories: number;
        totalTags: number;
    };
    engagement: {
        totalComments: number;
        pendingComments: number;
        totalContacts: number;
        newContacts: number;
    };
    people: {
        totalCustomers: number;
    };
    media: {
        totalMedia: number;
        totalSize: number;
    };
    recentPosts: {
        id: number;
        createdAt: Date;
        title: string;
        slug: string;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
    }[];
    popularPosts: {
        id: number;
        title: string;
        slug: string;
        views: number;
    }[];
}>;
//# sourceMappingURL=DashboardStats.d.ts.map