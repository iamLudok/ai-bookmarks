const CATEGORIES = ['general', 'code', 'webdev', 'image', 'music', 'video', 'voice', 'humanizer', 'allinone', 'presentations', 'travel', 'automation', 'ragstack'];

const i18n = {
    es: {
        title: "Marcadores de IA",
        subtitle: "Mi selección de herramientas de IA gratuitas o freemium. Probadas y recomendadas.",
        search: "Buscar marcadores...",
        noResults: "No se encontraron marcadores que coincidan con tu búsqueda.",
        visit: "Visitar sitio",
        footer: "Marcadores de IA - 2026 | made by iamLudok",
        suggest: "sugerir herramienta",
        resultsCounter: "Mostrando {filtered} de {total} herramientas",
        cat: { all: "Todos", general: "General", code: "Código", webdev: "Desarrollo Web", image: "Imagen", music: "Música", video: "Video", voice: "Voz", humanizer: "Humanizador", allinone: "Muchos en uno", presentations: "Presentaciones", travel: "Viajes", automation: "Automatizaciones", ragstack: "RAG Stack" },
        pricing: { free: "Gratis", freemium: "Limitado" },
        recommended: "Recomendado",
        buildStack: "arma tu stack"
    },
    en: {
        title: "AI Bookmarks",
        subtitle: "My selection of free or freemium AI tools. Tested and recommended.",
        search: "Search bookmarks...",
        noResults: "No bookmarks found matching your search.",
        visit: "Visit site",
        footer: "AI Bookmarks - 2026 | made by iamLudok",
        suggest: "suggest tool",
        resultsCounter: "Showing {filtered} of {total} tools",
        cat: { all: "All", general: "General", code: "Code", webdev: "Web Development", image: "Image", music: "Music", video: "Video", voice: "Voice", humanizer: "Humanizer", allinone: "Many in one", presentations: "Presentations", travel: "Travel", automation: "Automation", ragstack: "RAG Stack" },
        pricing: { free: "Free", freemium: "Limited" },
        recommended: "Recommended",
        buildStack: "build your stack"
    },
    eu: {
        title: "AA Laster-markak",
        subtitle: "Nire AA tresna doako edo freemium hautapena. Probatutakoak eta gomendatuak.",
        search: "Laster-markak bilatu...",
        noResults: "Ez da zure bilaketarekin bat datorren laster-markarik aurkitu.",
        visit: "Gunea bisitatu",
        footer: "AA Laster-markak - 2026 | made by iamLudok",
        suggest: "tresna iradoki",
        resultsCounter: "{filtered} erakusten {total}-(e)tik",
        cat: { all: "Denak", general: "Orokorra", code: "Kodea", webdev: "Web Garapena", image: "Irudia", music: "Musika", video: "Bideoa", voice: "Ahotsa", humanizer: "Humanizatzailea", allinone: "Asko batean", presentations: "Aurkezpenak", travel: "Bidaiak", automation: "Automatizazioak", ragstack: "RAG Stack" },
        pricing: { free: "Doakoa", freemium: "Mugatua" },
        recommended: "Gomendatua",
        buildStack: "zure stack-a eraiki"
    }
};

