<script lang="ts" setup></script>

<template>
    <!-- eslint-disable vue/multiline-html-element-content-newline -->
    <nav class="navigation-bar">
        <RouterLink :to="{ name: 'home' }">
            Home</RouterLink> |
        <RouterLink :to="{ name: 'about' }">
            About</RouterLink>
    </nav>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    .navigation-bar
    {
        padding: 1rem;

        & > .router-link-exact-active
        {
            color: variables.$not-quite-black;
            font-weight: bold;
        }
    }
</style>
