import { IShipping } from '@/modules/product/interfaces'

export interface IShippingProps {
  shippings: IShipping[]
  onChange?: (val: number) => void
}
