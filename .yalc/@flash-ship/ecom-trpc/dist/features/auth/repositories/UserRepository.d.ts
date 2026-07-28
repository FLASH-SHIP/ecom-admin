import type { PrismaClient } from "@ecom/prisma";
export declare class UserRepository {
    private prisma;
    constructor(prisma: PrismaClient);
    findByEmail(email: string): Promise<{
        email: string;
        tokenVersion: number;
        password: {
            hash: string;
        } | null;
        name: string | null;
        username: string | null;
        id: string;
        emailVerified: Date | null;
        locale: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
    } | null>;
    /** Lightweight lookup by username — only id returned, used for uniqueness checks. */
    findByUsername(username: string): Promise<{
        id: string;
    } | null>;
    findById(id: string): Promise<{
        email: string;
        name: string | null;
        username: string | null;
        id: string;
        createdAt: Date;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        locale: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
    } | null>;
    findByIdWithRoles(id: string): Promise<{
        email: string;
        name: string | null;
        username: string | null;
        id: string;
        createdAt: Date;
        phone: string | null;
        avatarUrl: string | null;
        emailVerified: Date | null;
        locale: string | null;
        status: import("@ecom/prisma/src/generated/prisma/client").$Enums.UserStatus;
        roles: {
            role: {
                name: string;
                id: number;
                displayName: string | null;
                permissions: {
                    permission: {
                        name: string;
                    };
                }[];
            };
        }[];
    } | null>;
    /** Fetch password hash for self-password-change verification */
    findByIdWithPassword(id: string): Promise<{
        password: {
            hash: string;
        } | null;
        id: string;
    } | null>;
    updateProfile(id: string, data: {
        name?: string;
        username?: string;
        phone?: string | null;
        avatarUrl?: string | null;
        locale?: string;
    }): Promise<{
        email: string;
        name: string | null;
        username: string | null;
        id: string;
        phone: string | null;
        avatarUrl: string | null;
        locale: string | null;
    }>;
    updatePassword(id: string, hash: string): Promise<{
        userId: string;
        hash: string;
    }>;
    /** Get a single user_meta value by key (returns null if not found) */
    getMeta(userId: string, key: string): Promise<string | null>;
    /** Upsert a user_meta key-value pair */
    setMeta(userId: string, key: string, value: string): Promise<void>;
}
//# sourceMappingURL=UserRepository.d.ts.map