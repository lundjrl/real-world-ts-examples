import type { User } from 'types/schema/user'
import { defineStore } from 'pinia'
import { createUser, getUsers } from 'services/model/users'
import { ref } from 'vue'

function store() {
  const users = ref<User[]>([])

  const fetchUsers = async () => {
    const data = await getUsers()
    users.value = data
  }

  const addUser = async (user: Partial<User>) => {
    const data = await createUser(user)

    if (!data)
      return

    users.value = [data, ...users.value]
  }

  return { addUser, fetchUsers, users }
}

export const useUserStore = defineStore('users', store)
