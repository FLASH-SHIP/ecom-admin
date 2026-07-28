export interface JwtPayload {
    userId?: string;
    sub?: string;
    email?: string;
    role?: string;
    tokenVersion?: number;
    userAgentHash?: string;
    type: "access" | "refresh";
    exp?: number;
    iat?: number;
}
/**
 * Sign a JWT access token (short-lived: 15 minutes default).
 * Includes iss/aud claims for multi-service differentiation (SEC-09).
 */
export declare function signAccessToken(payload: Omit<JwtPayload, "type">): string;
/**
 * Sign a JWT access token for Customer users (audience: "ecom-customer").
 */
export declare function signCustomerAccessToken(payload: {
    sub: string;
    email?: string;
    tokenVersion?: number;
}): string;
/**
 * Sign a JWT refresh token (long-lived: 30 days default).
 * Uses separate secret from access token (SEC-03).
 * Includes iss/aud claims for multi-service differentiation (SEC-09).
 */
export declare function signRefreshToken(payload: Omit<JwtPayload, "type">): string;
/**
 * Verify and decode a JWT access token.
 * Throws if the token is invalid or expired.
 */
export declare function verifyToken(token: string): JwtPayload;
/**
 * Verify and decode a JWT refresh token using the separate refresh secret.
 */
export declare function verifyRefreshToken(token: string): JwtPayload;
/**
 * Decode a JWT token without verification (useful for expired token inspection).
 */
export declare function decodeToken(token: string): JwtPayload | null;
/**
 * Calculate expiration date from a duration string (e.g., "15m", "30d").
 * Reuses parseDurationToSeconds to avoid duplicate logic (PERF-09).
 */
export declare function getExpirationDate(duration: string): Date;
export interface QueueDashboardJwtPayload {
    userId: string;
    email: string;
    type: "queue-dashboard-sso" | "queue-dashboard-session";
    jti?: string;
}
/**
 * Sign a short-lived SSO token for the Queue dashboard (expires in 60s).
 */
export declare function signQueueDashboardToken(payload: Omit<QueueDashboardJwtPayload, "type" | "jti">): string;
/**
 * Sign a longer-lived session token for the Queue dashboard (expires in 2h).
 */
export declare function signQueueDashboardSession(payload: Omit<QueueDashboardJwtPayload, "type">): string;
/**
 * Verify queue dashboard JWT.
 */
export declare function verifyQueueDashboardToken(token: string): QueueDashboardJwtPayload;
//# sourceMappingURL=jwt.d.ts.map