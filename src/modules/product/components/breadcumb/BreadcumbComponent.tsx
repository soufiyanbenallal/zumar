import React, { ReactElement } from 'react'
import styles from './Breadcumb.module.scss'
export default function BreadcumbComponent(): ReactElement {
  const links = [
    { name: 'Home', path: '#1' },
    { name: 'All Industries', path: '#2' },
    { name: 'Consumer Electronics', path: '#3' },
    { name: 'Mobile Phone & Accessories', path: '#4' },
    { name: 'Mobile Phones', path: '#5' },
  ]
  return (
    <ul className={styles.container}>
      {links.map((link, index) => {
        return (
          <li key={link.name} className={styles.item}>
            <a href={link.path}>{link.name}</a>
            {index !== links.length - 1 && <span>&gt;</span>}
          </li>
        )
      })}
    </ul>
  )
}
