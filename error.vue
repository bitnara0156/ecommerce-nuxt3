<template>
    <div class="">
        404 :(
        {{ error }}
    </div>
</template>

<script lang="ts" setup>
    const props = defineProps({
        error: Object
    })
</script>
