<script setup lang="ts">
import ValidationButton from 'components/pressables/validation-button.vue'
import UsersListingSection from 'components/sections/users-listing-section.vue'
import BasicLayout from 'layouts/basic.vue'
</script>

<template>
  <BasicLayout>
    <div class="flex flex-col">
      <Heading as="h1">
        Typescript Users Example
      </Heading>
      <div class="py-2">
        <ValidationButton />
      </div>
      <div class="py-4">
        <UsersListingSection />
      </div>
    </div>
  </BasicLayout>
</template>
