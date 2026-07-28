import type { CustomerRepository } from "@ecom/features/customer/repositories/CustomerRepository";
import type { ApiKeyRepository } from "../repositories/ApiKeyRepository";
import type { UserRepository } from "../repositories/UserRepository";
interface IApiAuthServiceDeps {
    apiKeyRepo: ApiKeyRepository;
    userRepo: UserRepository;
    customerRepo: CustomerRepository;
}
export interface AuthenticatedUser {
    id: string;
    email: string;
    name: string | null;
    authMethod: "api_key" | "jwt" | "session";
    permissions: string[];
    ownerType: "User" | "Customer";
}
export declare class ApiAuthService {
    private deps;
    constructor(deps: IApiAuthServiceDeps);
    /**
     * Resolve authenticated user from a Bearer token.
     * Implements the dual-auth strategy:
     *   Token starts with "ecom_" → API Key
     *   Otherwise → JWT Access Token
     */
    authenticateBearer(token: string, clientIp?: string): Promise<AuthenticatedUser>;
    private authenticateApiKey;
    private authenticateJwt;
    /**
     * Revoke a JWT token by adding its hash to the Redis blacklist.
     * TTL is set to the token's remaining lifetime so entries auto-expire (SEC-04).
     */
    static revokeToken(token: string, ttlSeconds?: number): Promise<void>;
    /**
     * Check if a token has been revoked (SEC-04).
     * Uses Redis SISMEMBER-equivalent GET for O(1) lookup.
     */
    static isTokenRevoked(token: string): Promise<boolean>;
    /**
     * Revoke all tokens for a user by user ID.
     * Useful for "logout from all devices" or admin account suspension.
     */
    static revokeAllUserTokens(userId: string, ttlSeconds?: number): Promise<void>;
}
export {};
//# sourceMappingURL=ApiAuthService.d.ts.map