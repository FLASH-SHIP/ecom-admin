import type { SettingRepository } from "@ecom/features/setting/repositories/SettingRepository";
export interface ISettingServiceDeps {
    settingRepo: SettingRepository;
}
export declare class SettingService {
    private deps;
    constructor(deps: ISettingServiceDeps);
    /** Get a single setting value by key */
    get(key: string): Promise<string | null>;
    /** Get multiple settings as a key-value map */
    getMany(keys: string[]): Promise<Record<string, string | null>>;
    /** Get all settings as a key-value map (cached for 120s) */
    getAll(): Promise<Record<string, string | null>>;
    /** Set a single setting */
    set(key: string, value: string | null): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }>;
    /** Set multiple settings at once */
    bulkSet(items: Array<{
        key: string;
        value: string | null;
    }>): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }[]>;
    /** Delete a setting */
    delete(key: string): Promise<{
        id: number;
        createdAt: Date;
        updatedAt: Date;
        key: string;
        value: string | null;
    }>;
    getBoolean(key: string, defaultValue?: boolean): Promise<boolean>;
    getNumber(key: string, defaultValue?: number): Promise<number>;
    getJson<T = unknown>(key: string, defaultValue?: T | null): Promise<T | null>;
}
//# sourceMappingURL=SettingService.d.ts.map