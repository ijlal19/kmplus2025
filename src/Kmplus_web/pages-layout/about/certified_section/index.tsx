'use client'
import React from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import styles from './index.module.scss';



const Certified = () => {

    const CardData  = [
        {
            url:"/AboutImages/130px-Sirim_logo.webp"
        },
        {
            url:"/AboutImages/Buatan-Malaysia.png"
        },
        {
            url:"/AboutImages/reach-Compliance.webp"
        },
        {
            url:"/AboutImages/nano-Verified.webp"
        },
        {
            url:"/AboutImages/SGS-Logo.png"
        },
        {
            url:"/AboutImages/TUV-Rheinland-Logo.png"
        },
    ]

    return (
        <div className={styles.main}>
                <h1 className={styles.heading} >Certified By</h1>
            <div className={styles.container}>
                <Swiper
                    modules={[Autoplay]}
                    autoplay={{ delay: 500 }}
                    loop={true}
                    spaceBetween={10}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                        },
                        768: {
                            slidesPerView: 4,
                            slidesPerGroup: 1,
                        },
                    }}
                >
                    {CardData.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className={styles.card}>
                                <img src={card.url} alt="" className={styles.images} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
export default Certified