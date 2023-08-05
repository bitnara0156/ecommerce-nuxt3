<template>
  <div class="w-full flex gap-3 items-center">
    <base-input type="number" placeholder="Min" :value="minValue+''" @change="onInput($event, 'min')" class="min-w-[calc(14_*_0.25rem)] -mt-4 text-center" v-if="textInput === 'min' || textInput === true" />
    <div class="relative group w-full min-w-[64*.25rem]">
      <div class="rounded-full border border-gray-300 bg-primary-100 h-1 w-full absolute top-1/2 -translate-y-1/2 transition-all">
        <div
        class="absolute h-full rounded-full bg-primary-400 transition-colors"
        :style="getSelectedAreaClasses"
        ></div>
      </div>  
      <div class="relative w-full">
        <input
        :step="step"
        :value="minValue"
        @input="onInput($event, 'min')"
        type="range"
        :max="limit"
        ref="left"
        class="range-input absolute top-1/2 -translate-y-1/2 w-full cursor-pointer">
        <input
        v-if="maxValue !== undefined"
        :step="step"
        :value="maxValue"
        @input="onInput($event, 'max')"
        type="range"
        :max="limit"
        ref="right"
        class="range-input absolute top-1/2 -translate-y-1/2 w-full cursor-pointer">
      </div>
    </div>
    <base-input type="number" placeholder="Max" :value="maxValue+''" @change="onInput($event, 'max')" class="min-w-[calc(14_*_0.25rem)] -mt-4 text-center" v-if="(textInput === 'max' || textInput === true) && maxValue !== undefined"  /> 
  </div>
</template> 

<script setup lang="ts">
  import { computed, toRefs } from "vue";
  import { normalize, stylize } from ".";
  import BaseInput from '../BaseInput/BaseInput.vue';
  import BaseRangeProps from '../../../interfaces/props/BaseRangeProps';

  const props = withDefaults(defineProps<BaseRangeProps>(), {
    limit: 100,
    minimum: 0,
    minValue: 0,
    minimalRange: 5,
    textInput: false,
    step: 1,
  });
  const { limit, minValue, maxValue, textInput, minimalRange } = toRefs(props);

  const emit = defineEmits<{
    (e:`update:minValue` | `update:maxValue`, value: number): void,
  }>();
  const getSelectedAreaClasses = computed(() => {
    if(!minValue || !maxValue) return
    return stylize(minValue.value!, maxValue.value!, limit.value)
  })
  function onInput(e: Event, side: 'min' | 'max'){
    const input = e.target as HTMLInputElement
    let value = parseInt(input.value);
    if(Number.isNaN(value)) value = 0
    input.value = (normalize(minValue?.value!, maxValue?.value!, value, side, minimalRange.value)).toString();
    emit(`update:${side}Value`, parseInt(input.value));
  }
</script>