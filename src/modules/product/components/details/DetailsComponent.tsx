import React, { ReactElement } from 'react'
import ColorsComponent from './colors/ColorsComponent'
import { IDetailsProps } from './Details.interface'
import styles from './Details.module.scss'
import QuantityComponent from './quantity/QuantityComponent'
import RateComponent from './rate/RateComponent'
import ShippingComponent from './shipping/ShippingComponent'
import StorageComponent from './storage/StorageComponent'

export default function DetailsComponent({ className, product }: IDetailsProps): ReactElement {
  return (
    <article className={className}>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.flex}>
        <p className={styles.code}>Product Code: {product.code}</p>
        <RateComponent rate={product.rate} />
      </div>
      <ColorsComponent />
      <QuantityComponent />
      <ShippingComponent />
      <StorageComponent />
    </article>
  )
}
