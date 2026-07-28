import type { UserRepository } from "../repositories/UserRepository";
interface IAuthServiceDeps {
    userRepo: UserRepository;
}
export declare class AuthService {
    private deps;
    constructor(deps: IAuthServiceDeps);
    /**
     * Validate user credentials for login.
     * Returns user data without sensitive fields if valid, null otherwise.
     */
    validateCredentials(email: string, password: string): Promise<{
        email: string;
        tokenVersion: number;
        name: string | null;
        username: string | null;
        id: string;
        emailVerified: Date | null;
        locale: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
    } | null>;
    /**
     * Get user profile with roles and permissions.
     */
    getUserWithPermissions(userId: string): Promise<{
        id: string;
        email: string;
        name: string | null;
        phone: string | null;
        username: string | null;
        locale: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        createdAt: Date;
        roles: {
            id: number;
            name: string;
            displayName: string | null;
        }[];
        permissions: string[];
    }>;
    /**
     * Update user profile fields.
     * - Validates username uniqueness before update
     * - Cleans up old avatar from storage + DB when avatarUrl changes
     */
    updateProfile(userId: string, data: {
        name?: string;
        username?: string;
        phone?: string | null;
        avatarUrl?: string | null;
        locale?: string;
    }, cleanupAvatar?: (oldUrl: string) => Promise<unknown> | undefined): Promise<{
        email: string;
        name: string | null;
        username: string | null;
        id: string;
        phone: string | null;
        avatarUrl: string | null;
        locale: string | null;
    }>;
    /**
     * Change password with optional current-password verification.
     *
     * - When `skipCurrentPasswordCheck` is false (default, self-change):
     *   `currentPassword` must be provided and must match the stored hash.
     * - When `skipCurrentPasswordCheck` is true (admin override):
     *   the current password is not checked.
     */
    changePassword(userId: string, opts: {
        currentPassword?: string;
        newPassword: string;
        skipCurrentPasswordCheck?: boolean;
    }): Promise<{
        success: boolean;
    }>;
    /**
     * Get user's theme preference from user_meta.
     * Returns "light" as default if not set.
     */
    getTheme(userId: string): Promise<"light" | "dark">;
    /**
     * Set user's theme preference in user_meta.
     */
    setTheme(userId: string, theme: "light" | "dark"): Promise<void>;
}
export {};
//# sourceMappingURL=AuthService.d.ts.map