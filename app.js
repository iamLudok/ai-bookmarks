const CATEGORIES = ['general', 'code', 'webdev', 'image', 'music', 'video', 'voice', 'humanizer', 'allinone', 'presentations', 'travel', 'automation', 'ragstack'];

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
        cat: { all: "Todos", general: "General", code: "Código", webdev: "Desarrollo Web", image: "Imagen", music: "Música", video: "Video", voice: "Voz", humanizer: "Humanizador", allinone: "Muchos en uno", presentations: "Presentaciones", travel: "Viajes", automation: "Automatizaciones", ragstack: "RAG Stack" },
        pricing: { free: "Gratis", freemium: "Limitado" },
        recommended: "Recomendado",
        dictionary: "Diccionario IA",
        dictionaryTitle: "Diccionario de IA"
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
        cat: { all: "All", general: "General", code: "Code", webdev: "Web Development", image: "Image", music: "Music", video: "Video", voice: "Voice", humanizer: "Humanizer", allinone: "Many in one", presentations: "Presentations", travel: "Travel", automation: "Automation", ragstack: "RAG Stack" },
        pricing: { free: "Free", freemium: "Limited" },
        recommended: "Recommended",
        dictionary: "AI Dictionary",
        dictionaryTitle: "AI Dictionary"
    },
    eu: {
        title: "AA Laster-markak",
        subtitle: "Nire AA tresna doako edo freemium hautapena. Probatutakoak eta gomendatuak.",
        search: "Laster-markak bilatu...",
        noResults: "Ez da zure bilaketarekin bat datorren laster-markarik aurkitu.",
        visit: "Gunea bisitatu",
        footer: "AA Laster-markak - 2026 | made by iamLudok",
        suggest: "Tresna iradoki",
        resultsCounter: "{filtered} erakusten {total}-(e)tik",
        cat: { all: "Denak", general: "Orokorra", code: "Kodea", webdev: "Web Garapena", image: "Irudia", music: "Musika", video: "Bideoa", voice: "Ahotsa", humanizer: "Humanizatzailea", allinone: "Asko batean", presentations: "Aurkezpenak", travel: "Bidaiak", automation: "Automatizazioak", ragstack: "RAG Stack" },
        pricing: { free: "Doakoa", freemium: "Mugatua" },
        recommended: "Gomendatua",
        dictionary: "AA Hiztegia",
        dictionaryTitle: "AA Hiztegia"
    }
};