const bookmarks = [
    { title: "ChatGPT", url: "https://chat.openai.com", cat: ["general"], pricing: "freemium", desc: { es: "El clásico. Perfecto para cualquier cosa: escribir, investigar, resolver dudas. El más versátil.", en: "The classic. Perfect for anything: writing, research, solving questions. The most versatile.", eu: "Klasikoa. Edozer gauzetarako ezin hobea: idatzi, ikertu, zalantzak argitu. Polifazetikoena." }},
    { title: "Perplexity", url: "https://perplexity.ai", cat: ["general"], pricing: "freemium", desc: { es: "Como Google pero te da la respuesta directa con fuentes. Ideal para investigar rápido.", en: "Like Google but gives you the direct answer with sources. Ideal for quick research.", eu: "Google bezala baina erantzun zuzena ematen dizu ituriekin. Azkar ikertzeko aproposa." }},
    { title: "NotebookLM", url: "https://notebooklm.google/", cat: ["general"], pricing: "free", desc: { es: "El asistente de Google para investigar. Sube PDFs, webs o textos y te genera resúmenes, respuestas y hasta podcasts.", en: "Google's research assistant. Upload PDFs, websites or texts and it generates summaries, answers and even podcasts.", eu: "Googleren ikerketa-laguntzailea. Igo PDFak, webak edo testuak eta laburpenak, erantzunak eta baita podcastak ere sortzen dizkizu." }},
    { title: "Claude", url: "https://claude.ai", cat: ["code"], pricing: "freemium", recommended: true, desc: { es: "Mi favorito para programar. Entiende el contexto mejor que nadie y no se pierde en proyectos grandes.", en: "My favorite for coding. Understands context better than anyone and doesn't get lost in big projects.", eu: "Nire gogokoena programatzeko. Testuingurua inork baino hobeto ulertzen du eta ez da galtzen proiektu handietan." }},
    { title: "Opencode", url: "https://opencode.ai", cat: ["code"], pricing: "free", desc: { es: "Agente de código en terminal. Open source y con soporte para múltiples modelos de IA.", en: "Terminal-based coding agent. Open source with support for multiple AI models.", eu: "Kode-agentea terminalean. Kode irekia eta AA eredu anitzentzako euskarriarekin." }},
    { title: "Lovable", url: "https://lovable.dev", cat: ["webdev"], pricing: "freemium", desc: { es: "El más fácil para empezar. En minutos tienes algo funcional y bonito sin tocar código.", en: "In minutes you have something functional and beautiful without touching code.", eu: "Hasteko errazena. Minututan zerbait funtzionala eta polita duzu koderik ukitu gabe." }},
    { title: "Bubble", url: "https://bubble.io", cat: ["webdev"], pricing: "freemium", desc: { es: "Más complejo pero muy potente. Para apps serias sin saber programar.", en: "More complex but very powerful. For serious apps without knowing how to code.", eu: "Konplexuagoa baina oso indartsua. App serioetarako programatzen jakin gabe." }},
    { title: "v0", url: "https://v0.dev", cat: ["webdev"], pricing: "freemium", desc: { es: "Mi favorito para crear aplicaciones mediante lenguaje natural.", en: "My favorite for creating applications using natural language.", eu: "Nire gogokoena aplikazioak hizkuntza naturalaren bidez sortzeko." }},
    { title: "Bolt", url: "https://bolt.new", cat: ["webdev"], pricing: "freemium", desc: { es: "Rápido para prototipos. Se queda corto en proyectos grandes pero para empezar va genial.", en: "Fast for prototypes. Falls short on big projects but great for starting out.", eu: "Azkarra prototipoetarako. Proiektu handietan motz geratzen da baina hasteko bikaina." }},
    { title: "Replit", url: "https://replit.com", cat: ["webdev"], pricing: "freemium", desc: { es: "Una de las mejores herramientas para vibe coding cuando lo que buscas no es perfección técnica inmediata, sino fluidez, ritmo y ganas de crear.", en: "One of the best tools for vibe coding when what you seek is not immediate technical perfection, but flow, rhythm, and the desire to create.", eu: "Vibe coding-erako tresnarik onenetakoa, perfekzio teknikoa baino jariakortasuna, erritmoa eta sortzeko gogoa bilatzen duzunean." }},
    { title: "Make", url: "https://www.make.com", cat: ["automation"], pricing: "freemium", desc: { es: "Automatiza flujos de trabajo conectando apps sin código. Ideal para integrar servicios y crear procesos automáticos.", en: "Automate workflows by connecting apps without code. Ideal for integrating services and creating automatic processes.", eu: "Lan-fluxuak automatizatzen ditu appak koderik gabe konektatuz. Zerbitzuak integratzeko eta prozesu automatikoak sortzeko aproposa." }},
    { title: "Zapier", url: "https://zapier.com", cat: ["automation"], pricing: "freemium", desc: { es: "El veterano de las automatizaciones. Conecta miles de apps y crea flujos automáticos en minutos.", en: "The veteran of automation. Connect thousands of apps and create automatic workflows in minutes.", eu: "Automatizazioen beteranoa. Milaka app konektatzen ditu eta fluxu automatikoak sortzen minututan." }},
    { title: "N8N", url: "https://n8n.io", cat: ["automation"], pricing: "freemium", desc: { es: "Automatización open source y self-hosteable. Flujos visuales con lógica avanzada y cientos de integraciones.", en: "Open source and self-hostable automation. Visual workflows with advanced logic and hundreds of integrations.", eu: "Automatizazio kode irekia eta self-hosteable. Fluxu bisualak logika aurreratuarekin eta ehunka integraziorekin." }},
    { title: "Napkin", url: "https://app.napkin.ai", cat: ["image"], pricing: "freemium", desc: { es: "Convierte texto en diagramas e infografías automáticamente. Perfecto para visualizar ideas rápidamente.", en: "Converts text into diagrams and infographics automatically. Perfect for visualizing ideas quickly.", eu: "Testua diagrama eta infografietan bihurtzen du automatikoki. Ideiak azkar bistaratzeko ezin hobea." }},
    { title: "Suno", url: "https://suno.ai", cat: ["music"], pricing: "freemium", desc: { es: "Creas canciones completas con solo describirlas. Los resultados sorprenden bastante.", en: "Create complete songs just by describing them. The results are quite surprising.", eu: "Abesti osoak sortzen dituzu deskribatzearekin soilik. Emaitzek nahiko harritu egiten dute." }},
    { title: "Udio", url: "https://udio.com", cat: ["music"], pricing: "freemium", desc: { es: "Alternativa a Suno con mejor calidad de audio según algunos. Vale la pena probarlo.", en: "Alternative to Suno with better audio quality according to some. Worth trying.", eu: "Sunoren alternatiba audio kalitate hobearekin batzuen arabera. Probatzea merezi du." }},
    { title: "Runway", url: "https://runwayml.com", cat: ["video"], pricing: "freemium", desc: { es: "El más conocido para video. Efectos visuales impresionantes y fácil de usar.", en: "The most well-known for video. Impressive visual effects and easy to use.", eu: "Bideorako ezagunena. Efektu bisual ikusgarriak eta erraz erabiltzekoa." }},
    { title: "Pika", url: "https://pika.art", cat: ["video"], pricing: "freemium", desc: { es: "Videos cortos con estilo más artístico. Bueno para contenido creativo y diferente.", en: "Short videos with a more artistic style. Good for creative and different content.", eu: "Bideo laburrak estilo artistikoagoarekin. Eduki sortzaile eta ezberdinerako ona." }},
    { title: "Narakeet", url: "https://narakeet.com", cat: ["video", "voice"], pricing: "freemium", recommended: true, desc: { es: "Voces muy naturales en muchos idiomas. Lo uso para narrar videos sin grabar.", en: "Very natural voices in many languages. I use it to narrate videos without recording.", eu: "Ahots oso naturalak hizkuntza askotan. Bideoak grabatu gabe kontatzeko erabiltzen dut." }},
    { title: "ElevenLabs", url: "https://elevenlabs.io", cat: ["voice", "music"], pricing: "freemium", desc: { es: "La mejor calidad de voz sintética. Clona voces, genera audio hiperrealista, crea canciones y efectos de sonido.", en: "The best synthetic voice quality. Clone voices, generate hyperrealistic audio, create songs and sound effects.", eu: "Ahots sintetikoaren kalitaterik onena. Ahotsak klonatzen ditu, audio hiperrealista sortzen, abestiak eta soinu-efektuak sortzen." }},
    { title: "Tenorshare AI", url: "https://ai.tenorshare.com/products/ai-bypass", cat: ["humanizer"], pricing: "freemium", desc: { es: "Hace que textos de IA pasen desapercibidos. Útil si necesitas que suene más natural.", en: "Makes AI texts go unnoticed. Useful if you need it to sound more natural.", eu: "AA testuak oharkabean pasarazten ditu. Baliagarria naturalago entzun behar bada." }},
    { title: "Genspark", url: "https://www.genspark.ai/", cat: ["allinone"], pricing: "freemium", desc: { es: "Motor de búsqueda con IA que combina múltiples LLMs. Su Super Agent automatiza tareas complejas: crea slides, documentos, e incluso hace llamadas por ti.", en: "AI search engine combining multiple LLMs. Its Super Agent automates complex tasks: creates slides, documents, and even makes phone calls for you.", eu: "LLM anitz konbinatzen dituen AA bilaketa-motorra. Bere Super Agentek ataza konplexuak automatizatzen ditu: diapositibak, dokumentuak sortzen ditu, eta baita deiak egiten ere zuretzat." }},
    { title: "ChatHub", url: "https://app.chathub.gg/", cat: ["allinone"], pricing: "free", desc: { es: "Todos los modelos en un solo lugar. Perfecto para comparar respuestas lado a lado.", en: "All models in one place. Perfect for comparing responses side by side.", eu: "Eredu guztiak toki bakarrean. Erantzunak elkarren ondoan konparatzeko ezin hobea." }},
    { title: "LMArena", url: "https://lmarena.ai", cat: ["allinone"], pricing: "free", desc: { es: "Pruebas a ciegas entre modelos. Interesante para ver cuál prefieres sin saber cuál es cuál.", en: "Blind tests between models. Interesting to see which one you prefer without knowing which is which.", eu: "Ereduen arteko proba itsuak. Interesgarria zein nahiago duzun ikusteko zein den zein jakin gabe." }},
    { title: "Google AI Studio", url: "https://aistudio.google.com", cat: ["allinone"], pricing: "free", desc: { es: "Herramienta oficial de Google para usar sus modelos de IA como Gemini o Nano Banana.", en: "Google's official tool to use their AI models like Gemini or Nano Banana.", eu: "Googleren tresna ofiziala bere AA ereduak erabiltzeko, hala nola Gemini edo Nano Banana." }},
    { title: "HuggingFace Spaces", url: "https://huggingface.co/spaces", cat: ["allinone"], pricing: "free", desc: { es: "Miles de modelos para probar gratis. El playground definitivo para explorar IA.", en: "Thousands of models to try for free. The ultimate playground for exploring AI.", eu: "Milaka eredu doan probatzeko. AA esploratzeko jolasleku definitiboa." }},
    { title: "Gamma", url: "https://gamma.app", cat: ["presentations"], pricing: "freemium", desc: { es: "Presentaciones en segundos. Le dices el tema y te genera algo presentable al instante.", en: "Presentations in seconds. You tell it the topic and it generates something presentable instantly.", eu: "Aurkezpenak segundotan. Gaia esaten diozu eta berehala zerbait aurkezgarria sortzen du." }},
    { title: "Visme", url: "https://visme.co", cat: ["presentations"], pricing: "freemium", desc: { es: "Más control sobre el diseño que Gamma. Para cuando quieres algo más personalizado.", en: "More control over design than Gamma. For when you want something more customized.", eu: "Gammak baino kontrol gehiago diseinuan. Zerbait pertsonalizatuagoa nahi duzunerako." }},
    { title: "PPT", url: "https://ppt.ai/", cat: ["presentations"], pricing: "freemium", desc: { es: "Storytelling visual con IA. Crea presentaciones narrativas con un estilo moderno y atractivo.", en: "Visual storytelling with AI. Create narrative presentations with a modern and attractive style.", eu: "Storytelling bisuala AArekin. Aurkezpen narratiboak sortzen ditu estilo moderno eta erakargarriarekin." }},
    { title: "Vacay Chatbot", url: "https://usevacay.com", cat: ["travel"], pricing: "free", desc: { es: "Te arma itinerarios completos en segundos. Sorprendentemente útil para planificar.", en: "Builds complete itineraries in seconds. Surprisingly useful for planning.", eu: "Ibilbide osoak segundotan prestatzen dizkizu. Harrigarriro baliagarria planifikatzeko." }},
    { title: "GuideGeek", url: "https://guidegeek.com", cat: ["travel"], pricing: "free", desc: { es: "Como tener un guía local que te responde cualquier duda sobre tu destino.", en: "Like having a local guide who answers any question about your destination.", eu: "Bertako gida bat izatea bezala, zure helmugari buruzko edozein zalantza erantzuten dizuna." }},
    { title: "Curiosio", url: "https://curiosio.com", cat: ["travel"], pricing: "free", desc: { es: "Especializado en road trips. Te sugiere rutas alternativas y lugares que no conocías.", en: "Specialized in road trips. Suggests alternative routes and places you didn't know.", eu: "Road trip-etan espezializatua. Ibilbide alternatiboak eta ezagutzen ez zenituen lekuak iradokitzen dizkizu." }},
    { title: "LangChain", url: "https://www.langchain.com/", cat: ["ragstack"], pricing: "free", desc: { es: "Framework open source para construir aplicaciones con LLMs. Conecta modelos, herramientas y datos para crear agentes y flujos de IA.", en: "Open source framework for building applications with LLMs. Connect models, tools and data to create AI agents and workflows.", eu: "LLMekin aplikazioak eraikitzeko kode irekiko frameworka. Ereduak, tresnak eta datuak konektatzen ditu AA agenteak eta lan-fluxuak sortzeko." }},
    { title: "LangSmith", url: "https://smith.langchain.com/", cat: ["ragstack"], pricing: "freemium", desc: { es: "Plataforma para evaluar, monitorizar y depurar aplicaciones con LLMs. Imprescindible para medir la calidad de tus agentes.", en: "Platform for evaluating, monitoring and debugging LLM applications. Essential for measuring the quality of your agents.", eu: "LLM aplikazioak ebaluatu, monitorizatu eta arazteko plataforma. Ezinbestekoa zure agenteen kalitatea neurtzeko." }},
    { title: "CrewAI", url: "https://www.crewai.com/", cat: ["ragstack"], pricing: "freemium", desc: { es: "Framework para crear equipos de agentes de IA que colaboran entre sí. Define roles, tareas y flujos para resolver problemas complejos.", en: "Framework for creating teams of AI agents that collaborate with each other. Define roles, tasks and workflows to solve complex problems.", eu: "Elkarrekin lankidetzan aritzen diren AA agente taldeak sortzeko frameworka. Rolak, atazak eta lan-fluxuak definitzen ditu arazo konplexuak ebazteko." }},
    { title: "Gemini", url: "https://gemini.google.com/app", cat: ["general"], pricing: "freemium", desc: { es: "El asistente de Google. Potente para investigar, escribir y razonar. Integrado con el ecosistema Google.", en: "Google's assistant. Powerful for research, writing and reasoning. Integrated with the Google ecosystem.", eu: "Googleren laguntzailea. Indartsua ikertzeko, idazteko eta arrazoitzeko. Google ekosistemarekin integratua." }},
    { title: "GitHub Copilot", url: "https://github.com/features/copilot", cat: ["code"], pricing: "freemium", desc: { es: "El copiloto de GitHub para programar. Autocompletado inteligente y sugerencias de código directamente en tu editor.", en: "GitHub's coding copilot. Smart autocompletion and code suggestions directly in your editor.", eu: "GitHuben kode-kopilotua. Autoosaketa adimentsua eta kode-iradokizunak zuzenean zure editorean." }},
    { title: "Veed", url: "https://www.veed.io/", cat: ["video"], pricing: "freemium", desc: { es: "Editor de video online con IA. Subtítulos automáticos, recortes y efectos sin instalar nada.", en: "Online video editor with AI. Automatic subtitles, trimming and effects without installing anything.", eu: "Lineako bideo-editorea AArekin. Azpitituluak automatikoak, mozteak eta efektuak ezer instalatu gabe." }},
    { title: "HeyGen", url: "https://app.heygen.com/", cat: ["video"], pricing: "freemium", desc: { es: "Crea videos con avatares realistas que hablan por ti. Ideal para presentaciones, formación y contenido sin ponerte delante de la cámara.", en: "Create videos with realistic avatars that speak for you. Ideal for presentations, training and content without being on camera.", eu: "Zuretzat hitz egiten duten avatar errealistekin bideoak sortzen ditu. Aurkezpenetarako, prestakuntzarako eta kameraren aurrean jarri gabe edukia sortzeko aproposa." }}
];

