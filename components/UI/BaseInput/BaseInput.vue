<template>
<div class="text-ellipsis whitespace-nowrap">
    <div
        class="flex flex-col mt-7"
        :class="{
            'relative': label
        }"
        >
        <label
            v-if="label"
            class="text-xs text-gray-600 absolute -translate-y-1/2 left-2 transition-all text-ellipsis overflow-hidden whitespace-nowrap pointer-events-none"
            :class="{
                'text-red-300': errorMessage, 
                '-top-[calc(3_*_.25rem)] text-primary-200': focused || modelValue,
                'top-1/2': !focused && !modelValue
            }"
        >
            {{ label }}
        </label>
        <input
            :value="modelValue"
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
    import BaseInputProps from "../../../interfaces/props/BaseInputProps";
    const props = defineProps({...BaseInputProps});

    const emits = defineEmits<{
        (event: 'update:modelValue', value: String):void,
    }>()

    const focused = ref(false)
    function onInput(event: Event) {
        const inputValue: String = (event.target as HTMLInputElement).value as String
        emits('update:modelValue', inputValue)        
    }
</script>

<style>

</style>