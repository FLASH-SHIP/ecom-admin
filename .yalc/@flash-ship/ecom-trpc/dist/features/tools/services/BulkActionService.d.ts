import type { PrismaClient } from "@ecom/prisma";
export interface BulkResult<T = number | string> {
    success: number;
    failed: number;
    errors: Array<{
        id: T;
        error: string;
    }>;
}
export declare class BulkActionService {
    private prisma;
    constructor(prisma: PrismaClient);
    bulkDeletePosts(ids: number[]): Promise<BulkResult<number>>;
    bulkStatusPosts(ids: number[], status: "PUBLISHED" | "DRAFT" | "ARCHIVED"): Promise<BulkResult<number>>;
    bulkCategoryAssign(postIds: number[], categoryIds: number[]): Promise<BulkResult<number>>;
    bulkDeleteCategories(ids: number[]): Promise<BulkResult<number>>;
    bulkDeleteTags(ids: number[]): Promise<BulkResult<number>>;
    bulkDeletePages(ids: number[]): Promise<BulkResult<number>>;
    bulkStatusCustomers(ids: string[], status: "ACTIVE" | "INACTIVE" | "BANNED"): Promise<BulkResult<string>>;
    private processBulk;
}
//# sourceMappingURL=BulkActionService.d.ts.map