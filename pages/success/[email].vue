<template>
    <div class="flex flex-col min-h-screen min-w-screen justify-center items-center bg-gray-800">
        <div class="flex flex-col rounded-lg bg-white p-10 items-center max-w-sm">
            <Vcard :startIcon = "{icon: 'material-symbols:check-circle-rounded', iconStyle: 'text-orange-600 text-6xl mb-5'}"  title = "Thanks for subscribing" :description = "`A confirmation email has been sent to ${route.params.email}. Please, open it and click the button inside to confirm your subscription.`"/>
            <Vbutton @click = "router.push('/')"
            button-style="w-full text-white bg-gray-800 p-3 hover:bg-gradient-to-tr hover:from-orange-600 hover:to-red-500 hover:shadow-lg hover:shadow-orange-500/50 duration-300"
            rounded title="Dismiss message" />
        </div>
    </div>
</template>
<script lang="ts" setup>
const route = useRoute()
const router = useRouter()
</script>