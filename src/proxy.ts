import { auth } from "@admin/lib/auth";
import { NextResponse } from "next/server";

/**
 * NextAuth v5 Edge Proxy for ecom-admin.
 * Next.js 16 file convention: src/proxy.ts
 */
export default auth((req) => {
  const { pathname } = req.nextUrl;

  // Skip internal paths and assets
  if (
    pathname.startsWith("/api") ||
    pathname.startsWith("/_next") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const isLoggedIn = !!req.auth;
  const isAuthRoute = pathname.startsWith("/login") || pathname === "/login";

  // Redirect unauthenticated users to /login
  if (!isAuthRoute && !isLoggedIn) {
    const loginUrl = req.nextUrl.clone();
    loginUrl.pathname = "/login";
    return NextResponse.redirect(loginUrl);
  }

  // Redirect already authenticated users away from /login to dashboard root
  if (isAuthRoute && isLoggedIn) {
    const dashboardUrl = req.nextUrl.clone();
    dashboardUrl.pathname = "/";
    return NextResponse.redirect(dashboardUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|feed.xml).*)"],
};
