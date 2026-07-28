/**
 * Self-serve password change with conditional current-password verification.
 *
 * Logic:
 * - isSelf  → currentPassword is required and verified against stored hash
 * - isAdmin (has USERS_UPDATE) viewing another user → skip currentPassword
 * - Neither → 403 Forbidden
 */
export declare const changePasswordSelf: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        userId: string;
        newPassword: string;
        confirmPassword: string;
        currentPassword?: string | undefined;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
//# sourceMappingURL=changePasswordSelf.handler.d.ts.map