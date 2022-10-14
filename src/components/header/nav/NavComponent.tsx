import React, { ReactElement, useCallback } from 'react'
import styles from './Nav.module.scss'
import { HEADER_NAVIGATION } from '@components/header/Header.const'
import { ReactComponent as BagIcon } from '@assets/icons/BagIcon.svg'
import { MenuEnum, MenuPathEnum } from '../Header.enum'
export interface ILink {
  name: MenuEnum
  path: MenuPathEnum
}
export default function NavComponent(): ReactElement {
  const MenuIcon = useCallback((): ReactElement => {
    return (
      <button className={styles.menu}>
        <span></span>
        <span></span>
      </button>
    )
  }, [])
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
    <ul className={styles.nav}>
      {HEADER_NAVIGATION.map(
        (link, key): ReactElement => (
          <li key={key}>{renderLink(link)}</li>
        ),
      )}
    </ul>
  )
}
