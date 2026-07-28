import type { TaxonomyRepository } from "../repositories/TaxonomyRepository";
interface ITaxonomyServiceDeps {
    taxonomyRepo: TaxonomyRepository;
}
export declare class TaxonomyService {
    private deps;
    constructor(deps: ITaxonomyServiceDeps);
    list(options?: {
        type?: string;
        parentId?: number | null;
        search?: string;
        page?: number;
        perPage?: number;
    }): Promise<{
        items: {
            id: number;
            name: string;
            parentId: number | null;
            createdAt: Date;
            _count: {
                children: number;
            };
            slug: string;
            description: string | null;
            order: number;
            metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
            type: string;
        }[];
        total: number;
        page: number;
        perPage: number;
    }>;
    get(id: number): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        children: {
            id: number;
            name: string;
            slug: string;
            order: number;
        }[];
        slug: string;
        description: string | null;
        order: number;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        type: string;
    }>;
    getTree(type: string): Promise<{
        id: number;
        name: string;
        children: {
            id: number;
            name: string;
            children: {
                id: number;
                name: string;
                slug: string;
                order: number;
            }[];
            slug: string;
            order: number;
        }[];
        slug: string;
        order: number;
    }[]>;
    getTypes(): Promise<{
        type: string;
        count: number;
    }[]>;
    create(data: {
        name: string;
        slug: string;
        type: string;
        description?: string;
        parentId?: number;
        order?: number;
        metadata?: Record<string, unknown>;
    }): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string | null;
        order: number;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        type: string;
    }>;
    update(id: number, data: {
        name?: string;
        slug?: string;
        description?: string;
        parentId?: number | null;
        order?: number;
        metadata?: Record<string, unknown>;
    }): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string | null;
        order: number;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        type: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
        description: string | null;
        order: number;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        type: string;
    }>;
}
export {};
//# sourceMappingURL=TaxonomyService.d.ts.map