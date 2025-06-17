<script setup lang="ts">
import type { User } from 'types/schema/user'
import { Button } from 'components/ui/button'
import { createUser } from 'services/model/users'

const fakeFormData: Partial<User> = {
  firstName: 'John',
  lastName: 'Smith',
}
</script>

<template>
  <Button
    class="cursor-pointer"
    @click="() => createUser(fakeFormData)"
  >
    Create New User
  </Button>
</template>
