import React, { ReactElement } from 'react'
import { PRODUCT_MOCK } from '../../constants/ProductMock.const'
import BreadcumbComponent from '../breadcumb/BreadcumbComponent'
import CarouselComponent from '../carousel/CarouselComponent'
import DetailsComponent from '../details/DetailsComponent'
import styles from './MainProduct.module.scss'

export default function MainProductComponent(): ReactElement {
  return (
    <div className={styles.container}>
      <BreadcumbComponent />
      <section className={styles.wrapper}>
        <CarouselComponent className={styles.carousel} images={PRODUCT_MOCK.images} />
        <DetailsComponent className={styles.details} product={PRODUCT_MOCK} />
      </section>
    </div>
  )
}
