import React from 'react'
import BreadcumbComponent from '../breadcumb/BreadcumbComponent'
import CarouselComponent from '../carousel/CarouselComponent'
import DetailsComponent from '../details/DetailsComponent'
import styles from './MainProduct.module.scss'
export default function MainProductComponent() {
    return (
        <div className={styles.container}>
            <BreadcumbComponent />
            <section className={styles.wrapper}>
                <CarouselComponent className={styles.carousel} />
                <DetailsComponent className={styles.details} />
            </section>
        </div>
    )
}
