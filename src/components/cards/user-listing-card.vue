<script setup lang="ts">
import type { User } from 'types/schema/user'
import Paragraph from 'components/typography/paragraph/paragraph.vue'
import { Avatar, AvatarFallback, AvatarImage } from 'components/ui/avatar'
import { computed } from 'vue'
import { twMerge } from 'tailwind-merge'

export interface Props {
  data: User
}

const props = defineProps<Props>()

const name = computed(() => `${props.data.firstName} ${props.data.lastName}`)

const titleColor = () => {
  const {title} = props.data.company

  if (title.includes('Chief')) return 'text-chart-1'
  if (title.includes('Manager')) return 'text-chart-2'
  if (title.includes('Admin')) return 'text-destructive'
  if (title.includes('Analyst')) return 'text-chart-4'
  return 'text-chart-5'
}

const titleStyle = twMerge('font-bold', titleColor())
</script>

<template>
  <div class="basis-1/3 p-2">
    <div class="rounded-lg bg-primary py-2 px-3 border-gray-100 shadow shadow-gray-600">
      <Avatar class="mb-2 h-14 w-14">
        <AvatarImage :src="props.data.image" :alt="`Profile image for ${name}`" />
        <AvatarFallback>Profile Image of {{ name }}</AvatarFallback>
      </Avatar>

      <Paragraph as="pg-lg" class="font-bold text-secondary">
        {{ name }}
      </Paragraph>
      <Paragraph :class="titleStyle">
        {{ props.data.company.title }}
      </Paragraph>
    </div>
  </div>
</template>
