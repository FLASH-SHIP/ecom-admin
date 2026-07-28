import type { ApiBulkResponse } from "./api-response";
export interface ExecuteBatchOptions {
    maxLimit?: number;
}
/**
 * Standard batch processor utility for bulk API endpoints.
 * Validates each item schema via class-validator and executes processor callback in isolation.
 */
export declare function executeBatchProcess<TInput extends object, TOutput extends Record<string, any>>(items: TInput[], dtoClass: new () => object, processor: (item: TInput, index: number) => Promise<TOutput>, options?: ExecuteBatchOptions): Promise<ApiBulkResponse<TOutput>>;
//# sourceMappingURL=batch.d.ts.map