import { z } from "zod";
declare const ALLOWED_OPERATORS: readonly ["contains", "notContains", "startsWith", "endsWith", "equals", "notEquals", "between", "betweenInclusive", "greaterThan", "greaterThanOrEqual", "lessThan", "lessThanOrEqual", "empty", "notEmpty"];
export type FilterOperatorValue = (typeof ALLOWED_OPERATORS)[number];
export declare const filterItemSchema: z.ZodObject<{
    fieldKey: z.ZodString;
    operator: z.ZodEnum<{
        endsWith: "endsWith";
        startsWith: "startsWith";
        contains: "contains";
        equals: "equals";
        notContains: "notContains";
        notEquals: "notEquals";
        between: "between";
        betweenInclusive: "betweenInclusive";
        greaterThan: "greaterThan";
        greaterThanOrEqual: "greaterThanOrEqual";
        lessThan: "lessThan";
        lessThanOrEqual: "lessThanOrEqual";
        empty: "empty";
        notEmpty: "notEmpty";
    }>;
    value: z.ZodString;
    value2: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type FilterItem = z.infer<typeof filterItemSchema>;
export declare const filtersInputSchema: z.ZodDefault<z.ZodOptional<z.ZodArray<z.ZodObject<{
    fieldKey: z.ZodString;
    operator: z.ZodEnum<{
        endsWith: "endsWith";
        startsWith: "startsWith";
        contains: "contains";
        equals: "equals";
        notContains: "notContains";
        notEquals: "notEquals";
        between: "between";
        betweenInclusive: "betweenInclusive";
        greaterThan: "greaterThan";
        greaterThanOrEqual: "greaterThanOrEqual";
        lessThan: "lessThan";
        lessThanOrEqual: "lessThanOrEqual";
        empty: "empty";
        notEmpty: "notEmpty";
    }>;
    value: z.ZodString;
    value2: z.ZodOptional<z.ZodString>;
}, z.core.$strip>>>>;
export {};
//# sourceMappingURL=filterSchema.d.ts.map