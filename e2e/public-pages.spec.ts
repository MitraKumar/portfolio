import { expect, test } from "@playwright/test";

test.describe("Public Pages & Navigation", () => {
  
  test("Homepage should load, display dynamic elements, and navigate correctly", async ({ page }) => {
    await page.goto("/");

    // 1. Verify navbar brand link is present and visible
    const brandLink = page.getByRole("link", { name: "Mitra.", exact: true });
    await expect(brandLink).toBeVisible();

    // 2. Locate the headshot image dynamically via alt text
    const headshotImage = page.getByAltText("Kaushik Kumar Mitra Profile Headshot");
    await expect(headshotImage).toBeVisible();

    // 3. Verify core technology badges are present
    const badges = ["Drupal", "Laravel", "Next.js"];
    for (const badgeText of badges) {
      await expect(page.getByText(badgeText, { exact: true }).first()).toBeVisible();
    }

    // 4. Click CTA link and verify navigation to /about
    const aboutCTA = page.getByRole("link", { name: "Discover my full journey & skills" });
    await expect(aboutCTA).toBeVisible();
    await aboutCTA.click();
    await page.waitForURL("**/about");
    await expect(page).toHaveURL("/about");
  });

  test("About page should render layout, dynamic skill cards, and dynamic CV link", async ({ page, request }) => {
    await page.goto("/about");

    // 1. Verify main heading
    await expect(page.getByRole("heading", { name: "About Myself" })).toBeVisible();

    // 2. Locate the full profile headshot dynamically via alt text
    const fullHeadshotImage = page.getByAltText("Kaushik Kumar Mitra Full Profile Headshot");
    await expect(fullHeadshotImage).toBeVisible();

    // 3. Verify CV download link dynamically (no hardcoded path, check extension and response status)
    const downloadCVLink = page.getByRole("link", { name: "Download CV" });
    await expect(downloadCVLink).toBeVisible();
    
    const cvUrlPath = await downloadCVLink.getAttribute("href");
    expect(cvUrlPath).not.toBeNull();
    expect(cvUrlPath?.toLowerCase().endsWith(".pdf")).toBe(true);

    // Make request to the CV URL dynamically to verify it exists and is accessible
    const response = await request.get(cvUrlPath!);
    expect(response.status()).toBe(200);
    expect(response.headers()["content-type"]).toContain("pdf");

    // 4. Verify skill cards headers
    await expect(page.getByText("Backend Engineering", { exact: true })).toBeVisible();
    await expect(page.getByText("Frontend Technologies", { exact: true })).toBeVisible();
    await expect(page.getByText("DevOps & Cloud Systems", { exact: true })).toBeVisible();

    // 5. Verify timeline component is rendered
    await expect(page.getByRole("heading", { name: "My Journey" })).toBeVisible();
  });

  test("Projects index page should render projects grid and blog listings", async ({ page }) => {
    await page.goto("/projects");

    // 1. Verify heading
    await expect(page.getByRole("heading", { name: "My Projects" })).toBeVisible();

    // 2. Verify there is a project listed (should have at least one link pointing to a project details page)
    const projectLink = page.locator("a[href^='/projects/']").first();
    await expect(projectLink).toBeVisible();

    // 3. Verify blogs section exists
    await expect(page.getByRole("heading", { name: "Write-ups & Blogs" })).toBeVisible();

    // 4. Verify first blog link target attribute if it's external
    const blogLinks = page.locator("a:has-text('Read Article')");
    const count = await blogLinks.count();
    if (count > 0) {
      const firstBlogLink = blogLinks.first();
      const href = await firstBlogLink.getAttribute("href");
      if (href && (href.startsWith("http://") || href.startsWith("https://"))) {
        await expect(firstBlogLink).toHaveAttribute("target", "_blank");
      }
    }
  });

  test("Dynamic Project Details page should render Breadcrumbs, MDX content, and handle 404s", async ({ page }) => {
    // 1. Navigate to the portfolio project page
    await page.goto("/projects/portfolio");

    // 2. Verify breadcrumb navigation
    const breadcrumbList = page.locator("nav[aria-label='breadcrumb']");
    await expect(breadcrumbList).toBeVisible();
    await expect(breadcrumbList.locator("a:has-text('Home')")).toBeVisible();
    await expect(breadcrumbList.locator("a:has-text('Projects')")).toBeVisible();
    
    // Check that breadcrumbs render the current title dynamically
    await expect(breadcrumbList.locator("span", { hasText: "portfolio" })).toBeVisible();

    // 3. Check for MDX content prose wrapper
    const mdxContent = page.locator(".prose");
    await expect(mdxContent).toBeVisible();

    // 4. Check back navigation link
    const backButton = page.getByRole("link", { name: "Back to projects" });
    await expect(backButton).toBeVisible();
    await backButton.click();
    await page.waitForURL("**/projects");
    await expect(page).toHaveURL("/projects");

    // 5. Test invalid project page handles notFound() correctly
    const errorResponse = await page.goto("/projects/non-existent-project-slug");
    // Next.js notFound() renders a standard 404 page (or custom 404) with status 404
    expect(errorResponse?.status()).toBe(404);
  });
});
