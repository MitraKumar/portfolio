import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Auth guard the /keystatic dashboard and its API endpoints
const isProtectedRoute = createRouteMatcher([
  "/keystatic(.*)",
  "/api/keystatic(.*)",
]);

const isSignInOrSignUpRoute = createRouteMatcher([
  "/sign-in(.*)",
  "/sign-up(.*)",
]);

export default clerkMiddleware(async (auth, request) => {
  const secretKey = process.env.ADMIN_LOGIN_SECRET;

  if (isSignInOrSignUpRoute(request)) {
    // If a secret login key is configured, block direct standard logins
    if (secretKey) {
      const hasSecretQuery = request.nextUrl.searchParams.get("key") === secretKey;
      const hasCookie = request.cookies.get("admin_login_allowed")?.value === secretKey;

      if (!hasSecretQuery && !hasCookie) {
        // Redirect standard sign-in/sign-up attempts to homepage
        return NextResponse.redirect(new URL("/", request.url));
      }

      // If they used the correct secret key in the URL, set a temporary secure cookie
      if (hasSecretQuery) {
        const response = NextResponse.next();
        response.cookies.set("admin_login_allowed", secretKey, {
          path: "/",
          maxAge: 3600, // 1 hour session helper for login loop
          httpOnly: true,
          secure: process.env.NODE_ENV === "production",
        });
        return response;
      }
    }
  }

  if (isProtectedRoute(request)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
    "/__clerk/:path*",
  ],
};
