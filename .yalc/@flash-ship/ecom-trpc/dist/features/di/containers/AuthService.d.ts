import { ApiKeyRepository } from "@ecom/features/auth/repositories/ApiKeyRepository";
import { UserRepository } from "@ecom/features/auth/repositories/UserRepository";
import { ApiAuthService } from "@ecom/features/auth/services/ApiAuthService";
import { AuthService } from "@ecom/features/auth/services/AuthService";
export declare function getUserRepository(): UserRepository;
export declare function getApiKeyRepository(): ApiKeyRepository;
export declare function getAuthService(): AuthService;
export declare function getApiAuthService(): ApiAuthService;
/**
 * Reset all containers — for testing only.
 */
export declare function resetContainers(): void;
//# sourceMappingURL=AuthService.d.ts.map