import type { HsCodeRepository } from "../repositories/HsCodeRepository";
export interface IHsCodeServiceDeps {
    hsCodeRepo: HsCodeRepository;
}
export declare class HsCodeService {
    private deps;
    constructor(deps: IHsCodeServiceDeps);
    /**
     * Retrieves the tree of chapters (level 1) with notesHtml.
     */
    getTree(): Promise<{
        code: string;
        description: string;
    }[]>;
    /**
     * Retrieves detail data of a 4-digit heading, including chapter notes and tariff rates list.
     */
    getDetail(inputCode: string): Promise<{
        chapter: {
            code: string;
            name: string;
            notesHtml: string | null;
        };
        heading: {
            code: string;
            name: string;
        } | null;
        selectedRate: {
            code: string;
            description: string;
            chapterCode: string;
            headingCode: string;
            unit: string | null;
            generalRate: string | null;
            specialRate: string | null;
        } | null;
        rates: {
            code: string;
            description: string;
            chapterCode: string;
            headingCode: string;
            unit: string | null;
            generalRate: string | null;
            specialRate: string | null;
        }[];
        children: any[];
    }>;
    /**
     * Performs autocomplete and searches commodities list by text or code.
     */
    search(query: string): Promise<{
        code: string;
        description: string;
        chapterCode: string;
        headingCode: string;
        unit: string | null;
        generalRate: string | null;
        specialRate: string | null;
    }[]>;
    getHeadingTree(headingCode: string): Promise<{
        code: string;
        description: string;
        generalRate: string | null;
        specialRate: string | null;
        unit: string | null;
        children: any[];
    }[]>;
    calculate(dto: {
        code: string;
        value: number;
        mode: string;
        country?: string;
        entryDate?: string;
        loadingDate?: string;
    }): Promise<{
        dutyRate: string;
        baseCost: number;
        totalDuties: number;
        hmf: number;
        mpf: number;
        total: number;
    }>;
    getCountries(): Promise<{
        id: number;
        code: string;
        name: string;
        flag: string | null;
    }[]>;
    getTransportModes(): Promise<{
        id: number;
        code: string;
        name: string;
    }[]>;
}
//# sourceMappingURL=HsCodeService.d.ts.map