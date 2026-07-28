import type { PrismaClient, UserStatus } from "@ecom/prisma";
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findMany(params: {
        search?: string;
        status?: UserStatus;
        page?: number;
        perPage?: number;
    }): Promise<{
        data: {
            id: string;
            name: string | null;
            createdAt: Date;
            status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
            email: string;
            username: string | null;
            phone: string | null;
            avatarUrl: string | null;
            locale: string | null;
            roles: {
                role: {
                    id: number;
                    name: string;
                    displayName: string | null;
                };
            }[];
        }[];
        meta: {
            total: number;
            page: number;
            perPage: number;
            totalPages: number;
        };
    }>;
    findById(id: string): Promise<{
        id: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
        email: string;
        username: string | null;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        locale: string | null;
        roles: {
            role: {
                id: number;
                name: string;
                displayName: string | null;
            };
        }[];
    } | null>;
    findByEmail(email: string): Promise<{
        id: string;
        email: string;
    } | null>;
    create(data: {
        email: string;
        name?: string;
        username?: string;
        phone?: string | null;
        locale?: string;
        status?: UserStatus;
    }): Promise<{
        id: string;
        name: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
        email: string;
        username: string | null;
        phone: string | null;
    }>;
    update(id: string, data: {
        name?: string;
        username?: string;
        phone?: string | null;
        avatarUrl?: string;
        locale?: string;
        status?: UserStatus;
    }): Promise<{
        id: string;
        name: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
        email: string;
        username: string | null;
        phone: string | null;
    }>;
    setPassword(userId: string, hash: string): Promise<void>;
    syncRoles(userId: string, roleIds: number[]): Promise<void>;
    toggleSuperAdmin(userId: string, isSuperAdmin: boolean): Promise<void>;
    delete(id: string): Promise<{
        id: string;
        name: string | null;
        createdAt: Date;
        updatedAt: Date;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
        email: string;
        username: string | null;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        locale: string | null;
        tokenVersion: number;
    }>;
    getAllIdsAndEmails(): Promise<{
        id: string;
        email: string;
    }[]>;
}
//# sourceMappingURL=UserRepository.d.ts.map