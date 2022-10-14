import React, { ReactElement } from 'react'
import classNames from 'classnames'
import styles from './Button.module.scss'
import { IBaseProps } from '@/interfaces'
interface IButtonProps extends IBaseProps {
  type: 'primary' | 'secondary'
}
export default function Button({ className, children, type }: IButtonProps): ReactElement {
  return <button className={classNames(className, styles.button, styles[type])}>{children}</button>
}
