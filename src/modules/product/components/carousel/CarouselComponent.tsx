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
  images: Array<string>
}): ReactElement {
  const [thumbsSwiper, setThumbsSwiper] = useState<Swipe | null>(null)

  const handleThumbSwiper = useCallback((val: Swipe) => {
    setThumbsSwiper(val)
  }, [])
  const sliders = useCallback(
    (classes: string): ReactElement[] =>
      images.map((url, key) => {
        return (
          <SwiperSlide key={key} className={classes}>
            <img src={url} alt={url} loading='lazy' />
          </SwiperSlide>
        )
      }),
    [images],
  )

  return (
    <article className={classNames(className, styles.carousel)}>
      <SwiperComponent
        style={{ width: '100%' }}
        spaceBetween={10}
        navigation={true}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
        modules={[Thumbs]}
        className='mySwiper2'
      >
        {sliders(styles.slideMain)}
      </SwiperComponent>
      <SwiperComponent
        style={{ width: '100%' }}
        onSwiper={handleThumbSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[Thumbs]}
        className='mySwiper'
      >
        {sliders(styles.slideThumb)}
      </SwiperComponent>
    </article>
  )
}
