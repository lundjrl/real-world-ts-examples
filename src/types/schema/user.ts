import { z } from 'zod/v4'

const HairSchema = z.object({
  color: z.string(),
  type: z.string(),
})

const CoordinatesSchema = z.object({
  lat: z.number(),
  lng: z.number(),
})

const AddressSchema = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  stateCode: z.string(),
  postalCode: z.string(),
  coordinates: CoordinatesSchema,
  country: z.string(),
})

const BankSchema = z.object({
  cardExpire: z.string(),
  cardNumber: z.string(),
  cardType: z.string(),
  currency: z.string(),
  iban: z.string(),
})

const Address2 = z.object({
  address: z.string(),
  city: z.string(),
  state: z.string(),
  stateCode: z.string(),
  postalCode: z.string(),
  coordinates: CoordinatesSchema,
  country: z.string(),
})

const CompanySchema = z.object({
  department: z.string(),
  name: z.string(),
  title: z.string(),
  address: Address2,
})

const CryptoSchema = z.object({
  coin: z.string(),
  wallet: z.string(),
  network: z.string(),
})

export const UserSchema = z.object({
  id: z.optional(z.number()),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.optional(z.string()),
  age: z.optional(z.number()),
  gender: z.optional(z.string()),
  email: z.email({}),
  phone: z.optional(z.string()),
  username: z.optional(z.string()),
  password: z.optional(z.string()),
  birthDate: z.optional(z.string()),
  image: z.optional(z.string()),
  bloodGroup: z.optional(z.string()),
  height: z.optional(z.number()),
  weight: z.optional(z.number()),
  eyeColor: z.optional(z.string()),
  hair: z.optional(HairSchema),
  ip: z.optional(z.string()),
  address: z.optional(AddressSchema),
  macAddress: z.optional(z.string()),
  university: z.optional(z.string()),
  bank: z.optional(BankSchema),
  company: z.optional(CompanySchema),
  ein: z.optional(z.string()),
  ssn: z.optional(z.string()),
  userAgent: z.optional(z.string()),
  crypto: z.optional(CryptoSchema),
  role: z.optional(z.string()),
})

export type User = z.infer<typeof UserSchema>
