<script lang="ts" setup>
    import FloatingFooter from "@/components/FloatingFooter.vue";
    import NavigationBar from "@/components/NavigationBar.vue";
    import VueLogo from "@/components/VueLogo.vue";
</script>

<template>
    <div class="default-layout">
        <header>
            <VueLogo />
        </header>
        <NavigationBar />
        <main>
            <slot></slot>
        </main>
        <FloatingFooter />
    </div>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .default-layout
    {
        align-items: center;
        background-color: variables.$slightly-off-white;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.5);
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height: 100vh;
        text-align: center;

        & > header
        {
            padding: 2.5rem;
            padding-bottom: 1.5rem;
        }
        & > main
        {
            flex: 1;
        }
    }
</style>
