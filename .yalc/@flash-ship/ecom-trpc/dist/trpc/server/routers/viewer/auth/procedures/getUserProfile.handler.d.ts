/**
 * Fetch any user's profile data.
 * - isSelf: always allowed
 * - others: requires USERS_READ permission
 */
export declare const getUserProfile: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        userId: string;
    };
    output: {
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
    };
    meta: object;
}>;
//# sourceMappingURL=getUserProfile.handler.d.ts.map