<template>
<div class="base-card w-96">
    <p class="text-gray-700 text-sm py-2 pb-5">Login</p>
    <div class="card-body">
        <base-input
        v-model="email" autocomplete="on" name="email" placeholder="Login" label="Email" errorMessage="123123123123" />
        <base-input
        v-model="password" type="password" autocomplete="on" name="current-password" placeholder="Password" label="Password" errorMessage="123123123121231231231231231231231231231231231231231231233" />
    </div>
    <div class="card-footer">
        <base-button type="stroked" @click="onSubmit">Login</base-button>
        
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