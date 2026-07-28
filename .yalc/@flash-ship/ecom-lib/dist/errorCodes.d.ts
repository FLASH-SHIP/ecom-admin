/**
 * Standardized error codes for the Ecom.
 * Used with ErrorWithCode in services and repositories.
 */
export declare const ErrorCode: {
    readonly InvalidCredentials: "INVALID_CREDENTIALS";
    readonly EmailAlreadyExists: "EMAIL_ALREADY_EXISTS";
    readonly UsernameAlreadyExists: "USERNAME_ALREADY_EXISTS";
    readonly TokenExpired: "TOKEN_EXPIRED";
    readonly TokenInvalid: "TOKEN_INVALID";
    readonly TokenRevoked: "TOKEN_REVOKED";
    readonly RefreshTokenInvalid: "REFRESH_TOKEN_INVALID";
    readonly ApiKeyInvalid: "API_KEY_INVALID";
    readonly ApiKeyExpired: "API_KEY_EXPIRED";
    readonly VerificationCodeInvalid: "VERIFICATION_CODE_INVALID";
    readonly VerificationCodeExpired: "VERIFICATION_CODE_EXPIRED";
    readonly VerificationCodeLocked: "VERIFICATION_CODE_LOCKED";
    readonly VerificationCodeRateLimited: "VERIFICATION_CODE_RATE_LIMITED";
    readonly VerificationCodeAttempts: "VERIFICATION_CODE_ATTEMPTS";
    readonly Forbidden: "FORBIDDEN";
    readonly InsufficientPermissions: "INSUFFICIENT_PERMISSIONS";
    readonly UserNotFound: "USER_NOT_FOUND";
    readonly PostNotFound: "POST_NOT_FOUND";
    readonly CategoryNotFound: "CATEGORY_NOT_FOUND";
    readonly TagNotFound: "TAG_NOT_FOUND";
    readonly SlugAlreadyExists: "SLUG_ALREADY_EXISTS";
    readonly RateCardNotFound: "RATE_CARD_NOT_FOUND";
    readonly RateCardConflict: "RATE_CARD_CONFLICT";
    readonly RateCardValidationError: "RATE_CARD_VALIDATION_ERROR";
    readonly NotFound: "NOT_FOUND";
    readonly BadRequest: "BAD_REQUEST";
    readonly Conflict: "CONFLICT";
    readonly InternalError: "INTERNAL_ERROR";
    readonly ValidationError: "VALIDATION_ERROR";
    readonly CustomerGroupNotFound: "CUSTOMER_GROUP_NOT_FOUND";
    readonly CustomerGroupConflict: "CUSTOMER_GROUP_CONFLICT";
};
export type ErrorCodeType = (typeof ErrorCode)[keyof typeof ErrorCode];
//# sourceMappingURL=errorCodes.d.ts.map