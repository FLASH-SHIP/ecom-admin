export declare const listComments: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        postId?: number | undefined;
        pageId?: number | undefined;
        status?: "approved" | "pending" | "spam" | "trash" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        items: {
            status: string;
            id: number;
            createdAt: Date;
            _count: {
                replies: number;
            };
            customerId: string | null;
            ipAddress: string | null;
            parentId: number | null;
            content: string;
            postId: number | null;
            pageId: number | null;
            authorName: string | null;
            authorEmail: string | null;
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
        status: string;
        id: number;
        createdAt: Date;
        customerId: string | null;
        ipAddress: string | null;
        parentId: number | null;
        content: string;
        postId: number | null;
        pageId: number | null;
        authorName: string | null;
        authorEmail: string | null;
        replies: {
            status: string;
            id: number;
            createdAt: Date;
            content: string;
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
        status: string;
        id: number;
    };
    meta: object;
}>;
export declare const markSpam: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: string;
        id: number;
    };
    meta: object;
}>;
export declare const trash: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: string;
        id: number;
    };
    meta: object;
}>;
export declare const deleteComment: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        status: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        customerId: string | null;
        ipAddress: string | null;
        parentId: number | null;
        content: string;
        postId: number | null;
        pageId: number | null;
        authorName: string | null;
        authorEmail: string | null;
    };
    meta: object;
}>;
//# sourceMappingURL=comments.handler.d.ts.map