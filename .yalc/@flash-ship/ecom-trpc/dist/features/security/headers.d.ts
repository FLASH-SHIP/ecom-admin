import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
/**
 * Apply security headers to a Next.js response.
 * Can be used in middleware.ts or as a utility in API routes.
 */
export declare function applySecurityHeaders(response: NextResponse): NextResponse;
/**
 * Next.js middleware function that adds security headers to all responses.
 *
 * Usage in middleware.ts:
 *   export { securityMiddleware as middleware } from "@ecom/features/security/headers";
 *
 * Or compose with existing middleware:
 *   const response = NextResponse.next();
 *   applySecurityHeaders(response);
 */
export declare function securityMiddleware(_request: NextRequest): NextResponse;
/**
 * Get security headers as a plain object (for non-Next.js contexts like NestJS).
 */
export declare function getSecurityHeaders(): Record<string, string>;
//# sourceMappingURL=headers.d.ts.map