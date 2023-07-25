<template>
    <div class="base-card w-64">
        <p class="text-gray-700 text-sm py-2">Sign Up</p>
        <div class="card-body" v-if="!loading">
            <base-input v-model="form.email" label="Email"></base-input>
            <base-input v-model="form.login" label="Login"></base-input>
            <base-input v-model="form.password" label="Password"></base-input>
            <base-input v-model="form.repeatPassword" label="Repeat password"></base-input>
        </div>
        <div class="flex flex-col" v-else>
            loading
        </div>
        <div class="card-footer">
            <base-button type="stroked" @click="onSubmit">Sign Up</base-button>
            <small>Already have an account? <NuxtLink to="/login" class="text-link">Login</NuxtLink></small>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import useAuth from "../composables/useAuth"
    const { signUpUsingEmailAndPassword, loading } = useAuth()
    const form = ref({
        email: '',
        login: '',
        password: '',
        repeatPassword: ''
    })
    async function onSubmit() {
        await signUpUsingEmailAndPassword(form.value.email, form.value.password)
    }

</script>