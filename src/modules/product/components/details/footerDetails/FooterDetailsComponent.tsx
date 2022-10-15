import Button from '@components/Button/Button'
import React, { ReactElement } from 'react'
import { ReactComponent as CallUsIcon } from '@assets/icons/CallUsIcon.svg'
import styles from './FooterDetails.module.scss'
export default function FooterDetailsComponent(): ReactElement {
  return (
    <div className={styles.wrapper}>
      <dd className={styles.total}>
        <h4>TOTAL</h4>
        <dl>{/* {product.currency} {total} */}</dl>
      </dd>
      <div className={styles.footerDetails}>
        <Button type='primary' className={styles.button}>
          <span>Place order now</span>
        </Button>
        <Button type='secondary' className={styles.button}>
          <CallUsIcon />
          <span>Call us</span>
        </Button>
        <p className={styles.available}>We are 24/7 available</p>
      </div>
    </div>
  )
}
