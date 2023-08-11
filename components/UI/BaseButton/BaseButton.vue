<template>
  <button
  class="button"
  :class="theme"
  >
    <slot></slot>
    <i v-if="theme === 'icon'" :class="props.icon"></i>
  </button>
</template>

<script lang="ts" setup>
  import BaseButtonProps from "../../../interfaces/props/BaseButtonProps";
  const props = defineProps<BaseButtonProps>();
</script>