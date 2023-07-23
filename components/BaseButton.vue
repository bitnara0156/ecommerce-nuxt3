<template>
  <button class="button"
  :class="props.type"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import {ButtonType} from "../interfaces/props/BaseButtonProps"
import { PropType } from "nuxt/dist/app/compat/capi";
    const props = defineProps({
       type: {
        type: String as PropType<ButtonType>
       }
    })

</script>