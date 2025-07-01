// @ts-check
const { test, expect } = require("@playwright/test");

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

var t = 500;
var defaultValue = [];

//CONSTRUCTOR
exports.FJ = class FJ {
  constructor(page) {
    this.page = page;
  }

  async open() {
    await this.page.goto("https://rodrigovillanueva.com.mx/");
  }

  async openURL(url, tiempo = t) {
    await this.page.goto(url);
    await sleep(tiempo);
  }

  async tiempo(tiempo) {
    await sleep(tiempo);
  }

  async scroll(x, y, tiempo = t) {
    await this.page.mouse.wheel(x, y);
    await sleep(tiempo);
  }

  async clickPractice2Link(selector, tiempo = t) {
    await this.page.getByText("Prácticas2").click();
  }

  async click(selector, tiempo = t) {
    await this.page.locator(selector).click();
    await sleep(tiempo);
  }

  async check(selector, tiempo = t) {
    await this.page.locator(selector).click();
    await sleep(tiempo);
  }

  async texto(selector, val, tiempo = t) {
    //await this.page.locator(selector, val, tiempo);
    await this.page.locator(selector).fill(val);
    await sleep(tiempo);
  }

  async submit(selector, tiempo = t) {
    await this.page.locator("button[type='submit']").click();
  }

  async validarTexto(selector, val, tiempo) {
    const locator = this.page.locator(selector);
    await expect(locator).toContainText(val);
    await sleep(tiempo);
  }

  async texto_val(selector, val, tiempo = t) {
    const locator = this.page.locator(selector);
    await expect(locator).toBeVisible();
    await expect(locator).toBeEnabled();
    await expect(locator).toBeEmpty();
    await this.page.locator(selector).fill(val);
    await sleep(tiempo);
  }

  async texto_try(selector, val, tiempo = t) {
    try {
      const locator = this.page.locator(selector);
      await expect(locator).toBeVisible();
      await expect(locator).toBeEnabled();
      await expect(locator).toBeEmpty();
      await this.page.locator(selector).fill(val);
      await sleep(tiempo);
    } catch (error) {
      console.log(`El campo ${selector} tiene un error`);
    }
  }

  async validarUrl(url, tiempo) {
    await expect(this.page).toHaveURL(url);
  }

  async validarUrlLigero(url, tiempo) {
    //ayuda a que no se detenga la validacion en este paso a pesar de marcar un error
    await expect.soft(this.page).toHaveURL(url);
  }

  async validarTitulo(title, tiempo) {
    await expect(this.page).toHaveTitle(title);
  }

  async valorCampo(selector, tiempo = t) {
    const value = await this.page.locator(selector).inputValue();
    await sleep(tiempo);
    return value;
  }

  async combo_value(selector, val, tiempo = t) {
    const cam = await this.page.locator(selector);
    await cam.selectOption(val);
    await sleep(tiempo);
  }

  async combo_label(selector, val, tiempo = t) {
    const cam = await this.page.locator(selector);
    await cam.selectOption({ label: val });
    await sleep(tiempo);
  }

  async combo_multiple(selector, arg = defaultValue, tiempo = t) {
    const cam = await this.page.locator(selector);
    await cam.selectOption(arg);
    await sleep(tiempo);
  }

  async mouse_over(selector, tiempo = t) {
    const sel = await this.page.locator(selector);
    await sel.hover();
    await sleep(tiempo);
  }

  async click_dinamico(texto, tiempo = t) {
    const sel = await this.page.getByRole("button", {
      name: texto,
      exact: true,
    });
    await sel.click();
    await sleep(tiempo);
  }

  async click_derecho_dinamico(texto, tiempo = t) {
    const sel = await this.page.getByRole("button", {
      name: texto,
      exact: true,
    });
    await sel.click({ button: "right" });
    await sleep(tiempo);
  }

  async dobleClick_dinamico(texto, tiempo = t) {
    const sel = await this.page.getByRole("button", {
      name: texto,
      exact: true,
    });
    await sel.dblclick();
    await sleep(tiempo);
  }

  async drag_drop(ori, des, tiempo = t) {
    const sel = await this.page.locator(ori).dragTo(this.page.locator(des));
    await sleep(tiempo);
  }

  async copiarInput(selector, tiempo = t) {
    const sel = await this.page.locator(selector);
    await sel.press("Control+A");
    await sel.press("Control+C");
    await sleep(tiempo);
  }

  async pegarInput(selector, tiempo = t) {
    const sel = await this.page.locator(selector);
    await sel.press("Control+V");
    await sleep(tiempo);
  }

  async copiarTexto(selector, pegar, tiempo = t) {
    const value = await this.page.locator(selector).allInnerTexts();
    const val2 = await this.page.locator(pegar);
    await val2.fill(value[0]);
    await sleep(tiempo);
  }

  async uploadFile(selector, archivo, tiempo = t) {
    const sel = await this.page.locator(selector);
    await sel.setInputFiles(archivo);
    await sleep(tiempo);
  }

  async removeFileUploaded(selector, tiempo = t) {
    const sel = await this.page.locator(selector);
    await sel.setInputFiles([]);
    await sleep(tiempo);
  }
};
