<template>
<form class="base-card w-96" @submit.prevent="onSubmit">
    <h1 class="text-gray-700 pt-2">Welcome</h1>
    <div class="card-body">    
        <base-input label="Email" v-model="form.email" :error-message="v$.email.$errors[0]?.$message.toString()"></base-input>  
        <base-input label="Password" v-model="form.password" :error-message="v$.password.$errors[0]?.$message.toString()"></base-input>  
    </div>
    <div class="card-footer">
        <base-button theme='stroked'>Login</base-button>
        <small>Have no account yet? <NuxtLink to="/signup" class="text-link">Sign Up</NuxtLink></small>
        <small v-if="message">{{ message }}</small>
    </div>
</form>  
</template>

<script lang="ts" setup>
    import { useVuelidate } from '@vuelidate/core'
    import { required, email } from '@vuelidate/validators';
    import useAuth from "../composables/useAuth"
import { AuthError } from 'firebase/auth';
    const { currentUser, loginUsingEmailAndPassword } = useAuth()
    const form = reactive({
        email: '',
        password: ''
    });
    const message = ref('');
    const rules = {
        email: { required, email },
        password: { required },
    }
    const v$ = useVuelidate(rules, form);
    async function onSubmit() {
        if(!await v$.value.$validate()) return;
        try {
            await loginUsingEmailAndPassword(form.email, form.password);
        } catch (e: unknown) {
            const error = e as AuthError
            message.value = error.message;
        }
    }
</script>

<style>

</style>