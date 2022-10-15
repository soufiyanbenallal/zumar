import React, { MouseEvent, ReactElement, useCallback, useEffect, useState } from 'react'
import { ReactComponent as PlusIcon } from '@assets/icons/PlusIcon.svg'
import { ReactComponent as MinusIcon } from '@assets/icons/MinusIcon.svg'
import styles from './Quantity.module.scss'
import { IQuantityProps } from './QuantityInterface'
import { moneyFormat } from '@/utils'

export default function QuantityComponent({
  totalQuantity,
  price,
  onChange,
}: IQuantityProps): ReactElement {
  const [quantity, setQuantity] = useState(1)

  /**
   * This func used to calculate the total price
   *
   * @param {MouseEvent<HTMLButtonElement>} - event to prevent form
   */
  const decrement = useCallback((e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setQuantity((val) => (val > 1 ? --val : 1))
  }, [])

  const increment = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()
      setQuantity((val) => (val < totalQuantity ? ++val : totalQuantity))
    },
    [totalQuantity],
  )

  useEffect(() => {
    onChange?.(quantity)
  }, [onChange, quantity])

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>
        Quantity <span className={styles.price}>{moneyFormat(price * quantity, 0)}</span>{' '}
      </h4>

      <ul className={styles.quantity}>
        <li className={styles.buttonWrapper}>
          <button type='button' className={styles.decrement} onClick={decrement}>
            <MinusIcon />
          </button>
          {/* <input className={} type='number' value={quantity} /> */}
          <div className={styles.input}>{quantity}</div>
          <button type='button' className={styles.increment} onClick={increment}>
            <PlusIcon />
          </button>
        </li>
        <li className={styles.totalQuantity}>
          <p>
            {totalQuantity} Piece{totalQuantity > 1 && 's'}
          </p>
        </li>
      </ul>
    </div>
  )
}
