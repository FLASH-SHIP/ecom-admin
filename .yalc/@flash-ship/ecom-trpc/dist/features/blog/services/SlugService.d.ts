import type { SlugRepository } from "../repositories/SlugRepository";
interface ISlugServiceDeps {
    slugRepo: SlugRepository;
}
export declare class SlugService {
    private deps;
    constructor(deps: ISlugServiceDeps);
    /**
     * Generate a unique, URL-safe slug for a model.
     * Checks the centralized Slug table for cross-model collision detection.
     */
    createSlug(referenceId: number, referenceType: string, name: string, customSlug?: string): Promise<{
        key: string;
        id: number;
        prefix: string;
    }>;
    /**
     * Update slug for an existing model.
     * Only updates if the slug actually changed.
     */
    updateSlug(referenceId: number, referenceType: string, name: string, customSlug?: string): Promise<{
        key: string;
        id: number;
        prefix: string;
    }>;
    /**
     * Delete slug when the referenced model is permanently deleted.
     */
    deleteSlug(referenceId: number, referenceType: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    /**
     * Ensure a slug is unique within the same prefix by appending a numeric suffix.
     * Mirrors old CMS SlugService collision detection.
     */
    private ensureUnique;
}
export {};
//# sourceMappingURL=SlugService.d.ts.map