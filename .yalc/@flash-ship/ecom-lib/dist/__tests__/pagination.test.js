"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var pagination_1 = require("../pagination");
(0, vitest_1.describe)("pagination", function () {
    (0, vitest_1.describe)("paginate()", function () {
        (0, vitest_1.it)("should return correct meta for first page", function () {
            var result = (0, pagination_1.paginate)(["a", "b", "c"], 10, 1, 3);
            (0, vitest_1.expect)(result.data).toEqual(["a", "b", "c"]);
            (0, vitest_1.expect)(result.meta).toEqual({
                total: 10,
                page: 1,
                perPage: 3,
                lastPage: 4,
                hasNextPage: true,
                hasPrevPage: false,
            });
        });
        (0, vitest_1.it)("should return correct meta for last page", function () {
            var result = (0, pagination_1.paginate)(["j"], 10, 4, 3);
            (0, vitest_1.expect)(result.meta.hasNextPage).toBe(false);
            (0, vitest_1.expect)(result.meta.hasPrevPage).toBe(true);
            (0, vitest_1.expect)(result.meta.lastPage).toBe(4);
        });
        (0, vitest_1.it)("should handle empty results", function () {
            var result = (0, pagination_1.paginate)([], 0, 1, 20);
            (0, vitest_1.expect)(result.data).toEqual([]);
            (0, vitest_1.expect)(result.meta.total).toBe(0);
            (0, vitest_1.expect)(result.meta.lastPage).toBe(1);
            (0, vitest_1.expect)(result.meta.hasNextPage).toBe(false);
            (0, vitest_1.expect)(result.meta.hasPrevPage).toBe(false);
        });
        (0, vitest_1.it)("should handle single page", function () {
            var result = (0, pagination_1.paginate)([1, 2, 3], 3, 1, 20);
            (0, vitest_1.expect)(result.meta.lastPage).toBe(1);
            (0, vitest_1.expect)(result.meta.hasNextPage).toBe(false);
        });
    });
    (0, vitest_1.describe)("normalizePagination()", function () {
        (0, vitest_1.it)("should return defaults when no input", function () {
            var result = (0, pagination_1.normalizePagination)();
            (0, vitest_1.expect)(result.page).toBe(1);
            (0, vitest_1.expect)(result.perPage).toBe(20);
            (0, vitest_1.expect)(result.skip).toBe(0);
        });
        (0, vitest_1.it)("should calculate skip correctly", function () {
            var result = (0, pagination_1.normalizePagination)({ page: 3, perPage: 10 });
            (0, vitest_1.expect)(result.skip).toBe(20);
        });
        (0, vitest_1.it)("should cap perPage at MAX_PER_PAGE", function () {
            var result = (0, pagination_1.normalizePagination)({ perPage: 999 });
            (0, vitest_1.expect)(result.perPage).toBe(100);
        });
        (0, vitest_1.it)("should not allow page < 1", function () {
            var result = (0, pagination_1.normalizePagination)({ page: -5 });
            (0, vitest_1.expect)(result.page).toBe(1);
            (0, vitest_1.expect)(result.skip).toBe(0);
        });
    });
});