let lang = localStorage.getItem('lang') || 'es', category = 'all', search = '';
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t = () => i18n[lang];

function highlight(text, term) {
    if (!term) return text;
    const escaped = term.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
    return text.replaceAll(new RegExp(escaped, 'gi'), m => `<mark class="search-hl">${m}</mark>`);
}

function render() {
    const filtered = bookmarks.filter(b =>
        (category === 'all' || b.cat.includes(category)) &&
        (b.title.toLowerCase().includes(search) || b.desc[lang].toLowerCase().includes(search))
    );

    const grid = $('#bookmarksGrid');
    const noRes = $('#noResults');

    grid.style.display = filtered.length ? 'grid' : 'none';
    noRes.style.display = filtered.length ? 'none' : 'block';

    // Markadorien kontadori
    const counter = $('#resultsCounter');
    counter.textContent = t().resultsCounter
        .replace('{filtered}', filtered.length)
        .replace('{total}', bookmarks.length);
    counter.style.display = filtered.length ? 'block' : 'none';

    grid.innerHTML = filtered.map((b, i) => `
        <div class="bookmark-card" style="animation-delay:${i * 0.1}s">
            <div class="bookmark-header">
                <div>
                    <div class="bookmark-tags">
                        ${b.cat.map(c => `<span class="bookmark-category" data-cat="${c}">${t().cat[c]}</span>`).join('')}
                        <span class="bookmark-pricing ${b.pricing}">${t().pricing[b.pricing]}</span>
                    </div>
                    <h3 class="bookmark-title">${b.title}</h3>
                </div>
                <img class="bookmark-logo" src="https://www.google.com/s2/favicons?domain=${new URL(b.url).hostname}&sz=64" alt="${b.title}">
            </div>
            <p class="bookmark-description">${highlight(b.desc[lang], search)}</p>
            <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="bookmark-link">${t().visit}</a>
            ${b.recommended ? `<span class="bookmark-recommended">⭐ ${t().recommended}</span>` : ''}
        </div>
    `).join('');

    $$('.bookmark-category').forEach(el => el.addEventListener('click', () => filterByCategory(el.dataset.cat)));
}

