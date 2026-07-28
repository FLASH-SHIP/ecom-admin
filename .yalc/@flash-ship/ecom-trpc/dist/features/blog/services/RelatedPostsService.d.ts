interface PostSummary {
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    featuredImage: string | null;
    publishedAt: Date | null;
    categoryIds: number[];
    tagIds: number[];
}
interface RelatedPostResult {
    post: PostSummary;
    score: number;
}
interface IRelatedPostsDeps {
    findPostWithRelations: (id: number) => Promise<{
        id: number;
        categoryIds: number[];
        tagIds: number[];
        authorId: string;
    } | null>;
    findCandidates: (options: {
        excludeId: number;
        categoryIds: number[];
        tagIds: number[];
        limit: number;
    }) => Promise<PostSummary[]>;
}
/**
 * Related Posts Algorithm.
 *
 * Scoring:
 *   - Shared category:   3 points each
 *   - Shared tag:         2 points each
 *   - Same author:        1 point
 *
 * Returns top N posts sorted by relevance score.
 */
export declare class RelatedPostsService {
    private deps;
    constructor(deps: IRelatedPostsDeps);
    findRelated(postId: number, limit?: number): Promise<RelatedPostResult[]>;
}
export {};
//# sourceMappingURL=RelatedPostsService.d.ts.map