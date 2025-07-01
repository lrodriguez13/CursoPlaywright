// @ts-check
const { test, expect } = require("@playwright/test");
const { FJ } = require("./Funciones_curso");

const tp = 1000;
const archivo = "C:/Playwright_JavaScript/Curso/tests/archivos/test.txt";
test("Combox unitario", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL(
    "https://validaciones.rodrigovillanueva.com.mx/ComboBox_ok.html"
  );
  await f.combo_value("#os", "Linux");
  await f.combo_label("#os", "Windows");
  await f.combo_label("#os", "Mac");
});

test("Combox multiple", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/select-menu");
  await page.locator("#selectMenuContainer svg").nth(2).click();
  await page.locator("#react-select-4-option-0").click();
  await page.locator("#react-select-4-option-1").click();
  await page.locator("#react-select-4-option-3").click();
  await page.locator("#react-select-4-option-2").click();
  /*await f.combo_value("#os", "Linux");
  await f.combo_label("#os", "Windows");
  await f.combo_label("#os", "Mac");*/
});

test("Combox multiple dos", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/select-menu");
  await f.combo_multiple("#cars", ["volvo", "audi", "opel"], tp);
});

test("Opciones Hover", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://playwright.dev/docs/codegen");
  await f.mouse_over(
    "//a[contains(@class, 'navbar__link') and  contains(text(),'Node.js')]"
  );
  await f.tiempo(3000);
  await f.click(
    "//a[contains(@class, 'dropdown__link') and  contains(text(),'Python')]"
  );
});

test("Cilck Dinamico", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/buttons");
  await f.click_dinamico("Click Me");
});

test("Cilck Derecho", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/buttons");
  await f.click_derecho_dinamico("Right Click Me", 1000);
});

test("Double Click", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/buttons");
  await f.dobleClick_dinamico("Double Click Me", 1000);
});

test("Drag and Drop", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/droppable");
  await f.drag_drop(
    "#draggable",
    "//div[@id='simpleDropContainer']//div[@id='droppable' and contains(@class, 'ui-droppable')]",
    1000
  );
});

test("Copiar y pegar", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.texto("#firstName", "Luis");
  await f.copiarInput("#firstName");
  await f.pegarInput("#lastName");
});

test("Copiar texto", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.copiarTexto("#userName-label", "#firstName");
});

test("UploadFile", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.scroll(0, 500);
  await f.uploadFile("#uploadPicture", archivo);
  await f.tiempo(2000);
  await f.removeFileUploaded("#uploadPicture");
});

test("Calendario", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.scroll(0, 300);
  /*await f.click("#dateOfBirthInput");
  await f.click(
    "//div[@class='react-datepicker__day react-datepicker__day--017']"
  );*/
  //POR TEXTO
  await f.texto("#dateOfBirthInput", "June 18, 2025");
  await page.keyboard.press("Enter");
});
