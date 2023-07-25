<template>
  <div class="flex flex-col">
    <NuxtLayout name="auth">
      <NuxtPage></NuxtPage>
    </NuxtLayout>
  </div>
</template>
<script lang="ts" setup>
  
  import useAuth from './composables/useAuth';
  const { currentUser, loading } = useAuth()
  
</script>
