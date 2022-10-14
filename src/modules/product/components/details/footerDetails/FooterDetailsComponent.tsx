import Button from '@components/Button/Button'
import React, { ReactElement } from 'react'
import { ReactComponent as CallUsIcon } from '@assets/icons/CallUsIcon.svg'
import styles from './FooterDetails.module.scss'
export default function FooterDetailsComponent(): ReactElement {
  return (
    <div className={styles.footerDetails}>
      <Button type='primary'>
        <span>Place order now</span>
      </Button>
      <Button type='secondary'>
        <CallUsIcon />
        <span>Call us</span>
      </Button>
      <p className={styles.available}>We are 24/7 available</p>
    </div>
  )
}
