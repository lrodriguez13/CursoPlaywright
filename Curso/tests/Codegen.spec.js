// @ts-check
import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.getByRole("textbox", { name: "Full Name" }).click();
  await page.getByRole("textbox", { name: "Full Name" }).fill("Luis");
  await page.getByRole("textbox", { name: "name@example.com" }).click();
  await page
    .getByRole("textbox", { name: "name@example.com" })
    .fill("luis@test.com");
  await page.getByRole("textbox", { name: "name@example.com" }).press("Tab");
  await page
    .getByRole("textbox", { name: "Current Address" })
    .fill("demo de la direccion 1");
  await page.locator("#permanentAddress").click();
  await page.locator("#permanentAddress").fill("Demo de la direccion 2");
  await page.getByRole("button", { name: "Submit" }).click();
});
