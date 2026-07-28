"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseTransformer = void 0;
var BaseTransformer = /** @class */ (function () {
    function BaseTransformer() {
    }
    BaseTransformer.prototype.transformItem = function (item) {
        return this.transform(item);
    };
    BaseTransformer.prototype.transformCollection = function (items) {
        var _this = this;
        return items.map(function (item) { return _this.transform(item); });
    };
    BaseTransformer.prototype.transformPaginated = function (paginated) {
        return {
            data: this.transformCollection(paginated.data),
            meta: paginated.meta,
        };
    };
    return BaseTransformer;
}());
exports.BaseTransformer = BaseTransformer;
