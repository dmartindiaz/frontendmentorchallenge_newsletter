<template>
    <div class="flex flex-col gap-2 justify-start">
        <div class="flex flex-row items-center justify-between">
            <label v-if="props.leftLabel" :class="props.leftLabelClass">{{ props.leftLabel }}</label>
            <label v-if="props.rightLabel" :class="props.rightLabelClass">{{ props.rightLabel }}</label>
        </div>
        <input :type="props.type" v-model="model" :placeholder="props.holder" class="p-2" :class = "`${rounded} ${shadow} ${border} ${props.inputStyle}`"/>
    </div>
</template>
<script lang="ts" setup>
type InputType = "text" | "email"
const model = defineModel()
const props = defineProps({
    holder: String,
    leftLabel: String,
    leftLabelClass: String,
    rightLabel: String,
    rightLabelClass: String,
    shadow: Boolean,
    border: Boolean,
    rounded: Boolean,
    inputStyle: String,
    type: String as PropType<InputType>
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