const dictionary = {
    es: [
        {
            icon: "🧠",
            title: "Modelos y Arquitectura",
            intro: "Los tipos de modelos de IA y la arquitectura que los hace posibles.",
            terms: [
                { term: "LLM (Large Language Model)", def: "Modelo de lenguaje grande. Red neuronal entrenada con enormes cantidades de texto para comprender y generar lenguaje natural. GPT, Claude o Gemini son ejemplos. Son la base de los chatbots y asistentes de IA actuales." },
                { term: "VLM (Vision Language Model)", def: "Modelo de lenguaje con visión. Un LLM que además puede procesar y entender imágenes. Puede describir fotos, analizar gráficos o responder preguntas sobre contenido visual, combinando comprensión de texto e imagen." },
                { term: "MLLM (Multimodal LLM)", def: "LLM multimodal. La evolución del VLM: un modelo que puede procesar y generar múltiples tipos de datos simultáneamente — texto, imágenes, audio y video — entendiendo las relaciones entre todas estas modalidades." },
                { term: "Transformer", def: "Presentada por Google en 2017, la arquitectura Transformer es la base de la revolución actual de la IA generativa. Su innovación clave es el mecanismo de 'atención', que permite al modelo sopesar la importancia de diferentes partes de una entrada (como palabras en una frase) simultáneamente, capturando relaciones complejas a larga distancia mejor que las redes anteriores." },
                { term: "Tokens", def: "Los tokens son las unidades fundamentales de información que procesa un LLM. No son siempre palabras completas; pueden ser partes de palabras o caracteres. Por ejemplo, la palabra 'ingobernable' podría dividirse en varios tokens. Los modelos tienen límites de tokens, lo que define cuánto pueden 'leer' o 'escribir' de una sola vez." },
                { term: "Ventana de Contexto", def: "La ventana de contexto es la memoria a corto plazo del modelo durante una interacción. Define cuánta información (texto anterior, instrucciones, documentos subidos) puede mantener activa la IA para generar una respuesta coherente. Una ventana más grande permite analizar libros enteros o mantener conversaciones muy largas sin olvidar el principio." },
                { term: "Embeddings", def: "Los embeddings son representaciones matemáticas de datos (palabras, imágenes) como vectores en un espacio multidimensional. En este espacio, conceptos semánticamente similares (como 'rey' y 'reina') están matemáticamente cerca. Esto permite a la computadora 'entender' significados y relaciones, no solo comparar palabras clave." }
            ]
        },
        {
            icon: "🤖",
            title: "Conceptos Clave",
            intro: "Ideas fundamentales para entender cómo funciona y falla la IA.",
            terms: [
                { term: "Agentes", def: "Los agentes de IA son sistemas autónomos diseñados para percibir su entorno, razonar sobre él y tomar acciones para alcanzar objetivos específicos. A diferencia de un chatbot pasivo, un agente tiene 'agencia': puede iniciar tareas, usar herramientas (como navegadores web o calculadoras) y encadenar pasos lógicos para resolver problemas complejos sin intervención humana constante." },
                { term: "AGI (Inteligencia General Artificial)", def: "La Inteligencia General Artificial (AGI) es el santo grial de la investigación en IA: un sistema hipotético con la capacidad de aprender, entender y aplicar inteligencia a cualquier tarea intelectual que un ser humano pueda realizar. A diferencia de la IA estrecha (ANI) actual, que es experta en una sola cosa, una AGI tendría flexibilidad cognitiva y sentido común generalizado." },
                { term: "Cajas Negras", def: "El problema de la 'caja negra' en IA describe la opacidad de los algoritmos de aprendizaje profundo. Sabemos qué datos entran y qué resultados salen, pero los procesos internos —cómo las millones de neuronas artificiales ponderan la información para llegar a una conclusión— son a menudo ininteligibles, incluso para sus propios creadores." },
                { term: "Alucinación", def: "Una alucinación ocurre cuando una IA genera información que suena plausible y confiada, pero que es factualmente incorrecta o totalmente inventada. Esto sucede porque el modelo predice palabras basándose en probabilidad estadística, no en una base de datos de hechos verificados, priorizando la fluidez sobre la veracidad." },
                { term: "Inferencia", def: "La inferencia es el momento de la verdad: cuando usas el modelo ya entrenado para obtener una respuesta. Es el proceso de aplicar los conocimientos congelados del modelo a datos nuevos. A diferencia del entrenamiento, es menos costoso computacionalmente pero debe ser rápido para la experiencia de usuario." },
                { term: "Latencia", def: "La latencia es el tiempo de espera entre tu petición y la respuesta de la IA. En sistemas de voz o video en tiempo real, una latencia baja (milisegundos) es crucial para que la conversación se sienta natural. Depende de la velocidad de inferencia del modelo y de la red." }
            ]
        },
        {
            icon: "🔧",
            title: "Técnicas y Optimización",
            intro: "Métodos para mejorar, especializar y potenciar los modelos de IA.",
            terms: [
                { term: "Fine-Tuning", def: "El fine-tuning (ajuste fino) es el proceso de tomar un modelo base pre-entrenado (que sabe 'de todo un poco') y entrenarlo adicionalmente con un dataset más pequeño y especializado. Esto lo convierte en un experto en una tarea específica, como redacción legal, código médico o el estilo de una marca." },
                { term: "RAG (Retrieval-Augmented Generation)", def: "RAG (Retrieval-Augmented Generation) es una técnica que mejora la precisión de los LLMs. En lugar de confiar solo en su memoria entrenada, el modelo busca información relevante en una base de datos externa confiable antes de responder. Esto reduce alucinaciones y permite al modelo usar datos privados o muy recientes." },
                { term: "CAG (Cache-Augmented Generation)", def: "CAG es una evolución del RAG que precarga el conocimiento relevante directamente en la ventana de contexto del modelo, almacenándolo en caché. Elimina la necesidad de buscar en tiempo real, reduciendo la latencia y simplificando la arquitectura, ideal cuando la base de conocimiento es estable y acotada." }
            ]
        }
    ],
    en: [
        {
            icon: "🧠",
            title: "Models & Architecture",
            intro: "The types of AI models and the architecture that makes them possible.",
            terms: [
                { term: "LLM (Large Language Model)", def: "A neural network trained on massive amounts of text to understand and generate natural language. GPT, Claude, and Gemini are examples. They are the foundation of current AI chatbots and assistants." },
                { term: "VLM (Vision Language Model)", def: "An LLM that can also process and understand images. It can describe photos, analyze charts, or answer questions about visual content, combining text and image comprehension." },
                { term: "MLLM (Multimodal LLM)", def: "The evolution of VLMs: a model that can process and generate multiple types of data simultaneously — text, images, audio, and video — understanding the relationships between all these modalities." },
                { term: "Transformer", def: "Introduced by Google in 2017, the Transformer architecture is the foundation of the current generative AI revolution. Its key innovation is the 'attention' mechanism, which allows the model to weigh the importance of different parts of an input (like words in a sentence) simultaneously, capturing complex long-range relationships better than previous networks." },
                { term: "Tokens", def: "Tokens are the fundamental units of information processed by an LLM. They are not always complete words; they can be parts of words or characters. For example, the word 'ungovernable' might be split into several tokens. Models have token limits, which define how much they can 'read' or 'write' at once." },
                { term: "Context Window", def: "The context window is the model's short-term memory during an interaction. It defines how much information (previous text, instructions, uploaded documents) the AI can keep active to generate a coherent response. A larger window allows analyzing entire books or maintaining very long conversations without forgetting the beginning." },
                { term: "Embeddings", def: "Embeddings are mathematical representations of data (words, images) as vectors in a multidimensional space. In this space, semantically similar concepts (like 'king' and 'queen') are mathematically close. This allows the computer to 'understand' meanings and relationships, not just compare keywords." }
            ]
        },
        {
            icon: "🤖",
            title: "Key Concepts",
            intro: "Fundamental ideas for understanding how AI works and fails.",
            terms: [
                { term: "Agents", def: "AI agents are autonomous systems designed to perceive their environment, reason about it, and take actions to achieve specific goals. Unlike a passive chatbot, an agent has 'agency': it can initiate tasks, use tools (like web browsers or calculators), and chain logical steps to solve complex problems without constant human intervention." },
                { term: "AGI (Artificial General Intelligence)", def: "Artificial General Intelligence (AGI) is the holy grail of AI research: a hypothetical system with the ability to learn, understand, and apply intelligence to any intellectual task a human can perform. Unlike current narrow AI (ANI), which excels at one thing, an AGI would have cognitive flexibility and generalized common sense." },
                { term: "Black Boxes", def: "The 'black box' problem in AI describes the opacity of deep learning algorithms. We know what data goes in and what results come out, but the internal processes — how millions of artificial neurons weigh information to reach a conclusion — are often unintelligible, even to their own creators." },
                { term: "Hallucination", def: "A hallucination occurs when an AI generates information that sounds plausible and confident, but is factually incorrect or entirely fabricated. This happens because the model predicts words based on statistical probability, not a database of verified facts, prioritizing fluency over truthfulness." },
                { term: "Inference", def: "Inference is the moment of truth: when you use the already-trained model to get an answer. It's the process of applying the model's frozen knowledge to new data. Unlike training, it's less computationally expensive but must be fast for the user experience." },
                { term: "Latency", def: "Latency is the waiting time between your request and the AI's response. In real-time voice or video systems, low latency (milliseconds) is crucial for the conversation to feel natural. It depends on the model's inference speed and the network." }
            ]
        },
        {
            icon: "🔧",
            title: "Techniques & Optimization",
            intro: "Methods to improve, specialize, and enhance AI models.",
            terms: [
                { term: "Fine-Tuning", def: "Fine-tuning is the process of taking a pre-trained base model (that knows 'a little of everything') and training it further with a smaller, specialized dataset. This turns it into an expert in a specific task, such as legal writing, medical coding, or a brand's style." },
                { term: "RAG (Retrieval-Augmented Generation)", def: "RAG is a technique that improves the accuracy of LLMs. Instead of relying solely on its trained memory, the model searches for relevant information in a reliable external database before responding. This reduces hallucinations and allows the model to use private or very recent data." },
                { term: "CAG (Cache-Augmented Generation)", def: "CAG is an evolution of RAG that preloads relevant knowledge directly into the model's context window, caching it. It eliminates the need for real-time search, reducing latency and simplifying the architecture — ideal when the knowledge base is stable and bounded." }
            ]
        }
    ],
    eu: [
        {
            icon: "🧠",
            title: "Ereduak eta Arkitektura",
            intro: "AA eredu motak eta hauek posible egiten dituen arkitektura.",
            terms: [
                { term: "LLM (Large Language Model)", def: "Hizkuntza-eredu handia. Testu kopuru izugarriarekin entrenatutako sare neuronala, hizkuntza naturala ulertu eta sortzeko. GPT, Claude edo Gemini adibideak dira. Gaur egungo AA txatbot eta laguntzaileen oinarria dira." },
                { term: "VLM (Vision Language Model)", def: "Ikusmen-hizkuntza eredua. Irudiak ere prozesatu eta ulertzeko gai den LLM bat. Argazkiak deskribatu, grafikoak aztertu edo eduki bisualari buruzko galderei erantzun diezaieke, testua eta irudiaren ulermena konbinatuz." },
                { term: "MLLM (Multimodal LLM)", def: "LLM multimodala. VLMaren bilakaera: datu mota anitzak aldi berean prozesatu eta sortzeko gai den eredua — testua, irudiak, audioa eta bideoa — modalitate guztien arteko harremanak ulertuz." },
                { term: "Transformer", def: "Googlek 2017an aurkeztua, Transformer arkitektura gaur egungo AA sortzailearen iraultzaren oinarria da. Bere berrikuntza nagusia 'arreta' mekanismoa da, ereduari sarrera baten zati ezberdinen garrantzia (esaldi bateko hitzak bezala) aldi berean neurtzea ahalbidetzen diona, aurreko sareek baino hobeto harreman konplexuak distantzia luzera harrapatuz." },
                { term: "Tokenak", def: "Tokenak LLM batek prozesatzen dituen informazio-unitate fundamentalak dira. Ez dira beti hitz osoak; hitzen zatiak edo karaktereak izan daitezke. Adibidez, 'gobernaezina' hitza hainbat tokenetan banatu liteke. Ereduek token-mugak dituzte, eta horrek zehazten du zenbat 'irakurri' edo 'idatzi' dezaketen aldi bakoitzean." },
                { term: "Testuinguru Leihoa", def: "Testuinguru leihoa ereduaren epe laburreko memoria da interakzio batean. Zehazten du zenbat informazio (aurreko testua, argibideak, igotako dokumentuak) mantendu dezakeen AAk aktiboki erantzun koherente bat sortzeko. Leiho handiagoak liburu osoak aztertzea edo elkarrizketa oso luzeak mantentzea ahalbidetzen du hasiera ahaztu gabe." },
                { term: "Embeddings", def: "Embeddingak datuen (hitzak, irudiak) adierazpen matematikoak dira, dimentsio anitzeko espazio batean bektore gisa. Espazio honetan, semantikoki antzeko kontzeptuak ('erregea' eta 'erregina' bezala) matematikoki hurbil daude. Honek ordenagailuari esanahiak eta harremanak 'ulertzea' ahalbidetzen dio, ez soilik gako-hitzak konparatzea." }
            ]
        },
        {
            icon: "🤖",
            title: "Kontzeptu Nagusiak",
            intro: "Oinarrizko ideiak AA nola funtzionatzen duen eta nola huts egiten duen ulertzeko.",
            terms: [
                { term: "Agenteak", def: "AA agenteak ingurumena hauteman, honi buruz arrazoitu eta helburu zehatzak lortzeko ekintzak hartzeko diseinatutako sistema autonomoak dira. Txatbot pasibo batetik desberdina, agente batek 'agentzia' du: atazak abiarazi, tresnak erabili (web nabigatzaileak edo kalkulagailuak bezala) eta urrats logikoak kateatu ditzake arazo konplexuak giza esku-hartze konstanterik gabe ebazteko." },
                { term: "AGI (Adimen Orokor Artifiziala)", def: "Adimen Orokor Artifiziala (AGI) AA ikerketaren graal santua da: gizaki batek egin dezakeen edozein ataza intelektualean adimena ikasi, ulertu eta aplikatzeko gaitasuna duen sistema hipotetikoa. Gaur egungo AA estutik (ANI) desberdina, gauza bakarrean aditua dena, AGI batek malgutasun kognitiboa eta zentzu komun orokortua izango luke." },
                { term: "Kutxa Beltzak", def: "AAren 'kutxa beltza' arazoak ikaskuntza sakoneko algoritmoen opakotasuna deskribatzen du. Badakigu zer datu sartzen diren eta zer emaitza ateratzen diren, baina barneko prozesuak —nola milioika neurona artifizialek informazioa haztatzen duten ondorio batera iristeko— askotan ulergaitzak dira, baita haien sortzaileentzat ere." },
                { term: "Haluzinazio", def: "Haluzinazio bat gertatzen da AA batek sinesgarri eta konfiantzaz entzuten den informazioa sortzen duenean, baina faktualki okerra edo guztiz asmatua dena. Hau gertatzen da ereduak hitzak probabilitate estatistikoan oinarrituz aurreikusten dituelako, ez egitate egiaztatuen datu-base batean, jariakortasuna egiazkotasunaren gainetik lehenetsiz." },
                { term: "Inferentzia", def: "Inferentzia egiaren momentua da: jadanik entrenatutako eredua erantzun bat lortzeko erabiltzen duzunean. Ereduaren ezagutza izoztuak datu berriei aplikatzeko prozesua da. Entrenamendutik desberdina, konputazionalki merkeagoa da baina azkarra izan behar du erabiltzailearen esperientziarako." },
                { term: "Latentzia", def: "Latentzia zure eskaeraren eta AAren erantzunaren arteko itxaron-denbora da. Denbora errealeko ahots edo bideo sistemetan, latentzia baxua (milisegundoak) funtsezkoa da elkarrizketa naturala sentitzeko. Ereduaren inferentzia-abiaduraren eta sarearen mende dago." }
            ]
        },
        {
            icon: "🔧",
            title: "Teknikak eta Optimizazioa",
            intro: "AA ereduak hobetu, espezializatu eta indartzeko metodoak.",
            terms: [
                { term: "Fine-Tuning", def: "Fine-tuning (doikuntza fina) aurrez entrenatutako oinarrizko eredu bat ('denetarik pixka bat' dakiena) hartu eta dataset txikiago eta espezializatu batekin gehiago entrenatzeko prozesua da. Honek ataza zehatz batean aditu bihurtzen du, hala nola idazketa juridikoa, kode medikoa edo marka baten estiloa." },
                { term: "RAG (Retrieval-Augmented Generation)", def: "RAG LLMen zehaztasuna hobetzen duen teknika bat da. Bere memoria entrenatuan soilik fidatu ordez, ereduak informazio garrantzitsua kanpoko datu-base fidagarri batean bilatzen du erantzun aurretik. Honek haluzinazioak murrizten ditu eta ereduari datu pribatuak edo oso berriak erabiltzea ahalbidetzen dio." },
                { term: "CAG (Cache-Augmented Generation)", def: "CAG RAGren bilakaera da, ezagutza garrantzitsua zuzenean ereduaren testuinguru leihoan aurrekargatzen duena, cachean gordetuz. Denbora errealeko bilaketa beharra ezabatzen du, latentzia murriztuz eta arkitektura sinplifikatuz — ezagutza-basea egonkorra eta mugatua denean aproposa." }
            ]
        }
    ]
};

