import type { ContentStatus } from "@ecom/prisma";
import type { PackingRepository } from "../repositories/PackingRepository";
export interface IPackingServiceDeps {
    packingRepo: PackingRepository;
}
export declare class PackingService {
    private deps;
    constructor(deps: IPackingServiceDeps);
    getPackingType(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        image: string | null;
    }>;
    listPackingTypes(params: {
        search?: string;
        status?: ContentStatus;
        page?: number;
        limit?: number;
        orderBy?: "asc" | "desc";
    }): Promise<{
        items: {
            id: number;
            name: string;
            createdAt: Date;
            updatedAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
            description: string | null;
            image: string | null;
        }[];
        total: number;
        page: number;
        limit: number;
        totalPages: number;
    }>;
    createPackingType(data: {
        name: string;
        image?: string | null;
        description?: string | null;
        status?: ContentStatus;
    }): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        image: string | null;
    }>;
    updatePackingType(id: number, data: {
        name?: string;
        image?: string | null;
        description?: string | null;
        status?: ContentStatus;
    }): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        image: string | null;
    }>;
    deletePackingType(id: number): Promise<{
        id: number;
    }>;
}
//# sourceMappingURL=PackingService.d.ts.map