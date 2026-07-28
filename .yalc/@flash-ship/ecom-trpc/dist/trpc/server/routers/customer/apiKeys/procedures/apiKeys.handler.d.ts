export declare const list: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        id: string;
        createdAt: Date;
        expiresAt: Date | null;
        lastUsedAt: Date | null;
        label: string | null;
        ownerId: string;
        ownerType: string;
        maskedKey: string;
        allowedIps: string[];
    }[];
    meta: object;
}>;
export declare const create: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        label?: string | null | undefined;
        expiresAt?: Date | null | undefined;
        allowedIps?: string[] | null | undefined;
    };
    output: {
        rawKey: string;
        maskedKey: string;
    };
    meta: object;
}>;
export declare const revoke: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: string;
    };
    output: {
        success: boolean;
    };
    meta: object;
}>;
//# sourceMappingURL=apiKeys.handler.d.ts.map