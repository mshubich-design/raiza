// Slider: JS-driven column masonry + infinite vertical loop
(function(){
  const track = document.querySelector('.masonry-track');
  const source = document.querySelector('.masonry');
  if(!track || !source) return;

  // gather templates from the initial markup (.masonry .masonry-item)
  const templates = Array.from(source.querySelectorAll('.masonry-item')).map(el => el.outerHTML);

  // remove original source content (we'll render dynamically)
  source.remove();

  let halfHeight = 0;
  let ticking = false;
  let currentCols = 0;

  function getCols(){
    const w = window.innerWidth;
    if(w >= 1200) return 5;
    if(w >= 900) return 4;
    if(w >= 600) return 3;
    return 2;
  }

  function build(columns){
    // clear track
    track.innerHTML = '';

    // create the first masonry set
    const first = document.createElement('div');
    first.className = 'masonry';
    const cols = [];
    for(let i=0;i<columns;i++){
      const c = document.createElement('div');
      c.className = 'masonry-column';
      first.appendChild(c);
      cols.push(c);
    }

    // distribute items to the shortest column for balanced layout
    templates.forEach(html => {
      const wrapper = document.createElement('div');
      wrapper.innerHTML = html;
      const item = wrapper.firstElementChild;
      // choose shortest
      let target = cols[0];
      for(let c of cols){
        if(c.scrollHeight < target.scrollHeight) target = c;
      }
      target.appendChild(item);
    });

    // clone to create seamless loop
    const second = first.cloneNode(true);
    first.classList.add('masonry-copy');
    second.classList.add('masonry-copy');
    track.appendChild(first);
    track.appendChild(second);

    // recalc sizes
    recalc();
  }

  function recalc(){
    // half of the track height is used to loop
    halfHeight = track.scrollHeight / 2;
  }

  function onScroll(){
    if(!ticking){
      window.requestAnimationFrame(()=>{
        const sc = window.scrollY || window.pageYOffset;
        if(halfHeight && sc >= halfHeight){
          window.scrollTo(0, sc - halfHeight);
        } else if(halfHeight && sc <= 0){
          window.scrollTo(0, sc + halfHeight);
        }
        ticking = false;
      });
      ticking = true;
    }
  }

  function debounce(fn, wait){
    let t;
    return function(...args){
      clearTimeout(t);
      t = setTimeout(()=>fn.apply(this,args), wait);
    };
  }

  // wait until all source images are loaded before initial layout
  const imgs = Array.from(templates).map(html => {
    const div = document.createElement('div'); div.innerHTML = html;
    return div.querySelector('img');
  }).filter(Boolean);

  Promise.all(imgs.map(img => new Promise(res => {
    if(img.complete) return res();
    img.addEventListener('load', res); img.addEventListener('error', res);
  }))).then(()=>{
    // initial render
    currentCols = getCols();
    build(currentCols);
    // small offset to avoid 0-edge case
    if(window.scrollY === 0) window.scrollTo(0,1);

    window.addEventListener('scroll', onScroll, {passive:true});
    window.addEventListener('resize', debounce(()=>{
      const cols = getCols();
      if(cols !== currentCols){
        currentCols = cols;
        build(currentCols);
        if(window.scrollY === 0) window.scrollTo(0,1);
      } else {
        // sizes changed (font/image scaling) — recalc
        recalc();
      }
    }, 200));
  });

})();
