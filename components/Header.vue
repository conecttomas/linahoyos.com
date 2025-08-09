<script setup>
let offsetTop = ref(0)
onMounted(() => {
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

        offsetTop.value = currentScroll;
    });
});

const menu = [
    { label: "Sobre mí", hash: "/sobre-mi" },
    { label: "Como te puedo acompañar", hash: "/acompañamiento" },
    { label: "Conferencias", hash: "/conferencias" },
    { label: "Podcast", hash: "/podcast" }
]
</script>

<template>
    <header :class="[
        'bg-transparent fixed insect-x-0 top-0 w-full z-30 transition-all duration-300 ease-in-out',
        { 'bg-transparent py-14 px-8': offsetTop === 0 },
        { 'bg-white shadow-md shadow-primary/5 px-5 py-8': offsetTop > 0 },
    ]" v-motion-fadein-once>
        <nav class="mx-auto flex container items-center justify-between" aria-label="Global">
            <a href="#" class="-m-1.5 p-1.5">
                <span class="sr-only">Lina Hoyos</span>
                <Logo :class="[
                    'h-8 md:h-14',
                    { 'text-white': offsetTop === 0 },
                    { 'text-primary': offsetTop > 0 },
                ]" />
            </a>
            <div class="flex lg:hidden">
                <button type="button"
                    class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                    <span class="sr-only">Open main menu</span>
                    <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true" data-slot="icon">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:gap-x-12 items-center">
                <NuxtLink :to="item?.hash" v-for="(item, index) in menu" :key="index" :class="[
                    'text-base font-normal',
                    { 'text-white': offsetTop === 0 },
                    { 'text-primary': offsetTop > 0 },
                ]">{{ item?.label }}</NuxtLink>

                <NuxtLink to="contacto"
                    class="rounded-lg bg-accent-2 px-4 py-2.5 text-base font-semibold text-primary shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                    Contáctame
                </NuxtLink>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div class="lg:hidden hidden" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto"
                            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" alt="">
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700">
                        <span class="sr-only">Close menu</span>
                        <svg class="size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true" data-slot="icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Product</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base/7 font-semibold text-gray-900 hover:bg-gray-50">Log
                                in</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>