<template>
    <button class="px-4" :class="`${shadow} ${border} ${props.buttonStyle} ${rounded}`">{{ title }}
        <slot v-if="!props.title" name="title"></slot>
    </button>
</template>
<script lang="ts" setup>
import type { ColorType } from "../../interface/style"
const props = defineProps({
    title: {
        type: String,
    },
    shadow: Boolean,
    border: Boolean,
    rounded: Boolean,
    buttonStyle: String,
})

const rounded = computed(() => {
    return props.rounded ? "rounded-lg" : ""
})

const shadow = computed(() => {
    return props.shadow ? 'shadow' : ''
})

const border = computed(() => {
    return props.border ? 'border' : ''
})
</script>