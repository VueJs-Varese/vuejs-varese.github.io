<script lang="ts" setup>
    import { computed } from "vue";

    const props = defineProps({
        icon: {
            type: String,
            required: true
        },
        brands: {
            type: Boolean,
            default: false
        }
    });

    const classes = computed(() =>
    {
        if (props.brands)
        {
            return ["fa-brands", `fa-${props.icon}`];
        }
        else
        {
            return ["fa-solid", `fa-${props.icon}`];
        }
    });
</script>

<template>
    <span class="fa" :class="classes"></span>
</template>

<style lang="scss" scoped></style>
