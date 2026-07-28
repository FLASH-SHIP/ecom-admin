import type { ContentStatus } from "@ecom/prisma";
import type { CategoryRepository } from "../repositories/CategoryRepository";
import type { SlugService } from "./SlugService";
interface ICategoryServiceDeps {
    categoryRepo: CategoryRepository;
    slugService: SlugService;
}
export declare class CategoryService {
    private deps;
    constructor(deps: ICategoryServiceDeps);
    listCategories(options?: {
        search?: string;
        where?: Record<string, unknown>;
        status?: ContentStatus;
        parentId?: number | null;
        includeDeleted?: boolean;
        page?: number;
        perPage?: number;
        sortBy?: "id" | "name" | "createdAt" | "status" | "order";
        sortDir?: "asc" | "desc";
    }): Promise<{
        items: {
            name: string;
            id: number;
            createdAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            _count: {
                posts: number;
                children: number;
            };
            slug: string;
            isFeatured: number;
            order: number;
            parentId: number | null;
            description: string | null;
            icon: string | null;
            isDefault: number;
        }[];
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            _count: {
                posts: number;
                children: number;
            };
            slug: string;
            isFeatured: number;
            order: number;
            parentId: number | null;
            description: string | null;
            icon: string | null;
            isDefault: number;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
    getCategoryTree(): Promise<{
        name: string;
        id: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        order: number;
        children: {
            name: string;
            id: number;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            slug: string;
            order: number;
            children: {
                name: string;
                id: number;
                status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
                slug: string;
                order: number;
                icon: string | null;
            }[];
            icon: string | null;
        }[];
        icon: string | null;
    }[]>;
    getCategory(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        _count: {
            posts: number;
        };
        slug: string;
        isFeatured: number;
        translations: {
            name: string;
            id: number;
            langCode: string;
            description: string | null;
        }[];
        seoMeta: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        authorId: string | null;
        order: number;
        parent: {
            name: string;
            id: number;
            slug: string;
        } | null;
        children: {
            name: string;
            id: number;
            slug: string;
            order: number;
        }[];
        parentId: number | null;
        description: string | null;
        icon: string | null;
        isDefault: number;
    }>;
    getCategoryBySlug(slug: string): Promise<{
        name: string;
        id: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        _count: {
            posts: number;
        };
        slug: string;
        parentId: number | null;
        description: string | null;
        icon: string | null;
    }>;
    createCategory(data: {
        name: string;
        slug?: string;
        description?: string;
        icon?: string;
        isFeatured?: number;
        isDefault?: number;
        status?: ContentStatus;
        parentId?: number;
        authorId?: string;
        order?: number;
    }): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        isFeatured: number;
        order: number;
        parentId: number | null;
        description: string | null;
        icon: string | null;
        isDefault: number;
    }>;
    updateCategory(id: number, data: {
        name?: string;
        slug?: string;
        description?: string | null;
        icon?: string | null;
        isFeatured?: number;
        isDefault?: number;
        status?: ContentStatus;
        parentId?: number | null;
        order?: number;
    }): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        _count: {
            posts: number;
        };
        slug: string;
        isFeatured: number;
        translations: {
            name: string;
            id: number;
            langCode: string;
            description: string | null;
        }[];
        seoMeta: {
            id: number;
            seoTitle: string | null;
            seoDescription: string | null;
            seoImage: string | null;
            indexMode: string | null;
        } | null;
        authorId: string | null;
        order: number;
        parent: {
            name: string;
            id: number;
            slug: string;
        } | null;
        children: {
            name: string;
            id: number;
            slug: string;
            order: number;
        }[];
        parentId: number | null;
        description: string | null;
        icon: string | null;
        isDefault: number;
    } | null>;
    deleteCategory(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        isFeatured: number;
        order: number;
        parentId: number | null;
        description: string | null;
        icon: string | null;
        isDefault: number;
    }>;
    restoreCategory(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        isFeatured: number;
        order: number;
        parentId: number | null;
        description: string | null;
        icon: string | null;
        isDefault: number;
    }>;
    permanentlyDeleteCategory(id: number): Promise<{
        id: number;
    }>;
}
export {};
//# sourceMappingURL=CategoryService.d.ts.map