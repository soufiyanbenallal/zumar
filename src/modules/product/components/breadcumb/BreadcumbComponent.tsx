import React, { ReactElement } from 'react'
import styles from './Breadcumb.module.scss'
export default function BreadcumbComponent(): ReactElement {
  return (
    <section className={styles.container}>
      <div>
        Home &gt; All Industries &gt; Consumer Electronics &gt; Mobile Phone & Accessories &gt;
        Mobile Phones
      </div>
    </section>
  )
}
