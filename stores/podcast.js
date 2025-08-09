import { defineStore } from 'pinia'

export const usePodcastStore = defineStore('podcast', {
  state: () => ({
    episodies: [
      {
        "title": "El poder de liderarte a ti mismo",
        "intro": "En este episodio exploramos cómo el autoconocimiento es la base para construir una marca personal sólida y auténtica. Lina comparte ejercicios prácticos para conectar con tu propósito.",
        "mp3": "https://samplelib.com/lib/preview/mp3/sample-3s.mp3",
        "date": "2025-01-15",
        "slug": "el-poder-de-liderarte-a-ti-mismo",
        "topics": [
          { "name": "Marca Personal", "description": "Construir una identidad profesional única que comunique tu valor." },
          { "name": "Autoconocimiento", "description": "Entender tus fortalezas, valores y propósito para guiar tus decisiones." },
          { "name": "Liderazgo", "description": "Capacidad de inspirarte a ti mismo y a otros hacia un objetivo común." }
        ],
        "sponsors": ["Juan Valdez", "Mindset Academy"],
        "links": [
          { "title": "Instagram de Lina Hoyos", "url": "https://instagram.com/linahoyos" },
          { "title": "Web Oficial", "url": "https://linahoyos.com" }
        ]
      },
      {
        "title": "Construye tu voz en un mundo ruidoso",
        "intro": "Aprende a diferenciarte con tu mensaje, incluso cuando compites con millones de creadores. Invitado especial: Andrés Ramírez, experto en storytelling.",
        "mp3": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav",
        "date": "2025-01-29",
        "slug": "construye-tu-voz-en-un-mundo-ruidoso",
        "topics": [
          { "name": "Storytelling", "description": "Contar historias que cautiven, inspiren y generen conexión emocional." },
          { "name": "Comunicación", "description": "Transmitir tu mensaje de forma clara, efectiva y memorable." },
          { "name": "Marca Personal", "description": "Posicionarte de forma auténtica y coherente frente a tu audiencia." }
        ],
        "sponsors": ["AudioPro", "Juan Valdez"],
        "links": [
          { "title": "Instagram de Lina Hoyos", "url": "https://instagram.com/linahoyos" },
          { "title": "LinkedIn de Andrés Ramírez", "url": "https://linkedin.com/in/andresramirez" }
        ]
      },
      {
        "title": "La autenticidad como estrategia",
        "intro": "Descubre por qué mostrar tu lado más humano no es una debilidad, sino una poderosa herramienta de conexión con tu audiencia.",
        "mp3": "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
        "date": "2025-02-12",
        "slug": "la-autenticidad-como-estrategia",
        "topics": [
          { "name": "Autenticidad", "description": "Ser fiel a tus valores y tu esencia en cada interacción." },
          { "name": "Marketing", "description": "Diseñar estrategias que generen impacto y visibilidad." },
          { "name": "Conexión Humana", "description": "Establecer vínculos genuinos con tu audiencia." }
        ],
        "sponsors": ["Café Creativo", "Juan Valdez"],
        "links": [
          { "title": "Web Oficial", "url": "https://linahoyos.com" },
          { "title": "Artículo sobre Autenticidad", "url": "https://medium.com/autenticidad" }
        ]
      },
      {
        "title": "De empleado a marca personal",
        "intro": "Historias reales de profesionales que decidieron dar el salto y construir su propio nombre como marca. Consejos para iniciar y no morir en el intento.",
        "mp3": "https://samplelib.com/lib/preview/mp3/sample-6s.mp3",
        "date": "2025-02-26",
        "slug": "de-empleado-a-marca-personal",
        "topics": [
          { "name": "Emprendimiento", "description": "Iniciar y gestionar un proyecto propio desde cero." },
          { "name": "Cambio de Carrera", "description": "Transitar hacia una nueva profesión o industria con éxito." },
          { "name": "Marca Personal", "description": "Diferenciarte y posicionarte como referente en tu sector." }
        ],
        "sponsors": ["Juan Valdez", "LinkedIn Learning"],
        "links": [
          { "title": "Instagram de Lina Hoyos", "url": "https://instagram.com/linahoyos" },
          { "title": "Recursos de Emprendimiento", "url": "https://emprende.com" }
        ]
      },
      {
        "title": "El arte de conectar con tu audiencia",
        "intro": "Técnicas para escuchar, responder y fidelizar a tu comunidad sin perder tu esencia. Participa Laura Gómez, especialista en engagement digital.",
        "mp3": "https://essentials.pixfort.com/original/wp-content/uploads/sites/4/2020/02/skanews.wav",
        "date": "2025-03-12",
        "slug": "el-arte-de-conectar-con-tu-audiencia",
        "topics": [
          { "name": "Engagement", "description": "Generar participación y compromiso activo en tu comunidad." },
          { "name": "Audiencia", "description": "Identificar y entender a las personas a las que te diriges." },
          { "name": "Marketing Digital", "description": "Utilizar canales y herramientas online para amplificar tu mensaje." }
        ],
        "sponsors": ["Café Creativo", "Juan Valdez"],
        "links": [
          { "title": "Instagram de Lina Hoyos", "url": "https://instagram.com/linahoyos" },
          { "title": "LinkedIn de Laura Gómez", "url": "https://linkedin.com/in/lauragomez" }
        ]
      }
    ],
    current: null,
    play: false
  }),
  actions: {

  },
  getters: {
  }
})