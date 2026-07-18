import { expect, test } from "@playwright/test";

test.describe("Responsive Design & Mobile Navigation Menu", () => {

  test.describe("Mobile Viewport", () => {
    test.use({ viewport: { width: 375, height: 667 } }); // Emulate iPhone SE

    test("should display mobile menu toggler and open mobile navigation drawer", async ({ page }) => {
      await page.goto("/");

      // 1. Mobile menu button should be visible
      const mobileMenuButton = page.getByLabel("Toggle navigation menu");
      await expect(mobileMenuButton).toBeVisible();

      // 2. Mobile navigation menu drawer should start hidden
      const header = page.locator("header");
      // On mobile viewports, the nav is inside the container that has 'translate-x-full invisible' class
      // Let's assert that the navigation link 'About Me' inside the mobile menu starts off as hidden/not visible
      const aboutLink = header.getByRole("link", { name: "About Me", exact: true });
      await expect(aboutLink).not.toBeVisible();

      // 3. Click the mobile hamburger menu button to open it
      await mobileMenuButton.click();

      // 4. Assert drawer opens and links become visible
      await expect(aboutLink).toBeVisible();
      const homeLink = header.getByRole("link", { name: "Home", exact: true });
      const projectsLink = header.getByRole("link", { name: "Projects", exact: true });
      await expect(homeLink).toBeVisible();
      await expect(projectsLink).toBeVisible();

      // 5. Click the mobile menu button again to close it
      await mobileMenuButton.click();
      await expect(aboutLink).not.toBeVisible();
    });

    test("should render timeline milestones correctly on mobile viewport", async ({ page }) => {
      await page.goto("/about");
      
      // Timeline headings or milestones should be visible in viewport
      const timelineHeading = page.getByRole("heading", { name: "My Journey" });
      await expect(timelineHeading).toBeVisible();

      // Check that at least some milestone entries are rendered
      const timelineEntries = page.locator(".container.mx-auto.mt-24 >> text=/20\\d{2}/"); // Milestones with years like 2021, 2023, etc.
      const count = await timelineEntries.count();
      expect(count).toBeGreaterThan(0);
    });
  });

  test.describe("Desktop Viewport", () => {
    test.use({ viewport: { width: 1280, height: 720 } }); // Emulate standard desktop

    test("should show desktop navigation inline and hide mobile hamburger button", async ({ page }) => {
      await page.goto("/");

      // 1. Mobile hamburger toggler should NOT be visible on desktop
      const mobileMenuButton = page.getByLabel("Toggle navigation menu");
      await expect(mobileMenuButton).not.toBeVisible();

      // 2. Desktop navigation links should be visible directly in the header
      const header = page.locator("header");
      const homeLink = header.getByRole("link", { name: "Home", exact: true });
      const aboutLink = header.getByRole("link", { name: "About Me", exact: true });
      const projectsLink = header.getByRole("link", { name: "Projects", exact: true });

      await expect(homeLink).toBeVisible();
      await expect(aboutLink).toBeVisible();
      await expect(projectsLink).toBeVisible();
    });
  });
});
