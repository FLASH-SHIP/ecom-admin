"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MAX_PER_PAGE = exports.DEFAULT_PER_PAGE = exports.DEFAULT_PAGE = void 0;
exports.paginate = paginate;
exports.normalizePagination = normalizePagination;
/**
 * Creates a standardized paginated result from raw data.
 */
function paginate(data, total, page, perPage) {
    var lastPage = Math.max(1, Math.ceil(total / perPage));
    return {
        data: data,
        meta: {
            total: total,
            page: page,
            perPage: perPage,
            lastPage: lastPage,
            hasNextPage: page < lastPage,
            hasPrevPage: page > 1,
        },
    };
}
exports.DEFAULT_PAGE = 1;
exports.DEFAULT_PER_PAGE = 20;
exports.MAX_PER_PAGE = 100;
/**
 * Normalizes pagination input with sensible defaults.
 */
function normalizePagination(input) {
    var _a, _b;
    var page = Math.max(1, (_a = input === null || input === void 0 ? void 0 : input.page) !== null && _a !== void 0 ? _a : exports.DEFAULT_PAGE);
    var perPage = Math.min(exports.MAX_PER_PAGE, Math.max(1, (_b = input === null || input === void 0 ? void 0 : input.perPage) !== null && _b !== void 0 ? _b : exports.DEFAULT_PER_PAGE));
    return {
        page: page,
        perPage: perPage,
        skip: (page - 1) * perPage,
    };
}
