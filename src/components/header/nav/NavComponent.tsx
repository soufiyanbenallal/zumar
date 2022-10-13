import React, { ReactElement } from 'react'
import styles from './Nav.module.scss'
import { HEADER_NAVIGATION } from '@components/header/Header.const'
export default function NavComponent(): ReactElement {
  return (
    <ul className={styles.nav}>
      {HEADER_NAVIGATION.map(
        (link, key): ReactElement => (
          <li className={styles.linkWrapper} key={key}>
            <a href={link.path}>{link.name}</a>
          </li>
        ),
      )}
    </ul>
  )
}