const bookmarks = [
    { title: "ChatGPT", url: "https://chat.openai.com", cat: ["general"], pricing: "freemium", desc: { es: "El clásico. Perfecto para cualquier cosa: escribir, investigar, resolver dudas. El más versátil.", en: "The classic. Perfect for anything: writing, research, solving questions. The most versatile.", eu: "Klasikoa. Edozer gauzetarako ezin hobea: idatzi, ikertu, zalantzak argitu. Polifazetikoena." }},
    { title: "Perplexity", url: "https://perplexity.ai", cat: ["general"], pricing: "freemium", desc: { es: "Como Google pero te da la respuesta directa con fuentes. Ideal para investigar rápido.", en: "Like Google but gives you the direct answer with sources. Ideal for quick research.", eu: "Google bezala baina erantzun zuzena ematen dizu ituriekin. Azkar ikertzeko aproposa." }},
    { title: "NotebookLM", url: "https://notebooklm.google/", cat: ["general"], pricing: "free", desc: { es: "El asistente de Google para investigar. Sube PDFs, webs o textos y te genera resúmenes, respuestas y hasta podcasts.", en: "Google's research assistant. Upload PDFs, websites or texts and it generates summaries, answers and even podcasts.", eu: "Googleren ikerketa-laguntzailea. Igo PDFak, webak edo testuak eta laburpenak, erantzunak eta baita podcastak ere sortzen dizkizu." }},
    { title: "Claude", url: "https://claude.ai", cat: ["code"], pricing: "freemium", recommended: true, desc: { es: "Mi favorito para programar. Entiende el contexto mejor que nadie y no se pierde en proyectos grandes.", en: "My favorite for coding. Understands context better than anyone and doesn't get lost in big projects.", eu: "Nire gogokoena programatzeko. Testuingurua inork baino hobeto ulertzen du eta ez da galtzen proiektu handietan." }},
    { title: "Opencode", url: "https://opencode.ai", cat: ["code"], pricing: "free", recommended: true, desc: { es: "Agente de código en terminal. Open source y con soporte para múltiples modelos de IA.", en: "Terminal-based coding agent. Open source with support for multiple AI models.", eu: "Kode-agentea terminalean. Kode irekia eta AA eredu anitzentzako euskarriarekin." }},
    { title: "Lovable", url: "https://lovable.dev", cat: ["webdev"], pricing: "freemium", desc: { es: "El más fácil para empezar. En minutos tienes algo funcional y bonito sin tocar código.", en: "In minutes you have something functional and beautiful without touching code.", eu: "Hasteko errazena. Minututan zerbait funtzionala eta polita duzu koderik ukitu gabe." }},
    { title: "Bubble", url: "https://bubble.io", cat: ["webdev"], pricing: "freemium", desc: { es: "Más complejo pero muy potente. Para apps serias sin saber programar.", en: "More complex but very powerful. For serious apps without knowing how to code.", eu: "Konplexuagoa baina oso indartsua. App serioetarako programatzen jakin gabe." }},
    { title: "v0", url: "https://v0.dev", cat: ["webdev"], pricing: "freemium", desc: { es: "Mi favorito para crear aplicaciones mediante lenguaje natural.", en: "My favorite for creating applications using natural language.", eu: "Nire gogokoena aplikazioak hizkuntza naturalaren bidez sortzeko." }},
    { title: "Bolt", url: "https://bolt.new", cat: ["webdev"], pricing: "freemium", desc: { es: "Rápido para prototipos. Se queda corto en proyectos grandes pero para empezar va genial.", en: "Fast for prototypes. Falls short on big projects but great for starting out.", eu: "Azkarra prototipoetarako. Proiektu handietan motz geratzen da baina hasteko bikaina." }},
    { title: "Replit", url: "https://replit.com", cat: ["webdev"], pricing: "freemium", desc: { es: "Una de las mejores herramientas para vibe coding cuando lo que buscas no es perfección técnica inmediata, sino fluidez, ritmo y ganas de crear.", en: "One of the best tools for vibe coding when what you seek is not immediate technical perfection, but flow, rhythm, and the desire to create.", eu: "Vibe coding-erako tresnarik onenetakoa, perfekzio teknikoa baino jariakortasuna, erritmoa eta sortzeko gogoa bilatzen duzunean." }},
    { title: "Make", url: "https://www.make.com", cat: ["automation"], pricing: "freemium", desc: { es: "Automatiza flujos de trabajo conectando apps sin código. Ideal para integrar servicios y crear procesos automáticos.", en: "Automate workflows by connecting apps without code. Ideal for integrating services and creating automatic processes.", eu: "Lan-fluxuak automatizatzen ditu appak koderik gabe konektatuz. Zerbitzuak integratzeko eta prozesu automatikoak sortzeko aproposa." }},
    { title: "Zapier", url: "https://zapier.com", cat: ["automation"], pricing: "freemium", desc: { es: "El veterano de las automatizaciones. Conecta miles de apps y crea flujos automáticos en minutos.", en: "The veteran of automation. Connect thousands of apps and create automatic workflows in minutes.", eu: "Automatizazioen beteranoa. Milaka app konektatzen ditu eta fluxu automatikoak sortzen minututan." }},
    { title: "Napkin", url: "https://app.napkin.ai", cat: ["image"], pricing: "freemium", desc: { es: "Convierte texto en diagramas e infografías automáticamente. Perfecto para visualizar ideas rápidamente.", en: "Converts text into diagrams and infographics automatically. Perfect for visualizing ideas quickly.", eu: "Testua diagrama eta infografietan bihurtzen du automatikoki. Ideiak azkar bistaratzeko ezin hobea." }},
    { title: "Sora", url: "https://openai.com/sora", cat: ["image", "video"], pricing: "freemium", desc: { es: "El de OpenAI. Calidad brutal en imágenes y videos hiperrealistas. La calidad es increíble aunque el acceso es limitado.", en: "OpenAI's one. Brutal quality in realistic images and hyperrealistic videos. Quality is incredible although access is limited.", eu: "OpenAIrena. Kalitate ikaragarria irudi eta bideo hiperrealistan. Kalitatea izugarria da nahiz eta sarbidea mugatua izan." }},
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
    $('[data-i18n="dictionary"]').textContent = t().dictionary;
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

// Diccionario Modal
const modal = $('#dictionaryModal');
const dictionaryBtn = $('#dictionaryBtn');
const closeModal = $('#closeModal');

function renderDictionary() {
    const content = $('#dictionaryContent');
    const data = dictionary[lang];

    content.innerHTML = data.map((section, idx) => `
        <div class="dict-section">
            <button class="dict-accordion ${idx === 0 ? 'active' : ''}" data-section="${idx}">
                <span class="dict-icon">${section.icon}</span>
                <span class="dict-title">${section.title}</span>
                <span class="dict-arrow">▼</span>
            </button>
            <div class="dict-panel" style="${idx === 0 ? 'max-height: none;' : ''}">
                <p class="dict-intro">${section.intro}</p>
                <dl class="dict-terms">
                    ${section.terms.map(t => `
                        <dt>${t.term}</dt>
                        <dd>${t.def}</dd>
                    `).join('')}
                </dl>
            </div>
        </div>
    `).join('');

    // Accordion functionality
    $$('.dict-accordion').forEach(btn => {
        btn.addEventListener('click', () => {
            const panel = btn.nextElementSibling;
            const isActive = btn.classList.contains('active');

            btn.classList.toggle('active');
            panel.style.maxHeight = isActive ? null : 'none';
        });
    });
}

function openModal() {
    $('#modalTitle').textContent = t().dictionaryTitle;
    renderDictionary();
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeModalFn() {
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

dictionaryBtn.addEventListener('click', openModal);
closeModal.addEventListener('click', closeModalFn);
modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModalFn();
});
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('show')) closeModalFn();
});

initCategories();
render();