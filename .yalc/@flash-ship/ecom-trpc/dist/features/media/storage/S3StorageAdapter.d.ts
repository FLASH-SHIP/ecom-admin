import type { IStorageAdapter } from "./IStorageAdapter";
export declare class S3StorageAdapter implements IStorageAdapter {
    private bucket;
    private region;
    private endpoint?;
    private cdnUrl?;
    private client;
    constructor(options?: {
        bucket?: string;
        region?: string;
        endpoint?: string;
        accessKeyId?: string;
        secretAccessKey?: string;
        cdnUrl?: string;
    });
    private initClient;
    upload(file: Buffer, fileName: string, mimeType: string): Promise<string>;
    delete(fileUrl: string): Promise<void>;
    exists(fileUrl: string): Promise<boolean>;
    getDiskName(): string;
    private extractKey;
}
//# sourceMappingURL=S3StorageAdapter.d.ts.map