<script lang="ts" setup>
    import FontAwesome from "./FontAwesome.vue";
</script>

<template>
    <footer class="floating-footer">
        Made with <FontAwesome icon="heart"
                               alt="Lots of love!"
                               title="Lots of love!" /> by
        <a href="https://www.byloth.dev/"
           target="_blank"
           title="Byloth's Website">Byloth</a>.
    </footer>
</template>

<style lang="scss" scoped>
    @use "@/assets/scss/variables";

    @keyframes pulse
    {
        0% { transform: scale(1); }
        30% { transform: scale(1); }
        40% { transform: scale(1.125); }
        50% { transform: scale(1); }
        60% { transform: scale(1.125); }
        100% { transform: scale(1); }
    }

    .floating-footer
    {
        background-color: variables.$chrome-scrollbar-color;
        bottom: 0px;
        left: 0px;
        padding: 2.5rem;
        position: fixed;
        right: 0px;
        width: 100%;
        z-index: -1;

        & > .fa-heart
        {
            animation: pulse 2s infinite;
            color: red;
            cursor: help;
        }
    }
</style>
