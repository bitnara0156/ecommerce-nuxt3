<template>
<div class="base-card w-64">
    <p class="text-gray-700 text-sm py-2">Login</p>
    <div class="card-body">
        <base-input v-model="login" placeholder="Login"></base-input>
        <base-input v-model="password" placeholder="Password"></base-input>
    </div>
    <div class="card-footer">
        <base-button type="stroked">Login</base-button>
        <small>Have no account yet? <NuxtLink to="/signup" class="text-link">Sign Up</NuxtLink></small>
    </div>
</div>  
</template>

<script lang="ts" setup>
    const login = ref(''),
          password = ref('')
    function onSubmit(e: Event) {
        [login.value, password.value] = ['', '']
        console.log('onSubmit')
    }
</script>

<style>

</style>