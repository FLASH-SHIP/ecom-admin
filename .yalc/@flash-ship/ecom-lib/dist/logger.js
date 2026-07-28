"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.loggerContext = void 0;
exports.setLogLevel = setLogLevel;
exports.getLogLevel = getLogLevel;
exports.maskSensitiveData = maskSensitiveData;
exports.createLogger = createLogger;
var node_async_hooks_1 = require("node:async_hooks");
var fs = require("node:fs");
var path = require("node:path");
var globalForLogger = globalThis;
exports.loggerContext = (_a = globalForLogger.loggerContext) !== null && _a !== void 0 ? _a : new node_async_hooks_1.AsyncLocalStorage();
if (process.env.NODE_ENV !== "production") {
    globalForLogger.loggerContext = exports.loggerContext;
}
var LOG_LEVELS = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
};
var currentLevel = (_b = process.env.LOG_LEVEL) !== null && _b !== void 0 ? _b : (process.env.NODE_ENV === "production" ? "info" : "debug");
function setLogLevel(level) {
    if (LOG_LEVELS[level] !== undefined) {
        currentLevel = level;
    }
}
function getLogLevel() {
    return currentLevel;
}
// PERF-08: Cache NODE_ENV at module init (doesn't change at runtime)
var IS_PRODUCTION = process.env.NODE_ENV === "production";
function findMonorepoRoot() {
    var dir = "";
    try {
        dir = typeof __dirname !== "undefined" ? __dirname : process.cwd();
    }
    catch (_a) {
        dir = process.cwd();
    }
    if (!dir || dir === "/") {
        dir = process.cwd();
    }
    dir = path.resolve(dir);
    while (true) {
        var packageJsonPath = path.join(dir, "package.json");
        if (fs.existsSync(packageJsonPath)) {
            try {
                var content = fs.readFileSync(packageJsonPath, "utf-8");
                if (content.includes('"workspaces"')) {
                    return dir;
                }
            }
            catch (_b) {
                // Silently ignore
            }
        }
        var parentDir = path.dirname(dir);
        if (parentDir === dir) {
            break;
        }
        dir = parentDir;
    }
    return process.cwd();
}
var MONOREPO_ROOT = findMonorepoRoot();
var LOGS_DIR = process.env.LOGS_PATH || path.join(MONOREPO_ROOT, "logs");
if (!IS_PRODUCTION) {
    try {
        if (!fs.existsSync(LOGS_DIR)) {
            fs.mkdirSync(LOGS_DIR, { recursive: true });
        }
        var files = fs.readdirSync(LOGS_DIR);
        var now = Date.now();
        var SEVEN_DAYS_MS = 7 * 24 * 60 * 60 * 1000;
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            if (file.startsWith("app-") && file.endsWith(".log")) {
                var filePath = path.join(LOGS_DIR, file);
                var stats = fs.statSync(filePath);
                if (now - stats.mtimeMs > SEVEN_DAYS_MS) {
                    try {
                        fs.unlinkSync(filePath);
                    }
                    catch (_c) {
                        // Silently ignore if already deleted by another process
                    }
                }
            }
        }
    }
    catch (err) {
        console.warn("Failed to initialize logs folder or prune old logs:", err);
    }
}
function shouldLog(level) {
    return LOG_LEVELS[level] >= LOG_LEVELS[currentLevel];
}
var COLOR_RESET = "\x1b[0m";
var COLORS = {
    debug: "\x1b[36m", // Cyan
    info: "\x1b[32m", // Green
    warn: "\x1b[33m", // Yellow
    error: "\x1b[31m", // Red
};
var SENSITIVE_KEYS = new Set([
    "password",
    "token",
    "authorization",
    "cookie",
    "secret",
    "key",
    "hashedkey",
    "tokenhash",
    "refreshtokenhash",
    "jwt",
    "smtp_pass",
    "smtp_user",
]);
function isSensitiveKey(key) {
    var lowerKey = key.toLowerCase();
    for (var _i = 0, SENSITIVE_KEYS_1 = SENSITIVE_KEYS; _i < SENSITIVE_KEYS_1.length; _i++) {
        var sensitive = SENSITIVE_KEYS_1[_i];
        if (lowerKey.includes(sensitive)) {
            return true;
        }
    }
    return false;
}
function serializeError(err) {
    var serialized = {
        name: err.name,
        message: err.message,
        stack: err.stack,
    };
    for (var _i = 0, _a = Object.entries(err); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        serialized[key] = maskSensitiveData(value);
    }
    return serialized;
}
/**
 * Mask sensitive data keys recursively.
 */
