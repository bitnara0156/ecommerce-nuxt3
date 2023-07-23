<template>
    <div class="base-card w-64">
        <p class="text-gray-700 text-sm py-2">Sign Up</p>
        <div class="card-body">
            <base-input v-model="form.email" placeholder="Email"></base-input>
            <base-input v-model="form.login" placeholder="Login"></base-input>
            <base-input v-model="form.password" placeholder="Password"></base-input>
            <base-input v-model="form.repeatPassword" placeholder="Repeat password"></base-input>
        </div>
        <div class="card-footer">
            <base-button type="stroked">Sign Up</base-button>
            <small>Already have an account? <NuxtLink to="/login" class="text-link">Login</NuxtLink></small>
        </div>
    </div>
</template>

<script lang="ts" setup>

    const form = ref({
        email: '',
        login: '',
        password: '',
        repeatPassword: ''
    })
    watch(form, (newVal) => {
        console.log(newVal)
    }, {deep: true})

</script>