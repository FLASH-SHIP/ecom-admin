export declare const listRevisions: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        referenceId: number;
        referenceType: "page" | "post";
    };
    output: {
        id: number;
        createdAt: Date;
        title: string;
        author: {
            id: string;
            name: string | null;
        };
        note: string | null;
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
        referenceId: number;
        referenceType: string;
        title: string;
        content: string | null;
        author: {
            id: string;
            name: string | null;
        };
        note: string | null;
    };
    meta: object;
}>;
//# sourceMappingURL=revisions.handler.d.ts.map