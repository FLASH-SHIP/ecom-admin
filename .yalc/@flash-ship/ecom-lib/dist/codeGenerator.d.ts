/**
 * Generates an unbiased, cryptographically secure random string using a custom 32-character alphabet.
 * Since 32 divides 256 evenly, using modulo arithmetic on random bytes is mathematically 100% unbiased.
 */
export declare function generateRandomString(length: number): string;
/**
 * Generates a unique business entity code.
 * Format: [PREFIX][YYMMDD][8-CHAR-BASE32]
 * Example: EC260708BQHEWXU0
 *
 * @param prefix Configurable prefix for the entity (e.g. "EC", "INV", "TXN")
 * @returns The formatted entity code
 */
export declare function generateEntityCode(prefix: string): string;
/**
 * Generates a short, human-readable customer code.
 * Format: [PREFIX][6-CHAR-BASE32]
 * Example: KH8F32AQ
 *
 * @param prefix Configurable prefix for customer code (defaults to "KH")
 * @param length Length of random suffix (defaults to 6)
 * @returns The formatted customer code
 */
export declare function generateCustomerCode(prefix?: string, length?: number): string;
export declare function generateOrderCode(prefix?: string): string;
//# sourceMappingURL=codeGenerator.d.ts.map