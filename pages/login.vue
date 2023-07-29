<template>
<div class="base-card w-96">
    <h1 class="text-gray-700 pt-2">Welcome</h1>
    <div class="card-body">    
        <base-input label="Email" v-model="email"></base-input>  
        <base-input label="Password" v-model="password"></base-input>  
    </div>
    <div class="card-footer">
        <base-button type='stroked'>Login</base-button>
        <small>Have no account yet? <NuxtLink to="/signup" class="text-link">Sign Up</NuxtLink></small>
    </div>
</div>  
</template>

<script lang="ts" setup>
    import useAuth from "../composables/useAuth"
    const {currentUser, loginUsingEmailAndPassword} = useAuth()
    const email = ref(''),
          password = ref('')
    async function onSubmit(e: Event) {
        await loginUsingEmailAndPassword(email.value, password.value);
        [email.value, password.value] = ['', '']
    }
</script>

<style>

</style>