function updateUI() {
    $('h1').textContent = t().title;
    $('.subtitle').textContent = t().subtitle;
    $('#searchInput').placeholder = t().search;
    $('#noResults').textContent = t().noResults;
    $('footer p').textContent = t().footer;
    $('[data-i18n="suggest"]').textContent = t().suggest;
    $('[data-i18n="buildStack"]').textContent = t().buildStack;
    document.documentElement.lang = lang;
    $$('.category-btn').forEach(btn => {
        const c = btn.dataset.category;
        btn.innerHTML = `${t().cat[c]}<span class="cat-count">${catCount(c)}</span>`;
    });
    render();
}

function filterByCategory(cat) {
    category = cat;
    $$('.category-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
    render();
}

function catCount(c) {
    return c === 'all' ? bookmarks.length : bookmarks.filter(b => b.cat.includes(c)).length;
}

function initCategories() {
    const cats = ['all', ...CATEGORIES];
    $('#categories').innerHTML = cats.map(c =>
        `<button class="category-btn${c === 'all' ? ' active' : ''}" data-category="${c}">${t().cat[c]}<span class="cat-count">${catCount(c)}</span></button>`
    ).join('');
    $$('.category-btn').forEach(btn => btn.addEventListener('click', () => filterByCategory(btn.dataset.category)));
}

$('#searchInput').addEventListener('input', e => { search = e.target.value.toLowerCase(); render(); });

$$('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    lang = btn.dataset.lang;
    localStorage.setItem('lang', lang);
    initCategories();
    updateUI();
}));

