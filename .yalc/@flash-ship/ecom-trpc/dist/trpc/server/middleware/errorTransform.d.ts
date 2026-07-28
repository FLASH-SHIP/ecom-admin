import type { TRPC_ERROR_CODE_KEY } from "@trpc/server/unstable-core-do-not-import";
export declare function mapErrorCodeToTRPC(errorCode: string): TRPC_ERROR_CODE_KEY;
/**
 * Checks if an error is an ErrorWithCode instance (duck-typing).
 */
export declare function isErrorWithCode(err: unknown): err is {
    code: string;
    message: string;
};
//# sourceMappingURL=errorTransform.d.ts.map