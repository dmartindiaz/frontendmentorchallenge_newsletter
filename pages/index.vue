<template>
    <div class="flex flex-col min-h-screen min-w-screen justify-center items-center sm:bg-gray-800">
        <div class="flex sm:flex-row flex-col rounded-lg bg-white p-5 sm:p-10 sm:w-5/6 lg:w-4/6 xl:w-3/6 w-full items-center">
            <div class="md:w-2/5">
                <Vcard title="Stay updated!" description="Join 60,000+ product managers receiving monthly updated on:"
                    :checks="[
                        {
                            icon: 'material-symbols-light:check-circle-rounded',
                            iconStyle: 'text-orange-600 text-2xl',
                            title: 'Product discovery and building what matters'
                        },
                        {
                            icon: 'material-symbols-light:check-circle-rounded',
                            iconStyle: 'text-orange-600 text-2xl',
                            title: 'Product discovery and building what matters'
                        },
                        {
                            icon: 'material-symbols-light:check-circle-rounded',
                            iconStyle: 'text-orange-600 text-2xl',
                            title: 'Product discovery and building what matters'
                        }
                    ]"/>
                <Forms ref = "form" v-model="state.email" label="Email address" holder="email@company.com" :buttonTitle="'Subscribe to monthly newsletter'" :formAction="successEmail"/>
            </div>
            <div class="w-3/5">
                <Vimg src="/img/form.jpg" />
            </div>
        </div>
    </div>
</template>
<script lang="ts" setup>
const form = ref() as Ref
const state = reactive({
    email: ""
})

const successEmail = () => {
    useRouter().push("/success/" + state.email)
}

</script>