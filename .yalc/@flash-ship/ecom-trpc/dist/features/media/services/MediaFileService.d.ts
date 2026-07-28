import type { MediaFileRepository } from "../repositories/MediaFileRepository";
import type { IStorageAdapter } from "../storage/IStorageAdapter";
interface IMediaFileServiceDeps {
    fileRepo: MediaFileRepository;
    storage: IStorageAdapter;
}
export declare class MediaFileService {
    private deps;
    constructor(deps: IMediaFileServiceDeps);
    listFiles(options?: {
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
    getFile(id: number): Promise<{
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
    }>;
    uploadFile(data: {
        file: Buffer;
        originalName: string;
        mimeType: string;
        size: number;
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
    updateFile(id: number, data: {
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
    deleteFile(id: number): Promise<{
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
    moveFiles(ids: number[], folderId: number | null): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    deleteFiles(ids: number[]): Promise<import("@ecom/prisma").Prisma.BatchPayload>;
    getStats(): Promise<{
        totalFiles: number;
        totalSize: number;
    }>;
    /**
     * Delete a file by its storage URL.
     * Deletes both the storage object and the DB record.
     * Returns true if found and deleted, false if the URL is not tracked in the DB
     * (e.g. an external URL — in that case only the storage object is attempted).
     */
    deleteByUrl(url: string): Promise<boolean>;
}
export {};
//# sourceMappingURL=MediaFileService.d.ts.map