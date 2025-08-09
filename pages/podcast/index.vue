<script setup>
definePageMeta({
  layout: 'podcast'
});

const store = usePodcastStore();
</script>

<template>
    <div class="flex min-h-full">
        <div class="w-full">
            <PodcastHeader />

            <section class="border-t border-primary-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
                <PodcastStream />

                <div class="relative">
                    <div class="pt-16 pb-12 sm:pb-4 lg:pt-12">
                        <div class="lg:px-8">
                            <div class="lg:max-w-4xl">
                                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                                    <h1 class="text-2xl/7 font-bold text-primary-900">Episodios</h1>
                                </div>
                            </div>
                        </div>
                        <div class="divide-y divide-primary-100 sm:mt-4 lg:mt-8 lg:border-t lg:border-primary-100">
                            <PodcastArticle v-for="(episode, index) in store.episodies" :episode="episode" :index="index" :key="index" />
                        </div>
                    </div>
                </div>
            </section>

            <PodcastFooter />

            <PodcastPlayer /> 
        </div>
    </div>
</template>