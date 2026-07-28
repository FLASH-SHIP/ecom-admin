export interface ExportData {
    version: string;
    exportedAt: string;
    posts: ExportPost[];
    pages: ExportPage[];
    categories: ExportCategory[];
    tags: ExportTag[];
    redirects: ExportRedirect[];
}
interface ExportPost {
    title: string;
    slug: string;
    content: string | null;
    excerpt: string | null;
    status: string;
    featuredImage: string | null;
    isFeatured: boolean;
    publishedAt: Date | null;
    categories: string[];
    tags: string[];
}
interface ExportPage {
    title: string;
    slug: string;
    content: string | null;
    excerpt: string | null;
    status: string;
    template: string | null;
    order: number;
}
interface ExportCategory {
    name: string;
    slug: string;
    description: string | null;
    parentSlug: string | null;
}
interface ExportTag {
    name: string;
    slug: string;
}
interface ExportRedirect {
    fromPath: string;
    toPath: string;
    statusCode: number;
}
/**
 * Exports all CMS content to a portable JSON format.
 */
export declare function exportContent(): Promise<ExportData>;
/**
 * Imports content from a JSON export.
 * Uses upsert to avoid duplicates — existing slugs are skipped for posts/pages.
 */
export declare function importContent(data: ExportData): Promise<{
    categories: number;
    tags: number;
    posts: number;
    pages: number;
    redirects: number;
}>;
export {};
//# sourceMappingURL=ImportExportService.d.ts.map