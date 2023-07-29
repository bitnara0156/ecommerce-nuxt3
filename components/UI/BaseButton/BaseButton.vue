<template>
  <button class="button"
  :class="props.type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
  import BaseButtonProps from "../../../interfaces/props/BaseButtonProps";
  const props = defineProps(BaseButtonProps);

</script>