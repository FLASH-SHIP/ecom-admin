export declare const listRevisions: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        referenceId: number;
        referenceType: "post" | "page";
    };
    output: {
        id: number;
        createdAt: Date;
        title: string;
        note: string | null;
        author: {
            name: string | null;
            id: string;
        };
    }[];
    meta: object;
}>;
export declare const getRevision: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        createdAt: Date;
        title: string;
        content: string | null;
        referenceId: number;
        referenceType: string;
        note: string | null;
        author: {
            name: string | null;
            id: string;
        };
    };
    meta: object;
}>;
//# sourceMappingURL=revisions.handler.d.ts.map