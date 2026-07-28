/**
 * Finds posts related to a given post, based on shared categories and tags.
 * Uses a scoring algorithm: each shared category = 2 points, each shared tag = 1 point.
 */
export declare function getRelatedPosts(postId: number, limit?: number): Promise<{
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featuredImage: string | null;
    publishedAt: Date | null;
    score: number;
}[]>;
//# sourceMappingURL=RelatedContentService.d.ts.map