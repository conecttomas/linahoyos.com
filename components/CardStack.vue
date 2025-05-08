<template>
    <section>
        <div class="container mx-auto">
            <div class="grid grid-cols-2 gap-10">
                <div class="bg-white relative">
                    <div class="sticky top-1/4 h-[50vh] w-full flex flex-col items-center justify-center">
                        <div>
                            <span class="text-base text-primary">Lorem, ipsum.</span>
                            <h1 class="text-5xl mt-2">Lorem ipsum dolor sit.</h1>
                            <p class="mt-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quidem,
                                deserunt molestiae aspernatur, voluptatibus incidunt neque numquam corporis suscipit
                                soluta maxime illum ipsam ad, nihil perspiciatis dolore tempora libero! Sed id ipsum
                                aperiam quae impedit?</p>

                        </div>
                    </div>
                </div>
                <div class="relative">
                    <div
                        class="sticky top-1/4 h-[50vh] w-full rounded-3xl flex flex-col items-center justify-center bg-secondary-500">
                        <h2 class="text-4xl font-bold">The First slide</h2>
                        <p class="mt-2">Scroll Down for next slide</p>
                    </div>
                    <div
                        class="sticky top-1/4 h-[50vh] w-full rounded-3xl flex flex-col items-center justify-center bg-primary text-white">
                        <h2 class="text-4xl font-bold">The Second slide</h2>
                        <p class="mt-2">Scroll Down for next slide</p>
                    </div>
                    <div
                        class="sticky top-1/4 h-[50vh] w-full rounded-3xl flex flex-col items-center justify-center bg-secondary to-pink-800 text-white">
                        <h2 class="text-4xl font-bold">The Third slide</h2>
                        <p class="mt-2">Scroll Down</p>
                    </div>
                    <div
                        class="sticky top-1/4 h-[50vh] w-full rounded-3xl flex flex-col items-center justify-center bg-primary-500 text-black">
                        <h2 class="text-4xl font-bold">The Fourth slide</h2>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>

</script>

<style lang="scss" scoped></style>