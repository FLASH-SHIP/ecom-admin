export declare const acquireLock: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityType: "page" | "post";
        entityId: number;
    };
    output: {
        acquired: boolean;
        lock: import("@ecom/features/content-lock/ContentLockService").ContentLock;
    };
    meta: object;
}>;
export declare const releaseLock: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityType: "page" | "post";
        entityId: number;
    };
    output: boolean;
    meta: object;
}>;
export declare const checkLock: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        entityType: "page" | "post";
        entityId: number;
    };
    output: import("@ecom/features/content-lock/ContentLockService").ContentLock | null;
    meta: object;
}>;
export declare const heartbeat: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        entityType: "page" | "post";
        entityId: number;
    };
    output: boolean;
    meta: object;
}>;
//# sourceMappingURL=contentLock.handler.d.ts.map