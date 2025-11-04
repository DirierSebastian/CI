import { cambiarTexto } from "./app.js";

beforeEach(() => {
  // Simula HTML básico
  document.body.innerHTML = `
    <p id="texto">Texto original</p>
    <button id="btn">Cambiar</button>
  `;
});

test("Debe cambiar el texto correctamente", () => {
  const resultado = cambiarTexto("Nuevo texto");
  expect(document.getElementById("texto").textContent).toBe("Nuevo texto");
  expect(resultado).toBe("Nuevo texto");
});
