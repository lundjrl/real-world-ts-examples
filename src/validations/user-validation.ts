import { UserSchema } from 'types/schema/user'
import type { User } from 'types/schema/user'

export const isValidUser = (user: User) => {
  return UserSchema.safeParse(user).success
}
