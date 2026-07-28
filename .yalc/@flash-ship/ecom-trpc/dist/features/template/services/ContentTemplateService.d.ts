import type { ContentTemplateRepository } from "../repositories/ContentTemplateRepository";
interface IContentTemplateServiceDeps {
    templateRepo: ContentTemplateRepository;
}
export declare class ContentTemplateService {
    private deps;
    constructor(deps: IContentTemplateServiceDeps);
    list(options?: {
        type?: string;
        search?: string;
        isActive?: boolean;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        slug: string;
        type: string;
        thumbnail: string | null;
    }[]>;
    get(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        thumbnail: string | null;
    }>;
    create(data: {
        name: string;
        slug: string;
        type: string;
        content?: string;
        structure?: Record<string, unknown>;
        thumbnail?: string;
        createdBy?: string;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
    update(id: number, data: {
        name?: string;
        slug?: string;
        content?: string;
        structure?: Record<string, unknown>;
        thumbnail?: string;
        isActive?: boolean;
    }): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
    duplicate(id: number): Promise<{
        id: number;
        name: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        content: string | null;
        type: string;
        createdBy: string | null;
        structure: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        thumbnail: string | null;
    }>;
}
export {};
//# sourceMappingURL=ContentTemplateService.d.ts.map