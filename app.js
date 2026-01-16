const CATEGORIES = ['general', 'code', 'webdev', 'image', 'music', 'video', 'voice', 'humanizer', 'allinone', 'presentations', 'travel', 'automation'];

const i18n = {
    es: {
        title: "Marcadores de IA",
        subtitle: "Mi selección de herramientas de IA gratuitas o freemium. Probadas y recomendadas.",
        search: "Buscar marcadores...",
        noResults: "No se encontraron marcadores que coincidan con tu búsqueda.",
        visit: "Visitar sitio",
        footer: "Marcadores de IA - 2026 | made by iamLudok",
        suggest: "Sugerir herramienta",
        resultsCounter: "Mostrando {filtered} de {total} herramientas",
        cat: { all: "Todos", general: "General", code: "Código", webdev: "Desarrollo Web", image: "Imagen", music: "Música", video: "Video", voice: "Voz", humanizer: "Humanizador", allinone: "Muchos en uno", presentations: "Presentaciones", travel: "Viajes", automation: "Automatizaciones" },
        pricing: { free: "Gratis", freemium: "Limitado" }
    },
    en: {
        title: "AI Bookmarks",
        subtitle: "My selection of free or freemium AI tools. Tested and recommended.",
        search: "Search bookmarks...",
        noResults: "No bookmarks found matching your search.",
        visit: "Visit site",
        footer: "AI Bookmarks - 2026 | made by iamLudok",
        suggest: "Suggest tool",
        resultsCounter: "Showing {filtered} of {total} tools",
        cat: { all: "All", general: "General", code: "Code", webdev: "Web Development", image: "Image", music: "Music", video: "Video", voice: "Voice", humanizer: "Humanizer", allinone: "Many in one", presentations: "Presentations", travel: "Travel", automation: "Automation" },
        pricing: { free: "Free", freemium: "Limited" }
    }
};

