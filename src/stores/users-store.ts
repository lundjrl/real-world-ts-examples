import type { User } from 'types/schema/user'
import { defineStore } from 'pinia'
import { getUsers } from 'services/model/users'
import { ref } from 'vue'

function store() {
  const users = ref<User[]>([])

  const fetchUsers = async () => {
    const data = await getUsers()
    users.value = data
  }

  return { fetchUsers, users }
}

export const useUserStore = defineStore('users', store)
