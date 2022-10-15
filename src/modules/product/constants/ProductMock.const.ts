import image5 from '@assets/images/image 5.png'
import image6 from '@assets/images/image 6.png'
import image7 from '@assets/images/image 7.png'
import image8 from '@assets/images/image 8.png'
import { IProduct } from '../interfaces/ProductInterface'
export const LIST_IMAGES = [image5, image6, image7]

export const PRODUCT_MOCK: IProduct = {
  id: '1',
  title: 'Single SIM 11 Pro Max Phone Gold 512GB6.5 Inch Hot Selling Phone Wholesale ',
  code: '578902-00',
  rate: {
    value: 4.6,
    votes: 200,
  },
  images: LIST_IMAGES,
  price: 12000,
  quantity: 51,
  currency: '$',
  variants: {
    pieces: [
      { range: '10 - 25', price: 115050.0, currency: 'AED' },
      { range: '10 - 25', price: 1145.0, currency: '$' },
      { range: '10 - 25', price: 1145.0, currency: '$' },
    ],
    colors: ['Red', 'Black', 'Green'],
    storage: [
      { value: 128, unit: 'GB' },
      { value: 256, unit: 'GB' },
      { value: 512, unit: 'GB' },
    ],
    shipping: [
      { title: 'Free', estimated: [15, 30], price: 0 },
      { title: 'Fast', estimated: [5, 7], price: 100 },
      { title: 'Rocket', estimated: [2, 5], price: 500 },
    ],
  },
}
