export interface HSCodeItem {
    code: string;
    description: string;
    generalRate: string;
}
export interface ChapterTree {
    code: string;
    description: string;
}
export interface Country {
    id: number;
    name: string;
    code: string;
    flag: string;
}
export interface TransportMode {
    id: number;
    code: string;
    name: string;
}
export declare function getTree(): Promise<ChapterTree[]>;
export declare function getDetail(code: string): Promise<any>;
export declare function search(query: string): Promise<HSCodeItem[]>;
export declare function getCountries(): Promise<Country[]>;
export declare function getTransportModes(): Promise<TransportMode[]>;
export declare function calculate(code: string, value: number, mode: string, country?: string, entryDate?: string, loadingDate?: string): Promise<any>;
//# sourceMappingURL=hscode-service.d.ts.map