import { IBaseProps } from '@/interfaces'
import React, { ReactElement } from 'react'
import styles from './Details.module.scss'
export default function DetailsComponent({ className }: IBaseProps): ReactElement {
  return <article className={className}>DetailsComponent</article>
}
