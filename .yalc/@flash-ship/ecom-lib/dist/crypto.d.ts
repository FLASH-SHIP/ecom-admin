/**
 * Generate a SHA256 hash of the input string.
 */
export declare function sha256(input: string): string;
/**
 * Generate a new API key with the `ecom_` prefix.
 * Returns both the raw key (shown once to user) and the hash (stored in DB).
 */
export declare function generateApiKey(): {
    rawKey: string;
    hashedKey: string;
};
/**
 * Verify an API key by comparing its hash against the stored hash.
 * Uses timing-safe comparison to prevent timing side-channel attacks (SEC-02).
 */
export declare function verifyApiKey(rawKey: string, storedHash: string): boolean;
/**
 * Check if a token is an API key (starts with `ecom_` prefix).
 */
export declare function isApiKey(token: string): boolean;
/**
 * Generate a cryptographically secure random string.
 */
export declare function generateSecureToken(length?: number): string;
/**
 * Hash a password using bcrypt with 12 salt rounds.
 */
export declare function hashPassword(password: string): Promise<string>;
/**
 * Verify a password against a bcrypt hash.
 */
export declare function verifyPassword(password: string, hash: string): Promise<boolean>;
/**
 * Encrypt a string symmetrically using AES-256-GCM.
 * Returns a colon-separated string: iv:ciphertext:tag
 */
export declare function encryptSymmetrically(text: string): string;
/**
 * Decrypt an AES-256-GCM encrypted string.
 */
export declare function decryptSymmetrically(encryptedText: string): string;
/**
 * Generate HMAC SHA-256 signature for outgoing webhook payload.
 */
export declare function generateHmacSignature(payload: string | object, secret: string): string;
/**
 * Verify HMAC SHA-256 signature from incoming webhook request.
 */
export declare function verifyHmacSignature(payload: string | object, secret: string, expectedSignature: string): boolean;
//# sourceMappingURL=crypto.d.ts.map