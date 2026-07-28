"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var vitest_1 = require("vitest");
var BaseTransformer_1 = require("../transformers/BaseTransformer");
var MockTransformer = /** @class */ (function (_super) {
    __extends(MockTransformer, _super);
    function MockTransformer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MockTransformer.prototype.transform = function (item) {
        return "item-".concat(item);
    };
    return MockTransformer;
}(BaseTransformer_1.BaseTransformer));
(0, vitest_1.describe)("BaseTransformer", function () {
    var transformer = new MockTransformer();
    (0, vitest_1.it)("should transform a single item", function () {
        (0, vitest_1.expect)(transformer.transformItem(5)).toBe("item-5");
    });
    (0, vitest_1.it)("should transform a collection of items", function () {
        (0, vitest_1.expect)(transformer.transformCollection([1, 2, 3])).toEqual(["item-1", "item-2", "item-3"]);
    });
    (0, vitest_1.it)("should transform paginated results", function () {
        var paginated = {
            data: [10, 20],
            meta: {
                total: 100,
                page: 1,
                perPage: 2,
                extraMeta: "test",
            },
        };
        var result = transformer.transformPaginated(paginated);
        (0, vitest_1.expect)(result.data).toEqual(["item-10", "item-20"]);
        (0, vitest_1.expect)(result.meta).toEqual({
            total: 100,
            page: 1,
            perPage: 2,
            extraMeta: "test",
        });
    });
});
