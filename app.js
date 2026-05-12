const state = {
  lang:      localStorage.getItem('lang') || 'es',
  category:  'all',
  pricing:   'all',
  sort:      'default',
  favOnly:   false,
  search:    '',
  favorites: new Set(JSON.parse(localStorage.getItem('favorites') || '[]')),
  stackStep: 0,
  stackAnswers: {}
};

const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t = () => I18N[state.lang];

// =============================================
// FILTERING & SORTING
// =============================================
function filtered() {
  let arr = BOOKMARKS.filter(b => {
    const q = state.search.toLowerCase();
    return (state.category === 'all' || b.cat.includes(state.category)) &&
           (state.pricing  === 'all' || b.pricing === state.pricing) &&
           (!state.favOnly || state.favorites.has(b.url)) &&
           (!q || b.title.toLowerCase().includes(q) || b.desc[state.lang].toLowerCase().includes(q));
  });
  if (state.sort === 'az') arr.sort((a, b) => a.title.localeCompare(b.title));
  else if (state.sort === 'newest') arr.sort((a, b) => {
    if (!a.addedAt && !b.addedAt) return 0;
    if (!a.addedAt) return 1;
    if (!b.addedAt) return -1;
    return new Date(b.addedAt) - new Date(a.addedAt);
  });
  else if (state.sort === 'recommended') arr.sort((a, b) => (b.recommended ? 1 : 0) - (a.recommended ? 1 : 0));
  return arr;
}

function catCount(c) {
  return BOOKMARKS.filter(b =>
    (state.pricing === 'all' || b.pricing === state.pricing) &&
    (!state.favOnly || state.favorites.has(b.url)) &&
    (c === 'all' || b.cat.includes(c))
  ).length;
}
function priceCount(p) {
  return BOOKMARKS.filter(b =>
    (state.category === 'all' || b.cat.includes(state.category)) &&
    (!state.favOnly || state.favorites.has(b.url)) &&
    (p === 'all' || b.pricing === p)
  ).length;
}

