import type { ContentStatus } from "@ecom/prisma";
import type { TagRepository } from "../repositories/TagRepository";
import type { SlugService } from "./SlugService";
interface ITagServiceDeps {
    tagRepo: TagRepository;
    slugService: SlugService;
}
export declare class TagService {
    private deps;
    constructor(deps: ITagServiceDeps);
    listTags(options?: {
        search?: string;
        where?: Record<string, unknown>;
        page?: number;
        perPage?: number;
        sortBy?: "id" | "name" | "createdAt" | "status";
        sortDir?: "asc" | "desc";
    }): Promise<{
        rows: {
            name: string;
            id: number;
            createdAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            _count: {
                posts: number;
            };
            slug: string;
        }[];
        total: number;
        page: number;
        perPage: number;
        totalPages: number;
    }>;
    getTag(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        _count: {
            posts: number;
        };
        slug: string;
        translations: {
            name: string;
            id: number;
            langCode: string;
            description: string | null;
        }[];
        authorId: string | null;
        description: string | null;
        authorType: string;
    }>;
    getTagBySlug(slug: string): Promise<{
        name: string;
        id: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        _count: {
            posts: number;
        };
        slug: string;
        description: string | null;
    }>;
    createTag(data: {
        name: string;
        slug?: string;
        description?: string;
        status?: ContentStatus;
        authorId?: string;
        authorType?: string;
    }): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        description: string | null;
    }>;
    updateTag(id: number, data: {
        name?: string;
        slug?: string;
        description?: string;
        status?: ContentStatus;
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
        translations: {
            name: string;
            id: number;
            langCode: string;
            description: string | null;
        }[];
        authorId: string | null;
        description: string | null;
        authorType: string;
    } | null>;
    /**
     * Resolve tag names to tag IDs — creates new tags if they don't exist.
     * Matches old CMS TagResolver pattern.
     */
    resolveTagsByNames(names: string[]): Promise<{
        name: string;
        id: number;
        slug: string;
    }[]>;
    deleteTag(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        description: string | null;
    }>;
    restoreTag(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        description: string | null;
    }>;
    permanentlyDeleteTag(id: number): Promise<{
        id: number;
    }>;
}
export {};
//# sourceMappingURL=TagService.d.ts.map