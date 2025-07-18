import { test, expect } from "@playwright/test";

test("check youtube", async ({ page }) => {
  await page.goto("https://www.youtube.com/");
  await expect(page.getByRole("link", { name: "YouTube Home" })).toBeVisible();
  await page.getByRole("combobox", { name: "Search" }).click();
  await page.getByRole("combobox", { name: "Search" }).dblclick();
  await page.getByRole("combobox", { name: "Search" }).fill("mrbeast");
  await page.getByRole("combobox", { name: "Search" }).press("Enter");
  await page.getByRole("link", { name: "Subscribe", exact: true }).click();
  await expect(
    page.getByRole("textbox", { name: "Email or phone" })
  ).toBeEmpty();
  await expect(page.locator("#headingText")).toContainText("Sign in");
  await expect(page.locator("section")).toContainText("Forgot email?");
  await expect(
    page.getByRole("textbox", { name: "Email or phone" })
  ).toBeEmpty();
});
