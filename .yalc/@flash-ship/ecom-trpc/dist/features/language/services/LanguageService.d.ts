import type { LanguageMetaRepository } from "@ecom/features/language/repositories/LanguageMetaRepository";
import type { LanguageRepository } from "@ecom/features/language/repositories/LanguageRepository";
export interface ILanguageServiceDeps {
    languageRepo: LanguageRepository;
    languageMetaRepo: LanguageMetaRepository;
}
export declare class LanguageService {
    private deps;
    private cacheInitialized;
    constructor(deps: ILanguageServiceDeps);
    private ensureCacheInitialized;
    getLanguages(): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }[]>;
    getActiveLanguages(): Promise<import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage[]>;
    getLanguageById(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }>;
    getDefaultLanguage(): Promise<import("@ecom/features/language/services/LanguageLocaleCache").CachedLanguage>;
    createLanguage(data: {
        name: string;
        locale: string;
        code: string;
        flag?: string;
        isRtl?: boolean;
        order?: number;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }>;
    updateLanguage(id: number, data: {
        name?: string;
        locale?: string;
        code?: string;
        flag?: string;
        isRtl?: boolean;
        order?: number;
        isActive?: boolean;
    }): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }>;
    deleteLanguage(id: number): Promise<{
        id: number;
    }>;
    setDefaultLanguage(id: number): Promise<{
        id: number;
        code: string;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        locale: string;
        isDefault: boolean;
        order: number;
        flag: string | null;
        isRtl: boolean;
    }>;
    saveContentLanguage(referenceId: number, referenceType: string, langCode: string, refFrom?: number): Promise<{
        id: number;
        langCode: string;
        referenceId: number;
        referenceType: string;
        origin: string;
    }>;
    deleteContentLanguage(referenceId: number, referenceType: string): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getRelatedLanguageItems(referenceId: number, referenceType: string): Promise<{
        id: number;
        langCode: string;
        referenceId: number;
        referenceType: string;
        language: {
            id: number;
            code: string;
            name: string;
            locale: string;
            flag: string | null;
        };
        origin: string;
    }[]>;
}
//# sourceMappingURL=LanguageService.d.ts.map