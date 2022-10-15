import React, { ReactElement, useCallback, useContext } from 'react'
import styles from './Nav.module.scss'
import { HEADER_NAVIGATION } from '@components/header/Header.const'
import { ReactComponent as BagIcon } from '@assets/icons/BagIcon.svg'
import { MenuEnum, MenuPathEnum } from '../Header.enum'
import classNames from 'classnames'
import { IAppContext, IBaseProps } from '@/interfaces'
import { Context } from '@/context'
export interface ILink {
  name: MenuEnum
  path: MenuPathEnum
}
export default function NavComponent({ className }: IBaseProps): ReactElement {
  const { setMenuModalOpen } = useContext<IAppContext>(Context)

  const MenuIcon = useCallback((): ReactElement => {
    return (
      <button className={styles.menu} onClick={() => setMenuModalOpen?.(true)}>
        <span></span>
        <span></span>
      </button>
    )
  }, [setMenuModalOpen])
  const renderLink = (link: ILink): ReactElement => {
    switch (link.name) {
      case MenuEnum.BAG:
        return (
          <button className={styles.bag}>
            <span className={styles.badge}>2</span>
            <BagIcon />
          </button>
        )

      case MenuEnum.MENU:
        return <MenuIcon />

      default:
        return (
          <a className={styles.link} href={link.path}>
            {link.name}
          </a>
        )
    }
  }

  return (
    <ul className={classNames(styles.nav, className)}>
      {HEADER_NAVIGATION.map(
        (link, key): ReactElement => (
          <li key={key}>{renderLink(link)}</li>
        ),
      )}
    </ul>
  )
}
