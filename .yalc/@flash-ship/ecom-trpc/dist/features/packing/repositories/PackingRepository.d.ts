import type { ContentStatus, PrismaClient } from "@ecom/prisma";
export declare class PackingRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findById(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        image: string | null;
    } | null>;
    findByName(name: string): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.ContentStatus;
        description: string | null;
        image: string | null;
    } | null>;
    list(params: {
        search?: string;
        status?: ContentStatus;
        skip?: number;
        take?: number;
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
    }>;
    create(data: {
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
    update(id: number, data: {
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
    softDelete(id: number): Promise<{
        id: number;
    }>;
}
//# sourceMappingURL=PackingRepository.d.ts.map