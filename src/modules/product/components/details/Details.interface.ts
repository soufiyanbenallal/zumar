import { IBaseProps } from '@/interfaces'
import { IProduct } from '../../interfaces/ProductInterface'

export interface IDetailsProps extends IBaseProps {
  product: IProduct
}
