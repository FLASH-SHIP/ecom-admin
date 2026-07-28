import type { PrismaClient } from "@ecom/prisma";
export declare class RoleRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            permissions: number;
            users: number;
        };
        description: string | null;
        displayName: string | null;
    }[]>;
    findById(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        _count: {
            users: number;
        };
        description: string | null;
        displayName: string | null;
        permissions: {
            permission: {
                id: number;
                name: string;
                displayName: string | null;
                group: string | null;
            };
        }[];
    } | null>;
    findByName(name: string): Promise<{
        id: number;
        name: string;
    } | null>;
    create(data: {
        name: string;
        displayName?: string;
        description?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string | null;
        displayName: string | null;
    }>;
    update(id: number, data: {
        displayName?: string;
        description?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string | null;
        displayName: string | null;
    }>;
    delete(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        displayName: string | null;
    }>;
    syncPermissions(roleId: number, permissionIds: number[]): Promise<void>;
}
//# sourceMappingURL=RoleRepository.d.ts.map