import React, { ReactElement, useState } from 'react'
import StarRatingComponent from './StarRatingComponent'
import styles from './Rate.module.scss'
import { IRate } from '@modules/product/interfaces'
function RateComponent({ rate }: { rate: IRate }): ReactElement {
  const [rating, setRating] = useState(rate.value)
  const handleChange = (value: number): void => {
    setRating(value)
  }
  return (
    <div className={styles.rate}>
      <StarRatingComponent
        size={40}
        value={rating}
        inactiveColor={'#ddd'}
        onChange={handleChange}
      />
      <p className={styles.count}>
        {rate.value}
        <span className={styles.votes}>({rate.votes})</span>
      </p>
    </div>
  )
}

export default RateComponent
