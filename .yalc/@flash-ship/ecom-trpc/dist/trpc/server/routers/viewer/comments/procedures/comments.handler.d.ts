export declare const listComments: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        postId?: number | undefined;
        pageId?: number | undefined;
        status?: "pending" | "approved" | "spam" | "trash" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        items: {
            id: number;
            createdAt: Date;
            _count: {
                replies: number;
            };
            parentId: number | null;
            content: string;
            status: string;
            ipAddress: string | null;
            customerId: string | null;
            postId: number | null;
            authorName: string | null;
            authorEmail: string | null;
            pageId: number | null;
        }[];
        total: number;
        page: number;
        perPage: number;
    };
    meta: object;
}>;
export declare const getComment: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        createdAt: Date;
        parentId: number | null;
        content: string;
        status: string;
        ipAddress: string | null;
        customerId: string | null;
        postId: number | null;
        authorName: string | null;
        authorEmail: string | null;
        pageId: number | null;
        replies: {
            id: number;
            createdAt: Date;
            content: string;
            status: string;
            authorName: string | null;
        }[];
    };
    meta: object;
}>;
export declare const statusCounts: import("@trpc/server").TRPCQueryProcedure<{
    input: void;
    output: {
        [k: string]: number;
    };
    meta: object;
}>;
export declare const approve: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        status: string;
    };
    meta: object;
}>;
export declare const markSpam: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        status: string;
    };
    meta: object;
}>;
export declare const trash: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        status: string;
    };
    meta: object;
}>;
export declare const deleteComment: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        createdAt: Date;
        updatedAt: Date;
        parentId: number | null;
        content: string;
        status: string;
        ipAddress: string | null;
        customerId: string | null;
        postId: number | null;
        authorName: string | null;
        authorEmail: string | null;
        pageId: number | null;
    };
    meta: object;
}>;
//# sourceMappingURL=comments.handler.d.ts.map