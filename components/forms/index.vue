<template>
    <form @submit.prevent="sendForm" class="flex flex-col gap-4 mt-5">
        <Vinput type="text" :input-style="inputStyle"
            v-model="model" :holder="props.holder" border rounded :left-label="props.label"
            left-label-class="text-sm font-bold"
            :right-label="props.msgLabel ?? state.invalidEmail ? state.invalidMsg : undefined"
            :right-label-class="'text-red-500 text-sm italic'" />
        <Vbutton
            button-style="w-full text-white bg-gray-800 p-3 hover:bg-gradient-to-tr hover:from-orange-600 hover:to-red-500 hover:shadow-lg hover:shadow-orange-500/50 duration-300"
            rounded :title="props.buttonTitle" />
    </form>
</template>
<script lang="ts" setup>
const model = defineModel({ default: "" })
const props = defineProps({
    label: String,
    msgLabel: String,
    holder: String,
    buttonTitle: String,
    formAction: {
        type: Function,
        default: () => { }
    }
})

const state = reactive({
    invalidEmail: false,
    invalidMsg: 'Valid email required',
})

const sendForm = () => {
    console.log(validateEmail())
    validateEmail() ? props.formAction() : (() => {
        state.invalidEmail = true
        setTimeout(() => {
            state.invalidEmail = false
        }, 2500)
    })()
}

const inputStyle = computed(() => {
    return !state.invalidEmail ? "hover:border-2 hover:border-black hover:cursor-pointer duration-300" : "hover:border-2 hover:border-black hover:cursor-pointer duration-300 border-red-500 border bg-red-100 placeholder-red-500"
})

const validateEmail = () => {
    const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    return model.value.match(validRegex) ? true : false
}

defineExpose({ sendForm })
</script>