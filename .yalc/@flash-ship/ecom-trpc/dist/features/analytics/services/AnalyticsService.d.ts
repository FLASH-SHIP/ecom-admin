/**
 * Content analytics aggregations.
 * Provides trend data, popular content, and publishing stats.
 */
export declare class AnalyticsService {
    /**
     * Get publishing trends — posts published per day/week/month.
     */
    getPublishingTrends(days?: number): Promise<{
        date: string;
        count: number;
    }[]>;
    /**
     * Get top performing posts by views.
     */
    getPopularContent(limit?: number): Promise<{
        id: number;
        title: string;
        slug: string;
        views: number;
        publishedAt: Date | null;
    }[]>;
    /**
     * Get content status breakdown.
     */
    getStatusBreakdown(): Promise<{
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        count: number;
    }[]>;
    /**
     * Get author productivity — posts per author.
     */
    getAuthorStats(limit?: number): Promise<{
        authorId: string;
        name: string;
        email: string;
        postCount: number;
        totalViews: number;
    }[]>;
    /**
     * Get category popularity — posts per category.
     */
    getCategoryStats(): Promise<{
        id: number;
        name: string;
        slug: string;
        postCount: number;
    }[]>;
    /**
     * Get engagement overview — comments, contacts, members over time.
     */
    getEngagementOverview(days?: number): Promise<{
        period: string;
        newComments: number;
        newContacts: number;
        newCustomers: number;
    }>;
}
export declare function getAnalyticsService(): AnalyticsService;
//# sourceMappingURL=AnalyticsService.d.ts.map