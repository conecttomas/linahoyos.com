<template>
    <div class="relative bg-white h-screen">
        <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8">
            <div class="px-6 pt-10 pb-24 sm:pb-32 lg:col-span-7 lg:px-0 lg:pt-40 lg:pb-48 xl:col-span-6">
                <div class="mx-auto max-w-lg lg:mx-0">
                    <div class="hidden sm:flex">
                        <div
                            class="relative rounded-full px-3 py-1 text-sm/6 text-gray-500 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                            Anim aute id magna aliqua ad ad non deserunt sunt. <a href="#"
                                class="font-semibold whitespace-nowrap text-indigo-600"><span class="absolute inset-0"
                                    aria-hidden="true"></span>Read more <span aria-hidden="true">&rarr;</span></a>
                        </div>
                    </div>
                    <h1
                        class="mt-24 text-5xl font-semibold tracking-tight text-pretty text-gray-900 sm:mt-10 sm:text-7xl">
                        Data to enrich your business</h1>
                    <p class="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Anim aute id magna
                        aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                        veniam occaecat.</p>
                    <div class="mt-10 flex items-center gap-x-6">
                        <button class="btn btn-primary">Get started</button>
                        <a href="#" class="text-sm/6 font-semibold text-gray-900">Learn more <span
                                aria-hidden="true">→</span></a>
                    </div>
                </div>
            </div>
            <div class="relative lg:col-span-5 lg:-mr-8 xl:absolute xl:inset-0 xl:left-1/2 xl:mr-0">
                <img class="aspect-3/2 w-full bg-gray-50 object-cover lg:absolute lg:inset-0 lg:aspect-auto lg:h-full"
                    src="https://picsum.photos/1000/1000?random=1" alt="">
            </div>
        </div>
    </div>
</template>

<script setup>
const store = useMainStore();
</script>