const bookmarks = [
    { title: "ChatGPT", url: "https://chat.openai.com", cat: ["general"], pricing: "freemium", desc: { es: "El clásico. Perfecto para cualquier cosa: escribir, investigar, resolver dudas. El más versátil.", en: "The classic. Perfect for anything: writing, research, solving questions. The most versatile." }},
    { title: "Perplexity", url: "https://perplexity.ai", cat: ["general"], pricing: "freemium", desc: { es: "Como Google pero te da la respuesta directa con fuentes. Ideal para investigar rápido.", en: "Like Google but gives you the direct answer with sources. Ideal for quick research." }},
    { title: "NotebookLM", url: "https://notebooklm.google/", cat: ["general"], pricing: "free", desc: { es: "El asistente de Google para investigar. Sube PDFs, webs o textos y te genera resúmenes, respuestas y hasta podcasts.", en: "Google's research assistant. Upload PDFs, websites or texts and it generates summaries, answers and even podcasts." }},
    { title: "Claude", url: "https://claude.ai", cat: ["code"], pricing: "freemium", desc: { es: "Mi favorito para programar. Entiende el contexto mejor que nadie y no se pierde en proyectos grandes.", en: "My favorite for coding. Understands context better than anyone and doesn't get lost in big projects." }},
    { title: "Lovable", url: "https://lovable.dev", cat: ["webdev"], pricing: "freemium", desc: { es: "El más fácil para empezar. En minutos tienes algo funcional y bonito sin tocar código.", en: "In minutes you have something functional and beautiful without touching code." }},
    { title: "Bubble", url: "https://bubble.io", cat: ["webdev"], pricing: "freemium", desc: { es: "Más complejo pero muy potente. Para apps serias sin saber programar.", en: "More complex but very powerful. For serious apps without knowing how to code." }},
    { title: "v0", url: "https://v0.dev", cat: ["webdev"], pricing: "freemium", desc: { es: "Mi favorito para crear aplicaciones mediante lenguaje natural.", en: "My favorite for creating applications using natural language." }},
    { title: "Bolt", url: "https://bolt.new", cat: ["webdev"], pricing: "freemium", desc: { es: "Rápido para prototipos. Se queda corto en proyectos grandes pero para empezar va genial.", en: "Fast for prototypes. Falls short on big projects but great for starting out." }},
    { title: "Replit", url: "https://replit.com", cat: ["webdev"], pricing: "freemium", desc: { es: "Una de las mejores herramientas para vibe coding cuando lo que buscas no es perfección técnica inmediata, sino fluidez, ritmo y ganas de crear.", en: "One of the best tools for vibe coding when what you seek is not immediate technical perfection, but flow, rhythm, and the desire to create." }},
    { title: "Make", url: "https://www.make.com", cat: ["automation"], pricing: "freemium", desc: { es: "Automatiza flujos de trabajo conectando apps sin código. Ideal para integrar servicios y crear procesos automáticos.", en: "Automate workflows by connecting apps without code. Ideal for integrating services and creating automatic processes." }},
    { title: "Zapier", url: "https://zapier.com", cat: ["automation"], pricing: "freemium", desc: { es: "El veterano de las automatizaciones. Conecta miles de apps y crea flujos automáticos en minutos.", en: "The veteran of automation. Connect thousands of apps and create automatic workflows in minutes." }},
    { title: "Napkin", url: "https://app.napkin.ai", cat: ["image"], pricing: "freemium", desc: { es: "Convierte texto en diagramas e infografías automáticamente. Perfecto para visualizar ideas rápidamente.", en: "Converts text into diagrams and infographics automatically. Perfect for visualizing ideas quickly." }},
    { title: "Sora", url: "https://openai.com/sora", cat: ["image", "video"], pricing: "freemium", desc: { es: "El de OpenAI. Calidad brutal en imágenes y videos hiperrealistas. La calidad es increíble aunque el acceso es limitado.", en: "OpenAI's one. Brutal quality in realistic images and hyperrealistic videos. Quality is incredible although access is limited." }},
    { title: "Suno", url: "https://suno.ai", cat: ["music"], pricing: "freemium", desc: { es: "Creas canciones completas con solo describirlas. Los resultados sorprenden bastante.", en: "Create complete songs just by describing them. The results are quite surprising." }},
    { title: "Udio", url: "https://udio.com", cat: ["music"], pricing: "freemium", desc: { es: "Alternativa a Suno con mejor calidad de audio según algunos. Vale la pena probarlo.", en: "Alternative to Suno with better audio quality according to some. Worth trying." }},
    { title: "Runway", url: "https://runwayml.com", cat: ["video"], pricing: "freemium", desc: { es: "El más conocido para video. Efectos visuales impresionantes y fácil de usar.", en: "The most well-known for video. Impressive visual effects and easy to use." }},
    { title: "Pika", url: "https://pika.art", cat: ["video"], pricing: "freemium", desc: { es: "Videos cortos con estilo más artístico. Bueno para contenido creativo y diferente.", en: "Short videos with a more artistic style. Good for creative and different content." }},
    { title: "Narakeet", url: "https://narakeet.com", cat: ["video", "voice"], pricing: "freemium", desc: { es: "Voces muy naturales en muchos idiomas. Lo uso para narrar videos sin grabar.", en: "Very natural voices in many languages. I use it to narrate videos without recording." }},
    { title: "ElevenLabs", url: "https://elevenlabs.io", cat: ["voice", "music"], pricing: "freemium", desc: { es: "La mejor calidad de voz sintética. Clona voces, genera audio hiperrealista, crea canciones y efectos de sonido.", en: "The best synthetic voice quality. Clone voices, generate hyperrealistic audio, create songs and sound effects." }},
    { title: "Tenorshare AI", url: "https://ai.tenorshare.com/products/ai-bypass", cat: ["humanizer"], pricing: "freemium", desc: { es: "Hace que textos de IA pasen desapercibidos. Útil si necesitas que suene más natural.", en: "Makes AI texts go unnoticed. Useful if you need it to sound more natural." }},
    { title: "ChatHub", url: "https://app.chathub.gg/", cat: ["allinone"], pricing: "free", desc: { es: "Todos los modelos en un solo lugar. Perfecto para comparar respuestas lado a lado.", en: "All models in one place. Perfect for comparing responses side by side." }},
    { title: "LMArena", url: "https://lmarena.ai", cat: ["allinone"], pricing: "free", desc: { es: "Pruebas a ciegas entre modelos. Interesante para ver cuál prefieres sin saber cuál es cuál.", en: "Blind tests between models. Interesting to see which one you prefer without knowing which is which." }},
    { title: "Google AI Studio", url: "https://aistudio.google.com", cat: ["allinone"], pricing: "free", desc: { es: "Herramienta oficial de Google para usar sus modelos de IA como Gemini o Nano Banana.", en: "Google's official tool to use their AI models like Gemini or Nano Banana." }},
    { title: "HuggingFace Spaces", url: "https://huggingface.co/spaces", cat: ["allinone"], pricing: "free", desc: { es: "Miles de modelos para probar gratis. El playground definitivo para explorar IA.", en: "Thousands of models to try for free. The ultimate playground for exploring AI." }},
    { title: "Gamma", url: "https://gamma.app", cat: ["presentations"], pricing: "freemium", desc: { es: "Presentaciones en segundos. Le dices el tema y te genera algo presentable al instante.", en: "Presentations in seconds. You tell it the topic and it generates something presentable instantly." }},
    { title: "Visme", url: "https://visme.co", cat: ["presentations"], pricing: "freemium", desc: { es: "Más control sobre el diseño que Gamma. Para cuando quieres algo más personalizado.", en: "More control over design than Gamma. For when you want something more customized." }},
    { title: "PPT", url: "https://ppt.ai/", cat: ["presentations"], pricing: "freemium", desc: { es: "Storytelling visual con IA. Crea presentaciones narrativas con un estilo moderno y atractivo.", en: "Visual storytelling with AI. Create narrative presentations with a modern and attractive style." }},
    { title: "Vacay Chatbot", url: "https://usevacay.com", cat: ["travel"], pricing: "free", desc: { es: "Te arma itinerarios completos en segundos. Sorprendentemente útil para planificar.", en: "Builds complete itineraries in seconds. Surprisingly useful for planning." }},
    { title: "GuideGeek", url: "https://guidegeek.com", cat: ["travel"], pricing: "free", desc: { es: "Como tener un guía local que te responde cualquier duda sobre tu destino.", en: "Like having a local guide who answers any question about your destination." }},
    { title: "Curiosio", url: "https://curiosio.com", cat: ["travel"], pricing: "free", desc: { es: "Especializado en road trips. Te sugiere rutas alternativas y lugares que no conocías.", en: "Specialized in road trips. Suggests alternative routes and places you didn't know." }}
];

