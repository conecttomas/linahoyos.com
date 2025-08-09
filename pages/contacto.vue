<script setup>

</script>

<template>
    <section class="overflow-hidden py-24 sm:pt-44">
        <div class="mx-auto container px-5">
            <div
                class="mx-auto grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pt-4 lg:pr-8">
                    <div class="lg:max-w-xl">
                        <h2 class="text-base lg:text-lg font-semibold text-accent-3" v-motion-fadein-down-enter>
                            ¡Hablemos sobre tu marca!
                        </h2>
                        <p class="mt-2 text-3xl font-semibold tracking-tight text-pretty text-primary sm:text-4xl sm:text-balance"
                            v-motion-fadein-down-enter>
                            Ayudo a empresas y particulares a desarrollar sus directrices de marca
                        </p>
                        <form action="#" method="POST" class="lg:flex-auto mt-10">
                            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                                <div>
                                    <label for="first-name" class="block text-sm/6 font-semibold text-primary-900">Nombres</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name"
                                            class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                    </div>
                                </div>
                                <div>
                                    <label for="last-name" class="block text-sm/6 font-semibold text-primary-900">Apellidos</label>
                                    <div class="mt-2.5">
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name"
                                            class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                    </div>
                                </div>
                                <div>
                                    <label for="email"
                                        class="block text-sm/6 font-semibold text-primary-900">Correo electrónico</label>
                                    <div class="mt-2.5">
                                        <input id="email" name="email" type="email"
                                            class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                    </div>
                                </div>
                                <div>
                                    <label for="website"
                                        class="block text-sm/6 font-semibold text-primary-900">Teléfono</label>
                                    <div class="mt-2.5">
                                        <input type="url" name="website" id="website"
                                            class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                    </div>
                                </div>
                                <div class="sm:col-span-2">
                                    <label for="message"
                                        class="block text-sm/6 font-semibold text-primary-900">Mensaje</label>
                                    <div class="mt-2.5">
                                        <textarea id="message" name="message" rows="4"
                                            class="block w-full rounded-md bg-muted px-3.5 py-2 text-base text-primary/50 outline-1 -outline-offset-1 outline-primary backdrop-blur-sm placeholder:text-primary/50 focus:outline-2 focus:-outline-offset-2 focus:outline-primary-900" />
                                    </div>
                                </div>
                            </div>
                            <div class="mt-10">
                                <button type="submit"
                                    class="rounded-lg w-full bg-accent-3 px-4 py-2.5 text-base font-semibold text-primary shadow-xs hover:bg-primary hover:text-accent-3 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                                    Enviar
                                </button>
                            </div>
                            <p class="mt-4 text-sm/6 text-primary/50">Al enviar este formulario, acepto la <a href="#"
                                    class="font-semibold whitespace-nowrap text-primary hover:text-accent-3">política de privacidad</a>.</p>
                        </form>

                        <!-- <dl class="mt-10 max-w-xl space-y-8 text-base text-primary/50 lg:max-w-none">
                            <div class="relative pl-9" v-motion-fadein-down-enter>
                                <dt class="inline font-semibold text-primary text-xl">
                                    <svg class="absolute top-1 left-1 size-5 text-accent-1" viewBox="0 0 24 24"
                                        fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path
                                            d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                        </path>
                                    </svg>
                                    Mentoría de Marca Personal Consciente.
                                </dt>
                                <dd class="inline text-xl">Guío a profesionales con mi Método P.A.T.H. para integrar su
                                    propósito de vida con su carrera.
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
                                    Coaching de Liderazgo Consciente.
                                </dt>
                                <dd class="inline text-xl">Acompaño procesos de autoliderazgo, porque liderar a otros
                                    comienza por liderarse a uno mismo.</dd>
                            </div>
                            <div class="relative pl-9" v-motion-fadein-down-enter>
                                <dt class="inline font-semibold text-primary text-xl">
                                    <svg class="absolute top-1 left-1 size-5 text-accent-4" viewBox="0 0 24 24"
                                        fill="currentColor" aria-hidden="true" data-slot="icon">
                                        <path
                                            d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A1 1 0 0 0 5 3v18a1 1 0 0 0 .536.886z">
                                        </path>
                                    </svg>
                                    Estrategia de Marca con Impacto.
                                </dt>
                                <dd class="inline text-xl">Como CMO, ayudo a empresas a definir su valor auténtico y
                                    crecer
                                    con estrategias que dejan huella.</dd>
                            </div>
                        </dl> -->
                    </div>
                </div>
                <div class="relative">
                    <img src="/IMG_9305.JPG" alt="Product screenshot"
                        class="rounded-3xl shadow-xl aspect-square object-cover">
                </div>
            </div>
        </div>
    </section>
</template>