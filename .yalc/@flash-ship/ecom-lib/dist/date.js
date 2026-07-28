"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDateTimezone = parseDateTimezone;
/**
 * Parses a date string (either ISO-8601 with timezone or YYYY-MM-DD date-only)
 * into a UTC Date object representing either the start or end of that day.
 *
 * @param dateStr The input date string
 * @param isEnd Whether to target the end of the day (23:59:59.999) instead of the start (00:00:00.000)
 * @param timezoneOffset Optional client timezone offset (e.g., "+07:00" or "-05:00"). Defaults to "+07:00".
 */
function parseDateTimezone(dateStr, isEnd, timezoneOffset) {
    if (isEnd === void 0) { isEnd = false; }
    if (timezoneOffset === void 0) { timezoneOffset = "+07:00"; }
    var cleanStr = dateStr.trim();
    // 1. If it contains offset info (e.g., ending with Z, +HH:MM, -HH:MM)
    var hasTimezone = /Z|[+-]\d{2}:?\d{2}$/.test(cleanStr);
    if (hasTimezone) {
        return new Date(cleanStr);
    }
    // 2. If it's a date-only string (e.g., YYYY-MM-DD)
    var isDateOnly = /^\d{4}-\d{2}-\d{2}$/.test(cleanStr);
    if (isDateOnly) {
        var timePart = isEnd ? "23:59:59.999" : "00:00:00.000";
        return new Date("".concat(cleanStr, "T").concat(timePart).concat(timezoneOffset));
    }
    // 3. Fallback for date-time strings without timezone (e.g., YYYY-MM-DDTHH:MM:SS)
    if (cleanStr.includes("T")) {
        return new Date("".concat(cleanStr).concat(timezoneOffset));
    }
    return new Date(cleanStr);
}
