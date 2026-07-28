import type { SeoMetaRepository } from "@ecom/features/seo/repositories/SeoMetaRepository";
export interface ISeoMetaServiceDeps {
    seoMetaRepo: SeoMetaRepository;
}
interface SeoData {
    seoTitle?: string;
    seoDescription?: string;
    seoImage?: string;
    indexMode?: string;
}
export declare class SeoMetaService {
    private deps;
    constructor(deps: ISeoMetaServiceDeps);
    getForPost(postId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    getForCategory(categoryId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    getForPage(pageId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    getForTag(tagId: number): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    saveForPost(postId: number, data: SeoData): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    saveForCategory(categoryId: number, data: SeoData): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    saveForPage(pageId: number, data: SeoData): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
    saveForTag(tagId: number, data: SeoData): Promise<{
        id: number;
        seoTitle: string | null;
        seoDescription: string | null;
        seoImage: string | null;
        indexMode: string | null;
    } | null>;
}
export {};
//# sourceMappingURL=SeoMetaService.d.ts.map