import React, { MouseEvent, ReactElement, useCallback, useState } from 'react'
import styles from './Quantity.module.scss'
import { ReactComponent as PlusIcon } from '@assets/icons/PlusIcon.svg'
import { ReactComponent as MinusIcon } from '@assets/icons/MinusIcon.svg'

export default function QuantityComponent({
  totalQuantity,
}: {
  totalQuantity: number
}): ReactElement {
  const [quantity, setQuantity] = useState(1)

  const decrement = (e: MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault()
    setQuantity((val) => (val > 1 ? --val : 1))
  }

  const increment = useCallback(
    (e: MouseEvent<HTMLButtonElement>): void => {
      e.preventDefault()
      setQuantity((val) => val++)
    },
    [quantity],
  )

  return (
    <div className={styles.wrapper}>
      <h4 className={styles.title}>Quantity</h4>

      <ul className={styles.quantity}>
        <li className={styles.buttonWrapper}>
          <button className={styles.decrement} onClick={decrement}>
            <MinusIcon />
          </button>
          <input
            className={styles.input}
            type='number'
            min={0}
            max={totalQuantity}
            value={quantity}
            readOnly
          />
          <button className={styles.increment} onClick={increment}>
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
