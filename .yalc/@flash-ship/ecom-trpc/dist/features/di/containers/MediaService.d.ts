import { MediaFileRepository } from "@ecom/features/media/repositories/MediaFileRepository";
import { MediaFolderRepository } from "@ecom/features/media/repositories/MediaFolderRepository";
import { MediaFileService } from "@ecom/features/media/services/MediaFileService";
import { MediaFolderService } from "@ecom/features/media/services/MediaFolderService";
import type { IStorageAdapter } from "@ecom/features/media/storage/IStorageAdapter";
export declare function getMediaFileRepository(): MediaFileRepository;
export declare function getMediaFolderRepository(): MediaFolderRepository;
export declare function getStorageAdapter(): IStorageAdapter;
export declare function getMediaFileService(): MediaFileService;
export declare function getMediaFolderService(): MediaFolderService;
export declare function resetMediaContainers(): void;
//# sourceMappingURL=MediaService.d.ts.map