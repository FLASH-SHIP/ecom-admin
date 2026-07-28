import type { IStorageAdapter } from "./IStorageAdapter";
export declare function getStorageAdapter(): IStorageAdapter;
/**
 * Async factory — required for S3 adapter to avoid bundler static analysis.
 * Call once at app startup and cache the result.
 */
export declare function getStorageAdapterAsync(): Promise<IStorageAdapter>;
export declare function resetStorageAdapter(): void;
//# sourceMappingURL=StorageFactory.d.ts.map