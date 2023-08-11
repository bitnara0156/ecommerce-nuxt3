<template>
    <form class="base-card w-96" @submit.prevent="onSubmit">
        <p class="text-gray-700 text-sm py-2">Sign Up</p>
        <div class="card-body">
            <base-input v-model="form.email" label="Email" :error-message="v$.email.$errors[0]?.$message.toString()"></base-input>
            <base-input v-model="form.login" label="Login" :error-message="v$.login.$errors[0]?.$message.toString()"></base-input>
            <base-input v-model="form.password" label="Password" :error-message="v$.password.$errors[0]?.$message.toString()"></base-input>
            <base-input v-model="form.repeatPassword" label="Repeat password" :error-message="v$.repeatPassword.$errors[0]?.$message.toString()"></base-input>
        </div>
        <div class="card-footer">
            <base-button theme="stroked">Sign Up</base-button>
            <small>Already have an account? <NuxtLink to="/login" class="text-link">Login</NuxtLink></small>
            <small v-if="message">{{ message }}</small>
        </div>
    </form>
</template>

<script lang="ts" setup>
    import useAuth from "../composables/useAuth"
    import { useVuelidate } from "@vuelidate/core"
    import { required, minLength, email, sameAs } from "@vuelidate/validators"
    import { AuthError } from "firebase/auth";
    const { signUpUsingEmailAndPassword, loading } = useAuth()
    const message = ref('');
    const form = reactive({
        email: '',
        login: '',
        password: '',
        repeatPassword: ''
    })
    const rules = computed(() => {
        return {
            email: { required, email },
            login: { required, minLength: minLength(6) },
            password: { required, minLength: minLength(6) },
            repeatPassword: { required, sameAs: sameAs(form.password)}
        }
    });
    const v$ = useVuelidate(rules, form);
    async function onSubmit() {
        if (!await v$.value.$validate()) return;
        try {
            await signUpUsingEmailAndPassword(form.email, form.password)
        } catch (e) {
            const error = e as AuthError;
            message.value = error.message
        }
    }
</script>