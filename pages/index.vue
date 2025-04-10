<template>
    <Transition name="fade" mode="out-in">
        <div v-if="dynamicComponent">
            <component :is="dynamicComponent" />
        </div>
    </Transition>
</template>

<script setup>
const store = useMainStore();

const dynamicComponent = shallowRef(null)

async function loadComponent(componentName) {
    dynamicComponent.value = defineAsyncComponent(() =>
        import(`~/components/Pages/Home/${componentName}.vue`)
    )
}

watch(
    () => store.type,
    (newType) => {
        if (newType) {
            loadComponent(newType.charAt(0).toUpperCase() + newType.slice(1))
        }
    },
    { immediate: true }
)
</script>

<style>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>