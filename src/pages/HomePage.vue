<script lang="ts" setup>
    import FontAwesome from "@/components/FontAwesome.vue";
</script>

<template>
    <h1>The Vue.js Varese website is up and running! 🚀</h1>
    <hr />
    <p>Here's some useful contacts:</p>
    <ul>
        <li>
            <FontAwesome brands icon="github" />
            <a href="https://github.com/vuejs-varese"
               target="_blank"
               title="GitHub">@vuejs-varese</a>
        </li>
        <li>
            <FontAwesome brands icon="instagram" />
            <a href="https://www.instagram.com/vuejs_varese/"
               target="_blank"
               title="Instagram">@vuejs_varese</a>
        </li>
        <li>
            <FontAwesome brands icon="linkedin" />
            <a href="https://www.linkedin.com/company/vuejs-varese/"
               target="_blank"
               title="LinkedIn">@vuejs-varese</a>
        </li>
        <li>
            <FontAwesome brands icon="telegram" />
            <a class="bold"
               href=" https://t.me/vuejs_varese"
               target="_blank"
               title="Telegram">@vuejs_varese</a>
            <span class="bold mark" title="The only one currently active!">*</span>
        </li>
        <li>
            <FontAwesome brands icon="x-twitter" />
            <a href="https://twitter.com/vuejs_varese"
               target="_blank"
               title="X / Twitter">@vuejs_varese</a>
        </li>
        <li>
            <FontAwesome brands icon="youtube" />
            <a href="https://www.youtube.com/@vuejs-varese"
               target="_blank"
               title="YouTube">@vuejs-varese</a>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
    p,
    ul
    {
        text-align: left;
    }
    li
    {
        list-style-type: none;
    }

    .fa-brands
    {
        margin-right: 0.5rem;
    }

    .bold
    {
        font-weight: bold;
    }
    .mark
    {
        background-color: transparent;
        color: red;
        cursor: help;
    }
</style>
