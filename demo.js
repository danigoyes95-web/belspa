/* Franja de demo y botón "Sugerir un cambio" (envía a tu WhatsApp, no al de la clienta). */
(function () {
  const pagina = document.body.dataset.pagina;
  const secciones = JSON.parse(document.body.dataset.secciones || '["General"]');
  const barra = document.createElement('div');
  barra.className = 'demo-barra';
  barra.innerHTML = '<div class="wrap"><span>Demo preparada para ' + DEMO.cliente + ' · datos de ejemplo</span>' +
    '<nav aria-label="Páginas de la demo">' +
    '<a href="index.html"' + (pagina === 'landing' ? ' aria-current="page"' : '') + '>Landing</a>' +
    '<a href="premium.html"' + (pagina === 'premium' ? ' aria-current="page"' : '') + '>Versión Premium</a>' +
    '<a href="propuesta.html"' + (pagina === 'propuesta' ? ' aria-current="page"' : '') + '>Propuesta</a></nav></div>';
  document.body.prepend(barra);

  const btn = document.createElement('button');
  btn.type = 'button'; btn.className = 'sugerir'; btn.textContent = 'Sugerir un cambio';
  const dlg = document.createElement('dialog');
  dlg.className = 'sug';
  dlg.setAttribute('aria-labelledby', 'sug-t');
  dlg.innerHTML = '<form method="dialog"><h2 id="sug-t" class="serif" style="font-size:26px">¿Qué te gustaría cambiar?</h2>' +
    '<label>Sección<select name="sec">' + secciones.map(s => '<option>' + s + '</option>').join('') + '<option>Otra</option></select></label>' +
    '<label>Tu comentario<textarea name="txt" required placeholder="Ej.: cambiar la foto principal por una de la cabina"></textarea></label>' +
    '<div class="fila-btn"><button class="btn btn-lleno" value="enviar">Enviar por WhatsApp</button><button class="btn btn-borde" value="cancelar" formnovalidate>Cancelar</button></div></form>';
  document.body.append(btn, dlg);
  btn.addEventListener('click', () => dlg.showModal());
  dlg.addEventListener('close', () => {
    const f = dlg.querySelector('form');
    if (dlg.returnValue === 'enviar' && f.txt.value.trim()) {
      const msg = 'Demo ' + DEMO.cliente + ' · Página: ' + pagina + ' · Sección: ' + f.sec.value + ' · Cambio: ' + f.txt.value.trim();
      window.open(wa(DEMO.waAgencia, msg), '_blank', 'noopener');
    }
    f.reset();
  });

  // Enlaces de WhatsApp de la clienta: data-wa="mensaje"
  document.querySelectorAll('[data-wa]').forEach(a => { a.href = wa(DEMO.waCliente, a.dataset.wa); a.target = '_blank'; a.rel = 'noopener'; });
})();
