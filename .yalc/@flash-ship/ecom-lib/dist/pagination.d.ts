/**
 * Standardized pagination result DTO.
 * Inspired by Laravel's LengthAwarePaginator.
 *
 * Provides consistent pagination metadata across all list endpoints.
 */
export interface PaginatedResult<T> {
    data: T[];
    meta: PaginationMeta;
}
export interface PaginationMeta {
    total: number;
    page: number;
    perPage: number;
    lastPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
}
/**
 * Creates a standardized paginated result from raw data.
 */
export declare function paginate<T>(data: T[], total: number, page: number, perPage: number): PaginatedResult<T>;
/**
 * Default pagination options.
 */
export interface PaginationInput {
    page?: number;
    perPage?: number;
}
export declare const DEFAULT_PAGE = 1;
export declare const DEFAULT_PER_PAGE = 20;
export declare const MAX_PER_PAGE = 100;
/**
 * Normalizes pagination input with sensible defaults.
 */
export declare function normalizePagination(input?: PaginationInput): {
    page: number;
    perPage: number;
    skip: number;
};
//# sourceMappingURL=pagination.d.ts.map