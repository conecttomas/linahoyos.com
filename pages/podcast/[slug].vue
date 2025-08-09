<script setup>
definePageMeta({
    layout: 'podcast'
});
</script>

<template>
    <div class="flex min-h-full">
        <div class="w-full">
            <PodcastHeader />

            <section class="border-t border-primary-200 lg:relative lg:mb-28 lg:ml-112 lg:border-t-0 xl:ml-120">
                <PodcastStream />

                <div class="relative">
                    <article class="py-16 lg:py-36">
                        <div class="lg:px-8">
                            <div class="lg:max-w-4xl">
                                <div class="mx-auto px-4 sm:px-6 md:max-w-2xl md:px-4 lg:px-0">
                                    <header class="flex flex-col">
                                        <div class="flex items-center gap-6"><button type="button"
                                                aria-label="Play episode 5: Bill Lumbergh"
                                                class="group relative flex h-18 w-18 shrink-0 items-center justify-center rounded-full bg-primary-700 hover:bg-primary-900 focus:ring-3 focus:ring-primary-700 focus:ring-offset-4 focus:outline-hidden"><svg
                                                    viewBox="0 0 36 36" aria-hidden="true"
                                                    class="h-9 w-9 fill-white group-active:fill-white/80">
                                                    <path
                                                        d="M33.75 16.701C34.75 17.2783 34.75 18.7217 33.75 19.299L11.25 32.2894C10.25 32.8668 9 32.1451 9 30.9904L9 5.00962C9 3.85491 10.25 3.13323 11.25 3.71058L33.75 16.701Z">
                                                    </path>
                                                </svg></button>
                                            <div class="flex flex-col">
                                                <h1 class="mt-2 text-4xl font-bold text-primary-900">5: Bill Lumbergh</h1>
                                                <time datetime="2022-02-24T00:00:00.000Z"
                                                    class="order-first font-mono text-sm/7 text-primary-500">February 24,
                                                    2022</time>
                                            </div>
                                        </div>
                                        <p class="mt-3 ml-24 text-lg/8 font-medium text-primary-700">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis dignissimos illo error, in dicta eius ab quaerat incidunt laboriosam impedit ullam aspernatur esse amet? Quibusdam.
                                        </p>
                                    </header>
                                    <hr class="my-12 border-gray-200">
                                    <div
                                        class="podcast-content mt-14">
                                        <h2 class="mt-12 flex items-center font-sans text-lg font-medium text-primary-900" id="topics">Tópicos</h2>
                                        <ul class="mt-6 list-disc list-inside pl-5 marker:text-primary-200 text-primary-900">
                                            <li>What are TPS reports exactly, and what's the motivation for adding the
                                                cover sheet?</li>
                                            <li>How Bill preserves such a cool and calm demeanor, despite the extreme
                                                consequences Initech faces for not finishing their Y2K upgrades on time,
                                                and why it's important to protect the staff from that stress</li>
                                            <li>Why suspenders and belts aren't enough on their own, and should be used
                                                together</li>
                                            <li>The backstory behind how Bill purchased his Porsche 911</li>
                                            <li>The real reason he needed the red stapler for himself</li>
                                        </ul>
                                        <h2 class="mt-12 flex items-center font-sans text-lg font-medium text-primary-900" id="sponsors">Patrocinadores</h2>
                                        <ul class="mt-6 list-disc list-inside pl-5 marker:text-primary-200 text-primary-900">
                                            <li><a href="#">Initech</a> — Pioneers of the TPS report, Initech is
                                                actively looking for job-seekers with people skills who can work with
                                                customers to gather specifications and deliver them to the software
                                                people.</li>
                                            <li><a href="#">Globex Corporation</a> — Just a friendly and innocent
                                                high-tech company, with a casual work environment and an office without
                                                walls. Anything you've heard about a “doomsday device” is pure
                                                conjecture and not based in fact.</li>
                                        </ul>
                                        <h2 class="mt-12 flex items-center font-sans text-lg font-medium text-primary-900" id="links">Enlaces</h2>
                                        <u class="mt-6 list-disc list-inside pl-5 marker:text-primary-200 text-primary-900">
                                            <li>Bill Lumbergh's <a href="#">Twitter profile</a></li>
                                            <li>Bill Lumbergh's <a href="#">personal website</a></li>
                                            <li>“What's happening?”, Bill's new book on effective management <a
                                                    href="#">on Amazon</a></li>
                                        </u>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <PodcastFooter />

            <PodcastPlayer />
        </div>
    </div>
</template>