export declare class RedirectRepository {
    findByFromPath(fromPath: string): Promise<{
        id: number;
        isActive: boolean;
        statusCode: number;
        fromPath: string;
        toPath: string;
        hitCount: number;
    } | null>;
    findMany(options?: {
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
    create(data: {
        fromPath: string;
        toPath: string;
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
    incrementHitCount(id: number): Promise<{
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
//# sourceMappingURL=RedirectRepository.d.ts.map