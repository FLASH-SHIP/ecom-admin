export declare const listSubmissions: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        formSlug?: string | undefined;
        status?: "new" | "read" | "replied" | "archived" | undefined;
        page?: number | undefined;
        perPage?: number | undefined;
    };
    output: {
        items: {
            name: string;
            id: number;
            createdAt: Date;
            status: string;
            email: string;
            phone: string | null;
            formSlug: string;
            subject: string | null;
            message: string;
            assigneeId: string | null;
            repliedAt: Date | null;
        }[];
        total: number;
        page: number;
        perPage: number;
    };
    meta: object;
}>;
export declare const getSubmission: import("@trpc/server").TRPCQueryProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        email: string;
        phone: string | null;
        ipAddress: string | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue;
        formSlug: string;
        subject: string | null;
        message: string;
        assigneeId: string | null;
        repliedAt: Date | null;
        assignee: {
            name: string | null;
            id: string;
        } | null;
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
export declare const updateStatus: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        status: "new" | "read" | "replied" | "archived";
    };
    output: {
        id: number;
        status: string;
    };
    meta: object;
}>;
export declare const assignTo: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
        assigneeId: string;
    };
    output: {
        id: number;
        assigneeId: string | null;
    };
    meta: object;
}>;
export declare const markReplied: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        id: number;
        status: string;
        repliedAt: Date | null;
    };
    meta: object;
}>;
export declare const deleteSubmission: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        id: number;
    };
    output: {
        name: string;
        id: number;
        createdAt: Date;
        updatedAt: Date;
        status: string;
        email: string;
        phone: string | null;
        ipAddress: string | null;
        metadata: import("@ecom/prisma/src/generated/prisma/runtime/client").JsonValue | null;
        formSlug: string;
        subject: string | null;
        message: string;
        assigneeId: string | null;
        repliedAt: Date | null;
    };
    meta: object;
}>;
//# sourceMappingURL=contacts.handler.d.ts.map