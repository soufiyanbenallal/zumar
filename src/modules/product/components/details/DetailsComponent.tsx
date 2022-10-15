import classNames from 'classnames'
import React, { ReactElement, useEffect, useState } from 'react'
import ColorsComponent from './colors/ColorsComponent'
import { IDetailsProps } from './Details.interface'
import styles from './Details.module.scss'
import FooterDetailsComponent from './footerDetails/FooterDetailsComponent'
import PiecesComponent from './pieces/PiecesComponent'
import QuantityComponent from './quantity/QuantityComponent'
import RateComponent from './rate/RateComponent'
import ShippingComponent from './shipping/ShippingComponent'
import StorageComponent from './storage/StorageComponent'

export default function DetailsComponent({ className, product }: IDetailsProps): ReactElement {
  const [total, setTotal] = useState(0)
  useEffect(() => {
    const calcTotal = product.price
    setTotal(calcTotal)
  }, [product.price])

  return (
    <form className={classNames(className, styles.wrapper)}>
      <h2 className={styles.title}>{product.title}</h2>
      <div className={styles.flex}>
        <p className={styles.code}>Product Code: {product.code}</p>
        <RateComponent rate={product.rate} />
      </div>
      <PiecesComponent pieces={product.variants.pieces} />
      <ColorsComponent colors={product.variants.colors} />
      <StorageComponent storages={product.variants.storage} />
      <div className={styles.box}>
        <QuantityComponent totalQuantity={product.quantity} />
        <ShippingComponent shippings={product.variants.shipping} />
        <FooterDetailsComponent />
      </div>
    </form>
  )
}
