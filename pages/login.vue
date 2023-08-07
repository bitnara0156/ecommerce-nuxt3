<template>
<div class="base-card w-96">
    <h1 class="text-gray-700 pt-2">Welcome</h1>
    <div class="card-body">    
        <base-input label="Email" v-model="form.email"></base-input>  
        <base-input label="Password" v-model="form.password"></base-input>  
    </div>
    <div class="card-footer">
        <base-button type='stroked' ></base-button>
        <small>Have no account yet? <NuxtLink to="/signup" class="text-link">Sign Up</NuxtLink></small>
    </div>
</div>  
</template>

<script lang="ts" setup>
    import useAuth from "../composables/useAuth"
    const {currentUser, loginUsingEmailAndPassword} = useAuth()
    const form = reactive({
        email: '',
        password: ''
    })
    async function onSubmit(e: Event) {
        await loginUsingEmailAndPassword(form.email, form.password);
        [form.email, form.password] = ['', '']
    }
</script>

<style>

</style>