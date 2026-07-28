/**
 * Checks if a post/page title or slug already exists.
 * Returns warnings (not errors) to allow user to proceed if desired.
 */
export declare function checkDuplicates(data: {
    title: string;
    slug?: string;
    type: "post" | "page";
    excludeId?: number;
}): Promise<{
    titleDuplicates: string[];
    slugDuplicate: boolean;
}>;
//# sourceMappingURL=DuplicateDetector.d.ts.map