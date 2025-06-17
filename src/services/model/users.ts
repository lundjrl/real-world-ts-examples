import type { User } from 'types/schema/user'
import { isValidUser } from 'validations/user-validation'

export async function getUsers(): Promise<User[]> {
  const baseUrl = import.meta.env.VITE_API_BASE_URL

  const url = new URL(`${baseUrl}/users/`)

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Access-Control-Allow-Origin', '*')

  const params: Partial<RequestInit> = {
    headers,
    method: 'GET',
    body: null,
  }

  const response = await fetch(url.toString(), params)
  const json = await response.json()
  return json.users
}

export async function createUser(user: User): Promise<User[] | string> {
  const isValid = isValidUser(user)

  if (!isValid.success) {
    return isValid.error.message
  }

  const baseUrl = import.meta.env.VITE_API_BASE_URL

  const url = new URL(`${baseUrl}/users/add`)

  const headers = new Headers()
  headers.set('Content-Type', 'application/json')
  headers.set('Access-Control-Allow-Origin', '*')

  const params: Partial<RequestInit> = {
    headers,
    method: 'POST',
    body: JSON.stringify(user),
  }

  const response = await fetch(url.toString(), params)
  const json = await response.json()
  return json.users
}
