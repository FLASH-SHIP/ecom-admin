/**
 * Parses a date string (either ISO-8601 with timezone or YYYY-MM-DD date-only)
 * into a UTC Date object representing either the start or end of that day.
 *
 * @param dateStr The input date string
 * @param isEnd Whether to target the end of the day (23:59:59.999) instead of the start (00:00:00.000)
 * @param timezoneOffset Optional client timezone offset (e.g., "+07:00" or "-05:00"). Defaults to "+07:00".
 */
export declare function parseDateTimezone(dateStr: string, isEnd?: boolean, timezoneOffset?: string): Date;
//# sourceMappingURL=date.d.ts.map