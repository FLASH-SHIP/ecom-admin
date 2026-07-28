/**
 * Content diff utility — compares two revision snapshots.
 *
 * Generates a line-by-line diff suitable for side-by-side comparison.
 * Inspired by WordPress revision comparison.
 */
export interface DiffLine {
    type: "added" | "removed" | "unchanged";
    lineNumber: number;
    content: string;
}
export interface DiffResult {
    oldTitle: string;
    newTitle: string;
    titleChanged: boolean;
    additions: number;
    deletions: number;
    lines: DiffLine[];
}
/**
 * Compare two text strings and produce a line-by-line diff.
 */
export declare function computeDiff(oldText: string, newText: string, oldTitle: string, newTitle: string): DiffResult;
//# sourceMappingURL=contentDiff.d.ts.map