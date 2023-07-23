<template>
  <input
  :value="props.modelValue"
  @input="onInput"
  :placeholder="props.placeholder"
  type="text" class="outline-none rounded px-2 py-1 text-sm border border-gray-200 focus:border-primary-200 transition-colors"/>
</template>

<script lang="ts" setup>

    const props = defineProps({
        modelValue: {
            type: String,
            required: true
        },
        placeholder: {
            type: String,
            required: false,
            default: ''
        }
    })
    const emits = defineEmits(['update:modelValue'])

    function onInput(event: Event) {
        const inputValue: String = (event.target as HTMLInputElement).value as String
        emits('update:modelValue', inputValue)        
    }
</script>

<style>

</style>