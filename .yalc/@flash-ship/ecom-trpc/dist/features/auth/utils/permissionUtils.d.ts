export interface UserRolePermissionSource {
    roles?: Array<{
        role: {
            name: string;
            permissions?: Array<{
                permission: {
                    name: string;
                };
            }>;
        };
    }>;
}
/**
 * Resolve unique permissions for a user from their roles.
 * Super Admin (`admin` role) automatically receives all system permissions.
 */
export declare function resolveUserPermissions(user: UserRolePermissionSource | null | undefined): string[];
//# sourceMappingURL=permissionUtils.d.ts.map