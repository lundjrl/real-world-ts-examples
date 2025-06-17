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
  id: z.number(),
  firstName: z.string(),
  lastName: z.string(),
  maidenName: z.string(),
  age: z.number(),
  gender: z.string(),
  email: z.email(),
  phone: z.string(),
  username: z.string(),
  password: z.string(),
  birthDate: z.string(),
  image: z.string(),
  bloodGroup: z.string(),
  height: z.number(),
  weight: z.number(),
  eyeColor: z.string(),
  hair: HairSchema,
  ip: z.string(),
  address: AddressSchema,
  macAddress: z.string(),
  university: z.string(),
  bank: BankSchema,
  company: CompanySchema,
  ein: z.string(),
  ssn: z.string(),
  userAgent: z.string(),
  crypto: CryptoSchema,
  role: z.string(),
})

export type User = z.infer<typeof UserSchema>
