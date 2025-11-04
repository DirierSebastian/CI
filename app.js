export function cambiarTexto(nuevoTexto) {
  const el = typeof document !== 'undefined' ? document.getElementById('title') : null;
  if (el) el.textContent = nuevoTexto;
  return nuevoTexto;
}

// Si se ejecuta en navegador, agrega listener
if (typeof window !== 'undefined') {
  document.getElementById('btn').addEventListener('click', () => {
    cambiarTexto('Cambiado por CI!');
  });
}
