/* Configuración de la demo. Cambia solo estos valores. Formato: 593 + número sin el 0 inicial. */
window.DEMO = {
  waCliente: '593XXXXXXXXX',   // WhatsApp de Belén: reciben los botones de la landing
  waAgencia: '593YYYYYYYYY',   // Tu WhatsApp: recibe las sugerencias de cambio
  cliente: 'Belén Alvarez Centro Estético & Spa'
};
window.wa = (numero, texto) => 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);
