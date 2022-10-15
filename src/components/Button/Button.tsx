import React, { MouseEvent, ReactElement } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { IBaseProps } from '@/interfaces'
interface IButtonProps extends IBaseProps {
  type: 'primary' | 'secondary' | 'native'
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}
export default function Button({ className, children, type, onClick }: IButtonProps): ReactElement {
  return (
    <button onClick={onClick} className={classNames(className, styles.button, styles[type])}>
      {children}
    </button>
  )
}
