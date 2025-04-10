<template>
    <div data-theme="base">
        <Onboarding v-if="store.type === null" />

        <div>
            <Header />
            <slot />
            <Footer />
        </div>
    </div>
</template>

<script setup>
const store = useMainStore();
</script>