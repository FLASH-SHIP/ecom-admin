"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permissionsCache = exports.settingsCache = exports.categoryCache = exports.MemoryCache = void 0;
/**
 * Simple in-memory cache with TTL.
 *
 * Used for rarely-changing data like category trees, settings, and permissions
 * to reduce database round-trips on hot paths.
 */
var MemoryCache = /** @class */ (function () {
    function MemoryCache(defaultTtlMs) {
        if (defaultTtlMs === void 0) { defaultTtlMs = 60000; }
        this.cache = new Map();
        this.defaultTtlMs = defaultTtlMs;
    }
    MemoryCache.prototype.get = function (key) {
        var entry = this.cache.get(key);
        if (!entry)
            return undefined;
        if (Date.now() > entry.expiresAt) {
            this.cache.delete(key);
            return undefined;
        }
        return entry.data;
    };
    MemoryCache.prototype.set = function (key, data, ttlMs) {
        this.cache.set(key, {
            data: data,
            expiresAt: Date.now() + (ttlMs !== null && ttlMs !== void 0 ? ttlMs : this.defaultTtlMs),
        });
    };
    MemoryCache.prototype.invalidate = function (key) {
        this.cache.delete(key);
    };
    MemoryCache.prototype.invalidatePrefix = function (prefix) {
        for (var _i = 0, _a = this.cache.keys(); _i < _a.length; _i++) {
            var key = _a[_i];
            if (key.startsWith(prefix)) {
                this.cache.delete(key);
            }
        }
    };
    MemoryCache.prototype.clear = function () {
        this.cache.clear();
    };
    return MemoryCache;
}());
exports.MemoryCache = MemoryCache;
/** Shared cache instances — one per data type for isolation. */
exports.categoryCache = new MemoryCache(60000);
exports.settingsCache = new MemoryCache(120000);
exports.permissionsCache = new MemoryCache(300000);