// Sugerentzixen botoie
$('#suggestBtn').addEventListener('click', () => {
    const titles = {
        es: 'Sugerir: [Nombre de la herramienta]',
        en: 'Suggest: [Tool name]',
        eu: 'Iradoki: [Tresnaren izena]'
    };
    const bodies = {
        es: `## Herramienta sugerida

**Nombre:**

**URL:**

**Categoría:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation, ragstack)

**Precio:** (free / freemium)

**Descripción corta:**

---
Gracias por tu sugerencia! 🙌`,
        en: `## Suggested tool

**Name:**

**URL:**

**Category:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation, ragstack)

**Pricing:** (free / freemium)

**Short description:**

---
Thanks for your suggestion! 🙌`,
        eu: `## Iradokitako tresna

**Izena:**

**URL:**

**Kategoria:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation, ragstack)

**Prezioa:** (free / freemium)

**Deskribapen laburra:**

---
Eskerrik asko zure iradokizunagatik! 🙌`
    };
    const title = encodeURIComponent(titles[lang]);
    const body = encodeURIComponent(bodies[lang]);
    window.open(`https://github.com/iamLudok/ai-bookmarks/issues/new?title=${title}&body=${body}&labels=suggestion`, '_blank');
});

// =============================================
// SCREENSAVER
// =============================================
let inactivityTimer = null;
let screensaverActive = false;
let screensaverRAF = null;

