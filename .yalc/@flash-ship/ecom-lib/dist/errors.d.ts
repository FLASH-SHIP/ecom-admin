import type { ErrorCodeType } from "./errorCodes";
/**
 * Application error with a machine-readable code.
 * Used in services and repositories (NOT in tRPC routers or NestJS controllers).
 */
export declare class ErrorWithCode extends Error {
    readonly code: ErrorCodeType;
    readonly statusCode: number;
    readonly meta?: Record<string, unknown>;
    constructor(code: ErrorCodeType, message: string, statusCode?: number, meta?: Record<string, unknown>);
    /**
     * Factory methods for common error patterns.
     */
    static Factory: {
        readonly NotFound: (message?: string) => ErrorWithCode;
        readonly Forbidden: (message?: string) => ErrorWithCode;
        readonly BadRequest: (message?: string) => ErrorWithCode;
        readonly InvalidCredentials: (message?: string) => ErrorWithCode;
        readonly Unauthorized: (message?: string) => ErrorWithCode;
        readonly Validation: (message?: string) => ErrorWithCode;
        readonly Conflict: (message?: string) => ErrorWithCode;
        readonly Internal: (message?: string) => ErrorWithCode;
    };
}
//# sourceMappingURL=errors.d.ts.map