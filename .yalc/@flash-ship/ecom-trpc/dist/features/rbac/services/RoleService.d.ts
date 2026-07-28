import type { PermissionRepository } from "@ecom/features/rbac/repositories/PermissionRepository";
import type { RoleRepository } from "@ecom/features/rbac/repositories/RoleRepository";
export interface IRoleServiceDeps {
    roleRepo: RoleRepository;
    permissionRepo: PermissionRepository;
}
export declare class RoleService {
    private deps;
    constructor(deps: IRoleServiceDeps);
    listRoles(): Promise<{
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
    getRole(id: number): Promise<{
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
    }>;
    createRole(data: {
        name: string;
        displayName?: string;
        description?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string | null;
        displayName: string | null;
    }>;
    updateRole(id: number, data: {
        displayName?: string;
        description?: string;
    }): Promise<{
        id: number;
        name: string;
        description: string | null;
        displayName: string | null;
    }>;
    deleteRole(id: number): Promise<{
        id: number;
        name: string;
        createdAt: Date;
        updatedAt: Date;
        description: string | null;
        displayName: string | null;
    }>;
    syncPermissions(roleId: number, permissionIds: number[]): Promise<{
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
    listPermissions(): Promise<{
        [k: string]: {
            id: number;
            name: string;
            displayName: string | null;
            group: string | null;
        }[];
    }>;
}
//# sourceMappingURL=RoleService.d.ts.map