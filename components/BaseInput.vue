<template>
<div class="text-ellipsis whitespace-nowrap mt-7">
    <div
        class="flex flex-col"
        :class="{
            'relative': label
        }"
        >
        <label
            v-if="label"
            class="text-xs text-gray-600 absolute top-1/2 -translate-y-1/2 left-2 transition-all text-ellipsis overflow-hidden whitespace-nowrap pointer-events-none"
            :class="{
                'text-red-300': errorMessage, 
                '-top-3 text-primary-200': focused || modelValue
            }"
        >
            {{ label }}
        </label>
        <input
            :value="props.modelValue"
            @input="onInput"
            @focusin="focused = true"
            @focusout="focused = false"
            :placeholder="label ? '' : placeholder"
            :autocomplete="autocomplete"
            :name="name"
            :type="type"
            class="outline-none rounded px-2 py-1 text-sm border border-gray-300 focus:border-primary-200 transition-colors text-gray-700 h-10 placeholder:text-xs placeholder:pb-5"
            :class="{
                'border-red-300': errorMessage,
                'border-primary-200': modelValue
            }"
        />
    </div>
    <small class="text-xs block text-red-500 opacity-0 transition-opacity h-4 overflow-hidden text-ellipsis whitespace-nowrap" :class="{'opacity-100': errorMessage}" >{{ errorMessage }}</small>
</div>
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
        },
        label: {
            type: String,
            required: false,
            default: ''
        },
        errorMessage: {
            type: String,
            required: false,
            default: ''
        },
        autocomplete: {
            type: String,
            required: false,
            default: ''
        },
        name: {
            type: String,
            required: false,
            default: ''
        },
        type: {
            type: String,
            required: false,
            default: 'text'
        }
    })
    const emits = defineEmits(['update:modelValue'])
    const focused = ref(false)
    function onInput(event: Event) {
        const inputValue: String = (event.target as HTMLInputElement).value as String
        emits('update:modelValue', inputValue)        
    }
</script>

<style>

</style>