'use client'
import React from "react";
import styles from './index.module.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { useMediaQuery } from "@mui/material";

const Vehicle_problem = () => {
    const IsMobile  = useMediaQuery('(max-width:768px)')
    const cards = [
        { img: "/vehicleProblem/fluid-leak.svg", title: "Fluid Leak" },
        { img: "/vehicleProblem/smell-ico.svg", title: "Smell" },
        { img: "/vehicleProblem/smoke.svg", title: "Smoke" },
        { img: "/vehicleProblem/smell.svg", title: "Sound" },
        { img: "/vehicleProblem/warning-light.svg", title: "Warning Light" },
    ];

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <div className={styles.title_box}>
                    <span className={styles.dash}></span>
                    <p className={styles.title}>Is This Is One Of</p>
                </div>
                <p className={styles.heading}>Your Vehicle Problem?</p>

                <div className={styles.grid_cards} style={{display : IsMobile ? "none" : "grid"}} >
                    {cards.map((card, index) => (
                        <div className={styles.card} key={index}>
                            <img src={card.img} alt={card.title} className={styles.images} />
                            <p className={styles.name}>{card.title}</p>
                        </div>
                    ))}
                </div>

                <div className={styles.mobile_swiper}  style={{display : IsMobile ? "block" : "none" , marginTop:"30px"}}>
                    <Swiper
                        modules={[ Autoplay]}
                        autoplay={{ delay: 1000 }}
                        loop={true}
                        spaceBetween={10}
                        breakpoints={{
                            0: {
                                slidesPerView: 2,
                                slidesPerGroup: 1,
                            },
                            768: {
                                slidesPerView: 1,
                                slidesPerGroup: 1,
                            },
                        }}
                    >
                        {cards.map((card, index) => (
                            <SwiperSlide key={index}>
                                <div className={styles.card}>
                                    <img src={card.img} alt={card.title} className={styles.images} />
                                    <p className={styles.name}>{card.title}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Vehicle_problem;