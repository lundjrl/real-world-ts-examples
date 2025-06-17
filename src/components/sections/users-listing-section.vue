<script setup lang="ts">
import { useMounted } from '@vueuse/core'
import UserListingCard from 'components/cards/user-listing-card.vue'
import { storeToRefs } from 'pinia'
import { useUserStore } from 'stores/users-store'
import { onMounted } from 'vue'

const isMounted = useMounted()
const storeRef = storeToRefs(useUserStore())

onMounted(async () => {
  await useUserStore().fetchUsers()
})
</script>

<template>
  <div v-if="isMounted" class="flex flex-row flex-wrap gap-y-4 flex-row">
    <UserListingCard v-for="user in storeRef.users.value" :key="user.id" :data="user" />
  </div>
</template>
