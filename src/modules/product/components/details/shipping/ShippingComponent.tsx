import React, { Fragment, ReactElement, useEffect, useState } from 'react'
import { IShipping } from '@modules/product/interfaces'
import { RadioGroup } from '@headlessui/react'
import classNames from 'classnames'
import { moneyFormat } from '@/utils'
import styles from './Shipping.module.scss'
import { IShippingProps } from './ShippingInterface'

export default function ShippingComponent({ shippings, onChange }: IShippingProps): ReactElement {
  const [shipping, setShipping] = useState(shippings[1])

  /**
   * This life cycle listing to changes of shipping type and send price to parent component for calculation total
   *
   * @hooks {number} - total price
   */
  useEffect(() => {
    onChange?.(shipping.price || 0)
  }, [onChange, shipping])

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
                    <small className={styles.estimated}>
                      Estimated {item.estimated[0]} - {item.estimated[1]} days
                    </small>
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
