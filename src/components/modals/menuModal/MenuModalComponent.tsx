import React, { ReactElement, useCallback, useContext } from 'react'
import { Dialog } from '@headlessui/react'
import Button from '@/components/Button/Button'
import { Context } from '@/context'
import { IAppContext } from '@/interfaces'
import styles from './MenuModal.module.scss'
import { ILink } from '@/components/header/nav/NavComponent'
import { HEADER_NAVIGATION } from '@/components/header/Header.const'
import { MenuEnum } from '@/components/header/Header.enum'

export default function MenuModalComponent(): ReactElement {
  const { menuModalOpen, setMenuModalOpen } = useContext<IAppContext>(Context)

  const renderLink = useCallback((link: ILink, key: number): ReactElement => {
    if (MenuEnum.BAG === link.name || MenuEnum.MENU === link.name) {
      return <></>
    }
    return (
      <a key={key} className={styles.link} href={link.path}>
        {link.name}
      </a>
    )
  }, [])
  return (
    <Dialog open={menuModalOpen} onClose={() => setMenuModalOpen?.(false)} className={styles.modal}>
      <Dialog.Panel className={styles.content}>
        <h2 className={styles.title}>
          Menu
          <Button type='native' onClick={() => setMenuModalOpen?.(false)} className={styles.close}>
            x
          </Button>
        </h2>

        <ul className={styles.nav}>
          {HEADER_NAVIGATION.map((link, key): ReactElement => renderLink(link, key))}
        </ul>
      </Dialog.Panel>
    </Dialog>
  )
}
