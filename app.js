export function cambiarTexto(nuevoTexto = "Texto cambiado correctamente") {
  const texto = document.getElementById("texto");
  if (texto) texto.textContent = nuevoTexto;
  return nuevoTexto;
}

// Esperar a que el DOM esté listo
if (typeof window !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("btn");
    if (btn) {
      btn.addEventListener("click", () => {
        cambiarTexto("Cambiado por CI!");
      });
    } else {
      console.warn("⚠️ No se encontró el botón con id='btn'");
    }
  });
}