function highlight(text) {
  if (!state.search) return text;
  const re = new RegExp(state.search.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`), 'gi');
  return text.replace(re, m => `<mark class="hl">${m}</mark>`);
}

// =============================================
// RENDER FUNCTIONS
// =============================================
function renderCategoryNav() {
  const cats = ['all', ...CATEGORIES];
  $('#categoryNav').innerHTML = cats.map(c => `
    <button class="nav-item${state.category === c ? ' active' : ''}" data-cat="${c}">
      <span class="glyph">${c === 'all' ? '*' : '›'}</span>
      <span>${t().cat[c]}</span>
      <span class="count">${catCount(c)}</span>
    </button>
  `).join('');
  $$('#categoryNav .nav-item').forEach(b => b.onclick = () => {
    state.category = b.dataset.cat;
    render();
  });
}

function renderPricingNav() {
  const prices = [
    { v: 'all',      glyph: '*' },
    { v: 'free',     glyph: '◦' },
    { v: 'freemium', glyph: '◌' }
  ];
  $('#pricingNav').innerHTML = prices.map(p => `
    <button class="nav-item${state.pricing === p.v ? ' active' : ''}" data-price="${p.v}">
      <span class="glyph">${p.glyph}</span>
      <span>${t().price[p.v]}</span>
      <span class="count">${priceCount(p.v)}</span>
    </button>
  `).join('');
  $$('#pricingNav .nav-item').forEach(b => b.onclick = () => {
    state.pricing = b.dataset.price;
    render();
  });
}

function renderSortMenu() {
  const opts = ['default', 'az', 'newest', 'recommended'];
  $('#sortMenu').innerHTML = opts.map(o => `
    <button class="sort-option${state.sort === o ? ' active' : ''}" data-sort="${o}">
      <span class="check">✓</span>
      ${t().sort[o]}
    </button>
  `).join('');
  $$('#sortMenu .sort-option').forEach(b => b.onclick = () => {
    state.sort = b.dataset.sort;
    $('#sortMenu').classList.remove('show');
    render();
  });
  $('#sortLabel').textContent = t().sort[state.sort];
}

function renderActiveFilters() {
  const chips = [];
  if (state.category !== 'all') chips.push({ k: 'cat',    label: t().cat[state.category] });
  if (state.pricing  !== 'all') chips.push({ k: 'price',  label: t().price[state.pricing] });
  if (state.favOnly)            chips.push({ k: 'fav',    label: '♥ ' + t().favorites });
  if (state.search)             chips.push({ k: 'search', label: `"${state.search}"` });
  $('#activeFilters').innerHTML = chips.map(c =>
    `<span class="chip">${c.label}<button class="x" data-k="${c.k}">×</button></span>`
  ).join('');
  $$('#activeFilters .x').forEach(x => x.onclick = () => {
    const k = x.dataset.k;
    if (k === 'cat')    state.category = 'all';
    if (k === 'price')  state.pricing  = 'all';
    if (k === 'fav')    state.favOnly  = false;
    if (k === 'search') { state.search = ''; $('#searchInput').value = ''; }
    render();
  });
}

function renderGrid() {
  const arr = filtered();
  $('#empty').style.display = arr.length ? 'none' : 'block';
  $('#grid').style.display  = arr.length ? 'grid' : 'none';
  if (!arr.length) {
    $('#emptyText').textContent = state.favOnly && !state.search
      ? '// ' + t().noFavorites
      : '// ' + t().noResults;
  }
  $('#grid').innerHTML = arr.map((b, i) => `
    <article class="card" style="animation-delay:${Math.min(i * 0.02, 0.2)}s">
      <div class="card-top">
        <img class="card-logo" src="${favicon(b.url)}" alt="" loading="lazy" onerror="this.style.visibility='hidden'">
        <div class="card-title-wrap">
          <div class="card-title">
            ${highlight(b.title)}
            ${b.recommended ? '<span class="star">★</span>' : ''}
          </div>
          <div class="card-url">${new URL(b.url).hostname.replace(/^www\./, '')}</div>
        </div>
        <button class="fav-btn${state.favorites.has(b.url) ? ' active' : ''}" data-url="${b.url}" aria-label="favorito">
          ${state.favorites.has(b.url) ? '♥' : '♡'}
        </button>
      </div>
      <p class="card-desc">${highlight(b.desc[state.lang])}</p>
      <div class="card-bottom">
        ${b.cat.slice(0, 2).map(c => `<span class="pill cat" data-cat="${c}">${t().cat[c]}</span>`).join('')}
        <span class="pill ${b.pricing}" data-price="${b.pricing}">${t().price[b.pricing]}</span>
        ${isNew(b.addedAt) ? `<span class="pill new">${t().newLabel}</span>` : ''}
        <a class="card-cta" href="${b.url}" target="_blank" rel="noopener noreferrer">${t().open} →</a>
      </div>
    </article>
  `).join('');

  $$('#grid .fav-btn').forEach(btn => btn.onclick = e => {
    e.stopPropagation();
    const u = btn.dataset.url;
    if (state.favorites.has(u)) state.favorites.delete(u);
    else state.favorites.add(u);
    localStorage.setItem('favorites', JSON.stringify([...state.favorites]));
    render();
  });
  $$('#grid .pill.cat').forEach(p => p.onclick = e => {
    e.stopPropagation(); state.category = p.dataset.cat; render();
  });
  $$('#grid .pill.free, #grid .pill.freemium').forEach(p => p.onclick = e => {
    e.stopPropagation(); state.pricing = p.dataset.price; render();
  });
}

function renderCounter() {
  const arr = filtered();
  $('#counter').textContent = `// ${arr.length} / ${BOOKMARKS.length} ${t().tools}`;
}

function renderFavToggle() {
  $('#favToggle').classList.toggle('active', state.favOnly);
  $('#lblFavs').textContent = t().favorites;
}

function renderLabels() {
  $('#searchInput').placeholder = t().search;
  $('#lblCategories').textContent     = t().categories;
  $('#lblPricing').textContent        = t().pricing;
  $('#lblFavs').textContent           = t().favorites;
  $('#lblStack').textContent          = t().buildStack;
  $('#lblSuggest').textContent        = t().suggest;
  $('#footerText').textContent        = t().footer;
  $('#pageTitle').textContent         = t().title;
  $('#pageSub').textContent           = t().subtitle;
  document.documentElement.lang      = state.lang;
}

function render() {
  renderLabels();
  renderCategoryNav();
  renderPricingNav();
  renderSortMenu();
  renderActiveFilters();
  renderFavToggle();
  renderGrid();
  renderCounter();
}

// =============================================
// TOPBAR EVENTS
// =============================================
$('#sortBtn').onclick = e => { e.stopPropagation(); $('#sortMenu').classList.toggle('show'); };
document.addEventListener('click', () => $('#sortMenu').classList.remove('show'));
$('#favToggle').onclick = () => { state.favOnly = !state.favOnly; render(); };

// =============================================
// LANGUAGE
// =============================================
$$('.lang-btn').forEach(b => b.onclick = () => {
  $$('.lang-btn').forEach(x => x.classList.toggle('active', x === b));
  state.lang = b.dataset.lang;
  localStorage.setItem('lang', state.lang);
  render();
});

// =============================================
// SUGGEST BUTTON
// =============================================
$('#suggestBtn').onclick = () => {
  const titles = {
    es: 'Sugerir: [Nombre de la herramienta]',
    en: 'Suggest: [Tool name]',
    eu: 'Iradoki: [Tresnaren izena]'
  };
  const bodies = {
    es: `## Herramienta sugerida\n\n**Nombre:**\n\n**URL:**\n\n**Categoría:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation, ragstack, privacy)\n\n**Precio:** (free / freemium)\n\n**Descripción corta:**\n\n---\nGracias por tu sugerencia!`,
    en: `## Suggested tool\n\n**Name:**\n\n**URL:**\n\n**Category:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation, ragstack, privacy)\n\n**Pricing:** (free / freemium)\n\n**Short description:**\n\n---\nThanks for your suggestion!`,
    eu: `## Iradokitako tresna\n\n**Izena:**\n\n**URL:**\n\n**Kategoria:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation, ragstack, privacy)\n\n**Prezioa:** (free / freemium)\n\n**Deskribapen laburra:**\n\n---\nEskerrik asko zure iradokizunagatik!`
  };
  const title = encodeURIComponent(titles[state.lang]);
  const body  = encodeURIComponent(bodies[state.lang]);
  window.open(`https://github.com/iamLudok/ai-bookmarks/issues/new?title=${title}&body=${body}&labels=suggestion`, '_blank');
};

$('#searchInput').addEventListener('input', e => {
  state.search = e.target.value;
  renderGrid();
  renderCounter();
  renderActiveFilters();
});

// =============================================
// STACK BUILDER
// =============================================
const STACK_STEPS = [
  { key: 'usecase', q: 'qUsecase', dict: 'uc', opts: [
    { v: 'content' }, { v: 'code' }, { v: 'automate' },
    { v: 'research' }, { v: 'present' }, { v: 'travel' }, { v: 'privacy' }
  ]},
  { key: 'pricing', q: 'qPricing', dict: 'pp', opts: [{ v: 'free' }, { v: 'any' }] },
  { key: 'level',   q: 'qLevel',   dict: 'lvl', opts: [{ v: 'basic' }, { v: 'advanced' }] }
];

function openStack() {
  state.stackStep = 0;
  state.stackAnswers = {};
  renderStack();
  $('#stackPanel').classList.add('show');
  $('#stackBackdrop').classList.add('show');
  resetInactivity();
}
function closeStack() {
  $('#stackPanel').classList.remove('show');
  $('#stackBackdrop').classList.remove('show');
}

function renderStack() {
  const step = STACK_STEPS[state.stackStep];
  $('#stackBack').style.visibility = state.stackStep === 0 ? 'hidden' : 'visible';
  $$('#stackProgress .step').forEach((el, i) => {
    el.classList.toggle('done',    i < state.stackStep);
    el.classList.toggle('current', i === state.stackStep);
  });
  $('#stackProgressLabel').textContent = `// ${Math.min(state.stackStep + 1, 3)} / 3`;

  if (state.stackStep < STACK_STEPS.length) {
    $('#stackBody').innerHTML = `
      <div class="stack-step-label">step ${state.stackStep + 1} / ${STACK_STEPS.length}</div>
      <div class="stack-question">${t()[step.q]}</div>
      <div class="stack-opts">
        ${step.opts.map(o => `
          <button class="stack-opt" data-key="${step.key}" data-val="${o.v}">
            <span>${t()[step.dict][o.v]}</span>
            <span class="o-arrow">→</span>
          </button>
        `).join('')}
      </div>
    `;
    $$('#stackBody .stack-opt').forEach(b => b.onclick = () => {
      state.stackAnswers[b.dataset.key] = b.dataset.val;
      state.stackStep++;
      renderStack();
    });
  } else {
    const cats  = USE_CASE_CATS[state.stackAnswers.usecase] || [];
    const tools = BOOKMARKS.filter(b => {
      const catMatch   = b.cat.some(c => cats.includes(c));
      const priceMatch = state.stackAnswers.pricing === 'any' || b.pricing === 'free';
      const levelMatch = state.stackAnswers.level === 'advanced' || !b.cat.includes('ragstack');
      return catMatch && priceMatch && levelMatch;
    }).slice(0, 6);

    $('#stackBody').innerHTML = `
      <div class="stack-step-label">${t().stackResult}</div>
      <div class="stack-question" style="margin-bottom:14px">${tools.length} ${t().tools}</div>
      ${tools.length === 0
        ? `<p style="color:var(--text-muted);font-size:13px;font-family:var(--font-mono)">${t().stackEmpty}</p>`
        : tools.map(b => `
          <a class="stack-result-tool" href="${b.url}" target="_blank" rel="noopener noreferrer">
            <img src="${favicon(b.url, 32)}" alt="" onerror="this.style.visibility='hidden'">
            <div class="t-info">
              <div class="t-name">${b.title}</div>
              <div class="t-desc">${b.desc[state.lang]}</div>
            </div>
            <span class="t-arrow">↗</span>
          </a>
        `).join('')}
      <button class="sub-action" id="stackRestart" style="margin-top:16px">↺ ${t().stackRestart}</button>
    `;
    $('#stackRestart').onclick = () => { state.stackStep = 0; state.stackAnswers = {}; renderStack(); };
    $$('#stackProgress .step').forEach(el => el.classList.add('done'));
  }
}

$('#stackBtn').onclick     = openStack;
$('#stackClose').onclick   = closeStack;
$('#stackBackdrop').onclick = closeStack;
$('#stackBack').onclick    = () => { if (state.stackStep > 0) { state.stackStep--; renderStack(); } };

// =============================================
// KEYBOARD SHORTCUTS
// =============================================
document.addEventListener('keydown', e => {
  const stackOpen = $('#stackPanel').classList.contains('show');

  if (e.key === 'Escape') {
    if (stackOpen) { closeStack(); return; }
    if (screensaverActive) { stopScreensaver(); return; }
    if (state.search) {
      state.search = '';
      $('#searchInput').value = '';
      renderGrid();
      renderCounter();
      renderActiveFilters();
    }
  }
});

// =============================================
// SCREENSAVER
// =============================================
let inactivityTimer  = null;
let screensaverActive = false;
let screensaverRAF   = null;

function startScreensaver() {
  screensaverActive = true;
  const el = $('#screensaver');
  el.style.display = 'block';

  const logos = BOOKMARKS.map(b => {
    const img = document.createElement('img');
    img.src = favicon(b.url);
    img.className = 'screensaver-logo';
    img.alt = b.title;
    const size = 40;
    const x = Math.random() * (window.innerWidth - size);
    const y = Math.random() * (window.innerHeight - size);
    const speed = 1.2 + Math.random() * 1.2;
    const angle = Math.random() * 2 * Math.PI;
    img._x = x; img._y = y;
    img._vx = Math.cos(angle) * speed;
    img._vy = Math.sin(angle) * speed;
    img._size = size;
    img.style.cssText = `left:${x}px;top:${y}px;`;
    el.appendChild(img);
    return img;
  });

  function animate() {
    if (!screensaverActive) return;
    const W = window.innerWidth, H = window.innerHeight;
    logos.forEach(img => {
      img._x += img._vx;
      img._y += img._vy;
      if (img._x <= 0 || img._x + img._size >= W) { img._vx *= -1; img._x = Math.max(0, Math.min(W - img._size, img._x)); }
      if (img._y <= 0 || img._y + img._size >= H) { img._vy *= -1; img._y = Math.max(0, Math.min(H - img._size, img._y)); }
      img.style.left = img._x + 'px';
      img.style.top  = img._y + 'px';
    });
    screensaverRAF = requestAnimationFrame(animate);
  }
  animate();
}

function stopScreensaver() {
  if (!screensaverActive) return;
  screensaverActive = false;
  cancelAnimationFrame(screensaverRAF);
  const el = $('#screensaver');
  el.style.display = 'none';
  el.querySelectorAll('img').forEach(img => img.remove());
}

function resetInactivity() {
  if (screensaverActive) { stopScreensaver(); return; }
  clearTimeout(inactivityTimer);
  if (!$('#stackPanel').classList.contains('show')) {
    inactivityTimer = setTimeout(startScreensaver, 300000);
  }
}

['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'].forEach(evt =>
  document.addEventListener(evt, resetInactivity, { passive: true })
);


// =============================================
// INIT
// =============================================
$$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === state.lang));
resetInactivity();
render();
