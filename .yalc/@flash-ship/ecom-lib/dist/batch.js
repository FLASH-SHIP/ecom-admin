"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executeBatchProcess = executeBatchProcess;
var class_transformer_1 = require("class-transformer");
var class_validator_1 = require("class-validator");
/**
 * Standard batch processor utility for bulk API endpoints.
 * Validates each item schema via class-validator and executes processor callback in isolation.
 */
function executeBatchProcess(items, dtoClass, processor, options) {
    return __awaiter(this, void 0, void 0, function () {
        var maxLimit, results, succeeded, failed, i, item, dtoInstance, schemaErrors, itemErrors, _i, schemaErrors_1, err, _a, _b, _c, constraintName, msg, code, output, err_1, errorMsg, field, code;
        var _d, _e;
        return __generator(this, function (_f) {
            switch (_f.label) {
                case 0:
                    maxLimit = (_d = options === null || options === void 0 ? void 0 : options.maxLimit) !== null && _d !== void 0 ? _d : 50;
                    if (!Array.isArray(items) || items.length === 0) {
                        return [2 /*return*/, {
                                summary: { total: 0, succeeded: 0, failed: 0 },
                                data: [],
                            }];
                    }
                    if (items.length > maxLimit) {
                        throw new Error("K\u00EDch th\u01B0\u1EDBc danh s\u00E1ch v\u01B0\u1EE3t qu\u00E1 gi\u1EDBi h\u1EA1n t\u1ED1i \u0111a ".concat(maxLimit, " ph\u1EA7n t\u1EED per request."));
                    }
                    results = [];
                    succeeded = 0;
                    failed = 0;
                    i = 0;
                    _f.label = 1;
                case 1:
                    if (!(i < items.length)) return [3 /*break*/, 7];
                    item = items[i];
                    if (!item)
                        return [3 /*break*/, 6];
                    dtoInstance = (0, class_transformer_1.plainToInstance)(dtoClass, item);
                    return [4 /*yield*/, (0, class_validator_1.validate)(dtoInstance)];
                case 2:
                    schemaErrors = _f.sent();
                    if (schemaErrors.length > 0) {
                        failed++;
                        itemErrors = [];
                        for (_i = 0, schemaErrors_1 = schemaErrors; _i < schemaErrors_1.length; _i++) {
                            err = schemaErrors_1[_i];
                            if (err.constraints) {
                                for (_a = 0, _b = Object.entries(err.constraints); _a < _b.length; _a++) {
                                    _c = _b[_a], constraintName = _c[0], msg = _c[1];
                                    code = constraintName.replace(/([a-z])([A-Z])/g, "$1_$2").toUpperCase();
                                    itemErrors.push({ code: code, field: err.property, message: msg });
                                }
                            }
                        }
                        results.push({
                            index: i,
                            success: false,
                            errors: itemErrors,
                        });
                        return [3 /*break*/, 6];
                    }
                    _f.label = 3;
                case 3:
                    _f.trys.push([3, 5, , 6]);
                    return [4 /*yield*/, processor(item, i)];
                case 4:
                    output = _f.sent();
                    succeeded++;
                    results.push({
                        index: i,
                        success: true,
                        orderId: (_e = output === null || output === void 0 ? void 0 : output.id) !== null && _e !== void 0 ? _e : output === null || output === void 0 ? void 0 : output.orderId,
                        orderCode: output === null || output === void 0 ? void 0 : output.orderCode,
                        data: output,
                    });
                    return [3 /*break*/, 6];
                case 5:
                    err_1 = _f.sent();
                    failed++;
                    errorMsg = err_1 instanceof Error ? err_1.message : String(err_1);
                    field = "general";
                    code = "BUSINESS_ERROR";
                    if (errorMsg.includes("sellerOrderId") || errorMsg.includes("Seller Order ID")) {
                        field = "sellerOrderId";
                        code = "DUPLICATE_SELLER_ORDER_ID";
                    }
                    else if (errorMsg.includes("bảng giá") || errorMsg.includes("RateCard")) {
                        field = "shippingMethod";
                        code = "RATE_CARD_NOT_FOUND";
                    }
                    results.push({
                        index: i,
                        success: false,
                        errors: [{ code: code, field: field, message: errorMsg }],
                    });
                    return [3 /*break*/, 6];
                case 6:
                    i++;
                    return [3 /*break*/, 1];
                case 7: return [2 /*return*/, {
                        summary: {
                            total: items.length,
                            succeeded: succeeded,
                            failed: failed,
                        },
                        data: results,
                    }];
            }
        });
    });
}
