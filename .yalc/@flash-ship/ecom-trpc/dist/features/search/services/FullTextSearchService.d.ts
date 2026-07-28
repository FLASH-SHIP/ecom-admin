/**
 * Full-text search across posts and pages using PostgreSQL ILIKE with
 * multiple field matching and relevance scoring.
 *
 * For production-grade search, consider upgrading to PostgreSQL tsvector
 * or integrating Meilisearch/Typesense.
 */
export declare function fullTextSearch(options: {
    query: string;
    types?: ("post" | "page")[];
    status?: string;
    page?: number;
    perPage?: number;
}): Promise<{
    results: SearchResult[];
    total: number;
    page: number;
    perPage: number;
}>;
export interface SearchResult {
    type: "post" | "page";
    id: number;
    title: string;
    slug: string;
    excerpt: string | null;
    status: string;
    date: Date;
}
//# sourceMappingURL=FullTextSearchService.d.ts.map