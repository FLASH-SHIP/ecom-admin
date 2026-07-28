/**
 * Update preferences (theme, locale) for any user.
 * - isSelf: always allowed
 * - Other user: requires USERS_UPDATE permission (admin, like Botble)
 */
export declare const updatePreferences: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        userId?: string | undefined;
        theme?: "light" | "dark" | undefined;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
//# sourceMappingURL=updatePreferences.handler.d.ts.map