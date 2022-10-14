import { CurrencyEnum } from '@/enums'
export interface IRate {
  value: number
  votes: number
}
export interface IPieces {
  range: string
  price: number
  currency: keyof typeof CurrencyEnum
}
export interface IStorage {
  value: number
  unit: string
}
export interface IShipping {
  title: string
  estimated: Array<number>
  price: number
}
export interface IProduct {
  id: string
  title: string
  code: string
  rate: IRate
  images: Array<string>
  price: number
  currency: keyof typeof CurrencyEnum
  variants: {
    pieces: IPieces[]
    colors: string[]
    storage: IStorage[]
    shipping: IShipping[]
  }
}
