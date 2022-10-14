import React, { ReactElement } from 'react'
import CategoriesComponent from '@components/header/search/categories/CategoriesComponent'
import { IBaseProps } from '@/interfaces'
import { ReactComponent as SearchIcon } from '@assets/icons/SearchIcon.svg'
import styles from './Search.module.scss'
import classNames from 'classnames'
export default function SearchComponent({ className }: IBaseProps): ReactElement {
  return (
    <form className={classNames(styles.form, className)}>
      <CategoriesComponent />
      <div className={styles.control}>
        <SearchIcon />
        <input type='text' placeholder='Search by product name or seller' />
      </div>
    </form>
  )
}
