// @ts-check
import { test, expect } from "@playwright/test";

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

var tiempo = 1500;

test("test1", async ({ page }) => {
  await page.goto("https://demoqa.com/radio-button");
  await page.getByText("Yes").click();
  await sleep(tiempo);
  await page.getByText("Impressive").click();
  await sleep(tiempo);
});

test("test2", async ({ page }) => {
  await page.goto("https://demoqa.com/radio-button");
  await page.getByText("Yes").click();
  await sleep(tiempo);
  expect(await page.getByLabel("Yes").isChecked()).toBeTruthy();
  await page.getByText("Impressive").click();
  await sleep(tiempo);
  await page.getByText("Yes").click();
  await sleep(tiempo);
  await page.getByText("Impressive").click();
  await sleep(tiempo);
});
