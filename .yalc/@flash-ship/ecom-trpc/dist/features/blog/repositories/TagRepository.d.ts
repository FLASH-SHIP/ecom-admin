import type { ContentStatus, PrismaClient } from "@ecom/prisma";
export declare class TagRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        authorId: string | null;
        description: string | null;
        authorType: string;
    } | null>;
    findByIdWithRelations(id: number): Promise<{
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
    findBySlug(slug: string): Promise<{
        name: string;
        id: number;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        _count: {
            posts: number;
        };
        slug: string;
        description: string | null;
    } | null>;
    findMany(options?: {
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
    findOrCreateByNames(names: string[]): Promise<{
        name: string;
        id: number;
        slug: string;
    }[]>;
    create(data: {
        name: string;
        slug: string;
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
    update(id: number, data: {
        name?: string;
        slug?: string;
        description?: string;
        status?: ContentStatus;
    }): Promise<{
        name: string;
        id: number;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        description: string | null;
    }>;
    softDelete(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        description: string | null;
    }>;
    restore(id: number): Promise<{
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        slug: string;
        description: string | null;
    }>;
    hardDelete(id: number): Promise<{
        id: number;
    }>;
}
//# sourceMappingURL=TagRepository.d.ts.map