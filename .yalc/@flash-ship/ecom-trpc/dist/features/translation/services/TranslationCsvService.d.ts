type EntityType = "post" | "category" | "page" | "tag";
/**
 * Service for exporting/importing translations as CSV.
 * Enables translators to work offline with spreadsheet tools.
 *
 * CSV format:
 *   id,field,original,translated
 *   1,title,"Hello World","Xin chào thế giới"
 *   1,excerpt,"A summary","Tóm tắt"
 */
export declare class TranslationCsvService {
    /**
     * Export all translations for a given entity type and language to CSV.
     * Each translatable field becomes a separate row.
     */
    exportCsv(entityType: EntityType, langCode: string): Promise<string>;
    /**
     * Import translations from a CSV string.
     * Only rows with a non-empty `translated` value are upserted.
     */
    importCsv(entityType: EntityType, langCode: string, csvContent: string): Promise<{
        updated: number;
        skipped: number;
        errors: string[];
    }>;
}
export {};
//# sourceMappingURL=TranslationCsvService.d.ts.map