<template>
  <div class="">
  <div class="relative group">
    <div class="rounded-full border border-gray-300 h-3 w-full absolute top-1/2 -translate-y-1/2 group-hover:border-primary-200 transition-all">
      <div
      class="absolute h-full bg-gray-300 rounded-full group-hover:bg-primary-100 transition-colors"
      :style="getSelectedAreaClasses"
      ></div>
    </div>  
    <div class="relative w-full">
      <input
      step="1"
      :value="minValue"
      @input="onInput($event, 'min')"
      type="range"
      :max="limit"
      ref="left"
      class="range-input absolute top-1/2 -translate-y-1/2 w-full cursor-pointer">
      <input
      step="1"
      :value="maxValue"
      @input="onInput($event, 'max')"
      type="range"
      :max="limit"
      ref="right"
      class="range-input absolute top-1/2 -translate-y-1/2 w-full cursor-pointer">
    </div>
  </div>
  <div class="max-w-full justify-between flex">
    <base-input type="number" placeholder="Min" :value="minValue+''" @change="onInput($event, 'min')" class="w-16"></base-input>
    <base-input type="number" placeholder="Max" :value="maxValue+''" @change="onInput($event, 'max')" class="w-16"></base-input>
  </div>
</div>
</template> 

<script setup lang="ts">
  import { computed } from "vue";
  import BaseInput from '../BaseInput/BaseInput.vue';
  import BaseRangeProps from '../../../interfaces/props/BaseRangeProps';
  const props = defineProps<BaseRangeProps>();
  const emit = defineEmits<{
    (e:`update:minValue` | `update:maxValue`, value: number): void,
  }>();
  const getSelectedAreaClasses = computed(() => {
    if(props.minValue !== undefined && props.maxValue !== undefined) {
      const leftIntend = (props.minValue / (props.limit || 100) * 100)
      const rightIntend = (100 - (props.maxValue / (props.limit || 100) * 100))
      return `left: ${leftIntend}%; right: ${rightIntend}%;`
    }
    return ''
  })
  function onInput(e: Event, side: 'min' | 'max'){
    const input = e.target as HTMLInputElement
    let value = parseInt(input.value);
    if (side === 'max') {
      if (value < props.minValue! +  (props.minimalRange || 0 )) {
        input.value = (props.minValue! + (props.minimalRange || 0 )).toString();
        return
      }
    } else {
      if (value! > props.maxValue! -  (props.minimalRange || 0 )) {
        input.value = (props.maxValue! -  (props.minimalRange || 0 )).toString();
        return
      }
    }
    if(props.limit && value > props.limit) value = props.limit
    if(props.minimum && value < props.minimum) value = props.minimum
    emit(`update:${side}Value`, value)
  }
</script>