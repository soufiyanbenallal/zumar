import React, { ReactElement, useCallback, useState } from 'react'
import styles from './Carousel.module.scss'
import { Swiper as SwiperComponent, SwiperSlide } from 'swiper/react'
import Swipe, { Thumbs } from 'swiper'
import classNames from 'classnames'

export default function CarouselComponent({
  className,
  images,
}: {
  className?: string
  images: string[]
}): ReactElement {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swipe | null>(null)
  const [activeIndex, setActiveIndex] = useState<number>(0)

  /**
   * bind between thumbs and main carousels
   *
   * @param {string} classes - selected image
   */
  const handleThumbSwiper = useCallback((val: Swipe) => {
    setThumbsSwiper(val)
  }, [])

  /**
   * Render list of sliders for both main thumb carousel
   *
   * @param {string} classes - selected image
   */
  const sliders = useCallback(
    (classes: string): ReactElement[] =>
      images.map((url, key) => {
        return (
          <SwiperSlide
            key={key}
            className={classNames(classes, activeIndex === key && styles.active)}
          >
            <img src={url} alt={url} loading='lazy' />
          </SwiperSlide>
        )
      }),
    [activeIndex, images],
  )

  /**
   * This func used to set the index of current image
   *
   * @param {Swipe} val - selected image
   */
  const handleChange = (val: Swipe): void => {
    setActiveIndex(val.activeIndex)
  }

  return (
    <article className={classNames(className, styles.carousel)}>
      <SwiperComponent
        spaceBetween={5}
        navigation={false}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        onActiveIndexChange={handleChange}
        modules={[Thumbs]}
        className={styles.swipeMain}
      >
        {sliders(styles.slide)}
      </SwiperComponent>
      <SwiperComponent
        onSwiper={handleThumbSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className={styles.swipeThumb}
      >
        {sliders(styles.slide)}
      </SwiperComponent>
    </article>
  )
}
