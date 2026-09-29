
// =========================================
// RAIZA — LOOP INFINITO CONTROLADO POR SCROLL
// =========================================

(() => {
  const viewport = document.querySelector(".gallery-viewport");
  const track = document.querySelector(".masonry-track");
  const source = track?.querySelector(".masonry");

  if (!viewport || !track || !source) return;

  const templates = Array.from(
    source.querySelectorAll(".masonry-item")
  ).map(item => item.cloneNode(true));

  let firstSet = null;
  let secondSet = null;

  let loopDistance = 0;
  let position = 0;
  let buildVersion = 0;

  // Ajusta la sensibilidad del desplazamiento.
  const scrollSensitivity = 1;

  // Determinar el número de columnas.
  function getColumnCount() {
    const width = window.innerWidth;

    if (width <= 700) return 2;
    if (width <= 900) return 3;
    if (width <= 1200) return 4;

    return 5;
  }

  // Crear el contenedor del mosaico.
  function createMasonry() {
    const masonry = document.createElement("div");
    masonry.className = "masonry masonry-copy";

    const columns = [];

    for (let i = 0; i < getColumnCount(); i++) {
      const column = document.createElement("div");
      column.className = "masonry-column";
      masonry.appendChild(column);
      columns.push(column);
    }

    // Colocar temporalmente todas las imágenes en la primera columna.
    templates.forEach(template => {
      columns[0].appendChild(template.cloneNode(true));
    });

    return { masonry, columns };
  }

  // Esperar a que las imágenes estén cargadas.
  function waitForImages(container) {
    const images = Array.from(container.querySelectorAll("img"));

    return Promise.all(
      images.map(img => {
        if (img.complete) return Promise.resolve();

        return new Promise(resolve => {
          img.addEventListener("load", resolve, { once: true });
          img.addEventListener("error", resolve, { once: true });
        });
      })
    );
  }

  // Repartir las imágenes buscando equilibrar las alturas.
  function balanceColumns(columns) {
    const items = Array.from(columns[0].children);

    // Vaciar las columnas antes de repartir.
    columns.forEach(column => column.replaceChildren());

    items.forEach(item => {
      let shortest = columns[0];

      for (const column of columns) {
        if (column.getBoundingClientRect().height <
            shortest.getBoundingClientRect().height) {
          shortest = column;
        }
      }

      shortest.appendChild(item);
    });
  }

  // Detener una construcción anterior y crear el mosaico.
  async function build() {
    const version = ++buildVersion;

    position = 0;
    loopDistance = 0;
    track.style.transform = "translate3d(0, 0, 0)";
    track.replaceChildren();

    const result = createMasonry();
    firstSet = result.masonry;

    track.appendChild(firstSet);

    await waitForImages(firstSet);

    // Ignorar procesos anteriores si hubo otro cambio de tamaño.
    if (version !== buildVersion) return;
    if (!track.contains(firstSet)) return;

    // Distribuir las fotografías según la altura real.
    balanceColumns(result.columns);

    // Esperar al siguiente ciclo de renderizado para medir.
    requestAnimationFrame(() => {
      if (version !== buildVersion) return;

      // Crear una copia idéntica para el loop.
      secondSet = firstSet.cloneNode(true);
      secondSet.setAttribute("aria-hidden", "true");

      secondSet.querySelectorAll("img").forEach(img => {
        img.alt = "";
      });

      track.appendChild(secondSet);

      loopDistance = firstSet.getBoundingClientRect().height;

      if (loopDistance <= 0) return;

      // Mantener la posición inicial.
      position = 0;
      updatePosition();
    });
  }

  // Mantener el desplazamiento dentro de una copia.
  function normalizePosition() {
    if (!loopDistance) return;

    position = ((position % loopDistance) + loopDistance) % loopDistance;
  }

  // Aplicar el desplazamiento sin mover la página.
  function updatePosition() {
    normalizePosition();

    track.style.transform =
      `translate3d(0, ${-position}px, 0)`;
  }

  // Capturar la rueda únicamente dentro de la galería.
  viewport.addEventListener("wheel", event => {
    if (!loopDistance) return;

    event.preventDefault();

    let delta = event.deltaY;

    // Convertir desplazamientos expresados en líneas o páginas.
    if (event.deltaMode === 1) {
      delta *= 16;
    } else if (event.deltaMode === 2) {
      delta *= viewport.clientHeight;
    }

    position += delta * scrollSensitivity;
    updatePosition();
  }, { passive: false });

  // Reconstruir al cambiar el ancho de pantalla.
  let resizeTimer;

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);

    resizeTimer = setTimeout(() => {
      build();
    }, 200);
  });

  // Iniciar.
  build();
})();