import { PermissionRepository } from "@ecom/features/rbac/repositories/PermissionRepository";
import { RoleRepository } from "@ecom/features/rbac/repositories/RoleRepository";
import { UserRepository } from "@ecom/features/rbac/repositories/UserRepository";
import { RoleService } from "@ecom/features/rbac/services/RoleService";
import { UserManagementService } from "@ecom/features/rbac/services/UserManagementService";
export declare function getRoleRepository(): RoleRepository;
export declare function getPermissionRepository(): PermissionRepository;
export declare function getUserRepository(): UserRepository;
export declare function getRoleService(): RoleService;
export declare function getUserManagementService(): UserManagementService;
export declare function resetRbacContainers(): void;
//# sourceMappingURL=RbacService.d.ts.map