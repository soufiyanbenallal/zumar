import React, { ReactElement } from 'react'
import styles from '@components/header/Header.module.scss'
import NavComponent from './nav/NavComponent'
import { ReactComponent as LogoIcon } from '@assets/icons/LogoIcon.svg'
import SearchComponent from '@components/header/search/SearchComponent'
export default function HeaderComponent(): ReactElement {
    // const menu =
    return (
        <header className={styles.header}>
            <nav className={styles.container}>
                <LogoIcon />
                <SearchComponent />
                <NavComponent />
            </nav>
        </header>
    )
}
