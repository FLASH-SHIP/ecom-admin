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
exports.softLockManager = exports.lockManager = exports.DistributedLockManager = void 0;
var logger_1 = require("./logger");
var redis_1 = require("./redis");
var log = (0, logger_1.createLogger)("DistributedLock");
var DistributedLockManager = /** @class */ (function () {
    function DistributedLockManager(fallbackStrategy) {
        if (fallbackStrategy === void 0) { fallbackStrategy = "deny"; }
        this.fallbackStrategy = fallbackStrategy;
    }
    /**
     * Acquire a lock.
     * Returns a lock token if successful, or null if failed.
     *
     * Fallback behavior when Redis is unavailable (PERF-03):
     * - "deny" (default): Returns null → lock acquisition fails → caller must handle
     * - "allow": Returns fallback token → operation proceeds (use for non-critical paths only)
     */
    DistributedLockManager.prototype.acquire = function (key, ttlMs) {
        return __awaiter(this, void 0, void 0, function () {
            var redis, token, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (process.env.NODE_ENV === "test" && !process.env.REDIS_URL) {
                            return [2 /*return*/, "mock-token"];
                        }
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        redis = (0, redis_1.getRedisClient)();
                        token = Math.random().toString(36).substring(2, 15);
                        return [4 /*yield*/, redis.set("lock:".concat(key), token, "PX", ttlMs, "NX")];
                    case 2:
                        result = _a.sent();
                        return [2 /*return*/, result === "OK" ? token : null];
                    case 3:
                        err_1 = _a.sent();
                        if (this.fallbackStrategy === "allow") {
                            log.warn("Redis unavailable for lock — fallback to ALLOW (non-critical path)", {
                                key: key,
                                error: err_1.message,
                            });
                            return [2 /*return*/, "fallback-token"];
                        }
                        log.error("Redis unavailable for lock — DENYING acquisition (fail-closed)", {
                            key: key,
                            error: err_1.message,
                        });
                        return [2 /*return*/, null];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Release a lock safely using a Lua script to ensure only the owner can release it.
     */
    DistributedLockManager.prototype.release = function (key, token) {
        return __awaiter(this, void 0, void 0, function () {
            var redis, script, result, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (process.env.NODE_ENV === "test" && !process.env.REDIS_URL) {
                            return [2 /*return*/, true];
                        }
                        if (token === "fallback-token") {
                            return [2 /*return*/, true];
                        }
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        redis = (0, redis_1.getRedisClient)();
                        script = "\n        if redis.call(\"get\", KEYS[1]) == ARGV[1] then\n          return redis.call(\"del\", KEYS[1])\n        else\n          return 0\n        end\n      ";
                        return [4 /*yield*/, redis.eval(script, 1, "lock:".concat(key), token)];
                    case 2:
                        result = _b.sent();
                        return [2 /*return*/, result === 1];
                    case 3:
                        _a = _b.sent();
                        return [2 /*return*/, false];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    /**
     * Run a function wrapped in a lock.
     */
    DistributedLockManager.prototype.runWithLock = function (key_1, ttlMs_1, fn_1) {
        return __awaiter(this, arguments, void 0, function (key, ttlMs, fn, retryDelayMs, maxRetries) {
            var attempts, token;
            if (retryDelayMs === void 0) { retryDelayMs = 50; }
            if (maxRetries === void 0) { maxRetries = 5; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        attempts = 0;
                        _a.label = 1;
                    case 1:
                        if (!(attempts < maxRetries)) return [3 /*break*/, 10];
                        return [4 /*yield*/, this.acquire(key, ttlMs)];
                    case 2:
                        token = _a.sent();
                        if (!token) return [3 /*break*/, 7];
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, , 5, 7]);
                        return [4 /*yield*/, fn()];
                    case 4: return [2 /*return*/, _a.sent()];
                    case 5: return [4 /*yield*/, this.release(key, token)];
                    case 6:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 7:
                        attempts++;
                        if (!(attempts < maxRetries)) return [3 /*break*/, 9];
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, retryDelayMs); })];
                    case 8:
                        _a.sent();
                        _a.label = 9;
                    case 9: return [3 /*break*/, 1];
                    case 10: throw new Error("Could not acquire lock for key: ".concat(key, " after ").concat(maxRetries, " attempts"));
                }
            });
        });
    };
    return DistributedLockManager;
}());
exports.DistributedLockManager = DistributedLockManager;
/** Default lock manager: fail-closed (deny) for safety-critical operations */
exports.lockManager = new DistributedLockManager("deny");
/** Lock manager for non-critical paths where operations can proceed without Redis */
exports.softLockManager = new DistributedLockManager("allow");
