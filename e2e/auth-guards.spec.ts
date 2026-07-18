import { expect, test } from "@playwright/test";

test.describe("Authentication Guards & Custom Middleware Redirects", () => {

  test("unauthenticated access to /keystatic should redirect to Home since standard sign-in is guarded", async ({ page }) => {
    // Navigate directly to protected route
    await page.goto("/keystatic");

    // Since direct sign-in is blocked without the key, middleware redirects us back to homepage "/"
    await expect(page).toHaveURL("/");
  });

  test("direct access to /sign-in without key should redirect to home", async ({ page }) => {
    // Navigate directly to sign-in without query key
    await page.goto("/sign-in");

    // Middleware should block this and redirect to homepage "/"
    await expect(page).toHaveURL("/");
  });

  test("access to /sign-in with correct admin key should permit access and set session cookie", async ({ page }) => {
    // 1. Visit /sign-in with the correct secret key parameter defined in .env.local
    // In our .env.local, ADMIN_LOGIN_SECRET is "mitra-admin-access"
    await page.goto("/sign-in?key=mitra-admin-access");

    // 2. We should not be redirected back to homepage. The URL should still resolve to /sign-in (or Clerk's authorization URL).
    // Note: Clerk redirects the actual page to Clerk hosted accounts, so the final URL will contain Clerk host or sign-in path, not "/"
    expect(page.url()).not.toBe("/");
    expect(page.url()).toContain("sign-in");

    // 3. Verify that the browser has the 'admin_login_allowed' cookie set
    const cookies = await page.context().cookies();
    const adminCookie = cookies.find(c => c.name === "admin_login_allowed");
    expect(adminCookie).toBeDefined();
    expect(adminCookie?.value).toBe("mitra-admin-access");
  });
});
