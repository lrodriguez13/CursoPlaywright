// @ts-check
const { test, expect } = require("@playwright/test");
const { FJ } = require("./Funciones_curso");

var myArray = ["ABD", "123", "9995630014", "502014896045"];
var randomPhone = myArray[(Math.random() * myArray.length) | 0];
console.log(randomPhone);

test("Demo POM", async ({ page }) => {
  const f = new FJ(page);
  //await f.open();
  await f.openURL("https://rodrigovillanueva.com.mx/");
  //await f.scroll(0, 500);
  await f.tiempo(3000);
  await f.clickPractice2Link();
  await f.tiempo(3000);
  await f.validarUrlLigero(
    "https://validaciones.rodrigovillanueva.com.mx/index.html"
  );
  await f.validarTitulo("Formulario de Ejemplo");
  await f.texto_try("#nombre", "Alejandro");
  const valor = await f.valorCampo("#nombre");
  if (valor === "Luis") {
    await f.texto_try("#apellidos", "Medina");
  } else if (valor === "Ana") {
    await f.texto_try("#apellidos", "Rodriguez");
  } else {
    await f.texto_try("#apellidos", "Unknown lastName");
  }
  //await f.texto("#apellidos", "Rodriguez Test");
  await f.texto("#tel", randomPhone);
  await f.texto_try("#email", "luis@test.com");
  await f.texto("#direccion", "Direccion1");
  await f.submit();
  await f.validarTexto(
    "#flashMessage",
    "El formulario se ha enviado correctamente."
  );
});
