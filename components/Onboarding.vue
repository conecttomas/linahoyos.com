<template>
    <div class="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <Transition enter-active-class="ease-out duration-300" enter-from-class="opacity-0" enter-to-class="opacity-100"
            leave-active-class="ease-in duration-200" leave-from-class="opacity-100" leave-to-class="opacity-0">
            <div class="fixed inset-0 bg-secondary transition-opacity" aria-hidden="true"></div>
        </Transition>


        <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
            <Transition enter-active-class="ease-out duration-300"
                enter-from-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to-class="opacity-100 translate-y-0 sm:scale-100" leave-active-class="ease-in duration-200"
                leave-from-class="opacity-100 translate-y-0 sm:scale-100"
                leave-to-class="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <div class="absolute inset-4 md:inset-8 flex items-center justify-center transform overflow-hidden rounded-lg bg-white text-center shadow-xl transition-all bg-cover bg-no-repeat bg-center"
                    style="background-image: url('https://coaching.thimpress.com/life-coaching/wp-content/uploads/sites/50/2024/03/bg-hero-section-02.jpg')">

                    <div class="max-w-2xl text-white">
                        <h1 class="text-5xl font-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
                        <p class="py-6">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, praesentium. Error unde illum dicta quas aperiam similique eum cumque odit!
                        </p>
                        <div class="space-x-6">
                            <button class="btn btn-primary btn-lg" @click.prevent="store.setType('personal')">Persona</button>
                            <button class="btn btn-primary btn-lg" @click.prevent="store.setType('business')">Empresa</button>
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>

</template>

<script setup>
const store = useMainStore();
</script>
