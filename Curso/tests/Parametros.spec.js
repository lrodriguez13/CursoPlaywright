// @ts-check
const { test, expect } = require("@playwright/test");
const { FJ } = require("./Funciones_curso");
import dotenv from "dotenv";
import xlsx from "node-xlsx";

const tp = 2000;
const archivo = "C:/Playwright_JavaScript/Curso/tests/archivos/test.txt";
const datos = [
  "Luis",
  "Rodriguez",
  "luis@test.com",
  "6532513610",
  "Direccion Uno",
  "Female",
];

//Mando a llamar el archivo .env
dotenv.config();

test("Parametros uno", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://validaciones.rodrigovillanueva.com.mx/Form1.html");
  await f.texto_val("#nombre", `${datos[0]}`);
  await f.texto_val("#apellidos", `${datos[1]}`);
  await f.texto_val("#tel", `${datos[3]}`);
  await f.texto_val("#email", `${datos[2]}`);
  await f.texto_val("#direccion", `${datos[4]}`);
});

test("Parametros dos", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.texto_val("#firstName", `${datos[0]}`);
  await f.texto_val("#lastName", `${datos[1]}`);
  await f.texto_val("#userNumber", `${datos[3]}`);
  await f.texto_val("#userEmail", `${datos[2]}`);
  await f.texto_val("#currentAddress", `${datos[4]}`);
  if (`${datos[5]}`.toUpperCase() == "MALE") {
    await f.click("//label[contains(@for, 'gender-radio-1')]");
  } else if (`${datos[5]}`.toUpperCase() == "FEMALE") {
    await f.click("//label[contains(@for, 'gender-radio-2')]");
  } else if (`${datos[5]}`.toUpperCase() == "OTHER") {
    await f.click("//label[contains(@for, 'gender-radio-3')]");
  } else {
    console.log("Ninguna opcion es valida");
  }
});

test("Variables de ambiente", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  await f.openURL("https://demoqa.com/automation-practice-form");
  await f.texto_val("#firstName", process.env.NOMBRE);
  await f.texto_val("#lastName", process.env.APELLIDO);
  await f.texto_val("#userNumber", process.env.TELEFONO);
  await f.texto_val("#userEmail", process.env.EMAIL);
  await f.texto_val("#currentAddress", process.env.DIRECCION);
});

//LEER DESDE EXCEL
var XL = require("xlsx");
var libro = XL.readFile("Data.xlsx");
let datos_xl = libro.SheetNames;
console.log(datos_xl);

const hoja = datos_xl[0];
const excel = XL.utils.sheet_to_json(libro.Sheets[hoja]);
/*for (const fila of excel) {
  console.log(fila["nombre"]);
  console.log(fila["apellido"]);
  console.log(fila["tel"]);
  console.log(fila["email"]);
  console.log(fila["direccion"]);
}*/

test("Data Excel", async ({ page }) => {
  page.setDefaultTimeout(8000);
  const f = new FJ(page);
  for (const fila of excel) {
    await f.openURL("https://demoqa.com/automation-practice-form");
    await f.texto_val("#firstName", fila["nombre"], tp);
    await f.texto_val("#lastName", fila["apellido"], tp);
    await f.texto_val("#userNumber", fila["tel"].toString(), tp);
    await f.texto_val("#userEmail", fila["email"], tp);
    await f.texto_val("#currentAddress", fila["direccion"], tp);
  }
});
