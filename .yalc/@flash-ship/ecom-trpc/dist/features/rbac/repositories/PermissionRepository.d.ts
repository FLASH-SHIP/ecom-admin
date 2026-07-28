import type { PrismaClient } from "@ecom/prisma";
export declare class PermissionRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findAll(): Promise<{
        id: number;
        name: string;
        displayName: string | null;
        group: string | null;
    }[]>;
    findByIds(ids: number[]): Promise<{
        id: number;
        name: string;
    }[]>;
    findByGroup(group: string): Promise<{
        id: number;
        name: string;
        displayName: string | null;
        group: string | null;
    }[]>;
    upsert(data: {
        name: string;
        displayName?: string;
        group?: string;
    }): Promise<{
        id: number;
        name: string;
        displayName: string | null;
        group: string | null;
    }>;
}
//# sourceMappingURL=PermissionRepository.d.ts.map