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
            class="input-label"
            :class="{
                'text-red-300': errorMessage || localError, 
                '-top-[calc(3_*_.25rem)] text-primary-200': focused || modelValue,
                'top-1/2': !focused && !modelValue
            }"
        >
            {{ label }}
        </label>
        <input
            :value="modelValue"
            @input="onInput"
            @focusin="changeFocus(true)"
            @focusout="changeFocus(false)"
            :placeholder="placeholder"
            :autocomplete="autocomplete"
            :name="name"
            :type="type"
            class="input"
            :class="{
                'border-red-300': errorMessage || localError,
                'border-primary-200': modelValue,
                'placeholder-hidden': !focused && label
            }"
        />
    </div>
    <small class="error-message" :class="{'opacity-100': errorMessage || localError}" >{{ errorMessage || localError }}</small>
</div>
</template>

<script lang="ts" setup>
    import BaseInputProps from "../../../interfaces/props/BaseInputProps";
    import {ref} from 'vue';
    const props = defineProps({...BaseInputProps});

    const emits = defineEmits<{
        (event: 'update:modelValue', value: String):void,
    }>()

    const focused = ref(false)
    const localError = ref('')
    function onInput(event: Event) {
        const inputValue: String = (event.target as HTMLInputElement).value as String
        localError.value = props.findErrors(inputValue);
        emits('update:modelValue', inputValue)        
    }
    function changeFocus(value) {
        focused.value = value;
    }
</script>
