import React, { ReactElement, useCallback, useState } from 'react'
import styles from './Carousel.module.scss'
import {
    Swiper as SwiperComponent,
    SwiperProps,
    SwiperSlide,
} from 'swiper/react'
import Swipe, { Thumbs } from 'swiper'
type ThumbType = ((swiper: any) => void) | undefined
const LIST_IMAGES = [
    'https://swiperjs.com/demos/images/nature-1.jpg',
    'https://swiperjs.com/demos/images/nature-2.jpg',
    'https://swiperjs.com/demos/images/nature-3.jpg',
    'https://swiperjs.com/demos/images/nature-4.jpg',
    'https://swiperjs.com/demos/images/nature-5.jpg',
    'https://swiperjs.com/demos/images/nature-6.jpg',
    'https://swiperjs.com/demos/images/nature-7.jpg',
    'https://swiperjs.com/demos/images/nature-8.jpg',
    'https://swiperjs.com/demos/images/nature-9.jpg',
    'https://swiperjs.com/demos/images/nature-10.jpg',
]
export default function CarouselComponent({
    className,
}: {
    className?: string
}) {
    const [thumbsSwiper, setThumbsSwiper] = useState<Swipe | null>(null)

    const handleThumbSwiper = useCallback(
        (val: Swipe) => {
            setThumbsSwiper(val)
        },
        [thumbsSwiper]
    )
    const sliders = useCallback(
        (): ReactElement[] =>
            LIST_IMAGES.map((url, key) => {
                return (
                    <SwiperSlide key={key}>
                        <img src={url} alt={url} loading="lazy" />
                    </SwiperSlide>
                )
            }),
        [thumbsSwiper]
    )

    return (
        <article className={className}>
            {/* <SwiperComponent
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[ Thumbs]}
        className="mySwiper2"
      >
        {sliders()}
      </SwiperComponent>
      <SwiperComponent
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[ Thumbs]}
        className="mySwiper"
      >
       {sliders()}
      </SwiperComponent> */}
        </article>
    )
}
