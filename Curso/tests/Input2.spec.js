// @ts-check
import { test, expect } from "@playwright/test";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

test("test1", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.getByPlaceholder("Full Name").click();
  await page.getByPlaceholder("Full Name").fill("Luis");
  await page.getByPlaceholder("name@example.com").click();
  await page.getByPlaceholder("name@example.com").type("luis@test.com");
  await page.getByPlaceholder("Current Address").click();
  await page.getByPlaceholder("Current Address").fill("Direccion 1");
  await page.locator("#permanentAddress").click();
  await page.locator("#permanentAddress").fill("Direccion 2");
  //await page.getByRole("button", { name: "Submit" }).click({ timeout: 20000 });
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page).toHaveTitle(/DEMO/);
  await sleep(5000);
});

test("test2", async ({ page }) => {
  await page.goto("https://demoqa.com/text-box");
  await page.getByPlaceholder("Full Name").click();
  await page.getByPlaceholder("Full Name").fill("Luis");
  await page.getByPlaceholder("name@example.com").click();
  await page.getByPlaceholder("name@example.com").type("luis@test.com");
  await page.getByPlaceholder("Current Address").click();
  await page.getByPlaceholder("Current Address").fill("Direccion 1");
  await page.locator("#permanentAddress").click();
  await page.locator("#permanentAddress").fill("Direccion 2");
  //await page.getByRole("button", { name: "Submit" }).click({ timeout: 20000 });
  await page.getByRole("button", { name: "Submit" }).click();
  await expect(page).toHaveTitle(/DEMO/);
  await sleep(5000);
});
