import type { PrismaClient } from "@ecom/prisma";
export declare class HsCodeRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    /**
     * Queries distinct 4-digit headings from crawl_hscode table.
     * Returns one row per heading containing the full article_description hierarchy.
     */
    getTreeRawData(): Promise<{
        chapter_code: string;
        heading_code: string;
        article_description: string;
    }[]>;
    getChapters(): Promise<{
        code: string;
        description: string;
        notes: string | null;
    }[]>;
    getHeadingsByChapter(chapterCode: string): Promise<{
        code: string;
        description: string;
    }[]>;
    /**
     * Queries all tariff rate records from hscode_flexport that belong to a 4-digit heading.
     */
    getFlexportItemsByHeading(headingCode: string): Promise<{
        code: string;
        description: string | null;
        generalRate: string | null;
        column2Rate: string | null;
        specialRate: string | null;
        unitsofQuantity: string | null;
    }[]>;
    getAllFlexportItems(): Promise<{
        code: string;
        description: string | null;
        generalRate: string | null;
        column2Rate: string | null;
        specialRate: string | null;
        unitsofQuantity: string | null;
    }[]>;
    /**
     * Searches hscode_flexport items matching the search query by code or description.
     */
    searchFlexportItems(searchQuery: string, limit?: number): Promise<{
        code: string;
        description: string | null;
        generalRate: string | null;
        specialRate: string | null;
        unitsofQuantity: string | null;
    }[]>;
    /**
     * Finds the article description of a 4-digit heading to resolve its name dynamically.
     */
    getHeadingDescription(headingCode: string): Promise<string | null>;
    /**
     * Retrieves chapter level metadata (description and crawled notes HTML).
     */
    getChapterData(chapterCode: string): Promise<{
        articleDescription: string | null;
        notes: string | null;
    } | null>;
    getFlexportItemByCode(code: string): Promise<{
        code: string;
        generalRate: string | null;
        specialRate: string | null;
    } | null>;
    getCountries(): Promise<{
        id: number;
        code: string;
        name: string;
        flag: string | null;
    }[]>;
    getCrawlHsCodeByCode(code: string): Promise<{
        generalRateOfDuty: string | null;
        section301TariffsRate: string | null;
        additionalTariffsRate: string | null;
        antidumpingDutyRate: string | null;
        countervailingDutyRate: string | null;
    } | null>;
    getTransportModes(): Promise<{
        id: number;
        code: string;
        name: string;
    }[]>;
}
//# sourceMappingURL=HsCodeRepository.d.ts.map