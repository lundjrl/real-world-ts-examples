import type { User } from 'types/schema/user'
import { UserSchema } from 'types/schema/user'

export function isValidUser(user: Partial<User>) {
  return UserSchema.safeParse(user)
}
