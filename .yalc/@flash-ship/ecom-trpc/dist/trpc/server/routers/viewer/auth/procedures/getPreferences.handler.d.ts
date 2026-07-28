/**
 * Get preferences (theme, locale) for any user.
 * - isSelf: always allowed
 * - Other user: requires USERS_READ permission (admin)
 */
export declare const getPreferences: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        userId?: string | undefined;
    };
    output: {
        theme: "light" | "dark";
    };
    meta: object;
}>;
//# sourceMappingURL=getPreferences.handler.d.ts.map