function maskSensitiveData(data) {
    if (!data || typeof data !== "object")
        return data;
    if (Array.isArray(data)) {
        return data.map(maskSensitiveData);
    }
    if (data instanceof Date) {
        return data;
    }
    if (data instanceof Error) {
        return serializeError(data);
    }
    var result = {};
    for (var _i = 0, _a = Object.entries(data); _i < _a.length; _i++) {
        var _b = _a[_i], key = _b[0], value = _b[1];
        if (isSensitiveKey(key)) {
            result[key] = "[MASKED]";
        }
        else if (typeof value === "object") {
            result[key] = maskSensitiveData(value);
        }
        else {
            result[key] = value;
        }
    }
    return result;
}
function formatMessage(level, module, message, data) {
    var timestamp = new Date().toISOString();
    var store = exports.loggerContext.getStore();
    var traceId = store === null || store === void 0 ? void 0 : store.traceId;
    var userId = store === null || store === void 0 ? void 0 : store.userId;
    var isDev = !IS_PRODUCTION;
    if (isDev) {
        var color = COLORS[level];
        var levelStr = level.toUpperCase();
        var moduleColor = "\x1b[35m"; // Magenta
        var traceColor = "\x1b[90m"; // Dark grey
        var traceSegment = traceId ? " ".concat(traceColor, "[").concat(traceId, "]").concat(COLOR_RESET) : "";
        var userSegment = userId ? " [User:".concat(userId, "]") : "";
        return "".concat(timestamp, " ").concat(color, "[").concat(levelStr, "]").concat(COLOR_RESET, " ").concat(moduleColor, "[").concat(module, "]").concat(COLOR_RESET).concat(traceSegment).concat(userSegment, " ").concat(message);
    }
    return JSON.stringify(__assign({ timestamp: timestamp, level: level.toUpperCase(), module: module, traceId: traceId, userId: userId, message: message }, data));
}
function writeLogToFile(level, module, message, data) {
    if (IS_PRODUCTION)
        return;
    try {
        var dateStr = new Date().toISOString().split("T")[0];
        var filePath = path.join(LOGS_DIR, "app-".concat(dateStr, ".log"));
        var store = exports.loggerContext.getStore();
        var traceId = store === null || store === void 0 ? void 0 : store.traceId;
        var userId = store === null || store === void 0 ? void 0 : store.userId;
        var logLine = JSON.stringify(__assign({ timestamp: new Date().toISOString(), level: level.toUpperCase(), module: module, traceId: traceId, userId: userId, message: message }, data));
        fs.appendFile(filePath, "".concat(logLine, "\n"), function () { });
    }
    catch (_a) {
        // Fail silently
    }
}
/**
 * Create a scoped logger for a specific module.
 *
 * @example
 * const log = createLogger("AuthService");
 * log.info("User logged in", { userId: 1 });
 * log.error("Login failed", { email: "user@example.com" });
 */
function createLogger(module) {
    return {
        debug: function (message, data) {
            if (shouldLog("debug")) {
                var maskedData = data ? maskSensitiveData(data) : undefined;
                if (!IS_PRODUCTION) {
                    console.debug(formatMessage("debug", module, message), maskedData !== null && maskedData !== void 0 ? maskedData : "");
                    writeLogToFile("debug", module, message, maskedData);
                }
                else {
                    console.debug(formatMessage("debug", module, message, maskedData));
                }
            }
        },
        info: function (message, data) {
            if (shouldLog("info")) {
                var maskedData = data ? maskSensitiveData(data) : undefined;
                if (!IS_PRODUCTION) {
                    console.info(formatMessage("info", module, message), maskedData !== null && maskedData !== void 0 ? maskedData : "");
                    writeLogToFile("info", module, message, maskedData);
                }
                else {
                    console.info(formatMessage("info", module, message, maskedData));
                }
            }
        },
        warn: function (message, data) {
            if (shouldLog("warn")) {
                var maskedData = data ? maskSensitiveData(data) : undefined;
                if (!IS_PRODUCTION) {
                    console.warn(formatMessage("warn", module, message), maskedData !== null && maskedData !== void 0 ? maskedData : "");
                    writeLogToFile("warn", module, message, maskedData);
                }
                else {
                    console.warn(formatMessage("warn", module, message, maskedData));
                }
            }
        },
        error: function (message, data) {
            if (shouldLog("error")) {
                var maskedData = data ? maskSensitiveData(data) : undefined;
                if (!IS_PRODUCTION) {
                    console.error(formatMessage("error", module, message), maskedData !== null && maskedData !== void 0 ? maskedData : "");
                    writeLogToFile("error", module, message, maskedData);
                }
                else {
                    console.error(formatMessage("error", module, message, maskedData));
                }
            }
        },
    };
}
