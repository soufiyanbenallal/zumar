import React, { ReactElement } from 'react'
import { ReactComponent as StarIcon } from '@assets/icons/StarIcon.svg'
import styles from './Rate.module.scss'

interface IStarRatingProps {
  count?: number
  inactiveColor?: string
  value: number
  size?: number
  activeColor?: string
  onChange: (val: number) => void
}
export default function StarRatingComponent(props: IStarRatingProps): ReactElement {
  const {
    count = 5,
    value,
    inactiveColor = '#F9C744',
    size = 24,
    activeColor = '#F9C744',
    onChange,
  } = props
  // short trick
  const stars = Array.from({ length: count }, (key: number) => <StarIcon key={key} />)

  // Internal handle change function
  const handleChange = (val: number): void => {
    onChange(val + 1)
  }

  return (
    <div className={styles.stars}>
      {stars.map((s, index) => {
        let style = inactiveColor
        if (index < value) {
          style = activeColor
        }
        return (
          <span key={index} style={{ color: style }} onClick={() => handleChange(index)}>
            {s}
          </span>
        )
      })}
    </div>
  )
}
