<template>
    <img :src="props.src" alt="">
</template>
<script lang="ts" setup>
    const props = defineProps({
        src: String
    })
</script>