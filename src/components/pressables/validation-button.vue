<script setup lang="ts">
import type { User } from 'types/schema/user'
import { Button } from 'components/ui/button'
import { Input } from 'components/ui/input'
import { Label } from 'components/ui/label'
import { useUserStore } from 'stores/users-store'
import { ref } from 'vue'

const DEFAULT_FORM = {
  firstName: '',
  lastName: '',
  email: '',
}

const form = ref<Partial<User>>({ ...DEFAULT_FORM })

type FN = () => void

const handleReset: FN = () => {
  form.value = DEFAULT_FORM
}

const handleSubmit: FN = async () => {
  await useUserStore().addUser(form.value)
}
</script>

<template>
  <form class="w-1/2" @reset="handleReset" @submit.prevent="handleSubmit">
    <!-- Form Fields -->
    <div class="grid items-center gap-1.5">
      <Label for="firstName">First Name</Label>
      <Input id="firstName" v-model="form.firstName" type="text" />
    </div>

    <div class="grid items-center py-4 gap-1.5">
      <Label for="lastName">Last Name</Label>
      <Input id="lastName" v-model="form.lastName" type="text" />
    </div>

    <div class="grid items-center gap-1.5">
      <Label for="email">Email</Label>
      <Input id="email" v-model="form.email" type="email" />
    </div>

    <!-- Form Actions -->
    <div class="flex flex-row-reverse mt-10 gap-2">
      <Button
        type="submit"
        class="cursor-pointer"
      >
        Create New User
      </Button>

      <Button class="cursor-pointer" variant="destructive" type="reset">
        Reset Form
      </Button>
    </div>
  </form>
</template>
