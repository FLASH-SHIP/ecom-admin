import type { PrismaClient } from "@ecom/prisma";
export declare class MediaFolderRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(options?: {
        parentId?: number | null;
        search?: string;
    }): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            children: number;
            files: number;
        };
        slug: string;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        slug: string;
    } | null>;
    findByIdWithChildren(id: number): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        children: {
            id: number;
            name: string;
            slug: string;
        }[];
        _count: {
            children: number;
            files: number;
        };
        slug: string;
    } | null>;
    findTree(): Promise<{
        id: number;
        name: string;
        children: {
            id: number;
            name: string;
            children: {
                id: number;
                name: string;
                slug: string;
            }[];
            slug: string;
        }[];
        _count: {
            files: number;
        };
        slug: string;
    }[]>;
    create(data: {
        name: string;
        slug: string;
        parentId?: number | null;
    }): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        slug: string;
    }>;
    update(id: number, data: {
        name?: string;
        slug?: string;
        parentId?: number | null;
    }): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        updatedAt: Date;
        slug: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        slug: string;
        color: string | null;
        isFavorite: boolean;
    }>;
    hasChildren(id: number): Promise<boolean>;
    hasFiles(id: number): Promise<boolean>;
}
//# sourceMappingURL=MediaFolderRepository.d.ts.map