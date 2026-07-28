import type { MediaFolderRepository } from "../repositories/MediaFolderRepository";
interface IMediaFolderServiceDeps {
    folderRepo: MediaFolderRepository;
}
export declare class MediaFolderService {
    private deps;
    constructor(deps: IMediaFolderServiceDeps);
    listFolders(options?: {
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
    getFolder(id: number): Promise<{
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
    }>;
    getFolderTree(): Promise<{
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
    createFolder(data: {
        name: string;
        slug?: string;
        parentId?: number | null;
    }): Promise<{
        id: number;
        name: string;
        parentId: number | null;
        createdAt: Date;
        slug: string;
    }>;
    updateFolder(id: number, data: {
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
    deleteFolder(id: number, force?: boolean): Promise<{
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
}
export {};
//# sourceMappingURL=MediaFolderService.d.ts.map