function startScreensaver() {
    screensaverActive = true;
    const el = $('#screensaver');
    el.style.display = 'block';

    const logos = bookmarks.map(b => {
        const img = document.createElement('img');
        img.src = `https://www.google.com/s2/favicons?domain=${new URL(b.url).hostname}&sz=64`;
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
    if (!$('#stackModal').classList.contains('show')) {
        inactivityTimer = setTimeout(startScreensaver, 30000);
    }
}

['mousemove', 'mousedown', 'keydown', 'touchstart', 'scroll', 'click'].forEach(evt =>
    document.addEventListener(evt, resetInactivity, { passive: true })
);
resetInactivity();

// =============================================
// STACK BUILDER
// =============================================
const STACK_Q = {
    es: {
        steps: [
            { key: 'usecase', label: '¿Qué quieres hacer?', opts: [
                { val: 'content',  label: 'Crear contenido (video, imagen, música)' },
                { val: 'code',     label: 'Programar o hacer webs' },
                { val: 'automate', label: 'Automatizar tareas' },
                { val: 'research', label: 'Investigar o aprender' },
                { val: 'present',  label: 'Crear presentaciones' },
                { val: 'travel',   label: 'Planificar viajes' },
            ]},
            { key: 'pricing', label: '¿Qué precio te va?', opts: [
                { val: 'free', label: 'Solo herramientas gratuitas' },
                { val: 'any',  label: 'Freemium también me vale' },
            ]},
            { key: 'level', label: '¿Cuánto sabes de tecnología?', opts: [
                { val: 'basic',    label: 'Lo básico' },
                { val: 'advanced', label: 'Me manejo bien' },
            ]},
        ],
        result: 'tu stack:',
        reset: 'empezar de nuevo', notools: 'Ninguna herramienta coincide con los filtros.',
    },
    en: {
        steps: [
            { key: 'usecase', label: 'What do you want to do?', opts: [
                { val: 'content',  label: 'Create content (video, image, music)' },
                { val: 'code',     label: 'Code or build websites' },
                { val: 'automate', label: 'Automate tasks' },
                { val: 'research', label: 'Research or learn' },
                { val: 'present',  label: 'Create presentations' },
                { val: 'travel',   label: 'Plan trips' },
            ]},
            { key: 'pricing', label: 'What pricing works for you?', opts: [
                { val: 'free', label: 'Free tools only' },
                { val: 'any',  label: 'Freemium is fine too' },
            ]},
            { key: 'level', label: 'How tech-savvy are you?', opts: [
                { val: 'basic',    label: 'Basic level' },
                { val: 'advanced', label: 'Pretty comfortable' },
            ]},
        ],
        result: 'your stack:',
        reset: 'start over', notools: 'No tools match your filters.',
    },
    eu: {
        steps: [
            { key: 'usecase', label: 'Zer egin nahi duzu?', opts: [
                { val: 'content',  label: 'Edukia sortu (bideoa, irudia, musika)' },
                { val: 'code',     label: 'Programatu edo webak eraiki' },
                { val: 'automate', label: 'Atazak automatizatu' },
                { val: 'research', label: 'Ikertu edo ikasi' },
                { val: 'present',  label: 'Aurkezpenak sortu' },
                { val: 'travel',   label: 'Bidaiak planifikatu' },
            ]},
            { key: 'pricing', label: 'Zer prezio nahiago duzu?', opts: [
                { val: 'free', label: 'Tresna doakoak soilik' },
                { val: 'any',  label: 'Freemium ere ondo' },
            ]},
            { key: 'level', label: 'Zenbat dakizu teknologiaz?', opts: [
                { val: 'basic',    label: 'Oinarrizko maila' },
                { val: 'advanced', label: 'Ondo moldatzen naiz' },
            ]},
        ],
        result: 'zure stack-a:',
        reset: 'berriro hasi', notools: 'Ez dago filtro guztiak betetzen dituen tresnarik.',
    },
};

const USE_CASE_CATS = {
    content:  ['image', 'video', 'music', 'voice'],
    code:     ['code', 'webdev'],
    automate: ['automation', 'ragstack'],
    research: ['general', 'allinone'],
    present:  ['presentations'],
    travel:   ['travel'],
};

let stackAnswers = {};

function getStackRecommendations() {
    const cats = USE_CASE_CATS[stackAnswers.usecase] || [];
    return bookmarks.filter(b => {
        const catMatch  = b.cat.some(c => cats.includes(c));
        const priceMatch = stackAnswers.pricing === 'any' || b.pricing === 'free';
        const levelMatch = stackAnswers.level === 'advanced' || !b.cat.includes('ragstack');
        return catMatch && priceMatch && levelMatch;
    }).slice(0, 4);
}

function renderStack() {
    const body  = $('#stackBody');
    const q     = STACK_Q[lang];
    let html    = '';

    for (const step of q.steps) {
        html += `<p class="stack-prompt">&gt; ${step.label}</p>`;
        if (stackAnswers[step.key]) {
            const chosen = step.opts.find(o => o.val === stackAnswers[step.key]);
            html += `<p class="stack-answer">${chosen.label}</p>`;
        } else {
            html += `<div class="stack-options">`;
            step.opts.forEach(o => {
                html += `<button class="stack-option" data-key="${step.key}" data-val="${o.val}">${o.label}</button>`;
            });
            html += `</div>`;
            body.innerHTML = html;
            $$('.stack-option').forEach(btn => btn.addEventListener('click', () => {
                stackAnswers[btn.dataset.key] = btn.dataset.val;
                renderStack();
                body.scrollTop = body.scrollHeight;
            }));
            return;
        }
    }

    // All answered → show results
    const tools = getStackRecommendations();
    html += `<p class="stack-prompt">&gt; ${q.result}</p>`;
    if (tools.length) {
        tools.forEach(tb => {
            html += `
            <div class="stack-tool">
                <img src="https://www.google.com/s2/favicons?domain=${new URL(tb.url).hostname}&sz=32" class="stack-tool-logo" alt="${tb.title}">
                <div class="stack-tool-info">
                    <span class="stack-tool-name">${tb.title}</span>
                    <span class="stack-tool-desc">${tb.desc[lang]}</span>
                </div>
            </div>`;
        });
    } else {
        html += `<p class="stack-no-tools">${q.notools}</p>`;
    }
    html += `<button class="stack-reset-btn" id="stackResetBtn">&gt; ${q.reset}</button>`;
    body.innerHTML = html;
    body.scrollTop = body.scrollHeight;

    $('#stackResetBtn').addEventListener('click', () => { stackAnswers = {}; renderStack(); });
}

$('#stackBtn').addEventListener('click', () => {
    stackAnswers = {};
    renderStack();
    $('#stackModal').classList.add('show');
    resetInactivity();
});
$('#stackClose').addEventListener('click', () => $('#stackModal').classList.remove('show'));
$('#stackModal').addEventListener('click', e => { if (e.target === $('#stackModal')) $('#stackModal').classList.remove('show'); });

document.addEventListener('keydown', e => {
    const input = $('#searchInput');
    if (e.key === 'Escape') {
        if ($('#stackModal').classList.contains('show')) { $('#stackModal').classList.remove('show'); return; }
        if (document.activeElement === input) { input.value = ''; search = ''; input.blur(); render(); }
    }
    if (e.key === '/' && document.activeElement !== input && !$('#stackModal').classList.contains('show')) {
        e.preventDefault();
        input.focus();
    }
});

$$('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
initCategories();
updateUI();
