import React, { ReactElement } from 'react'
import CategoriesComponent from '@components/header/search/categories/CategoriesComponent'
import { IBaseProps } from '@/interfaces'
import { ReactComponent as SearchIcon } from '@assets/icons/SearchIcon.svg'
import styles from './Search.module.scss'
import classNames from 'classnames'
interface ISearchProps extends IBaseProps {
  isModal?: boolean
}
export default function SearchComponent({
  className,
  isModal = false,
}: ISearchProps): ReactElement {
  return (
    <form className={classNames(styles.form, className, isModal && styles.isModal)}>
      <CategoriesComponent className={styles.categories} />
      <div className={styles.control}>
        <button>
          <SearchIcon />
        </button>
        <input type='text' name='q' placeholder='Search by product name or seller' />
      </div>
    </form>
  )
}