let lang = 'es', category = 'all', search = '';
const $ = s => document.querySelector(s);
const $$ = s => document.querySelectorAll(s);
const t = () => i18n[lang];

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
            <p class="bookmark-description">${b.desc[lang]}</p>
            <a href="${b.url}" target="_blank" rel="noopener noreferrer" class="bookmark-link">${t().visit}</a>
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
    document.documentElement.lang = lang;
    $$('.category-btn').forEach(btn => btn.textContent = t().cat[btn.dataset.category]);
    render();
}

function filterByCategory(cat) {
    category = cat;
    $$('.category-btn').forEach(b => b.classList.toggle('active', b.dataset.category === cat));
    render();
}

function initCategories() {
    const cats = ['all', ...CATEGORIES];
    $('#categories').innerHTML = cats.map(c =>
        `<button class="category-btn${c === 'all' ? ' active' : ''}" data-category="${c}">${t().cat[c]}</button>`
    ).join('');
    $$('.category-btn').forEach(btn => btn.addEventListener('click', () => filterByCategory(btn.dataset.category)));
}

$('#searchInput').addEventListener('input', e => { search = e.target.value.toLowerCase(); render(); });

$$('.lang-btn').forEach(btn => btn.addEventListener('click', () => {
    $$('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    lang = btn.dataset.lang;
    initCategories();
    updateUI();
}));

// Sugerentzixen botoie
$('#suggestBtn').addEventListener('click', () => {
    const isSpanish = lang === 'es';
    const title = encodeURIComponent(isSpanish ? 'Sugerir: [Nombre de la herramienta]' : 'Suggest: [Tool name]');
    const body = encodeURIComponent(isSpanish
        ? `## Herramienta sugerida

**Nombre:**

**URL:**

**Categoría:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation)

**Precio:** (free / freemium)

**Descripción corta:**

---
Gracias por tu sugerencia! 🙌`
        : `## Suggested tool

**Name:**

**URL:**

**Category:** (general, code, webdev, image, music, video, voice, humanizer, allinone, presentations, travel, automation)

**Pricing:** (free / freemium)

**Short description:**

---
Thanks for your suggestion! 🙌`
    );
    window.open(`https://github.com/iamLudok/ai-bookmarks/issues/new?title=${title}&body=${body}&labels=suggestion`, '_blank');
});

initCategories();
render();