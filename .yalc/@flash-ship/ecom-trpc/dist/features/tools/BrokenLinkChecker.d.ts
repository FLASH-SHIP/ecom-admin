export interface LinkCheckResult {
    url: string;
    status: "ok" | "broken" | "timeout" | "error";
    statusCode?: number;
    responseTime: number;
    foundIn: {
        entityType: string;
        entityId: number;
        entityTitle: string;
    }[];
}
interface IBrokenLinkCheckerDeps {
    findContentWithLinks: () => Promise<{
        id: number;
        title: string;
        content: string;
        type: string;
    }[]>;
}
/**
 * Broken Link Checker — scans content for broken URLs.
 *
 * Extracts all href/src URLs from content HTML, deduplicates,
 * and checks each for accessibility.
 *
 * Designed to run as a scheduled task (e.g., weekly).
 */
export declare class BrokenLinkChecker {
    private deps;
    constructor(deps: IBrokenLinkCheckerDeps);
    /**
     * Extract all URLs from HTML content.
     */
    extractUrls(html: string): string[];
    /**
     * Check if a URL is accessible.
     */
    checkUrl(url: string, timeoutMs?: number): Promise<Omit<LinkCheckResult, "foundIn">>;
    /**
     * Scan all content and check links.
     */
    scanAll(options?: {
        concurrency?: number;
    }): Promise<LinkCheckResult[]>;
    /**
     * Get only broken links from a scan.
     */
    findBrokenLinks(options?: {
        concurrency?: number;
    }): Promise<LinkCheckResult[]>;
}
export {};
//# sourceMappingURL=BrokenLinkChecker.d.ts.map