import type { PrismaClient } from "@ecom/prisma";
export declare class MediaFileRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(options?: {
        folderId?: number | null;
        mimeType?: string;
        search?: string;
        page?: number;
        perPage?: number;
        sortBy?: "createdAt" | "name" | "size";
        sortOrder?: "asc" | "desc";
    }): Promise<{
        data: {
            id: number;
            name: string;
            createdAt: Date;
            url: string;
            disk: string;
            width: number | null;
            height: number | null;
            fileName: string;
            mimeType: string;
            size: number;
            alt: string | null;
            folderId: number | null;
            uploadedBy: string | null;
        }[];
        meta: {
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
    }>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        url: string;
        disk: string;
        width: number | null;
        height: number | null;
        fileName: string;
        mimeType: string;
        size: number;
        alt: string | null;
        folderId: number | null;
        uploadedBy: string | null;
        folder: {
            id: number;
            name: string;
            slug: string;
        } | null;
    } | null>;
    /** Find a file record by its storage URL. Returns only id + url for lightweight lookup. */
    findByUrl(url: string): Promise<{
        id: number;
        url: string;
    } | null>;
    create(data: {
        name: string;
        fileName: string;
        mimeType: string;
        size: number;
        url: string;
        disk?: string;
        width?: number;
        height?: number;
        alt?: string;
        description?: string;
        folderId?: number | null;
        uploadedBy?: string;
    }): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        url: string;
        width: number | null;
        height: number | null;
        fileName: string;
        mimeType: string;
        size: number;
        alt: string | null;
        folderId: number | null;
    }>;
    update(id: number, data: {
        name?: string;
        alt?: string;
        description?: string;
        folderId?: number | null;
    }): Promise<{
        id: number;
        name: string;
        updatedAt: Date;
        description: string | null;
        url: string;
        width: number | null;
        height: number | null;
        fileName: string;
        mimeType: string;
        size: number;
        alt: string | null;
        folderId: number | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        deletedAt: Date | null;
        description: string | null;
        url: string;
        disk: string;
        width: number | null;
        height: number | null;
        fileName: string;
        isFavorite: boolean;
        mimeType: string;
        size: number;
        alt: string | null;
        folderId: number | null;
        uploadedBy: string | null;
        visibility: string;
        accessMode: string | null;
    }>;
    moveToFolder(ids: number[], folderId: number | null): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    deleteMany(ids: number[]): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    countByFolder(folderId: number | null): Promise<number>;
    getTotalStats(): Promise<{
        totalFiles: number;
        totalSize: number;
    }>;
}
//# sourceMappingURL=MediaFileRepository.d.ts.map