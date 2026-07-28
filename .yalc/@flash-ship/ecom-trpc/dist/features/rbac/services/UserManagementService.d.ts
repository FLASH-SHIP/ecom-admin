import type { UserRepository } from "@ecom/features/rbac/repositories/UserRepository";
import type { UserStatus } from "@ecom/prisma";
export interface IUserManagementServiceDeps {
    userRepo: UserRepository;
}
export declare class UserManagementService {
    private deps;
    constructor(deps: IUserManagementServiceDeps);
    listUsers(params: {
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
    getUser(id: string): Promise<{
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
    }>;
    createUser(data: {
        email: string;
        name?: string;
        username?: string;
        phone?: string | null;
        password: string;
        locale?: string;
        roleIds?: number[];
    }): Promise<{
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
    updateUser(id: string, data: {
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
    changePassword(userId: string, newPassword: string): Promise<void>;
    syncRoles(userId: string, roleIds: number[]): Promise<{
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
    deleteUser(userId: string, currentUserId: string): Promise<{
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
    toggleSuperAdmin(userId: string, isSuperAdmin: boolean): Promise<{
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
}
//# sourceMappingURL=UserManagementService.d.ts.map