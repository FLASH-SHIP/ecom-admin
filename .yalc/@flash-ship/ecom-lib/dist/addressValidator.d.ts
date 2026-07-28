export interface PostalCodeRule {
    regex: RegExp;
    description: string;
    example: string;
}
export declare const COUNTRY_POSTAL_CODE_RULES: Record<string, PostalCodeRule>;
/**
 * Validate postal code / zip code dynamically according to country code.
 */
export declare function validatePostalCode(countryCode: string, zipCode: string): boolean;
/**
 * Get human-readable format requirement description or example for a country's postal code.
 */
export declare function getPostalCodeRuleInfo(countryCode: string): PostalCodeRule | null;
/**
 * Validate State format according to Country.
 * US: Exactly 2 uppercase letters (e.g. CA, NY, WA)
 * Other countries: Max 50 characters
 */
export declare function validateReceiverState(countryCode: string, state: string): {
    valid: boolean;
    message?: string;
};
/**
 * Validate Receiver Name: Required, max 100 chars, no special characters.
 * Allows letters, numbers, spaces, Vietnamese/accented characters, hyphens, apostrophes, dots.
 */
export declare function validateReceiverName(name: string): {
    valid: boolean;
    message?: string;
};
/**
 * Validate Receiver Phone: Optional, max 15 chars.
 */
export declare function validateReceiverPhone(phone?: string | null): {
    valid: boolean;
    message?: string;
};
/**
 * Validate Receiver Email: Optional, valid email format.
 */
export declare function validateReceiverEmail(email?: string | null): {
    valid: boolean;
    message?: string;
};
//# sourceMappingURL=addressValidator.d.ts.map