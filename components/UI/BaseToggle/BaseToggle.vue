<template>
    <div class="flex gap-4 items-center cursor-pointer group" @click="changeCondition">
        <small class="text-gray-600 select-none" v-if="label">{{ label }}</small>
        <div class="bg-gray-200 rounded-full h-4 w-10 flex cursor-pointer border border-gray-300 relative transition-all">
            <div
            :class="
                {
                    'right-0 translate-x-1/3 bg-primary-200 group-hover:bg-primary-300 group-hover:shadow-[0_0_10px_.2px_#a5b4fc]': modelValue,
                    'left-0 -translate-x-1/3 bg-gray-300 group-hover:bg-gray-400 group-hover:shadow-[0_0_5px_.1px_#6b7280]': !modelValue,
                }
            "
            class="h-[calc(5.5_*_0.25rem)] w-[calc(5.5_*_0.25rem)] rounded-full  absolute top-1/2 -translate-y-1/2 transition-all"
            >
            </div>
        </div>
        <small class="text-gray-600 select-none" :class="{
            'text-primary-200': props.modelValue
        }" v-if="message">{{ message }}</small>
    </div>
</template>

<script setup lang="ts">
    import BaseToggleProps from "../../../interfaces/props/BaseToggleProps";
    import { computed } from 'vue';
    const props = defineProps(BaseToggleProps);

    const message = computed(() => {
        if(!props.message) return ''
        return props.modelValue
            ? props.message.truphyCondition
            : props.message.falsyCondition
    });
    const emits = defineEmits<{
       (event: 'update:modelValue', value: Boolean): void
    }>()
    function changeCondition() {
        emits('update:modelValue', !props.modelValue);
    }
</script>