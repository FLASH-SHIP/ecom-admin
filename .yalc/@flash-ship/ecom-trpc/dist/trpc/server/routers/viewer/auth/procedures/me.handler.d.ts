export declare const me: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
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
//# sourceMappingURL=me.handler.d.ts.map