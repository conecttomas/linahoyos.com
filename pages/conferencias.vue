<script setup lang="ts">

// SEO / OpenGraph
useSeoMeta({
    title: 'Conferencias | Lina Hoyos',
    description: 'Charlas para conectar tu SER con tu HACER: reinvención profesional, liderazgo consciente y marcas con impacto.',
    ogTitle: 'Conferencias | Lina Hoyos',
    ogDescription: 'Inspira, alinea y acciona: conferencias de Lina Hoyos para equipos y eventos.',
    ogType: 'website',
    ogImage: '/DSC04441.JPG',
    twitterCard: 'summary_large_image'
})

// DATA — reemplaza imágenes por las tuyas
const talks = [
    {
        slug: 'el-valor-de-reinventarte',
        title: 'El valor de ReinventARTE',
        summary: 'Cómo alinear tu propósito a tu camino profesional y convertir crisis en expansión.',
        format: ['Keynote', 'Taller', 'Virtual'],
        duration: '45–60 min (keynote) · 90–120 min (taller)',
        audience: 'Profesionales, líderes, equipos en cambio',
        image: '/DSC04441.JPG'
    },
    {
        slug: 'liderar-para-inspirar',
        title: 'Liderar para inspirar',
        summary: 'Autoliderazgo y liderazgo consciente para inspirar con autenticidad y resultados.',
        format: ['Keynote', 'Q&A', 'Virtual'],
        duration: '45–60 min',
        audience: 'C-Level, mandos medios, HR, startups',
        image: '/DSC04441.JPG'
    },
    {
        slug: 'negocios-conscientes',
        title: 'Negocios conscientes y sostenibles',
        summary: 'Principios para construir empresas humanas que combinan impacto y rentabilidad.',
        format: ['Keynote', 'Taller'],
        duration: '60 min (keynote) · 120 min (taller)',
        audience: 'Directivos, emprendedores, innovación',
        image: '/DSC04441.JPG'
    },
    {
        slug: 'branding-30',
        title: 'Branding 3.0 con impacto',
        summary: 'Marcas que conectan desde el propósito: estrategia, narrativa y ejecución.',
        format: ['Keynote', 'Workshop'],
        duration: '45–90 min',
        audience: 'Marketing, founders, producto',
        image: '/DSC04441.JPG'
    }
]

const takeaways = [
    { title: 'Claridad y propósito', desc: 'Un marco para alinear decisiones con visión personal/profesional.' },
    { title: 'Herramientas prácticas', desc: 'Ejercicios y guías para aplicar de inmediato en equipos y proyectos.' },
    { title: 'Cultura y liderazgo', desc: 'Lenguaje común para conversaciones difíciles y foco en lo importante.' },
    { title: 'Marca con impacto', desc: 'Estrategias de comunicación que elevan conexión y resultados.' },
    { title: 'Cambio sostenible', desc: 'Hábitos y acuerdos que mantienen el progreso en el tiempo.' },
    { title: 'Engagement', desc: 'Dinámicas para activar participación e involucramiento.' }
]

const faqs = [
    { q: '¿Trabajas presencial y virtual?', a: 'Sí. Presencial en LatAm y España; virtual a todo el mundo con dinámicas interactivas.' },
    { q: '¿Personalizas el contenido?', a: 'Siempre. Alineamos objetivos, contexto y audiencia. Podemos incluir casos y métricas de tu equipo.' },
    { q: '¿Cuál es la duración recomendada?', a: 'Keynote 45–60 min + Q&A. Taller 90–120 min. Adaptable según agenda.' },
    { q: '¿Cuál es el proceso de booking?', a: 'Envíanos el formulario con fecha tentativa y objetivos. Te respondemos con propuesta y next steps.' }
]

// JSON-LD básico (Speaker + “Offerings”)
const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lina Hoyos',
    jobTitle: 'CMO & Speaker',
    url: 'https://linahoyos.vercel.app/conferencias',
    sameAs: [
        'https://www.instagram.com/linahoyos',
        'https://www.linkedin.com' // actualiza
    ],
    knowsAbout: [
        'Marca personal', 'Liderazgo consciente', 'Branding', 'Negocios con impacto'
    ],
    hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Conferencias',
        itemListElement: talks.map(t => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: t.title, description: t.summary }
        }))
    }
}
</script>

