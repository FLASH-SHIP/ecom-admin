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
exports.ErrorWithCode = void 0;
var errorCodes_1 = require("./errorCodes");
/**
 * Application error with a machine-readable code.
 * Used in services and repositories (NOT in tRPC routers or NestJS controllers).
 */
var ErrorWithCode = /** @class */ (function (_super) {
    __extends(ErrorWithCode, _super);
    function ErrorWithCode(code, message, statusCode, meta) {
        if (statusCode === void 0) { statusCode = 500; }
        var _this = _super.call(this, message) || this;
        _this.name = "ErrorWithCode";
        _this.code = code;
        _this.statusCode = statusCode;
        _this.meta = meta;
        return _this;
    }
    /**
     * Factory methods for common error patterns.
     */
    ErrorWithCode.Factory = {
        NotFound: function (message) {
            if (message === void 0) { message = "Resource not found"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.NotFound, message, 404);
        },
        Forbidden: function (message) {
            if (message === void 0) { message = "Access denied"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.Forbidden, message, 403);
        },
        BadRequest: function (message) {
            if (message === void 0) { message = "Bad request"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.BadRequest, message, 400);
        },
        InvalidCredentials: function (message) {
            if (message === void 0) { message = "Invalid email or password"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.InvalidCredentials, message, 401);
        },
        Unauthorized: function (message) {
            if (message === void 0) { message = "Unauthorized"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.TokenInvalid, message, 401);
        },
        Validation: function (message) {
            if (message === void 0) { message = "Validation error"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.ValidationError, message, 422);
        },
        Conflict: function (message) {
            if (message === void 0) { message = "Resource already exists"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.Conflict, message, 409);
        },
        Internal: function (message) {
            if (message === void 0) { message = "Internal server error"; }
            return new ErrorWithCode(errorCodes_1.ErrorCode.InternalError, message, 500);
        },
    };
    return ErrorWithCode;
}(Error));
exports.ErrorWithCode = ErrorWithCode;
