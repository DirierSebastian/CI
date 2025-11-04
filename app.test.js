import { cambiarTexto } from './app.js';

// Prueba unitaria simple
test('sum simple check', () => {
  expect(2 + 3).toBe(5);
});

// Prueba de "integración" con DOM (Jest usa jsdom por defecto)
test('cambiarTexto actualiza el DOM', () => {
  // preparar DOM mínimo
  document.body.innerHTML = `<h1 id="title">Original</h1>`;
  const result = cambiarTexto('Nuevo texto');
  expect(result).toBe('Nuevo texto');
  expect(document.getElementById('title').textContent).toBe('Nuevo texto');
});