<template>
    <section class="overflow-hidden py-24 sm:pt-44">
        <div class="mx-auto container px-5">
            <div class="relative">
                <!-- HERO -->
                <section
                    class="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pt-4 lg:pr-8">
                        <div class="lg:max-w-xl">
                            <h2 class="text-base lg:text-lg font-semibold text-accent-3" v-motion-fadein-down-enter>
                                Conferencias
                            </h2>
                            <p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-primary sm:text-4xl sm:text-balance"
                                v-motion-fadein-down-enter>
                                Inspira acción alineando tu SER con tu HACER
                            </p>

                            <p class="mt-6 text-lg lg:text-xl text-primary/50">
                                Charlas para equipos y audiencias que buscan <b>claridad, propósito y resultados</b>.
                                Desde la
                                reinvención profesional y el liderazgo consciente, hasta la construcción de marcas con
                                impacto.
                            </p>

                            <dl class="mt-10 max-w-xl space-y-8 text-base text-primary/50 lg:max-w-none">
                                <div class="relative pl-9" v-motion-fadein-down-enter>
                                    <dt class="inline font-semibold text-primary text-xl">
                                        <svg class="absolute top-1 left-1 size-5 text-accent-1" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path
                                                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                            </path>
                                        </svg>
                                        <!-- Mentoría de Marca Personal Consciente. -->
                                    </dt>
                                    <dd class="inline text-xl">Contenido aplicable desde el día 1.
                                    </dd>
                                </div>
                                <div class="relative pl-9" v-motion-fadein-down-enter>
                                    <dt class="inline font-semibold text-primary text-xl">
                                        <svg class="absolute top-1 left-1 size-5 text-accent-2" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path
                                                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                            </path>
                                        </svg>
                                        <!-- Coaching de Liderazgo Consciente. -->
                                    </dt>
                                    <dd class="inline text-xl">
                                        Enfoque humano y de negocio
                                    </dd>
                                </div>
                                <div class="relative pl-9" v-motion-fadein-down-enter>
                                    <dt class="inline font-semibold text-primary text-xl">
                                        <svg class="absolute top-1 left-1 size-5 text-accent-3" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path
                                                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                            </path>
                                        </svg>
                                        <!-- Estrategia de Marca con Impacto. -->
                                    </dt>
                                    <dd class="inline text-xl">
                                        Formatos: keynote, taller, Q&A
                                    </dd>
                                </div>
                                <div class="relative pl-9" v-motion-fadein-down-enter>
                                    <dt class="inline font-semibold text-primary text-xl">
                                        <svg class="absolute top-1 left-1 size-5 text-accent-4" viewBox="0 0 24 24"
                                            fill="currentColor" aria-hidden="true" data-slot="icon">
                                            <path
                                                d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                            </path>
                                        </svg>
                                        <!-- Estrategia de Marca con Impacto. -->
                                    </dt>
                                    <dd class="inline text-xl">
                                        Presencial y virtual
                                    </dd>
                                </div>
                            </dl>

                            <div class="space-x-6 mt-16">
                                <a href="#charlas"
                                    class="rounded-lg bg-accent-3 px-4 py-2.5 text-base font-semibold text-primary shadow-xs hover:bg-primary hover:text-accent-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                                    Ver charlas
                                </a>

                                <a href="#booking"
                                    class="text-base font-semibold text-primary hover:text-accent-3">Solicitar
                                    conferencia
                                    <span aria-hidden="true">→</span></a>

                            </div>
                        </div>
                    </div>
                    <div class="relative">
                        <img src="/DSC04441.JPG" alt="Product screenshot"
                            class="rounded-3xl shadow-xl aspect-square object-cover">
                    </div>
                </section>

                <!-- LISTA DE CHARLAS -->
                <section id="charlas" class="py-16 lg:py-24 bg-gray-50">
                    <div class="mx-auto container px-5">
                        <div class="max-w-3xl">
                            <h2 class="text-base lg:text-lg font-semibold text-accent-3" v-motion-fadein-down-enter>
                                Charlas destacadas
                            </h2>
                            <p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-primary sm:text-4xl sm:text-balance"
                                v-motion-fadein-down-enter>
                                Cada conferencia puede adaptarse al objetivo del evento y
                                al nivel de la audiencia
                            </p>
                        </div>

                        <div class="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
                            <article v-for="talk in talks" :key="talk.slug"
                                class="group rounded-2xl ring-1 ring-primary/15 hover:shadow-md transition overflow-hidden bg-gray-50 hover:bg-primary duration-300 ease-in group">
                                <div class="aspect-[4/3] overflow-hidden">
                                    <img :src="talk.image" :alt="talk.title"
                                        class="h-full w-full object-cover group-hover:scale-[1.02] transition"
                                        loading="lazy" />
                                </div>
                                <div class="p-5">
                                    <h3 class="text-lg font-semibold leading-snug text-primary group-hover:text-white">
                                        {{ talk.title }}</h3>
                                    <p class="mt-2 text-base text-primary/50 group-hover:text-white line-clamp-3">{{
                                        talk.summary }}</p>
                                    <ul
                                        class="mt-6 space-y-1 text-sm text-primary/50 group-hover:text-white list-disc marker:text-accent-3 list-inside">
                                        <li><span class="font-medium">Formato:</span> {{ talk.format.join(', ') }}
                                        </li>
                                        <li><span class="font-medium">Duración:</span> {{ talk.duration }}</li>
                                        <li><span class="font-medium">Audiencia:</span> {{ talk.audience }}</li>
                                    </ul>
                                    <div class="mt-10 flex gap-x-6 items-center text-primary">
                                        <a :href="`/conferencias/${talk.slug}`"
                                            class="rounded-lg bg-accent-3 px-4 py-2.5 text-base font-semibold text-primary  shadow-xs hover:bg-primary hover:text-accent-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                                            Ver temario
                                        </a>
                                        <a href="#booking"
                                            class="text-base font-semibold group-hover:text-white group-hover:hover:!text-accent-3">
                                            Reservar
                                        </a>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </section>

                <!-- RESULTADOS/TAKEAWAYS -->
                <section class="py-16 lg:py-24 bg-primary rounded-3xl">
                    <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                        <div class="grid lg:grid-cols-3 gap-8">
                            <div class="lg:col-span-1">
                                <p class="text-3xl font-semibold tracking-tight text-pretty text-accent-3 sm:text-4xl sm:text-balance"
                                    v-motion-fadein-down-enter>
                                    Resultados para tu audiencia
                                </p>
                                <p class="mt-6 text-lg lg:text-xl text-white">Historias reales, marco práctico y
                                    herramientas
                                    accionables para elevar desempeño y claridad.</p>
                            </div>
                            <ul class="lg:col-span-2 grid sm:grid-cols-2 gap-4">
                                <li v-for="(item, i) in takeaways" :key="i"
                                    class="rounded-xl bg-gray-50 p-5 ring-1 ring-black/5">
                                    <p class="font-bold text-primary">{{ item.title }}</p>
                                    <p class="mt-1 text-sm text-primary/50">{{ item.desc }}</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <!-- BOOKING / FORM -->
                <section id="booking" class="py-16 lg:py-24 bg-gray-50">
                    <div class="mx-auto container px-5">
                        <div class="text-left">
                            <h2 class="text-2xl sm:text-3xl font-semibold text-primary" v-motion-fadein-down-enter>
                                ¿Llevamos una conferencia a tu equipo o evento?
                            </h2>
                            <p class="mt-6 text-lg lg:text-xl text-primary/50 max-w-xl">
                                Cuéntame sobre tu audiencia, objetivos y fecha tentativa. <br>
                                Te responderé con la propuesta.
                            </p>
                        </div>

                        <div class="mt-16 grid grid-cols-1 md:grid-cols-5 gap-10 lg:gap-20">
                            <form action="#" method="POST" class="lg:flex-auto md:col-span-3">
                                <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-4">
                                    <div class="md:col-span-2">
                                        <label for="first-name"
                                            class="block text-sm/6 font-semibold text-primary-900">Nombres</label>
                                        <div class="mt-2.5">
                                            <input type="text" name="first-name" id="first-name"
                                                autocomplete="given-name"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <label for="last-name"
                                            class="block text-sm/6 font-semibold text-primary-900">Apellidos</label>
                                        <div class="mt-2.5">
                                            <input type="text" name="last-name" id="last-name"
                                                autocomplete="family-name"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <label for="email" class="block text-sm/6 font-semibold text-primary-900">Correo
                                            electrónico</label>
                                        <div class="mt-2.5">
                                            <input id="email" name="email" type="email"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <label for="ORG"
                                            class="block text-sm/6 font-semibold text-primary-900">Telefono</label>
                                        <div class="mt-2.5">
                                            <input type="url" name="ORG" id="ORG"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-2">
                                        <label for="ORG"
                                            class="block text-sm/6 font-semibold text-primary-900">Organización</label>
                                        <div class="mt-2.5">
                                            <input type="url" name="ORG" id="ORG"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-1">
                                        <label for="ORG"
                                            class="block text-sm/6 font-semibold text-primary-900">País</label>
                                        <div class="mt-2.5">
                                            <input type="url" name="ORG" id="ORG"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-1">
                                        <label for="ORG"
                                            class="block text-sm/6 font-semibold text-primary-900">Ciudad</label>
                                        <div class="mt-2.5">
                                            <input type="url" name="ORG" id="ORG"
                                                class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                    <div class="md:col-span-2 grid grid-cols-1 gap-x-8 gap-y-6">
                                        <div class="md:col-span-1">
                                            <label for="ORG"
                                                class="block text-sm/6 font-semibold text-primary-900">Conferencia de
                                                interés</label>
                                            <div class="mt-2.5">
                                                <select name="format"
                                                    class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900">
                                                    <option v-for="t in talks" :key="t.slug" :value="t.title">{{ t.title
                                                    }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="md:col-span-1">
                                            <label for="ORG"
                                                class="block text-sm/6 font-semibold text-primary-900">Formato</label>
                                            <div class="mt-2.5">
                                                <select name="format"
                                                    class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900">
                                                    <option>Keynote</option>
                                                    <option>Taller</option>
                                                    <option>Q&A</option>
                                                    <option>Virtual</option>
                                                    <option>Presencial</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="sm:col-span-2">
                                        <label for="message"
                                            class="block text-sm/6 font-semibold text-primary-900">Objetivo del
                                            evento</label>
                                        <div class="mt-2.5">
                                            <textarea id="message" name="message" rows="4"
                                                class="block w-full h-36 rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-10">
                                    <button type="submit"
                                        class="rounded-lg w-full bg-accent-3 px-4 py-2.5 text-base font-semibold text-primary shadow-xs hover:bg-primary hover:text-accent-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                                        Enviar
                                    </button>
                                </div>
                                <p class="mt-4 text-sm/6 text-primary/50">Al enviar este formulario, acepto la <a
                                        href="#"
                                        class="font-semibold gray-50space-nowrap text-primary hover:text-accent-3">política
                                        de privacidad</a>.</p>
                            </form>

                            <!-- FAQ -->
                            <div class="md:col-span-2">
                                <div class="bg-accent-2 px-8 py-12 rounded-3xl md:-mt-24">
                                    <h2 class="text-2xl sm:text-3xl font-semibold text-primary">Preguntas frecuentes
                                    </h2>
                                    <div
                                        class="mt-6 divide-y divide-gray-200 rounded-2xl bg-gray-50 ring-1 ring-accent-2">
                                        <details open v-for="(f, i) in faqs" :key="i" class="p-5 marker:text-accent-3">
                                            <summary class="cursor-pointer font-medium">
                                                <span class="ml-3 text-primary font-sans font-semibold">{{ f.q }}</span>
                                            </summary>
                                            <p class="mt-4 text-primary/50">{{ f.a }}</p>
                                        </details>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </div>
    </section>
</template>

<style scoped>
/* Si manejas tu color primario por clase .text-primary-*, ya está alineado. 
   Si no, sustituye las utilidades necesarias. */
</style>