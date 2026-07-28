export declare const bulkDeletePosts: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
    meta: object;
}>;
export declare const bulkStatusPosts: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
        status: "DRAFT" | "PUBLISHED" | "ARCHIVED";
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
    meta: object;
}>;
export declare const bulkCategoryAssign: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        postIds: number[];
        categoryIds: number[];
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
    meta: object;
}>;
export declare const bulkDeleteCategories: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
    meta: object;
}>;
export declare const bulkDeleteTags: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
    meta: object;
}>;
export declare const bulkDeletePages: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: number[];
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<number>;
    meta: object;
}>;
export declare const bulkStatusCustomers: import("@trpc/server").TRPCMutationProcedure<{
    input: {
        ids: string[];
        status: "ACTIVE" | "BANNED" | "INACTIVE";
    };
    output: import("@ecom/features/tools/services/BulkActionService").BulkResult<string>;
    meta: object;
}>;
//# sourceMappingURL=bulk.handler.d.ts.map