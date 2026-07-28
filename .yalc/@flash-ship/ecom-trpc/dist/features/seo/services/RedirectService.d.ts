import type { RedirectRepository } from "../repositories/RedirectRepository";
interface IRedirectServiceDeps {
    redirectRepo: RedirectRepository;
}
export declare class RedirectService {
    private deps;
    constructor(deps: IRedirectServiceDeps);
    list(options?: {
        search?: string;
        isActive?: boolean;
        page?: number;
        perPage?: number;
    }): Promise<{
        items: {
            id: number;
            isActive: boolean;
            createdAt: Date;
            statusCode: number;
            note: string | null;
            fromPath: string;
            toPath: string;
            hitCount: number;
        }[];
        total: number;
        page: number;
        perPage: number;
    }>;
    resolve(fromPath: string): Promise<{
        toPath: string;
        statusCode: number;
    } | null>;
    create(data: {
        fromPath: string;
        toPath: string;
        statusCode?: number;
        note?: string;
    }): Promise<{
        id: number;
        isActive: boolean;
        statusCode: number;
        fromPath: string;
        toPath: string;
    }>;
    update(id: number, data: {
        fromPath?: string;
        toPath?: string;
        statusCode?: number;
        isActive?: boolean;
        note?: string;
    }): Promise<{
        id: number;
        isActive: boolean;
        statusCode: number;
        fromPath: string;
        toPath: string;
    }>;
    delete(id: number): Promise<{
        id: number;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        statusCode: number;
        note: string | null;
        fromPath: string;
        toPath: string;
        hitCount: number;
    }>;
}
export {};
//# sourceMappingURL=RedirectService.d.ts.map