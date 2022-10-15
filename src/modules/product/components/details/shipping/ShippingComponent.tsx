import { IShipping } from '@modules/product/interfaces'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import React, { Fragment, ReactElement, useState } from 'react'
import styles from './Shipping.module.scss'
import { moneyFormat } from '@/utils'

export default function ShippingComponent({ shippings }: { shippings: IShipping[] }): ReactElement {
  const [shipping, setShipping] = useState(shippings[0])
  return (
    <div className={styles.wrapper}>
      <h5 className={styles.title}>
        Shipping
        <span className={styles.price}>{moneyFormat(shipping.price, 0)}</span>{' '}
      </h5>
      <RadioGroup
        value={shipping}
        onChange={setShipping}
        className={styles.list}
        as='ul'
        id='shipping'
      >
        {shippings.map(
          (item: IShipping, key: number): ReactElement => (
            <RadioGroup.Option key={key} value={item} as={Fragment}>
              {({ checked }) => (
                <li className={classNames(styles.item, checked && styles.active)}>
                  <p className={styles.title}>
                    {item.title}{' '}
                    <small className={styles.estimated}>Estimated {item.estimated} days</small>
                  </p>
                </li>
              )}
            </RadioGroup.Option>
          ),
        )}
      </RadioGroup>
    </div>
  )
}
