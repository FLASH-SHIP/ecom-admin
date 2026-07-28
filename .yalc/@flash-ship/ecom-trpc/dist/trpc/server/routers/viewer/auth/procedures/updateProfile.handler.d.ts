export declare const updateProfile: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        userId?: string | undefined;
        name?: string | undefined;
        username?: string | undefined;
        phone?: string | null | undefined;
        avatarUrl?: string | null | undefined;
        locale?: "vi" | "en" | undefined;
    };
    output: {
        name: string | null;
        id: string;
        email: string;
        username: string | null;
        phone: string | null;
        avatarUrl: string | null;
        locale: string | null;
    };
    meta: object;
}>;
//# sourceMappingURL=updateProfile.handler.d.ts.map