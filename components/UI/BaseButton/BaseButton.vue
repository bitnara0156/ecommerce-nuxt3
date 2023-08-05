<template>
  <button
  class="button"
  :class="type"
  >
    <slot></slot>
    <i v-if="type === 'icon'" :class="props.icon"></i>
  </button>
</template>

<script lang="ts" setup>
  import BaseButtonProps from "../../../interfaces/props/BaseButtonProps";
  const props = defineProps<BaseButtonProps>();
</script>