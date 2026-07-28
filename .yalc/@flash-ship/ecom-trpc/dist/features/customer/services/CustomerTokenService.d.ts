import type { SignOptions } from "jsonwebtoken";
export interface CustomerTokenPayload {
    sub: string;
    email: string;
    type: "access" | "refresh";
    jti?: string;
    iat?: number;
}
export interface CustomerTokenServiceOptions {
    accessSecret?: string;
    refreshSecret?: string;
    accessTokenTtl?: SignOptions["expiresIn"];
    refreshTokenTtl?: SignOptions["expiresIn"];
}
export declare class CustomerTokenService {
    private accessSecret;
    private refreshSecret;
    private accessTokenTtl;
    private refreshTokenTtl;
    constructor(opts?: CustomerTokenServiceOptions);
    generateTokens(customer: {
        id: string;
        email: string;
    }): {
        accessToken: string;
        refreshToken: string;
    };
    verifyAccessToken(token: string): Promise<CustomerTokenPayload & {
        iat: number;
        exp: number;
    }>;
    verifyRefreshToken(token: string): Promise<CustomerTokenPayload & {
        iat: number;
        exp: number;
    }>;
    blacklistToken(jti: string, ttlSeconds: number): Promise<void>;
    isTokenBlacklisted(jti: string): Promise<boolean>;
    revokeAllTokens(customerId: string): Promise<void>;
    getRevocationTime(customerId: string): Promise<number | null>;
}
//# sourceMappingURL=CustomerTokenService.d.ts.map