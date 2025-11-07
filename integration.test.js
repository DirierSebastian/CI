/**
 * @jest-environment jsdom
 */
import { cambiarTexto } from "./app.js";

describe("Prueba de integración: botón y texto", () => {
  beforeEach(() => {
    // Simulamos el HTML
    document.body.innerHTML = `
      <p id="texto">Texto original</p>
      <button id="btn">Cambiar</button>
    `;

    // Conectamos el evento de clic al botón
    const btn = document.getElementById("btn");
    btn.addEventListener("click", () => cambiarTexto("Texto cambiado por integración"));
  });

  test("al hacer clic en el botón cambia el texto en el DOM", () => {
    // Simulamos clic en el botón
    document.getElementById("btn").click();

    // Verificamos que el texto cambió
    expect(document.getElementById("texto").textContent).toBe("Texto cambiado por integración");
  });
});
