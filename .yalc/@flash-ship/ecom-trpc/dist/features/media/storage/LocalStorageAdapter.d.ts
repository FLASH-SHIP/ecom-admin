import type { IStorageAdapter } from "./IStorageAdapter";
/**
 * Local disk storage adapter.
 * Stores files in `uploads/` directory at the project root.
 * Serves files via `/uploads/<year>/<month>/<filename>`.
 */
export declare class LocalStorageAdapter implements IStorageAdapter {
    private basePath;
    private baseUrl;
    constructor(basePath?: string, baseUrl?: string);
    upload(file: Buffer, fileName: string, _mimeType: string): Promise<string>;
    delete(fileUrl: string): Promise<void>;
    exists(fileUrl: string): Promise<boolean>;
    getDiskName(): string;
}
//# sourceMappingURL=LocalStorageAdapter.d.ts.map