<script setup lang="ts">
import type { DialogDescriptionProps } from 'reka-ui'
import type { HTMLAttributes } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { DialogDescription } from 'reka-ui'
import { cn } from '@/lib/utils'

const props = defineProps<DialogDescriptionProps & { class?: HTMLAttributes['class'] }>()

const delegatedProps = reactiveOmit(props, 'class')
</script>

<template>
  <DialogDescription
    data-slot="sheet-description"
    :class="cn('text-neutral-500 text-sm dark:text-neutral-400', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </DialogDescription>
</template>
