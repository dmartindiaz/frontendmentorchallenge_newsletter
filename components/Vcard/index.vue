<template>
    <div class="flex flex-col">
        <Icon v-if="props.startIcon" :name="props.startIcon.icon" :class="props.startIcon.iconStyle"/> 
        <div class="flex flex-col gap-5 mb-5">
            <h1 class="font-extrabold text-5xl">{{ props.title }}</h1>
            <p>{{ props.description }}</p>
        </div>
        <template v-for="(check, i) in props.checks" :key="i">
            <div class="flex flex-row gap-2 items-center mb-2">
                <Icon :name="check.icon" :class="check.iconStyle" />
                <p>{{ check.title }}</p>
            </div>
        </template>
    </div>
</template>
<script lang="ts" setup>
interface TitleCheckInterface {
    title: string,
    icon: string,
    iconStyle: string
}
interface StartIconInterface {
    icon: string,
    iconStyle: string
}
const props = defineProps({
    startIcon: Object as PropType<StartIconInterface>,
    title: String,
    description: String,
    checks: Array as PropType<Array<TitleCheckInterface>>
})

</script>