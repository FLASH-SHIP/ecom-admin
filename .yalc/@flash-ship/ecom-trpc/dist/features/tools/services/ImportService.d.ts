import type { PrismaClient } from "@ecom/prisma";
export interface ImportResult {
    success: number;
    failed: number;
    errors: Array<{
        index: number;
        error: string;
    }>;
}
export declare class ImportService {
    private prisma;
    constructor(prisma: PrismaClient);
    importPosts(data: Array<{
        title: string;
        slug?: string;
        content?: string;
        excerpt?: string;
        status?: string;
        isFeatured?: boolean;
        authorId: string;
    }>): Promise<ImportResult>;
    importCategories(data: Array<{
        name: string;
        slug?: string;
        description?: string;
        parentId?: number;
        order?: number;
    }>): Promise<ImportResult>;
    importTags(data: Array<{
        name: string;
        slug?: string;
    }>): Promise<ImportResult>;
    importPages(data: Array<{
        title: string;
        slug?: string;
        content?: string;
        template?: string;
        authorId: string;
    }>): Promise<ImportResult>;
    importSettings(data: Array<{
        key: string;
        value: string;
    }>): Promise<ImportResult>;
    private processBatch;
}
//# sourceMappingURL=ImportService.d.ts.map