import type { CustomerRepository } from "@ecom/features/customer/repositories/CustomerRepository";
import type { NotificationService } from "@ecom/features/notification/services/NotificationService";
import { CustomerTokenService } from "./CustomerTokenService";
export interface ActiveCustomerTokenResponse {
    customer: {
        id: string;
        email: string;
        username: string;
        name: string | null;
        avatarUrl: string | null;
    };
    accessToken: string;
    refreshToken: string;
}
export interface ICustomerAuthServiceDeps {
    customerRepo: CustomerRepository;
    notificationService?: NotificationService;
    getNotificationService?: () => NotificationService;
}
export declare class CustomerAuthService {
    private deps;
    private jwtSecret;
    constructor(deps: ICustomerAuthServiceDeps);
    private get notificationService();
    sendVerificationCode(email: string): Promise<void>;
    register(data: {
        email: string;
        password: string;
        code: string;
    }): Promise<{
        email: string;
        name: string | null;
        username: string;
        id: string;
        customerCode: string | null;
    }>;
    login(identifier: string, password: string): Promise<{
        id: string;
        email: string;
        username: string;
        name: string | null;
        avatarUrl: string | null;
    }>;
    loginWithActiveTokenCache(identifier: string, password: string, userAgent: string | undefined, tokenService: CustomerTokenService): Promise<ActiveCustomerTokenResponse>;
    invalidateActiveTokens(customerId: string): Promise<void>;
    changePassword(customerId: string, oldPassword: string, newPassword: string, currentSessionToken?: string): Promise<void>;
    sendVerificationEmail(customerId: string): Promise<void>;
    verifyEmailByToken(token: string): Promise<{
        customerId: string;
    }>;
    forgotPassword(email: string): Promise<void>;
    resetPassword(token: string, newPassword: string): Promise<{
        customerId: string;
    }>;
}
//# sourceMappingURL=CustomerAuthService.d.ts.map