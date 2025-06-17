import type { User } from 'types/schema/user'

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
