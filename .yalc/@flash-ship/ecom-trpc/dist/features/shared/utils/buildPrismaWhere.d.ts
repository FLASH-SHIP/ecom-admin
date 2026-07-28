/**
 * Generic Prisma WHERE clause builder from DataTable filter items.
 *
 * Security:
 * - Only fields explicitly listed in `fieldConfig` are allowed (whitelist)
 * - Unknown fields are silently ignored (no error, no injection)
 * - Values are coerced per field type (string→number, string→Date)
 * - Max string length enforced at Zod schema level (filterSchema.ts)
 *
 * Performance:
 * - Single pass through filters array → O(n)
 * - No database calls — pure computation
 */
import type { FilterItem } from "@ecom/trpc-contract/server/shared/filterSchema";
export interface FilterFieldConfig {
    /** Actual Prisma column name (e.g. "createdAt", "name") */
    prismaField: string;
    /** Data type for value coercion and operator validation */
    type: "string" | "number" | "date" | "enum";
}
export type FilterFieldConfigMap = Record<string, FilterFieldConfig>;
/**
 * Build a Prisma-compatible `where` clause from an array of filter items.
 *
 * @param filters - Array of filter items from the client
 * @param fieldConfig - Whitelist of allowed fields and their types
 * @returns Prisma `where` object with AND conditions
 *
 * @example
 * ```ts
 * const FIELD_CONFIG = {
 *   title: { prismaField: "title", type: "string" },
 *   id:    { prismaField: "id",    type: "number" },
 * } as const satisfies FilterFieldConfigMap;
 *
 * const where = buildPrismaWhere(input.filters, FIELD_CONFIG);
 * // where = { AND: [{ title: { contains: "foo", mode: "insensitive" } }] }
 * ```
 */
export declare function buildPrismaWhere(filters: FilterItem[], fieldConfig: FilterFieldConfigMap): Record<string, unknown>;
//# sourceMappingURL=buildPrismaWhere.d.ts.map