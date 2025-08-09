<script setup>
const store = usePodcastStore();
defineProps({
    episode: {
        type: Object,
        required: true
    },
    index: {
        type: Number,
        required: true
    }
})
</script>

<template>
    <article :aria-labelledby="episode?.slug" class="py-10 sm:py-12">
        <div class="lg:px-8">
            <div class="lg:max-w-4xl">
                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                    <div class="flex flex-col items-start">
                        <h2 id="episode-5-title" class="mt-2 text-lg font-bold text-primary-900">
                            <NuxtLink to="/podcast/5">{{ episode?.title }}</NuxtLink>
                        </h2>
                        <time datetime="2022-02-24T00:00:00.000Z"
                            class="order-first font-sans text-sm/7 text-primary-500">
                            {{ episode?.date }}
                        </time>
                        <p class="mt-1 text-base/7 text-primary-900/50">
                            {{ episode?.intro }}
                        </p>
                        <div class="mt-4 flex items-center gap-4">
                            <button type="button" :aria-label="`Escuchar episodio ${index + 1}: ${episode?.title}`" @click="store.current = index"
                                class="flex items-center gap-x-3 text-sm/6 font-bold text-secondary-500 hover:text-secondary-700 active:text-secondary-900">
                                <svg aria-hidden="true" viewBox="0 0 10 10" class="h-2.5 w-2.5 fill-current">
                                    <path
                                        d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z">
                                    </path>
                                </svg>
                                <span aria-hidden="true">Escuchar</span>
                            </button>
                            <span aria-hidden="true" class="text-sm font-bold text-primary-400">/</span>
                            <NuxtLink :to="`/podcast/${episode?.slug}`"
                                class="flex items-center text-sm/6 font-bold text-secondary-500 hover:text-secondary-700 active:text-secondary-900"
                                aria-label="Show notes for episode 5: Bill Lumbergh">
                                Ver notas
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </article>
</template>